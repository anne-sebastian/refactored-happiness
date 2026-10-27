import { useEffect, useState } from 'react'
import { AutoStories, Code, FitnessCenter, IconButton, Landscape, NaturePeople, Palette, Tooltip, Typography } from '../../../components/ui/mui'

const hobbies = [
  ['NaturePeople', NaturePeople, 'I like to, in my spare time, explore, learn, and experiment with emerging frontend frameworks and advanced UI/UX concepts.'],
  ['Code', Code, 'I like to, in my spare time, explore, learn, and experiment with emerging frontend frameworks and advanced UI/UX concepts.'],
  ['Palette', Palette, 'I try creative arts by practicing watercolor painting and sketching to refine spatial design and color theory.'],
  ['FitnessCenter', FitnessCenter, 'I enjoy working on fitness and endurance and achieving new milestones.'],
  ['AutoStories', AutoStories, 'I read science fiction.'],
  ['Landscape', Landscape, 'I enjoy quiet landscapes and finding fresh visual inspiration.'],
] as const

export function HobbiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % hobbies.length), 3000)
    return () => window.clearInterval(timer)
  }, [])

  const activeHobby = hobbies[activeIndex] ?? hobbies[0]
  const [iconName, Icon, description] = activeHobby

  return (
    <footer>
      <Tooltip title={<Typography sx={{ p: 1, maxWidth: 280 }}>{description}</Typography>} arrow>
        <IconButton color="secondary" aria-label={`Hobby: ${iconName}`} sx={{ '& .MuiSvgIcon-root': { fontSize: '2.5rem' } }}><Icon /></IconButton>
      </Tooltip>
    </footer>
  )
}

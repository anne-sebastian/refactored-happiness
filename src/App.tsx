import { useState } from 'react'
import { Alert, Box, CloseIcon, Container, CssBaseline, IconButton, SentimentSatisfiedAlt, Snackbar, ThemeProvider, ThumbUpOffAlt } from './components/ui/mui'
import { createResumeTheme } from './components/ui/mui/theme'
import { ResumeTimeline } from './components/ui/customized'
import { Header } from './resume/header'
import { About } from './resume/body/about'
import { Skills } from './resume/body/skills'
import { Experience } from './resume/body/experience'
import { HobbiesSection } from './resume/footer'
import './App.css'

type ThemeMode = 'light' | 'dark' | 'seasons'
type ResumeSection = 'About' | 'Skills' | 'Experience'

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const [activeSection, setActiveSection] = useState<ResumeSection>('About')
  const [skillsSnackbarOpen, setSkillsSnackbarOpen] = useState(false)
  const [hasVisitedSkills, setHasVisitedSkills] = useState(false)
  const theme = createResumeTheme(themeMode)

  const handleSectionSelect = (section: string) => {
    const nextSection = section as ResumeSection
    setActiveSection(nextSection)
    if (nextSection === 'Skills' && !hasVisitedSkills) {
      setHasVisitedSkills(true)
      setSkillsSnackbarOpen(true)
    }
  }

  const sectionContent = {
    About: <About />,
    Skills: <Skills />,
    Experience: <Experience />,
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" component="main" className="resume-shell">
        <Header themeMode={themeMode} onThemeModeChange={setThemeMode} />
        <Box component="section" className="resume-content" aria-label="Resume sections">
          <Box className="resume-navigation"><ResumeTimeline activeSection={activeSection} onSelect={handleSectionSelect} /></Box>
          <Box className="resume-panel">{sectionContent[activeSection]}</Box>
        </Box>
        <HobbiesSection />
        <Snackbar open={skillsSnackbarOpen} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert
            severity="success"
            icon={<Box sx={{ display: 'flex', gap: 0.5 }}><SentimentSatisfiedAlt /><ThumbUpOffAlt /></Box>}
            action={<IconButton color="inherit" size="small" onClick={() => setSkillsSnackbarOpen(false)} aria-label="Close message"><CloseIcon fontSize="small" /></IconButton>}
          >
            Thanks for taking the time to view my profile!
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  )
}

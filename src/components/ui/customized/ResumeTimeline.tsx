import { Box, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, Typography } from '../mui'

type ResumeTimelineProps = {
  activeSection: string
  onSelect: (section: string) => void
}

export function ResumeTimeline({ activeSection, onSelect }: ResumeTimelineProps) {
  const sections = ['About', 'Skills', 'Experience']

  return (
    <Timeline
      position="right"
      sx={{
        m: 0,
        p: 0,
        '& .MuiTimelineItem-root': { px: 0, width: { xs: 'auto', sm: '100%' } },
        '& .MuiTimelineItem-root.MuiTimelineItem-missingOppositeContent::before': { flex: 0, padding: 0 },
      }}
    >
      {sections.map((section, index) => {
        const active = activeSection === section
        return (
          <TimelineItem key={section}>
            <TimelineSeparator>
              <TimelineDot color={active ? 'secondary' : 'grey'} />
              {index < sections.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 1, px: 2 }}>
              <Box component="button" onClick={() => onSelect(section)} aria-pressed={active} sx={{ border: 0, background: 'none', cursor: 'pointer', p: 0, textAlign: 'left' }}>
                <Typography variant="subtitle1" color={active ? 'secondary' : 'primary'} sx={{ fontWeight: 800 }}>{section}</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

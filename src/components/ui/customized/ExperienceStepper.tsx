import { useState } from 'react'
import { Box, Button, MobileStepper, Stack, Typography } from '../mui'

const steps = [
  { label: 'Foundations', text: 'Dummy content: building strong frontend foundations through thoughtful interfaces and reliable delivery.' },
  { label: 'Platform growth', text: 'Dummy content: shaping scalable product experiences with shared patterns, testing, and collaboration.' },
  { label: 'Today', text: 'Dummy content: leading React and TypeScript work while keeping accessibility and user experience in focus.' },
]

export function ExperienceStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const lastStep = steps.length - 1

  return (
    <Stack spacing={2}>
      <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>{steps[activeStep]!.label}</Typography>
      <Typography variant="body1">{steps[activeStep]!.text}</Typography>
      <MobileStepper
        variant="progress"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        sx={{ p: 0, background: 'transparent', '& .MuiMobileStepper-progress': { flex: 1, maxWidth: 'none', mr: 2 } }}
        nextButton={<Button size="small" onClick={() => setActiveStep((step) => Math.min(step + 1, lastStep))} disabled={activeStep === lastStep}>now in 2026</Button>}
        backButton={<Button size="small" onClick={() => setActiveStep((step) => Math.max(step - 1, 0))} disabled={activeStep === 0}>way back in 2010</Button>}
      />
      <Box sx={{ display: 'flex', gap: 1 }} aria-label="Experience step labels">
        {steps.map((step, index) => <Typography key={step.label} variant="caption" color={index === activeStep ? 'primary' : 'text.secondary'}>{index + 1}. {step.label}</Typography>)}
      </Box>
    </Stack>
  )
}

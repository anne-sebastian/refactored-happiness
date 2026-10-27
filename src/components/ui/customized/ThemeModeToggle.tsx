import { useState } from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '../mui'

type ThemeMode = 'light' | 'dark' | 'seasons'

type ThemeModeToggleProps = {
  value: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeModeToggle({ value, onChange }: ThemeModeToggleProps) {
  const [selected, setSelected] = useState<ThemeMode>(value)

  const handleChange = (_event: unknown, nextMode: ThemeMode | null) => {
    if (!nextMode) return
    setSelected(nextMode)
    onChange(nextMode)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Mode
      </Typography>
      <ToggleButtonGroup value={selected} exclusive onChange={handleChange} size="small" aria-label="Color scheme">
        <ToggleButton value="light" aria-label="Light theme">Light</ToggleButton>
        <ToggleButton value="dark" aria-label="Dark theme">Dark</ToggleButton>
        <ToggleButton value="seasons" aria-label="Seasons theme">Seasons</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

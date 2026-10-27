import { Box, Email, IconButton, LinkedIn, Link, Stack, Typography } from '../../components/ui/mui'
import { ThemeModeToggle } from '../../components/ui/customized'

type HeaderProps = {
  themeMode: 'light' | 'dark' | 'seasons'
  onThemeModeChange: (mode: 'light' | 'dark' | 'seasons') => void
}

export function Header({ themeMode, onThemeModeChange }: HeaderProps) {
  return (
    <Box component="header" sx={{ py: { xs: 3, md: 5 }, borderBottom: 1, borderColor: 'divider' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 3 }}>
        <Box>
          <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' } }}>Anne Sebastian Nadackal</Typography>
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.35rem' } }}>Senior Frontend Engineer | React &amp; TypeScript | AngularJS/Redux | Telecom BSS | Hybrid Migration | Cypress E2E</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between', gap: 2 }}>
          <ThemeModeToggle value={themeMode} onChange={onThemeModeChange} />
          <Stack direction="row" spacing={1}>
            <IconButton component={Link} href="https://www.linkedin.com/in/anne-sebastian-nadackal" target="_blank" rel="noreferrer" aria-label="LinkedIn" sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}><LinkedIn /></IconButton>
            <IconButton component={Link} href="mailto:annesebastian.0687@gmail.com" aria-label="Email Anne Sebastian" sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}><Email /></IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

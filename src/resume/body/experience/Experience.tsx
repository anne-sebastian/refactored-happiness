import { Paper, Typography } from '../../../components/ui/mui'
import { ExperienceStepper } from '../../../components/ui/customized'

export function Experience() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2.5, md: 4 } }}>
      <Typography variant="h3" component="h3" gutterBottom>Experience</Typography>
      <ExperienceStepper />
    </Paper>
  )
}

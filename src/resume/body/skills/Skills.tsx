import { Paper, Stack, Typography } from '../../../components/ui/mui'

const skills = [
  ['React.js & TypeScript', 'Scalable component development.'],
  ['Redux Toolkit', 'Global state architecture implementation with AngularJS.'],
  ['TanStack Query', 'Server data caching optimization with React.'],
  ['JavaScript (ES6+)', 'Advanced asynchronous frontend logic.'],
  ['HTML5 & CSS3', 'Responsive UI layout design.'],
  ['Git Version Control', 'Secure multi-branch code repository management.'],
  ['Azure DevOps', 'Agile task and sprint tracking.'],
  ['Pull Request Reviews', 'Automated code quality governance.'],
  ['Copilot & Cursor AI', 'AI-assisted code generation.'],
  ['AI Pair Programming', 'Accelerated feature development velocity.'],
  ['AI-Driven Development', 'AI assisted unit test generation.'],
]

export function Skills() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2.5, md: 4 } }}>
      <Typography variant="h3" component="h3" gutterBottom>Skills</Typography>
      <Stack spacing={1.5}>
        {skills.map(([name, detail]) => <Typography key={name} color="text.secondary"><strong>{name}:</strong> {detail}</Typography>)}
      </Stack>
    </Paper>
  )
}

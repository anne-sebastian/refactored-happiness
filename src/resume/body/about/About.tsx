import { Paper, Typography } from '../../../components/ui/mui'

export function About() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2.5, md: 4 } }}>
      <Typography variant="h3" component="h3" gutterBottom>About</Typography>
      <Typography color="text.secondary"> A Web Developer with 15+ years of experience in design and development of web applications. Started out as a Graphic Designer in <b>TCS</b> for <b>Johnson &amp; Johnson</b> client, designing responsive marketing websites from wireframes through frontend delivery in Drupal, JavaScript, and Bootstrap.</Typography>
      <Typography color="text.secondary" sx={{ mt: 2 }}>Three years later, I got an opportunity to work in UX development, working on enhancements and redesigns of <b>Cisco commerce websites</b> with AngularJS 1.x, Angular 4, and Angular 6. Later working at <b>CSG International</b>, I worked on <b>Ascendon</b>, migrating the product from an AngularJS 1.x and Redux architecture to React.</Typography>
      <Typography color="text.secondary" sx={{ mt: 2 }}>My design background gives me a distinctive UX perspective. I enjoy owning features end to end, from interpreting business requirements and solutioning through UI implementation and unit tests, while contributing to incremental development and migrations that keep production stable.</Typography>
    </Paper>
  )
}

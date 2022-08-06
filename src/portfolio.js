const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ryan-bradford.com',
  title: 'Ryan',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Bradford',
  role: 'Full-Stack Engineer',
  description:
    `   I'm a 23 year-old Software Engineer based out of San Francisco, CA. I moved here in 2022 from my hometown of Boston, MA. I also went to school in Boston at Northeastern University. Here, I received my B.S. in Computer Science and Economics. Since then - professionally, I'm a developer who's great at building production-reach web applications. But I'm also interested in politics and economics. Specifically, housing supply, market-failures, and regulations are a passion of mine. I'm always looking for opportunities to bridge my passion and my profession.

    Right now, I'm a developer at VMware. We are making a patent-pending technology to connect Cloud Director Instances in AWS to customer datacenters in a simple and secure way. On the team, I've been a mentor to our two interns, intrinsic to ensuring our application is serviceable and reliable, and delivered important features that unlock customers delivering millions in revenue.

    In my free time, I enjoy rock climbing, hiking, going to tasty coffee shops, and DJing a little. Please feel free to reach out about anything!`,
  resume: 'https://www.ryan-bradford.com/resume/resume.html',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryan-bradford-b686b7155/',
    github: 'https://github.com/ryan-bradford',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Epidemik',
    description:
      'A crowdsourced disease data collector. Won the 1st price at the Northeastern Husky Startup challenge Spring 2018. Sadly, discontinued before 2020...',
    stack: ['Express.js', 'Swift', 'React', 'MySQL'],
    sourceCode: 'https://github.com/epidemik-dev',
  },
  {
    name: 'Capsol',
    description:
      'A platform for allowing individuals to easily invest in small-scale solar projects, and for homeowners to get funds to complete these projects.',
    stack: ['Express.js', 'Angular', 'MySQL'],
    sourceCode: 'https://github.com/ryan-bradford/Capsol-API',
  },
  {
    name: 'Waypointr',
    description:
      'Allows users to easily identify waypoints on their camera in real-time. Created to identify the peaks of mountains.',
    stack: ['Swift'],
    sourceCode: 'https://github.com/ryan-bradford/waypointr',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Spring',
  'Hibernate',
  'Kubernetes',
  'Helm',
  'Docker',
  'TypeScript',
  'Express.js',
  'Angular',
  'Swift',
  'SQL',
  'Linux',
  'Jenkins',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ryanbradford333@gmail.com@mail.com',
}

export { header, about, projects, skills, contact }

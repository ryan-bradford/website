const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ryan-bradford.com',
  title: 'Hello',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Bradford',
  role: 'Full-Stack Engineer',
  description:
    `   I'm a MTSIII on the Cloud Director Service Hyperscaler's team at VMware helping to build the next generation of datacenter management technology.

    I'm currently working on a patent-pending technology to connect Cloud Director instances to customer datacenters in a simple and secure way. I also serve as the Build Czar for the team, where I'm responsible for alerting about issues in tests and builds. I'm also the mentor for our team interns, which has helped me learn so much about being a developer!

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
    name: 'DJ Code',
    description:
      'The custom MIDI mappings for my DJ setup, made in Javascript. Also, contains the p5.js code for the visuals.',
    stack: ['TypeScript'],
    sourceCode: 'https://github.com/ryan-bradford/dj-code',
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
  "Terraform",
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

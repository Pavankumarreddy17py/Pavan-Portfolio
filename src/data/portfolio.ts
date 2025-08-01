import { Skill, Project, Experience, SocialLink, NavItem, Certificate } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  name: 'PavanKumar Reddy',
  // title: 'Python Full Stack Developer', 
  title: 'AI/ML Engineer | Data Analytics & NLP | Full Stack Developer (Python & JavaScript) | Cloud & DevOps (Docker, Kubernetes, CI/CD) | 100+ LeetCode DSA Challenges | Reduced Downtime by 30%',
  ctaText: 'View My Work',
  ctaHref: '#projects',
};

export const ABOUT_DATA = {
  title: 'About Me',
  description: `Highly skilled Full Stack Web Developer and AI/ML Engineer with expertise in designing and developing modern web 
applications using Python, JavaScript, Django, Node.js, and React.js. Proficient in working with SQL, MySQL and MongoDB 
databases. Experienced in data analytics and data visualization with tools such as Pandas, NumPy, Matplotlib, Seaborn, and 
Power BI. Strong knowledge of artificial intelligence and machine learning, including Scikit-learn, TensorFlow, Keras, Natural 
Language Processing (NLP), Computer Vision, and Large Language Models (LLMs) for model evaluation and deployment.  
Adept at using Git, GitHub, Docker, and Visual Studio Code for version control and containerization. Demonstrated strong 
problem-solving skills with 100+ LeetCode challenges solved, with a focus on data structures and algorithms. Passionate 
about building end-to-end intelligent and data-driven web solutions.`,
  imageUrl: '/aragonai-b54d2dcf-8ecc-4666-8412-4105a578ee4f.jpeg' , 
};

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Cloud Computing',
    issuer: 'NPTEL - IIT Kharagpur',
    issueDate: 'Oct 2024',
    credentialId: 'NPTEL24CS118S95650131',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHwjvTLnk0QAA/feedshare-shrink_800/B4EZa9DpQeHIAg-/0/1746928572749?e=1753920000&v=beta&t=xcf_xrH5lLjO5xf-uCHYvJqxZfbTNwzQg_FocWu6_mo',
    verificationUrl: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S95650131704372048.pdf'
  },
  {
    id: '2',
    title: 'Python 101 for Data Science',
    issuer: 'IBM Developer Skills Network',
    issueDate: 'Feb 2024',
    credentialId: 'PY0101EN',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQGSoaCyWXApNA/feedshare-shrink_800/feedshare-shrink_800/0/1723039296833?e=1753920000&v=beta&t=BhEr9rCEKPAxoQwUkO4NWBIdxfn_8mCUdMW4eo8VeHY',
    verificationUrl:'https://courses.cognitiveclass.ai/certificates/7d84d4f0d7fb471db7e07e218db32b9f'
  },
  {
    id: '3',
    title: 'SQL',
    issuer: 'TESTDOME',
    issueDate: 'nov 2024',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQH9OwfRMPuZNw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731133011080?e=1753920000&v=beta&t=XeTyJtN44QtyU6Xg53xtZ7mdOL9fanwXWTZiIzdtKOU',
    verificationUrl: 'https://www.testdome.com/certificates/6bb2377ea93f405f9d4c3c02bfc5ddd6'
  },
  {
    id: '4',
    title: 'HTML for Begginers',
    issuer: 'Mind Luster',
    issueDate: 'Aug 2024',
    credentialId: '16278321219',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQFgH9ykD14wnw/feedshare-shrink_800/feedshare-shrink_800/0/1730785495929?e=1753920000&v=beta&t=tIyTgdwDjcMgcdiUt5-O9_OIGONW6lTOfw5fM3aSLZ4',
    verificationUrl: 'https://www.mindluster.com/student/certificate/16278321219'
  },
  {
    id: '5',
    title: 'Python/Python Gjango',
    issuer: 'ExceLR',
    issueDate: 'july 2024',
    credentialId: 'EXCELR-74731',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEldC8iw5djXQ/feedshare-shrink_800/feedshare-shrink_800/0/1730783848569?e=1753920000&v=beta&t=EzgPyM22u-fkmRSAqKPYIydEkXpzAWnwwTCPn1aFgCA',
    verificationUrl: 'https://www.linkedin.com/posts/pavankumar-reddy18_python-django-internship-activity-7259433622837907456-ymi1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEq17kYBggVh-jAUqzBdDTmhI3FSCW3-QLI'
  },
  {
    id: '6',
    title: 'Devops',
    issuer: 'ExceLR',
    issueDate: 'Apr 2025',
    credentialId: 'EXCELR-W-192818',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHx2TKK7mtkmw/feedshare-shrink_800/B4EZa9IDszHwAg-/0/1746929730166?e=1753920000&v=beta&t=8wQl5KvD4NysnUgsXMtinG0h_O8yQoQdi0LLzrrhmes',
    verificationUrl: 'https://www.linkedin.com/posts/pavankumar-reddy18_devops-internship-excelr-activity-7327154359698440192-vFuC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEq17kYBggVh-jAUqzBdDTmhI3FSCW3-QLI'
  },

  {
    id: '7',
    title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
    issuer: 'LinkedIn Learning, Microsoft',
    issueDate: 'Sep 2024',
    // credentialId: 'o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab',
    imageUrl: 'https://media.licdn.com/dms/image/sync/v2/D4E22AQETTuvMi-O4Xw/feedshare-shrink_800/feedshare-shrink_800/0/1727107210327?e=1753920000&v=beta&t=DA57NYrj77S8WAWnOtJeWwKwxIWAQBQkwky8Zof0gvo',
    verificationUrl: 'https://lnkd.in/eaKJYZ9h'
  },
  {
    id: '8',
    title: ' Cyber Security ',
    issuer: '1Stop',
    issueDate: 'Apr 2023',
    // credentialId: 'o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEXQYYQKP_xtg/feedshare-shrink_800/feedshare-shrink_800/0/1730783470321?e=1753920000&v=beta&t=9J2bVfv2_p3VRVVbtKRtj28LBxjSKX_yut3YxIxqLOw',
    verificationUrl: 'https://www.1stop.ai/verify-certificate'
  },
    {
    id: '9',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    issueDate: 'Sep 2024',
    credentialId: 'o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab',
    imageUrl: '/Screenshot 2025-05-11 065646.png',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab'
  },
  {
    id: '10',
    title: 'Data Science & Analyst',
    issuer: 'Hp',
    issueDate: 'jun 2025',
    credentialId: 'eenBob89-does 4116-805/200245367630',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHauLF-r-tswA/feedshare-shrink_800/B4EZe71BQDHsAk-/0/1751202929092?e=1753920000&v=beta&t=iKGFBZJvFHfxQ8FF4AClyaV8UrV55wbjGxun6uPqWsk',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab'
  },
  // {
  //   id: '11',
  //   title: 'Numpy',
  //   issuer: 'Great Learning',
  //   issueDate: 'Sep 2024',
  //   credentialId: 'o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab',
  //   imageUrl: '/certificates/generative-ai.jpg',
  //   verificationUrl: 'https://www.linkedin.com/learning/certificates/o7cb88e35adb55ec35ca2f05fb25596364pa35db7648r90ce9fd06f851dc94ab'
  // } 
];
type Skill = {
  name: string;
  level: number;
  category: string | string[];
};

export const SKILLS: Skill[] = [
  { name: 'HTML/CSS', level: 92, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'Bootstrap', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Python', level: 90, category: ['backend','data analyst'] },
  { name: 'Django', level: 90, category: 'backend' },
  { name: 'MySQL', level: 93, category: ['databases', 'data analyst'] },
  { name: 'MongoDB', level: 90, category: 'databases' },
  { name: 'PostgreSQL', level: 90, category: ['databases','data analyst'] },
  { name: 'PowerBI', level: 89, category: ['data Visualization & Analysis', 'data analyst'] },
  { name: 'NumPy', level: 85, category: 'data Visualization & Analysis' },
  { name: 'Pandas', level: 80, category: ['data Visualization & Analysis','data analyst'] },
  { name: 'Seaborn', level: 80, category: 'data Visualization & Analysis' },
  { name: 'Matplotlib', level: 75, category: ['data Visualization & Analysis','data analyst'] },
  { name: 'statistics(Linear Algebra, calculus, p & s)', level: 70, category: ['ai & Machine Learning', 'data analyst']},
  { name: 'Supervised Learning', level: 75, category: 'ai & Machine Learning' },
  { name: 'Unsupervised Learning', level: 70, category: 'ai & Machine Learning' },
  { name: 'Neural Networks(ANN, CNN, RNN, LSTM)', level: 75, category: 'ai & Machine Learning' },
  { name: 'NLP(RAG, Bert, Faiss)', level: 75, category: 'ai & Machine Learning' },
  { name: 'LLMs(Large Language Models', level: 75, category: 'ai & Machine Learning' },
  { name: 'Computer vision', level: 75, category: 'ai & Machine Learning' },
  { name: 'PyTorch', level: 75, category: ['ai & Machine Learning', 'tools'] },
  { name: 'Tensorflow', level: 75, category: ['ai & Machine Learning','tools'] },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'GitHub', level: 90, category: 'tools' },
  { name : 'Visual Studio Code', level:93, category:'tools'},
  { name: 'Docker', level: 89, category: 'tools' },
  { name: 'Rest API', level: 70, category: 'API' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Context-Aware Knowledge Retrieval System',
    description: 'An offline AI chatbot that answers questions from PDF/TXT documents using RAG with Sentence-BERT, FAISS, and Flan-T5. Built with Python and Flask for fast, context-aware document search without internet.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQGKCf_4m_IhFA/feedshare-shrink_800/B4EZSCXSFNGcAk-/0/1737353929898?e=2147483647&v=beta&t=raUeWJO7GM3W7W7gNh7p1efkSgQqdChRdH8d-2xI_Eg',
    tags: ['Python', 'Flask', 'PyTorch', 'FAISS', "NumPy",'JavaScript'],
    githubUrl: 'https://github.com/Pavankumarreddy17py/Pavankumarreddy17py-context-aware-docment-bot',
  },
  {
    id: '2',
    title: 'Student Marks Tracker',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8wJ3vCROI3LdJexIpHsaUxE7AVb-IaWuxg&s',
    tags: ['JavaScript','React', 'MySQL', 'Django','Rest API'],
    liveUrl: 'https://gregarious-beijinho-6b2cdb.netlify.app/',
    githubUrl: 'https://github.com/Pavankumarreddy17py/student_marks_tracker',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website designed to showcase projects and skills.',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://extraordinary-begonia-0b1bfa.netlify.app/',
    // githubUrl: 'https://github.com/username/portfolio',
  },
  {
    id: '5',
    title: 'Lyrics Generating System',
    description: 'A real-time lyrics generator built using Python and NLP that creates song lyrics based on user input themes or emotions. Utilizes deep learning models to ensure coherent, creative, and contextually relevant lyric generation.',
    imageUrl: 'https://cdn.activestate.com/wp-content/uploads/2021/04/Python-lyric-generator.jpg',
    tags: ['Flask', 'Torch ', 'Tensorflow', 'Numpy'],
    githubUrl: 'https://github.com/Pavankumarreddy17py/python-projects/blob/main/lyrics%20generating',
  },
];

export const EXPERIENCES: Experience[] = [
  { 
    id: '1',
    role: 'DevOps',
    company: 'ExcelR Edtech Pvt. Ltd..',
    period: ' Jan 2025 - Apr 2025',
    description: 'Led the development of the company\'s flagship product, improving performance by 40%. Mentored junior developers and implemented modern frontend architecture.',
    technologies: ['CI/CD', 'Docker', 'AWSDevOpsServices', 'Kubernetes'],
  },
  {
    id: '2',
    role: 'Python / Python Django r',
    company: 'ExcelR Edtech Pvt. Ltd.',
    period: 'August 2024 - July 2024',
    description: 'Developed responsive web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces and optimize user experience.',
    technologies: ['Python', 'Django', 'Regex', 'MySQL'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Pavankumarreddy17py',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pavankumar-reddy18/',
    icon: 'Linkedin',
  },
  {
    platform: 'Email',
    url: 'vaddemanipavanreddy2020@gmail.com',
    icon: 'Mail',
    
  },
    {
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/Pavankumarreddy63/',
    icon: 'e-font',
  },
];

export const CONTACT_DATA = {
  title: 'Get In Touch',
  email: 'vaddemanipavanreddy2020@gmail.com',
  // phone: '+91 8328647704',
  location: 'kadapa, AP, India',
};
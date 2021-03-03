export default {
  nav: {
    logo: 'Maurya',
    links: [
      { text: 'Projects', to: 'projects' ,id:1 },
      { text: 'Contact', to: 'mycontact' ,id:2 },
    ],
  },
  header: {
    img:
      'WhatsApp Image 2021-02-18 at 23.33.53.jpeg ',
    imgPlaceholder:
      'data:image/jpeg;base64,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',
    text: ['Hi!', "It's me Deepak Maurya", 'I am '],
    typical: [
      'web developer. 🖥',
      2000,
      'Mern StacK Developer. 😎',
      2000,
      'Seo Specalist 🛡',
      2000,
    ],
    btnText: 'know More',
    btnCvText: 'Download cv'
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
        
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `I have hands on experience on MongoDB,ReactJs,ExpressJs ,NodeJs i have done interniship as a full stack developer at ClickLabs Pvt Ltd ,
    i never stopped learning to upskill my skills & to stay updated i have done certifactions on udemy since then i have been doing freelancing projects.`,
  },
  projects: {
    title:'Projects',
    project: [
      { id:1, title: 'FilmFx Studio', desc : 'ReactJS,NodeJS,Express,MongoDB React website its live project based on FilmFxStudio located in viskhapatanam' ,src:'https://i.ibb.co/pzgRH98/Untitled-design-1.png' ,btnurl:'https://filmfxtest.netlify.app/'},
      { id:2, title: 'Dairy Website', desc : 'ReactJS,NodeJS React website its live project based on viskha Dairy located in viskhapatanam' ,src :'https://pbs.twimg.com/media/Eq3wavxUwAAQ1HR?format=png&name=small' ,btnurl:'https://vskdev.netlify.app/' },
      { id:3, title: 'Dashboard', desc : 'ReactJs,Nodejs Professional Dashboard example for School Magement System' ,src :'https://pbs.twimg.com/media/Eq32BciVoAEDqkr?format=png&name=small' , btnurl:'https://vskdev.netlify.app/' },
      { id:4, title: 'Build Burger', desc : 'Languages used in this project are : React,Redux,Firebase Build burger' ,src:'https://i.ibb.co/JH1Xz1K/Untitled-design.png' , btnurl:'https://vskdev.netlify.app/'},
      { id:5, title: 'News Api', desc : 'Languages used in this project are : **** underdevlopment' ,src :'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg', btnurl :'https://github.com/sivakrishnavegi/NewsReactApp' },
    
    ],
  },
  contact: {
    title: 'Contact Me!',
    desc:
      "Hi, i'm a MCA Post Graduate from Lovely Professional University , I love coding because it is my passion. And also i am a software test engineer.",
    socials: [
      {
        alt: 'facebook',
        img: process.env.PUBLIC_URL + '/assets/facebook.png',
        linksrc:"https://www.facebook.com/arnavmourya01/",
      },
      {
        alt: 'github',
        img: process.env.PUBLIC_URL + '/assets/github.png',
        linksrc:"https://github.com/Arnavmaurya001",
      },
      {
        alt: 'link',
        img: process.env.PUBLIC_URL + '/assets/link.png',
        linksrc:"https://www.linkedin.com/in/deepak-mourya-172064141/",
      }
     
    ],
    img:
      'dkk.jpeg',
    imgPlaceholder:process.env.PUBLIC_URL + '/assets/github.png' },
};

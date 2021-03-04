// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import blockchainIcon from "./images/blockchain.jpg"
import R from "./images/R.png"
import database from "./images/database.png"
import Java from "./images/Java.png"



// Social Icon
import githubIcon from "./images/github.svg"
import linkedin from "./images/linkedin.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Ammar Alhashmi",
  headerTagline: [
    //Line 1 For Header
    "Full-Stack Engineer",
    //Line 2 For Header
    "Building Applications",
    //Line 3 For Header
    "Building Websites",
  ],
  //   Header Paragraph
  headerParagraph:
    "Down below you can find information on some  projects on which I worked.",

  //Contact Email
  contactEmail: "ammar_alhashemi@hotmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Full-stack developer| At Growficient | 2020-2021", //Project Title - Add Your Project Title Here
      para:
        "During my graduation internship, I worked as a full-stack software engineer. I worked on security within the system, including features added to the system throughout the stack.",
         // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPBhIPDxAPEBAQFRAQEA8PEA8QEA8QIBcXFxYSFhYYHSgsGB8xGxgTITMhJSkrLzovGCAzODMsQygtLisBCgoKDg0OGhAQGi0dICUtLS0vKy0tLS0tLSstMi0tLS0tLSstLS0tLS0tKy0tLy0tKy0tLS0tKy0tLS0tKy0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEUQAAIBAQQEBwwHBwUAAAAAAAABAgMEBQYREiExUUFhcYGRodEHExYiIzJCUlOSscEUYmOCorLSJCUzcpOjwnN0g8Ph/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBQEEBv/EAC0RAQACAQQABAYCAQUAAAAAAAABAgMEERIxITNRcRMUMkFhgSPBsSJSkaHw/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+XNaSWazeeSz1veBlSWe3Zt4gMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOffN7U7JZHUqPihBedOW5dp2IVZctcdd5RzB1tqWu+61oqvXGEYRivNpxlLPJL7m07MPLpck5MlrS+LHfHe8c1oSfk60lSe5TSSg+lNfeG3g5XNx1ExPU+CbEWgAAAAAAAAAAAAAAAAAAAAAAAAAAAA0L4vWnZbG6lR8UYLzpy9VHYjdXly1x13lVt7XlUtVsdWq9eyMV5sI+qicQxcuW2S28pd3N6f7LXnvlCPQm/8iNnv0Ef6bSiN71G74ryTyffarT4V47yZKHgyz/JM/laGH7xVpuqFX0mtGa3TWqXbyNEJhs4cnxKRZ0Ti0AAAAAAAAAAAAAAAAAAAAAAAAAGnet407NY3VqvJLUkvOlLgjFcLCGTJWleVlWXxelS12x1Kj4oQT8WEdy+bLIjZiZctslt5aJ1WsPudwyuWb9arL8sF2kLNXQx/H+0AtUs7VN75zfWyUMu/wBUpLgG9O9Xg6En4lbXHcqq7Vq5kctD2aLLxtxn7rEINUAAAAAAAAAAAAAAAAAAAAAAAANe3WyFCyyq1JaMIrNv4Jb2Eb3isbyqy/b4nbLZpy1QjmqdPPVCPze9lkRsxc+actt/s5p1SAWVgWOWG4vfKq/xNfIhbtr6Twwq0zz179ZNkT2+oTcZqUW1KLTi1tTWtNAiZid4W1h+9FarsjV1aXm1Ir0Zrb28jK5jZu4ckZKRLpHFoAAAAAAAAAAAAAAAAAAAAAB8VqsYUnOTUYxTcpPUkuFsOTMRG8qvxPfsrZatWaowfk4+t9eXH8FzlkRsxtRnnLP4cU684AAs3Cy0cJQf1a0vxTZXPbY0/hhj2VjHzUWMdkDtYVvn6JeHjPyNTKNT6u6fN8Mzkxu9GmzfDt49StKMs1mtaexrhK2yyHQAAAAAAAAAAAAAAAAAAAAFfY3v7vtZ2ak/JwflZL05r0eRfHkJ1hl6zPynhXpEyTwgAABZ90rRwbH/AG8pfhbK57bOLwwR7KvWwsYzIACdYFv3SgrJVfjRXkZP0o+pzcHFyELQ0tHn3jhb9JmRaAAAAAAAAAAAAAAAAAAAAEbxnfn0ayd6pvy1VamttOGxz5eBf+Eojd5NVn+HXaO5VqTZDIAABgOLSitHBPJZP+or+7b6wfr+lWljFlkAB9U5uNRSi3GUWpRktqa1poETMTvC08M30rXYFJ5KrDKNWK38ElxPtXAVzGzb0+aMtd/u7BxeAAAAAAAAAAAAAAAAAGreVuhZ7FOrUfiwWeXDJ8EVxt6ghe8UrNpVJeFsnXtkqtR5ym8+KK4IriS1FrCyXm9ptLXCIAAAYewOLUvBaOD5rdZnH+3kV/dt5fIn2/pVhYxQAAA3rlvOdlt8asNaWqcfXhwx7OM5MbrcOWcduUftbNjtMa1mjUpvShNKUXxFbbraLRvD2CQAAAAAAAAAAAAAAAArrHV799t30eD8nRfjZbJVeHo2cuZOsMrW5eVuEdQi5J4gAAAAYl5oIWviBaOGKy3UmurIrjtt5vKn2VSWMMDoAAASzAd8d7tP0Wb8So86efo1OGPI/iuMjaHu0ebaeE/pYJBqAAAAAAAAAAAAAAAHMxFeX0W6Z1VlpZaNNb6j1L5vmZ2FOfJ8Ok2VK2282229bb2t7yxhyAAAAAASzeW/JAjtcF8WJ17qqUYtRc46KbTaWtFcS3slOdJqhvgFV9vT9yRLk8HyFvU8A63t6XuzHJz5C3+54W3BValZJ1FVpz0IuWilJNpa2lzDk5bRWrWZ3Rgk8QBmEnGalFtNNNNbU1sYInbxhblxXgrTddOrwyWU1umtUl0lct3Dk50izoHFoAAAAAAAAAAAAACA90W26VrpUFshF1JfzPUupP3idWZrr+MVRAk8AAAAAAHrZI52qC3zgutBLH9Ue64LwtkaFinWmpOMFpNRycsuLNlXbeveKVm0o54d2b2Vp92l+slxl5PnsfpLPh3ZvZ2j3Kf6xxk+ex/l4W/G1CdhqRpwracoyjHTjBRzayzeUmOMo31tJrO2+6BE2YyAAmnc5tnj1bO3tyqxXRGX+BC0NHQX7r+05ItEAAAAAAAAAAAAABU2Ka/fMQ13unoL7qUfkWR0xNTbfLLlnVAAAAAAGzdcc70orfVpL8aOSni+uPeP8rMxbLLDlf8AlS6ZJEI7bGp8qyqixiAAAAAAdvBlbQxHS3T04Pni2utI5PT0aS22WFpFbaAAAAAAAAAAAAAMCm71ed6Vn9rW/OyyGBl+u3vP+WsdQAAAAAA3bjWd9Wdfa0vzI5KzBH8lfda142GFoscqNTS0JaOei8nqaktfKkQbeSkXrxlxVgqybqv9RneUvP8AJYvz/wAs+Bdj9Wp/UkOUnyWL/wBLPgXY/Uqf1JDlLvyeL0/7crE2FqFC551qKnGUHF65uSaclFrXy58wiVOfS0rjmaoSTZoB0MPPK/bP/q0115HJ6W4J/kr7rdK26AAAAAAAAAAAAAAqC/qWhfdeP2tR8zk2uplkMLPG2S0flonVQAAAAAHSw1HO/wCzr7SL6NfyOT0u0/m190+xZfVSx2WnOnGEnOWi9NSayyb4GuIjEbtPU5pxREwjDx3afZ2f3an6jvGHj+ev6Qx4dWn2dn92p+ocYPnsnpB4dWn2dn92p+ocYPnsnpDSvbFNe1WR0pqlGDactCMk3lrSzberPLoOxGyvJqr5K8ZcQ68wB1MLU9LENBfX0uhOXyOT0u00b5arZK24AAAAAAAAAAAAAArXHtl0L908tVaMZZ/WXitdUeknVka2m2Tf1Rwk8gAAAAAHWwms8R0P5m/wyZyel+m82qTd0WMpWehGMZS8ao/FTeWSS4OUjV7NdEzEbIR9Fqezqe5LsJbs3hb0FZKns6nuT7Bu7wt6E7NUjHOVOoktrcJJLnyDk0tHcPI64AAJR3PrLp3xKrwUofilqXUpkbdPboa73mfT+1ikGqAAAAAAAAAAAAAAjWO7u79dHfIrOdBufLDZNfB/dJVl5NZj5Y947hW5NkAAAAAAdrBizxNR/wCR/wBuRy3T0aTzYWkittMgANa8XFWCo6mWhoT089mjk8xCN9uM7qaWwtfPMh1gCz8F3a6FzRcllOt5WW9J+aujJ8rZXLZ0uPhj/Mu+cekAAAAAAAAAAAAABiUc45PWnqaexoCqMS3Q7JeTil5KecqT+rwx5Vs6N5ZE7sTUYfh3/E9OUdUAAAAA7+Bo54jhxRqP8OXzOW6erR+a6XdHn+1UFujUfXHsOVXa+fGv7Q/Se99JJ4OUsOT3sObyAAAHcwlc30q8U5LyNJqVTdJ8EOfh4uU5MvTpcPxLb/aForYVtkAAAAAAAAAAAAAAAAc++7qha7A6U9T2wnlm4T4Guw7Eq8uKMldpVVeFhqWe1ypVY5Sj0SXBKL4UTYmTHNLcZa51AAAAJJ3P45383upVH1wXzI26evReZ+nv3RpfvSkt1PPpk+wVT1/1QihJ4QAAA3LpuyparYqVNccpPzYR9Z9hyZ2WYsVsluMLVuq74WaxRpU1qjtb2zlwyfGQmd23jxxSvGG4cTAAAAAAAAAAAAAAAAADnX1c1K12bQqLJrzKi86D4t64jsTsqy4a5I2lWl83JWslXKpHOD82rHzJdj4n1k4lj5cF8c+PXq5x1UAAJV3Oo/vao91JrplHsI2e3Q/XPs8+6FL9+RW6lD802K9Oa7zI9kZJPGAAOtcWH61rnnFaFL0qslq5Ir0mcmV+HT2y+3qsq6brpWWyqnSjktspPXKb3yfCQmWvjx1xxtVunFgAAAAAAAAAAAAAAAAAAAHxWpRnTcZxjKL1OMkmmuNMOTET4SiV7YHhNuVmn3t+znm6fM9seslFnhy6GJ8aTsidvuG00G++UZ5L04LTjlvzjs58iW+7xX0+SncObmdUpj3N4/tld7oU11vsI2e/Qd2aOPZZ4hfFTpr4v5ivSvW+YjhJ5HWu/DtqrtaFKUYv06vk49et8yZzeF2PTZL9Qlt0YKpU2pV336fq5ZUlzelz6uIjNnvxaKlfG3ilUYpRSSSS1JJZJLcRe1kAAAAAAAAAAAAAAAAAAAAAAAAxkBrWm7qNX+JRpT45wjJ9LQQtjrbuIfNhuyjQlJ0acabnlpaKyzyzy+LBTFSn0xs8LZcFmrWt1atLTm8k25TyyWpak8ju6FsGO08rRu2LLdtGj/Co0oPfGEU+k5unXHSvUNsJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
      //Project URL - Add Your Project Url Here
     // url: "http://chetanverma.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Authorization System in Blockchain | at CGI | 2020 | At CGI | 2020", //Project Title - Add Your Project Title Here
      para:
        "During my internship I programmed a web app in javascript. I have used the framework hyperledger because i have Blockchain wanted to adjust the mechanism in the web app .", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "data:image/png;base64,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",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Project Big Data", //Project Title - Add Your Project Title Here
      para:
        "During the Big Data project I have a group of 4 on an application that reflects the results of a basketball team. During this project I have used R, Javascript and HTML.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "https://us.123rf.com/450wm/4zevar/4zevar1711/4zevar171100015/90786683-big-data-icon.jpg?ver=6",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
  ],
  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
  "I am Ammar Alhashmi, I graduated as a software engineering at Amsterdam University Of Applied Science, 2021.",
  aboutParaTwo:
  "I specialized in Big Data and Blockchain. Most of my Big Data work was in R and my Blockchain work was in Javascript.",
  aboutParaThree:
  "During my Education, I learned software engineering skills and principles. I also did a couple of Internships which help gain more knowledge as a full-stack engineer.",
  aboutImage:
    "https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/30168019_1127890224020167_4729008826293747210_o.jpg?_nc_cat=102&ccb=3&_nc_sid=174925&_nc_ohc=Y8mn0M2VR3MAX8Fa3Xz&_nc_ht=scontent-amt2-1.xx&oh=0cc5b5910300695344fd8393a1261b72&oe=604FF64B",

  //   End About Section ---------------------

  // Skills Section ---------------
  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML was used almost everytime I worked on a website to build its blocks",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "I used CSS everytime I worked on a website for styling purposes",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "I used javascript a lot to make websites and web-apps",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "I used the state of the famous Javascript library React to work on reactive web applications",
    },
    {
      id: 5,
      img: blockchainIcon,
      para:
         "I worked on different projects where I applied blockchain technologies and principles",
    },
    {
      id: 6,
      img: R,
      para:
        "I used R whenever I applied Big Data techniques and principles ",
    },
    {
      id: 7,
      img: database,
      para:
        "As a Full-Stack Engineer, I used different kinds of database such as SQP, mySQL, postgreSQL and mongoDB",
    },
    {
      id: 8,
      img: Java,
      para:
        "Java is the programming language I used whenever I worked on datastructure and algorithms",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Contact with me if you wanna make something great!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/alhasha001" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/ammar-alhashmi-492871166/",
    }
    //,
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

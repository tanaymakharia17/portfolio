

export const information = {
    header: {
        name: "Tanay Makharia",
        messageToRecruiter: "Actively looking for fulltime SDE opportunity",
        img: require("../static/images/about/profile-img.jpeg"),  //"https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png",
        description: "Hi I am Tanay Makharia, I am a 4th year undergrade at LNMIIT",
        resume_link: "https://drive.google.com/file/d/1Q_wg33B9rATMMZukI293jTzv_-xn2TrG/view?usp=share_link",
        githubLink: "https://github.com/tanaymakharia17",
        mailLink: "mailto:realtanaymakharia@gmail.com",
        linkedinLink: "https://www.linkedin.com/in/tanaymakharia17",
        codeforcesLink: "https://codeforces.com/profile/tanay.makharia",
        codechefLink: "https://www.codechef.com/users/baap_coder17",
    },
    about: {
        name: "Tanay Makharia",
        intro: [
            "I am a Computer Science undergraduate student with experience in web development and a passion for algorithmic problem-solving. Currently interning at OLX Group, I am working with the C2B team of the autos division, experimenting with the front-end using A/B testing to increase customer procurement. I have experience working with Agile methodology and possess good technical skills in JavaScript, HTML/CSS, ReactJS, Redux, Git, Django, MongoDB, MySQL, and NoSQL.",
            "I have completed various projects, including an algorithm-visualizing website, a goods-for-sale and information wall website, and a real-time GPS navigation website. These projects have helped me to improve my skills in ReactJS, JavaScript, Django, Python, HTML/CSS, Bootstrap, SQLite, SQL, and MongoDB.",
            "In my free time, I enjoy participating in competitive programming challenges on platforms like CodeChef 1930 (4-star) and Codeforces 1422 (specialist), I have solved 1200+ algorithmic problems across various online judges.",
            "Overall, I am a passionate and dedicated individual seeking opportunities to grow and excel in the field of computer science.",
            "In my free time I like to watch movies, travel city and do competitive programming."
        ],
        education: [
            {
                name: "THE LNM INSTITUTE OF INFORMATION TECHNOLOGY",
                degree: "Bachelor of Engineering, Computer Science",
                courseWork: "DSA, Operating Systems, DBMS, Computer Networks, OOP",
                year: "2019 - 2023",
                img: require("../static/images/education/school-lnmiit.jpeg")
            }
        ]
    },
    projects: [
        {
          projectName: "NavicMap: Real-time GPS navigation website",
          video: require("../static/videos/NavicMap.mp4"),   //"https://user-images.githubusercontent.com/55875294/197376505-ea8e26d3-cf7d-4856-9442-1516fd5a4dd7.mp4",
          discription: {
            points: [
              "Tech stack: Django, Python, ReactJS, HTML/CSS, MongoDB",
              "Designed an algorithm to find optimal path between your current location and your desired location.",
              "Mapbox(JavaScript library) for real-world map of road network.",
              "A* algorithm as the basis of the whole algorithm for efficiently finding optimal path.",
            ],
          },
          githubLink: "https://github.com/tanaymakharia17/NavicMap",
        },
        {
          projectName: "LNM-services: Goods for sale and information wall website",
          video: require("../static/videos/LNM-services.mp4"),  //"https://user-images.githubusercontent.com/55875294/126967013-19b52784-147f-44e8-bf1b-e81cd800ee39.mp4",
          discription: {
            points: [
              "Tech stack: Django | Python | HTML/CSS | Bootstrap | SQLite | SQL",
              "Created a platform for college students to buy or place ads for goods (LNM-shop) and find partners for sharing cab rides (LNM-taxi).",
              "Implemented features for LNM-shop, such as placing ads, updating and removing products, searching for goods by category, and managing a wish list.",
              "Developed LNM-taxi, which allowed users to place details about their ride on an information wall, add andremove posts, and find people to share cab rides.",
            ],
          },
          githubLink: "https://github.com/tanaymakharia17/LNM-services-django",
        },
        {
            projectName: "VISUALGO: Algorithm visualizing website",
            img: require("../static/images/projects/Visualgo.jpeg"),  //"https://raw.githubusercontent.com/TamimEhsan/AlgorithmVisualizer/master/Assets/homepage.JPG",
            discription: {
              points: [
                "Tech stack: ReactJS | JavaScript| HTML/CSS | Bootstrap",
                "Visualized different sorting & pathfinding algorithms using animation, colors, numbers, etc.",
              ],
            },
            githubLink: "https://github.com/tanaymakharia17/VISUALGO",
          }
    ],
    skills: [
        {
          name: "C++",
          img: require("../static/images/skills/c++.png") //"https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
        },
        {
          name: "Python",
          img: require("../static/images/skills/python.png") // "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "JavaScript",
          img: require("../static/images/skills/javascript.png") // "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
          name: "Java",
          img: require("../static/images/skills/java.png") // "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
        },
        {
          name: "React.js",
          img: require("../static/images/skills/reactjs.png") // "https://cdn-icons-png.flaticon.com/512/919/919851.png",
        },
        {
          name: "Django",
          img: require("../static/images/skills/django.png") // "https://cdn-icons-png.flaticon.com/512/9307/9307630.png",
        },
        {
          name: "HTML",
          img: require("../static/images/skills/html.png") // "https://cdn-icons-png.flaticon.com/512/174/174854.png",
        },
        {
          name: "CSS",
          img: require("../static/images/skills/css.png") // "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
        {
          name: "MongoDB",
          img: require("../static/images/skills/mongodb.png") // "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
        },
        {
          name: "MySQL",
          img: require("../static/images/skills/mysql.png") // "https://cdn-icons-png.flaticon.com/512/1199/1199128.png",
        },
        {
          name: "Git",
          img: require("../static/images/skills/git.png") // "https://cdn-icons-png.flaticon.com/512/1240/1240970.png",
        }
    ],
    experience: [
        {
          img: require("../static/images/experience/olx.png"),  //"https://cdn-images-1.medium.com/max/184/1*CEC1iXf2TGEZr7O4yeaDNw@2x.png",
          companyName: "OLX GROUP",
          position: "Intern - Technology",
          description: {
            time: "Jan 2023 - present",
            points: [
              "Working with C2B team of autos division and experimenting with the front-end using A/B testing to increase customer procurement.",
              "Key skills: Agile | Javascript| HTML/CSS | ReactJS | Redux | Git",
            ],
          },
        },
        {
            img: "https://cdn-images-1.medium.com/max/184/1*CEC1iXf2TGEZr7O4yeaDNw@2x.png",
            companyName: "OLX GROUP",
            position: "Intern - Technology",
            description: {
              time: "Jan 2023 - present",
              points: [
                "Working with C2B team of autos division and experimenting with the front-end using A/B testing to increase customer procurement.",
                "Key skills: Agile | Javascript| HTML/CSS | ReactJS | Redux | Git",
              ],
            },
          }
    ],
    error: {
        message: "oop's page not found !!"
    }
}
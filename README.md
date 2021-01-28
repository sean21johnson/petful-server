# Petful App - Server

## Add your name to the queue. Adopt a pet within minutes!

---

[View the Petful app here](https://petful-client-nu-taupe.vercel.app)

[View the Petful client repo here](https://github.com/sean21johnson/petful-client)

**Petful** is a platform that was created to facilitate the adoption of cats and dogs. Our goal at Petful is to make adopting fair and efficient. Most importantly, we want to put these lovely
pets in homes ASAP. We are proud to say that every 5 seconds we match a pet with a new owner. Just add your name to the queue and wait your turn in line. When it is your turn, you have the opportunity to adopt the next available dog, next available cat, or both the cat and the dog! After you make your decision, a Petful representative will contact you shortly thereafter to schedule a pet dropoff.

---

### Tech Stack

This server-side application was created with:

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="left" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img align="left" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

<br/>

---  

### Endpoints Tree

➖**Routes🔻**  
➖**BASE URL: /api**

➖➖/people  
(GET) returns names of people in the Petful adoption line  
(POST) adds the submitted name to the end of the Petful adoption line

➖➖/cat  
(GET) returns name and details of the 1 cat that is next up to be adopted  
(DELETE) 'adopts' the next cat in line, as well as removing the name of the new owner from the adoption line

➖➖/dog  
(GET) returns name and details of the 1 dog that is next up to be adopted  
(DELETE) 'adopts'the next dog in line, as well as removing the name of the new owner from the adoption line

➖➖/pets  
(GET) returns name and details of the 1 dog and 1 cat that are first up to be adopted  
(DELETE) 'adopts' both the next cat and dog in line, as well as removing the name of the new owner from the adoption line

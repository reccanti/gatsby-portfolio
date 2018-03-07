---
headline: "Projection Mapping Display: Inspire"
---
The year of my capstone project, the Rock and Roll Hall of Fame approached the New Media departments at RIT to create new, interactive exhibits for their museum. We were allowed to explore options with relatively few restrictions, so we decided to make an exhibit that allowed people to discover music together. The result was InSpire. The project made use of projection mapping and pulling music information from several APIs. I worked as the lead developer on this technically challenging project, which required me to coordinate well with both designers and developers, and research and work with technology that I hadn't used before.

<!-- end -->

Once we had our requirements, the first thing I did as the lead developer was try to break it up into discrete components that could be worked on in parallel. We had four developers and less than 16 weeks to complete this project, so this was the only way we could get it done in time. We decided on 3 major components: a touch menu that the users could interact with, a server to fetch music data from the API, and a program to dynamically create a display that we could project onto the surface. Each of these components was assigned to one of the developers so they could focus on it exclusively. It also gave designers a point-of-contact if they had any issues they needed to bring up. I jumped between each of these components, helping gather requirements, do research, and providing development assistance when needed.

The server was written in NodeJS. Me and one of the other developers were learning about that in a class at that time, so we were both familiar with the technology and we could get it up and running very quickly. It was the lynchpin of the whole exhibit, fetching data from APIs and passing it to both the touch menu and the projection mapping display. We drew data from the Spotify, Echonest, and Rovi APIs. We even ended up writing an NPM package to fetch data from it.

The touch menu was made using the HTML Canvas API. Most of us were familiar with web technologies, so this allowed us to make complex animated displays using programs we were familiar with. It also allowed us to more easily serve it from and interact with the NodeJS server.

The Projection Mapping display was a bit more difficult. We were using MadMapper, since it provided an easy way to map a display to different faces of a surface. However, we weren't quite so familiar with any of the technologies that interacted with it. We settled on OpenFrameworks since it had relatively complete documentation and a good amount of plugins that worked with the rest of our tech stack. We had to learn to work with C++, though, a language that none of us had worked with. In the end, though, we were successfully able to program a dynamic display with it.
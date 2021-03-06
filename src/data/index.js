const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '13 Marzo 2021',
  isTimezoneSelectorEnabled: true,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/276128701/',
  eventLink: 'https://www.twitch.tv/osweekends',
  twitchUser: 'osweekends',
  onAirText: '¡OSWeekends está en directo! ⏺',
  startTime: '10:00',
  endTime: '12:00',
  title: 'Agenda',
  description: 'Segundo evento del año ¡Apúntate! 👉',
  tracks: [
    {
      name: 'The Awesome Track Online',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '•  Puntos del día 🔥',
            '•  Agenda 📇',
            '•  OSWorld 👨‍🎤👩‍🎤'
          ],
          startTime: { h: '10', m: '00' },
          // endTime: { h: '10', m: '20' },
          speakers: [
            {
              name: 'Jorge Baumann',
              avatar: 'https://pbs.twimg.com/profile_images/1307954103058866183/UQ1_k5fX_400x400.jpg',
              bio: [
                'FullStack Engineer at GuideSmiths. Open Source developer at #RambitoJs.'
              ],
              social: {
                twitter: 'https://twitter.com/baumannzone',
                instagram: 'https://instagram.com/baumannzone',
                twitch: 'https://twitch.tv/baumannzone',
                github: 'https://github.com/baumannzone'
                // url: ['1', 2 , 4]
              }
            },
            {
              name: 'Teba Gómez',
              avatar: 'https://pbs.twimg.com/profile_images/1051712960484257794/BUwHnV91_400x400.jpg',
              bio: [
                'Coding and Reforesting 🌳 @Reforestum. Org 😻 @OSW and @NodeGirlsMadrid. Missing 😚 my @OSWGuilds. FOSS contributor and 🥑.'
              ],
              social: {
                twitter: 'https://twitter.com/KoolTheba',
                github: 'https://github.com/kooltheba'
              }
            },
            {
              name: 'Chechu',
              avatar: 'https://avatars2.githubusercontent.com/u/18353937?s=400&u=ef9c88f5f189e61dc3d049a57ccaccfe9c4f808d&v=4',
              bio: [
                'Desarrollador frontend. El que te banea si te portas mal en directo de OSWeekends ⛔️.'
              ],
              social: {
                twitter: 'https://twitter.com/Xexuline'
              }
            },
            {
              name: 'Coding Carlos',
              avatar: 'https://pbs.twimg.com/profile_images/648425461215793152/TbmUPkW2_400x400.jpg',
              bio: [
                'Showman, barbudo, programador y contador de cuentos. Conecto gente en @communitytools. Se me ve mucho en @commitsans. Tengo tierras.'
              ],
              social: {
                twitter: 'https://twitter.com/codingcarlos',
                url: 'https://codingcarlos.com/',
                twitch: 'https://twitch.tv/codingcarlos'
              }
            },
            {
              name: 'Thamara Gerig',
              avatar: 'https://avatars1.githubusercontent.com/u/52920777?s=460&u=84492707015037f4c6ce5778227337118f3a7039&v=4',
              bio: [
                'Junior Front-End Dev · 🕵️‍♂️ Head of Department de Asuntos Guays at @os_weekends.'
              ],
              social: {
                twitter: 'https://twitter.com/gerig_thamara',
                github: 'https://github.com/thamaragerigr'
              }
            }
          ]
        },
        {
          title: 'Cosas curiosas que pasan cuando moderas StackOverflow',
          description: [
            'Cómo preguntar, cómo dejarse ayudar para recibir ayuda de la comunidad. Historias curiosas en la formulación de preguntas, ¿sabemos preguntar?'
          ],
          startTime: { h: '10', m: '20' },
          tags: ['✨ Soft Skills', '🤖 Curiosidades, anéctodas y formación'],
          speakers: [
            {
              name: 'Fredy Guibert',
              avatar: 'https://avatars.githubusercontent.com/u/4960023?s=460&u=35b3bfde655f1c2d94b6f1aef5d3324071311f08&v=4',
              bio: [
                'Desarrollador de Software en USA 💻, consultor en EpicalSoft.com 🦅, autor en @_NetUniversity  📙 y tutor en la academia Ninja Cerebral 🐱‍👤de @PabloLomeliMx sobre técnicas de estudio y memorización. Curioso by default, top 37 en SOes 🐺. Hablo español, inglés, algo de japonés 🐻. Siempre estoy aprendiendo y compartiendo donde se pueda :D'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/fredyfx',
                twitter: 'https://twitter.com/fredyfx',
                github: 'https://github.com/fredyfx',
                twitch: 'https://twitch.com/fredyfx',
                youtube: 'https://youtube.com/channel/UCTYDkOUi5Fg8O1w8cexmhPA',
                instagram: 'https://instagram.com/fr3dyfx',
                // facebook: 'https://facebook.com/iosamuel.dev',
                url: 'https://www.fredyfx.com',
              }
            }
          ]
        },
        {
          title: 'Aprovecha las redes sociales como creador de contenido',
          description: [
            '¿Eres creador/a de contenido? ¿Haces streaming, artículos, ilustraciones, recetas, vídeos o, incluso, hilos en Twitter? ¡Conoce algunos consejos sencillos para mejorar la comunicación (y el alcance) de tu contenido en las redes sociales!'
          ],
          startTime: { h: '10', m: '40' },
          tags: ['📱 Marketing'],
          speakers: [
            {
              name: 'Carolina "Nei" Arjona',
              avatar: 'https://pbs.twimg.com/profile_images/1274304930707394561/4pGBj0wS_400x400.jpg',
              bio: [
                'Reinventándome como estudiante Fullstack Web Developer 👩‍💻 | Actualmente redactora en esports 🎮 con experiencia en redes sociales y comunicación 📝 | Realicé los estudios de Grado en Traducción e interpretación y Máster en Gestión lingüística y literaria 📒 | Apasionada de los videojuegos 👾, la comida sana 🥗, la vida tranquila 🌱 y mis gatos (Kiwi y Dora) 🐱 |'
              ],
              social: {
                twitter: 'https://twitter.com/itsanei',
                instagram: 'https://instagram.com/itsanei',
                linkedin: 'https://www.linkedin.com/in/itsanei',
                // github: 'https://github.com/mafesernaarboleda',
                // url: 'https://rauchg.com'
              }
            }
          ]
        },
        {
          title: 'Diseñando Escape Rooms Open Source con Vue y Firebase',
          description: [
            'Mi objetivo de esta charla es enseñar a otros a diseñar y desarrollar sus propios escapes gracias al código que tengo publicado, de modo que yo pueda jugar alucinantes escapes hechos por otros.'
          ],
          startTime: { h: '11', m: '00' },
          tags: ['💻 Desarrollo', '🏃‍♀️ Scape Rooms', '🔥 Firebase'],
          speakers: [
            {
              name: 'Jordi Martí',
              avatar: 'https://pbs.twimg.com/profile_images/908728872769908737/MkqSb991_400x400.jpg',
              bio: [
                'Desarrollador de software en @inithealth // Aprendiendo y creciendo en @grupo_init // Hago escapes y me divierto en http://escapes-online.com'
              ],
              social: {
                twitter: 'https://twitter.com/itortv',
                url: 'http://escapes-online.com',
                // twitch: 'https://twitch.tv/claradios',
                // instagram: 'https://instagram.com/c.diosss',
                github: 'https://github.com/jmarti-theinit'
              }
            }
          ]
        },
        {
          title: 'Entrevista con Debbie',
          description: [
            'Sesión de preguntas y respuestas.'
          ],
          startTime: { h: '11', m: '20' },
          tags: ['💻 Desarrollo', '🌱 Nuxt', '😊 Soft Skills'],
          speakers: [
            {
              name: 'Debbie O\'Brien',
              avatar: 'https://pbs.twimg.com/profile_images/1252900852156772352/JLIVJ-TC_400x400.jpg',
              bio: [
                'Debbie O’Brien is Head of Learning and Developer Advocate at NuxtJS, the progressive VueJS framework. Debbie has over 10 years experience in Frontend development. She has worked as a Tech Lead and consultant for many important clients with varios technologies and often with a strong focus on performance. She has lead teams both in house and remotely as well as giving workshops and training. She has many years of experience as a mentor for online learning platforms, Treehouse and OpenClassrooms. Debbie is a Microsoft Most Valuable Professional in developer technologies, Google Developer Expert in web technologies, GitHub Star and Cloudinary Media Developer Expert.'
              ],
              social: {
                twitter: 'https://twitter.com/debs_obrien',
                linkedin: 'https://www.linkedin.com/in/debbie-o-brien-1a199975/',
                youtube: 'https://www.youtube.com/c/DebbieOBrien',
                github: 'https://github.com/debs-obrien',
                url: 'https://debbie.codes/'

                // twitter: 'https://twitter.com/_serxius_',
                // github: 'https://github.com/smorcuend',
                // linkedin: 'https://linkedin.com/in/dawntraoz',
                // twitch: 'https://twitch.tv/dawntraoz',
                // instagram: 'https://instagram.com/dawntraoz',
                // dev: 'https://dev.to/dawntraoz',
                // url: 'https://www.bloomod.com/'
              }
            }
          ]
        },
        {
          title: 'Networking & Beers online 💃🍻',
          startTime: { h: '11', m: '40' },
          endTime: { h: '12', m: '00' }
        }
      ]
    }
  ],
  sponsors: [
    // {
    //   name: 'OVHcloud',
    //   link: 'https://www.ovhcloud.com/es-es/',
    //   img: 'ovh2.png'
    // }
  ]
}

export default data

const startingTime = [
  { h: '17', m: '00' },
  { h: '17', m: '20' },
  { h: '17', m: '40' },
  { h: '18', m: '00' },
  { h: '18', m: '20' },
  // <-- Ultimo slot
  { h: '18', m: '40' },
  { h: '19', m: '00' }
  // Ultimo slot -->
]

const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '13 Marzo 2021',
  isTimezoneSelectorEnabled: true,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/276678046/',
  eventLink: 'https://www.twitch.tv/osweekends',
  twitchUser: 'osweekends',
  onAirText: '¡OSWeekends está en directo! ⏺',
  startTime: '17:00',
  endTime: '19:00',
  title: 'Agenda',
  description: 'Tercer evento del 2021 ¡Apúntate! 👉',
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
          startTime: startingTime[0],
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
              name: 'Thamara Gerig',
              avatar: 'https://avatars1.githubusercontent.com/u/52920777?s=460&u=84492707015037f4c6ce5778227337118f3a7039&v=4',
              bio: [
                'Junior Front-End Dev · 🕵️‍♂️ Head of Department de Asuntos Guays at @os_weekends.'
              ],
              social: {
                twitter: 'https://twitter.com/gerig_thamara',
                github: 'https://github.com/thamaragerigr'
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
            // {
            //   name: 'Chechu',
            //   avatar: 'https://avatars2.githubusercontent.com/u/18353937?s=400&u=ef9c88f5f189e61dc3d049a57ccaccfe9c4f808d&v=4',
            //   bio: [
            //     'Desarrollador frontend. El que te banea si te portas mal en directo de OSWeekends ⛔️.'
            //   ],
            //   social: {
            //     twitter: 'https://twitter.com/Xexuline'
            //   }
            // },
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
            }
          ]
        },
        {
          title: 'Cosas curiosas que pasan cuando moderas StackOverflow',
          description: [
            'Cómo preguntar, cómo dejarse ayudar para recibir ayuda de la comunidad. Historias curiosas en la formulación de preguntas, ¿sabemos preguntar?'
          ],
          startTime: startingTime[1],
          tags: ['✨ Soft Skills', '🤖 Curiosidades'],
          speakers: [
            {
              name: 'Fredy Guibert',
              avatar: 'https://avatars.githubusercontent.com/u/4960023?s=460&u=35b3bfde655f1c2d94b6f1aef5d3324071311f08&v=4',
              bio: [
                'Desarrollador de Software en USA 💻, consultor en EpicalSoft.com 🦅, autor en @_NetUniversity  📙 y tutor en la academia Ninja Cerebral 🐱‍👤de @PabloLomeliMx sobre técnicas de estudio y memorización.',
                'Curioso by default, top 37 en SOes 🐺. Hablo español, inglés, algo de japonés 🐻. Siempre estoy aprendiendo y compartiendo donde se pueda.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/fredyfx',
                twitter: 'https://twitter.com/fredyfx',
                github: 'https://github.com/fredyfx',
                twitch: 'https://twitch.com/fredyfx',
                youtube: 'https://youtube.com/channel/UCTYDkOUi5Fg8O1w8cexmhPA',
                instagram: 'https://instagram.com/fr3dyfx',
                // facebook: 'https://facebook.com/iosamuel.dev',
                url: 'https://www.fredyfx.com'
              }
            }
          ]
        },
        {
          title: 'Aprovecha las redes sociales como creador de contenido',
          description: [
            '¿Eres creador/a de contenido? ¿Haces streaming, artículos, ilustraciones, recetas, vídeos o, incluso, hilos en Twitter? ¡Conoce algunos consejos sencillos para mejorar la comunicación (y el alcance) de tu contenido en las redes sociales!'
          ],
          startTime: startingTime[2],
          tags: ['📱 Marketing', '🗣 Redes Sociales'],
          speakers: [
            {
              name: 'Carolina "Nei" Arjona',
              avatar: 'https://user-images.githubusercontent.com/52920777/110241021-f2a4df00-7f4e-11eb-9dbb-ec4bbf24f179.png',
              bio: [
                'Reinventándome como estudiante Fullstack Web Developer 👩‍💻. Actualmente redactora en e-sports 🎮 con experiencia en redes sociales y comunicación 📝.',
                'Realicé los estudios de Grado en Traducción e interpretación y Máster en Gestión lingüística y literaria 📒. Apasionada de los videojuegos 👾, la comida sana 🥗, la vida tranquila 🌱 y mis gatos (Kiwi y Dora) 🐱'
              ],
              social: {
                twitter: 'https://twitter.com/itsanei',
                instagram: 'https://instagram.com/itsanei',
                linkedin: 'https://www.linkedin.com/in/itsanei'
                // github: 'https://github.com/mafesernaarboleda',
                // url: 'https://rauchg.com'
              }
            }
          ]
        },
        {
          title: 'Domain Driven Design o cómo aprender a hablar balleno',
          description: [
            '¿Alguna vez has tenido una reunión con tus 🕴 y parecía que te hablaba un 👽?, ¿Cómo afectó esto al desarrollo de tu proyecto? En esta charla introducimos las técnicas de DDD que nos ayudarán a entendernos con nuestros expertos de dominio y como eso nos lleva al 🌈 del software...'
          ],
          startTime: startingTime[3],
          tags: ['💻 Desarrollo', '🏛 Arquitectura de Software'],
          speakers: [
            {
              name: 'Oskar Gomez',
              avatar: 'https://user-images.githubusercontent.com/52920777/110241014-ea4ca400-7f4e-11eb-9e19-50781a6c3b9a.png',
              bio: [
                '¡En ocasiones aporreo teclados mecánicos y guitarras!'
              ],
              social: {
                twitter: 'https://twitter.com/oskarflesh',
                linkedin: 'https://www.linkedin.com/in/ogomezso'
                // url: 'http://escapes-online.com',
                // twitch: 'https://twitch.tv/claradios',
                // instagram: 'https://instagram.com/c.diosss',
                // github: 'https://github.com/jmarti-theinit'
              }
            },
            {
              name: 'Libertad Pozos',
              avatar: 'https://pbs.twimg.com/profile_images/1111643339361787904/FX7p4gZZ_400x400.jpg',
              bio: [
                'Soy Libertad Pozos, mexicana, politóloga, internacionalista y, desde hace año y medio, desarrolladora de software en Osoco. De igual manera, me interesa la gestión de equipos de desarrollo por lo que, además de picar código, he ejercido como Scrum Master. Me emociona pertenecer a una comunidad que comparte el gusto por crear soluciones.',
                'En mi tiempo libre me gusta pintar 🎨, bailar 💃 y salir a platicar 🍻.'
              ],
              social: {
                twitter: 'https://twitter.com/LibertadPozos',
                linkedin: 'https://www.linkedin.com/in/libertadpozos/',
                // url: 'http://escapes-online.com',
                // twitch: 'https://twitch.tv/claradios',
                instagram: 'https://www.instagram.com/libertaadp/'
                // github: 'https://github.com/jmarti-theinit'
              }
            }
          ]
        },
        {
          title: 'La Cocina del Código',
          description: [
            'La Cocina del Código'
          ],
          startTime: startingTime[4],
          tags: ['💻 Desarrollo', '📹 Video', '🟨 JavaScript'],
          speakers: [
            {
              name: 'Sacha Lifszyc',
              avatar: 'https://pbs.twimg.com/profile_images/1356249844336226304/OOLO35lF_400x400.jpg',
              bio: [
                'Senior Font-End Developer en @toptal. Ingeniero en Sistemas de la @frbautn. 👨‍🍳 YouTuber en /LaCocinaDelCódigo'
              ],
              social: {
                twitter: 'https://twitter.com/sachalifs'
                // linkedin: 'https://www.linkedin.com/in/debbie-o-brien-1a199975/',
                // youtube: 'https://www.youtube.com/c/DebbieOBrien',
                // github: 'https://github.com/debs-obrien',
                // url: 'https://debbie.codes/'

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
          startTime: startingTime[startingTime.length - 2],
          endTime: startingTime[startingTime.length - 1]
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

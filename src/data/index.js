const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  title: 'Agenda',
  eventType: eventTypes.online,
  date: '14 Noviembre 2020',
  description: '💃 Sexto evento temporada ¡Apúntate! 👉',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/274306672/',
  eventLink: 'https://www.twitch.tv/osweekends',
  startTime: '10:00',
  endTime: '12:00',
  isTimezoneSelectorEnabled: false,
  tracks: [
    {
      name: 'The Awesome Track Online',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '- Puntos del día 🔥',
            '- Agenda 📇',
            '- OSWorld 👨‍🎤'
          ],
          startTime: { h: '10', m: '00' },
          // endTime: { h: '10', m: '20' },
          speakers: [
            {
              name: 'Jorge Baumann',
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
            // {
            //   name: 'Teba Gómez',
            //   bio: [
            //     'Software engineer at #Devo'
            //   ],
            //   social: {
            //     twitter: 'https://twitter.com/KoolTheba',
            //     github: 'https://github.com/kooltheba'
            //   }
            // },
            {
              name: 'Chechu',
              bio: [
                'Desarrollador frontend. Moderador de los directos. El que te banea si te portas mal en OSWeekends online.'
              ],
              social: {
                twitter: 'https://twitter.com/Xexuline'
              }
            },
            {
              name: 'Coding Carlos',
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
          title: '¿Estás buscando apoyo tecnológico para tu startup?',
          description: [
            'Desde OVHcloud contamos con un programa para startups que ayuda a impulsar los proyectos emergentes con un infraestructura cloud gratuita, asesoramiento técnico y acceso a nuestro ecosistema de partners. El programa ya ha ayudado a más de 2000 emprendedores de todo el mundo y cuenta con varias comunidades y aceleradoras en varios países.',
            'En esta breve charla presentaré los beneficios y cómo unirse, y estaré disponible para cualquier duda que os pueda surgir.'
          ],
          startTime: { h: '10', m: '25' },
          tags: ['🔥 Startups', '💪 Emprendimiento '],
          speakers: [
            {
              name: 'Jonathan Clarke',
              bio: [
                'Soy Jonathan Clarke, un inglés ubicado en Madrid desde hace ya casi un año (perdón si mi español no es perfecto, todavía no controlo el slam español 😜), y trabajo en OVHcloud coordinando el programa de startups en España, Portugal y Italia.',
                'Tras trabajar en varias compañías, fundé mi propia empresa de consultoría en París hace unos años, así que conozco bien los retos de comenzar con una startup o proyecto emprendedor desde cero.'
              ],
              social: {
                linkedin: 'https://linkedin.com/in/iosamuel/'
                // twitter: 'https://twitter.com/iosamuel',
                // github: 'https://github.com/iosamuel',
                // twitch: 'https://twitch.com/iosamuel',
                // youtube: 'https://youtube.com/iosamuel',
                // instagram: 'https://instagram.com/_iosamuel',
                // facebook: 'https://facebook.com/iosamuel.dev',
                // url: 'https://iosamuel.dev'
              }
            }
          ]
        },
        {
          title: 'Mi historia de amor con diseño y desarrollo 💜',
          description: [
            'Por qué elegir entre diseño y desarrollo puedes estar en ambos mundos. Acompáñame en esta historia sobre cómo descubrí mi pasión por el desarrollo frontend y el diseño y cómo ha sido mi camino hasta el día de hoy.'
          ],
          startTime: { h: '10', m: '40' },
          tags: ['✨ Diseño', '💻 Desarrollo'],
          speakers: [
            {
              name: 'Miriam González',
              bio: [
                '👋 Holi, soy Miriam, desarrolladora frontend con 3 años de experiencia en el mundo Startup. Como apasionada del diseño y la experiencia de usuario, procuro que mis desarrollos sean usables, inclusivos y accesibles a todas las personas.'
              ],
              social: {
                twitter: 'https://twitter.com/miriamgonp'
                // github: 'https://github.com/mafesernaarboleda',
                // linkedin: 'https://www.linkedin.com/in/mafesernaarboleda/',
                // url: 'https://mafe.dev/'
              }
            }
          ]
        },
        {
          title: 'Nombres evocadores mejor que nombres endebles',
          description: [
            'Cuando estás desarrollando, a la hora de ponerle nombre a las variables, ¿tienes dificultades para elegir buenos identificadores? Merece la pena dedicarle esfuerzo y tiempo a pulir los nombres, ya que es uno de los aspectos que más influye en la calidad y mantenibilidad del código.'
          ],
          startTime: { h: '11', m: '00' },
          tags: ['💻 Desarrollo', '✍️ Naming'],
          speakers: [
            {
              name: 'Javier Abadía',
              bio: [
                'VP of Engineering en StyleSage. Me encanta desarrollar software en equipo, buscar los obstáculos que nos hacen ir más despacio y eliminarlos.'
              ],
              social: {
                twitter: 'https://twitter.com/javierabadia'
              }
            }
          ]
        },
        {
          title: 'Crear tu marca personal y acabar siendo embajadora',
          description: [
            'Cotilleos-popurrí de preguntas + cómo empecé creando mi marca personal y escribiendo posts hasta llegar a ser propuesta como embajadora de dos de mis tecnologías favoritas 💜.'
          ],
          startTime: { h: '11', m: '20' },
          tags: ['💻 Desarrollo', '✨ Diseño', '🗣 Marketing'],
          speakers: [
            {
              name: 'Alba Silvente Fuentes',
              bio: [
                'Me llamo Alba, aka Dawntraoz, trabajo como Senior FrontEnd Consultant en Blue Harvest. Soy de Alicante pero actualmente vivo en Ámsterdam 💜.',
                'En mi tiempo libre, escribo artículos sobre FrontEnd, mayoritariamente, y trabajo duro en proyectos open source para mejorar ésta nuestra comunidad 👩‍💻. Este 2020 me nombraron embajadora de dos de las tecnologías con las que desarrollé mi web personal, mis queridas NuxtJS y Storyblok 🥳.'
              ],
              social: {
                twitter: 'https://twitter.com/dawntraoz',
                github: 'https://github.com/Dawntraoz',
                linkedin: 'https://linkedin.com/in/dawntraoz',
                twitch: 'https://twitch.tv/dawntraoz',
                instagram: 'https://instagram.com/dawntraoz',
                dev: 'https://dev.to/dawntraoz',
                url: 'https://www.dawntraoz.com'
              }
            }
          ]
        },
        {
          title: 'Networking & Beers online 💃🍻',
          startTime: { h: '11', m: '40' },
          endTime: { h: '11', m: '50' }
        }
      ]
    }
  ],
  sponsors: [
    {
      name: 'OVHcloud',
      link: 'https://www.ovhcloud.com/es-es/',
      img: 'ovh2.png'
    }
  ]
}

export default data

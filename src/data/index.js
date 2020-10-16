const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  title: 'Agenda',
  eventType: eventTypes.online,
  date: '17 Octubre 2020',
  description: '💃 Segundo evento temporada, seguimos online ¡Apúntate! 👉',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/273564450/',
  eventLink: 'https://www.twitch.tv/osweekends',
  startTime: '10:00',
  endTime: '12:30',
  tracks: [
    {
      name: 'The Awesome Track Online',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '- Puntos del día 🔥',
            '- Agenda 📇',
            '- OSWorld 👨‍🎤',
            '- Qué (n̶o̶) es Hacktoberfest 🎃 && primeros pasos 🦿'
          ],
          startTime: { h: '10', m: '00' },
          // endTime: { h: '10', m: '20' },
          authors: [
            {
              name: 'Jorge Baumann',
              bio: [
                'FullStack Engineer at GuideSmiths. Open Source developer at #RambitoJs.'
              ],
              social: {
                twitter: 'https://twitter.com/baumannzone',
                instagram: 'https://twitter.com/baumannzone',
                twitch: 'https://twitter.com/baumannzone',
                github: 'https://twitter.com/baumannzone'
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
                url: 'https://codingcarlos.com/'
              }
            }
          ]
        },
        {
          title: 'Conociendo a las PyLadies 🐍',
          description: [
            'Presentación de la comunidad amiga "PyLadies"'
          ],
          startTime: { h: '10', m: '20' },
          // endTime: { h: '10', m: '30' },
          tags: ['python', 'comunidad', 'desarrollo'],
          authors: [
            {
              name: 'PyLadies Madrid',
              bio: [
                'Agrupación local de @PyLadies. Nuestro objetivo es ayudar y motivar a más mujeres para que sean participantes activas de la comunidad open source de Python.'
              ],
              social: {
                twitter: 'https://twitter.com/pyladiesmadrid',
                meetup: 'https://www.meetup.com/es-ES/PyLadiesMadrid/'
              }
            }
          ]
        },
        {
          title: 'Contratando en tiempos de Coronavirus.',
          description: [
            'En GuideSmiths hemos seguido contratando a pesar de la pandemia. ¿Cómo es esto posible? Explicaremos cómo son los procesos de contratación en remoto y qué herramientas utilizamos.',
            'Además, te contaré algunos trucos y consejos que podrías utilizar para aumentar tus posibilidades de ser contratado.'
          ],
          startTime: { h: '10', m: '30' },
          // endTime: { h: '11', m: '00' },
          tags: ['Recursos humanos', 'contratar', 'empleo'],
          authors: [
            {
              name: 'Iria Mavji',
              bio: [
                'Human Resources Director at GuideSmiths'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/iria-mavji-riestra-81b174127/'
                // twitter: 'https://twitter.com/pablosirera',
                // instagram: 'https://www.instagram.com/pablodeveloper/',
                // github: 'https://github.com/pablosirera',
                // url: 'https://pablosirera.com/'
              }
            }
          ]
        },
        {
          title: 'Entrevista con Eduardo',
          description: [
            'Preguntas y respuestas con Eduardo, miembro del core team de Vue.js.'
          ],
          startTime: { h: '11', m: '00' },
          // endTime: { h: '11', m: '30' },
          tags: ['desarrollo', 'open source', 'vue.js'],
          authors: [
            {
              name: 'Eduardo San Martin Morote',
              bio: [
                'Eduardo (aka @Posva) es un nerd del Frontend, es miembro del core team de Vue.js en el cual mantiene el la librería oficial del Router.',
                'Vive en París donde echa de menos el sol y la playa 🏖.'
              ],
              social: {
                twitter: 'https://twitter.com/posva'
              }
            }
          ]
        },
        {
          title: 'Sincronizando ajustes de VS Code',
          description: [
            'Se te estropea el ordenador y tienes que formatearlo. Tal vez llega la hora de que te den uno nuevo en el trabajo. Instalar todos los plugins, temas y herramientas que utilizas a diario con VS Code es una tarea aburrida.',
            '¿Quieres saber como hacerlo like a BOSS 😎? Esta es tu charla'
          ],
          startTime: { h: '11', m: '30' },
          // endTime: { h: '12', m: '00' },
          tags: ['desarrollo', 'entorno'],
          authors: [
            {
              name: 'Karolina Chamorro',
              bio: [
                'Trabajando en el mundo del front-end con React.js y mezclándolo con UX/UI, Karolina dejó Madrid para irse a las tierras North Irlandesas a conocer nuevas tierras y pubs irlandeses, 🤠🏞 además de un nuevo idioma.',
                'Al cambiar de empresa se vio con la necesidad de volver a instalar de nuevo la configuración de su VS Code, tarea que le hubiese llevado horas si no hubiera descubierto lo que te va a contar en esta charla.'
              ],
              social: {
                twitter: 'https://twitter.com/kgrafico_',
                github: 'https://github.com/kgrafico',
                instagram: 'https://www.instagram.com/kgrafico_/',
                url: 'https://kgrafico.es/'
              }
            }]
        },
        {
          title: '👨‍💻 Mis desastrosos inicios en la programación 😱... y lo que aprendí 👨‍🏫',
          description: [
            'Yo nunca quise ir a la universidad… pero sin saber cómo, en 2003, allí estaba yo empezando la carrera de Informática de Gestión 👨‍🎓.',
            'Siempre me encantó la informática y, la verdad, pensaba que se me daría bien 🤔. Pero no, mi primer año fue tan horrible que pensé en dedicarme a otra cosa 😜. ¿Por qué fue tan horrible y cómo conseguí remontar? ¡Te lo cuento!'
          ],
          startTime: { h: '12', m: '00' },
          // endTime: { h: '12', m: '30' },
          tags: ['desarrollo', 'personal'],
          authors: [
            {
              name: 'Miguel Ángel Durán',
              bio: [
                'Miguel trabaja como Enabler Frontend en Adevinta, donde acelera 🏎 a los equipos de desarrollo construyendo herramientas cross 🛠, definiendo una plataforma común y compartiendo buenas prácticas 👌.',
                'Es un enamorado del desarrollo web desde hace quince años ❤️, evangelizador de la plataforma web y ferviente defensor del rendimiento web ⚡.'
              ],
              social: {
                twitter: 'https://twitter.com/midudev',
                linkedin: 'https://www.linkedin.com/in/midudev/',
                instagram: 'https://www.instagram.com/midu.dev/',
                youtube: 'http://youtube.com/midudev',
                url: 'https://midu.dev'
              }
            }]
        },
        {
          title: 'Networking & Beers Online 💃🍻',
          startTime: { h: '12', m: '30' },
          // endTime: { h: '12', m: '40' },
          note: 'Cierre'
        }
      ]
    }
  ],
  sponsors: [
    {
      name: 'Sponsor1',
      link: 'loquesea',
      img: '../assets/sponsors/spotify.svg'
    },
    {
      name: 'Sponsor2',
      link: 'loquesea',
      img: '../assets/sponsors/spotify.svg'
    },
    {
      name: 'Sponsor3',
      link: 'loquesea',
      img: '../assets/sponsors/spotify.svg'
    },
    {
      name: 'Sponsor4',
      link: 'loquesea',
      img: '../assets/sponsors/spotify.svg'
    },
    {
      name: 'Sponsor5',
      link: 'loquesea',
      img: '../assets/sponsors/spotify.svg'
    }
  ]
}

export default data

const data = {
  title: 'Agenda Septiembre 2020 [Online]',
  date: '19/09/2020',
  description: '💃 Empieza la temporada, seguimos online ¡Apúntate! 👉',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/273013139/',
  startTime: '11:00',
  endTime: '12:45',
  tracks: [
    {
      name: 'The Awesome Track #1',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '- Puntos del día 🔥',
            '- Agenda 📇',
            '- OSWorld 📸'
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '11',
            m: '20'
          },
          authors: [
            {
              name: 'Jorge Baumann',
              bio: [
                'FullStack Egineer at GuideSmiths. Open Source developer at #RambitoJs.'
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
            // {
            //   name: 'Chechu',
            //   bio: [
            //     'Desarrollador frontend. Multi-task guy en OSWeekends'
            //   ],
            //   social: {
            //     twitter: 'https://twitter.com/Xexuline'
            //   }
            // },
            {
              name: 'Coding Carlos',
              bio: [
                'Showman, barbudo, liante, programador y contador de cuentos. Conecto gente en @communitytools. Se me ve mucho en @commitsans. Tengo tierras.'
              ],
              social: {
                twitter: 'https://twitter.com/codingcarlos',
                url: 'https://codingcarlos.com/'
              }
            }
          ],
          variant: 'primary' // Blue tag
        },
        {
          title: '✨ SVG Animations 101 ✨ (con un poquito de GSAP)\n',
          type: 'charla',
          description: [
            'Pequeña demo animando un SVG con ayuda de la librería de animaciones de 🧦 GreenSock 🧦 GSAP.'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['diseño', 'animación', 'desarrollo'],
          authors: [
            {
              name: 'Thamara Gerig',
              bio: [
                '🤹‍ Junior Front-End Developer 🤹‍'
              ],
              social: {
                twitter: 'https://twitter.com/gerig_thamara',
                github: 'https://github.com/thamaragerigr'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Crea tu blog con Nuxt.js',
          type: 'charla',
          description: [
            'Primeros pasos para crear un blog 📝 con Nuxt.js y el módulo @nuxt/content desde cero mediante markdown y Vue components.'
          ],
          startTime: { h: '11', m: '40' },
          endTime: { h: '12', m: '00' },
          tags: ['javascript', 'nuxt', 'desarrollo'],
          authors: [
            {
              name: 'Pablo Sirera',
              bio: [
                'Senior Frontend Developer en Dekalabs y creador de contenido 🎙 sobre desarrollo web.'
              ],
              social: {
                twitter: 'https://twitter.com/pablosirera',
                instagram: 'https://www.instagram.com/pablodeveloper/',
                github: 'https://github.com/pablosirera',
                url: 'https://pablosirera.com/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Testing con Cypress',
          type: 'charla',
          description: [
            '...'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'html'],
          authors: [
            {
              name: 'Judith Martínez-Falero',
              bio: [
                'Frontend Debeerloper 🍺.'
              ],
              social: {
                twitter: 'https://twitter.com/jud_debeerloper'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Aprendiendo a aprender',
          description: [
            'Como desarrolladores/as hemos hecho un compromiso de por vida con el aprendizaje continuo. Forma parte del trabajo. Ahora bien, ¿cuál es la mejor forma de aprender?, ¿cuándo?, ¿cómo?.',
            'Resulta que no todos aprendemos igual porque cada persona es diferente. Sin embargo sí que existen principios, técnicas y claves para que tú, yo y cualquiera podamos sacar el máximo partido a nuestras capacidades aprendiendo mejor (no más) e, incluso, disfrutar haciéndolo.'
          ],
          type: 'charla',
          startTime: { h: '12', m: '20' },
          endTime: { h: '12', m: '40' },
          tags: ['development'],
          authors: [
            {
              name: 'Juan Andrés Núñez',
              bio: [
                'Me dedico a enseñar desarrollo Web moderno a cualquier persona (físicamente en clase y a través de Internet) desde una perspectiva holística: teniendo en cuenta las competencias técnicas necesarias, junto a las habilidades personales o soft skills'
              ],
              social: {
                twitter: 'https://twitter.com/juanwmedia',
                youtube: 'https://www.youtube.com/juanwmedia',
                instagram: 'https://www.instagram.com/juanwmedia/'
              }
            }],
          variant: 'success'
        },
        {
          title: 'Networking & Beers Online 💃🍻',
          startTime: {
            h: '12',
            m: '40'
          },
          endTime: {
            h: '12',
            m: '50'
          },
          variant: 'primary',
          note: 'Cierre'
        }
      ]
    }
  ]
}

export default data

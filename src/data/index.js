const data = {
  title: 'Agenda Enero 2020',
  date: '18/01/2020',
  description: '¡Cuarto evento de la temporada! Primero del año 🤙',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/267802880/',
  startTime: '10:00',
  endTime: '14:00',
  tracks: [
    {
      name: 'Auditorio',
      content: [
        {
          title: 'Recepción y café ☕️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          },
          variant: 'primary' // Blue tag
        },
        {
          title: 'KeyNote 📜',
          description: [
            '- Novedades y noticias 🔥',
            '- Patrocinadores 💙',
            '- Agenda 📇',
            '- OSWorld 📸',
            '- ¡Sorpresitas! 🎁'
          ],
          startTime: { h: '10', m: '30' },
          endTime: { h: '11', m: '00' },
          variant: 'primary'
        },
        {
          title: 'Passwords are so 1990',
          type: 'charla',
          description: [
            'As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever-increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?',
            'In this talk, I will give a quick overview of the past, present, and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details but aims to give a view of what’s to come in terms of authentication.\n'
          ],
          startTime: { h: '10', m: '00' },
          endTime: { h: '10', m: '45' },
          tags: ['Authentication', 'Passwords'],
          authors: [
            {
              name: 'Sambego',
              bio: [
                'I\'m a Google Developer Expert who works as a Senior Developer Advocate Engineer at Auth0. At Auth0 we\'re trying to make authentication and identification as easy as possible, while still keeping it secure.',
                'After office hours I like to play around with the web-audio API, and other "exotic" browser APIs. One of my side projects is a library to add audio effects to an audio input using JavaScript.'
              ],
              social: {
                twitter: 'https://twitter.com/sambego',
                url: 'https://sambego.tech/'
                // github: 'https://github.com/g3rv4',
                // linkedin: 'https://www.linkedin.com/in/g3rv4'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Cazando secretos en Github',
          type: 'charla',
          description: [
            '¿Qué tan difícil es encontrar datos secretos como contraseñas de mongo, llaves de API, u otros en Github? ¿Qué tan común es?',
            'En esta charla cazaremos secretos en github, hablaremos de cómo prevenir publicar alguno por error, cómo actuar si nos sucede, y mucho más'
          ],
          startTime: { h: '12', m: '00' },
          endTime: { h: '12', m: '45' },
          tags: ['Github', 'sensitive data', 'recon'],
          authors: [
            {
              name: 'Anny',
              bio: [
                'Anny trabaja como Security Awareness Manager en Auth0, y es la organizadora de la comunidad WoSEC - Women of Security - Madrid. Le encanta ayudar a que la gente aprenda de ciberseguridad de una manera divertida'
              ],
              social: {
                twitter: 'https://twitter.com/Annyv2',
                meetup: 'https://www.meetup.com/es-ES/WoSEC-Madrid-Women-of-Security'
                // url: 'https://g3rv4.com',
                // github: 'https://github.com/mtnieto',
                // linkedin: 'https://www.linkedin.com/in/mariateresanieto'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Networking & Beers 💃🍻',
          startTime: {
            h: '13',
            m: '45'
          },
          endTime: {
            h: '14',
            m: '15'
          },
          variant: 'primary',
          authors: [],
          note: ''
        }
      ]
    },
    {
      name: 'Cafetería - Planta 0',
      content: [
        {
          title: 'Guilds ✍️💙',
          description: [
            'Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... ¡lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)'
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          authors: [
            {
              name: 'Open Source Weekends',
              social: {
                meetup: 'https://www.meetup.com/es-ES/Open-Source-Weekends/',
                twitter: 'https://twitter.com/os_weekends',
                github: 'https://github.com/osweekends',
                url: 'http://osweekends.com/'
              }
            }
          ],
          variant: 'primary'
        }
      ]
    },
    {
      name: 'Cafetería - Planta 1 ',
      content: [
        {
          title: '',
          type: 'Charla',
          description: [
            '...',
            'Más info: <a href=""></a>'
          ],
          tags: ['seguridad', 'tecnología', 'hacking'],
          authors: [
            {
              name: 'Daniel Mery',
              bio: [
                'Daniel es miembro de HackMadrid, HaskellMAD, blockMAD y también ha sido el fundador de Planet Linux Caffe.'
              ],
              social: {
                twitter: 'https://twitter.com/dmery',
                meetup: 'https://hackmadrid.org/'
              }
            }
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '12',
            m: '00'
          },
          variant: 'warning'
        },
        {
          title: 'Blockchain generations: La evolución de Blockchain',
          type: 'Charla',
          tags: ['blockchain', 'cryptomovidas'],
          description: [
            'Con el título "Blockchain generations" en esta ocasión Josep Servat nos ofrece una panorámica de la evolución de la tecnología blockchain, desde su nacimiento como algo imprescindible para el funcionamiento de Bitcoin, la primera criptomoneda que se ha conseguido mantener exitosamente durante más de diez años y que ha dado pie al nacimiento de una gran cantidad de proyectos, que no sólo tienen que ver con el intercambio de valor, sino con muchos otros campos relacionados con la tecnología y que, como estamos viendo, la van a cambiar de muchas maneras. Aparte de repasar las principales etapas o generaciones de blockchain, se van a ver los algoritmos de consenso más usados, así como qué clase de problemas son susceptibles de resolverse mediante blockchain.',
            'Más info: <a href="https://www.meetup.com/es-ES/BlockMAD/events/267933137/">https://www.meetup.com/es-ES/BlockMAD/events/267933137/</a>'
          ],
          authors: [
            {
              name: 'Josep Servat',
              // avatar: '',
              bio: [
                'Entusiasta de la tecnología y de la programación, profesionalmente dedicado a la tecnología desde hace mas de 15 años. Trabaja actualmente como senior Node js y blockchain developer en etoshi.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/servatj/',
                github: 'https://github.com/servatj',
                twitter: 'https://twitter.com/servatj'
              }
            },
            {
              name: 'BlockMad Meetup',
              bio: ['Meetup de Blockchain en Madrid'],
              social: {
                meetup: 'https://www.meetup.com/es-ES/BlockMAD/'
              }
            }
          ],
          startTime: { h: '12', m: '00' },
          endTime: { h: '13', m: '00' },
          variant: 'warning'
        }
      ]
    },
    {
      name: 'Meetup Space (Sótano)',
      content: [
        {
          type: 'taller',
          title: 'Taller Kubernetes: ',
          description: [
            'Una pequeña introducción a qué es Kubernetes, los problemas que resuelve y hacer ejercicios prácticos de desarrollo en Kubernetes con Skaffold, Telepresence y con Okteto.'
          ],
          tags: ['Kubernetes'],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          authors: [
            {
              name: 'Pablo Chico de Guzman',
              bio: [
                '',
                ''
              ],
              social: {
                twitter: 'https://twitter.com/pchico83'
              }
            }
          ],
          variant: 'success'
        }
      ]
    }
  ]
}

export default data

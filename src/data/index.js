const data = {
  title: 'Agenda Junio 2020 [Online]',
  date: '27/06/2020',
  description: '¡Nuestro segundo evento online! 🤙',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/271437985/',
  startTime: '11:00',
  endTime: '13:00',
  tracks: [
    {
      name: 'Track #1',
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
          variant: 'primary' // Blue tag
        },
        {
          title: 'Gestionando comunidades +20k',
          type: 'charla',
          description: [
            '¿Qué significa tener un canal de youtube con +20k suscriptores? ¿Cómo se gestionan... '
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['comunidades', 'youtube'],
          authors: [
            {
              name: 'Italo Morales',
              bio: [
                'Italo es desarrollador y formador de PHP. Ha trabajado en...'
              ],
              social: {
                twitter: 'https://twitter.com/italomoralesf',
                instagram: 'https://twitter.com/italomoralesf',
                youtube: 'https://www.youtube.com/rimorsoft',
                url: 'https://rimorsoft.com/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Lazy (and tricky) loading en Angular.',
          type: 'charla',
          description: [
            'Descripción: Angular no es fácil, pero le pillas el truco y lo terminas queriendo. Pero no solo es difícil, sino que es mañoso y tiene cosas muy "tricky", como lo es cargar los módulos secundarios de manera "lazy", que a mí me costó mucho entender y aplicar sin cometer los mismos errores una y otra vez. Como a mí me gusta contarles lo que logro después de darme tantos golpes, pues les quiero contar cuáles son esos errores que yo sigo cometiendo para que, quienes se quieran iniciar en Angular, los tengan en cuenta y sean más felices en este camino.'
          ],
          startTime: { h: '11', m: '40' },
          endTime: { h: '12', m: '00' },
          tags: ['Angular', 'LazyLoad'],
          authors: [
            {
              name: 'Ariane Jurado De Bilbao.',
              bio: [
                'Enfermera y psicopedagoga de Venezuela y ahora programadora en Kairos DS. Mamá de Sebas y rockera'
              ],
              social: {
                twitter: 'https://twitter.com/Ari_Reinventada',
                github: 'https://github.com/ArianeJDB',
                linkedin: 'https://www.linkedin.com/in/arianejuradodebilbao/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Entornos locales con docker',
          type: 'charla',
          description: [
            'Charla sobre como montar un entorno de desarrollo local con docker'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'git'],
          authors: [
            {
              name: 'Adrian Ferreres Esteller',
              bio: [
                'Sngular/ Desarrollador Full Stack con JavaScript. Soy Adrián Ferreres y el asma, Star Trek y los videojuegos hicieron que a los 11 años empezará a desarrollar software. Hoy en día continúo teniendo asma, viendo Star Trek, jugando a videojuegos y programando... además, de vez en cuando, doy charlas.'
              ],
              social: {
                twitter: 'https://twitter.com/ardiadrianadri',
                linkedin: 'https://www.linkedin.com/in/adrian-ferreres-esteller-51907175/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Cazando secretos en Github',
          type: 'charla',
          description: [
            '¿Qué tan difícil es encontrar datos secretos como contraseñas de mongo, llaves de API u otros en Github? ¿Qué tan común es?',
            'En esta charla cazaremos secretos en Github, hablaremos de cómo prevenir publicar alguno por error, cómo actuar si nos sucede, ¡y mucho más!'
          ],
          startTime: { h: '12', m: '20' },
          endTime: { h: '12', m: '40' },
          tags: ['Github', 'Sensitive Data', 'Recon'],
          authors: [
            {
              name: 'Anny',
              bio: [
                'Anny trabaja como Security Awareness Manager en Auth0, y es la organizadora de la comunidad WoSEC - Women of Security - Madrid. Le encanta ayudar a que la gente aprenda de ciberseguridad de una manera divertida'
              ],
              social: {
                twitter: 'https://twitter.com/Annyv2',
                meetup: 'https://www.meetup.com/es-ES/WoSEC-Madrid-Women-of-Security'
              }
            }
          ],
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

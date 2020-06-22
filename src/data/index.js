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
          title: 'Gestionando comunidades online +20k personas',
          type: 'charla',
          description: [
            '¿Qué significa tener un canal de youtube con +20k suscriptores? ¿Qué pasa cuando tienes 2 millones de reproducciones en el canal? ¿Cuántas horas de dedicación se necesitan para crear una comunidad en youtube? Esta y otras cosas interesantes las veremos en esta charla'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['comunidad', 'youtube'],
          authors: [
            {
              name: 'Italo Morales',
              bio: [
                'Profesor de programación web en Rimorsoft Online desde el 2017. Su vida laboral comprende doce años de docencia y casi una década como programador.'
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
          title: 'No soy yo, es tu actitud tóxica',
          type: 'charla',
          description: [
            'En entorno laboral pasan muy desapercibidas las actitudes tóxicas entre empleados/as, generalmente se toman a broma, se les resta importancia o no se hace nada al respecto. Reconoce si esas actitudes abundan en tu entorno de trabajo y cómo responder ante ellas.'
          ],
          startTime: { h: '11', m: '40' },
          endTime: { h: '12', m: '00' },
          tags: ['social', 'entorno laboral', 'carrera profesional'],
          authors: [
            {
              name: 'Desiré',
              bio: [
                '9 años cara al público, casi 4 frente al ordenador. En episodios anteriores como dependienta, encargada, presidenta-organizadora de un torneo de videojuegos y recepcionista, más tarde como especialista UX&UI, desarrolladora, diseñadora e instructora.'
              ],
              social: {
                twitter: 'https://twitter.com/helleworld_',
                url: 'https://desiremcarmona.com/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Introducción a Deno',
          type: 'charla',
          description: [
            '¿Es #Deno el sucesor de #Node? En este live streaming veremos las cualidades y diferentes aspectos del desarrollo con Deno. ¡No te lo pierdas!'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'git'],
          authors: [
            {
              name: 'César Alberca',
              bio: [
                'Desarrollador Frontend en @autentia. Profesor en @cicemadrid. Miembro del comité @CodemoMadrid. Me encanta aprender y compartir conocimiento.'
              ],
              social: {
                twitter: 'https://twitter.com/cesalberca',
                url: 'https://cesalberca.com/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'ARTISTA SORPRESA',
          type: 'charla',
          description: [
            ''
          ],
          startTime: { h: '12', m: '20' },
          endTime: { h: '12', m: '40' },
          tags: [],
          authors: [
            {
              name: '',
              bio: [
                ''
              ],
              social: {
                // twitter: 'https://twitter.com/Annyv2',
                // meetup: 'https://www.meetup.com/es-ES/WoSEC-Madrid-Women-of-Security'
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

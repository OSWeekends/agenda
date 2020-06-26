const data = {
  title: 'Agenda Junio 2020 [Online]',
  date: '27/06/2020',
  description: 'Nuestro segundo evento online ¡Apúntate! 👉',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/271437985/',
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
                'Open Source developer at #RambitoJs.'
              ],
              social: {
                twitter: 'https://twitter.com/baumannzone',
                instagram: 'https://twitter.com/baumannzone',
                twitch: 'https://twitter.com/baumannzone',
                github: 'https://twitter.com/baumannzone'
              }
            },
            {
              name: 'Teba Gómez',
              bio: [
                'Software engineer at #Devo'
              ],
              social: {
                twitter: 'https://twitter.com/KoolTheba',
                github: 'https://github.com/kooltheba'
              }
            },
            {
              name: 'Chechu',
              bio: [
                'Desarrollador frontend. Multi-task guy en OSWeekends'
              ],
              social: {
                twitter: 'https://twitter.com/Xexuline'
              }
            }
          ],
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
                'Youtuber y profesor de programación web en Rimorsoft Online desde el 2017. Su vida laboral comprende doce años de docencia y casi una década como programador.'
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
          title: '🦕 ¿Pondrá Deno el mundo de Node del revés?',
          type: 'charla',
          description: [
            'Deno es según muchos el sucesor de Node, entre ellos el creador ambos: Ryan Dahl, que, aprovechando todo el conocimiento obtenido durante los 10 años de vida de Node decidió comenzar este proyecto para enmendar errores. Deno cuenta con soporte nativo de TypeScript —es decir no hace falta compilar antes de ejecutar un fichero de TypeScript—, un modelo de seguridad, una forma decentralizada de distruibuir paquetes, un únique ejecutable y muchas más cosas. En esta charla introductoria veremos qué es y qué características tiene, ¡así que no te lo pierdas!'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['javascript', 'deno', 'saurios 🤣'],
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
        // {
        //   title: 'Metodología para afrontar proyectos front: Capítulo 1',
        //   description: [
        //     'Los tiempos han cambiado mucho desde que empece profesionalmente en el mundo del desarrollo de Software. Lo que significa un Junior cuando empecé ya no es lo que significa ahora. La gente ahora viene técnicamente muy bien preparada. Cada vez cuesta más encontrar Juniors que tengas faltas de conocimiento en cuanto al uso de tecnologías pero claro... eso no significa que sepan hacer aplicaciones.' +
        //     'En consecuencia los errores que cometen los programadores sin experiencia no son tan cantosos ni llaman tanto la atención ahora como lo hacían en su día.',
        //     'En esta charla voy a repasar 3 ejemplos de errores que he visto en código de gente Junior durante este año, no para poner en san benito de malos programadores a esta gente que, en mi humilde opinión, tan necesarios son en los proyectos actuales, sino por remarcar el hecho de lo necesario que es tener una metodología clara a la hora de afrontar un proyecto, en este caso, un proyecto front. También en poner el acento para las empresas de formación (bootcamps, cursos técnicos, etc... ) en la necesidad de poner el foco en el desarrollo y no tanto en el conocimiento técnico.'
        //   ],
        //   type: 'charla',
        //   startTime: { h: '12', m: '20' },
        //   endTime: { h: '12', m: '40' },
        //   tags: ['junior', 'devs', 'senior'],
        //   authors: [
        //     {
        //       name: 'Adrián Ferreres',
        //       bio: [
        //         'Me llamo Adrián Ferreres y a los 11 años, mi pasión por los videojuegos, la serie de Star Trek y el asma me hicieron empezar con la programación en GWBasic. ',
        //         'Hoy en día llevo mas de 30 años programando de los cuales 14 son de forma profesional. Mi pasión es el JavaScript y todo lo que le rodea. Me gusta compartir conocimiento porque creo que es la mejor forma de aprender y asentar conocimiento.'
        //       ],
        //       social: {
        //         twitter: 'https://twitter.com/ardiadrianadri'
        //       }
        //     }
        //   ],
        //   variant: 'success'
        // },
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

const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '23 Enero 2021',
  isTimezoneSelectorEnabled: true,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/274849426/',
  eventLink: 'https://www.twitch.tv/osweekends',
  twitchUser: 'osweekends',
  onAirText: '¡OSWeekends está en directo! ⏺',
  startTime: '10:00',
  endTime: '12:00',
  title: 'Agenda',
  description: 'Primer evento del año ¡Apúntate! 👉',
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
          title: 'The Art of Asking',
          description: [
            '¿Hacer preguntas está escrito en nuestros genes. En esta charla hablo de la importancia de hacer preguntas, el rol de internet en nuestra sed por el conocimiento y algunas indicaciones en como contribuir a la comunidad usando Stack Overflow.'
          ],
          startTime: { h: '10', m: '20' },
          tags: ['💻 Desarrollo', '💘 Soft skills'],
          speakers: [
            {
              name: 'Angel Paredes',
              avatar: 'https://avatars0.githubusercontent.com/u/9055092?s=460&u=aa3928c461773bfc9eca513c6ba1ffe8f729a8fa&v=4',
              bio: [
                'Confía en mí, soy ingeniero. He trabajado en diferentes sectores FinTech 💵 (PayPal), eGaming ⚽️ (Kambi) y actualmente en Delivery (Glovo). ',
                'Me experimentar con temas más cercanos a Computer Science y la parte social del desarrollo de software. También dibujo pero esa es otra historia y debe ser contada en otra ocasión.'
              ],
              social: {
                // linkedin: 'https://www.linkedin.com/in/jonathan-b-clarke-06174a38/'
                twitter: 'https://twitter.com/PeopleNArthax',
                github: 'https://github.com/peoplenarthax',
                // twitch: 'https://twitch.com/iosamuel',
                // youtube: 'https://youtube.com/iosamuel',
                // instagram: 'https://instagram.com/_iosamuel',
                // facebook: 'https://facebook.com/iosamuel.dev',
                url: ['https://www.angelpared.es/']
              }
            }
          ]
        },
        {
          title: 'TechTeach Junior: decisiones detrás del proyecto 👧💻👦',
          description: [
            'Nicaragüense viviendo en Madrid. Desarrolladora front-end desde hace 3 años, pico código en Cool Tabs... Disfruto del campo 🌿, la mar 🐚 y la música 🤘🏻 (una mezcla entre rock y electrocumbia).'
          ],
          startTime: { h: '10', m: '40' },
          tags: ['💻 Desarrollo', '👩‍🎨 Diseño', '📲 UX/UI'],
          speakers: [
            {
              name: 'Mayra Amador (Flor de Lola)',
              avatar: 'https://pbs.twimg.com/profile_images/1205930962883956736/rGxZmLZY_400x400.jpg',
              bio: [
                'Techteach Junior es una web que recopila cursos de programación y computación para niñas y niños. Quiero compartirles sobre el proceso de ejecución de este pet project basado en estas temáticas #vuejs #diseño #girsintech #cuarentena20',
                'https://techteachjunior.com/'
              ],
              social: {
                twitter: 'https://twitter.com/mayrAmador',
                // github: 'https://github.com/mafesernaarboleda',
                linkedin: 'https://www.linkedin.com/in/mayra-amador-zapata-/'
                // url: 'https://rauchg.com'
              }
            }
          ]
        },
        // {
        //   title: '🤡 Verdadero o Falsedad 👾',
        //   description: [
        //     'Adivina cuales de las siguientes historias que contaremos son verdad ✨'
        //   ],
        //   startTime: { h: '11', m: '00' },
        //   tags: ['💅 Cháchara', '🎮 Juego'],
        //   speakers: []
        // },
        {
          title: 'BDD & Cucumber 🥒',
          description: [
            '¿Eres creyente del BDD? ¿Y practicante? Vamos a hablar de qué es y cómo aplicarlo con un ejemplo práctico.'
          ],
          startTime: { h: '11', m: '20' },
          tags: ['💻 Desarrollo', '🧪 Testing', '👩‍🔬 Cypress'],
          speakers: [
            {
              name: 'Clara Dios 🙏',
              avatar: 'https://pbs.twimg.com/profile_images/1168536594967650305/Hnn-LmlY_400x400.jpg',
              bio: [
                'Developer en GuideSmiths, autora del cómic Clit Flick 📚, arquitecta 🏛 y de pueblo.'
              ],
              social: {
                twitter: 'https://twitter.com/claradios',
                twitch: 'https://twitch.tv/claradios',
                instagram: 'https://instagram.com/c.diosss',
                github: 'https://github.com/claradios'
              }
            }
          ]
        },
        {
          title: 'Sensores, IoT y cosas de esas',
          description: [
            'Como montar un proyecto IoT para medir la calidad del aire en 20 minutos (bueno... quizás algo más) o como dice mi amigo @baumannzone \'Sensores y cosas\' ¿Me acompañas en esta aventura?',
            'Proyecto surgido dentro de #OSWGuilds y recuperado en tiempos de Covid-19 pa\' mi gente de OSW. Código abierto del proyecto: https://github.com/OSWeekends/miniestaciones'
          ],
          startTime: { h: '11', m: '40' },
          tags: ['💻 Desarrollo', '🌱 Jardinería'],
          speakers: [
            {
              name: 'Sergio Morcuende',
              avatar: 'https://avatars3.githubusercontent.com/u/1575830?s=460&u=c7e92b31b8509f1025a7ad8c25e5b096421a6dc3&v=4',
              bio: [
                'Audiovisual Systems Engineer. IoT Developer. Maker. @bloomod cofounder. @osweekends mentor. Hippie de pueblo. Think globally, act locally. #ecologism #steam'
              ],
              social: {
                twitter: 'https://twitter.com/_serxius_',
                github: 'https://github.com/smorcuend',
                // linkedin: 'https://linkedin.com/in/dawntraoz',
                // twitch: 'https://twitch.tv/dawntraoz',
                // instagram: 'https://instagram.com/dawntraoz',
                // dev: 'https://dev.to/dawntraoz',
                url: 'https://www.bloomod.com/'
              }
            }
          ]
        },
        {
          title: 'Networking & Beers online 💃🍻',
          startTime: { h: '12', m: '00' },
          endTime: { h: '12', m: '15' }
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

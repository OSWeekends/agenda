const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  title: 'Agenda',
  eventType: eventTypes.online,
  date: '24 Octubre 2020',
  description: '💃 Tercer evento temporada, segundo del mes ¡Apúntate! 👉',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/273564608/',
  eventLink: 'https://www.twitch.tv/osweekends',
  startTime: '19:30',
  endTime: '22:00',
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
          startTime: { h: '19', m: '30' },
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
                url: 'https://codingcarlos.com/'
              }
            }
          ]
        },
        {
          title: '¿Por que no utilizar Flux? (Redux, Vuex, etc)',
          description: [
            'Vamos a analizar desde un punto de vista técnico qué es el modelo Flux propuesto por Facebook como el siguiente paso para desarrollar aplicaciones web escalables. Y también descubriremos porqué este es un mal patrón para la gestión del estado en tus aplicaciones.',
            'Pero no nos quedaremos ahí, te mostraré que alternativas tenemos y abriremos la mente a mejores modelos y patrones que existen actualmente en el mercado 😎. ¡Vamos a dar el siguiente paso 🦿 en el manejo de estados de las aplicaciones reactivas!'
          ],
          startTime: { h: '19', m: '50' },
          // endTime: { h: '10', m: '30' },
          tags: ['💻 Desarrollo', '⛓ Patrones'],
          speakers: [
            {
              name: 'Samuel Burbano',
              bio: [
                '💻 Software Developer, Web Enthusiast, Penguin Lover. Senior Frontend Developer en Ring, Amazon'
              ],
              social: {
                twitter: 'https://twitter.com/iosamuel',
                github: 'https://github.com/iosamuel',
                linkedin: 'https://linkedin.com/in/iosamuel/',
                twitch: 'https://twitch.com/iosamuel',
                youtube: 'https://youtube.com/iosamuel',
                instagram: 'https://instagram.com/_iosamuel',
                facebook: 'https://facebook.com/iosamuel.dev',
                url: 'https://iosamuel.dev'
              }
            }
          ]
        },
        {
          title: 'Gatsby, un generador de sitios estáticos para React 💜',
          description: [
            'Los sitios estáticos no son nuevos. Eran lo que usábamos para construir la forma web antes de que los CMS dinámicos (WordPress, Drupal, etc.) se hicieran cargo.',
            '¿Qué hay de nuevo, entonces? Algunas herramientas modernas, como los generadores de sitios estáticos, surgieron en los últimos años y expandieron las capacidades de los sitios estáticos. Con un ecosistema cada vez mayor que rodea el desarrollo de estos sitios y con el poder de frameworks como ReactJS, podemos construir sitios web estáticos que se vuelven hyperdinámicos gracias a JS, Headless CMS y la era del Serverless.'
          ],
          startTime: { h: '20', m: '10' },
          tags: ['✨ Gatsby', '💻 Desarrollo', '🌠 SSG'],
          speakers: [
            {
              name: 'Mafe Serna',
              bio: [
                'Javascript Developer 👩🏻‍💻/ Happy Developer at @NodeSource 💚/ Co-organizer @medellinjs / @avanet / jamstackMedellin / @commitFm'
              ],
              social: {
                twitter: 'https://twitter.com/mafesernaarbole',
                github: 'https://github.com/mafesernaarboleda',
                linkedin: 'https://www.linkedin.com/in/mafesernaarboleda/',
                url: 'https://mafe.dev/'
              }
            }
          ]
        },
        {
          title: 'Cómo contribuir con el código abierto creando contenido',
          description: [
            'Abordar el tema de creación de contenidos desde la perspectiva del apoyo al open source, como iniciar y como mantenerse motivado creando contenido técnico.'
          ],
          startTime: { h: '20', m: '30' },
          tags: ['💻 Desarrollo', '🙌 Open Source', '👨‍👨‍👧‍👧 Comunidad'],
          speakers: [
            {
              name: 'Oscar Barajas (GnDx)',
              bio: [
                'Foundation Layer at @platzi - Lead at Developer Circles from Facebook, Speaker/Blogger. I teach React & Svelte in @platzi - #EStreamerCoders #Frontend'
              ],
              social: {
                twitter: 'https://twitter.com/gndx',
                twitch: 'https://twitch.tv/gndxdev',
                instagram: 'https://instagram.com/gndx',
                github: 'https://github.com/gndx'
              }
            }
          ]
        },
        {
          title: '¡Rompiendo paradigmas otra vuez!',
          description: [
            'Cuando Evan You anunció la version estable, Vue 3 se hizo realidad. Esta nueva versión está repleta de herramientas que nos permiten llevar nuestras aplicaciones al próximo nivel. 💃 Cuanto más indaguemos en estas nuevas funcionalidades, más vamos a poder sacar provecho de este increíble framework.',
            'La idea de esta charla, es comenzar a recorrer ese camino y aprender todo lo que necesitamos para usar Vue 3... pero también vamos a descubrir que el desafío más importante que tenemos no son los cambios de código sino los cambios de paradigmas.'
          ],
          startTime: { h: '20', m: '50' },
          tags: ['💻 Desarrollo', '🚀 Vue.js'],
          speakers: [
            {
              name: 'Nacho Anaya',
              bio: [
                'Full Stack Developer, Tech Trainer & Speaker. Trabajo principalmente con JavaScript y Node.js pero siempre experimentando cosas nuevas.',
                'Mas allá de programar, también me gusta enseñar y compartir conocimiento. Cuando no estoy trabajando (o viajando), me podés encontrar en Buenos Aires jugando al hockey... o haciendo streaming en Twitch'
              ],
              social: {
                twitter: 'https://twitter.com/ianaya89',
                twitch: 'https://twitch.com/ianaya89',
                instagram: 'https://instagram.com/ianaya89',
                github: 'https://github.com/ianaya89'
              }
            }]
        },
        {
          title: 'La tecnología y el arte de los VFX en el cine.',
          description: [
            'Voy a hablar brevemente de mi experiencia hasta llegar a trabajar en el cine y sobretodo de cómo funciona y se organiza el trabajo técnica y artísticamente dentro de un estudio de efectos visuales para el cine.'
          ],
          startTime: { h: '21', m: '10' },
          tags: ['🎬 Cine', '👽 Efectos especiales', '🎞'],
          speakers: [
            {
              name: 'Carolina Jiménez G.',
              bio: [
                'Lead Layout artist at Scanline. Latest projects include @SuicideSquadWB, @COSMOSonTV, @Terminatorand @JokerMovie.',
                'Divulgadora. Cine, ciencia y VFX.'
              ],
              social: {
                twitter: 'https://twitter.com/okinfografia',
                url: 'https://okinfografia.wordpress.com'
              }
            }]
        },
        {
          title: 'Networking & Beers online 💃🍻',
          startTime: { h: '21', m: '30' },
          endTime: { h: '21', m: '50' }
        }
      ]
    }
  ],
  sponsors: [
    //  {
    //    name: 'Sponsor1',
    //    link: 'www.google.com',
    //    img: '../assets/sponsors/spotify.svg'
    //  }
  ]
}

export default data

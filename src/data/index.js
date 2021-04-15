const startingTime = [
  { h: '17', m: '00' },
  { h: '17', m: '20' },
  { h: '17', m: '40' },
  { h: '18', m: '00' },
  { h: '18', m: '30' },
  // <-- Ultimo slot
  { h: '18', m: '50' },
  { h: '19', m: '00' }
  // Ultimo slot -->
]

const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '24 Abril 2021',
  isTimezoneSelectorEnabled: true,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/277562057/',
  eventLink: 'https://www.twitch.tv/osweekends',
  twitchUser: 'osweekends',
  onAirText: '¡OSWeekends está en directo! ⏺',
  startTime: '18:00',
  endTime: '20:00',
  title: 'Agenda',
  description: 'Cuarto evento del 2021 ¡Apúntate! 👉',
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
            }, {
              name: '✨ Concha Asensio ✨',
              avatar: 'https://avatars.githubusercontent.com/u/65449478?v=4',
              bio: [
                'Junior Front-End Developer'
              ],
              social: {
                twitter: 'https://twitter.com/conchaasensio',
                github: 'https://github.com/conchaasensio'
              }
            }
          ]
        },
        {
          title: 'Making of de la Alexa skill: "El informativo de Ángel Martín"',
          description: [
            'Es probable que conozcas al humorista Ángel Martín de monólogos o programas de televisión. En septiembre del 2020 decidió regalarnos horas del día haciendo él un resumen diario de las noticias. Formato exprés, dos minutos de vídeo, en Twitter. Hubo gente que le pidió tener ese informativo en Alexa. Ángel me encontró, hablamos y el resto es historia.',
            'En esta charla quiero contar los entresijos de esta skill de audio, un poco particular, así como todo el ecosistema AWS que estoy usando. No es una charla de introducción a Alexa e iré directo a la chicha porque hay mucha tela que cortar.'
          ],
          startTime: startingTime[1],
          tags: ['💻 Development', '📣 Voice Assistants'],
          speakers: [
            {
              name: 'Kini (Joaquin Engelmo Moriche)',
              avatar: 'https://pbs.twimg.com/profile_images/960232202490535939/2sDBEdlh_400x400.jpg',
              bio: [
                '👨🏻‍💻 Desarrollador de software en constante evolución,',
                '🐖 #BellotaPowah',
                '🏆 #AlexaChampion',
                '🗣 @ComunidadAlexa',
                '🎙 @codigobotfm',
                'Charlatán incansable, maestro de nada, aprendiz de por vida. Programo de día, horneo pan de noche.'
              ],
              social: {
                linkedin: 'linkedin.com/in/kinisoftware/',
                twitter: 'twitter.com/kinisoftware',
                // twitter: 'twitter.com/ComunidadAlexa',
                github: 'github.com/kinisoftware',
                url: 'https://www.kinisoftware.com/author/kini/'
                // url: 'codigobot.com/'
              }
            }
          ]
        },
        {
          title: '¿Sabes ese proyecto que tienes por ahí que te soluciona un problema? ¡Lo mismo puedes solucionarselo a miles de personas!',
          description: [
            'Voy a contaros la historia de como uno de los proyectos que empecé cuando estaba aprendiendo JavaScript ha ayudado a mas de 100.000 personas en todo el mundo. Todo esto desde mi experiencia desarrollándola e intentando que llegue a más gente, para así intentar motivar al público que quiera lanzarse a hacer algún proyecto o que ya tenga alguno y se haya planteado alguna vez publicarlo.'
          ],
          startTime: startingTime[2],
          tags: ['💻 Development', '🗣 Marketing', '✨ Open Source'],
          speakers: [
            {
              name: 'Horus Lugo',
              avatar: 'https://pbs.twimg.com/profile_images/1107981629656576002/7WXCm8oQ_400x400.jpg',
              bio: [
                'Llevo más de 10 años desarrollando mis propios proyectos por diversión. Me encanta el Open Source y crear contenido ocasionalmente.',
                '👨‍💻 Creé mi primera web entre 2008 y 2009.',
                '🧰 Mi lenguaje de programación favorito es TypeScript.',
                '🏠 Vivo en Málaga, España.',
                '🐱 Me encantan los gatos.',
                '🏓 Juego bastante bien al Ping Pong.',
                '🎧 Mi tema favorito es Adagio For Strings de Tiësto.'
              ],
              social: {
                twitter: 'https://twitter.com/HorusGoul',
                twitch: 'https://twitch.tv/HorusGoul',
                youtube: 'https://youtube.com/c/HorusGoul',
                github: 'https://github.com/HorusGoul',
                url: 'https://horus.dev'
              }
            }
          ]
        },
        {
          title: 'El Origen del Cyberpunk',
          description: [
            '¿Qué es el Cyberpunk? Un subgénero del relato fantástico, más precisamente una visión post-modernista de la ciencia ficción. En inglés se lo suele denominar bajo el lema: Alta tecnología y bajo estilo de vida (High tech and low life); o, en otras palabras, la fusión de las nuevas tecnologías con un estilo de vida alternativo y como IT Project Manager en Teeb. Health, plataforma para la atención médica digital desarrollada bajo tecnología Blockchain e Inteligencia Artificial.'
          ],
          startTime: startingTime[3],
          tags: ['😈 Hacking', '👩‍🎤 Cyberpunk', '📚 Literatura', '👩🏿‍💻 Deep Tech'],
          speakers: [
            {
              name: 'Nancy Salazar',
              avatar: 'https://pbs.twimg.com/profile_images/1366832818047836171/ElCS3rvk_400x400.jpg',
              bio: [
                'Ingeniera en Tecnologías de la Información. Colaboró como Technology Coach y profesora en Platzi, una de Profesora de materias con enfoque STEM (Science, Technology, Engineering and Maths) en el Colegio Humane, en el Instituto Municipal de la Juventud y en la universidad CENTRO Diseño, Cine y Televisión en la Ciudad de México. Conferencista. Divulgadora del acercamiento de niñas y mujeres a la Ciencia y Tecnología.las plataformas de educación en línea más reconocidas en Latinoamérica.',
                'Actualmente, es Mentora en Tecnología e Innovación en Startup México, en el Instituto Tecnológico de Estudios Superiores de Monterrey (ITESM), en la Escuela Bancaria Comercial (EBC) y en Askha México. '
              ],
              social: {
                twitter: 'https://twitter.com/NancyNSalazar',
                linkedin: 'https://www.linkedin.com/in/nancynsalazar/',
                facebook: 'https://www.facebook.com/NancyNSalazar',
                instagram: 'https://www.instagram.com/nancyNsalazar/'
              }
            }
          ]
        },
        {
          title: 'Entrevista con Cassidy Williams (cassidoo)',
          description: [
            '¡Preguntas y respuestas con Cassidoo!'
          ],
          startTime: startingTime[4],
          tags: ['💻 Desarrollo', '🎤 Entrevista', '🎬 Just Chatting'],
          speakers: [
            {
              name: 'Cassidy Williams',
              avatar:
                'https://cassidoo.co/img/headshot.png',
              bio: [
                'Cassidy es Principal Developer Experience Engineer en Netlify.',
                'Ha trabajado para varios otros lugares, incluidos CodePen, Amazon y Venmo, y ha tenido el honor de trabajar con varias organizaciones sin fines de lucro, incluidas cKeys y Hacker Fund como directora de alcance.',
                'Es activa en la comunidad de desarrolladores y una de las 35 mujeres menores de 35 años de la revista Glamour que están cambiando la industria tecnológica y una de las principales profesionales de 35 años o menos de LinkedIn.',
                'Como ávida oradora, Cassidy ha participado en varios eventos, incluida la Celebración Grace Hopper para las mujeres en la informática, TEDx, las Naciones Unidas y docenas de otros eventos técnicos.',
                'Quiere inspirar a generaciones de estudiantes de STEM para que sean lo mejor que puedan ser, y su cita favorita es de Helen Keller: "Uno nunca puede consentir en arrastrarse cuando siente el impulso de volar". Le encantan los teclados mecánicos y el karaoke.'
              ],
              social: {
                twitter: 'https://twitter.com/cassidoo',
                linkedin: 'http://linkedin.com/in/cassidoo',
                github: 'https://github.com/cassidoo'
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

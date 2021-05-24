const startingTime = [
  { h: '10', m: '00' },
  { h: '10', m: '20' },
  { h: '10', m: '40' },
  { h: '11', m: '00' },
  { h: '11', m: '20' },
  // <-- Ultimo slot
  { h: '11', m: '40' },
  { h: '12', m: '00' }
  // Ultimo slot -->
]

const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  date: '29 Mayo 2021',
  isTimezoneSelectorEnabled: true,
  eventType: eventTypes.online,
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/277562057/',
  eventLink: 'https://www.twitch.tv/osweekends',
  twitchUser: 'osweekends',
  onAirText: '¡OSWeekends está en directo! ⏺',
  startTime: '18:00',
  endTime: '20:00',
  title: 'Agenda',
  description: 'Quinto evento del 2021 ¡Apúntate! 👉',
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
          title: 'Testeando Accesibilidad Web',
          description: [
            'Cuando desarrollamos una nueva web, a menudo ponemos mucho trabajo en el diseño, para que sea bonita y utilizable. Pero muchas veces no pensamos en la experiencia del usuario para las personas con discapacidades.',
            'Nuestro papel como desarrolladores Front-end es crear interfaces claras para que las personas entiendan y se preocupen por los datos, independientemente de sus discapacidades o impedimentos, pero lo que nosotros, los desarrolladores, a menudo olvidamos es asegurarnos de que el código que escribimos siga las "Web Content Accessibility Guidelines" (WCAG), y la única forma de lograrlo es mediante test, ya sea manuales o automatizados.',
            'Enseñaré algunas herramientas de tests, bibliotecas y técnicas para aumentar la cobertura de tests de tu código con un simple ejemplo con una aplicación React.'
          ],
          startTime: startingTime[1],
          tags: ['💻 Desarrollo', '🦾 Accesibilidad Web', '🧪 Testing'],
          speakers: [
            {
              name: 'Adrián Bolonio',
              avatar: 'https://pbs.twimg.com/profile_images/1201731904862654464/lZMJqedE_400x400.jpg',
              bio: ['Engineering Team Lead, Frontend Developer, y gran defensor de la Accesibilidad Web (a11y). Es de Madrid, pero desde 2012 vive y trabaja en Viena (Austria). Cuando no está en la oficina le gusta disfrutar de una buena lectura, dedicarle tiempo a cocinar alguna deliciosa receta, o practicar su afición por visitar nuevos lugares por el mundo.'],
              social: {
                linkedin: 'https://www.linkedin.com/in/adrianbolonio/',
                twitter: 'https://twitter.com/bolonio/',
                github: 'https://github.com/bolonio/',
                url: 'https://www.adrianbolonio.com/es/',
                instagram: 'https://www.instagram.com/bolonio/'
              }
            }
          ]
        },
        {
          title: 'Hago TAB y aparezco a tu lado',
          description: [
            'Por desgracia aún seguimos teniendo una web donde la accesibilidad brilla por su ausencia, muchas veces incluso en páginas oficiales que deberían poder ser usadas por cualquier persona, independientemente de sus capacidades.',
            'Con esta charla pretendo remover un poco las conciencias en cuanto a la importancia de la accesibilidad web, enfocándome en una de las muchas herramientas que tenemos a nuestro alcance para mejorarla, el Skip To Main Content.',
            'Además, aunque el Skip To Main Content es algo bastante sencillo de implementar, veremos qué problemas pueden surgir con las nuevas webs que desarrollamos usando frameworks actuales que gestionan el routing, y cómo solucionarlos.'
          ],
          startTime: startingTime[2],
          tags: ['💻 Desarrollo', '🦿 a11y'],
          speakers: [
            {
              name: 'Verónica Ojeda',
              avatar: 'https://pbs.twimg.com/profile_images/1334275434809348099/FhuDP_kj_400x400.jpg',
              bio: [
                'Frontend Developer.',
                'Si alguna vez escuchas a alguien decir "Eso no es accesible", "¿Cuáles son las buenas prácticas a seguir con este framework?", o "Friends es la mejor serie del mundo", entonces es altamente probable que sea yo.',
                'Otros temas que también me interesan/preocupan: 💪🏻 Los derechos de la mujer y 🏳️‍🌈 Los derechos LGTBIQ+.',
                'Y en mi tiempo libre me gusta: 🐶 pasear a mis perros, 🚗 viajar, 🏐 hacer deporte, 🍿 ver Netflix, 🍳 cocinar, 🥑 comer y 🎧 escuchar música muy random.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/glebapps/',
                twitter: 'https://twitter.com/glebapps/',
                github: 'https://github.com/glebapps',
                url: 'https://dev.to/glebapps'
              }
            }
          ]
        },
        {
          title: 'Una historia de litofanías',
          description: [
            'Javi y Bruno, su hijo de 11 años, realizarán una breve introducción del mundo de la impresión doméstica 3D y los potenciales usos que existen en la industria, educación, ámbito social etc... Y la posibilidad de incluir textos en braille usando la página: https://www.touchsee.me'
          ],
          startTime: startingTime[3],
          tags: ['💻 Desarrollo', '🖨 Impresión 3D', '👩‍🎨 Design'],
          speakers: [
            {
              name: 'Javi Pérez',
              avatar:
                'https://pbs.twimg.com/profile_images/528175368692195331/0UFFnRFl_400x400.png',
              bio: [
                'Frontend Developer, papá de Sergio, maker, curioso y disfruto mucho preparando marcianadas como este taller.'
              ],
              social: {
                twitter: 'https://twitter.com/javimostoles'
              }
            }
          ]
        },
        {
          title: 'El Origen del Cyberpunk',
          description: [
            '¿Qué es el Cyberpunk? Un subgénero del relato fantástico, más precisamente una visión post-modernista de la ciencia ficción. En inglés se lo suele denominar bajo el lema: Alta tecnología y bajo estilo de vida (High tech and low life); o, en otras palabras, la fusión de las nuevas tecnologías con un estilo de vida alternativo y como IT Project Manager en Teeb. Health, plataforma para la atención médica digital desarrollada bajo tecnología Blockchain e Inteligencia Artificial.'
          ],
          startTime: startingTime[4],
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

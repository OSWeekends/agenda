const data = {
  title: 'Agenda Diciembre 2019',
  date: '14/12/2019',
  description: '¡Tercer evento de la temporada! 🤙',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/266585029/',
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
            '- PyLadies 👩‍💻 & ??',
            '- Patrocinadores 💙',
            '- Agenda 📇',
            '- Foto 📸',
            '- ¡Sorpresitas! 🎁'
          ],
          startTime: { h: '10', m: '30' },
          endTime: { h: '11', m: '00' },
          variant: 'primary'
        },
        {
          title: 'Mi hijo (6) programador de videojuegos',
          type: 'Charla',
          description: [
            'Si, lo sé, eres padre y lo has hecho; le has dejado el móvil a tu hijo y ahora se comporta como un yonki con mono cada vez que no lo tiene en la mano.',
            'Todos hemos caído y hemos fallado. Ahora la pregunta es como redirigimos la situación a nuestro beneficio y el del niño para que se convierta en una inversión en su educación.',
            'Yo lo he conseguido; simplemente he enseñado a programar a mi hijo para que el mismo pueda crear sus propios videojuegos. Esta charla va de compartir la experiencia de como ayudar a nuestros hijos a convivir con la tecnología de una forma sana sin que caigan víctimas de ella'
          ],
          tags: ['scratch', 'programación', 'kids'],
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
              name: 'Roberto Ferreres',
              bio: ['6 años. Lector ávido de manuales de Scratch e iniciado en la programación a pesar de las reticencias de su familia.'],
              social: {
                gamepad: 'https://scratch.mit.edu/projects/341123470/'
              }
            },
            {
              name: 'Adrián Ferreres',
              bio: [
                'Desarrollador Software desde los 11 años, también ha sido niño programador en la época pre internet cuando el hecho de tener un ordenador en casa se consideraba un lujo.'
              ],
              social: {
                twitter: 'https://twitter.com/ardiadrianadri'
                // linkedin: ''
                // github: ''
                // url: ''
              }
            }
          ],
          variant: 'primary'
        },
        {
          title: 'Iniciativa #Hourofcode',
          type: 'Charla',
          description: [
            'Se trata de una iniciativa global educativa llamada Hour of Code, promovida por la organización <a href="https://code.org">code.org</a>, que tiene lugar en más 180 países y que se celebra en diciembre coincidiendo con la semana de las Ciencias de la Computación (9 al 15 de diciembre).',
            'Esta iniciativa, pretende acercar la programación y el desarrollo del pensamiento computacional a estudiantes de todo el mundo y de todas las edades, beneficiando sólo el año pasado a 100 millones de estudiantes.',
            'En la charla expondré mi experiencia personal al colaborar como voluntario en el colegio de mi hijo. No se trata de una charla técnica pero en ella se mostrarán ejemplos de algunos de las actividades que realizamos.'
          ],
          startTime: {
            h: '11',
            m: '30'
          },
          endTime: {
            h: '12',
            m: '00'
          },
          authors: [
            {
              name: 'Javier Pérez',
              // avatar: '',
              bio: [ 'Desarrollador Front End en Accenture (Liquid Squad). #Maker #IoT.' ],
              social: {
                twitter: 'https://twitter.com/JaviMostoles',
                linkedin: 'https://www.linkedin.com/in/javimostoles/'
                // github: ''
                // url: ''
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Buscando a ELMO',
          type: 'Charla',
          description: [
            '¿Tus jefes te conocen?, ¿Nos vamos de las empresas o nos vamos de nuestros managers?, ¿Cómo deben actuar los managers de las empresas en las que queremos trabajar?, ¿Cuál es el valor más importante de las compañías?'
          ],
          startTime: {
            h: '12',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          authors: [
            {
              name: 'Angel Galán Carretero',
              // avatar: '',
              bio: [
                'Formando parte del equipo Estratecno, acompaño como Agile Coach a propietarios de producto, equipos de desarrollo y equipos de negocio en la implantación de estrategias para facilitar la gestión de proyectos IT con marcos de trabajos ágiles a todos los niveles de la organización.'
              ],
              social: {
                twitter: 'https://twitter.com/agalancarretero',
                linkedin: 'https://www.linkedin.com/in/agalancarretero/'
                // github: ''
                // url: ''
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'AMA con Gervasio de StackOverflow',
          type: 'Ask Me Anything',
          description: [
            '¿Cómo se puede correr el sitio <b>#36</b> de internet (por su <a href="https://www.alexa.com/siteinfo/stackoverflow.com?ref=OSWeekends" target="_blank">Alexa Rank</a>) en 9 servidores web y 2 servidores de base de datos? ' +
            '¿Por qué preferimos un monolito a microservicios? ¿Por qué no usamos mas que jQuery? ¿Cómo dejar un trabajo muy aburrido para ganar el doble haciendo lo que te gusta?',
            'Bienvenidas preguntas sobre trabajo remoto, Stack Overflow, preparando entrevistas, o lo que sea!'
          ],
          startTime: { h: '13', m: '15' },
          endTime: { h: '14', m: '00' },
          tags: ['stack-overflow', 'ama', 'arquitectura'],
          authors: [
            {
              name: 'Gervasio Marchand',
              bio: [
                'Soy Gervasio, Principal Software Developer en Stack Overflow y voy a estar respondiendo las preguntas que ustedes traigan. Hace 3 años tengo el mejor trabajo de mi vida.',
                'Entré a Stack Overflow al equipo de Jobs, después pasé a Talent y ahora estoy trabajando en Stack Overflow Enterprise, el tier más alto de la suite "Stack Overflow for Teams". Paso los días pensando cómo mejorar la vida de mis colegas desarrolladores :)',
                'En el último año estuve involucrado en el proceso de selección de desarrolladores que usamos en Stack Overflow, participando de las instancias técnicas como entrevistador.',
                'Vivo en Uruguay y hace 12 años que trabajo para empresas de Estados Unidos (nunca trabajé para una empresa local).'
              ],
              social: {
                twitter: 'https://twitter.com/g3rv4',
                url: 'https://g3rv4.com',
                github: 'https://github.com/g3rv4',
                linkedin: 'https://www.linkedin.com/in/g3rv4'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Networking & Beers 💃🍻',
          startTime: {
            h: '13',
            m: '00'
          },
          endTime: {
            h: '14',
            m: '00'
          },
          variant: 'primary',
          authors: [],
          note: ''
        }
      ]
    },
    // {
    //   name: 'Meetup Space (Sótano)',
    //   content: [
    //     {
    //       title: 'Convierte tu navegador en una grabadora de audio 🎤',
    //       type: 'Taller',
    //       description: [
    //         '¿Alguna vez te has preguntado cómo puedes acceder al micrófono de tu pc usando <code>javascript</code> desde un navegador? Con la llegada de la API de <code>MediaRecorder</code> a los navegadores, hacer esto es muy fácil. En este taller veremos, a través de <strong>Vue.js</strong> y <strong>Javascript</strong>, como acceder al micrófono desde el navegador y crear nuestra grabadora.',
    //         'Además, veremos otras funcionalidades como el acceso a la cámara o la detección de caras (Face Detection) en imágenes. Todo esto, gracias a Javascript (sin librerías externas) del lado del navegador.',
    //         'EXTRA: 🔥 Configura y Despliega tu Aplicación Vue de manera automática con Netlify ✌️'
    //       ],
    //       tags: ['javascript', 'vue.js', 'html'],
    //       startTime: {
    //         h: '11',
    //         m: '00'
    //       },
    //       endTime: {
    //         h: '12',
    //         m: '45'
    //       },
    //       variant: 'primary',
    //       authors: [
    //         {
    //           name: 'Jorge Baumann',
    //           avatar: '',
    //           social: {
    //             twitter: 'https://twitter.com/baumannzone',
    //             dev: 'https://dev.to/baumannzone',
    //             github: 'https://github.com/baumannzone',
    //             youtube: 'https://www.youtube.com/channel/UCTTj5ztXnGeDRPFVsBp7VMA',
    //             linkedin: 'https://www.linkedin.com/in/baumannzone',
    //             medium: 'https://medium.com/@baumannsito'
    //           },
    //           bio: [
    //             'Desarrollador web Full-Stack. Apasionado de la tecnología en general y del desarrollo web en particular. Actualmente trabaja para el departamento de Liquid Squad (Accenture).',
    //             ' Es organizador del Meetup Open Source Weekends y en sus ratos libres crea OpenSource en Github (por ejemplo, esta agenda a la que puedes contribuir) 😜'
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
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
          variant: 'primary'
        }
      ]
    },
    {
      name: 'Cafetería - Planta 1 ',
      content: [
        {
          title: 'Advanced JavaScript Patterns',
          type: 'Charla',
          variant: 'warning',
          description: [
            'When you tell people you code in JavaScript they usually look down on you. This talk will give you the tools to enlighten those heretics.',
            'We\'ll be entering the world of design patterns applied to JavaScript, looking through some of the cutting edge properties of ES6 such as Proxies and default function parameter expressions, dealing with objects and even some examples of functional programming. ' +
            'This talk is not allowed for cardiacs.'
          ],
          authors: [
            {
              name: 'Lorien Domenech',
              // avatar: '',
              bio: [
                'I\'m a young programmer very interested in good practices, architecture, testing and SOLID principles. ' +
                'I work at Autentia as a frontend developer (Vue, React, TypeScript, JavaScript, HTML, CSS, etc) although I have worked a bit in Java and Android. I\'m continuously on the lookout for things to read, learn and share.'
              ],
              social: {
                twitter: 'https://twitter.com/loriendr',
                meetup: 'https://www.meetup.com/es-ES/HackMadrid-27',
                url: 'http://hackmadrid.org/'
              }
            },
            {
              name: 'Carlos Caballero',
              avatar: '',
              bio: [
                'Entusiasta de la seguridad informática, enfocado al análisis forense y posteriormente en Hacking ético, inicia su carrera en Prosegur Ciberseguridad desarrollando sus Skills con el equipo de forense y respuesta ante incidentes. Miembro de HackMadrid%27'
              ],
              social: {
                twitter: 'https://twitter.com/_CarlosCabal',
                meetup: 'https://www.meetup.com/es-ES/HackMadrid-27',
                url: 'http://hackmadrid.org/'
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
          }
        },
        {
          title: 'Blockstack: Un ecosistema para el desarrollo de aplicaciones descentralizadas (dApps) que protegen tus derechos',
          description: [
            'Blockstack es una red blockchain descentralizada y un ecosistema para el desarrollo de aplicaciones que protegen tus derechos digitales: Control de tu identidad y tus datos, seguridad, privacidad.',
            'Es un privilegio poder presentar Blockstack a la comunidad de desarrolladores de BlockMAD y Open Source Weekends, contribuyendo al renacimiento de un internet mejor. Sus representantes en Madrid, Alex Viñas y Georgina Mauriño contarán, entre otras cosas, lo que motivó a sus fundadores a meterse en este ambicioso proyecto y cómo ha evolucionado hasta su momento actual, en el que ya hay más de 300 dApps desarrolladas y que participan en un particular programa de incentivos, el minado de aplicaciones, que ofrece interesantes recompensas a sus desarrolladores. La Comunidad Blockstack en Madrid está dando sus primeros pasos y entre sus objetivos está el llegar a los desarrolladores españoles y ofrecerles la oportunidad de participar con su talento en la creación de dApps para la Web 3.0 que estén al servicio de los usuarios, respetando sus derechos fundamentales.'
          ],
          variant: 'danger',
          authors: [
            {
              name: 'Alex Viñas',
              avatar: '',
              bio: [
                'Embajador de Blockstack.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/alexvinyas/',
                url: 'https://blockstack.org/'
              }
            },
            {
              name: 'Georgina Mauriño',
              avatar: '',
              bio: [
                'Embajadora de Blockstack. Autora y editora en diversos formatos, con más de 30 títulos publicados desde 1997. En 2016 descubrió blockchain y el mundo de posibilidades que abría a autores y artistas. Desde el primer momento, Blockstack fue un referente para ella y recientemente ha sido invitada a ser su representante en Madrid.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/georginagarciamaurino/',
                meetup: 'https://www.meetup.com/es-ES/Blockstack-Madrid/'
              }
            },
            {
              name: 'BlockMAD',
              avatar: '',
              bio: [
                'BlockMAD Meetup: BlockMAD es una comunidad dedicada principalmente a la tecnología Blockchain, sobre todo en sus aspectos técnicos y a la elaboración de proyectos.'
              ],
              social: {
                meetup: 'https://www.meetup.com/es-ES/BlockMAD'
              }
            }
          ],
          startTime: {
            h: '12',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          }
        }
        // {
        //   title: '- BlockMAD',
        //   description: [
        //     ''
        //   ],
        //   authors: [
        //     {
        //       name: '- BlockMAD',
        //       avatar: '',
        //       bio: [
        //         ''
        //       ],
        //       social: {
        //         // linkedin: 'https://www.linkedin.com/in/juan-antonio-lle%C3%B3-7b5a5937/',
        //         // twitter: 'https://twitter.com/juan_a_lleo',
        //         meetup: 'https://www.meetup.com/es-ES/BlockMAD/'
        //         // url: 'https://golem.network/?ref=OSWeekends'
        //       }
        //     },
        //     {
        //       name: ' - HackMadrid %27',
        //       social: {
        //         url: 'http://hackmadrid.org/',
        //         meetup: 'https://www.meetup.com/es-ES/HackMadrid-27'
        //       }
        //     }
        //   ],
        //   startTime: {
        //     h: '12',
        //     m: '00'
        //   },
        //   endTime: {
        //     h: '13',
        //     m: '00'
        //   },
        //   variant: 3
        // }
      ]
    }
    // {
    //   name: 'Planta 0 - Corner',
    //   content: [
    //     {
    //       title: '',
    //       description: [
    //         'GBA - Blockchain, Gobierno y Ciudadanos',
    //         'Introducción a GBA (Government Blockchain Association) Madrid. Potenciales usos de blockchain y otras DLTs para mejorar los servicios de los gobiernos a sus ciudadanos.',
    //         '---',
    //         'Blockstack, recupera tu soberanía digital',
    //         'Blockstack es un ecosistema blockchain que tiene a la identidad digital y la soberanía de los datos privados como su principal preocupación. En la actualidad cuenta con más de 250 aplicaciones desarrolladas sobre su sistema, con un interesante sistema de incentivos para los desarrolladores.'
    //       ],
    //       variant: 'danger',
    //       authors: [
    //         {
    //           name: 'GBA Madrid',
    //           avatar: '',
    //           bio: [],
    //           social: {
    //             meetup: ' https://www.meetup.com/es-ES/Government-Blockchain-Association-GBA-Madrid/'
    //           }
    //         },
    //         {
    //           name: 'BlockStack',
    //           avatar: '',
    //           bio: [],
    //           social: {
    //             meetup: 'https://www.meetup.com/es-ES/Blockstack-Madrid/'
    //           }
    //         }
    //       ],
    //       startTime: {
    //         h: '11',
    //         m: '00'
    //       },
    //       endTime: {
    //         h: '12',
    //         m: '00'
    //       }
    //     },
    //     {
    //       title: 'Hackerspace en Campus - AgroLab IoT (microtaller)',
    //       description: [
    //         'Hemos traído una parte del hackerspace a Campus para presentar los proyectos que queremos llevar a cabo y animar a la comunidad a interesarse por el concepto de *Open Hardware* y el mundo *Maker*.',
    //         '* AgroLab IoT: El objetivo de este microtaller es dar las bases para realizar un sistema de riego autónomo para un cultivo doméstico y conseguir monitorizar en tiempo real ciertas condiciones del entorno.',
    //         'Más info: https://github.com/OSWHackerspace/AgrolabIoT'
    //       ],
    //       variant: 'danger',
    //       authors: [
    //         {
    //           name: 'Sergio Morcuende',
    //           avatar: '',
    //           bio: [
    //             'Este ingeniero de telecomunicaciones es co-fundador de Bloomod (bloomod.com) y a la vez desarrollador full-stack en reclamador.es',
    //             'Colabora como mentor en OSW en los guilds relacionados con hardware, agricultura y salud.'
    //           ],
    //           social: {
    //             linkedin: 'https://www.linkedin.com/in/smorcuend',
    //             twitter: 'https://twitter.com/_serxius_',
    //             github: 'https://github.com/smorcuend'
    //           }
    //         }
    //       ],
    //       startTime: {
    //         h: '12',
    //         m: '00'
    //       },
    //       endTime: {
    //         h: '13',
    //         m: '00'
    //       }
    //     }
    //   ]
    // }
  ]
}

export default data

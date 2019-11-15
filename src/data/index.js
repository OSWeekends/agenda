const data = {
  title: 'Agenda Noviembre 2019',
  date: '16/11/2019',
  description: '¡Segundo evento de la temporada! ✌️',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/266177168/',
  startTime: '10:00',
  endTime: '13:30',
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
            '- Novedades temporada y noticias',
            '- Patrocinadores',
            '- ¡Sorpresitas! 💙'
          ],
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          },
          variant: 'primary'
        },
        {
          title: 'Arquitectura de software: Entre el negocio y la tecnología.',
          type: 'Charla',
          description: [
            'Que es la arquitectura de software, como tener en cuenta las necesidades del negocio. Tres ejemplos prácticos: sistemas modulares (para consultorías), cloud services y permisos y roles.'
          ],
          tags: ['arquitectura', 'sistemas modulares', 'cloud services'],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '12',
            m: '00'
          },
          variant: 'success',
          authors: [
            {
              name: 'Unai Rubio',
              // avatar: '',
              bio: [
                'Software Architect en Skala. He pasado años de lead / arquitecto y trabajado en compañias como HP y Dassault Systemes, habiendo estado involucrado en temas como DevOps e Impresión 3D. ' +
                'De hace un par de años aquí he sido el arqutecto de Skala (startup) y llevo mi propio studio freelance, Roulette Studios.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/unairubio/'
                // twitter: 'https://twitter.com/miguelFLG13'
                // github: 'https://github.com/ardiadrianadri'
                // url: 'https://lostinbrittany.org/'
              }
            }
          ]
        },
        {
          title: 'Solution + Software Engineering: Trucos para usar nuestro arte en soluciones viables',
          type: 'Charla',
          description: [
            'La teoría nos dice que desarrollo de software es una ingeniería. La práctica nos revela que hay mucho de nuestra industria que es muy difícil poner en papel.',
            'Como por ejemplo: ¿Cómo sabes que la solución que estamos implementando es la correcta? Esta charla se enfoca en la labor creativa antes de la solución y como construir un solución efectiva y flexible a los problemas que queremos arreglar para nosotros, otros o el mundo.'
          ],
          startTime: {
            h: '12',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          variant: 'success',
          authors: [
            {
              name: 'Andrés Vidal',
              avatar: '',
              bio: [
                'Arquitecto de Software en Bnext'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/andrespvidal/'
                // twitter: ''
                // github: ''
                // url: ''
              }
            }
          ]
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
        }]
    },
    {
      name: 'Meetup Space (Sótano)',
      content: [
        {
          title: 'Convierte tu navegador en una grabadora de audio 🎤',
          type: 'Taller',
          description: [
            '¿Alguna vez te has preguntado cómo puedes acceder al micrófono de tu pc usando <code>javascript</code> desde un navegador? Con la llegada de la API de <code>MediaRecorder</code> a los navegadores, hacer esto es muy fácil. En este taller veremos, a través de <strong>Vue.js</strong> y <strong>Javascript</strong>, como acceder al micrófono desde el navegador y crear nuestra grabadora.',
            'Además, veremos otras funcionalidades como el acceso a la cámara o la detección de caras (Face Detection) en imágenes. Todo esto, gracias a Javascript (sin librerías externas) del lado del navegador.',
            'EXTRA: 🔥 Configura y Despliega tu Aplicación Vue de manera automática con Netlify ✌️'
          ],
          tags: ['javascript', 'vue.js', 'html'],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '12',
            m: '45'
          },
          variant: 'primary',
          authors: [
            {
              name: 'Jorge Baumann',
              avatar: '',
              social: {
                twitter: 'https://twitter.com/baumannzone',
                dev: 'https://dev.to/baumannzone',
                github: 'https://github.com/baumannzone',
                youtube: 'https://www.youtube.com/channel/UCTTj5ztXnGeDRPFVsBp7VMA',
                linkedin: 'https://www.linkedin.com/in/baumannzone',
                medium: 'https://medium.com/@baumannsito'
              },
              bio: [
                'Desarrollador web Full-Stack. Apasionado de la tecnología en general y del desarrollo web en particular. Actualmente trabaja para el departamento de Liquid Squad (Accenture).',
                ' Es organizador del Meetup Open Source Weekends y en sus ratos libres crea OpenSource en Github (por ejemplo, esta agenda a la que puedes contribuir) 😜'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Cafetería - Planta 0',
      content: [
        {
          title: '💙 Guilds',
          description: [
            'Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)'
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
          title: 'Threat hunting y unas cuantas cosas más...',
          type: 'Charla',
          variant: 'danger',
          description: [
            'Se hará una introducción al Threat Hunting como una nueva línea de investigación de ciberseguridad y puesto de trabajo, haciendo referencia sobre buenas prácticas, metodologías y frameworks (Mitre Att&ck, TaHiTI, Sigma) que se usan en el día a día por los "cazadores de amenazas".',
            'Se expondrán los problemas con los que nos encontramos en la búsqueda de TTPs (técnicas, tácticas y procedimientos) de los cibercriminales y cómo automatizar nuestro trabajo con herramientas bajo estándares. Se realizará una demostración sobre cómo fortificar un entorno empresarial para luego realizar un caso de uso sobre él.',
            'Más info en <a href="https://www.meetup.com/es-ES/HackMadrid-27/events/265948661/">https://www.meetup.com/es-ES/HackMadrid-27/events/265948661/</a>'
          ],
          authors: [
            {
              name: 'Lorien Domenech',
              avatar: '',
              bio: [
                'Especializado en Digital Forense y Incident Response en varias empresas. Apasionado de la seginfo en varios ámbitos e iniciándose en el mundo del Threat Hunting. Co-organizador de HackMadrid%27'
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

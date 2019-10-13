const data = {
  title: 'Agenda Octubre 2019',
  date: '12/10/2019',
  description: '¡Primer evento de la temporada!', // Not used atm
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/265206201/',
  startTime: '10:00',
  endTime: '13:30',
  tracks: [
    {
      name: 'Auditorio',
      content: [{
        title: 'Recepción y café ☕️',
        startTime: {
          h: '10',
          m: '00'
        },
        endTime: {
          h: '10',
          m: '30'
        },
        type: 1
      },
      {
        title: 'KeyNote 📜',
        description: [
          '- Novedades temporada y noticias',
          '- Guilds & Hacktoberfest',
          '- Patrocinadores',
          '- Sorpresas y más movidas 🎃🎁🎃🎁🎃🎁'
        ],
        startTime: {
          h: '10',
          m: '30'
        },
        endTime: {
          h: '11',
          m: '00'
        },
        type: 1
      },
      {
        title: '2017 Odisea en el Lodo',
        duration: 45, // minutes
        description: [
          '13 de Marzo de 2017, parece que no hace tanto, pero depende un poco a quien le preguntes.',
          'En 2017 Odisea en el lodo se va a intentar contar la experiencia intensa y trepidante que ha supuesto mi incorporación en una startup en continuo crecimiento, en la que me encontré siendo la primera y única persona del equipo de desarrollo con un proyecto heredado.',
          'Se explicará en que estado se encontraba el proyecto al principio, la serie de acciones que se han realizado para remolcar un barco que iba a la deriva y el planteamiento para 2020 del stack que tenemos el actual equipo de desarrollo para poder olvidarnos de ese proyecto inicial que me encontré ese 13 de Marzo de 2017.'
        ],
        startTime: {
          h: '11',
          m: '15'
        },
        endTime: {
          h: '12',
          m: '00'
        },
        type: 2,
        authors: [
          {
            name: 'Miguel Jiménez',
            // avatar: '',
            bio: [
              'CTO de Apeteat'
            ],
            social: {
              linkedin: 'https://www.linkedin.com/in/miguelflg13',
              twitter: 'https://twitter.com/miguelFLG13'
              // github: 'https://github.com/ardiadrianadri'
              // url: 'https://lostinbrittany.org/'
            }
          }
        ]
      },
      {
        title: 'Networking & Beers 💃🍻',
        startTime: {
          h: '12',
          m: '30'
        },
        endTime: {
          h: '13',
          m: '30'
        },
        type: 1,
        authors: [],
        note: ''
      }]
    },
    {
      name: 'Cafetería - Planta 0',
      content: [
        {
          title: '💙 Guilds & Hacktoberfest 🎃',
          description: [
            'Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)',
            'Edición especial 💙 Hacktoberfest 🎃, intentaremos conseguir nuestra camiseta haciendo 4 Pull Request a repositorios Open Source (Nuestros proyectos guilders pueden serte de ayuda, tenemos Issues que necesitan ser resueltas 😜)'
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          type: 1
        }
      ]
    },
    {
      name: 'Cafetería - Planta 1 ',
      content: [
        {
          title: 'Social Engineering #02: El día a día de un Pentester - HackMadrid %27',
          description: [
            'En esta segunda entrega, Kneda expondrá un caso real y explicará cómo se llevó a cabo. Por si os perdiste la primera entrega, la podréis ver desde aquí http://www.kneda.net/Social_Engineering_01.html',
            'Errores, problemas en cada uno de ellos y focalización de los problemas particulares de los programadores.'
          ],
          authors: [
            {
              name: 'Kneda',
              avatar: '',
              bio: [
                'Trabaja de Black Box Pentester en Hack 4ensic Team. Tiene un Postgrado en Informática Forense y Delitos Informáticos + un Master en Seguridad informática y Hacking. Da talleres y charlas sobre Seguridad Informática y Hacking. Es co-fundador de Hack4ensicTeam y co-organizador HackMadrid %27'
              ],
              social: {
                twitter: 'https://twitter.com/JR_kneda',
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
          },
          type: 3
        },
        {
          title: 'Presentación y demo de GOLEM - BlockMAD',
          description: [
            'Golem es un proyecto de computación distribuida, con un sistema de remuneraciones y control de uso mediante un token propio, desarrollado sobre la blockchain de Ethereum.',
            'Más info: https://www.meetup.com/es-ES/BlockMAD/events/265527225/'
          ],
          authors: [
            {
              name: 'Juan Antonio Lleó - BlockMAD',
              avatar: '',
              bio: [
                'Coordinador BlockMAD'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/juan-antonio-lle%C3%B3-7b5a5937/',
                twitter: 'https://twitter.com/juan_a_lleo',
                meetup: 'https://www.meetup.com/es-ES/BlockMAD/',
                url: 'https://golem.network/?ref=OSWeekends'
              }
            },
            {
              name: 'Francisco Arencibia - HackMadrid %27',
              social: {
                url: 'http://hackmadrid.org/',
                meetup: 'https://www.meetup.com/es-ES/HackMadrid-27'
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
          },
          type: 3
        }
      ]
    },
    // {
    //   name: 'Meetup Space (Sótano)',
    //   content: [
    //     {
    //       title: 'Machine Learning para profanos',
    //       description: [
    //         'Hoy en día es imposible no haber oído del Machine Learning y la Inteligencia Artificial, pero ... ¿en qué consiste realmente todo esto? ¿Es este mundo tan oscuro y complejo como parece?',
    //         'Sin abusar de fórmulas y teoremas para que no se me duerma nadie, pretendo que aprovechemos al máximo estos escasos 45 minutos para que salgáis con una idea mucho más clara sobre en qué consiste esta nueva ciencia y como aplicarla.'
    //       ],
    //       startTime: {
    //         h: '11',
    //         m: '00'
    //       },
    //       endTime: {
    //         h: '11',
    //         m: '45'
    //       },
    //       type: 2,
    //       authors: [
    //         {
    //           name: 'Ángel Luengo Egido',
    //           avatar: 'https://pbs.twimg.com/profile_images/986582889390333953/py32YOYM_400x400.jpg',
    //           social: {
    //             twitter: 'https://twitter.com/BSaurius',
    //             linkedin: 'https://www.linkedin.com/in/%C3%A1ngel-luengo-egido-7347a6130/'
    //           },
    //           bio: [
    //             'BigDataSaurio (Ingeniero de Telecomunicaciones amante de los dinosaurios). Actualmente trabaja en el equipo de Cubelizer desarrollando algoritmos para el análisis de comportamiento de clientes en espacios retail físicos.',
    //             'Apasionado de los datos y la estadística, además de conocer más de 200 especies de dinosaurios, Ángel domina diversas técnicas y tecnologías relacionadas con la ingeniería de datos, el IoT, la visión artificial y el machine learning.'
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Introducción a la Visión Artificial con OpenCV',
    //       description: [
    //         'Daremos un repaso por las técnicas de visión artificial que se aplican hoy en día en investigación y a productos comerciales. Si, por ejemplo, quieres saber cómo funcionan por dentro las redes neuronales convolucionales o la detección facial, esta es tu charla.',
    //         'Los ejemplos vendrán acompañados de código en OpenCV para que se pueda experimentar durante la charla y también a posteriori.'
    //       ],
    //       startTime: {
    //         h: '11',
    //         m: '45'
    //       },
    //       endTime: {
    //         h: '12',
    //         m: '30'
    //       },
    //       type: 2,
    //       authors: [
    //         {
    //           name: 'Clara Luis',
    //           avatar: 'https://pbs.twimg.com/profile_images/1092797236260601856/Qn5xPUb-_400x400.jpg',
    //           bio: ['Audiovisual Systems Engineering @UC3M • @T3chFest organizer 👩‍💻 • Love #MachineLearning, #ComputerVision and #MusicInformationRetrieval • 📢#Feminism • #INFP'],
    //           social: {
    //             twitter: 'https://twitter.com/vocalyre',
    //             instagram: 'https://www.instagram.com/vocalyree/',
    //             url: 'https://www.smule.com/vocalyre'
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Hackeando tu memoria.',
    //       startTime: {
    //         h: '12',
    //         m: '30'
    //       },
    //       endTime: {
    //         h: '14',
    //         m: '00'
    //       },
    //       type: 2,
    //       authors: [
    //         {
    //           name: 'Francisco Valdesoiro Gil',
    //           avatar: 'https://pbs.twimg.com/profile_images/1072016049976107008/tydn73g7_400x400.jpg',
    //           bio: [
    //             'Mi pasión siempre ha estado en torno a la tecnología y la enseñanza, soy una persona muy curiosa y siempre me ha gustado investigar sobre el funcionamiento de la mente y el cómo adquirimos nuevos conocimientos.',
    //             'Estas inquietudes me llevaron desde aprender nuevas tecnologías desarrollando aplicaciones de realidad aumentada y virtual entre otras, a jugar con herramientas de memorización o mnemotecnia.',
    //             'Gracias a este hobbie me vi envuelto sin darme cuenta en ayudar a gente a memorizar más rápido para pasar sus oposiciones y exámenes e impartir talleres en escuelas de pilotos, empresas y colegios.'
    //           ],
    //           social: {
    //             twitter: 'https://twitter.com/GilValdesoiro',
    //             linkedin: 'https://www.linkedin.com/in/francisco-valdesoiro-gil-711209118/',
    //             github: 'https://github.com/FranciscoValdesoiro'
    //           }
    //         }
    //       ],
    //       description: [
    //         '¿Te ha pasado alguna vez que te has preparado un examen durante semanas y el día del examen te has quedado en blanco?',
    //         '¿Por qué hay gente que recuerda todo lo que lee o escucha y es capaz de recordar detalles que para el resto de la gente pasan desapercibidos?',
    //         'El objetivo de este taller es descubrir cómo funciona la memoria y conocer las herramientas que nos permitirán memorizar todo tipo de datos como nombres, listas de palabras, fechas y como preparar cualquier tipo de examen u oposición de una manera divertida y en mucho menos tiempo de lo que imaginas.'
    //       ]
    //     }]
    // }
    {
      name: 'Planta 0 - Corner',
      content: [
        {
          title: 'Encuentro con \'GBA MADRID\' Y \'BLOCKSTACK\'',
          description: [
            'GBA - Blockchain, Gobierno y Ciudadanos',
            'Introducción a GBA (Government Blockchain Association) Madrid. Potenciales usos de blockchain y otras DLTs para mejorar los servicios de los gobiernos a sus ciudadanos.',
            '---',
            'Blockstack, recupera tu soberanía digital',
            'Blockstack es un ecosistema blockchain que tiene a la identidad digital y la soberanía de los datos privados como su principal preocupación. En la actualidad cuenta con más de 250 aplicaciones desarrolladas sobre su sistema, con un interesante sistema de incentivos para los desarrolladores.'
          ],
          type: 3,
          authors: [
            {
              name: 'GBA Madrid',
              avatar: '',
              bio: [],
              social: {
                meetup: ' https://www.meetup.com/es-ES/Government-Blockchain-Association-GBA-Madrid/'
              }
            },
            {
              name: 'BlockStack',
              avatar: '',
              bio: [],
              social: {
                meetup: 'https://www.meetup.com/es-ES/Blockstack-Madrid/'
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
          title: 'Hackerspace en Campus - AgroLab IoT (microtaller)',
          description: [
            'Hemos traído una parte del hackerspace a Campus para presentar los proyectos que queremos llevar a cabo y animar a la comunidad a interesarse por el concepto de *Open Hardware* y el mundo *Maker*.',
            '* AgroLab IoT: El objetivo de este microtaller es dar las bases para realizar un sistema de riego autónomo para un cultivo doméstico y conseguir monitorizar en tiempo real ciertas condiciones del entorno.',
            'Más info: https://github.com/OSWHackerspace/AgrolabIoT'
          ],
          type: 3,
          authors: [
            {
              name: 'Sergio Morcuende',
              avatar: '',
              bio: [
                'Este ingeniero de telecomunicaciones es co-fundador de Bloomod (bloomod.com) y a la vez desarrollador full-stack en reclamador.es',
                'Colabora como mentor en OSW en los guilds relacionados con hardware, agricultura y salud.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/smorcuend',
                twitter: 'https://twitter.com/_serxius_',
                github: 'https://github.com/smorcuend'
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
      ]
    }
  ]
}

export default data

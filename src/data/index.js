const data = {
  title: 'Agenda Junio 2019',
  date: '30/03/2019',
  description: 'xxx', // Not used atm
  startTime: '10:00',
  endTime: '14:30',
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
          '- Novedades y noticias',
          '- Más movidas'
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
        title: ' DangerJS: Programar un bot en JS para validar Pull Request',
        duration: 45, // minutes
        description: [
          'Posiblemente una de las tareas que más estrés o piques causa entre los miembros de un equipo es la revisiones de código. Por varias razones:',
          '1. La prisas: El que ha realizado el desarrollo quiere que sus cambios pasan a la rama de desarrollo cuanto antes y el que tiene que revisar la PR tiene que dejar su tarea para darle salida al cambio',
          '2. La metodología: ¿Has escrito el titulo con el formato correcto? ¿Has añadido el código de la issue en el cuerpo del mensaje? ¿Has actualizado el change log? ¿La PR tiene las etiquetas correctas?',
          '3. Los criterios de código: No todos los miembros del equipo tienen la misma filosofía de calidad de código. Cosas como los comentarios, el formato del nombrado de variables, el path donde se posicionan los ficheros, el nombre de los ficheros...',
          'Para ayudarnos en este aspecto esta DangerJS. Una librería de JavaScript que permite programar scripts en NodeJS que nos pueden ayudar a controlar todos estos aspectos de la PR y más.',
          'El objetivo de esta charla es mostrar las posibilidades de DangerJS a la hora de programar bots para el control de las Pull Request en servidor de git remotos como Github y Bitbucket'
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
            name: 'Adrian Ferreres',
            avatar: '',
            bio: [
              'El asma, los videojuegos y Star Trek hicieron que con 11 años empezara a programar. Hoy en día, a mis 40 abriles, sigo programando en el lenguaje que más me gusta y apasiona; JavaScript.'
            ],
            social: {
              twitter: 'https://twitter.com/ardiadrianadri',
              github: 'https://github.com/ardiadrianadri'
              // url: 'https://lostinbrittany.org/'
            }
          }
        ]
      },
      {
        title: 'Networking 🤗 & Beers 🍻',
        startTime: {
          h: '13',
          m: '15'
        },
        endTime: {
          h: '14',
          m: '30'
        },
        type: 1,
        authors: [],
        note: ''
      }]
    },
    {
      name: 'Planta 0 (Cafetería)',
      content: [
        {
          title: 'Guilds',
          description: [
            'Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)'
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '14',
            m: '00'
          },
          type: 1
        }
      ]
    },
    {
      name: 'Planta 1 (Cafetería)',
      content: [
        {
          title: '¿Escribimos programas seguros? - HackMadrid %27',
          description: [
            'Un breve análisis de la situación en materia de seguridad informática. Repaso de los tres eslabones: usuarios-programadores-empresas.',
            'Errores, problemas en cada uno de ellos y focalización de los problemas particulares de los programadores.'
          ],
          authors: [
            {
              name: 'Daniel Mery',
              avatar: '',
              bio: [
                'Miembro y cofundador de: Planet Linux Caffe, HaskellMAD, HackMadrid%27, blockMAD'
              ],
              social: {
                twitter: 'https://twitter.com/dmery',
                url: 'http://hackmadrid.org/'
              }
            }
          ],
          startTime: {
            h: '11',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          type: 3
        },
        {
          title: 'Pundi X: un ecosistema completo para blockchain - BlockMAD',
          description: [
            'En esta ocasión, Álvaro presentará a los asistentes la solución que propone la marca asiática, su XPOS, XPASS y XWallet y desvelará los planes de expansión que juntos han diseñado para España',
            'La charla está enfocada a todo tipo de público, desde gente que quiera incorporar los pagos en cripto en su negocio a simplemente curiosos que quieran encontrar una nueva forma de comprar criptomonedas de una manera rápida, sencilla y segura.'
          ],
          authors: [
            {
              name: 'Álvaro Cobarro',
              avatar: '',
              bio: [
                'CEO & Founder de bitcobie. Apasionado de todo lo que este relacionado con la tecnología, blockchain y criptomonedas.'
              ],
              social: {
                url: 'https://www.bitcobie.com/',
                linkedin: 'https://www.linkedin.com/in/alvarocobarro',
                meetup: 'https://www.meetup.com/es-ES/BlockMAD/'
              }
            }],
          startTime: {
            h: '13',
            m: '00'
          },
          endTime: {
            h: '14',
            m: '30'
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
      name: 'Planta 0 (Corner)',
      content: [
        {
          title: 'Taller - Montar un blog gratis con React y WordPress',
          description: [
            'Taller en el que veremos como montar un blog gratis, con tu propio dominio, y en minutos, usando:',
            '- Frontity (React) para el front-end',
            '- WordPress.com para el back-end',
            '- Now.sh para desplegar en producción'
          ],
          startTime: {
            h: '11',
            m: '15'
          },
          endTime: {
            h: '12',
            m: '45'
          },
          type: 2,
          authors: [
            {
              name: 'David Arenas',
              avatar: '',
              bio: ['Desarrollador Full-Stack en Frontity desde 2017, donde hemos construído un framework open-source para hacer temas de WordPress usando React. Fanático de JavaScript, React, Nodejs, y del Metal 🤘'],
              social: {
                twitter: 'https://twitter.com/DAreRodz',
                github: 'https://github.com/DAreRodz',
                url: 'https://frontity.org/'
              }
            },
            {
              name: 'Mario Santos',
              avatar: '',
              bio: ['Community Success en Frontity, aprendiendo e involucrándome poco a poco en el apasionante mundo de la tecnología y la programación 😁. No soy un prodigio pero le pongo ganas 💪'],
              social: {
                twitter: 'https://twitter.com/santosguillamot',
                github: 'https://github.com/santosguillamot',
                url: 'https://frontity.org/'
              }
            }
          ]
        }
      ]
    }
  ]
}

export default data

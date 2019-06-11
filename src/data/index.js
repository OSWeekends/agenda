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
        title: 'Por confirmar',
        duration: 45, // minutes
        description: [
          '...'
        ],
        startTime: {
          h: '11',
          m: '00'
        },
        endTime: {
          h: '11',
          m: '45'
        },
        type: 2,
        authors: [
          // {
          //   name: 'Horacio González',
          //   avatar: 'https://pbs.twimg.com/profile_images/1106247883542663169/HYOPGJMb_400x400.jpg',
          //   bio: [
          //     'DevRel en OVH y Google Developer Expert. Español perdido en Bretaña, programador, orador y sobre todo geek. Ingeniero de software y DevRel durante el día, líder de FinistDevs y organizador del DevFest du Bout du Monde por la noche, Horacio comenzó su andadura en el mundo de la programación en 1997 y nunca lo ha abandonado.',
          //     'Después de algunos años como líder de frontend @ warp10io como Cityzen Data, actualmente trabaja como Evangelist Developer en OVH. Además, es orador frecuente en conferencias como Devoxx, Codemotion, DevFest Nantes o BreizhCamp.'
          //   ],
          //   social: {
          //     twitter: 'https://twitter.com/LostInBrittany',
          //     github: 'https://github.com/LostInBrittany',
          //     url: 'https://lostinbrittany.org/'
          //   }
          // }
        ]
      },
      {
        title: 'Networking 🤗',
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
        // {
        //   title: 'BlockMAD',
        //   description: [`En la edición de enero de 2018, BlockMAD tuvo su puesta de largo en OS Weekends, en la que se presentó un proyecto que relacionaba blockchain y administraciones públicas.
        //     Poco más de un año después y en el mismo marco, tenemos el placer de presentar nuestro nuevo proyecto: BlockMAD Labs.
        //     Este laboratorio de desarrollo de Blockchain va a tratar de llevar a cabo distintos proyectos de colaboración, principalmente a nivel de comunidad, con entidades y startups del sector, interesadas en explorar tecnologías punta y que tengan aplicación inmediata en las mismas.
        //     Para ello, las entidades participantes ofrecerán charlas y talleres en las que expongan detalles de sus soluciones tecnológicas y en qué ámbitos necesitan de la colaboración de la comunidad, así como se integrarán a las distintas reuniones de los grupos de trabajo que se formen, aportando su experiencia y sus consejos.
        //     Todos aquellos desarrolladores, técnicos o investigadores, entre otros, interesados en participar, en la medida de sus posibilidades, serán bienvenidos.`, `Dentro de los proyectos ya en marcha cabe destacar:`,
        //   '- Blockledger: en este Guild y a iniciativa de BlockMAD, se está desarrollando un blockchain permisionado para el intercambio de valor, mediante tokens, entre distintas comunidades tecnológicas con sus patrocinadores y proveedores.',
        //   '- Ethic Hub y BlockMAD: junto con la startup Ethic Hub, uno de los pocos proyectos de éxito de la aplicación de blockchain y con impacto social, hemos empezado una colaboración en la que se espera que sirva tanto para mejorar sus infraestructuras de virtualización, como en otros aspectos de sus desarrollos.',
        //   '- Brainrex: Está previsto organizar próximamente un taller para trabajar con sus herramientas avanzadas de análisis sintáctico mediante Inteligencia Artificial, sobre su propio Data Lake.',
        //   'Y otros que iremos dando a conocer posteriormente.'
        //   ],
        //   authors: [
        //     {
        //       name: 'BlockMAD',
        //       avatar: 'https://pbs.twimg.com/profile_images/977557690749681665/kKiKMn0W_400x400.jpg',
        //       bio: [
        //         'BlockMAD es una comunidad dedicada principalmente a la tecnología Blockchain, sobre to do en sus aspectos técnicos y a la elaboración de proyectos. Organizamos distintas actividades, entre ellas: presentaciones, talleres, code-exchange y hack-a-thons.',
        //         'BlockMAD es una comunidad abierta, que se mantiene firme en la defensa del software libre, descentralizado y distribuido.',
        //         'Únete a nuestra comunidad si tienes ganas de aprender, aportar tus conocimientos y crecer en este fascinante ecosistema.'
        //       ],
        //       social: {
        //         twitter: 'https://twitter.com/blockmad',
        //         meetup: 'https://www.meetup.com/es-ES/BlockMAD/'
        //       }
        //     }],
        //   startTime: {
        //     h: '11',
        //     m: '00'
        //   },
        //   endTime: {
        //     h: '11',
        //     m: '30'
        //   },
        //   type: 3
        //
        // },
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
          title: 'Taller - montar un micro blog con React y Wordpress',
          description: [
            'Taller en el que veremos como a montar un micro blog en react, con el back en wordpress',
            'https://frontity.org/'
          ],
          startTime: {
            h: '11:30',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '00'
          },
          type: 2,
          authors: [
            // {
            //   name: 'Carlos Azaustre',
            //   avatar: 'https://pbs.twimg.com/profile_images/1072016049976107008/tydn73g7_400x400.jpg',
            //   bio: [
            //     'Senior Front End Software Engineer at @IBMResearch #IBMQ'
            //   ],
            //   social: {
            //     twitter: 'https://github.com/carlosazaustre',
            //     youtube: 'https://www.youtube.com/channel/UCJgGc8pQO1lv04VXrBxA_Hg',
            //     twitch: 'https://www.twitch.tv/carlosazaustre',
            //     instagram: 'https://www.instagram.com/carlosazaustre/',
            //     github: 'https://github.com/carlosazaustre',
            //     url: 'https://carlosazaustre.es/'
            //   }
            // }
          ]
        }]
    }
  ]
}

export default data

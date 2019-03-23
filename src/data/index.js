const data = {
  title: 'Agenda Marzo 2019',
  date: '30/03/2019',
  description: 'xxx',
  startTime: '10:00',
  endTime: '15:00',
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
          type: 1
        },
        {
          title: 'KeyNote 📜',
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
          title: 'Kubernetes: más allá de Minikube',
          duration: 45, // minutes
          description: [
            'Últimamente Kubernetes está en todas partes, parece que es la tendencia en cualquier evento o charla techie que se precie. Y como siempre que un tema es tan popular, hay miles de tutoriales, publicaciones en blogs y charlas sobre cómo comenzar con Kubernetes. Parece que todo es perfecto en el mundo de los contenedores, ¿verdad?',
            'Bueno, para ser honestos, no es así; sobre todo debido a que la gran mayoría de estos tutoriales, artículos y charlas se detienen justo después del * Hello Kube *, justo cuando ya tienes algunas aplicaciones ejecutándose en MiniKube en tu portátil. Y aquí no está el final, sino apenas el principio ...',
            'En esta charla, hablaré sobre esta brecha entre MiniKube y una infraestructura de producción, las ventajas de las infraestructuras de Kubernetes administradas, las trampas y el bloqueo de algunos proveedores que no promueven estándares realmente abiertos, cómo obtener suficiente confianza en tu solución para ejecutar Kubernetes sobre Kubernetes y otros temas de este tipo. Y voy a aprovechar la oportunidad para contar cómo hemos montado nuestra solución alternativa de Managed Kubernetes en OVH, desarrollada en colaboración con los usuarios y fiel a los estándares open source.'
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
            {
              name: 'Horacio González',
              // avatar: 'url-img'
              bio: [
                'DevRel en OVH y Google Developer Expert. Español perdido en Bretaña, programador, orador y sobre todo geek. Ingeniero de software y DevRel durante el día, líder de FinistDevs y organizador del DevFest du Bout du Monde por la noche, Horacio comenzó su andadura en el mundo de la programación en 1997 y nunca lo ha abandonado.',
                'Después de algunos años como líder de frontend @ warp10io como Cityzen Data, actualmente trabaja como Evangelist Developer en OVH. Además, es orador frecuente en conferencias como Devoxx, Codemotion, DevFest Nantes o BreizhCamp.'
              ],
              social: {
                github: 'https://github.com/LostInBrittany',
                url: 'https://lostinbrittany.org/'
              }
            }
          ]
        },
        {
          title: 'La vida secreta de un DevOps',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          },
          type: 2,
          authors: [
            {
              name: 'Jorge Vidal',
              social: {
                twitter: 'xttx',
                linkedin: 'xwwaax',
                facebook: 'xwwwx',
                youtube: 'xxssss',
                instagram: 'xxssss',
                github: 'gsss',
                url: 'www.baumannzone.com'
              },
              bio: [
                'Jorge tiene más de 15 años de experiencia en el sector IT. Ha sido administrador de sistemas durante muchos años, pero el mundo del emprendimiento le aporto habilidades adicionales como "comercial", "preventa", "evangelizador", "desarrollo de negocio" y "charlatán".',
                'En sus ratos libres se dedica a conectar y mentorizar personas, y en OSW se le conoce como Goku, pero no por los pelos (que también), si no por liderar la guild de sistemas/devops que sostiene actualmente todas las guilds desarrolladas en esta comunidad.' +
                'Actualmente trabaja Intelygenz como experto en DevOps/SRE'
              ]
            }
          ],
          description: [
            'En la charla voy a desmentir mitos, voy a contar lo que hace un devops de verdad, que habilidades deberías tener para ejercer y por donde debería empezar un perfil de desarrollador para llegar a serlo.'
          ]
        },
        {
          title: 'The Amazing Guilds Showoff',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          },
          type: 1,
          authors: [],
          note: ''
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
        }
      ]
    },
    {
      name: 'Café · Planta 1',
      content: [
        {
          title: '-️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          }
        },
        {
          title: '-',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          }
        },
        {
          title: 'HackMadrid',
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '11',
            m: '45'
          },
          type: 3
        },
        {
          title: '-',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          }
        },
        {
          title: '-',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          }
        }
      ]
    },
    {
      name: 'Meetup Space',
      content: [
        {
          title: '-️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          }
        },
        {
          title: '-',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          }
        },
        {
          title: 'Machine Learning para profanos',
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
            {
              name: 'Angel Luengo',
              social: {
                twitter: '@pocoyo'
              }
            }
          ],
          note: 'extra extra..'
        },
        {
          title: 'Visión Artificial',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          },
          type: 2,
          authors: [
            {
              name: 'Clara Luis',
              social: {
                url: ['asdasd.com']
              }
            }
          ]
        },
        {
          title: '-',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          }
        }
      ]
    },
    {
      name: 'Café · Planta 0',
      content: [
        {
          title: '-️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          }
        },
        {
          title: '-',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          }
        },
        {
          title: 'Guilds',
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '11',
            m: '45'
          },
          type: 1
        },
        {
          title: 'Guilds',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          },
          type: 1
        },
        {
          title: 'Guilds',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          },
          type: 1
        }
      ]
    },
    {
      name: 'Sótano',
      content: [
        {
          title: 'Hackeando tu memoria.',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '14',
            m: '00'
          },
          type: 2,
          authors: [
            {
              name: 'Francisco Valdesoiro Gil',
              // avatar: 'url-img'
              bio: [
                'Mi pasión siempre ha estado en torno a la tecnología y la enseñanza, soy una persona muy curiosa y siempre me ha gustado investigar sobre el funcionamiento de la mente y el cómo adquirimos nuevos conocimientos.',
                'Estas inquietudes me llevaron desde aprender nuevas tecnologías desarrollando aplicaciones de realidad aumentada y virtual entre otras, a jugar con herramientas de memorización o mnemotecnia.',
                'Gracias a este hobbie me vi envuelto sin darme cuenta en ayudar a gente a memorizar más rápido para pasar sus oposiciones y exámenes e impartir talleres en escuelas de pilotos, empresas y colegios.'
              ],
              social: {
                twitter: 'https://twitter.com/GilValdesoiro',
                linkedin: 'https://www.linkedin.com/in/francisco-valdesoiro-gil-711209118/',
                github: 'https://github.com/FranciscoValdesoiro'
              }
            }
          ],
          description: [
            '¿Te ha pasado alguna vez que te has preparado un examen durante semanas y el día del examen te has quedado en blanco?',
            '¿Por qué hay gente que recuerda todo lo que lee o escucha y es capaz de recordar detalles que para el resto de la gente pasan desapercibidos?',
            'El objetivo de este taller es descubrir cómo funciona la memoria y conocer las herramientas que nos permitirán memorizar todo tipo de datos como nombres, listas de palabras, fechas y como preparar cualquier tipo de examen u oposición de una manera divertida y en mucho menos tiempo de lo que imaginas.'
          ]
        }
      ]
    }
  ]
}

export default data

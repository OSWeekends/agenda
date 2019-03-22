const data = {
  title: 'Agenda OSW - Marzo 2019sss',
  date: '30/03/2019',
  description: 'xxx',
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
          type: 1, // Colores
          authors: [],
          description: ''
        },
        {
          title: 'KeyNote',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          },
          type: 1,
          authors: [],
          description: ''
        },
        {
          title: 'Kubernetes',
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
              name: 'Horacio',
              social: {
                twitter: '@xxx',
                linkedin: '',
                facebook: '',
                youtube: '',
                url: ['aaa.co', 'bbb.co']
              }
            }
          ],
          description: ''
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
                twitter: 'xx',
                linkedin: 'xx',
                facebook: 'xx',
                youtube: 'xx',
                url: ['cc.co', 'dd.co']
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
    }
  ]
}

export default data

const data = {
  title: 'Agenda OSW - Marzo 2019',
  date: '30/03/2019',
  data: [
    {
      name: 'Auditorio',
      content: [
        {
          name: 'Recepción y café ☕️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          },
          type: 0, // Colores
          authors: []
        },
        {
          name: 'KeyNote',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          },
          type: 0,
          authors: []
        },
        {
          name: 'Kubernetes',
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '11',
            m: '45'
          },
          type: 1,
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
          ]
        },
        {
          name: 'La vida secreta de un DevOps',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          },
          type: 1,
          authors: [
            {
              name: 'Jorge Vidal',
              social: {
                twitter: 'xx',
                linkedin: 'xx',
                facebook: 'xx',
                youtube: 'xx',
                url: ['cc.co', 'dd.co']
              }
            }
          ]
        },
        {
          name: 'The Amazing Guilds Showoff',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          },
          type: 0,
          authors: [],
          note: ''
        },
        {
          name: 'Networking 🤗',
          startTime: {
            h: '13',
            m: '15'
          },
          endTime: {
            h: '14',
            m: '30'
          },
          type: 0,
          authors: [],
          note: ''
        }
      ]
    },
    {
      name: 'Café · Planta 1',
      content: [
        {
          name: '-️',
          startTime: {
            h: '10',
            m: '00'
          },
          endTime: {
            h: '10',
            m: '30'
          },
          type: null
        },
        {
          name: '-',
          startTime: {
            h: '10',
            m: '30'
          },
          endTime: {
            h: '11',
            m: '00'
          },
          type: null
        },
        {
          name: 'HackMadrid',
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
              name: '??',
              social: {
                twitter: ''
              }
            }
          ]
        },
        {
          name: 'La vida secreta de un DevOps',
          startTime: {
            h: '11',
            m: '45'
          },
          endTime: {
            h: '12',
            m: '30'
          },
          type: 1,
          authors: [
            {
              name: 'Jorge Vidal',
              social: {
                twitter: 'xx',
                linkedin: 'xx',
                facebook: 'xx',
                youtube: 'xx',
                url: ['cc.co', 'dd.co']
              }
            }
          ]
        },
        {
          name: 'The Amazing Guilds Showoff',
          startTime: {
            h: '12',
            m: '30'
          },
          endTime: {
            h: '13',
            m: '15'
          },
          type: 0,
          authors: [],
          note: ''
        },
        {
          name: 'Networking 🤗',
          startTime: {
            h: '13',
            m: '15'
          },
          endTime: {
            h: '14',
            m: '30'
          },
          type: 0,
          authors: [],
          note: ''
        }
      ]
    }
  ]
}

export default data

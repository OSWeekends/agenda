const data = {
  title: 'Agenda Enero 2020',
  date: '18/01/2020',
  description: '¡Cuarto evento de la temporada! Primero del año 🤙',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/267802880/',
  startTime: '10:00',
  endTime: '14:00',
  tracks: [
    {
      name: 'Track #1',
      content: [
        {
          title: 'Bienvenida y café virtual ☕️',
          description: [
            '- Puntos del día 🔥',
            '- Agenda 📇',
            '- OSWorld 📸'
          ],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '11',
            m: '20'
          },
          variant: 'primary' // Blue tag
        },
        {
          title: 'Git Bisect, el comando desconocido de git',
          type: 'charla',
          description: [
            'Debugging automático con GIT'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'git'],
          authors: [
            {
              name: 'Carlos Castaño',
              bio: [
                'Carlos es desarrollador de software desde 2013 [FullStack], ha trabajado para varias empresas de telecomunicaciones y comercio electrónico, actualmente trabaja en El Corte Inglés.',
                'Es <code>VIM</code> user.'
              ],
              social: {
                twitter: 'https://twitter.com/calbertts',
                github: 'https://github.com/calbertts',
                linkedin: 'https://www.linkedin.com/in/calbertts'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Lazy (and tricky) loading en Angular.',
          type: 'charla',
          description: [
            'Descripción: Angular no es fácil, pero le pillas el truco y lo terminas queriendo. Pero no solo es difícil, sino que es mañoso y tiene cosas muy "tricky", como lo es cargar los módulos secundarios de manera "lazy", que a mí me costó mucho entender y aplicar sin cometer los mismos errores una y otra vez. Como a mí me gusta contarles lo que logro después de darme tantos golpes, pues les quiero contar cuáles son esos errores que yo sigo cometiendo para que, quienes se quieran iniciar en Angular, los tengan en cuenta y sean más felices en este camino.'
          ],
          startTime: { h: '11', m: '40' },
          endTime: { h: '12', m: '00' },
          tags: ['Angular', 'LazyLoad'],
          authors: [
            {
              name: 'Ariane Jurado De Bilbao.',
              bio: [
                'Enfermera y psicopedagoga de Venezuela y ahora programadora en Kairos DS. Mamá de Sebas y rockera'
              ],
              social: {
                twitter: 'https://twitter.com/Ari_Reinventada',
                github: 'https://github.com/ArianeJDB',
                linkedin: 'https://www.linkedin.com/in/arianejuradodebilbao/'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Git Bisect, el comando desconocido de git',
          type: 'charla',
          description: [
            'Debugging automático con GIT'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'git'],
          authors: [
            {
              name: 'Carlos Castaño',
              bio: [
                'Carlos es desarrollador de software desde 2013 [FullStack], ha trabajado para varias empresas de telecomunicaciones y comercio electrónico, actualmente trabaja en El Corte Inglés.',
                'Es <code>VIM</code> user.'
              ],
              social: {
                twitter: 'https://twitter.com/calbertts',
                github: 'https://github.com/calbertts',
                linkedin: 'https://www.linkedin.com/in/calbertts'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: 'Git Bisect, el comando desconocido de git',
          type: 'charla',
          description: [
            'Debugging automático con GIT'
          ],
          startTime: { h: '11', m: '20' },
          endTime: { h: '11', m: '40' },
          tags: ['testing', 'git'],
          authors: [
            {
              name: 'Carlos Castaño',
              bio: [
                'Carlos es desarrollador de software desde 2013 [FullStack], ha trabajado para varias empresas de telecomunicaciones y comercio electrónico, actualmente trabaja en El Corte Inglés.',
                'Es <code>VIM</code> user.'
              ],
              social: {
                twitter: 'https://twitter.com/calbertts',
                github: 'https://github.com/calbertts',
                linkedin: 'https://www.linkedin.com/in/calbertts'
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
    }
  ]
}

export default data

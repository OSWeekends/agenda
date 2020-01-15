const data = {
  title: 'Agenda Enero 2020',
  date: '18/01/2020',
  description: '¡Cuarto evento de la temporada! Primero del año 🤙',
  meetupLink: 'https://www.meetup.com/es-ES/Open-Source-Weekends/events/267802880/',
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
            '- Patrocinadores 💙',
            '- Agenda 📇',
            '- OSWorld 📸',
            '- ¡Sorpresitas! 🎁'
          ],
          startTime: { h: '10', m: '30' },
          endTime: { h: '11', m: '00' },
          variant: 'primary'
        },
        {
          title: 'Quality Engineering',
          type: 'charla',
          description: [
            '¿Qué es un ingeniero/a de calidad?, ¿Cuál es el día a día de un "tester"?, ¿QA o QE?, ¿Es necesario un departamento de calidad?, ¿Qué requisitos deberia tener un QE?',
            'Todas estas preguntas (y muchas más) serán respondidas en esta charla.'
          ],
          startTime: { h: '11', m: '00' },
          endTime: { h: '11', m: '45' },
          tags: ['Testing', 'QE', 'Departamento Calidad'],
          authors: [
            {
              name: 'Eva Pareja',
              bio: [
                'Eva es Quality Engineer Lead en Accenture, en el departamento de Tecnilógica'
              ],
              social: {
                twitter: 'https://twitter.com/eparejat'
                // url: 'https://g3rv4.com',
                // github: 'https://github.com/g3rv4',
                // linkedin: 'https://www.linkedin.com/in/g3rv4'
              }
            }
          ],
          variant: 'success'
        },
        {
          title: '¿Por qué la mayoria de soluciones blockchain usan Hyperledger Fabric?',
          type: 'charla',
          description: [
            'Desde que apareció la tecnología blockchain ha ido avanzando con pasos agigantados. El año pasado fue el año de las blockchain privadas ¿Te gustaría saber por qué? En esta charla analizaremos la evolución de la tecnología para entender por qué Hyperledger Fabric es de las plataformas más utilizadas.'
          ],
          startTime: { h: '12', m: '00' },
          endTime: { h: '12', m: '45' },
          tags: ['Blockchain', 'Hyperledger', 'Fabric'],
          authors: [
            {
              name: 'Mª Teresa Nieto',
              bio: [
                'Blockchain Technological Specialist en Telefónica',
                'Maritere es Ingeniera Informática y actualmente trabaja como Blockchain Technological Specialist en el área de Blockchain de Innovación Global de Telefónica. Su labor a lo largo de los últimos 3 años se ha centrado en la investigación y desarrollo de nuevas soluciones basadas en la tecnología blockchain y en la divulgación de la tecnología en diferentes universidades españolas.'
              ],
              social: {
                twitter: 'https://twitter.com/_mtnieto',
                // url: 'https://g3rv4.com',
                github: 'https://github.com/mtnieto',
                linkedin: 'https://www.linkedin.com/in/mariateresanieto'
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
          authors: [
            {
              name: 'Open Source Weekends',
              social: {
                meetup: 'https://www.meetup.com/es-ES/Open-Source-Weekends/',
                twitter: 'https://twitter.com/os_weekends',
                github: 'https://github.com/osweekends',
                url: 'http://osweekends.com/'
              }
            }
          ],
          variant: 'primary'
        }
      ]
    },
    {
      name: 'Cafetería - Planta 1 ',
      content: [
        {
          title: '¿Qué tanto sabemos de la tecnología?',
          type: 'Charla',
          description: [
            'La idea de la charla de hoy es comenzar a entender porque el anonimato, la seguridad y nuestra privacidad están bajo amenaza. Que tipo de peligros enfrentamos, qué consecuencias subyacen por debajo de la “capa de marketing”, finalmente cómo reaccionamos y cómo deberíamos reaccionar.',
            'Más info: <a href="https://www.meetup.com/es-ES/HackMadrid-27/events/267906849/">https://www.meetup.com/es-ES/HackMadrid-27/events/267906849/</a>'
          ],
          tags: ['seguridad', 'tecnología', 'hacking'],
          authors: [
            {
              name: 'Daniel Mery',
              bio: [
                'Daniel es miembro de HackMadrid, HaskellMAD, blockMAD y también ha sido el fundador de Planet Linux Caffe.'
              ],
              social: {
                twitter: 'https://twitter.com/dmery',
                meetup: 'https://hackmadrid.org/'
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
          variant: 'warning'
        },
        {
          title: 'Blockchain generations: La evolución de Blockchain',
          type: 'Charla',
          tags: ['blockchain', 'cryptomovidas'],
          description: [
            'Con el título "Blockchain generations" en esta ocasión Josep Servat nos ofrece una panorámica de la evolución de la tecnología blockchain, desde su nacimiento como algo imprescindible para el funcionamiento de Bitcoin, la primera criptomoneda que se ha conseguido mantener exitosamente durante más de diez años y que ha dado pie al nacimiento de una gran cantidad de proyectos, que no sólo tienen que ver con el intercambio de valor, sino con muchos otros campos relacionados con la tecnología y que, como estamos viendo, la van a cambiar de muchas maneras. Aparte de repasar las principales etapas o generaciones de blockchain, se van a ver los algoritmos de consenso más usados, así como qué clase de problemas son susceptibles de resolverse mediante blockchain.',
            'Más info: <a href="https://www.meetup.com/es-ES/BlockMAD/events/267933137/">https://www.meetup.com/es-ES/BlockMAD/events/267933137/</a>'
          ],
          authors: [
            {
              name: 'Josep Servat',
              // avatar: '',
              bio: [
                'Entusiasta de la tecnología y de la programación, profesionalmente dedicado a la tecnología desde hace mas de 15 años. Trabaja actualmente como senior Node js y blockchain developer en etoshi.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/servatj/',
                github: 'https://github.com/servatj',
                twitter: 'https://twitter.com/servatj'
              }
            },
            {
              name: 'BlockMad Meetup',
              bio: ['Meetup de Blockchain en Madrid'],
              social: {
                meetup: 'https://www.meetup.com/es-ES/BlockMAD/'
              }
            }
          ],
          startTime: { h: '12', m: '00' },
          endTime: { h: '13', m: '00' },
          variant: 'warning'
        }
      ]
    },
    {
      name: 'Meetup Space (Sótano)',
      content: [
        {
          type: 'taller',
          title: 'Taller Javascript: Introduccion a ES6',
          description: [
            'Si estás aprendiendo a programar o quieres dar un repaso a las features más importantes que ES6 introdujo a JavaScript, este taller es para ti. Juntos veremos los principales cambios que todo bien desarrollador debe conocer, y los pondremos en práctica con katas muy molonas y ¡para todos los niveles!',
            'Material para el taller: portátil, editor de texto como VSCode (también puedes usar uno online). Si quieres, puedes clonar el repo: <a href="https://github.com/node-girls/es6-and-beyond">https://github.com/node-girls/es6-and-beyond</a>'
          ],
          tags: ['JavaScript', 'ES6', 'katas'],
          startTime: {
            h: '11',
            m: '00'
          },
          endTime: {
            h: '13',
            m: '30'
          },
          authors: [
            {
              name: 'Silvia García Cacho',
              bio: ['Desarrolladora front-end en Triporate, gestora cultural reinventada y escritora cuando nadie mira.'],
              social: {
                twitter: 'https://twitter.com/garcaplay'
              }
            },
            {
              name: 'Fabiola Vieyra',
              bio: ['Desarrolladora full stack en Triporate, mentora en @NodeGirlsMadrid. En permanente aprendizaje para compartirlo y crecer junt@s.'],
              social: {
                twitter: 'https://twitter.com/_Fa_Vi'
              }
            }
          ],
          variant: 'success'
        }
      ]
    }
  ]
}

export default data

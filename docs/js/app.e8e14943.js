(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)i=s[u],r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"0cc3d2db"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/agenda/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"09ab":function(e,t,a){},"09d7":function(e,t,a){e.exports=a.p+"img/parrot.e4d958b3.gif"},"480c":function(e,t,a){"use strict";var n=a("f564"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("9f7b"),o=a.n(r),i=a("ecee"),s=a("f2d1"),c=a("c074"),l=a("ad3d"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("router-view")],1)],1)},d=[],m=(a("7faf"),a("2877")),p={},f=Object(m["a"])(p,u,d,!1,null,null,null),h=f.exports,b=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("BaseHeader",{attrs:{title:e.data.title}}),a("ScheduleList",{attrs:{tracks:e.data.tracks}}),a("BaseFooter")],1)},k=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"base-header mb-3"},[a("h1",{staticClass:"title"},[e._v("\n      "+e._s(e.title)+"\n    ")]),a("span",{staticClass:"time lead"},[a("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.data.startTime))]),a("span",{staticClass:"text-muted px-2"},[e._v("-")]),a("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.data.endTime))])],1)])])},y=[],_=a("5176"),w=a.n(_),T={title:"Agenda Octubre 2019",date:"12/10/2019",description:"¡Primer evento de la temporada!",startTime:"10:00",endTime:"13:30",tracks:[{name:"Auditorio",content:[{title:"Recepción y café ☕️",startTime:{h:"10",m:"00"},endTime:{h:"10",m:"30"},type:1},{title:"KeyNote 📜",description:["- Novedades temporada y noticias","- Guilds & Hacktoberfest","- Patrocinadores","- Sorpresas y más movidas 🎃🎁🎃🎁🎃🎁"],startTime:{h:"10",m:"30"},endTime:{h:"11",m:"00"},type:1},{title:"2017 Odisea en el Lodo",duration:45,description:["13 de Marzo de 2017, parece que no hace tanto, pero depende un poco a quien le preguntes.","En 2017 Odisea en el lodo se va a intentar contar la experiencia intensa y trepidante que ha supuesto mi incorporación en una startup en continuo crecimiento, en la que me encontré siendo la primera y única persona del equipo de desarrollo con un proyecto heredado.","Se explicará en que estado se encontraba el proyecto al principio, la serie de acciones que se han realizado para remolcar un barco que iba a la deriva y el planteamiento para 2020 del stack que tenemos el actual equipo de desarrollo para poder olvidarnos de ese proyecto inicial que me encontré ese 13 de Marzo de 2017."],startTime:{h:"11",m:"15"},endTime:{h:"12",m:"00"},type:2,authors:[{name:"Miguel Jiménez",bio:["CTO de Apeteat"],social:{linkedin:"https://www.linkedin.com/in/miguelflg13",twitter:"https://twitter.com/miguelFLG13"}}]},{title:"Networking & Beers 💃🍻",startTime:{h:"12",m:"30"},endTime:{h:"13",m:"30"},type:1,authors:[],note:""}]},{name:"Cafetería - Planta 0",content:[{title:"💙 Guilds & Hacktoberfest 🎃",description:["Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)","Edición especial 💙 Hacktoberfest 🎃, intentaremos conseguir nuestra camiseta haciendo 4 Pull Request a repositorios Open Source (Nuestros proyectos guilders pueden serte de ayuda, tenemos Issues que necesitan ser resueltas 😜)"],startTime:{h:"11",m:"00"},endTime:{h:"13",m:"00"},type:1}]},{name:"Cafetería - Planta 1 ",content:[{title:"Social Engineering #02: El día a día de un Pentester - HackMadrid %27",description:["En esta segunda entrega, Kneda expondrá un caso real y explicará cómo se llevó a cabo. Por si os perdiste la primera entrega, la podréis ver desde aquí http://www.kneda.net/Social_Engineering_01.html","Errores, problemas en cada uno de ellos y focalización de los problemas particulares de los programadores."],authors:[{name:"Kneda",avatar:"",bio:["Trabaja de Black Box Pentester en Hack 4ensic Team. Tiene un Postgrado en Informática Forense y Delitos Informáticos + un Master en Seguridad informática y Hacking. Da talleres y charlas sobre Seguridad Informática y Hacking. Es co-fundador de Hack4ensicTeam y co-organizador HackMadrid %27"],social:{twitter:"https://twitter.com/JR_kneda",meetup:"https://www.meetup.com/es-ES/HackMadrid-27",url:"http://hackmadrid.org/"}}],startTime:{h:"11",m:"00"},endTime:{h:"12",m:"00"},type:3},{title:"Presentación y demo de GOLEM - BlockMAD",description:["Golem es un proyecto de computación distribuida, con un sistema de remuneraciones y control de uso mediante un token propio, desarrollado sobre la blockchain de Ethereum.","Más info: https://www.meetup.com/es-ES/BlockMAD/events/265527225/"],authors:[{name:"Juan Antonio Lleó - BlockMAD",avatar:"",bio:["Coordinador BlockMAD"],social:{linkedin:"https://www.linkedin.com/in/juan-antonio-lle%C3%B3-7b5a5937/",twitter:"https://twitter.com/juan_a_lleo",meetup:"https://www.meetup.com/es-ES/BlockMAD/",url:"https://golem.network/?ref=OSWeekends"}},{name:"Francisco Arencibia - HackMadrid %27",social:{url:"http://hackmadrid.org/",meetup:"https://www.meetup.com/es-ES/HackMadrid-27"}}],startTime:{h:"12",m:"00"},endTime:{h:"13",m:"00"},type:3}]},{name:"Planta 0 - Corner",content:[{title:"Encuentro con 'GBA MADRID' Y 'BLOCKSTACK'",description:["GBA - Blockchain, Gobierno y Ciudadanos","Introducción a GBA (Government Blockchain Association) Madrid. Potenciales usos de blockchain y otras DLTs para mejorar los servicios de los gobiernos a sus ciudadanos.","---","Blockstack, recupera tu soberanía digital","Blockstack es un ecosistema blockchain que tiene a la identidad digital y la soberanía de los datos privados como su principal preocupación. En la actualidad cuenta con más de 250 aplicaciones desarrolladas sobre su sistema, con un interesante sistema de incentivos para los desarrolladores."],type:3,authors:[{name:"GBA Madrid",avatar:"",bio:[],social:{meetup:" https://www.meetup.com/es-ES/Government-Blockchain-Association-GBA-Madrid/"}},{name:"BlockStack",avatar:"",bio:[],social:{meetup:"https://www.meetup.com/es-ES/Blockstack-Madrid/"}}],startTime:{h:"11",m:"00"},endTime:{h:"12",m:"00"}},{title:"Hackerspace en Campus - AgroLab IoT (microtaller)",description:["Hemos traído una parte del hackerspace a Campus para presentar los proyectos que queremos llevar a cabo y animar a la comunidad a interesarse por el concepto de *Open Hardware* y el mundo *Maker*.","* AgroLab IoT: El objetivo de este microtaller es dar las bases para realizar un sistema de riego autónomo para un cultivo doméstico y conseguir monitorizar en tiempo real ciertas condiciones del entorno.","Más info: https://github.com/OSWHackerspace/AgrolabIoT"],type:3,authors:[{name:"Sergio Morcuende",avatar:"",bio:["Este ingeniero de telecomunicaciones es co-fundador de Bloomod (bloomod.com) y a la vez desarrollador full-stack en reclamador.es","Colabora como mentor en OSW en los guilds relacionados con hardware, agricultura y salud."],social:{linkedin:"https://www.linkedin.com/in/smorcuend",twitter:"https://twitter.com/_serxius_",github:"https://github.com/smorcuend"}}],startTime:{h:"12",m:"00"},endTime:{h:"13",m:"00"}}]}]},S=T,E={name:"BaseHeader",props:{title:{type:String,required:!0}},data:function(){return{data:S}},methods:{goBack:function(){w()(document.createElement("a"),{target:"_blank",href:"https://osweekends.com"}).click()}}},O=E,C=(a("480c"),Object(m["a"])(O,g,y,!1,null,null,null)),A=C.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.tracks,function(e,t){return[a("ScheduleTable",{key:t,attrs:{track:e}})]})],2)},j=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-5"},[a("b-table",{attrs:{items:e.track.content,fields:e.fields,outlined:"",hover:""},scopedSlots:e._u([{key:"startTime",fn:function(e){return[a("ScheduleTableColTime",{attrs:{data:e}})]}},{key:"title",fn:function(t){return[a("TalkTitle",{attrs:{title:t.item.title,type:t.item.type}}),t.item.description?a("TalkDescription",{attrs:{data:t.item.description}}):e._e(),t.item.authors?a("TalkAuthors",{attrs:{data:t.item.authors}}):e._e()]}}])})],1)},x=[],M=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"time-col"},[a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.startTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.startTime.m))])]),a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.endTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.endTime.m))])])])}),H=[],P={name:"ScheduleTableColTime",props:{data:{required:!0,type:Object||Array}}},G=P,$=Object(m["a"])(G,M,H,!1,null,"1b943ddc",null),D=$.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[e.type?a("b-badge",{attrs:{variant:e.badgeVariant(e.type)}},[e._v(" · ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1)])},I=[],z=["primary","success","danger"],W={props:{type:{required:!1},title:{type:String,required:!0}},methods:{badgeVariant:function(e){return z[e-1]}}},F=W,J=Object(m["a"])(F,L,I,!1,null,"74070a21",null),K=J.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.data,function(t,n){return a("p",{key:n,staticClass:"lead"},[e._v("\n    "+e._s(t)+"\n  ")])}),0)},R=[],U={props:{data:{type:Array,required:!0}}},V=U,Y=Object(m["a"])(V,N,R,!1,null,null,null),Q=Y.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.data,function(t,n){return[a("div",{key:"auth_"+n},[a("h5",[e._v(e._s(t.name))]),t.social?a("AuthorsSocial",{attrs:{social:t.social}}):e._e(),t.bio?a("AuthorsBio",{attrs:{bio:t.bio}}):e._e()],1)]})],2)},Z=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list-inline"},e._l(e.social,function(t,n){return a("li",{key:n,staticClass:"list-inline-item"},[a("a",{staticClass:"ico-link",class:"ico-"+n,attrs:{href:t}},[a("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)])}),0)},te=[],ae={twitch:["fab","twitch"],github:["fab","github"],twitter:["fab","twitter-square"],youtube:["fab","youtube-square"],facebook:["fab","facebook-square"],linkedin:["fab","linkedin"],instagram:["fab","instagram"],meetup:["fab","meetup"],url:"link"},ne={name:"AuthorsSocial",props:{social:{type:Object}},methods:{getIcon:function(e){return ae[e]}}},re=ne,oe=(a("a26a"),Object(m["a"])(re,ee,te,!1,null,null,null)),ie=oe.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.bio,function(t,n){return a("p",{key:n,staticClass:"lead text-muted"},[e._v("\n    "+e._s(t)+"\n  ")])}),0)},ce=[],le={name:"AuthorsBio",props:{bio:{type:Array}}},ue=le,de=Object(m["a"])(ue,se,ce,!1,null,"655bb19a",null),me=de.exports,pe={components:{AuthorsSocial:ie,AuthorsBio:me},props:{data:{type:Array,reuired:!0}}},fe=pe,he=Object(m["a"])(fe,X,Z,!1,null,null,null),be=he.exports,ve={name:"ScheduleTable",components:{ScheduleTableColTime:D,TalkTitle:K,TalkDescription:Q,TalkAuthors:be},props:{track:{type:Object,required:!0}},data:function(){return{fields:[{key:"startTime",label:"Hora",class:"time-column"},{key:"title",label:this.track.name}]}},methods:{}},ke=ve,ge=(a("9be5"),Object(m["a"])(ke,q,x,!1,null,null,null)),ye=ge.exports,_e={name:"ScheduleList",components:{ScheduleTable:ye},props:{tracks:{type:Array,required:!0}},data:function(){return{key:"value"}}},we=_e,Te=Object(m["a"])(we,B,j,!1,null,null,null),Se=Te.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"text-center"},[e._m(0),a("p",[e._m(1),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://github.com/OSWeekends/agenda?ref=agenda")}}},[e._v("Editar en Github")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://osweekends.com/?ref=agenda")}}},[e._v("WebSite")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://twitter.com/OS_weekends?ref=agenda")}}},[e._v("Twitter")]),e._m(2)],1)])},Oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Made with 💙 by OSWeekends "),a("a",{attrs:{href:"https://github.com/OSWeekends/agenda/graphs/contributors",target:"_blank"}},[e._v("Guilders")]),e._v(" 🦄")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("09d7"),alt:"parrot"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("68f2"),alt:"parrot"}})])}],Ce={name:"BaseFooter",methods:{goUrl:function(e){w()(document.createElement("a"),{target:"_blank",href:e}).click()}}},Ae=Ce,Be=(a("e4a9"),Object(m["a"])(Ae,Ee,Oe,!1,null,null,null)),je=Be.exports,qe={name:"home",components:{BaseHeader:A,ScheduleList:Se,BaseFooter:je},data:function(){return{data:S}}},xe=qe,Me=Object(m["a"])(xe,v,k,!1,null,null,null),He=Me.exports;n["a"].use(b["a"]);var Pe=new b["a"]({routes:[{path:"/",name:"home",component:He},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}]}),Ge=a("2f62");n["a"].use(Ge["a"]);var $e=new Ge["a"].Store({state:{},mutations:{},actions:{}});a("f9e3"),a("2dd8");i["c"].add(s["g"],s["b"],s["a"],s["h"],s["d"],s["c"],s["f"],c["a"],s["e"]),n["a"].component("font-awesome-icon",l["a"]),n["a"].use(o.a),n["a"].config.productionTip=!1,new n["a"]({router:Pe,store:$e,render:function(e){return e(h)}}).$mount("#app")},"68f2":function(e,t,a){e.exports=a.p+"img/parrotright.db57bf97.gif"},"7faf":function(e,t,a){"use strict";var n=a("8fba"),r=a.n(n);r.a},"871f":function(e,t,a){},"8fba":function(e,t,a){},"9be5":function(e,t,a){"use strict";var n=a("871f"),r=a.n(n);r.a},a26a:function(e,t,a){"use strict";var n=a("d406"),r=a.n(n);r.a},d406:function(e,t,a){},e4a9:function(e,t,a){"use strict";var n=a("09ab"),r=a.n(n);r.a},f564:function(e,t,a){}});
//# sourceMappingURL=app.e8e14943.js.map
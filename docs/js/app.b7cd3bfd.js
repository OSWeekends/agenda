(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"27f110c8"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/agenda/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"09ab":function(e,t,a){},"09d7":function(e,t,a){e.exports=a.p+"img/parrot.e4d958b3.gif"},"480c":function(e,t,a){"use strict";var n=a("f564"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("5f5b"),o=a("ecee"),s=a("f2d1"),i=a("c074"),c=a("ad3d"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("router-view")],1)],1)},u=[],d=(a("7faf"),a("2877")),m={},p=Object(d["a"])(m,l,u,!1,null,null,null),f=p.exports,h=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("BaseHeader",{attrs:{title:e.data.title}}),a("ScheduleList",{attrs:{tracks:e.data.tracks}}),a("BaseFooter")],1)},v=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"mb-3"},[a("div",{staticClass:"base-header mb-3"},[a("h1",{staticClass:"title mt-1"},[e._v(e._s(e.title))]),a("span",{staticClass:"time lead"},[a("b-badge",{staticClass:"mr-1",attrs:{variant:"primary"}},[e._v(e._s(e.data.date))]),a("b-badge",{attrs:{variant:"dark"}},[e._v(e._s(e.data.startTime)+" · "+e._s(e.data.endTime))])],1)]),a("div",{staticClass:"d-flex justify-content-between align-self-center"},[a("div",{staticClass:"description-item shadow-none p-3 bg-light rounded w-100"},[a("blockquote",{staticClass:"blockquote mb-0"},[a("footer",{staticClass:"blockquote-footer"},[e._v(e._s(e.data.description))])])]),a("div",{staticClass:"meetup-item mx-3 align-self-center"},[a("a",{attrs:{href:e.data.meetupLink,title:"Ver más en meetup",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","meetup"],size:"3x"}})],1)])])])},y=[],_={title:"Agenda Junio 2020 [Online]",date:"27/06/2020",description:"Nuestro segundo evento online ¡Apúntate! 👉",meetupLink:"https://www.meetup.com/es-ES/Open-Source-Weekends/events/271437985/",startTime:"11:00",endTime:"12:45",tracks:[{name:"The Awesome Track #1",content:[{title:"Bienvenida y café virtual ☕️",description:["- Puntos del día 🔥","- Agenda 📇","- OSWorld 📸"],startTime:{h:"11",m:"00"},endTime:{h:"11",m:"20"},authors:[{name:"Jorge Baumann",bio:["Open Source developer at #RambitoJs."],social:{twitter:"https://twitter.com/baumannzone",instagram:"https://twitter.com/baumannzone",twitch:"https://twitter.com/baumannzone",github:"https://twitter.com/baumannzone"}},{name:"Teba Gómez",bio:["Software engineer at #Devo"],social:{twitter:"https://twitter.com/KoolTheba",github:"https://github.com/kooltheba"}},{name:"Chechu",bio:["Desarrollador frontend. Multi-task guy en OSWeekends"],social:{twitter:"https://twitter.com/Xexuline"}},{name:"Coding Carlos",bio:["Showman, barbudo, liante, prorgamador y contador de cuentos. Conecto gente en @communitytools. Se me ve mucho en@commitsans","Tengo tierras."],social:{twitter:"https://twitter.com/codingcarlos",url:"https://codingcarlos.com/"}}],variant:"primary"},{title:"Gestionando comunidades online +20k personas",type:"charla",description:["¿Qué significa tener un canal de youtube con +20k suscriptores? ¿Qué pasa cuando tienes 2 millones de reproducciones en el canal? ¿Cuántas horas de dedicación se necesitan para crear una comunidad en youtube? Esta y otras cosas interesantes las veremos en esta charla"],startTime:{h:"11",m:"20"},endTime:{h:"11",m:"40"},tags:["comunidad","youtube"],authors:[{name:"Italo Morales",bio:["Youtuber y profesor de programación web en Rimorsoft Online desde el 2017. Su vida laboral comprende doce años de docencia y casi una década como programador."],social:{twitter:"https://twitter.com/italomoralesf",instagram:"https://twitter.com/italomoralesf",youtube:"https://www.youtube.com/rimorsoft",url:"https://rimorsoft.com/"}}],variant:"success"},{title:"No soy yo, es tu actitud tóxica",type:"charla",description:["En entorno laboral pasan muy desapercibidas las actitudes tóxicas entre empleados/as, generalmente se toman a broma, se les resta importancia o no se hace nada al respecto. Reconoce si esas actitudes abundan en tu entorno de trabajo y cómo responder ante ellas."],startTime:{h:"11",m:"40"},endTime:{h:"12",m:"00"},tags:["social","entorno laboral","carrera profesional"],authors:[{name:"Desiré",bio:["9 años cara al público, casi 4 frente al ordenador. En episodios anteriores como dependienta, encargada, presidenta-organizadora de un torneo de videojuegos y recepcionista, más tarde como especialista UX&UI, desarrolladora, diseñadora e instructora."],social:{twitter:"https://twitter.com/helleworld_",url:"https://desiremcarmona.com/"}}],variant:"success"},{title:"🦕 ¿Pondrá Deno el mundo de Node del revés?",type:"charla",description:["Deno es según muchos el sucesor de Node, entre ellos el creador ambos: Ryan Dahl, que, aprovechando todo el conocimiento obtenido durante los 10 años de vida de Node decidió comenzar este proyecto para enmendar errores. Deno cuenta con soporte nativo de TypeScript —es decir no hace falta compilar antes de ejecutar un fichero de TypeScript—, un modelo de seguridad, una forma decentralizada de distruibuir paquetes, un únique ejecutable y muchas más cosas. En esta charla introductoria veremos qué es y qué características tiene, ¡así que no te lo pierdas!"],startTime:{h:"11",m:"20"},endTime:{h:"11",m:"40"},tags:["javascript","deno","saurios 🤣"],authors:[{name:"César Alberca",bio:["Desarrollador Frontend en @autentia. Profesor en @cicemadrid. Miembro del comité @CodemoMadrid. Me encanta aprender y compartir conocimiento."],social:{twitter:"https://twitter.com/cesalberca",url:"https://cesalberca.com/"}}],variant:"success"},{title:"Metodología para afrontar proyectos front: Capítulo 1",description:["Los tiempos han cambiado mucho desde que empece profesionalmente en el mundo del desarrollo de Software. Lo que significa un Junior cuando empecé ya no es lo que significa ahora. La gente ahora viene técnicamente muy bien preparada. Cada vez cuesta más encontrar Juniors que tengas faltas de conocimiento en cuanto al uso de tecnologías pero claro... eso no significa que sepan hacer aplicaciones.En consecuencia los errores que cometen los programadores sin experiencia no son tan cantosos ni llaman tanto la atención ahora como lo hacían en su día.","En esta charla voy a repasar 3 ejemplos de errores que he visto en código de gente Junior durante este año, no para poner en san benito de malos programadores a esta gente que, en mi humilde opinión, tan necesarios son en los proyectos actuales, sino por remarcar el hecho de lo necesario que es tener una metodología clara a la hora de afrontar un proyecto, en este caso, un proyecto front. También en poner el acento para las empresas de formación (bootcamps, cursos técnicos, etc... ) en la necesidad de poner el foco en el desarrollo y no tanto en el conocimiento técnico."],type:"charla",startTime:{h:"12",m:"20"},endTime:{h:"12",m:"40"},tags:["junior","devs","senior"],authors:[{name:"Adrián Ferreres",bio:["Me llamo Adrián Ferreres y a los 11 años, mi pasión por los videojuegos, la serie de Star Trek y el asma me hicieron empezar con la programación en GWBasic. ","Hoy en día llevo mas de 30 años programando de los cuales 14 son de forma profesional. Mi pasión es el JavaScript y todo lo que le rodea. Me gusta compartir conocimiento porque creo que es la mejor forma de aprender y asentar conocimiento."],social:{twitter:"https://twitter.com/ardiadrianadri"}}],variant:"success"},{title:"Networking & Beers Online 💃🍻",startTime:{h:"12",m:"40"},endTime:{h:"12",m:"50"},variant:"primary",note:"Cierre"}]}]},k=_,w={name:"BaseHeader",props:{title:{type:String,required:!0}},data:function(){return{data:k}},methods:{goBack:function(){Object.assign(document.createElement("a"),{target:"_blank",href:"https://osweekends.com"}).click()}}},T=w,C=(a("480c"),Object(d["a"])(T,g,y,!1,null,null,null)),j=C.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.tracks,(function(e,t){return[a("ScheduleTable",{key:t,attrs:{track:e}})]}))],2)},O=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-5"},[a("b-table",{attrs:{items:e.track.content,fields:e.fields,outlined:"",hover:""},scopedSlots:e._u([{key:"cell(startTime)",fn:function(e){return[a("ScheduleTableColTime",{attrs:{data:e}})]}},{key:"cell(title)",fn:function(t){return[a("TalkTitle",{attrs:{title:t.item.title,type:t.item.type,variant:t.item.variant}}),t.item.description?a("TalkDescription",{attrs:{data:t.item.description}}):e._e(),t.item.tags?a("TalkTags",{attrs:{tags:t.item.tags}}):e._e(),t.item.authors?a("TalkAuthors",{attrs:{data:t.item.authors}}):e._e()]}}])})],1)},x=[],E=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"time-col"},[a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.startTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.startTime.m))])]),a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.endTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.endTime.m))])])])}),A=[],$={name:"ScheduleTableColTime",props:{data:{required:!0,type:Object||Array}}},M=$,B=Object(d["a"])(M,E,A,!1,null,"1b943ddc",null),P=B.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h4",{staticClass:"mb-0"},[a("b-badge",{attrs:{variant:e.variant}},[e._v(" · ")]),e._v("\n    "+e._s(e.title)+"\n  ")],1),e.type?a("b-badge",[e._v(" "+e._s(e.type)+" ")]):e._e()],1)},L=[],D={props:{variant:{required:!1},type:{required:!1},title:{type:String,required:!0}}},J=D,W=Object(d["a"])(J,z,L,!1,null,"23e2cbff",null),F=W.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"description"},[e._l(e.data,(function(t,n){return a("p",{key:n,staticClass:"lead"},[a("span",{domProps:{innerHTML:e._s(t)}})])})),a("div")],2)},N=[],U={props:{data:{type:Array,required:!0}}},G=U,I=(a("daea"),Object(d["a"])(G,H,N,!1,null,null,null)),R=I.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tags d-flex justify-content-end"},e._l(e.tags,(function(t){return a("b-badge",{key:t,staticClass:"ml-2",attrs:{variant:"light"}},[e._v(" "+e._s(t)+" ")])})),1)},X=[],K={props:{tags:{type:Array,required:!0}}},V=K,Y=Object(d["a"])(V,Q,X,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.data,(function(t,n){return[a("div",{key:"auth_"+n},[a("h5",[e._v(e._s(t.name))]),t.social?a("AuthorsSocial",{attrs:{social:t.social}}):e._e(),t.bio?a("AuthorsBio",{attrs:{bio:t.bio}}):e._e()],1)]}))],2)},te=[],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list-inline"},e._l(e.social,(function(t,n){return a("li",{key:n,staticClass:"list-inline-item",attrs:{title:t}},[e.isString(t)?[a("a",{staticClass:"ico-link",class:"ico-"+n,attrs:{href:t}},[a("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)]:e._l(t,(function(t,r){return a("a",{key:r,staticClass:"ico-link multiple",class:"ico-"+n,attrs:{href:t,title:t}},[a("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)}))],2)})),0)},ne=[],re={twitch:["fab","twitch"],github:["fab","github"],twitter:["fab","twitter-square"],youtube:["fab","youtube-square"],facebook:["fab","facebook-square"],linkedin:["fab","linkedin"],instagram:["fab","instagram"],meetup:["fab","meetup"],dev:["fab","dev"],medium:["fab","medium"],url:"link",gamepad:"gamepad"},oe={name:"AuthorsSocial",props:{social:{type:Object}},methods:{getIcon:function(e){return re[e]},isString:function(e){return"string"===typeof e}}},se=oe,ie=(a("a26a"),Object(d["a"])(se,ae,ne,!1,null,null,null)),ce=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.bio,(function(t,n){return a("p",{key:n,staticClass:"lead text-muted"},[e._v("\n    "+e._s(t)+"\n  ")])})),0)},ue=[],de={name:"AuthorsBio",props:{bio:{type:Array}}},me=de,pe=Object(d["a"])(me,le,ue,!1,null,"655bb19a",null),fe=pe.exports,he={components:{AuthorsSocial:ce,AuthorsBio:fe},props:{data:{type:Array,reuired:!0}}},be=he,ve=Object(d["a"])(be,ee,te,!1,null,null,null),ge=ve.exports,ye={name:"ScheduleTable",components:{ScheduleTableColTime:P,TalkTitle:F,TalkDescription:R,TalkTags:Z,TalkAuthors:ge},props:{track:{type:Object,required:!0}},data:function(){return{fields:[{key:"startTime",label:"Hora",class:"time-column"},{key:"title",label:this.track.name}]}}},_e=ye,ke=(a("9be5"),Object(d["a"])(_e,q,x,!1,null,null,null)),we=ke.exports,Te={name:"ScheduleList",components:{ScheduleTable:we},props:{tracks:{type:Array,required:!0}}},Ce=Te,je=Object(d["a"])(Ce,S,O,!1,null,null,null),Se=je.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"text-center"},[e._m(0),a("p",[e._m(1),a("b-button",{attrs:{variant:"link",to:"/about"}},[e._v("About")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://github.com/OSWeekends/agenda?ref=agenda")}}},[e._v("Editar en Github")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://osweekends.com/?ref=agenda")}}},[e._v("WebSite")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://twitter.com/OS_weekends?ref=agenda")}}},[e._v("Twitter")]),e._m(2)],1)])},qe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Made with 💙 by OSWeekends "),a("a",{attrs:{href:"https://github.com/OSWeekends/agenda/graphs/contributors",target:"_blank"}},[e._v("Guilders")]),e._v(" 🦄")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("09d7"),alt:"parrot"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("68f2"),alt:"parrot"}})])}],xe={name:"BaseFooter",methods:{goUrl:function(e){Object.assign(document.createElement("a"),{target:"_blank",href:e}).click()}}},Ee=xe,Ae=(a("e4a9"),Object(d["a"])(Ee,Oe,qe,!1,null,null,null)),$e=Ae.exports,Me={name:"home",components:{BaseHeader:j,ScheduleList:Se,BaseFooter:$e},data:function(){return{data:k}}},Be=Me,Pe=Object(d["a"])(Be,b,v,!1,null,null,null),ze=Pe.exports;n["default"].use(h["a"]);var Le=new h["a"]({routes:[{path:"/",name:"home",component:ze},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}]});a("f9e3"),a("2dd8");o["c"].add(s["i"],s["c"],s["b"],s["j"],s["e"],s["d"],s["h"],i["b"],s["g"],s["a"],s["f"],i["a"]),n["default"].component("font-awesome-icon",c["a"]),n["default"].use(r["a"]),n["default"].config.productionTip=!1,new n["default"]({router:Le,render:function(e){return e(f)}}).$mount("#app")},"68f2":function(e,t,a){e.exports=a.p+"img/parrotright.db57bf97.gif"},"7faf":function(e,t,a){"use strict";var n=a("8fba"),r=a.n(n);r.a},"81e3":function(e,t,a){},"871f":function(e,t,a){},"8fba":function(e,t,a){},"9be5":function(e,t,a){"use strict";var n=a("871f"),r=a.n(n);r.a},a26a:function(e,t,a){"use strict";var n=a("d406"),r=a.n(n);r.a},d406:function(e,t,a){},daea:function(e,t,a){"use strict";var n=a("81e3"),r=a.n(n);r.a},e4a9:function(e,t,a){"use strict";var n=a("09ab"),r=a.n(n);r.a},f564:function(e,t,a){}});
//# sourceMappingURL=app.b7cd3bfd.js.map
(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"d9bb286d"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/agenda/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"09ab":function(e,t,a){},"09d7":function(e,t,a){e.exports=a.p+"img/parrot.e4d958b3.gif"},"480c":function(e,t,a){"use strict";var n=a("f564"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("5f5b"),r=a("ecee"),s=a("f2d1"),o=a("c074"),c=a("ad3d"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("router-view")],1)],1)},u=[],d=(a("7faf"),a("2877")),m={},p=Object(d["a"])(m,l,u,!1,null,null,null),h=p.exports,f=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("BaseHeader",{attrs:{title:e.data.title}}),a("ScheduleList",{attrs:{tracks:e.data.tracks}}),a("BaseFooter")],1)},v=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"mb-3"},[a("div",{staticClass:"base-header mb-3"},[a("h1",{staticClass:"title mt-1"},[e._v(e._s(e.title))]),a("span",{staticClass:"time lead"},[a("b-badge",{staticClass:"mr-1",attrs:{variant:"primary"}},[e._v(e._s(e.data.date))]),a("b-badge",{attrs:{variant:"dark"}},[e._v(e._s(e.data.startTime)+" · "+e._s(e.data.endTime))])],1)]),a("div",{staticClass:"d-flex justify-content-between align-self-center"},[a("div",{staticClass:"description-item shadow-none p-3 bg-light rounded w-100"},[a("blockquote",{staticClass:"blockquote mb-0"},[a("footer",{staticClass:"blockquote-footer"},[e._v(e._s(e.data.description))])])]),a("div",{staticClass:"meetup-item mx-3 align-self-center"},[a("a",{attrs:{href:e.data.meetupLink,title:"Ver más en meetup",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","meetup"],size:"3x"}})],1)])])])},k=[],y={title:"Agenda Marzo 2020",date:"21/03/2020",description:"¡Quinto evento de la temporada! Segundo del año 🔥",meetupLink:"https://www.meetup.com/es-ES/Open-Source-Weekends/events/268795776/",startTime:"09:30",endTime:"14:00",tracks:[{name:"Auditorio",content:[{title:"Recepción y café ☕️",startTime:{h:"09",m:"30"},endTime:{h:"10",m:"00"},variant:"primary"},{title:"KeyNote 📜",description:["- Novedades y noticias 🔥","- Patrocinadores 💙","- Agenda 📅","- OSWorld 📸","- ¡🎁!"],startTime:{h:"10",m:"00"},endTime:{h:"10",m:"30"},variant:"primary"},{title:"Passwords are so 1990",type:"charla",description:["As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever-increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?","In this talk, I will give a quick overview of the past, present, and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details but aims to give a view of what’s to come in terms of authentication."],startTime:{h:"10",m:"30"},endTime:{h:"11",m:"15"},tags:["Authentication","Passwords"],authors:[{name:"Sambego",bio:["I'm a Google Developer Expert who works as a Senior Developer Advocate Engineer at Auth0. At Auth0 we're trying to make authentication and identification as easy as possible, while still keeping it secure.",'After office hours I like to play around with the web-audio API, and other "exotic" browser APIs. One of my side projects is a library to add audio effects to an audio input using JavaScript.'],social:{twitter:"https://twitter.com/sambego",url:"https://sambego.tech/"}}],variant:"success"},{title:"Cazando secretos en Github",type:"charla",description:["¿Qué tan difícil es encontrar datos secretos como contraseñas de mongo, llaves de API u otros en Github? ¿Qué tan común es?","En esta charla cazaremos secretos en Github, hablaremos de cómo prevenir publicar alguno por error, cómo actuar si nos sucede, ¡y mucho más!"],startTime:{h:"11",m:"20"},endTime:{h:"12",m:"05"},tags:["Github","Sensitive Data","Recon"],authors:[{name:"Anny",bio:["Anny trabaja como Security Awareness Manager en Auth0, y es la organizadora de la comunidad WoSEC - Women of Security - Madrid. Le encanta ayudar a que la gente aprenda de ciberseguridad de una manera divertida"],social:{twitter:"https://twitter.com/Annyv2",meetup:"https://www.meetup.com/es-ES/WoSEC-Madrid-Women-of-Security"}}],variant:"success"},{title:"...",type:"charla",description:["..."],startTime:{h:"12",m:"10"},endTime:{h:"13",m:"45"},tags:["Github","Sensitive Data","Recon"],authors:[],variant:"success"},{title:"Networking & Beers 💃🍻",startTime:{h:"13",m:"45"},endTime:{h:"14",m:"15"},variant:"primary",authors:[],note:""}]},{name:"Cafetería - Planta 0",content:[{title:"Guilds ✍️💙",description:["Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para continuar con sus proyectos, idear, definir... ¡lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)"],startTime:{h:"11",m:"00"},endTime:{h:"13",m:"00"},authors:[{name:"Open Source Weekends",social:{meetup:"https://www.meetup.com/es-ES/Open-Source-Weekends/",twitter:"https://twitter.com/os_weekends",github:"https://github.com/osweekends",url:"http://osweekends.com/"}}],variant:"primary"}]},{name:"Cafetería - Planta 1 ",content:[{title:"",type:"Charla",description:["...",'Más info: <a href=""></a>'],tags:["seguridad","tecnología","hacking"],authors:[{name:"Daniel Mery",bio:["Daniel es miembro de HackMadrid, HaskellMAD, blockMAD y también ha sido el fundador de Planet Linux Caffe."],social:{twitter:"https://twitter.com/dmery",meetup:"https://hackmadrid.org/"}}],startTime:{h:"11",m:"00"},endTime:{h:"12",m:"00"},variant:"warning"},{title:"Blockchain generations: La evolución de Blockchain",type:"Charla",tags:["blockchain","cryptomovidas"],description:['Con el título "Blockchain generations" en esta ocasión Josep Servat nos ofrece una panorámica de la evolución de la tecnología blockchain, desde su nacimiento como algo imprescindible para el funcionamiento de Bitcoin, la primera criptomoneda que se ha conseguido mantener exitosamente durante más de diez años y que ha dado pie al nacimiento de una gran cantidad de proyectos, que no sólo tienen que ver con el intercambio de valor, sino con muchos otros campos relacionados con la tecnología y que, como estamos viendo, la van a cambiar de muchas maneras. Aparte de repasar las principales etapas o generaciones de blockchain, se van a ver los algoritmos de consenso más usados, así como qué clase de problemas son susceptibles de resolverse mediante blockchain.','Más info: <a href="https://www.meetup.com/es-ES/BlockMAD/events/267933137/">https://www.meetup.com/es-ES/BlockMAD/events/267933137/</a>'],authors:[{name:"Josep Servat",bio:["Entusiasta de la tecnología y de la programación, profesionalmente dedicado a la tecnología desde hace mas de 15 años. Trabaja actualmente como senior Node js y blockchain developer en etoshi."],social:{linkedin:"https://www.linkedin.com/in/servatj/",github:"https://github.com/servatj",twitter:"https://twitter.com/servatj"}},{name:"BlockMad Meetup",bio:["Meetup de Blockchain en Madrid"],social:{meetup:"https://www.meetup.com/es-ES/BlockMAD/"}}],startTime:{h:"12",m:"00"},endTime:{h:"13",m:"00"},variant:"warning"}]},{name:"Meetup Space (Sótano)",content:[{type:"taller",title:"Kubernetes for Developers",description:["Una pequeña introducción a qué es Kubernetes, los problemas que resuelve y hacer ejercicios prácticos de desarrollo en Kubernetes.","Dockerizaremos una aplicación de ejemplo, la desplegaremos en Kubernetes, y usaremos tools como skaffold y okteto para hacer cambios en caliente directamente en Kubernetes."],tags:["Kubernetes","Development","Docker"],startTime:{h:"11",m:"15"},endTime:{h:"13",m:"15"},authors:[{name:"Pablo Chico de Guzman",bio:["Founder & CTO at Okteto(YC W19)","Docker Community Leader","Cloud Native Development Advocate"],social:{linkedin:"https://www.linkedin.com/in/pchico/",github:"https://github.com/pchico83",twitter:"https://twitter.com/pchico83",medium:"https://medium.com/@pchico83"}}],variant:"success"}]}]},w=y,_={name:"BaseHeader",props:{title:{type:String,required:!0}},data:function(){return{data:w}},methods:{goBack:function(){Object.assign(document.createElement("a"),{target:"_blank",href:"https://osweekends.com"}).click()}}},T=_,S=(a("480c"),Object(d["a"])(T,g,k,!1,null,null,null)),C=S.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.tracks,(function(e,t){return[a("ScheduleTable",{key:t,attrs:{track:e}})]}))],2)},A=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-5"},[a("b-table",{attrs:{items:e.track.content,fields:e.fields,outlined:"",hover:""},scopedSlots:e._u([{key:"cell(startTime)",fn:function(e){return[a("ScheduleTableColTime",{attrs:{data:e}})]}},{key:"cell(title)",fn:function(t){return[a("TalkTitle",{attrs:{title:t.item.title,type:t.item.type,variant:t.item.variant}}),t.item.description?a("TalkDescription",{attrs:{data:t.item.description}}):e._e(),t.item.tags?a("TalkTags",{attrs:{tags:t.item.tags}}):e._e(),t.item.authors?a("TalkAuthors",{attrs:{data:t.item.authors}}):e._e()]}}])})],1)},E=[],x=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"time-col"},[a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.startTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.startTime.m))])]),a("div",{staticClass:"time"},[a("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.endTime.h))]),a("span",{staticClass:"colon"},[e._v(":")]),a("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.endTime.m))])])])}),q=[],M={name:"ScheduleTableColTime",props:{data:{required:!0,type:Object||Array}}},P=M,B=Object(d["a"])(P,x,q,!1,null,"1b943ddc",null),D=B.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h4",{staticClass:"mb-0"},[a("b-badge",{attrs:{variant:e.variant}},[e._v(" · ")]),e._v("\n    "+e._s(e.title)+"\n  ")],1),e.type?a("b-badge",[e._v(" "+e._s(e.type)+" ")]):e._e()],1)},W=[],I={props:{variant:{required:!1},type:{required:!1},title:{type:String,required:!0}}},L=I,G=Object(d["a"])(L,$,W,!1,null,"23e2cbff",null),z=G.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"description"},[e._l(e.data,(function(t,n){return a("p",{key:n,staticClass:"lead"},[a("span",{domProps:{innerHTML:e._s(t)}})])})),a("div")],2)},K=[],F={props:{data:{type:Array,required:!0}}},J=F,N=(a("daea"),Object(d["a"])(J,H,K,!1,null,null,null)),U=N.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tags d-flex justify-content-end"},e._l(e.tags,(function(t){return a("b-badge",{key:t,staticClass:"ml-2",attrs:{variant:"light"}},[e._v(" "+e._s(t)+" ")])})),1)},R=[],V={props:{tags:{type:Array,required:!0}}},Y=V,X=Object(d["a"])(Y,Q,R,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.data,(function(t,n){return[a("div",{key:"auth_"+n},[a("h5",[e._v(e._s(t.name))]),t.social?a("AuthorsSocial",{attrs:{social:t.social}}):e._e(),t.bio?a("AuthorsBio",{attrs:{bio:t.bio}}):e._e()],1)]}))],2)},te=[],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list-inline"},e._l(e.social,(function(t,n){return a("li",{key:n,staticClass:"list-inline-item",attrs:{title:t}},[e.isString(t)?[a("a",{staticClass:"ico-link",class:"ico-"+n,attrs:{href:t}},[a("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)]:e._l(t,(function(t,i){return a("a",{key:i,staticClass:"ico-link multiple",class:"ico-"+n,attrs:{href:t,title:t}},[a("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)}))],2)})),0)},ne=[],ie={twitch:["fab","twitch"],github:["fab","github"],twitter:["fab","twitter-square"],youtube:["fab","youtube-square"],facebook:["fab","facebook-square"],linkedin:["fab","linkedin"],instagram:["fab","instagram"],meetup:["fab","meetup"],dev:["fab","dev"],medium:["fab","medium"],url:"link",gamepad:"gamepad"},re={name:"AuthorsSocial",props:{social:{type:Object}},methods:{getIcon:function(e){return ie[e]},isString:function(e){return"string"===typeof e}}},se=re,oe=(a("a26a"),Object(d["a"])(se,ae,ne,!1,null,null,null)),ce=oe.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.bio,(function(t,n){return a("p",{key:n,staticClass:"lead text-muted"},[e._v("\n    "+e._s(t)+"\n  ")])})),0)},ue=[],de={name:"AuthorsBio",props:{bio:{type:Array}}},me=de,pe=Object(d["a"])(me,le,ue,!1,null,"655bb19a",null),he=pe.exports,fe={components:{AuthorsSocial:ce,AuthorsBio:he},props:{data:{type:Array,reuired:!0}}},be=fe,ve=Object(d["a"])(be,ee,te,!1,null,null,null),ge=ve.exports,ke={name:"ScheduleTable",components:{ScheduleTableColTime:D,TalkTitle:z,TalkDescription:U,TalkTags:Z,TalkAuthors:ge},props:{track:{type:Object,required:!0}},data:function(){return{fields:[{key:"startTime",label:"Hora",class:"time-column"},{key:"title",label:this.track.name}]}}},ye=ke,we=(a("9be5"),Object(d["a"])(ye,O,E,!1,null,null,null)),_e=we.exports,Te={name:"ScheduleList",components:{ScheduleTable:_e},props:{tracks:{type:Array,required:!0}}},Se=Te,Ce=Object(d["a"])(Se,j,A,!1,null,null,null),je=Ce.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"text-center"},[e._m(0),a("p",[e._m(1),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://github.com/OSWeekends/agenda?ref=agenda")}}},[e._v("Editar en Github")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://osweekends.com/?ref=agenda")}}},[e._v("WebSite")]),a("b-button",{attrs:{variant:"link"},on:{click:function(t){return e.goUrl("https://twitter.com/OS_weekends?ref=agenda")}}},[e._v("Twitter")]),e._m(2)],1)])},Oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Made with 💙 by OSWeekends "),a("a",{attrs:{href:"https://github.com/OSWeekends/agenda/graphs/contributors",target:"_blank"}},[e._v("Guilders")]),e._v(" 🦄")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("09d7"),alt:"parrot"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:a("68f2"),alt:"parrot"}})])}],Ee={name:"BaseFooter",methods:{goUrl:function(e){Object.assign(document.createElement("a"),{target:"_blank",href:e}).click()}}},xe=Ee,qe=(a("e4a9"),Object(d["a"])(xe,Ae,Oe,!1,null,null,null)),Me=qe.exports,Pe={name:"home",components:{BaseHeader:C,ScheduleList:je,BaseFooter:Me},data:function(){return{data:w}}},Be=Pe,De=Object(d["a"])(Be,b,v,!1,null,null,null),$e=De.exports;n["default"].use(f["a"]);var We=new f["a"]({routes:[{path:"/",name:"home",component:$e},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}]}),Ie=a("2f62");n["default"].use(Ie["a"]);var Le=new Ie["a"].Store({state:{},mutations:{},actions:{}});a("f9e3"),a("2dd8");r["c"].add(s["i"],s["c"],s["b"],s["j"],s["e"],s["d"],s["h"],o["b"],s["g"],s["a"],s["f"],o["a"]),n["default"].component("font-awesome-icon",c["a"]),n["default"].use(i["a"]),n["default"].config.productionTip=!1,new n["default"]({router:We,store:Le,render:function(e){return e(h)}}).$mount("#app")},"68f2":function(e,t,a){e.exports=a.p+"img/parrotright.db57bf97.gif"},"7faf":function(e,t,a){"use strict";var n=a("8fba"),i=a.n(n);i.a},"81e3":function(e,t,a){},"871f":function(e,t,a){},"8fba":function(e,t,a){},"9be5":function(e,t,a){"use strict";var n=a("871f"),i=a.n(n);i.a},a26a:function(e,t,a){"use strict";var n=a("d406"),i=a.n(n);i.a},d406:function(e,t,a){},daea:function(e,t,a){"use strict";var n=a("81e3"),i=a.n(n);i.a},e4a9:function(e,t,a){"use strict";var n=a("09ab"),i=a.n(n);i.a},f564:function(e,t,a){}});
//# sourceMappingURL=app.af055e2f.js.map
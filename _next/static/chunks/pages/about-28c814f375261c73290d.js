_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery,o=void 0!==i&&i;return n||r&&o}},"2l/u":function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=(n("q1tI"),n("g4pe")),i=n.n(r),o=n("vOnD"),s=n("7cJT"),c=Object(o.c)(s.f).withConfig({displayName:"aboutstyles__HeroSection",componentId:"fkahmp-0"})(["display:flex;gap:3em;align-items:center;justify-content:center;padding-top:","px;@media screen and (max-width:","px){padding-top:","px;flex-wrap:wrap;}"],(function(e){return e.theme.measurements.headerHeight+50}),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.theme.measurements.headerHeight+50})),u=o.c.div.withConfig({displayName:"aboutstyles__HeroTextWrapper",componentId:"fkahmp-1"})(["@media screen and (max-width:","px){margin:0 auto 2em;}"],(function(e){return e.theme.measurements.mobileBreakpoint})),l=Object(o.c)(s.b).withConfig({displayName:"aboutstyles__HeroFunWrapper",componentId:"fkahmp-2"})(["display:flex;align-items:center;justify-content:center;padding:1em;height:300px;width:300px;img{height:100%;width:auto;border-radius:20px;filter:grayscale(100%);}"]),d=Object(o.c)(s.f).withConfig({displayName:"aboutstyles__ContactSection",componentId:"fkahmp-3"})(["display:grid;gap:1em;margin:5em auto 0;@media screen and (max-width:","px){margin:2em auto 0;}"],(function(e){return e.theme.measurements.mobileBreakpoint})),h=n("EF3e"),p=n("C3/0");t.default=function(){return Object(a.jsxs)(s.e,{children:[Object(a.jsx)(i.a,{children:Object(a.jsx)("title",{children:"Shayan Chowdhury | About"})}),Object(a.jsxs)(c,{children:[Object(a.jsx)(l,{children:Object(a.jsx)("img",{src:"/assets/me.jpg",alt:""})}),Object(a.jsxs)(u,{children:[Object(a.jsx)("h1",{children:h.a.title}),Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:Object(p.a)(h.a.description)}})]})]}),Object(a.jsxs)(d,{children:[Object(a.jsx)("h2",{children:h.a.contact_section.title}),Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:Object(p.a)(h.a.contact_section.description)}})]})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=r.props[l],p=a[l]||new Set;"name"===l&&o||!p.has(d)?(p.add(d),a[l]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EF3e:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a={title:"Hi, I'm Shayan",description:"I'm a data scientist, entrepreneur and software developer working in Bangladesh to fight COVID-19. <br/> <br/> Thanks for dropping by!",currentWork:{title:"Current Work",works:[{title:"[COVID-19 in Bangladesh](https://corona.gov.bd/)",subtitle:"Data Analyst & Coordinator",link:"https://corona.gov.bd/",image:"",description:"With the **Ministry of Health**, I **coordinated COVID-19 epidemiological data analysis** and the **development of decision-making tools** for senior policymakers to make **timely decisions on lives and livelihoods across the country**."},{title:"[Reach4Help](https://reach4help.org/)",subtitle:"Executive Director & Co-founder",link:"https://reach4help.org/",image:"",description:"Since co-founding it in March, I lead the **tech nonprofit Reach4Help**, **connecting people in need with local volunteer help**. We're working with **volunteer organizations worldwide** from the US, Canada, Europe and Asia, amassing over **500 volunteers from 30 countries**."},{title:"[Migrant Nation](https://migrantnation.org/)",subtitle:"Software Developer",link:"https://migrantnation.org/",image:"",description:"In the **Rohingya refugee camps**, I'm developing an **e-commerce marketplace** with **UNDP agencies** to help the refugees **produce and sell products to consumers worldwide**, on the way to **financial sustainability**. Recently, I built an app for them to **earn hourly wages while ensuring they can't be exploited** in by far, the most fulfilling experience of my life."}]}},r={title:"My research story",description:"Growing up immersed in health issues, from taking care of my cancer-stricken grandmother at 8 to being bedridden from COVID myself at 17, I've grown a **passion for solving health problems through medical research**. For the last four years, I\u2019ve been fortunate to be part of **cutting-edge medical and data science research** through internships at the [New York Genome Center](https://www.nygenome.org/), [Google](https://research.google/outreach/csrmp/) and Nobel laureate [Joachim Frank's lab](https://franklab.cpmc.columbia.edu/franklab/) at Columbia University. Now, I'm conducting and coordinating data science and epidemiological research on COVID-19 in Bangladesh and recently co-authored a paper.",papersSection:{title:"Papers",description:"In September 2020, I got the honor of **co-authoring my first formal paper for peer review** alongside my colleagues and mentors from **UC Berkeley and Harvard**! In the past, I've also written for research competitions and contributed to multiple papers listed below.",papers:[{title:"[Participatory syndromic surveillance as a tool for tracking COVID-19 in Bangladesh](https://doi.org/10.1101/2020.08.28.20183905)",subtitle:"September 2020",authors:" **Authors:** Ayesha S Mahmud, *Shayan Chowdhury*, Kawsar Hossain Sojib, Anir Chowdhury, Md. Tanvir Quader, Sangita Paul, Md. Sheikh Saidy, Ramiz Uddin, Kenth Engo-Monsen, Caroline O Buckee",institutions:" **Institutions:** a2i Programme / Bangladesh Ministry of Health"},{title:"[Characterizing Noise in Whole Genome Cell-Free DNA Analysis](docs/Characterizing%20Noise%20in%20Whole%20Genome%20Cell-Free%20DNA%20Analysis%20-%20Research%20Paper.pdf)",subtitle:"November 2018",authors:" **Author:** *Shayan Chowdhury*",institutions:" **Institutions:** Landau Lab, New York Genome Center / Weill Cornell Medical Center *(submitted for Regeneron STS)*"},{title:"[Single-Cell Methylome and Transcriptome High-Resolution Maps Define the Effects of Epigenetic Modifiers on the Landscape of Hematopoietic Differentiation](https://ashpublications.org/blood/article/130/Supplement%201/559/115871/Single-Cell-Methylome-and-Transcriptome-High)",subtitle:"January 2018",authors:" **Authors:** Franco Izzo, PhD, Asaf Poran, Stanley Chun-Wei Lee, PhD, Ronan Chaligne, PhD, Federico Gaiti, PhD, Steven Kothen-Hill, MS, Rafael Schulman, BS, Michelle Ki, Kenigsberg Ephraim, PhD, Omar Abdel-Wahab, MD, Dan A. Landau, MD PhD <br/> ***(CONTRIBUTOR, NOT AN AUTHOR)***",institutions:" **Institution:** Landau Lab, New York Genome Center / Weill Cornell Medical Center "},{title:"[Single-Cell Methylome and Transcriptome High-Resolution Maps Define the Effects of Epigenetic Modifiers on the Landscape of Hematopoietic Differentiation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5333260/)",subtitle:"January 2017",authors:" **Authors:** Austin M. Coe, MPH, William Ueng, MPH, Jennifer M. Vargas, BS, Raven David, MPH, Alejandro Vanegas, MS, Katherine Infante, MPH, Meghna Trivedi, MD, Haeseung Yi, MPA, Jill Dimond, PhD, Katherine D. Crew, MD, MS, and Rita Kukafka, DrPH, MA <br/> ***(CONTRIBUTOR, NOT AN AUTHOR)***",institutions:" **Institution:** Crew Lab, Herbert Irving Comprehensive Cancer Center, Columbia University, College of Physicians and Surgeons "}]}},i={title:"A bit about myself",description:"I'm a recent graduate of Stuyvesant High School in NYC, currently taking a gap year working in Bangladesh. This last year's been tough for everyone, so I wanted to take my love for technology and [research](/research) to make a positive impact in the lives of people suffering from the disasters that defined 2020. Outside of work, I love playing guitar, making music and sleeping. <br/> [For those interested, here's my resume.](docs/Shayan%20Chowdhury%20-%20Resume.pdf)",contact_section:{title:"Feel free to reach out!",description:"Whether you'd like to debate humanity's fate under AI, discuss music theory or just share some memes, I'd love to have a chat with you! Feel free to reach out via [email](mailto:shayan.chowdhury@gmail.com). For professional inquiries, please check my [LinkedIn](https://www.linkedin.com/in/shayan-chowdhury-4052b624/). Or if you're an adventurous coder, take a peek at my [GitHub](https://github.com/schowdhury8)."}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||r(e)||i(e)||o()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=u(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("2l/u")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[["hIud",0,2,3,1,4]]]);
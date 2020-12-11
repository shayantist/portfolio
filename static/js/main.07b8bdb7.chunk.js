(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t(0),a=t.n(i),o=t(22),c=t.n(o),s=t(9),l=t(14),u=t(4),h=t(2),d=t(15),m=t(3);function p(){var e=Object(m.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: ",", sans-serif;\n  }\n\n  body, html {\n    background: ",";\n    color: ",";\n  }\n"]);return p=function(){return e},e}var g=Object(h.b)(p(),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text})),b={colors:{background:"#121212",text:"#FFFFFF",cardBackground:"#191919",accent:"#DC143C"},measurements:{headerHeight:75,mobileBreakpoint:768,maxWidth:1300},fonts:{main:"Source Sans Pro"}},f=t(17);function x(){var e=Object(m.a)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  height: 100%;\n\n  @media screen and (max-width: ","px) {\n    text-align: center;\n    padding: 2rem;\n    width: 100%;\n    display: table;\n\n    :hover {\n      color: ",";\n    }\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(m.a)(["\n  height: 80px;\n\n  @media screen and (max-width: ","px) {\n    width: 100%;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  font-weight: bold;\n\n  @media screen and (max-width: ","px) {\n    flex-direction: column;\n    width: 100%;\n    height: 90vh;\n    position: absolute;\n    top: 80px;\n    right: ",";\n    opacity: 1;\n    transition: all 0.5s ease;\n    background: ",";\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(m.a)(["\n  display: none;\n\n  @media screen and (max-width: ","px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(m.a)(["\n  display: flex;\n  color: ",";\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 2rem;\n  align-items: center;\n  margin-right: 0.5rem;\n"]);return k=function(){return e},e}function w(){var e=Object(m.a)(["\n  width: 90%;\n  max-width: ","px;\n  margin: 0 auto 0;\n\n  display: flex;\n  justify-content: space-between;\n\n  font-size: 1.3rem;\n\n  a {\n    transition: color 0.25s ease-in-out;\n    :hover {\n      color: ",";\n    }\n  }\n\n  @media screen and (max-width: ","px) {\n    padding: 0 30px;\n  }\n"]);return w=function(){return e},e}function v(){var e=Object(m.a)(["\n  background: ",";\n  position: fixed;\n  height: ","px;\n  display: flex;\n  width: 100%;\n  z-index: 69420;\n"]);return v=function(){return e},e}var C=h.c.header(v(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.measurements.headerHeight})),S=h.c.nav(w(),(function(e){return e.theme.measurements.maxWidth}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.measurements.mobileBreakpoint})),M=Object(h.c)(s.b)(k(),(function(e){return e.theme.colors.text})),I=h.c.div(y(),(function(e){return e.theme.measurements.mobileBreakpoint})),H=h.c.ul(O(),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.isOpen?0:"-100%"}),(function(e){return e.theme.colors.background})),B=h.c.li(j(),(function(e){return e.theme.measurements.mobileBreakpoint})),D=Object(h.c)(s.b)(x(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.theme.colors.accent}));var T=function(){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],o=function(){return a(!t)};return Object(r.jsx)(C,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(M,{to:"/",children:Object(r.jsx)(f.b,{style:{marginRight:"0.5rem"}})}),Object(r.jsx)(I,{onClick:o,children:t?Object(r.jsx)(f.c,{}):Object(r.jsx)(f.a,{})}),Object(r.jsxs)(H,{isOpen:t,onClick:o,children:[Object(r.jsx)(B,{children:Object(r.jsx)(D,{to:"/",children:"Work"})}),Object(r.jsx)(B,{children:Object(r.jsx)(D,{to:"/research",children:"Research"})}),Object(r.jsx)(B,{children:Object(r.jsx)(D,{to:"/about",children:"About"})})]})]})})};function $(){var e=Object(m.a)(["\n  height: 40px;\n"]);return $=function(){return e},e}var P=h.c.footer($());var A=function(){return Object(r.jsx)(P,{})};var _=function(e){return Object(r.jsx)(d.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},children:e.children})};function L(){var e=Object(m.a)(["\n  background: ",";\n  width: 100%;\n  border-radius: 20px;\n  padding: 3em;\n\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n\n  span {\n    font-weight: bold;\n    opacity: 0.6;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n  }\n\n  h3 {\n    margin: 0.3em 0;\n  }\n\n  img {\n    width: 80%;\n  }\n\n  @media screen and (max-width: ","px) {\n    padding: 2em;\n  }\n"]);return L=function(){return e},e}var N=h.c.div(L(),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.measurements.mobileBreakpoint}));function R(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/^\s*\n\*/gm,"<ul>\n*")).replace(/^(\*.+)\s*\n([^*])/gm,"$1\n</ul>\n\n$2")).replace(/^\*(.+)/gm,"<li>$1</li>")).replace(/^\s*\n\d\./gm,"<ol>\n1.")).replace(/^(\d\..+)\s*\n([^\d.])/gm,"$1\n</ol>\n\n$2")).replace(/^\d\.(.+)/gm,"<li>$1</li>")).replace(/^>(.+)/gm,"<blockquote>$1</blockquote>")).replace(/[#]{6}(.+)/g,"<h6>$1</h6>")).replace(/[#]{5}(.+)/g,"<h5>$1</h5>")).replace(/[#]{4}(.+)/g,"<h4>$1</h4>")).replace(/[#]{3}(.+)/g,"<h3>$1</h3>")).replace(/[#]{2}(.+)/g,"<h2>$1</h2>")).replace(/[#]{1}(.+)/g,"<h1>$1</h1>")).replace(/^(.+)\n=+/gm,"<h1>$1</h1>")).replace(/^(.+)\n-+/gm,"<h2>$1</h2>")).replace(/!\[([^\]]+)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" />')).replace(/[[]{1}([^\]]+)[\]]{1}[(]{1}([^)"]+)("(.+)")?[)]{1}/g,'<a href="$2" target="_blank" title="$4">$1</a>')).replace(/[*_]{2}([^*_]+)[*_]{2}/g,"<b>$1</b>")).replace(/[*_]{1}([^*_]+)[*_]{1}/g,"<i>$1</i>")).replace(/[~]{2}([^~]+)[~]{2}/g,"<del>$1</del>")).replace(/^\s*\n```(([^\s]+))?/gm,'<pre class="$2">')).replace(/^```\s*\n/gm,"</pre>\n\n")).replace(/[`]{1}([^`]+)[`]{1}/g,"<code>$1</code>")).replace(/(<pre.+>)\s*\n<p>(.+)<\/p>/gm,"$1$2")}var z=function(e){return console.log(e.image),Object(r.jsxs)(N,{children:[e.subtitle?Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:R(e.subtitle)}}):null,Object(r.jsx)("h3",{dangerouslySetInnerHTML:{__html:R(e.title)}}),e.image?Object(r.jsx)("img",{src:e.image,alt:""}):null,e.textBoxes.map((function(e){return Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:R(e)}},e)}))]})};function W(){var e=Object(m.a)(["\n  width: 90%;\n  margin: 0 auto;\n  max-width: ","px;\n\n  h1 {\n    font-size: 4.5em;\n    line-height: 122%;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2rem;\n    line-height: 1.2;\n  }\n\n  p {\n    font-size: 1.3em;\n    line-height: 1.7;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n    box-shadow: inset 0 -4px 0 -1px ",";\n\n    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n\n    :hover {\n      color: white;\n      box-shadow: inset 0 -40px 0 0px ",";\n    }\n  }\n"]);return W=function(){return e},e}var F=h.c.section(W(),(function(e){return e.theme.measurements.maxWidth}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accent}));function E(){var e=Object(m.a)(["\n  img {\n    display: block;\n    max-width: 80%;\n    margin: 1em auto;\n  }\n"]);return E=function(){return e},e}function U(){var e=Object(m.a)(["\n  margin: 7em auto 0;\n  display: grid;\n  gap: 2em;\n\n  .things {\n    display: flex;\n    gap: 1em;\n\n    @media screen and (max-width: ","px) {\n      flex-wrap: wrap;\n    }\n  }\n"]);return U=function(){return e},e}function K(){var e=Object(m.a)(["\n  height: 500px;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: ","px) {\n    height: 350px;\n    max-width: 350px;\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(m.a)(["\n  @media screen and (max-width: ","px) {\n    margin: -3em auto 2em;\n  }\n\n  h1 {\n    background: linear-gradient(\n      271deg,\n      #a0e9ff 30%,\n      #a162e8 50%,\n      #f093b0 70%,\n      #edca85 94%\n    );\n    background-clip: transparent;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: 300% 300%;\n    animation: gradient 15s ease infinite;\n\n    @keyframes gradient {\n      0% {\n        background-position: 0% 50%;\n      }\n      50% {\n        background-position: 100% 50%;\n      }\n      100% {\n        background-position: 0% 50%;\n      }\n    }\n  }\n"]);return V=function(){return e},e}function G(){var e=Object(m.a)(["\n  display: flex;\n  gap: 3em;\n  align-items: center;\n  justify-content: center;\n\n  padding-top: ","px;\n\n  @media screen and (max-width: ","px) {\n    padding-top: ","px;\n    flex-wrap: wrap;\n  }\n"]);return G=function(){return e},e}var J=Object(h.c)(F)(G(),(function(e){return e.theme.measurements.headerHeight+50}),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.theme.measurements.headerHeight+50})),Y=h.c.div(V(),(function(e){return e.theme.measurements.mobileBreakpoint})),q=Object(h.c)(N)(K(),(function(e){return e.theme.measurements.mobileBreakpoint})),Q=Object(h.c)(F)(U(),(function(e){return e.theme.measurements.mobileBreakpoint})),X=Object(h.c)(z)(E()),Z={title:"Hi, I'm Shayan",description:"I'm a data scientist, entrepreneur and software developer working in Bangladesh to fight COVID-19. <br/> <br/> Thanks for dropping by!",currentWork:{title:"Current Work",works:[{title:"COVID-19 in Bangladesh",subtitle:"Data Analyst & Coordinator",link:"https://corona.gov.bd/",image:"",description:"With the **Ministry of Health**, I **coordinated COVID-19 epidemiological data analysis** and the **development of decision-making tools** for senior policymakers to make **timely decisions on lives and livelihoods across the country**."},{title:"Reach4Help",subtitle:"Executive Director & Co-founder",link:"https://reach4help.org/",image:"",description:"Since co-founding it in March, I lead the **tech nonprofit Reach4Help**, **connecting people in need with local volunteer help**. We're working with **volunteer organizations worldwide** from the US, Canada, Europe and Asia, amassing over **500 volunteers from 30 countries**."},{title:"Migrant Nation",subtitle:"Software Developer",link:"https://migrantnation.org/",image:"",description:"In the **Rohingya refugee camps**, I'm developing an **e-commerce marketplace** with **UNDP agencies** to help the refugees **produce and sell products to consumers worldwide**, on the way to **financial sustainability**. Recently, I built an app for them to **earn hourly wages while ensuring they can't be exploited** in by far, the most fulfilling experience of my life."}]}},ee={title:"My research story",description:"Growing up immersed in health issues, from taking care of my cancer-stricken grandmother at 8 to being bedridden from COVID myself at 17, **I'm devoted to solving health problems through medical research**. For the last four years, I\u2019ve been fortunate to be part of **cutting-edge medical and data science research** through internships at the [New York Genome Center](https://www.nygenome.org/), [Google](https://research.google/outreach/csrmp/) and Nobel laureate [Joachim Frank's lab](https://franklab.cpmc.columbia.edu/franklab/) at Columbia University. Now, I'm conducting and coordinating data science and epidemiological research on COVID-19 in Bangladesh and recently co-authored a paper.",papersSection:{title:"Papers",description:"In September 2020, I got the honor of **co-authoring my first formal paper for peer review** alongside my colleagues and mentors from **UC Berkeley and Harvard**! In the past, I've also written for research competitions and contributed to multiple papers listed below.",papers:[{title:"[Participatory syndromic surveillance as a tool for tracking COVID-19 in Bangladesh](https://doi.org/10.1101/2020.08.28.20183905)",subtitle:"September 2020",authors:" **Authors:** Ayesha S Mahmud, *Shayan Chowdhury*, Kawsar Hossain Sojib, Anir Chowdhury, Md. Tanvir Quader, Sangita Paul, Md. Sheikh Saidy, Ramiz Uddin, Kenth Engo-Monsen, Caroline O Buckee",institutions:" **Institutions:** a2i Programme / Bangladesh Ministry of Health"},{title:"[Characterizing Noise in Whole Genome Cell-Free DNA Analysis](/)",subtitle:"November 2018",authors:" **Author:** *Shayan Chowdhury*",institutions:" **Institutions:** Landau Lab, New York Genome Center / Weill Cornell Medical Center *(submitted for Regeneron STS)*"},{title:"[Single-Cell Methylome and Transcriptome High-Resolution Maps Define the Effects of Epigenetic Modifiers on the Landscape of Hematopoietic Differentiation](https://ashpublications.org/blood/article/130/Supplement%201/559/115871/Single-Cell-Methylome-and-Transcriptome-High)",subtitle:"January 2018",authors:" **Authors:** Franco Izzo, PhD, Asaf Poran, Stanley Chun-Wei Lee, PhD, Ronan Chaligne, PhD, Federico Gaiti, PhD, Steven Kothen-Hill, MS, Rafael Schulman, BS, Michelle Ki, Kenigsberg Ephraim, PhD, Omar Abdel-Wahab, MD, Dan A. Landau, MD PhD <br/> ***(I CONTRIBUTED, NOT AN AUTHOR)***",institutions:" **Institution:** Landau Lab, New York Genome Center / Weill Cornell Medical Center "},{title:"[Single-Cell Methylome and Transcriptome High-Resolution Maps Define the Effects of Epigenetic Modifiers on the Landscape of Hematopoietic Differentiation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5333260/)",subtitle:"January 2017",authors:" **Authors:** Austin M. Coe, MPH, William Ueng, MPH, Jennifer M. Vargas, BS, Raven David, MPH, Alejandro Vanegas, MS, Katherine Infante, MPH, Meghna Trivedi, MD, Haeseung Yi, MPA, Jill Dimond, PhD, Katherine D. Crew, MD, MS, and Rita Kukafka, DrPH, MA <br/> ***(I CONTRIBUTED, NOT AN AUTHOR)***",institutions:" **Institution:** Crew Lab, Herbert Irving Comprehensive Cancer Center, Columbia University, College of Physicians and Surgeons "}]}},ne="A bit about myself",te="I'm a recent graduate of Stuyvesant High School in NYC, currently taking a gap year working in Bangladesh. This last year's been tough for everyone, so I wanted to take my love for technology and [research](/research) to make a positive impact in the lives of people sufferring from the disasters that defined 2020. Outside of work, I love playing guitar, making music and sleeping.",re=t.p+"static/media/thonk.13c4de3a.gif";var ie=function(){return Object(r.jsxs)(_,{children:[Object(r.jsxs)(J,{children:[Object(r.jsxs)(Y,{children:[Object(r.jsx)("h1",{children:Z.title}),Object(r.jsx)("h3",{dangerouslySetInnerHTML:{__html:R(Z.description)}})]}),Object(r.jsx)(q,{children:Object(r.jsx)("img",{src:re,alt:""})})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)("h2",{children:Z.currentWork.title}),Object(r.jsx)("div",{className:"things",children:Z.currentWork.works.map((function(e){return Object(r.jsx)(X,{title:e.title,subtitle:e.subtitle,image:e.image,textBoxes:[e.description]},e.title)}))})]})]})};function ae(){var e=Object(m.a)(["\n  padding: 2em 2em 2em;\n"]);return ae=function(){return e},e}function oe(){var e=Object(m.a)(["\n  display: grid;\n  gap: 1em;\n  margin: 5em auto 0;\n"]);return oe=function(){return e},e}function ce(){var e=Object(m.a)(["\n  padding-top: ","px; /* 100 */\n\n  @media screen and (max-width: ",") {\n    padding-top: ","px;\n    flex-wrap: wrap;\n  }\n"]);return ce=function(){return e},e}var se=Object(h.c)(F)(ce(),(function(e){return e.theme.measurements.headerHeight+25}),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.theme.measurements.headerHeight+25})),le=Object(h.c)(F)(oe()),ue=Object(h.c)(z)(ae());var he=function(){return Object(r.jsxs)(_,{children:[Object(r.jsxs)(se,{children:[Object(r.jsx)("h1",{children:ee.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:R(ee.description)}})]}),Object(r.jsxs)(le,{children:[Object(r.jsx)("h2",{children:ee.papersSection.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:R(ee.papersSection.description)}}),ee.papersSection.papers.map((function(e){return Object(r.jsx)(ue,{title:e.title,subtitle:e.subtitle,textBoxes:[e.authors,e.institutions]})}))]})]})};function de(){var e=Object(m.a)(["\n  height: 500px;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: ","px) {\n    height: 350px;\n    max-width: 350px;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(m.a)(["\n  @media screen and (max-width: ","px) {\n    margin: 0 auto 2em;\n  }\n\n  h1 {\n    background: linear-gradient(\n      271deg,\n      #a0e9ff 30%,\n      #a162e8 50%,\n      #f093b0 70%,\n      #edca85 94%\n    );\n    background-clip: transparent;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: 300% 300%;\n    animation: gradient 15s ease infinite;\n\n    @keyframes gradient {\n      0% {\n        background-position: 0% 50%;\n      }\n      50% {\n        background-position: 100% 50%;\n      }\n      100% {\n        background-position: 0% 50%;\n      }\n    }\n  }\n"]);return me=function(){return e},e}function pe(){var e=Object(m.a)(["\n  display: flex;\n  gap: 3em;\n  align-items: center;\n  justify-content: center;\n\n  padding-top: ","px;\n\n  @media screen and (max-width: ","px) {\n    padding-top: ","px;\n    flex-wrap: wrap;\n  }\n"]);return pe=function(){return e},e}var ge=Object(h.c)(F)(pe(),(function(e){return e.theme.measurements.headerHeight+50}),(function(e){return e.theme.measurements.mobileBreakpoint}),(function(e){return e.theme.measurements.headerHeight+50})),be=h.c.div(me(),(function(e){return e.theme.measurements.mobileBreakpoint})),fe=Object(h.c)(N)(de(),(function(e){return e.theme.measurements.mobileBreakpoint}));var xe=function(){return Object(r.jsx)(_,{children:Object(r.jsxs)(ge,{children:[Object(r.jsx)(fe,{children:Object(r.jsx)("img",{src:re,alt:""})}),Object(r.jsxs)(be,{children:[Object(r.jsx)("h1",{children:ne}),Object(r.jsx)("h3",{dangerouslySetInnerHTML:{__html:R(te)}})]})]})})};function je(){var e=Object(u.f)().pathname;return Object(i.useEffect)((function(){setTimeout((function(){window.scrollTo(0,0)}),100)}),[e]),null}var Oe=function(){var e=Object(u.f)(),n=Object(i.useState)("dark"),t=Object(l.a)(n,2);return t[0],t[1],Object(r.jsxs)(h.a,{theme:b,children:[Object(r.jsx)(je,{}),Object(r.jsx)(g,{}),Object(r.jsx)(T,{}),Object(r.jsx)(d.a,{exitBeforeEnter:!0,children:Object(r.jsxs)(u.c,{location:e,children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:ie}),Object(r.jsx)(u.a,{exact:!0,path:"/research",component:he}),Object(r.jsx)(u.a,{exact:!0,path:"/about",component:xe})]},e.pathname)}),Object(r.jsx)(A,{})]})},ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(Oe,{})})}),document.getElementById("root")),ye()}},[[37,1,2]]]);
//# sourceMappingURL=main.07b8bdb7.chunk.js.map
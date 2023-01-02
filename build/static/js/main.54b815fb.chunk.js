(this["webpackJsonpryan-website"]=this["webpackJsonpryan-website"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ryan-bradford.com",j="Hello",d="Ryan Bradford",h="Full-Stack Engineer",b="   I'm a MTSIII on the Cloud Director Service Hyperscaler's team at VMware helping to build the next generation of datacenter management technology.\n\n    I'm currently working on a patent-pending technology to connect Cloud Director instances to customer datacenters in a simple and secure way. I also serve as the Build Czar for the team, where I'm responsible for alerting about issues in tests and builds. I'm also the mentor for our team interns, which has helped me learn so much about being a developer!\n\n    In my free time, I enjoy rock climbing, hiking, going to tasty coffee shops, and DJing a little. Please feel free to reach out about anything!",u="https://www.ryan-bradford.com/resume/resume.html",m={linkedin:"https://www.linkedin.com/in/ryan-bradford-b686b7155/",github:"https://github.com/ryan-bradford"},f=[{name:"Epidemik",description:"A crowdsourced disease data collector. Won the 1st price at the Northeastern Husky Startup challenge Spring 2018. Sadly, discontinued before 2020...",stack:["Express.js","Swift","React","MySQL"],sourceCode:"https://github.com/epidemik-dev"},{name:"Capsol",description:"A platform for allowing individuals to easily invest in small-scale solar projects, and for homeowners to get funds to complete these projects.",stack:["Express.js","Angular","MySQL"],sourceCode:"https://github.com/ryan-bradford/Capsol-API"},{name:"DJ Code",description:"The custom MIDI mappings for my DJ setup, made in Javascript. Also, contains the p5.js code for the visuals.",stack:["TypeScript"],sourceCode:"https://github.com/ryan-bradford/dj-code"}],O=["Java","Spring","Hibernate","Kubernetes","Helm","Docker","Terraform","TypeScript","Express.js","Angular","Swift","SQL","Linux","Jenkins"],p="ryanbradford333@gmail.com@mail.com",x=n(16),k=n.n(x),g=n(14),v=n.n(g),N=n(18),_=n.n(N),y=n(17),w=n.n(y),C=(n(28),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(a.useState)(!1),o=Object(s.a)(l,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[f.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,p?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(v.a,{}):Object(i.jsx)(k.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(w.a,{}):Object(i.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),I=n(11),E=n.n(I),J=n(19),A=n.n(J),D=(n(33),function(){var e=d,t=h,n=b,c=u,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})]})]})}),L=n(7),P=n.n(L),T=n(20),H=n.n(T),M=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},P()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(H.a,{})})]})}),B=(n(36),function(){return f.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(i.jsx)(M,{project:e},P()())}))})]}):null}),R=(n(37),function(){return O.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())}))})]}):null}),Q=n(21),z=n.n(Q),F=(n(38),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(z.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return p?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(p),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),W=(n(41),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(S,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(D,{}),Object(i.jsx)(B,{}),Object(i.jsx)(R,{}),Object(i.jsx)(K,{})]}),Object(i.jsx)(F,{}),Object(i.jsx)(V,{})]})});n(42);Object(c.render)(Object(i.jsx)(l,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.54b815fb.chunk.js.map
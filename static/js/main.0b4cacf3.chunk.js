(this["webpackJsonpryan-website"]=this["webpackJsonpryan-website"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ryan-bradford.com",j="Hello",d="Ryan Bradford",b="Full-Stack Engineer",h="   I'm a 23 year-old Software Engineer based out of San Francisco, CA. I moved here in 2022 from my hometown of Boston, MA. I also went to school in Boston at Northeastern University. Here, I received my B.S. in Computer Science and Economics. Since then - professionally, I'm a developer who's great at building production-reach web applications. But I'm also interested in politics and economics. Specifically, housing supply, market-failures, and regulations are a passion of mine. I'm always looking for opportunities to bridge my passion and my profession.\n\n    Right now, I'm a developer at VMware. We are making a patent-pending technology to connect Cloud Director Instances in AWS to customer datacenters in a simple and secure way. On the team, I've been a mentor to our two interns, intrinsic to ensuring our application is serviceable and reliable, and delivered important features that unlock customers delivering millions in revenue.\n\n    In my free time, I enjoy rock climbing, hiking, going to tasty coffee shops, and DJing a little. Please feel free to reach out about anything!",u="https://www.ryan-bradford.com/resume/resume.html",m={linkedin:"https://www.linkedin.com/in/ryan-bradford-b686b7155/",github:"https://github.com/ryan-bradford"},p=[{name:"Epidemik",description:"A crowdsourced disease data collector. Won the 1st price at the Northeastern Husky Startup challenge Spring 2018. Sadly, discontinued before 2020...",stack:["Express.js","Swift","React","MySQL"],sourceCode:"https://github.com/epidemik-dev"},{name:"Capsol",description:"A platform for allowing individuals to easily invest in small-scale solar projects, and for homeowners to get funds to complete these projects.",stack:["Express.js","Angular","MySQL"],sourceCode:"https://github.com/ryan-bradford/Capsol-API"},{name:"Waypointr",description:"Allows users to easily identify waypoints on their camera in real-time. Created to identify the peaks of mountains.",stack:["Swift"],sourceCode:"https://github.com/ryan-bradford/waypointr"}],f=["Java","Spring","Hibernate","Kubernetes","Helm","Docker","TypeScript","Express.js","Angular","Swift","SQL","Linux","Jenkins"],O="ryanbradford333@gmail.com@mail.com",x=n(16),k=n.n(x),g=n(14),v=n.n(g),y=n(18),N=n.n(y),w=n(17),_=n.n(w),S=(n(28),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(a.useState)(!1),o=Object(s.a)(l,2),j=o[0],d=o[1],b=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,f.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,O?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(v.a,{}):Object(i.jsx)(k.a,{})}),Object(i.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(_.a,{}):Object(i.jsx)(N.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(S,{})]})}),I=n(11),E=n.n(I),A=n(19),B=n.n(A),L=(n(33),function(){var e=d,t=b,n=h,c=u,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(B.a,{})})]})]})]})}),P=n(7),H=n.n(P),J=n(20),M=n.n(J),R=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(M.a,{})})]})}),W=(n(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(R,{project:e},H()())}))})]}):null}),D=(n(37),function(){return f.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),F=n(21),Q=n.n(F),T=(n(38),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(Q.a,{fontSize:"large"})})}):null}),z=(n(39),function(){return O?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(O),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),U=(n(41),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(W,{}),Object(i.jsx)(D,{}),Object(i.jsx)(z,{})]}),Object(i.jsx)(T,{}),Object(i.jsx)(K,{})]})});n(42);Object(c.render)(Object(i.jsx)(l,{children:Object(i.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0b4cacf3.chunk.js.map
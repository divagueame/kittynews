(this.webpackJsonphotnews=this.webpackJsonphotnews||[]).push([[0],{58:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(48),s=n.n(r),i=n(12),j=(n(58),n(105)),o=n(102),l=n(104),b=n(49),u=n.n(b),d=n(3);function O(e){var t=e.article;return Object(d.jsxs)("div",{className:"article",children:[Object(d.jsx)("h2",{children:t.title}),t.author&&Object(d.jsxs)("h6",{children:["@",t.author]}),Object(d.jsx)("img",{src:t.urlToImage,alt:"",srcset:""}),Object(d.jsx)("a",{href:t.url,target:"_blank",children:Object(d.jsx)(o.a,{variant:"outlined",size:"small",children:"Read more"})})]})}var h=function(e){var t=e.news;return console.log("In news..."),Object(d.jsx)("div",{className:"news-container",children:t.map((function(e,t){return Object(d.jsx)(O,{article:e},t)}))})},x=function(){return Object(d.jsx)("h1",{children:"KITTYNEWS"})};var v=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),b=Object(i.a)(s,2),O=b[0],v=b[1],f=Object(c.useState)(1),p=Object(i.a)(f,2),g=p[0],m=p[1],w=Object(c.useState)(""),S=Object(i.a)(w,2);return S[0],S[1],Object(c.useEffect)((function(){r(!0);var e=new AbortController;return u.a.get("https://newsapi.org/v2/everything",{params:{q:"cat",page:g,pageSize:6,apiKey:"f0de508a427043c881d2e185b12c222d"},signal:e.signal}).then((function(e){r(!1),v(e.data.articles),console.log(e.data)})),function(){return e.abort()}}),[g]),n?Object(d.jsx)(l.a,{}):Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j.a,{}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(x,{}),Object(d.jsx)(h,{news:O}),Object(d.jsxs)("div",{className:"buttons-wrapper",children:[Object(d.jsx)(o.a,{variant:"contained",onClick:function(){var e=g;e>1&&(e--,m(e))},children:"Previous"}),Object(d.jsx)(o.a,{variant:"contained",onClick:function(){var e=g;e>=0&&(e++,m(e))},children:"Next"})]})]})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.8ac32707.chunk.js.map
(window["webpackJsonpin5320-assignment2"]=window["webpackJsonpin5320-assignment2"]||[]).push([[0],{35:function(t,e,n){t.exports=n.p+"static/media/check-square-solid.ac5db576.svg"},36:function(t,e,n){t.exports=n.p+"static/media/question-square-solid.9a983e89.svg"},45:function(t,e,n){t.exports=n(66)},55:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),i=n(8),u=(n(55),n(4)),l=n(5),s=n(14),f=n(70),d=n(71),m=n(69),p=n(17),g=n(13),b=n.n(g),v=n(24);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"w500";return t?"https://image.tmdb.org/t/p/"+n+t:"http://placehold.it/500x750?text=".concat(e)},j=function(){var t=Object(v.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(e).concat(e.includes("?")?"&":"?","api_key=").concat("b7eafd1c1bbdd8645ea376385915b441","&language=en-US")).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(v.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("https://api.themoviedb.org/3/person/".concat(e,"/movie_credits")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(v.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("https://api.themoviedb.org/3/search/person?query=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(v.a)(b.a.mark((function t(e){var n,r,a,o,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:if(0!==(n=t.sent).total_results){t.next=5;break}throw Error("Director not found");case 5:return r=n.results[0],t.next=8,y(r.id);case 8:if(a=t.sent,o=a.crew.filter((function(t){return"Director"===t.job})),c=o.map((function(t){return O({},t,{poster_path:E(t.poster_path,t.original_title),backdrop_path:E(t.backdrop_path,t.original_title),seen:!1})})),0!==o.length){t.next=13;break}throw Error("Director not found");case 13:return t.abrupt("return",O({},r,{movies:c}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){return{type:"DIRECTOR_ADD",payload:t}},D=function(t){return{type:"DIRECTOR_ERROR",payload:t}};function _(){var t=Object(u.a)(["\n\tmargin-bottom: 0;\n"]);return _=function(){return t},t}function R(){var t=Object(u.a)([""]);return R=function(){return t},t}function C(){var t=Object(u.a)(["\n\twidth: 100%;\n\tmargin-top: -10px;\n"]);return C=function(){return t},t}function P(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-gap: 0.5rem;\n\talign-items: flex-start;\n\tjustify-content: center;\n\twidth: 100%;\n\tmargin: 1em 0;\n\n\t@media (min-width: 700px) {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n"]);return P=function(){return t},t}var S=l.a.form(P()),T=Object(l.a)(f.a)(C()),I=Object(l.a)(d.a)(R()),L=l.a.h2(_()),M=Object(i.b)((function(t){return t.directors}),(function(t){return{addDirector:function(e){return t(function(t){return function(e){e({type:"DIRECTOR_REQUEST"}),x(t).then((function(t){return e(k(t))})).catch((function(t){console.log(t),e(D(t.message))}))}}(e))}}}))((function(t){var e=t.addDirector,n=t.loading,o=t.error,c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],l=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null,"Add director"),a.a.createElement(S,{onSubmit:function(t){t.preventDefault(),""!==u&&(e(u),l(""))}},a.a.createElement("div",null,a.a.createElement(T,{error:!!o,loading:n,disabled:n,required:!0,dense:!0,type:"text",label:"Director",name:"director",value:u,onChange:function(t){return l(t.target.value)}}),a.a.createElement(m.a,{error:!0},o)),a.a.createElement(I,{large:!0,type:"submit"},"Add")))})),H=n(35),A=n.n(H),N=n(36),z=n.n(N);function q(){var t=Object(u.a)([""]);return q=function(){return t},t}function B(){var t=Object(u.a)(["\n\tcursor: pointer;\n\n\t&:hover "," {\n\t\tmask-repeat: no-repeat;\n\t\tmask-image: url(",");\n\t}\n\n\t&.seen "," {\n\t\tmask-repeat: no-repeat;\n\t\tmask-image: url(",");\n\t}\n\n\t&:hover:not(:focus) ",", &.seen "," {\n\t\tmask-position: center;\n\t\tfilter: grayscale(100%);\n\t}\n"]);return B=function(){return t},t}function G(){var t=Object(u.a)(["\n\twidth: 100%;\n\tborder-radius: 2px;\n\tbackground-color: grey;\n\ttransition: all 250ms ease;\n"]);return G=function(){return t},t}function U(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n\tfont-weight: bold;\n\tfont-size: 1.1rem;\n"]);return U=function(){return t},t}var V=l.a.div(U()),F=l.a.img(G()),W=l.a.div(B(),F,z.a,F,A.a,F,F),J=l.a.span(q()),Q=Object(i.b)(null,(function(t){return{toggleSeenMovie:function(e){return t({type:"DIRECTOR_TOGGLE_MOVIE_SEEN",payload:e})}}}))((function(t){var e=t.movie,n=e.id,r=e.original_title,o=e.poster_path,c=e.seen,i=t.toggleSeenMovie;return console.log(c),a.a.createElement(V,null,a.a.createElement(W,{className:c?"seen":null,onClick:function(){return i(n)}},a.a.createElement(F,{src:o})),a.a.createElement(J,null,r))})),X=function(t){var e=t.fill,n=t.height,r=t.width,o=t.className;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",viewBox:"0 0 320 512",height:n,width:r,className:o},a.a.createElement("path",{fill:e,d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}))};X.defaultProps={fill:"black"};var Y=X;function $(){var t=Object(u.a)(["\n\toverflow: hidden;\n\tmax-height: ",";\n\ttransition: max-height 0.25s ease;\n"]);return $=function(){return t},t}function K(){var t=Object(u.a)(["\n\tmargin-left: auto;\n\ttransform: ",";\n\ttransition: transform 0.25s ease;\n"]);return K=function(){return t},t}function Z(){var t=Object(u.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\tcursor: pointer;\n\tpadding: 1em;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 1.1rem;\n\tborder: none;\n\toutline: none;\n\ttransition: background-color 0.2s ease;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"]);return Z=function(){return t},t}function tt(){var t=Object(u.a)(["\n\tmargin: 0;\n"]);return tt=function(){return t},t}function et(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return et=function(){return t},t}var nt=l.a.div(et()),rt=l.a.p(tt()),at=l.a.button(Z(),(function(t){return t.backgroundColor}),(function(t){return t.color}),(function(t){return t.backgroundColorHover})),ot=Object(l.a)(Y)(K(),(function(t){return t.active?"rotate(90deg)":"rotate(0)"})),ct=l.a.div($(),(function(t){return t.maxHeight})),it=function(t){var e=t.children,n=t.title,o=t.theme,c=t.defaultActive,i=Object(r.useState)(c),u=Object(s.a)(i,2),l=u[0],f=u[1],d=Object(r.useState)("0px"),m=Object(s.a)(d,2),p=m[0],g=m[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){b.current&&l&&g("".concat(b.current.scrollHeight,"px"))}),[b,l]);return a.a.createElement(nt,null,a.a.createElement(at,{active:l,backgroundColor:o.primary,backgroundColorHover:o.primaryHover,color:o.primaryText,onClick:function(){f(!l),g(l?"0px":"".concat(b.current.scrollHeight,"px"))}},a.a.createElement(rt,null,n),a.a.createElement(ot,{active:l,width:10,fill:o.primaryText})),a.a.createElement(ct,{ref:b,maxHeight:p},e))};it.defaultProps={defaultActive:!1};var ut=Object(i.b)((function(t){return{theme:t.theme}}))(it);function lt(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tpadding: 1em;\n\tgrid-template-columns: 1fr;\n\tgrid-gap: 1rem;\n\n\t@media (min-width: 425px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\t@media (min-width: 700px) {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\t@media (min-width: 1000px) {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n"]);return lt=function(){return t},t}var st=l.a.div(lt()),ft=function(t){var e=t.director,n=e.name,r=e.movies;return a.a.createElement(ut,{title:"".concat(n," - ").concat(r.reduce((function(t,e){return t+e.seen}),0),"/").concat(r.length," seen")},a.a.createElement(st,null,r.map((function(t){return a.a.createElement(Q,{key:t.id,movie:t})}))))},dt=n(23);function mt(){var t=Object(u.a)(["\n\twidth: 150px;\n\tmargin: 1rem auto;\n"]);return mt=function(){return t},t}function pt(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n"]);return pt=function(){return t},t}var gt=l.a.div(pt()),bt=l.a.div(mt()),vt=Object(i.b)((function(t){return{movies:t.directors.results.reduce((function(t,e){return[].concat(Object(dt.a)(t),Object(dt.a)(e.movies.filter((function(t){return!t.seen}))))}),[])}}))((function(t){var e=t.movies,n=Object(r.useState)(null),o=Object(s.a)(n,2),c=o[0],i=o[1];return a.a.createElement(gt,null,a.a.createElement("h2",null,"What movie should I see?"),a.a.createElement("p",null,"Let us help you find a movie to watch."),a.a.createElement(d.a,{onClick:function(){return i(e[Math.floor(Math.random()*e.length)])}},"Get random unseen movie"),a.a.createElement(bt,null,c&&a.a.createElement(Q,{movie:c})))}));function ht(){var t=Object(u.a)(["\n\tdisplay: grid;\n\tgrid-gap: 0.1rem;\n"]);return ht=function(){return t},t}function Ot(){var t=Object(u.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\theight: 3rem;\n\tpadding: 0 1rem;\n\tfont-size: 1.25rem;\n\tdisplay: flex;\n\tflex-flow: row;\n\tjustify-content: center;\n\talign-items: center;\n\n\t@media (min-width: 700px) {\n\t\tjustify-content: space-between;\n\t}\n"]);return Ot=function(){return t},t}function Et(){var t=Object(u.a)(["\n\tpadding: 1em;\n\n\t@media (min-width: 1000px) {\n\t\twidth: 1000px;\n\t\tmargin: 0 auto;\n\t}\n"]);return Et=function(){return t},t}var jt=l.a.main(Et()),yt=l.a.header(Ot(),(function(t){return t.backgroundColor}),(function(t){return t.color})),wt=l.a.div(ht()),xt=Object(i.b)((function(t){return{directors:t.directors.results,theme:t.theme}}))((function(t){var e=t.theme,n=t.directors;return Object(r.useEffect)((function(){document.body.style.backgroundColor=e.background}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(yt,{backgroundColor:e.primary,color:e.primaryText},a.a.createElement("span",null,"Director Movie List")),a.a.createElement(jt,null,a.a.createElement(M,null),a.a.createElement(vt,null),a.a.createElement("h2",null,"Directors"),a.a.createElement(wt,null,0===n.length?"You have no favourite directors. Add one in the input above.":n.map((function(t){return a.a.createElement(ft,{key:t.id,director:t})})))),a.a.createElement("svg",{width:"0",height:"0"},a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"checkPath",clipPathUnits:"objectBoundingBox"},a.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",d:"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=n(9),Dt=n(37),_t=n(30),Rt=n(38),Ct=n.n(Rt),Pt=n(39),St=n.n(Pt),Tt=n(40);function It(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?It(n,!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):It(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Mt={error:"",loading:!1,results:[]},Ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DIRECTOR_REQUEST":return Lt({},t,{loading:!0,error:""});case"DIRECTOR_ERROR":return Lt({},t,{loading:!1,error:e.payload});case"DIRECTOR_ADD":return t.results.find((function(t){return t.id===e.payload.id}))?Lt({},t,{error:"Director already exists",loading:!1}):Lt({},t,{results:[e.payload].concat(Object(dt.a)(t.results)),loading:!1});case"DIRECTOR_TOGGLE_MOVIE_SEEN":return Lt({},t,{results:t.results.map((function(t){var n=t.movies;return Lt({},Object(Tt.a)(t,["movies"]),{movies:n.map((function(t){return t.id===e.payload?Lt({},t,{seen:!t.seen}):t}))})}))});default:return t}},At={primary:"#F93943",primaryHover:"#CC353C",primaryText:"#ffffff",background:"#ffffff",backgroundText:"#000000"},Nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,e=arguments.length>1?arguments[1]:void 0;return e.type,t},zt=Object(kt.c)({directors:Ht,theme:Nt}),qt={key:"directormovielist",storage:Ct.a,stateReconciler:St.a},Bt=Object(_t.a)(qt,zt),Gt=[Dt.a],Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||kt.d,Vt=Object(kt.e)(Bt,Ut(kt.a.apply(void 0,Gt))),Ft=Object(_t.b)(Vt),Wt=n(41);c.a.render(a.a.createElement(i.a,{store:Vt},a.a.createElement(Wt.a,{persistor:Ft,loading:a.a.createElement("h2",null,"Loading")},a.a.createElement(xt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f1758fbe.chunk.js.map
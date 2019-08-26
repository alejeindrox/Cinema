(window.webpackJsonpcinema=window.webpackJsonpcinema||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(96),n(29)),l=n(68),u=n(20),s=n(56),m=n(69),E=n.n(m),v=n(70),f=n(71),h=n(9);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={movies:[],loading:!1,error:!1};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={searches:[],loading:!1,error:!1},y=Object(u.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_PENDING":return p({},e,{loading:!0,error:!1});case"GET_MOVIES_FULFILLED":return p({},e,{movies:t.payload.results,loading:!1,error:!1});case"GET_MOVIES_REJECTED":return p({},e,{movies:[],loading:!1,error:!0});case"PATCH_MOVIES_ERROR":return p({},e,{error:!1});default:return e}},searches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCHES_PENDING":return O({},e,{loading:!0,error:!1});case"GET_SEARCHES_FULFILLED":return O({},e,{searches:t.payload.results,loading:!1,error:!1});case"GET_SEARCHES_REJECTED":return O({},e,{searches:[],loading:!1,error:!0});case"PATCH_SEARCHES_ERROR":return O({},e,{error:!1});case"PATCH_SEARCHES":return O({},e,{searches:[]});default:return e}}}),j=[v.a],_={key:"root",storage:E.a},C=Object(s.a)(_,y),S=Object(u.e)(C,{},Object(u.d)(u.a.apply(void 0,j.concat([f.a])),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),M=Object(s.b)(S),R=n(35),k=n(38),T=n.n(k),D=n(54),P=n(55),A="https://api.themoviedb.org/3/",V="sort_by=popularity.desc&api_key=%3C%3Capi_key%3E%3E",F=Object(P.createAsyncAction)("GET_MOVIES",Object(D.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"discover/movie?").concat(V)).then(function(e){return I(e)}).catch(function(e){throw N(e)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))),H=Object(P.createAsyncAction)("GET_SEARCHES",function(){var e=Object(D.a)(T.a.mark(function e(t){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"search/movie?query=").concat(t,"&").concat(V)).then(function(e){return I(e)}).catch(function(e){throw N(e)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),I=function(e){if(e.ok)return e.json();throw N()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"error";return e},L=function(){return function(e){e(F())}},x=n(73),G=function(e){var t=e.titleMeta,n=e.descMeta;return r.a.createElement(x.Helmet,null,r.a.createElement("title",null,"Cinema - ".concat(t)),r.a.createElement("meta",{name:"description",content:n}))},B=n(152),W=function(e){return r.a.createElement(B.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"Layout-Title"},e.children)},U=n(39),J=function(e){var t=e.title,n=e.classes;return r.a.createElement(B.a,{item:!0,xs:12,className:n},r.a.createElement(U.a,{variant:"h4",component:"h5",children:t}))},X=n(7),z=n(177),q=n(155),Q=n(156),$=n(157),K="https://image.tmdb.org/t/p/",Y=Object(z.a)()(r.a.memo(function(e){var t=e.movies,n=e.handleShowMovie,a=e.width;return r.a.createElement(q.a,{cellHeight:230,spacing:4,cols:Object(z.b)("lg",a)?8:Object(z.b)("md",a)?6:4},t.map(function(e,t){return r.a.createElement(Q.a,{key:t,cols:1,onClick:function(){return n(e)}},r.a.createElement("img",{src:"".concat(K,"w154/").concat(e.poster_path),alt:e.title}),r.a.createElement($.a,{title:e.title,subtitle:r.a.createElement("span",null,"Rating: ",e.vote_average)}))}))})),Z=n(120),ee=n(158),te=n(159),ne=n(160),ae=n(161),re=n(162),ce=function(e){var t=e.field,n=e.value,a=e.wrapper,c=e.gridField,o=e.gridValue;return r.a.createElement(B.a,{container:!0,item:!0,md:a},r.a.createElement(B.a,{item:!0,md:c},r.a.createElement(U.a,{variant:"body1",className:"Title-Movie-Description",children:t})),r.a.createElement(B.a,{item:!0,md:o},r.a.createElement(U.a,{variant:"body1",children:n})))},oe=function(e){var t=e.title,n=e.poster_path,a=e.backdrop_path,c=e.original_title,o=e.release_date,i=e.popularity,l=e.vote_count,u=e.vote_average,s=e.overview;return r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,sm:6,md:3},r.a.createElement("img",{src:"".concat(K,"w185_and_h278_bestv2/").concat(n),alt:t})),r.a.createElement(B.a,{item:!0,sm:6,md:3},r.a.createElement("img",{src:"".concat(K,"w185_and_h278_bestv2/").concat(a),alt:t})),r.a.createElement(B.a,{container:!0,item:!0,sm:12,md:6},r.a.createElement(ce,{field:"Original Title: ",value:c,wrapper:7,gridField:4,gridValue:8}),r.a.createElement(ce,{field:"Release Date: ",value:o,wrapper:5,gridField:7,gridValue:5}),r.a.createElement(ce,{field:"Popularity: ",value:i,wrapper:5,gridField:6,gridValue:6}),r.a.createElement(ce,{field:"Votes: ",value:l,wrapper:3,gridField:6,gridValue:6}),r.a.createElement(ce,{field:"Rating: ",value:u,wrapper:4,gridField:6,gridValue:6}),r.a.createElement(ce,{field:"Description: ",value:s,wrapper:12,gridField:12,gridValue:12})))},ie=r.a.forwardRef(function(e,t){return r.a.createElement(Z.a,Object.assign({direction:"up",ref:t},e))}),le=function(e){var t=e.control,n=e.movie;return r.a.createElement(ee.a,{open:t.booleanValue,TransitionComponent:ie,onClose:t.onBooleanChange,maxWidth:"xl",fullWidth:!0},r.a.createElement(te.a,null,n.title),r.a.createElement(ne.a,null,r.a.createElement(oe,n)),r.a.createElement(ae.a,null,r.a.createElement(re.a,{color:"primary",onClick:t.onBooleanChange},"Close")))},ue=function(e){var t=Object(a.useState)(e),n=Object(X.a)(t,2),r=n[0],c=n[1];return{booleanValue:r,onBooleanChange:function(){return c(!r)}}},se=function(e){var t=e.movies,n=ue(!1),c=Object(a.useState)(),o=Object(X.a)(c,2),i=o[0],l=o[1];return r.a.createElement(a.Fragment,null,r.a.createElement(Y,{movies:t,handleShowMovie:function(e){n.onBooleanChange(),l(e)}}),i&&r.a.createElement(le,{control:n,movie:i}))},me=n(176),Ee=function(e){return r.a.createElement(Z.a,Object.assign({},e,{direction:"up"}))},ve=function(){var e=ue(!0);return r.a.createElement(me.a,{open:e.booleanValue,onClose:function(){e.onBooleanChange()},TransitionComponent:Ee,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3,message:r.a.createElement("span",null,"An error has occurred in the connection!")})},fe={getMovies:L,patchMoviesError:function(){return function(e){e({type:"PATCH_MOVIES_ERROR"})}}},he=Object(i.b)(function(e){return{movies:e.movies}},fe)(function(e){var t=e.getMovies,n=e.patchMoviesError,c=e.movies,o=Object(a.useCallback)(function(){t()},[t]),i=Object(a.useCallback)(function(){n()},[n]);return Object(a.useEffect)(function(){o(),i()},[o,i]),r.a.createElement(a.Fragment,null,r.a.createElement(G,{titleMeta:"Discover Movies",descMeta:"Discover recent movies in order of popularity."}),r.a.createElement(W,null,r.a.createElement(J,{title:"Discover Movies",classes:"Title-Main"})),r.a.createElement(se,{movies:c.movies}),c.error&&r.a.createElement(ve,null),c.movies.length<1&&r.a.createElement(J,{title:"There are no movies in this moment."}))}),de=n(174),pe=function(e){var t=e.label,n=e.placeholder,a=e.classes,c=e.hooks;return r.a.createElement(de.a,Object.assign({label:t,placeholder:n,className:a,margin:"normal",variant:"outlined",fullWidth:!0},c))},ge={getSearches:function(e){return function(t){t(H(e))}},patchSearch:function(){return function(e){e({type:"PATCH_SEARCHES"})}},patchSearchError:function(){return function(e){e({type:"PATCH_SEARCHES_ERROR"})}}},be=Object(i.b)(function(e){return{searches:e.searches,movies:e.movies}},ge)(function(e){var t=e.movies,n=e.searches,c=e.getSearches,o=e.patchSearch,i=e.patchSearchError,l=function(e){var t=Object(a.useState)(e),n=Object(X.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){return c(e.target.value)}}}(""),u=Object(a.useCallback)(function(){l.value&&c(encodeURI(l.value))},[c,l.value]),s=Object(a.useCallback)(function(){""===l.value&&o()},[o,l.value]),m=Object(a.useCallback)(function(){i()},[i]);return Object(a.useEffect)(function(){u(),s(),m()},[l.value,u,s,m]),r.a.createElement(a.Fragment,null,r.a.createElement(G,{titleMeta:"Movies by Search",descMeta:"Find movies that match with your search."}),r.a.createElement(W,null,r.a.createElement(J,{title:"Movies by Search",classes:"Title-Main"}),r.a.createElement(pe,{label:"Search",placeholder:"Movie",classes:"Search-Input",hooks:l,fullWidth:!0})),""===l.value?r.a.createElement(se,{movies:t.movies}):r.a.createElement(se,{movies:n.searches}),n.error&&r.a.createElement(ve,null),""!==l.value&&n.searches.length<1&&!n.loading&&r.a.createElement(J,{title:"There are no movies that match the search."}))}),Oe=n(175),we={getMovies:L},ye=Object(i.b)(function(e){return{movies:e.movies}},we)(function(e){var t=e.movies,n=function(e){var t=Object(a.useState)(e),n=Object(X.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e,t){return c(t)}}}(0),c=0===n.value?t.movies:t.movies.filter(function(e){return e.vote_average<=2*n.value&&e.vote_average>=2*n.value-2}).sort(function(e,t){return t.vote_average-e.vote_average});return r.a.createElement(a.Fragment,null,r.a.createElement(G,{titleMeta:"Movies by Rating",descMeta:"Find movies that match with your rating"}),r.a.createElement(W,null,r.a.createElement(J,{title:"Movies by Rating",classes:"Title-Main"}),r.a.createElement(U.a,{component:"legend",className:"Title-Rating",children:"Rating:"}),r.a.createElement(Oe.a,Object.assign({size:"large"},n))),r.a.createElement(se,{movies:c}),c.length<1&&r.a.createElement(J,{title:"There are no movies with that rating."}))}),je=n(165),_e=function(e){return r.a.createElement(je.a,{fixed:!0,className:"Layout"},e.children)},Ce=n(166),Se=n(167),Me=n(168),Re=n(78),ke=n.n(Re),Te=function(e){var t=e.handleMenuDrawer;return r.a.createElement(Ce.a,{position:"fixed"},r.a.createElement(Se.a,null,r.a.createElement(Me.a,{color:"inherit",onClick:function(){return t()},"aria-label":"open drawer",edge:"start"},r.a.createElement(ke.a,null)),r.a.createElement(U.a,{variant:"h5",children:"Cinema"})))},De=n(169),Pe=n(170),Ae=n(164),Ve=n(171),Fe=n(172),He=n(173),Ie=n(79),Ne=n.n(Ie),Le=n(80),xe=n.n(Le),Ge=n(82),Be=n.n(Ge),We=n(81),Ue=n.n(We),Je=function(e){var t=e.open,n=e.handleMenuDrawer;return r.a.createElement(De.a,{anchor:"left",open:t,onClose:n},r.a.createElement("div",null,r.a.createElement(Me.a,{onClick:function(){return n()}},r.a.createElement(Ne.a,null))),r.a.createElement(Pe.a,null),r.a.createElement(Ae.a,null,r.a.createElement(R.a,{to:"/"},r.a.createElement(Ve.a,{button:!0,onClick:function(){return n()}},r.a.createElement(Fe.a,null,r.a.createElement(xe.a,null)),r.a.createElement(He.a,{primary:"Discover Movies"}))),r.a.createElement(R.a,{to:"search"},r.a.createElement(Ve.a,{button:!0,onClick:function(){return n()}},r.a.createElement(Fe.a,null,r.a.createElement(Ue.a,null)),r.a.createElement(He.a,{primary:"Movies by Search"}))),r.a.createElement(R.a,{to:"rate"},r.a.createElement(Ve.a,{button:!0,onClick:function(){return n()}},r.a.createElement(Fe.a,null,r.a.createElement(Be.a,null)),r.a.createElement(He.a,{primary:"Movies By Rating"})))))},Xe=r.a.memo(function(){var e=ue(!1),t=function(){e.onBooleanChange()};return r.a.createElement(a.Fragment,null,r.a.createElement(Te,{handleMenuDrawer:t}),r.a.createElement(Je,{handleMenuDrawer:t,open:e.booleanValue}))}),ze=(n(118),function(){return r.a.createElement(i.a,{store:S},r.a.createElement(l.a,{loading:null,persistor:M},r.a.createElement(Xe,null),r.a.createElement(_e,null,r.a.createElement(R.b,null,r.a.createElement(he,{path:"/"}),r.a.createElement(be,{path:"search"}),r.a.createElement(ye,{path:"rate"}),r.a.createElement(he,{default:!0})))))}),qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(ze,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Cinema",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Cinema","/service-worker.js");qe?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Qe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Qe(e)})}}()},91:function(e,t,n){e.exports=n(119)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.df05befd.chunk.js.map
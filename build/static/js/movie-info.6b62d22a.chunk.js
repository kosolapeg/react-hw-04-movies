(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[4],{35:function(e,t,A){"use strict";A.d(t,"e",(function(){return c})),A.d(t,"a",(function(){return s})),A.d(t,"b",(function(){return u})),A.d(t,"c",(function(){return o})),A.d(t,"d",(function(){return i}));var n=A(39),r=A.n(n);r.a.defaults.baseURL="https://api.themoviedb.org/3";var a="60d3eb3665993fae2174e10ed23701eb",c=function(){return r.a.get("trending/movie/week?api_key=".concat(a)).then((function(e){var t=e.data;if(0===t.results.length)throw new Error("No movies were found for your request. Try again");return t.results}))},s=function(e){return r.a.get("movie/".concat(e,"?api_key=").concat(a)).then((function(e){return e.data}))},u=function(e){return r.a.get("movie/".concat(e,"/credits?api_key=").concat(a)).then((function(e){return e.data}))},o=function(e){return r.a.get("movie/".concat(e,"/reviews?api_key=").concat(a)).then((function(e){return e.data.results}))},i=function(e){return r.a.get("search/movie?api_key=".concat(a,"&query=").concat(e)).then((function(e){return e.data.results}))}},73:function(e,t,A){"use strict";A.r(t);var n=A(36),r=A.n(n);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function c(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function s(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?c(Object(A),!0).forEach((function(t){a(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):c(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}var u=A(38),o=A(14),i=A(15),l=A(17),p=A(16),b=A(0),j=A(8),d=A(2),v=A(35),f=A(1),O=Object(b.lazy)((function(){return A.e(1).then(A.bind(null,74))})),h=Object(b.lazy)((function(){return A.e(6).then(A.bind(null,75))})),m=function(e){Object(l.a)(A,e);var t=Object(p.a)(A);function A(){var e;Object(o.a)(this,A);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={poster_path:null,release_date:null,title:null,vote_average:null,overview:null,genres:null,tagline:null,error:null},e.handleGoBack=function(){var t,A=e.props,n=A.history,r=A.location;n.push((null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)||"/")},e}return Object(i.a)(A,[{key:"componentDidMount",value:function(){var e=Object(u.a)(r.a.mark((function e(){var t,A,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.prev=1,e.next=4,Object(v.a)(t);case 4:n=e.sent,this.setState(s(s({},n),{},{genres:(null===n||void 0===n||null===(A=n.genres)||void 0===A?void 0:A.map((function(e){return e.name})).join(" / "))||null,release_date:n.release_date?n.release_date.split("-")[0]:null,poster_path:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):"data:image/png;base64,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"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({error:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match,t=e.url,A=e.path,n=this.state,r=n.poster_path,a=n.release_date,c=n.title,s=n.vote_average,u=n.overview,o=n.genres,i=n.tagline;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"MovieContainer",children:[Object(f.jsx)("div",{className:"MoviePoster",children:Object(f.jsx)("img",{className:"MoviePoster__image",src:r,alt:'Poster of movie "'.concat(c,'"')})}),Object(f.jsxs)("div",{className:"MovieInfo",children:[Object(f.jsx)("button",{type:"button",className:"btnGoBack",onClick:this.handleGoBack,children:"<< go back"}),Object(f.jsx)("h2",{className:"MovieInfo__title",children:"".concat(c," (").concat(a,")")}),Object(f.jsx)("h3",{children:"Genres:"}),Object(f.jsx)("p",{className:"MovieInfo__genres",children:o}),Object(f.jsx)("h3",{children:"User Rating:"}),Object(f.jsxs)("p",{className:"MovieInfo__votes",children:[s," / 10 point"]}),Object(f.jsx)("h3",{children:"Tagline:"}),Object(f.jsxs)("i",{children:['"',i,'"']}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Plot: "}),u]})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("h3",{children:"Aditional information:"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"".concat(t,"/cast"),children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"".concat(t,"/review"),children:"Reviews"})})]}),Object(f.jsx)(b.Suspense,{fallback:Object(f.jsx)("h2",{children:"loading..."})}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:"".concat(A,"/cast"),component:O}),Object(f.jsx)(d.a,{path:"".concat(A,"/review"),component:h})]})]})}}]),A}(b.Component);t.default=m}}]);
//# sourceMappingURL=movie-info.6b62d22a.chunk.js.map
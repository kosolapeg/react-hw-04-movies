(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[1],{34:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,"a",(function(){return n}))},37:function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var n=e(34);function a(t,r){if(t){if("string"===typeof t)return Object(n.a)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n.a)(t,r):void 0}}},40:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));var n=e(34);var a=e(37);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},74:function(t,r,e){"use strict";e.r(r),e.d(r,"default",(function(){return d}));var n=e(36),a=e.n(n),c=e(40),o=e(38),i=e(14),s=e(15),u=e(17),f=e(16),p=e(0),l=e(35),b=e.p+"static/media/no_photo.22d7f1c8.png",h=e(1),d=function(t){Object(u.a)(e,t);var r=Object(f.a)(e);function e(){var t;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=r.call.apply(r,[this].concat(a))).state={actors:[]},t}return Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark((function t(){var r,e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.props.match.params.movieId,console.log(r),t.next=4,Object(l.b)(r);case 4:e=t.sent,n=e.cast,this.setState({actors:Object(c.a)(n)});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.actors;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:t.map((function(t){var r=t.id,e=t.name,n=t.profile_path,a=t.character;return Object(h.jsxs)("li",{children:[e," as ",Object(h.jsx)("i",{children:a}),Object(h.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):b,alt:"Actor ".concat(e),width:100})]},r)}))})})}}]),e}(p.Component)}}]);
//# sourceMappingURL=cast.0fa8fc81.chunk.js.map
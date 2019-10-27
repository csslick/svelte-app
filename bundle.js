var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function r(n){n.forEach(t)}function o(n){return"function"==typeof n}function a(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function l(n,t){n.appendChild(t)}function c(n,t,e){n.insertBefore(t,e||null)}function i(n){n.parentNode.removeChild(n)}function u(n){return document.createElement(n)}function p(n){return document.createTextNode(n)}function s(){return p(" ")}function f(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function d(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function m(n){return""===n?void 0:+n}function h(n,t){t=""+t,n.data!==t&&(n.data=t)}function y(n,t){(null!=t||n.value)&&(n.value=t)}let $;function g(n){$=n}function v(){const n=$;return(t,e)=>{const r=n.$$.callbacks[t];if(r){const o=function(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}(t,e);r.slice().forEach(t=>{t.call(n,o)})}}}const b=[],_=[],x=[],k=[],w=Promise.resolve();let C=!1;function P(n){x.push(n)}function E(){const n=new Set;do{for(;b.length;){const n=b.shift();g(n),N(n.$$)}for(;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];n.has(e)||(e(),n.add(e))}x.length=0}while(b.length);for(;k.length;)k.pop()();C=!1}function N(n){n.fragment&&(n.update(n.dirty),r(n.before_update),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_update.forEach(P))}const S=new Set;let A;function j(){A={r:0,c:[],p:A}}function D(){A.r||r(A.c),A=A.p}function L(n,t){n&&n.i&&(S.delete(n),n.i(t))}function M(n,t,e,r){if(n&&n.o){if(S.has(n))return;S.add(n),A.c.push(()=>{S.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}}function O(n,e,a){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=n.$$;l.m(e,a),P(()=>{const e=c.map(t).filter(o);i?i.push(...e):r(e),n.$$.on_mount=[]}),u.forEach(P)}function q(n,t){n.$$.fragment&&(r(n.$$.on_destroy),n.$$.fragment.d(t),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={})}function B(n,t){n.$$.dirty||(b.push(n),C||(C=!0,w.then(E)),n.$$.dirty=e()),n.$$.dirty[t]=!0}function T(t,o,a,l,c,i){const u=$;g(t);const p=o.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:n,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:null};let f=!1;s.ctx=a?a(t,p,(n,e,r=e)=>(s.ctx&&c(s.ctx[n],s.ctx[n]=r)&&(s.bound[n]&&s.bound[n](r),f&&B(t,n)),e)):p,s.update(),f=!0,r(s.before_update),s.fragment=l(s.ctx),o.target&&(o.hydrate?s.fragment.l(function(n){return Array.from(n.childNodes)}(o.target)):s.fragment.c(),o.intro&&L(t.$$.fragment),O(t,o.target,o.anchor),E()),g(u)}class H{$destroy(){q(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function K(t){var e;return{c(){(e=u("div")).innerHTML="<h1>Player Scoreboard</h1>",d(e,"class","navbar bg-primary")},m(n,t){c(n,e,t)},p:n,i:n,o:n,d(n){n&&i(e)}}}class z extends H{constructor(n){super(),T(this,n,null,K,a,[])}}function F(n){var t;return{c(){t=p("+")},m(n,e){c(n,t,e)},d(n){n&&i(t)}}}function G(n){var t;return{c(){t=p("-")},m(n,e){c(n,t,e)},d(n){n&&i(t)}}}function I(n){var t,e,o,a,l,p,m=!1;function h(){m=!0,n.input_input_handler.call(l)}return{c(){(t=u("button")).textContent="+1",e=s(),(o=u("button")).textContent="-1",a=s(),l=u("input"),d(t,"class","btn"),d(o,"class","btn btn-dark"),d(l,"type","number"),p=[f(t,"click",n.click_handler_1),f(o,"click",n.click_handler_2),f(l,"input",h)]},m(r,i){c(r,t,i),c(r,e,i),c(r,o,i),c(r,a,i),c(r,l,i),y(l,n.point)},p(n,t){!m&&n.point&&y(l,t.point),m=!1},d(n){n&&(i(t),i(e),i(o),i(a),i(l)),r(p)}}}function J(t){var e,o,a,m,y,$,g,v,b,_,x,k,w;function C(n,t){return t.showControls?G:F}var P=C(0,t),E=P(t),N=t.showControls&&I(t);return{c(){e=u("div"),o=u("div"),a=u("h1"),m=p(t.name),y=s(),$=u("button"),E.c(),g=s(),(v=u("button")).textContent="x",b=s(),_=u("h3"),x=p(t.point),k=s(),N&&N.c(),d($,"class","btn btn-sm"),d(v,"class","btn btn-danger btn-sm"),d(a,"class","svelte-i7qo5m"),d(o,"class","card"),d(e,"class","container"),w=[f($,"click",t.click_handler),f(v,"click",t.onDelete)]},m(n,t){c(n,e,t),l(e,o),l(o,a),l(a,m),l(a,y),l(a,$),E.m($,null),l(a,g),l(a,v),l(o,b),l(o,_),l(_,x),l(o,k),N&&N.m(o,null)},p(n,t){n.name&&h(m,t.name),P!==(P=C(0,t))&&(E.d(1),(E=P(t))&&(E.c(),E.m($,null))),n.point&&h(x,t.point),t.showControls?N?N.p(n,t):((N=I(t)).c(),N.m(o,null)):N&&(N.d(1),N=null)},i:n,o:n,d(n){n&&i(e),E.d(),N&&N.d(),r(w)}}}function Q(n,t,e){const r=v();let{name:o="",point:a=0}=t,l=!0;return n.$set=n=>{"name"in n&&e("name",o=n.name),"point"in n&&e("point",a=n.point)},{name:o,point:a,showControls:l,onDelete:()=>r("removeplayer",o),click_handler:()=>e("showControls",l=!l),click_handler_1:()=>e("point",a++,a),click_handler_2:()=>e("point",a--,a),input_input_handler:function(){a=m(this.value),e("point",a)}}}class R extends H{constructor(n){super(),T(this,n,Q,J,a,["name","point"])}}function U(t){var e,o,a,p,m,h,$,g=!1;function v(){g=!0,t.input1_input_handler.call(p)}return{c(){e=u("form"),o=u("input"),a=s(),p=u("input"),m=s(),h=u("input"),d(o,"type","text"),d(o,"placeholder","Player Name"),d(p,"type","number"),d(p,"placeholder","Player Point"),d(h,"type","submit"),d(h,"class","btn btn-primary"),h.value="Add Player",d(e,"class","grid-3"),$=[f(o,"input",t.input0_input_handler),f(p,"input",v),f(e,"submit",t.onSubmit)]},m(n,r){c(n,e,r),l(e,o),y(o,t.player.name),l(e,a),l(e,p),y(p,t.player.point),l(e,m),l(e,h)},p(n,t){n.player&&o.value!==t.player.name&&y(o,t.player.name),!g&&n.player&&y(p,t.player.point),g=!1},i:n,o:n,d(n){n&&i(e),r($)}}}function V(n,t,e){const r=v();let o={name:"",point:0};return{player:o,onSubmit:n=>{n.preventDefault(),r("addplayer",o),e("player",o={name:"",point:0})},input0_input_handler:function(){o.name=this.value,e("player",o)},input1_input_handler:function(){o.point=m(this.value),e("player",o)}}}class W extends H{constructor(n){super(),T(this,n,V,U,a,[])}}function X(n,t,e){const r=Object.create(n);return r.player=t[e],r}function Y(n){var t,e;let r=n.players,o=[];for(let t=0;t<r.length;t+=1)o[t]=nn(X(n,r,t));const a=n=>M(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=p("")},m(n,r){for(let t=0;t<o.length;t+=1)o[t].m(n,r);c(n,t,r),e=!0},p(n,e){if(n.players){let l;for(r=e.players,l=0;l<r.length;l+=1){const a=X(e,r,l);o[l]?(o[l].p(n,a),L(o[l],1)):(o[l]=nn(a),o[l].c(),L(o[l],1),o[l].m(t.parentNode,t))}for(j(),l=r.length;l<o.length;l+=1)a(l);D()}},i(n){if(!e){for(let n=0;n<r.length;n+=1)L(o[n]);e=!0}},o(n){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)M(o[n]);e=!1},d(n){!function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(o,n),n&&i(t)}}}function Z(t){var e;return{c(){(e=u("p")).textContent="No Players"},m(n,t){c(n,e,t)},p:n,i:n,o:n,d(n){n&&i(e)}}}function nn(n){var t,e=new R({props:{name:n.player.name,point:n.player.point}});return e.$on("removeplayer",n.removePlayer),{c(){e.$$.fragment.c()},m(n,r){O(e,n,r),t=!0},p(n,t){var r={};n.players&&(r.name=t.player.name),n.players&&(r.point=t.player.point),e.$set(r)},i(n){t||(L(e.$$.fragment,n),t=!0)},o(n){M(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function tn(n){var t,e,r,o,a,p,f=new z({}),m=new W({});m.$on("addplayer",n.addPlayer);var h=[Z,Y],y=[];function $(n,t){return 0===t.players.length?0:1}return o=$(0,n),a=y[o]=h[o](n),{c(){f.$$.fragment.c(),t=s(),e=u("div"),m.$$.fragment.c(),r=s(),a.c(),d(e,"class","container")},m(n,a){O(f,n,a),c(n,t,a),c(n,e,a),O(m,e,null),l(e,r),y[o].m(e,null),p=!0},p(n,t){var r=o;(o=$(0,t))===r?y[o].p(n,t):(j(),M(y[r],1,1,()=>{y[r]=null}),D(),(a=y[o])||(a=y[o]=h[o](t)).c(),L(a,1),a.m(e,null))},i(n){p||(L(f.$$.fragment,n),L(m.$$.fragment,n),L(a),p=!0)},o(n){M(f.$$.fragment,n),M(m.$$.fragment,n),M(a),p=!1},d(n){q(f,n),n&&(i(t),i(e)),q(m),y[o].d()}}}function en(n,t,e){let r=[{name:"Michael Kwon",point:30},{name:"권예지",point:20},{name:"심미순",point:50}];return{players:r,addPlayer:n=>{const t=n.detail;e("players",r=[...r,t]),console.log(t)},removePlayer:n=>{e("players",r=r.filter(t=>(console.log(n.detail),t.name!==n.detail)))}}}return new class extends H{constructor(n){super(),T(this,n,en,tn,a,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

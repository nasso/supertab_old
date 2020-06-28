var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const l="undefined"!=typeof window;let a=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(p)}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function x(){return $(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let z,A;function _(){if(void 0===z){z=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){z=!0}}return z}function k(t,e,n){t.classList[n?"add":"remove"](e)}function C(t){A=t}function E(t){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(t)}const D=[],M=[],j=[],B=[],S=Promise.resolve();let q=!1;function I(t){j.push(t)}let P=!1;const T=new Set;function O(){if(!P){P=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];C(e),F(e.$$)}for(D.length=0;M.length;)M.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];T.has(e)||(T.add(e),e())}j.length=0}while(D.length);for(;B.length;)B.pop()();q=!1,P=!1,T.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const N=new Set;let W;function X(){W={r:0,c:[],p:W}}function Y(){W.r||r(W.c),W=W.p}function L(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),W.c.push(()=>{N.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const R="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function U(t,e){t.d(1),e.delete(t.key)}function Z(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function J(t,e,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,o),I(()=>{const e=c.map(n).filter(i);l?l.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(I)}function K(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(D.push(t),q||(q=!0,S.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,i,s,c,l,a=[-1]){const u=A;C(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let d=!1;if(p.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),d&&V(e,t)),n}):[],p.update(),d=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&L(e.$$.fragment),J(e,n.target,n.anchor),O()}C(u)}class et{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function nt(e){let n;return{c(){n=m("p"),n.textContent="Effects here!"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class ot extends et{constructor(t){super(),tt(this,t,null,nt,s,{})}}function rt(e){let n;return{c(){n=m("p"),n.textContent="Preview here!"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class it extends et{constructor(t){super(),tt(this,t,null,rt,s,{})}}function st(e){let n;return{c(){n=m("p"),n.textContent="Timeline here!"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class ct extends et{constructor(t){super(),tt(this,t,null,st,s,{})}}function lt(e){let n;return{c(){n=m("p"),n.textContent="Console here!"},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class at extends et{constructor(t){super(),tt(this,t,null,lt,s,{})}}const ut=[];function ft(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!ut.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,c=t){const l=[s,c];return r.push(l),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function pt(t){return"[object Date]"===Object.prototype.toString.call(t)}function dt(t,e={}){const n=ft(t),{stiffness:o=.15,damping:r=.8,precision:i=.01}=e;let s,c,l,d=t,h=t,g=1,m=0,$=!1;function x(e,o={}){h=e;const r=l={};if(null==t||o.hard||v.stiffness>=1&&v.damping>=1)return $=!0,s=a(),d=e,n.set(t=h),Promise.resolve();if(o.soft){const t=!0===o.soft?.5:+o.soft;m=1/(60*t),g=0}return c||(s=a(),$=!1,c=function(t){let e;return 0===f.size&&u(p),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}(e=>{if($)return $=!1,c=null,!1;g=Math.min(g+m,1);const o={inv_mass:g,opts:v,settled:!0,dt:60*(e-s)/1e3},r=function t(e,n,o,r){if("number"==typeof o||pt(o)){const t=r-o,i=(o-n)/(e.dt||1/60),s=(i+(e.opts.stiffness*t-e.opts.damping*i)*e.inv_mass)*e.dt;return Math.abs(s)<e.opts.precision&&Math.abs(t)<e.opts.precision?r:(e.settled=!1,pt(o)?new Date(o.getTime()+s):o+s)}if(Array.isArray(o))return o.map((i,s)=>t(e,n[s],o[s],r[s]));if("object"==typeof o){const i={};for(const s in o)i[s]=t(e,n[s],o[s],r[s]);return i}throw new Error(`Cannot spring ${typeof o} values`)}(o,d,t,h);return s=e,d=t,n.set(t=r),o.settled&&(c=null),!o.settled})),new Promise(t=>{c.promise.then(()=>{r===l&&t()})})}const v={set:x,update:(e,n)=>x(e(h,t),n),subscribe:n.subscribe,stiffness:o,damping:r,precision:i};return v}const ht=ft(!1),{window:gt}=R;function mt(t,e,n){const o=t.slice();return o[47]=e[n],o[49]=n,o}function $t(t,e,n){const o=t.slice();return o[50]=e[n],o[49]=n,o}function xt(t){let e,n,o,r,i,s,c,l,a,u,f,p=[],v=new Map,y=t[8][t[10]].title+"",z=t[8];const A=t=>t[50].id;for(let e=0;e<z.length;e+=1){let n=$t(t,z,e),o=A(n);v.set(o,p[e]=wt(o,n))}var _=t[8][t[10]].component;_&&(r=new _({}));let C=t[7],E=[];for(let e=0;e<C.length;e+=1)E[e]=yt(mt(t,C,e));return{c(){e=m("nav");for(let t=0;t<p.length;t+=1)p[t].c();n=x(),o=m("div"),r&&H(r.$$.fragment),i=x();for(let t=0;t<E.length;t+=1)E[t].c();s=x(),c=m("div"),l=m("span"),a=$(y),b(e,"class","svelte-1hxznpz"),b(o,"class","pane svelte-1hxznpz"),k(o,"first_is_current",0===t[10]),b(l,"class","label svelte-1hxznpz"),b(c,"class","tab_ghost svelte-1hxznpz"),b(c,"style",u=`\n        transform:\n          translate(${t[11].x}px, ${t[11].y}px)\n          translate(${t[16].x}px, ${t[16].y}px)\n          rotateZ(${t[18]}deg);\n      `),k(c,"enable",t[13])},m(u,g){h(u,e,g);for(let t=0;t<p.length;t+=1)p[t].m(e,null);h(u,n,g),h(u,o,g),r&&J(r,o,null),h(u,i,g);for(let t=0;t<E.length;t+=1)E[t].m(u,g);h(u,s,g),h(u,c,g),d(c,l),d(l,a),t[41](c),f=!0},p(t,n){if(25175809&n[0]){const o=t[8];p=function(t,e,n,o,r,i,s,c,l,a,u,f){let p=t.length,d=i.length,h=p;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,x=new Map;for(h=d;h--;){const t=f(r,i,h),c=n(t);let l=s.get(c);l?o&&l.p(t,e):(l=a(c,t),l.c()),$.set(c,m[h]=l),c in g&&x.set(c,Math.abs(h-g[c]))}const v=new Set,b=new Set;function w(t){L(t,1),t.m(c,u),s.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=m[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(u=e.first,p--,d--):$.has(r)?!s.has(o)||v.has(o)?w(e):b.has(r)?p--:x.get(o)>x.get(r)?(b.add(o),w(e)):(v.add(r),p--):(l(n,s),p--)}for(;p--;){const e=t[p];$.has(e.key)||l(e,s)}for(;d;)w(m[d-1]);return m}(p,n,A,1,t,o,v,e,U,wt,null,$t)}if(_!==(_=t[8][t[10]].component)){if(r){X();const t=r;Q(t.$$.fragment,1,0,()=>{K(t,1)}),Y()}_?(r=new _({}),H(r.$$.fragment),L(r.$$.fragment,1),J(r,o,null)):r=null}if(1024&n[0]&&k(o,"first_is_current",0===t[10]),1610743936&n[0]|1&n[1]){let e;for(C=t[7],e=0;e<C.length;e+=1){const o=mt(t,C,e);E[e]?E[e].p(o,n):(E[e]=yt(o),E[e].c(),E[e].m(s.parentNode,s))}for(;e<E.length;e+=1)E[e].d(1);E.length=C.length}(!f||1280&n[0])&&y!==(y=t[8][t[10]].title+"")&&w(a,y),(!f||329728&n[0]&&u!==(u=`\n        transform:\n          translate(${t[11].x}px, ${t[11].y}px)\n          translate(${t[16].x}px, ${t[16].y}px)\n          rotateZ(${t[18]}deg);\n      `))&&b(c,"style",u),8192&n[0]&&k(c,"enable",t[13])},i(t){f||(r&&L(r.$$.fragment,t),f=!0)},o(t){r&&Q(r.$$.fragment,t),f=!1},d(l){l&&g(e);for(let t=0;t<p.length;t+=1)p[t].d();l&&g(n),l&&g(o),r&&K(r),l&&g(i),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,l),l&&g(s),l&&g(c),t[41](null)}}}function vt(t){let n,o,r,i,s,c,l,a,u,f;const p=[t[19](t[2][0])];let d={};for(let t=0;t<p.length;t+=1)d=e(d,p[t]);o=new _t({props:d});const $=[t[19](t[2][1])];let w={};for(let t=0;t<$.length;t+=1)w=e(w,$[t]);return s=new _t({props:w}),{c(){n=m("div"),H(o.$$.fragment),r=x(),i=m("div"),H(s.$$.fragment),c=x(),l=m("div"),b(n,"class","pane svelte-1hxznpz"),y(n,"left","0px"),y(n,"right",t[3]-t[5]+t[14]+"px"),b(i,"class","pane svelte-1hxznpz"),y(i,"left",t[5]+t[14]+"px"),y(i,"right","0px"),b(l,"class","separator svelte-1hxznpz"),y(l,"left",t[5]-t[15]+"px"),y(l,"right",t[3]-t[5]-t[15]+"px"),k(l,"resizing",t[6])},m(e,p){h(e,n,p),J(o,n,null),h(e,r,p),h(e,i,p),J(s,i,null),h(e,c,p),h(e,l,p),a=!0,u||(f=v(l,"mousedown",t[20]),u=!0)},p(t,e){const r=524292&e[0]?Z(p,[G(t[19](t[2][0]))]):{};o.$set(r),(!a||16424&e[0])&&y(n,"right",t[3]-t[5]+t[14]+"px");const c=524292&e[0]?Z($,[G(t[19](t[2][1]))]):{};s.$set(c),(!a||16416&e[0])&&y(i,"left",t[5]+t[14]+"px"),(!a||32800&e[0])&&y(l,"left",t[5]-t[15]+"px"),(!a||32808&e[0])&&y(l,"right",t[3]-t[5]-t[15]+"px"),64&e[0]&&k(l,"resizing",t[6])},i(t){a||(L(o.$$.fragment,t),L(s.$$.fragment,t),a=!0)},o(t){Q(o.$$.fragment,t),Q(s.$$.fragment,t),a=!1},d(t){t&&g(n),K(o),t&&g(r),t&&g(i),K(s),t&&g(c),t&&g(l),u=!1,f()}}}function bt(t){let n,o,r,i,s,c,l,a,u,f;const p=[t[19](t[2][0])];let d={};for(let t=0;t<p.length;t+=1)d=e(d,p[t]);o=new _t({props:d});const $=[t[19](t[2][1])];let w={};for(let t=0;t<$.length;t+=1)w=e(w,$[t]);return s=new _t({props:w}),{c(){n=m("div"),H(o.$$.fragment),r=x(),i=m("div"),H(s.$$.fragment),c=x(),l=m("div"),b(n,"class","pane svelte-1hxznpz"),y(n,"top","0px"),y(n,"bottom",t[4]-t[5]+t[14]+"px"),b(i,"class","pane svelte-1hxznpz"),y(i,"top",t[5]+t[14]+"px"),y(i,"bottom","0px"),b(l,"class","separator svelte-1hxznpz"),y(l,"top",t[5]-t[15]+"px"),y(l,"bottom",t[4]-t[5]-t[15]+"px"),k(l,"resizing",t[6])},m(e,p){h(e,n,p),J(o,n,null),h(e,r,p),h(e,i,p),J(s,i,null),h(e,c,p),h(e,l,p),a=!0,u||(f=v(l,"mousedown",t[20]),u=!0)},p(t,e){const r=524292&e[0]?Z(p,[G(t[19](t[2][0]))]):{};o.$set(r),(!a||16432&e[0])&&y(n,"bottom",t[4]-t[5]+t[14]+"px");const c=524292&e[0]?Z($,[G(t[19](t[2][1]))]):{};s.$set(c),(!a||16416&e[0])&&y(i,"top",t[5]+t[14]+"px"),(!a||32800&e[0])&&y(l,"top",t[5]-t[15]+"px"),(!a||32816&e[0])&&y(l,"bottom",t[4]-t[5]-t[15]+"px"),64&e[0]&&k(l,"resizing",t[6])},i(t){a||(L(o.$$.fragment,t),L(s.$$.fragment,t),a=!0)},o(t){Q(o.$$.fragment,t),Q(s.$$.fragment,t),a=!1},d(t){t&&g(n),K(o),t&&g(r),t&&g(i),K(s),t&&g(c),t&&g(l),u=!1,f()}}}function wt(t,e){let n,o,i,s,c,l,a,u=e[50].title+"",f=e[49];const p=()=>e[35](n,f),y=()=>e[35](null,f);function z(...t){return e[36](e[49],...t)}return{key:t,first:null,c(){n=m("div"),o=m("span"),i=$(u),s=x(),b(o,"class","label svelte-1hxznpz"),b(n,"class","tab svelte-1hxznpz"),b(n,"draggable",c=e[0]&&e[49]===e[10]),k(n,"current",e[49]===e[10]),k(n,"dragged",e[49]===e[10]&&e[13]),this.first=n},m(t,r){h(t,n,r),d(n,o),d(o,i),d(n,s),p(),l||(a=[v(n,"mousedown",z),v(n,"dragstart",e[24])],l=!0)},p(t,o){e=t,256&o[0]&&u!==(u=e[50].title+"")&&w(i,u),1281&o[0]&&c!==(c=e[0]&&e[49]===e[10])&&b(n,"draggable",c),f!==e[49]&&(y(),f=e[49],p()),1280&o[0]&&k(n,"current",e[49]===e[10]),9472&o[0]&&k(n,"dragged",e[49]===e[10]&&e[13])},d(t){t&&g(n),y(),l=!1,r(a)}}}function yt(t){let e,n,o,i;function s(...e){return t[37](t[49],...e)}function c(...e){return t[38](t[49],...e)}function l(...e){return t[39](t[49],...e)}function a(...e){return t[40](t[49],...e)}return{c(){e=m("div"),b(e,"class",n="dropzone "+t[47].side+" svelte-1hxznpz"),k(e,"active",t[47].active),k(e,"enabled",t[17])},m(t,n){h(t,e,n),o||(i=[v(e,"dragover",s),v(e,"dragenter",c),v(e,"dragleave",l),v(e,"drop",a)],o=!0)},p(o,r){t=o,128&r[0]&&n!==(n="dropzone "+t[47].side+" svelte-1hxznpz")&&b(e,"class",n),128&r[0]&&k(e,"active",t[47].active),131200&r[0]&&k(e,"enabled",t[17])},d(t){t&&g(e),o=!1,r(i)}}}function zt(t){let e,n,o,i,s,c,l;const a=[bt,vt,xt],u=[];function f(t,e){return"vertical"===t[1]?0:"horizontal"===t[1]?1:2}return n=f(t),o=u[n]=a[n](t),{c(){e=m("div"),o.c(),b(e,"class","container svelte-1hxznpz"),I(()=>t[42].call(e)),k(e,"vertical","vertical"===t[1]),k(e,"horizontal","horizontal"===t[1]),k(e,"nosplit","vertical"!==t[1]&&"horizontal"!==t[1])},m(o,r){h(o,e,r),u[n].m(e,null),i=function(t,e){const n=getComputedStyle(t),o=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const r=m("iframe");r.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${o};`),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const i=_();let s;return i?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=v(window,"message",t=>{t.source===r.contentWindow&&e()})):(r.src="about:blank",r.onload=()=>{s=v(r.contentWindow,"resize",e)}),d(t,r),()=>{(i||s&&r.contentWindow)&&s(),g(r)}}(e,t[42].bind(e)),s=!0,c||(l=[v(gt,"mousemove",t[26]),v(gt,"mouseup",t[25]),v(gt,"dragover",t[27]),v(gt,"dragend",t[28])],c=!0)},p(t,r){let i=n;n=f(t),n===i?u[n].p(t,r):(X(),Q(u[i],1,1,()=>{u[i]=null}),Y(),o=u[n],o||(o=u[n]=a[n](t),o.c()),L(o,1),o.m(e,null)),2&r[0]&&k(e,"vertical","vertical"===t[1]),2&r[0]&&k(e,"horizontal","horizontal"===t[1]),2&r[0]&&k(e,"nosplit","vertical"!==t[1]&&"horizontal"!==t[1])},i(t){s||(L(o),s=!0)},o(t){Q(o),s=!1},d(t){t&&g(e),u[n].d(),i(),c=!1,r(l)}}}function At(t,e,n){let o,r,i;c(t,ht,t=>n(17,r=t));let s,l,{editable:a=!1}=e,{split:u="none"}=e,{content:f=[]}=e,{view:p=(t=>({title:"Untitled",component:t}))}=e,{gaps:d=4}=e,{separator_size:h=8}=e,g=200;E(()=>{n(5,g=("vertical"===u?l:s)/2)});let m=!1;let $,x,v=[{side:"top",active:!1},{side:"bottom",active:!1},{side:"right",active:!1},{side:"left",active:!1}],b=[],w=[],y=0,z={x:0,y:0,width:0,height:0},A={x:0,y:0},_={x:0,y:0},k=dt({x:0,y:0},{stiffness:.8});c(t,k,t=>n(16,o=t));let C=dt(0);c(t,C,t=>n(18,i=t));let D=!1;function j(t,e){if(0!==t.button)return;n(10,y=e);let o=w[y].getBoundingClientRect();n(11,z={x:o.x,y:o.y,width:o.width,height:o.height}),A.x=t.clientX-z.x,A.y=t.clientY-z.y,D=!0}function B(t,e){x||(n(13,x=!0),window.requestAnimationFrame((()=>{let t=o.x;return function e(){if(!x)return;let n=o.x-t;t=o.x,C.set(n),window.requestAnimationFrame(e)}})()));let r=w[y].getBoundingClientRect();_.x=t,_.y=e,k.set({x:_.x-(r.x+A.x),y:_.y-(r.y+A.y)})}function S(t,e,o){o&&n(7,v[e].active=!0,v)}function q(t,e,o){o&&n(7,v[e].active=!1,v)}function I(t,e,o){o&&n(7,v[e].active=!1,v)}let P,T;return t.$set=t=>{"editable"in t&&n(0,a=t.editable),"split"in t&&n(1,u=t.split),"content"in t&&n(2,f=t.content),"view"in t&&n(32,p=t.view),"gaps"in t&&n(33,d=t.gaps),"separator_size"in t&&n(34,h=t.separator_size)},t.$$.update=()=>{if(4&t.$$.dirty[1]&&n(14,P=d/2),8&t.$$.dirty[1]&&n(15,T=h/2),6&t.$$.dirty[0]|2&t.$$.dirty[1]&&"vertical"!==u&&"horizontal"!==u){let t=0;Array.isArray(f)?n(8,b=f.map(e=>({id:t++,...p(e)}))):n(8,b=[{id:t++,...p(f)}])}},[a,u,f,s,l,g,m,v,b,w,y,z,$,x,P,T,o,r,i,function(t){return"object"==typeof t&&t.split?{split:t.split,content:t.content,view:t.view?t.view:p,gaps:d,separator_size:h,editable:a}:{split:"none",content:t,view:p,gaps:d,separator_size:h,editable:a}},function(t){m||0!==t.button||(t.preventDefault(),n(6,m=!0))},k,C,j,function(t){if(t.target!==w[y])return;let e=new Image;e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(e,0,0),ht.set(!0)},function(t){0===t.button&&(t.preventDefault(),n(6,m=!1),D&&(D=!1,n(13,x=!1),_.x=0,_.y=0,k.set({x:0,y:0})))},function(t){if(m)switch(u){case"vertical":n(5,g+=t.movementY);break;case"horizontal":n(5,g+=t.movementX)}D&&B(t.clientX,t.clientY)},function(t){D&&B(t.clientX,t.clientY)},function(t){D&&(D=!1,ht.set(!1),n(13,x=!1),_.x=0,_.y=0,k.set({x:0,y:0}))},S,q,I,p,d,h,function(t,e){w[e]!==t&&M[t?"unshift":"push"](()=>{w[e]=t,n(9,w),n(8,b),n(1,u),n(2,f),n(32,p)})},(t,e)=>j(e,t),(t,e)=>function(t,e,n){t.preventDefault()}(e),(t,e)=>S(0,t,!0),(t,e)=>q(0,t,!0),(t,e)=>I(0,t,!0),function(t){M[t?"unshift":"push"](()=>{$=t,n(12,$)})},function(){s=this.clientWidth,l=this.clientHeight,n(3,s),n(4,l)}]}class _t extends et{constructor(t){super(),tt(this,t,At,zt,s,{editable:0,split:1,content:2,view:32,gaps:33,separator_size:34},[-1,-1])}}function kt(t){let n,o,r,i;const s=[{editable:!0},t[0]];let c={};for(let t=0;t<s.length;t+=1)c=e(c,s[t]);return r=new _t({props:c}),{c(){n=m("main"),o=m("div"),H(r.$$.fragment),b(o,"class","container svelte-hbkcqs"),b(n,"class","svelte-hbkcqs")},m(t,e){h(t,n,e),d(n,o),J(r,o,null),i=!0},p(t,[e]){const n=1&e?Z(s,[s[0],G(t[0])]):{};r.$set(n)},i(t){i||(L(r.$$.fragment,t),i=!0)},o(t){Q(r.$$.fragment,t),i=!1},d(t){t&&g(n),K(r)}}}function Ct(t){const e={effects:ot,preview:it,timeline:ct,console:at};return[{view:t=>({title:t.replace(/^\w/,t=>t.toUpperCase()),component:e[t]}),split:"horizontal",content:[["effects","preview","console","timeline"],{split:"vertical",content:["preview",["timeline","console"]]}]}]}return new class extends et{constructor(t){super(),tt(this,t,Ct,kt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

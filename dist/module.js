/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function r(r,n){for(var t=0,e=n.length,f=r.length;t<e;t++,f++)r[f]=n[t];return r}function n(r,n){return r[0]<n[0]?-1:r[0]>n[0]?1:0}function t(r,n){return r[1]<n[1]?-1:r[1]>n[1]?1:0}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)return[];for(var f=[],o=(t=t.sort(n))[0],u=o[0],l=o[1],a=1,h=t.length;a<h;a++){var i=t[a],v=i[0],g=i[1];l<v&&(f.push([u,l]),u=v),l<g&&(l=g)}return r(r([],f),[[u,l]])}function f(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(!r.length)return[];for(var t=[],f=0,o=r.length;f<o;f++)t=t.concat(r[f]);return e.apply(void 0,t)}function o(r,n){return function(r,n){return n[1]>r[0]&&n[0]<r[1]}(r,n)?n[0]>r[0]&&n[1]<r[1]?[[r[0],n[0]],[n[1],r[1]]]:n[0]<=r[0]&&n[1]>=r[1]?null:n[0]>r[0]?[[r[0],n[0]]]:[[n[1],r[1]]]:[r]}function u(r,n){var t,f=e.apply(void 0,r),u=e.apply(void 0,n);if(!f.length)return[];if(!u.length)return f;for(var l=[],a=0,h=f.length;a<h;a++){for(var i=f[a],v=i[0],g=i[1],c=!0,p=0,s=u.length;p<s;p++){var b=u[p];if(!(b[1]<=v)){if(b[0]>=g)break;var k=o([v,g],b);if(!k){c=!1;break}v=(t=k[k.length-1])[0],g=t[1],k.length>1&&l.push(k[0])}}c&&l.push([v,g])}return l}function l(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];r.sort(n);for(var f=[r[r.length-1][0],r.sort(t)[0][1]],o=f[0],u=f[1],l=0,a=r.length;l<a-1;l++){var h=r[l+1],i=h[0],v=h[1];if(i>u||v<o)return null}return[o,u]}function a(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var e=r[0],f=1,o=r.length;f<o;f++){var u=r[f];u.sort(n);for(var a=[],h=0,i=e.length;h<i;h++)for(var v=e[h],g=0,c=u.length;g<c;g++){var p=u[g];if(!(p[1]<=v[0])){if(p[0]>=v[1])break;a.push(l(v,p))}}e=a}return e.length?e:[]}function h(r,n){return n[0]>=r[0]&&n[1]<=r[1]}function i(r,n){r=f(r);for(var t=0,e=(n=f(n)).length;t<e;t++){for(var o=!1,u=0,l=r.length;u<l;u++)if(h(r[u],n[t])){o=!0;break}if(!o)return!1}return!0}export{i as arrayContains,u as arrayDifference,a as arrayIntersection,f as arrayUnion,h as contains,o as difference,l as intersection,e as union};

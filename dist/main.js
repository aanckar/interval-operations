"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var r=0,n=0,t=arguments.length;n<t;n++)r+=arguments[n].length;var e=Array(r),o=0;for(n=0;n<t;n++)for(var f=arguments[n],a=0,u=f.length;a<u;a++,o++)e[o]=f[a];return e}function n(r,n){return r[0]<n[0]?-1:r[0]>n[0]?1:0}function t(r,n){return r[1]<n[1]?-1:r[1]>n[1]?1:0}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)return[];for(var o=[],f=(t=t.sort(n))[0],a=f[0],u=f[1],i=1,l=t.length;i<l;i++){var h=t[i],v=h[0],g=h[1];u<v&&(o.push([a,u]),a=v),u<g&&(u=g)}return r(o,[[a,u]])}function o(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(!r.length)return[];for(var t=[],o=0,f=r.length;o<f;o++)t=t.concat(r[o]);return e.apply(void 0,t)}function f(r,n){return function(r,n){return n[1]>r[0]&&n[0]<r[1]}(r,n)?n[0]>r[0]&&n[1]<r[1]?[[r[0],n[0]],[n[1],r[1]]]:n[0]<=r[0]&&n[1]>=r[1]?null:n[0]>r[0]?[[r[0],n[0]]]:[[n[1],r[1]]]:[r]}function a(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];r.sort(n);for(var o=[r[r.length-1][0],r.sort(t)[0][1]],f=o[0],a=o[1],u=0,i=r.length;u<i-1;u++){var l=r[u+1],h=l[0],v=l[1];if(h>a||v<f)return null}return[f,a]}function u(r,n){return n[0]>=r[0]&&n[1]<=r[1]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.arrayContains=function(r,n){r=o(r);for(var t=0,e=(n=o(n)).length;t<e;t++){for(var f=!1,a=0,i=r.length;a<i;a++)if(u(r[a],n[t])){f=!0;break}if(!f)return!1}return!0},exports.arrayDifference=function(r,n){var t,o=e.apply(void 0,r),a=e.apply(void 0,n);if(!o.length)return[];if(!a.length)return o;for(var u=[],i=0,l=o.length;i<l;i++){for(var h=o[i],v=h[0],g=h[1],s=!0,c=0,p=a.length;c<p;c++){var x=a[c];if(!(x[1]<=v)){if(x[0]>=g)break;var y=f([v,g],x);if(!y){s=!1;break}v=(t=y[y.length-1])[0],g=t[1],y.length>1&&u.push(y[0])}}s&&u.push([v,g])}return u},exports.arrayIntersection=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var e=r[0],o=1,f=r.length;o<f;o++){var u=r[o];u.sort(n);for(var i=[],l=0,h=e.length;l<h;l++)for(var v=e[l],g=0,s=u.length;g<s;g++){var c=u[g];if(!(c[1]<=v[0])){if(c[0]>=v[1])break;i.push(a(v,c))}}e=i}return e.length?e:[]},exports.arrayUnion=o,exports.contains=u,exports.difference=f,exports.intersection=a,exports.union=e;

function r(r,n){return r[0]<n[0]?-1:r[0]>n[0]?1:0}function n(r,n){return r[1]<n[1]?-1:r[1]>n[1]?1:0}function t(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(!n.length)return[];for(var e=[],f=(n=n.sort(r))[0],o=f[0],u=f[1],a=1,l=n.length;a<l;a++){var i=n[a],h=i[0],v=i[1];u<h&&(e.push([o,u]),o=h),u<v&&(u=v)}return e.concat([[o,u]])}function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(!r.length)return[];for(var e=[],f=0,o=r.length;f<o;f++)e=e.concat(r[f]);return t.apply(void 0,e)}function f(r,n){return function(r,n){return n[1]>r[0]&&n[0]<r[1]}(r,n)?n[0]>r[0]&&n[1]<r[1]?[[r[0],n[0]],[n[1],r[1]]]:n[0]<=r[0]&&n[1]>=r[1]?null:n[0]>r[0]?[[r[0],n[0]]]:[[n[1],r[1]]]:[r]}function o(r,n){var e,o=t.apply(void 0,r),u=t.apply(void 0,n);if(!o)return[];if(!u)return o;for(var a=[],l=0,i=o.length;l<i;l++){for(var h=o[l],v=h[0],g=h[1],c=!0,p=0,s=u.length;p<s;p++){var b=u[p];if(!(b[1]<=v)){if(b[0]>=g)break;var k=f([v,g],b);if(!k){c=!1;break}v=(e=k[k.length-1])[0],g=e[1],k.length>1&&a.push(k[0])}}c&&a.push([v,g])}return a}function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.sort(r);for(var f=[t[t.length-1][0],t.sort(n)[0][1]],o=f[0],u=f[1],a=0,l=t.length;a<l-1;a++){var i=t[a+1],h=i[0],v=i[1];if(h>u||v<o)return null}return[o,u]}function a(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var e=n[0],f=1,o=n.length;f<o;f++){var a=n[f];a.sort(r);for(var l=[],i=0,h=e.length;i<h;i++)for(var v=e[i],g=0,c=a.length;g<c;g++){var p=a[g];if(!(p[1]<=v[0])){if(p[0]>=v[1])break;l.push(u(v,p))}}e=l}return e.length?e:[]}function l(r,n){return n[0]>=r[0]&&n[1]<=r[1]}function i(r,n){r=e(r);for(var t=0,f=(n=e(n)).length;t<f;t++){for(var o=!1,u=0,a=r.length;u<a;u++)if(l(r[u],n[t])){o=!0;break}if(!o)return!1}return!0}export{i as arrayContains,o as arrayDifference,a as arrayIntersection,e as arrayUnion,l as contains,f as difference,u as intersection,t as union};

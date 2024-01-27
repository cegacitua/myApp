import{b as pe}from"./chunk-IIKFY65W.js";import{F as Wt,H as Zt,K as wt,V as Xt,aa as te,b as W,ba as ee,ca as ne,d as Jt,da as re,e as Z,ea as oe,fa as ie,ga as se,h as Ot,i as x,j as X,ja as ue,k as _,l as ht,m as y,ma as ae,n as C,na as ce,o as mt,oa as le,pa as fe,qa as de,r as Yt,ra as ge,s as A,sa as he,t as jt,u as pt,x as Qt,xa as me,y as Gt,z as $t}from"./chunk-NUXSCCIY.js";import"./chunk-G7XXDTQ5.js";import"./chunk-5T54POBR.js";import"./chunk-AHYTFRZN.js";import"./chunk-4PGTP63H.js";import"./chunk-HC6MZPB3.js";import"./chunk-NBBNAC2E.js";import"./chunk-O3H6XU3T.js";import"./chunk-GLBLXQ6N.js";import"./chunk-PPEBARQN.js";import"./chunk-TAHDAPYO.js";import"./chunk-5U2FUULQ.js";import"./chunk-SLNPOJBS.js";import"./chunk-7XJAICMY.js";import"./chunk-MCRJI3T3.js";import"./chunk-AFC5P2X6.js";import"./chunk-YHLQW4KP.js";import"./chunk-MM5QLNJM.js";import"./chunk-72ZMTLHO.js";import"./chunk-2EOHHFOF.js";import"./chunk-JXIEZMHN.js";import"./chunk-JTSJSQ6Q.js";import{d,e as Tn,f as vt}from"./chunk-MIURFOFH.js";var ye=d((Ar,we)=>{"use strict";we.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var b=d(L=>{"use strict";var yt,Sn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];L.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};L.getSymbolTotalCodewords=function(t){return Sn[t]};L.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};L.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');yt=t};L.isKanjiModeEnabled=function(){return typeof yt<"u"};L.toSJIS=function(t){return yt(t)}});var tt=d(w=>{"use strict";w.L={bit:1};w.M={bit:0};w.Q={bit:3};w.H={bit:2};function bn(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return w.L;case"m":case"medium":return w.M;case"q":case"quartile":return w.Q;case"h":case"high":return w.H;default:throw new Error("Unknown EC Level: "+n)}}w.isValid=function(t){return t&&typeof t.bit<"u"&&t.bit>=0&&t.bit<4};w.from=function(t,e){if(w.isValid(t))return t;try{return bn(t)}catch{return e}}});var Ie=d((Sr,Ee)=>{"use strict";function Ce(){this.buffer=[],this.length=0}Ce.prototype={get:function(n){let t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};Ee.exports=Ce});var Ae=d((br,Be)=>{"use strict";function v(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}v.prototype.set=function(n,t,e,r){let o=n*this.size+t;this.data[o]=e,r&&(this.reservedBit[o]=!0)};v.prototype.get=function(n,t){return this.data[n*this.size+t]};v.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};v.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};Be.exports=v});var Ne=d(et=>{"use strict";var Mn=b().getSymbolSize;et.getRowColCoords=function(t){if(t===1)return[];let e=Math.floor(t/7)+2,r=Mn(t),o=r===145?26:Math.ceil((r-13)/(2*e-2))*2,i=[r-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-o;return i.push(6),i.reverse()};et.getPositions=function(t){let e=[],r=et.getRowColCoords(t),o=r.length;for(let i=0;i<o;i++)for(let s=0;s<o;s++)i===0&&s===0||i===0&&s===o-1||i===o-1&&s===0||e.push([r[i],r[s]]);return e}});var be=d(Se=>{"use strict";var Rn=b().getSymbolSize,Te=7;Se.getPositions=function(t){let e=Rn(t);return[[0,0],[e-Te,0],[0,e-Te]]}});var Me=d(g=>{"use strict";g.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var D={N1:3,N2:3,N3:40,N4:10};g.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7};g.from=function(t){return g.isValid(t)?parseInt(t,10):void 0};g.getPenaltyN1=function(t){let e=t.size,r=0,o=0,i=0,s=null,u=null;for(let a=0;a<e;a++){o=i=0,s=u=null;for(let c=0;c<e;c++){let l=t.get(a,c);l===s?o++:(o>=5&&(r+=D.N1+(o-5)),s=l,o=1),l=t.get(c,a),l===u?i++:(i>=5&&(r+=D.N1+(i-5)),u=l,i=1)}o>=5&&(r+=D.N1+(o-5)),i>=5&&(r+=D.N1+(i-5))}return r};g.getPenaltyN2=function(t){let e=t.size,r=0;for(let o=0;o<e-1;o++)for(let i=0;i<e-1;i++){let s=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);(s===4||s===0)&&r++}return r*D.N2};g.getPenaltyN3=function(t){let e=t.size,r=0,o=0,i=0;for(let s=0;s<e;s++){o=i=0;for(let u=0;u<e;u++)o=o<<1&2047|t.get(s,u),u>=10&&(o===1488||o===93)&&r++,i=i<<1&2047|t.get(u,s),u>=10&&(i===1488||i===93)&&r++}return r*D.N3};g.getPenaltyN4=function(t){let e=0,r=t.data.length;for(let i=0;i<r;i++)e+=t.data[i];return Math.abs(Math.ceil(e*100/r/5)-10)*D.N4};function Pn(n,t,e){switch(n){case g.Patterns.PATTERN000:return(t+e)%2===0;case g.Patterns.PATTERN001:return t%2===0;case g.Patterns.PATTERN010:return e%3===0;case g.Patterns.PATTERN011:return(t+e)%3===0;case g.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2===0;case g.Patterns.PATTERN101:return t*e%2+t*e%3===0;case g.Patterns.PATTERN110:return(t*e%2+t*e%3)%2===0;case g.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}g.applyMask=function(t,e){let r=e.size;for(let o=0;o<r;o++)for(let i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,Pn(t,i,o))};g.getBestMask=function(t,e){let r=Object.keys(g.Patterns).length,o=0,i=1/0;for(let s=0;s<r;s++){e(s),g.applyMask(s,t);let u=g.getPenaltyN1(t)+g.getPenaltyN2(t)+g.getPenaltyN3(t)+g.getPenaltyN4(t);g.applyMask(s,t),u<i&&(i=u,o=s)}return o}});var Et=d(Ct=>{"use strict";var M=tt(),nt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],rt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ct.getBlocksCount=function(t,e){switch(e){case M.L:return nt[(t-1)*4+0];case M.M:return nt[(t-1)*4+1];case M.Q:return nt[(t-1)*4+2];case M.H:return nt[(t-1)*4+3];default:return}};Ct.getTotalCodewordsCount=function(t,e){switch(e){case M.L:return rt[(t-1)*4+0];case M.M:return rt[(t-1)*4+1];case M.Q:return rt[(t-1)*4+2];case M.H:return rt[(t-1)*4+3];default:return}}});var Re=d(it=>{"use strict";var J=new Uint8Array(512),ot=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)J[e]=t,ot[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)J[e]=J[e-255]})();it.log=function(t){if(t<1)throw new Error("log("+t+")");return ot[t]};it.exp=function(t){return J[t]};it.mul=function(t,e){return t===0||e===0?0:J[ot[t]+ot[e]]}});var Pe=d(O=>{"use strict";var It=Re();O.mul=function(t,e){let r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=It.mul(t[o],e[i]);return r};O.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){let o=r[0];for(let s=0;s<e.length;s++)r[s]^=It.mul(e[s],o);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r};O.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let r=0;r<t;r++)e=O.mul(e,new Uint8Array([1,It.exp(r)]));return e}});var De=d((Fr,Le)=>{"use strict";var xe=Pe();function Bt(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}Bt.prototype.initialize=function(t){this.degree=t,this.genPoly=xe.generateECPolynomial(this.degree)};Bt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=xe.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let i=new Uint8Array(this.degree);return i.set(r,o),i}return r};Le.exports=Bt});var At=d(Fe=>{"use strict";Fe.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}});var Nt=d(N=>{"use strict";var Ue="[0-9]+",xn="[A-Z $%*+\\-./:]+",Y="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Y=Y.replace(/u/g,"\\u");var Ln="(?:(?![A-Z0-9 $%*+\\-./:]|"+Y+`)(?:.|[\r
]))+`;N.KANJI=new RegExp(Y,"g");N.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");N.BYTE=new RegExp(Ln,"g");N.NUMERIC=new RegExp(Ue,"g");N.ALPHANUMERIC=new RegExp(xn,"g");var Dn=new RegExp("^"+Y+"$"),Fn=new RegExp("^"+Ue+"$"),Un=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");N.testKanji=function(t){return Dn.test(t)};N.testNumeric=function(t){return Fn.test(t)};N.testAlphanumeric=function(t){return Un.test(t)}});var R=d(m=>{"use strict";var qn=At(),Tt=Nt();m.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};m.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};m.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};m.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};m.MIXED={bit:-1};m.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!qn.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]};m.getBestModeForData=function(t){return Tt.testNumeric(t)?m.NUMERIC:Tt.testAlphanumeric(t)?m.ALPHANUMERIC:Tt.testKanji(t)?m.KANJI:m.BYTE};m.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")};m.isValid=function(t){return t&&t.bit&&t.ccBits};function _n(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return m.NUMERIC;case"alphanumeric":return m.ALPHANUMERIC;case"kanji":return m.KANJI;case"byte":return m.BYTE;default:throw new Error("Unknown mode: "+n)}}m.from=function(t,e){if(m.isValid(t))return t;try{return _n(t)}catch{return e}}});var He=d(F=>{"use strict";var st=b(),kn=Et(),qe=tt(),P=R(),St=At(),ke=7973,_e=st.getBCHDigit(ke);function zn(n,t,e){for(let r=1;r<=40;r++)if(t<=F.getCapacity(r,e,n))return r}function ze(n,t){return P.getCharCountIndicator(n,t)+4}function Hn(n,t){let e=0;return n.forEach(function(r){let o=ze(r.mode,t);e+=o+r.getBitsLength()}),e}function Vn(n,t){for(let e=1;e<=40;e++)if(Hn(n,e)<=F.getCapacity(e,t,P.MIXED))return e}F.from=function(t,e){return St.isValid(t)?parseInt(t,10):e};F.getCapacity=function(t,e,r){if(!St.isValid(t))throw new Error("Invalid QR Code version");typeof r>"u"&&(r=P.BYTE);let o=st.getSymbolTotalCodewords(t),i=kn.getTotalCodewordsCount(t,e),s=(o-i)*8;if(r===P.MIXED)return s;let u=s-ze(r,t);switch(r){case P.NUMERIC:return Math.floor(u/10*3);case P.ALPHANUMERIC:return Math.floor(u/11*2);case P.KANJI:return Math.floor(u/13);case P.BYTE:default:return Math.floor(u/8)}};F.getBestVersionForData=function(t,e){let r,o=qe.from(e,qe.M);if(Array.isArray(t)){if(t.length>1)return Vn(t,o);if(t.length===0)return 1;r=t[0]}else r=t;return zn(r.mode,r.getLength(),o)};F.getEncodedBits=function(t){if(!St.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;st.getBCHDigit(e)-_e>=0;)e^=ke<<st.getBCHDigit(e)-_e;return t<<12|e}});var Je=d(ve=>{"use strict";var bt=b(),Ke=1335,Kn=21522,Ve=bt.getBCHDigit(Ke);ve.getEncodedBits=function(t,e){let r=t.bit<<3|e,o=r<<10;for(;bt.getBCHDigit(o)-Ve>=0;)o^=Ke<<bt.getBCHDigit(o)-Ve;return(r<<10|o)^Kn}});var Ye=d((Hr,Oe)=>{"use strict";var vn=R();function k(n){this.mode=vn.NUMERIC,this.data=n.toString()}k.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(t){let e,r,o;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),o=parseInt(r,10),t.put(o,10);let i=this.data.length-e;i>0&&(r=this.data.substr(e),o=parseInt(r,10),t.put(o,i*3+1))};Oe.exports=k});var Qe=d((Vr,je)=>{"use strict";var Jn=R(),Mt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function z(n){this.mode=Jn.ALPHANUMERIC,this.data=n}z.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=Mt.indexOf(this.data[e])*45;r+=Mt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Mt.indexOf(this.data[e]),6)};je.exports=z});var $e=d((Kr,Ge)=>{"use strict";Ge.exports=function(t){for(var e=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){e.push(i);continue}if(i<2048){e.push(i>>6|192),e.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){e.push(i>>12|224),e.push(i>>6&63|128),e.push(i&63|128);continue}if(i>=65536&&i<=1114111){e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(i&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}});var Ze=d((vr,We)=>{"use strict";var On=$e(),Yn=R();function H(n){this.mode=Yn.BYTE,typeof n=="string"&&(n=On(n)),this.data=new Uint8Array(n)}H.getBitsLength=function(t){return t*8};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};We.exports=H});var tn=d((Jr,Xe)=>{"use strict";var jn=R(),Qn=b();function V(n){this.mode=jn.KANJI,this.data=n}V.getBitsLength=function(t){return t*13};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=Qn.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};Xe.exports=V});var en=d((Or,Rt)=>{"use strict";var j={single_source_shortest_paths:function(n,t,e){var r={},o={};o[t]=0;var i=j.PriorityQueue.make();i.push(t,0);for(var s,u,a,c,l,p,h,E,T;!i.empty();){s=i.pop(),u=s.value,c=s.cost,l=n[u]||{};for(a in l)l.hasOwnProperty(a)&&(p=l[a],h=c+p,E=o[a],T=typeof o[a]>"u",(T||E>h)&&(o[a]=h,i.push(a,h),r[a]=u))}if(typeof e<"u"&&typeof o[e]>"u"){var S=["Could not find a path from ",t," to ",e,"."].join("");throw new Error(S)}return r},extract_shortest_path_from_predecessor_list:function(n,t){for(var e=[],r=t,o;r;)e.push(r),o=n[r],r=n[r];return e.reverse(),e},find_path:function(n,t,e){var r=j.single_source_shortest_paths(n,t,e);return j.extract_shortest_path_from_predecessor_list(r,e)},PriorityQueue:{make:function(n){var t=j.PriorityQueue,e={},r;n=n||{};for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e.queue=[],e.sorter=n.sorter||t.default_sorter,e},default_sorter:function(n,t){return n.cost-t.cost},push:function(n,t){var e={value:n,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof Rt<"u"&&(Rt.exports=j)});var ln=d(K=>{"use strict";var f=R(),on=Ye(),sn=Qe(),un=Ze(),an=tn(),Q=Nt(),ut=b(),Gn=en();function nn(n){return unescape(encodeURIComponent(n)).length}function G(n,t,e){let r=[],o;for(;(o=n.exec(e))!==null;)r.push({data:o[0],index:o.index,mode:t,length:o[0].length});return r}function cn(n){let t=G(Q.NUMERIC,f.NUMERIC,n),e=G(Q.ALPHANUMERIC,f.ALPHANUMERIC,n),r,o;return ut.isKanjiModeEnabled()?(r=G(Q.BYTE,f.BYTE,n),o=G(Q.KANJI,f.KANJI,n)):(r=G(Q.BYTE_KANJI,f.BYTE,n),o=[]),t.concat(e,r,o).sort(function(s,u){return s.index-u.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function Pt(n,t){switch(t){case f.NUMERIC:return on.getBitsLength(n);case f.ALPHANUMERIC:return sn.getBitsLength(n);case f.KANJI:return an.getBitsLength(n);case f.BYTE:return un.getBitsLength(n)}}function $n(n){return n.reduce(function(t,e){let r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function Wn(n){let t=[];for(let e=0;e<n.length;e++){let r=n[e];switch(r.mode){case f.NUMERIC:t.push([r,{data:r.data,mode:f.ALPHANUMERIC,length:r.length},{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.ALPHANUMERIC:t.push([r,{data:r.data,mode:f.BYTE,length:r.length}]);break;case f.KANJI:t.push([r,{data:r.data,mode:f.BYTE,length:nn(r.data)}]);break;case f.BYTE:t.push([{data:r.data,mode:f.BYTE,length:nn(r.data)}])}}return t}function Zn(n,t){let e={},r={start:{}},o=["start"];for(let i=0;i<n.length;i++){let s=n[i],u=[];for(let a=0;a<s.length;a++){let c=s[a],l=""+i+a;u.push(l),e[l]={node:c,lastCount:0},r[l]={};for(let p=0;p<o.length;p++){let h=o[p];e[h]&&e[h].node.mode===c.mode?(r[h][l]=Pt(e[h].lastCount+c.length,c.mode)-Pt(e[h].lastCount,c.mode),e[h].lastCount+=c.length):(e[h]&&(e[h].lastCount=c.length),r[h][l]=Pt(c.length,c.mode)+4+f.getCharCountIndicator(c.mode,t))}}o=u}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:e}}function rn(n,t){let e,r=f.getBestModeForData(n);if(e=f.from(t,r),e!==f.BYTE&&e.bit<r.bit)throw new Error('"'+n+'" cannot be encoded with mode '+f.toString(e)+`.
 Suggested mode is: `+f.toString(r));switch(e===f.KANJI&&!ut.isKanjiModeEnabled()&&(e=f.BYTE),e){case f.NUMERIC:return new on(n);case f.ALPHANUMERIC:return new sn(n);case f.KANJI:return new an(n);case f.BYTE:return new un(n)}}K.fromArray=function(t){return t.reduce(function(e,r){return typeof r=="string"?e.push(rn(r,null)):r.data&&e.push(rn(r.data,r.mode)),e},[])};K.fromString=function(t,e){let r=cn(t,ut.isKanjiModeEnabled()),o=Wn(r),i=Zn(o,e),s=Gn.find_path(i.map,"start","end"),u=[];for(let a=1;a<s.length-1;a++)u.push(i.table[s[a]].node);return K.fromArray($n(u))};K.rawSplit=function(t){return K.fromArray(cn(t,ut.isKanjiModeEnabled()))}});var dn=d(fn=>{"use strict";var ct=b(),xt=tt(),Xn=Ie(),tr=Ae(),er=Ne(),nr=be(),Ft=Me(),Ut=Et(),rr=De(),at=He(),or=Je(),ir=R(),Lt=ln();function sr(n,t){let e=n.size,r=nr.getPositions(t);for(let o=0;o<r.length;o++){let i=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(let a=-1;a<=7;a++)s+a<=-1||e<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?n.set(i+u,s+a,!0,!0):n.set(i+u,s+a,!1,!0))}}function ur(n){let t=n.size;for(let e=8;e<t-8;e++){let r=e%2===0;n.set(e,6,r,!0),n.set(6,e,r,!0)}}function ar(n,t){let e=er.getPositions(t);for(let r=0;r<e.length;r++){let o=e[r][0],i=e[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?n.set(o+s,i+u,!0,!0):n.set(o+s,i+u,!1,!0)}}function cr(n,t){let e=n.size,r=at.getEncodedBits(t),o,i,s;for(let u=0;u<18;u++)o=Math.floor(u/3),i=u%3+e-8-3,s=(r>>u&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function Dt(n,t,e){let r=n.size,o=or.getEncodedBits(t,e),i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function lr(n,t){let e=n.size,r=-1,o=e-1,i=7,s=0;for(let u=e-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!n.isReserved(o,u-a)){let c=!1;s<t.length&&(c=(t[s]>>>i&1)===1),n.set(o,u-a,c),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||e<=o){o-=r,r=-r;break}}}function fr(n,t,e){let r=new Xn;e.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),ir.getCharCountIndicator(a.mode,n)),a.write(r)});let o=ct.getSymbolTotalCodewords(n),i=Ut.getTotalCodewordsCount(n,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);let u=(s-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return dr(r,n,t)}function dr(n,t,e){let r=ct.getSymbolTotalCodewords(t),o=Ut.getTotalCodewordsCount(t,e),i=r-o,s=Ut.getBlocksCount(t,e),u=r%s,a=s-u,c=Math.floor(r/s),l=Math.floor(i/s),p=l+1,h=c-l,E=new rr(h),T=0,S=new Array(s),Vt=new Array(s),ft=0,Nn=new Uint8Array(n.buffer);for(let q=0;q<s;q++){let gt=q<a?l:p;S[q]=Nn.slice(T,T+gt),Vt[q]=E.encode(S[q]),T+=gt,ft=Math.max(ft,gt)}let dt=new Uint8Array(r),Kt=0,I,B;for(I=0;I<ft;I++)for(B=0;B<s;B++)I<S[B].length&&(dt[Kt++]=S[B][I]);for(I=0;I<h;I++)for(B=0;B<s;B++)dt[Kt++]=Vt[B][I];return dt}function gr(n,t,e,r){let o;if(Array.isArray(n))o=Lt.fromArray(n);else if(typeof n=="string"){let c=t;if(!c){let l=Lt.rawSplit(n);c=at.getBestVersionForData(l,e)}o=Lt.fromString(n,c||40)}else throw new Error("Invalid data");let i=at.getBestVersionForData(o,e);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);let s=fr(t,e,o),u=ct.getSymbolSize(t),a=new tr(u);return sr(a,t),ur(a),ar(a,t),Dt(a,e,0),t>=7&&cr(a,t),lr(a,s),isNaN(r)&&(r=Ft.getBestMask(a,Dt.bind(null,a,e))),Ft.applyMask(r,a),Dt(a,e,r),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:r,segments:o}}fn.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=xt.M,o,i;return typeof e<"u"&&(r=xt.from(e.errorCorrectionLevel,xt.M),o=at.from(e.version),i=Ft.from(e.maskPattern),e.toSJISFunc&&ct.setToSJISFunction(e.toSJISFunc)),gr(t,o,r,i)}});var qt=d(U=>{"use strict";function gn(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let t=n.slice().replace("#","").split("");if(t.length<3||t.length===5||t.length>8)throw new Error("Invalid hex color: "+n);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(r){return[r,r]}))),t.length===6&&t.push("F","F");let e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:e&255,hex:"#"+t.slice(0,6).join("")}}U.getOptions=function(t){t||(t={}),t.color||(t.color={});let e=typeof t.margin>"u"||t.margin===null||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:gn(t.color.dark||"#000000ff"),light:gn(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}};U.getScale=function(t,e){return e.width&&e.width>=t+e.margin*2?e.width/(t+e.margin*2):e.scale};U.getImageWidth=function(t,e){let r=U.getScale(t,e);return Math.floor((t+e.margin*2)*r)};U.qrToImageData=function(t,e,r){let o=e.modules.size,i=e.modules.data,s=U.getScale(o,r),u=Math.floor((o+r.margin*2)*s),a=r.margin*s,c=[r.color.light,r.color.dark];for(let l=0;l<u;l++)for(let p=0;p<u;p++){let h=(l*u+p)*4,E=r.color.light;if(l>=a&&p>=a&&l<u-a&&p<u-a){let T=Math.floor((l-a)/s),S=Math.floor((p-a)/s);E=c[i[T*o+S]?1:0]}t[h++]=E.r,t[h++]=E.g,t[h++]=E.b,t[h]=E.a}}});var hn=d(lt=>{"use strict";var _t=qt();function hr(n,t,e){n.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=e,t.width=e,t.style.height=e+"px",t.style.width=e+"px"}function mr(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}lt.render=function(t,e,r){let o=r,i=e;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),e||(i=mr()),o=_t.getOptions(o);let s=_t.getImageWidth(t.modules.size,o),u=i.getContext("2d"),a=u.createImageData(s,s);return _t.qrToImageData(a.data,t,o),hr(u,i,s),u.putImageData(a,0,0),i};lt.renderToDataURL=function(t,e,r){let o=r;typeof o>"u"&&(!e||!e.getContext)&&(o=e,e=void 0),o||(o={});let i=lt.render(t,e,o),s=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(s,u.quality)}});var wn=d(pn=>{"use strict";var pr=qt();function mn(n,t){let e=n.a/255,r=t+'="'+n.hex+'"';return e<1?r+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function kt(n,t,e){let r=n+t;return typeof e<"u"&&(r+=" "+e),r}function wr(n,t,e){let r="",o=0,i=!1,s=0;for(let u=0;u<n.length;u++){let a=Math.floor(u%t),c=Math.floor(u/t);!a&&!i&&(i=!0),n[u]?(s++,u>0&&a>0&&n[u-1]||(r+=i?kt("M",a+e,.5+c+e):kt("m",o,0),o=0,i=!1),a+1<t&&n[u+1]||(r+=kt("h",s),s=0)):o++}return r}pn.render=function(t,e,r){let o=pr.getOptions(e),i=t.modules.size,s=t.modules.data,u=i+o.margin*2,a=o.color.light.a?"<path "+mn(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",c="<path "+mn(o.color.dark,"stroke")+' d="'+wr(s,i,o.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,h),h}});var Cn=d($=>{"use strict";var yr=ye(),zt=dn(),yn=hn(),Cr=wn();function Ht(n,t,e,r,o){let i=[].slice.call(arguments,1),s=i.length,u=typeof i[s-1]=="function";if(!u&&!yr())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=r=void 0):s===2&&!t.getContext&&(r=e,e=t,t=void 0),new Promise(function(a,c){try{let l=zt.create(e,r);a(n(l,t,r))}catch(l){c(l)}})}try{let a=zt.create(e,r);o(null,n(a,t,r))}catch(a){o(a)}}$.create=zt.create;$.toCanvas=Ht.bind(null,yn.render);$.toDataURL=Ht.bind(null,yn.renderToDataURL);$.toString=Ht.bind(null,function(n,t,e){return Cr.render(n,e)})});var In=Tn(Cn());function Er(n,t){if(n&1&&mt(0,"img",6),n&2){let e=Yt();_("src",e.qrDataURL,Ot)}}function Ir(n,t){if(n&1&&(y(0,"ion-item")(1,"ion-thumbnail",7),mt(2,"img",8),C(),y(3,"div",9)(4,"ion-label"),A(5),C(),y(6,"ion-card-subtitle"),A(7),C()(),y(8,"ion-button",10),A(9,"Ver asistencia "),C()()),n&2){let e=t.$implicit;x(5),jt(e.nombre),x(2),pt("RUT: ",e.rut,"")}}var Bn=(()=>{let t=class t{constructor(r,o,i){this.apiService=r,this.router=o,this.activeroute=i,this.alumnosl=[],this.profesorId=0,this.qrDataURL="",this.activeroute.queryParams.subscribe(s=>{var u,a,c,l,p;(u=this.router.getCurrentNavigation())!=null&&u.extras.state&&(this.profesorId=(c=(a=this.router.getCurrentNavigation())==null?void 0:a.extras.state)==null?void 0:c.idProfesor,this.cursoId=(p=(l=this.router.getCurrentNavigation())==null?void 0:l.extras.state)==null?void 0:p.idCurso)})}generateQRCode(){return vt(this,null,function*(){if(this.cursol){let r=new Date().toISOString().split("T")[0],o=`${this.cursol.codigo}-${this.cursol.seccion}-${r}`;try{this.qrDataURL=yield In.default.toString(o,{type:"svg"})}catch(i){console.error(i)}}})}ngOnInit(){this.apiService.obtenerCursosPorProfesor(this.profesorId).subscribe(r=>{this.cursol=r.find(o=>o.id===this.cursoId),this.alumnosl=this.cursol?this.cursol.alumnos:[],this.generateQRCode()},r=>{console.error("Error obteniendo cursos:",r)})}};t.\u0275fac=function(o){return new(o||t)(X(pe),X(Zt),X(Wt))},t.\u0275cmp=Jt({type:t,selectors:[["app-qr"]],decls:22,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["alt","",3,"src",4,"ngIf"],[4,"ngFor","ngForOf"],["alt","",3,"src"],["slot","start"],["alt","Silhouette of mountains","src","https://ionicframework.com/docs/img/demos/thumbnail.svg"],[2,"flex-grow","1"],["fill","solid","shape","round","color","secondary"]],template:function(o,i){o&1&&(y(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),A(3,"Registrar Asistencia"),C()()(),y(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),A(8,"Registrar Asistencia"),C()()(),y(9,"ion-card"),ht(10,Er,1,1,"img",4),y(11,"ion-card-header")(12,"ion-card-title"),A(13,"Escanear para registrar asistencia"),C(),y(14,"ion-card-subtitle"),A(15),C()(),y(16,"ion-card-content")(17,"ion-list")(18,"ion-list-header")(19,"ion-label"),A(20," Listado de Alumnos: "),C()(),ht(21,Ir,10,2,"ion-item",5),C()()()()),o&2&&(_("translucent",!0),x(4),_("fullscreen",!0),x(6),_("ngIf",i.qrDataURL),x(5),pt("Asignatura: ",i.cursol==null?null:i.cursol.nombre,""),x(6),_("ngForOf",i.alumnosl))},dependencies:[Qt,Gt,te,ee,ne,re,oe,ie,se,ue,ae,ce,le,fe,de,ge,he]});let n=t;return n})();var Br=[{path:"",component:Bn}],An=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=Z({type:t}),t.\u0275inj=W({imports:[wt.forChild(Br),wt]});let n=t;return n})();var ho=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=Z({type:t}),t.\u0275inj=W({imports:[$t,Xt,me,An]});let n=t;return n})();export{ho as QrPageModule};

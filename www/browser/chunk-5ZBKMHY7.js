import{F as I,H as C,K as f,V as M,aa as j,b as s,d as v,e as m,ga as E,i as d,j as p,ja as N,k as u,m as n,n as r,q as b,ra as R,s as o,sa as F,u as x,xa as S,z as y}from"./chunk-NUXSCCIY.js";import"./chunk-G7XXDTQ5.js";import"./chunk-5T54POBR.js";import"./chunk-AHYTFRZN.js";import"./chunk-4PGTP63H.js";import"./chunk-HC6MZPB3.js";import"./chunk-NBBNAC2E.js";import"./chunk-O3H6XU3T.js";import"./chunk-GLBLXQ6N.js";import"./chunk-PPEBARQN.js";import"./chunk-TAHDAPYO.js";import"./chunk-5U2FUULQ.js";import"./chunk-SLNPOJBS.js";import"./chunk-7XJAICMY.js";import"./chunk-MCRJI3T3.js";import"./chunk-AFC5P2X6.js";import"./chunk-YHLQW4KP.js";import"./chunk-MM5QLNJM.js";import"./chunk-72ZMTLHO.js";import"./chunk-2EOHHFOF.js";import"./chunk-JXIEZMHN.js";import"./chunk-JTSJSQ6Q.js";import"./chunk-MIURFOFH.js";var P=(()=>{let t=class t{constructor(a,i){this.activatedRoute=a,this.router=i,this.nombre="",this.activatedRoute.queryParams.subscribe(c=>{var l,h,g;(l=this.router.getCurrentNavigation())!=null&&l.extras.state&&(this.nombre=(g=(h=this.router.getCurrentNavigation())==null?void 0:h.extras.state)==null?void 0:g.nombre)})}navegarACamara(){this.router.navigate(["/camera"],{state:{nombre:this.nombre}})}};t.\u0275fac=function(i){return new(i||t)(p(I),p(C))},t.\u0275cmp=v({type:t,selectors:[["app-perfil-alumno"]],decls:16,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"ion-padding"],[1,"ion-text-center"],["shape","round","color","dark",1,"ion-padding",3,"click"]],template:function(i,c){i&1&&(n(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o(3,"Perfil de alumno"),r()()(),n(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),o(8,"Perfil de alumno"),r()()(),n(9,"div",4),o(10),r(),n(11,"h6",4),o(12,"Escanea el c\xF3digo QR para registrar tu asistencia"),r(),n(13,"div",5)(14,"ion-button",6),b("click",function(){return c.navegarACamara()}),o(15,"Escanear QR"),r()()()),i&2&&(u("translucent",!0),d(4),u("fullscreen",!0),d(6),x("Bienvenido a tu perfil, ",c.nombre,"."))},dependencies:[j,E,N,R,F],styles:[".ion-text-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]});let e=t;return e})();var w=[{path:"",component:P}],T=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=s({imports:[f.forChild(w),f]});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=s({imports:[y,M,S,T]});let e=t;return e})();export{U as PerfilAlumnoPageModule};
import{c as Y}from"./chunk-5RNJSWJU.js";import{b as J}from"./chunk-IIKFY65W.js";import{F as y,H as R,K as v,V as U,Z as z,b as f,d as w,e as h,ga as T,ha as j,i as a,ia as W,j as l,ja as M,k as c,ka as F,l as x,la as K,m,ma as Q,n as s,na as q,o as b,oa as S,q as _,ra as H,s as d,sa as X,t as P,va as Z,x as L,xa as $,z as k}from"./chunk-NUXSCCIY.js";import"./chunk-G7XXDTQ5.js";import"./chunk-5T54POBR.js";import"./chunk-AHYTFRZN.js";import"./chunk-4PGTP63H.js";import"./chunk-HC6MZPB3.js";import"./chunk-NBBNAC2E.js";import"./chunk-O3H6XU3T.js";import"./chunk-GLBLXQ6N.js";import"./chunk-PPEBARQN.js";import"./chunk-TAHDAPYO.js";import"./chunk-5U2FUULQ.js";import"./chunk-SLNPOJBS.js";import"./chunk-7XJAICMY.js";import"./chunk-MCRJI3T3.js";import"./chunk-AFC5P2X6.js";import"./chunk-YHLQW4KP.js";import"./chunk-MM5QLNJM.js";import"./chunk-72ZMTLHO.js";import"./chunk-2EOHHFOF.js";import"./chunk-JXIEZMHN.js";import"./chunk-JTSJSQ6Q.js";import{f as o}from"./chunk-MIURFOFH.js";var A=function(e){return e.Aztec="AZTEC",e.Codabar="CODABAR",e.Code39="CODE_39",e.Code93="CODE_93",e.Code128="CODE_128",e.DataMatrix="DATA_MATRIX",e.Ean8="EAN_8",e.Ean13="EAN_13",e.Itf="ITF",e.Pdf417="PDF_417",e.QrCode="QR_CODE",e.UpcA="UPC_A",e.UpcE="UPC_E",e}(A||{});var p=Y("BarcodeScanner",{web:()=>import("./chunk-NEAZISU7.js").then(e=>new e.BarcodeScannerWeb)});function ee(e,t){if(e&1&&(m(0,"ion-item")(1,"ion-label",8),d(2),s(),b(3,"ion-input",9),s()),e&2){let C=t.$implicit;a(2),P(C.format),a(1),c("value",C.rawValue)}}var V=(()=>{let t=class t{constructor(i,r,n,u){this.alertController=i,this.activeroute=r,this.router=n,this.apiService=u,this.nombre="",this.boton=["Cerrar Sesi\xF3n"],this.isSupported=!1,this.barcodes=[],this.activeroute.queryParams.subscribe(E=>{var N,g,O,D,I;(N=this.router.getCurrentNavigation())!=null&&N.extras.state&&(this.userHome=(O=(g=this.router.getCurrentNavigation())==null?void 0:g.extras.state)==null?void 0:O.user,this.idAlumno=(I=(D=this.router.getCurrentNavigation())==null?void 0:D.extras.state)==null?void 0:I.id)})}ngOnInit(){p.isSupported().then(i=>{this.isSupported=i.supported})}scan(){return o(this,null,function*(){if(!(yield this.requestPermissions())){this.presentAlert();return}let r=yield this.CheckGoogleBSModuleAvailable(),{barcodes:n}=yield p.scan({formats:[A.QrCode]});this.aperturaAlert(),n.length>0?(this.capturaAlert(),this.barcodes.push(...n)):this.errorAlert()})}requestPermissions(){return o(this,null,function*(){let{camera:i}=yield p.requestPermissions();return i==="granted"||i==="limited"})}CheckGoogleBSModuleAvailable(){return o(this,null,function*(){(yield p.isGoogleBarcodeScannerModuleAvailable()).available?this.availableAlert():this.noAvailableAlert()})}noAvailableAlert(){throw new Error("Method not implemented.")}availableAlert(){throw new MessageEvent("Method implemented.")}presentAlert(){return o(this,null,function*(){yield(yield this.alertController.create({header:"Permiso de C\xE1mara",message:"Se necesita acceso a la c\xE1mara para escanear c\xF3digos QR. Por favor, habilite el acceso a la c\xE1mara en la configuraci\xF3n de su dispositivo.",buttons:["OK"]})).present()})}aperturaAlert(){return o(this,null,function*(){yield(yield this.alertController.create({header:"Apertura de escaner exitosa",message:"Se abri\xF3 el escaner .",buttons:["OK"]})).present()})}capturaAlert(){return o(this,null,function*(){yield(yield this.alertController.create({header:"Escaneo exitoso",message:"Se almacen\xF3 exitosamente el QR en el array.",buttons:["OK"]})).present()})}errorAlert(){return o(this,null,function*(){yield(yield this.alertController.create({header:"Escaneo Fallido",message:"El escaneo no se pudo realizar.",buttons:["OK"]})).present()})}registrarAsistencia(i,r,n){let u={alumno_id:this.idAlumno,codigo:i,seccion:r,fecha:n};this.apiService.registrarAsistencia(u).subscribe(E=>{console.log(E)})}};t.\u0275fac=function(r){return new(r||t)(l(Z),l(y),l(R),l(J))},t.\u0275cmp=w({type:t,selectors:[["app-camera"]],decls:14,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],[3,"disabled","click"],["name","scan"],["position","stacked"],["type","text",3,"value"]],template:function(r,n){r&1&&(m(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),d(3,"Escanear QR"),s()()(),m(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),d(8,"Escanear QR"),s()()(),m(9,"ion-list"),x(10,ee,4,2,"ion-item",4),s(),m(11,"ion-fab",5)(12,"ion-fab-button",6),_("click",function(){return n.scan()}),b(13,"ion-icon",7),s()()()),r&2&&(c("translucent",!0),a(4),c("fullscreen",!0),a(6),c("ngForOf",n.barcodes),a(2),c("disabled",!n.isSupported))},dependencies:[L,T,j,W,M,F,K,Q,q,S,H,X,z],styles:[".image-container[_ngcontent-%COMP%]{background:url(https://d347bo4ltvvnaz.cloudfront.net/images/preview/Fuse_LifeOnMission_MarketingAssets_Social-Overlay_Transparent_3_preview.jpg) no-repeat center center fixed;position:relative;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:contain;background-position:center;height:100vh;width:auto;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10vh}.overlay-button[_ngcontent-%COMP%]{position:relative;size:auto;margin:10 auto;display:flex}"]});let e=t;return e})();var te=[{path:"",component:V}],B=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h({type:t}),t.\u0275inj=f({imports:[v.forChild(te),v]});let e=t;return e})();var ge=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h({type:t}),t.\u0275inj=f({imports:[k,U,$,B]});let e=t;return e})();export{ge as CameraPageModule};
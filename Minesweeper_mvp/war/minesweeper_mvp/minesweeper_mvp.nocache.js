function minesweeper_mvp(){var T='',Bb='" for "gwt:onLoadErrorFn"',zb='" for "gwt:onPropertyErrorFn"',mb='"><\/script>',bb='#',Zb='.cache.html',db='/',pb='//',Vb='0EDD5316B67480928EAEFE725E9AD07A',Yb=':',Wb=':1',tb='::',_b='<script defer="defer">minesweeper_mvp.onInjectionDone(\'minesweeper_mvp\')<\/script>',lb='<script id="',wb='=',cb='?',yb='Bad handler "',Xb='C8F292398D73A623091B26398C9B1AD3',$b='DOMContentLoaded',nb='SCRIPT',kb='__gwt_marker_minesweeper_mvp',Kb='android',ob='base',gb='baseUrl',X='begin',Ob='blackberry',W='bootstrap',fb='clear.cache.gif',vb='content',ab='end',Pb='file://',Y='gwt.codesvr=',Z='gwt.hosted=',$='gwt.hybrid',Ab='gwt:onLoadErrorFn',xb='gwt:onPropertyErrorFn',ub='gwt:property',Tb='hosted.html?minesweeper_mvp',Cb='iframe',eb='img',Lb='ipad',Nb='iphone',Mb='ipod',Db="javascript:''",Sb='loadExternalRefs',qb='meta',U='minesweeper_mvp',ib='minesweeper_mvp.nocache.js',sb='minesweeper_mvp::',Gb='mobile.user.agent',Hb='mobilesafari',Fb='moduleRequested',_='moduleStartup',rb='name',Rb='no',Ib='not_mobile',Jb='phonegap.env',Eb='position:absolute;width:0;height:0;border:none',hb='script',Ub='selectingPermutation',V='startup',jb='undefined',Qb='yes';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=T,u={},v=[],w=[],A=[],B=0,C,D;o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:X});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function F(){var b=false;try{var c=m.location.search;return (c.indexOf(Y)!=-1||(c.indexOf(Z)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf($)==-1}catch(a){}F=function(){return b};return b}
function G(){if(q&&r){var b=n.getElementById(U);var c=b.contentWindow;if(F()){c.__gwt_getProperty=function(a){return L(a)}}minesweeper_mvp=null;c.gwtOnLoad(C,U,t,B);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:_,millis:(new Date).getTime(),type:ab})}}
function H(){function e(a){var b=a.lastIndexOf(bb);if(b==-1){b=a.length}var c=a.indexOf(cb);if(c==-1){c=a.length}var d=a.lastIndexOf(db,Math.min(c,b));return d>=0?a.substring(0,d+1):T}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(eb);b.src=a+fb;a=e(b.src)}return a}
function g(){var a=J(gb);if(a!=null){return a}return T}
function h(){var a=n.getElementsByTagName(hb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(ib)!=-1){return e(a[b].src)}}return T}
function i(){var a;if(typeof isBodyLoaded==jb||!isBodyLoaded()){var b=kb;var c;n.write(lb+b+mb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=nb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return T}
function j(){var a=n.getElementsByTagName(ob);if(a.length>0){return a[a.length-1].href}return T}
function k(){var a=n.location;return a.href==a.protocol+pb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==T){l=h()}if(l==T){l=i()}if(l==T){l=j()}if(l==T&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function I(){var b=document.getElementsByTagName(qb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(rb),g;if(f){f=f.replace(sb,T);if(f.indexOf(tb)>=0){continue}if(f==ub){g=e.getAttribute(vb);if(g){var h,i=g.indexOf(wb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=T}u[f]=h}}else if(f==xb){g=e.getAttribute(vb);if(g){try{D=eval(g)}catch(a){alert(yb+g+zb)}}}else if(f==Ab){g=e.getAttribute(vb);if(g){try{C=eval(g)}catch(a){alert(yb+g+Bb)}}}}}}
function J(a){var b=u[a];return b==null?null:b}
function K(a,b){var c=A;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function L(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(D){D(a,d,b)}throw null}
var M;function N(){if(!M){M=true;var a=n.createElement(Cb);a.src=Db;a.id=U;a.style.cssText=Eb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:_,millis:(new Date).getTime(),type:Fb});a.contentWindow.location.replace(t+P)}}
w[Gb]=function(){return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent)?Hb:Ib};v[Gb]={mobilesafari:0,not_mobile:1};w[Jb]=function(){{var a=window.navigator.userAgent.toLowerCase();if(a.indexOf(Kb)!=-1||(a.indexOf(Lb)!=-1||(a.indexOf(Mb)!=-1||(a.indexOf(Nb)!=-1||a.indexOf(Ob)!=-1)))){var b=document.location.href;if(b.indexOf(Pb)===0){return Qb}}return Rb}};v[Jb]={no:0,yes:1};minesweeper_mvp.onScriptLoad=function(){if(M){r=true;G()}};minesweeper_mvp.onInjectionDone=function(){q=true;o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:Sb,millis:(new Date).getTime(),type:ab});G()};I();H();var O;var P;if(F()){if(m.external&&(m.external.initModule&&m.external.initModule(U))){m.location.reload();return}P=Tb;O=T}o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:Ub});if(!F()){try{K([Hb,Rb],Vb);K([Hb,Qb],Vb);K([Hb,Rb],Vb+Wb);K([Hb,Qb],Vb+Wb);K([Ib,Rb],Xb);K([Ib,Qb],Xb);K([Ib,Rb],Xb+Wb);K([Ib,Qb],Xb+Wb);O=A[L(Gb)][L(Jb)];var Q=O.indexOf(Yb);if(Q!=-1){B=Number(O.substring(Q+1));O=O.substring(0,Q)}P=O+Zb}catch(a){return}}var R;function S(){if(!s){s=true;G();if(n.removeEventListener){n.removeEventListener($b,S,false)}if(R){clearInterval(R)}}}
if(n.addEventListener){n.addEventListener($b,function(){N();S()},false)}var R=setInterval(function(){if(/loaded|complete/.test(n.readyState)){N();S()}},50);o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:W,millis:(new Date).getTime(),type:ab});o&&o({moduleName:U,sessionId:p,subSystem:V,evtGroup:Sb,millis:(new Date).getTime(),type:X});n.write(_b)}
minesweeper_mvp();
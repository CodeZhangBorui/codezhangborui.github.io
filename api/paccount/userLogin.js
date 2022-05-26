/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2018
 * @license MIT
 */
!function(){"use strict";function h(h,t){t?(p[0]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=p[16]=p[17]=p[18]=p[19]=p[20]=p[21]=p[22]=p[23]=p[24]=p[25]=p[26]=p[27]=p[28]=p[29]=p[30]=p[31]=p[32]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],384==h?(this.h0h=3418070365,this.h0l=3238371032,this.h1h=1654270250,this.h1l=914150663,this.h2h=2438529370,this.h2l=812702999,this.h3h=355462360,this.h3l=4144912697,this.h4h=1731405415,this.h4l=4290775857,this.h5h=2394180231,this.h5l=1750603025,this.h6h=3675008525,this.h6l=1694076839,this.h7h=1203062813,this.h7l=3204075428):256==h?(this.h0h=573645204,this.h0l=4230739756,this.h1h=2673172387,this.h1l=3360449730,this.h2h=596883563,this.h2l=1867755857,this.h3h=2520282905,this.h3l=1497426621,this.h4h=2519219938,this.h4l=2827943907,this.h5h=3193839141,this.h5l=1401305490,this.h6h=721525244,this.h6l=746961066,this.h7h=246885852,this.h7l=2177182882):224==h?(this.h0h=2352822216,this.h0l=424955298,this.h1h=1944164710,this.h1l=2312950998,this.h2h=502970286,this.h2l=855612546,this.h3h=1738396948,this.h3l=1479516111,this.h4h=258812777,this.h4l=2077511080,this.h5h=2011393907,this.h5l=79989058,this.h6h=1067287976,this.h6l=1780299464,this.h7h=286451373,this.h7l=2446758561):(this.h0h=1779033703,this.h0l=4089235720,this.h1h=3144134277,this.h1l=2227873595,this.h2h=1013904242,this.h2l=4271175723,this.h3h=2773480762,this.h3l=1595750129,this.h4h=1359893119,this.h4l=2917565137,this.h5h=2600822924,this.h5l=725511199,this.h6h=528734635,this.h6l=4215389547,this.h7h=1541459225,this.h7l=327033209),this.bits=h,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1}function t(t,s,e){var r,n=typeof t;if("string"!==n){if("object"!==n)throw new Error(i);if(null===t)throw new Error(i);if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw new Error(i);r=!0}var o=t.length;if(!r){for(var l,f=[],c=(o=t.length,0),u=0;u<o;++u)(l=t.charCodeAt(u))<128?f[c++]=l:l<2048?(f[c++]=192|l>>6,f[c++]=128|63&l):l<55296||l>=57344?(f[c++]=224|l>>12,f[c++]=128|l>>6&63,f[c++]=128|63&l):(l=65536+((1023&l)<<10|1023&t.charCodeAt(++u)),f[c++]=240|l>>18,f[c++]=128|l>>12&63,f[c++]=128|l>>6&63,f[c++]=128|63&l);t=f}t.length>128&&(t=new h(s,!0).update(t).array());var y=[],p=[];for(u=0;u<128;++u){var d=t[u]||0;y[u]=92^d,p[u]=54^d}h.call(this,s,e),this.update(p),this.oKeyPad=y,this.inner=!0,this.sharedMemory=e}var i="input is invalid type",s="object"==typeof window,e=s?window:{};e.JS_SHA512_NO_WINDOW&&(s=!1);var r=!s&&"object"==typeof self;!e.JS_SHA512_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?e=global:r&&(e=self);var n=!e.JS_SHA512_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,a=!e.JS_SHA512_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,l="0123456789abcdef".split(""),f=[-2147483648,8388608,32768,128],c=[24,16,8,0],u=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],y=["hex","array","digest","arrayBuffer"],p=[];!e.JS_SHA512_NO_NODE_JS&&Array.isArray||(Array.isArray=function(h){return"[object Array]"===Object.prototype.toString.call(h)}),!a||!e.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(h){return"object"==typeof h&&h.buffer&&h.buffer.constructor===ArrayBuffer});var d=function(t,i){return function(s){return new h(i,!0).update(s)[t]()}},b=function(t){var i=d("hex",t);i.create=function(){return new h(t)},i.update=function(h){return i.create().update(h)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=d(e,t)}return i},w=function(h,i){return function(s,e){return new t(s,i,!0).update(e)[h]()}},A=function(h){var i=w("hex",h);i.create=function(i){return new t(i,h)},i.update=function(h,t){return i.create(h).update(t)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=w(e,h)}return i};h.prototype.update=function(h){if(this.finalized)throw new Error("finalize already called");var t,s=typeof h;if("string"!==s){if("object"!==s)throw new Error(i);if(null===h)throw new Error(i);if(a&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!(Array.isArray(h)||a&&ArrayBuffer.isView(h)))throw new Error(i);t=!0}for(var e,r,n=0,o=h.length,l=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,l[0]=this.block,l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=l[16]=l[17]=l[18]=l[19]=l[20]=l[21]=l[22]=l[23]=l[24]=l[25]=l[26]=l[27]=l[28]=l[29]=l[30]=l[31]=l[32]=0),t)for(r=this.start;n<o&&r<128;++n)l[r>>2]|=h[n]<<c[3&r++];else for(r=this.start;n<o&&r<128;++n)(e=h.charCodeAt(n))<128?l[r>>2]|=e<<c[3&r++]:e<2048?(l[r>>2]|=(192|e>>6)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]):e<55296||e>=57344?(l[r>>2]|=(224|e>>12)<<c[3&r++],l[r>>2]|=(128|e>>6&63)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]):(e=65536+((1023&e)<<10|1023&h.charCodeAt(++n)),l[r>>2]|=(240|e>>18)<<c[3&r++],l[r>>2]|=(128|e>>12&63)<<c[3&r++],l[r>>2]|=(128|e>>6&63)<<c[3&r++],l[r>>2]|=(128|63&e)<<c[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=128?(this.block=l[32],this.start=r-128,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var h=this.blocks,t=this.lastByteIndex;h[32]=this.block,h[t>>2]|=f[3&t],this.block=h[32],t>=112&&(this.hashed||this.hash(),h[0]=this.block,h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=h[16]=h[17]=h[18]=h[19]=h[20]=h[21]=h[22]=h[23]=h[24]=h[25]=h[26]=h[27]=h[28]=h[29]=h[30]=h[31]=h[32]=0),h[30]=this.hBytes<<3|this.bytes>>>29,h[31]=this.bytes<<3,this.hash()}},h.prototype.hash=function(){var h,t,i,s,e,r,n,o,a,l,f,c,y,p,d,b,w,A,_,v,B,U,S,g,k,z=this.h0h,E=this.h0l,O=this.h1h,m=this.h1l,x=this.h2h,N=this.h2l,j=this.h3h,J=this.h3l,H=this.h4h,I=this.h4l,R=this.h5h,V=this.h5l,C=this.h6h,K=this.h6l,P=this.h7h,D=this.h7l,F=this.blocks;for(h=32;h<160;h+=2)t=((v=F[h-30])>>>1|(B=F[h-29])<<31)^(v>>>8|B<<24)^v>>>7,i=(B>>>1|v<<31)^(B>>>8|v<<24)^(B>>>7|v<<25),s=((v=F[h-4])>>>19|(B=F[h-3])<<13)^(B>>>29|v<<3)^v>>>6,e=(B>>>19|v<<13)^(v>>>29|B<<3)^(B>>>6|v<<26),v=F[h-32],B=F[h-31],a=((U=F[h-14])>>>16)+(v>>>16)+(t>>>16)+(s>>>16)+((o=(65535&U)+(65535&v)+(65535&t)+(65535&s)+((n=((S=F[h-13])>>>16)+(B>>>16)+(i>>>16)+(e>>>16)+((r=(65535&S)+(65535&B)+(65535&i)+(65535&e))>>>16))>>>16))>>>16),F[h]=a<<16|65535&o,F[h+1]=n<<16|65535&r;var M=z,T=E,W=O,Y=m,q=x,G=N,L=j,Q=J,X=H,Z=I,$=R,hh=V,th=C,ih=K,sh=P,eh=D;for(b=W&q,w=Y&G,h=0;h<160;h+=8)t=(M>>>28|T<<4)^(T>>>2|M<<30)^(T>>>7|M<<25),i=(T>>>28|M<<4)^(M>>>2|T<<30)^(M>>>7|T<<25),s=(X>>>14|Z<<18)^(X>>>18|Z<<14)^(Z>>>9|X<<23),e=(Z>>>14|X<<18)^(Z>>>18|X<<14)^(X>>>9|Z<<23),A=(l=M&W)^M&q^b,_=(f=T&Y)^T&G^w,g=X&$^~X&th,k=Z&hh^~Z&ih,v=F[h],B=F[h+1],v=(a=((U=u[h])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(sh>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&sh)+((n=((S=u[h+1])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(eh>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&eh))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,sh=(a=(L>>>16)+(v>>>16)+((o=(65535&L)+(65535&v)+((n=(Q>>>16)+(B>>>16)+((r=(65535&Q)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,eh=n<<16|65535&r,t=((L=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Q=n<<16|65535&r)<<4)^(Q>>>2|L<<30)^(Q>>>7|L<<25),i=(Q>>>28|L<<4)^(L>>>2|Q<<30)^(L>>>7|Q<<25),s=(sh>>>14|eh<<18)^(sh>>>18|eh<<14)^(eh>>>9|sh<<23),e=(eh>>>14|sh<<18)^(eh>>>18|sh<<14)^(sh>>>9|eh<<23),A=(c=L&M)^L&W^l,_=(y=Q&T)^Q&Y^f,g=sh&X^~sh&$,k=eh&Z^~eh&hh,v=F[h+2],B=F[h+3],v=(a=((U=u[h+2])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(th>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&th)+((n=((S=u[h+3])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(ih>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&ih))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,th=(a=(q>>>16)+(v>>>16)+((o=(65535&q)+(65535&v)+((n=(G>>>16)+(B>>>16)+((r=(65535&G)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,ih=n<<16|65535&r,t=((q=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(G=n<<16|65535&r)<<4)^(G>>>2|q<<30)^(G>>>7|q<<25),i=(G>>>28|q<<4)^(q>>>2|G<<30)^(q>>>7|G<<25),s=(th>>>14|ih<<18)^(th>>>18|ih<<14)^(ih>>>9|th<<23),e=(ih>>>14|th<<18)^(ih>>>18|th<<14)^(th>>>9|ih<<23),A=(p=q&L)^q&M^c,_=(d=G&Q)^G&T^y,g=th&sh^~th&X,k=ih&eh^~ih&Z,v=F[h+4],B=F[h+5],v=(a=((U=u[h+4])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+($>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&$)+((n=((S=u[h+5])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(hh>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&hh))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,$=(a=(W>>>16)+(v>>>16)+((o=(65535&W)+(65535&v)+((n=(Y>>>16)+(B>>>16)+((r=(65535&Y)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,hh=n<<16|65535&r,t=((W=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Y=n<<16|65535&r)<<4)^(Y>>>2|W<<30)^(Y>>>7|W<<25),i=(Y>>>28|W<<4)^(W>>>2|Y<<30)^(W>>>7|Y<<25),s=($>>>14|hh<<18)^($>>>18|hh<<14)^(hh>>>9|$<<23),e=(hh>>>14|$<<18)^(hh>>>18|$<<14)^($>>>9|hh<<23),A=(b=W&q)^W&L^p,_=(w=Y&G)^Y&Q^d,g=$&th^~$&sh,k=hh&ih^~hh&eh,v=F[h+6],B=F[h+7],v=(a=((U=u[h+6])>>>16)+(v>>>16)+(g>>>16)+(s>>>16)+(X>>>16)+((o=(65535&U)+(65535&v)+(65535&g)+(65535&s)+(65535&X)+((n=((S=u[h+7])>>>16)+(B>>>16)+(k>>>16)+(e>>>16)+(Z>>>16)+((r=(65535&S)+(65535&B)+(65535&k)+(65535&e)+(65535&Z))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,U=(a=(A>>>16)+(t>>>16)+((o=(65535&A)+(65535&t)+((n=(_>>>16)+(i>>>16)+((r=(65535&_)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,S=n<<16|65535&r,X=(a=(M>>>16)+(v>>>16)+((o=(65535&M)+(65535&v)+((n=(T>>>16)+(B>>>16)+((r=(65535&T)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,Z=n<<16|65535&r,M=(a=(U>>>16)+(v>>>16)+((o=(65535&U)+(65535&v)+((n=(S>>>16)+(B>>>16)+((r=(65535&S)+(65535&B))>>>16))>>>16))>>>16))<<16|65535&o,T=n<<16|65535&r;a=(z>>>16)+(M>>>16)+((o=(65535&z)+(65535&M)+((n=(E>>>16)+(T>>>16)+((r=(65535&E)+(65535&T))>>>16))>>>16))>>>16),this.h0h=a<<16|65535&o,this.h0l=n<<16|65535&r,a=(O>>>16)+(W>>>16)+((o=(65535&O)+(65535&W)+((n=(m>>>16)+(Y>>>16)+((r=(65535&m)+(65535&Y))>>>16))>>>16))>>>16),this.h1h=a<<16|65535&o,this.h1l=n<<16|65535&r,a=(x>>>16)+(q>>>16)+((o=(65535&x)+(65535&q)+((n=(N>>>16)+(G>>>16)+((r=(65535&N)+(65535&G))>>>16))>>>16))>>>16),this.h2h=a<<16|65535&o,this.h2l=n<<16|65535&r,a=(j>>>16)+(L>>>16)+((o=(65535&j)+(65535&L)+((n=(J>>>16)+(Q>>>16)+((r=(65535&J)+(65535&Q))>>>16))>>>16))>>>16),this.h3h=a<<16|65535&o,this.h3l=n<<16|65535&r,a=(H>>>16)+(X>>>16)+((o=(65535&H)+(65535&X)+((n=(I>>>16)+(Z>>>16)+((r=(65535&I)+(65535&Z))>>>16))>>>16))>>>16),this.h4h=a<<16|65535&o,this.h4l=n<<16|65535&r,a=(R>>>16)+($>>>16)+((o=(65535&R)+(65535&$)+((n=(V>>>16)+(hh>>>16)+((r=(65535&V)+(65535&hh))>>>16))>>>16))>>>16),this.h5h=a<<16|65535&o,this.h5l=n<<16|65535&r,a=(C>>>16)+(th>>>16)+((o=(65535&C)+(65535&th)+((n=(K>>>16)+(ih>>>16)+((r=(65535&K)+(65535&ih))>>>16))>>>16))>>>16),this.h6h=a<<16|65535&o,this.h6l=n<<16|65535&r,a=(P>>>16)+(sh>>>16)+((o=(65535&P)+(65535&sh)+((n=(D>>>16)+(eh>>>16)+((r=(65535&D)+(65535&eh))>>>16))>>>16))>>>16),this.h7h=a<<16|65535&o,this.h7l=n<<16|65535&r},h.prototype.hex=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,a=this.h4h,f=this.h4l,c=this.h5h,u=this.h5l,y=this.h6h,p=this.h6l,d=this.h7h,b=this.h7l,w=this.bits,A=l[h>>28&15]+l[h>>24&15]+l[h>>20&15]+l[h>>16&15]+l[h>>12&15]+l[h>>8&15]+l[h>>4&15]+l[15&h]+l[t>>28&15]+l[t>>24&15]+l[t>>20&15]+l[t>>16&15]+l[t>>12&15]+l[t>>8&15]+l[t>>4&15]+l[15&t]+l[i>>28&15]+l[i>>24&15]+l[i>>20&15]+l[i>>16&15]+l[i>>12&15]+l[i>>8&15]+l[i>>4&15]+l[15&i]+l[s>>28&15]+l[s>>24&15]+l[s>>20&15]+l[s>>16&15]+l[s>>12&15]+l[s>>8&15]+l[s>>4&15]+l[15&s]+l[e>>28&15]+l[e>>24&15]+l[e>>20&15]+l[e>>16&15]+l[e>>12&15]+l[e>>8&15]+l[e>>4&15]+l[15&e]+l[r>>28&15]+l[r>>24&15]+l[r>>20&15]+l[r>>16&15]+l[r>>12&15]+l[r>>8&15]+l[r>>4&15]+l[15&r]+l[n>>28&15]+l[n>>24&15]+l[n>>20&15]+l[n>>16&15]+l[n>>12&15]+l[n>>8&15]+l[n>>4&15]+l[15&n];return w>=256&&(A+=l[o>>28&15]+l[o>>24&15]+l[o>>20&15]+l[o>>16&15]+l[o>>12&15]+l[o>>8&15]+l[o>>4&15]+l[15&o]),w>=384&&(A+=l[a>>28&15]+l[a>>24&15]+l[a>>20&15]+l[a>>16&15]+l[a>>12&15]+l[a>>8&15]+l[a>>4&15]+l[15&a]+l[f>>28&15]+l[f>>24&15]+l[f>>20&15]+l[f>>16&15]+l[f>>12&15]+l[f>>8&15]+l[f>>4&15]+l[15&f]+l[c>>28&15]+l[c>>24&15]+l[c>>20&15]+l[c>>16&15]+l[c>>12&15]+l[c>>8&15]+l[c>>4&15]+l[15&c]+l[u>>28&15]+l[u>>24&15]+l[u>>20&15]+l[u>>16&15]+l[u>>12&15]+l[u>>8&15]+l[u>>4&15]+l[15&u]),512==w&&(A+=l[y>>28&15]+l[y>>24&15]+l[y>>20&15]+l[y>>16&15]+l[y>>12&15]+l[y>>8&15]+l[y>>4&15]+l[15&y]+l[p>>28&15]+l[p>>24&15]+l[p>>20&15]+l[p>>16&15]+l[p>>12&15]+l[p>>8&15]+l[p>>4&15]+l[15&p]+l[d>>28&15]+l[d>>24&15]+l[d>>20&15]+l[d>>16&15]+l[d>>12&15]+l[d>>8&15]+l[d>>4&15]+l[15&d]+l[b>>28&15]+l[b>>24&15]+l[b>>20&15]+l[b>>16&15]+l[b>>12&15]+l[b>>8&15]+l[b>>4&15]+l[15&b]),A},h.prototype.toString=h.prototype.hex,h.prototype.digest=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,a=this.h4h,l=this.h4l,f=this.h5h,c=this.h5l,u=this.h6h,y=this.h6l,p=this.h7h,d=this.h7l,b=this.bits,w=[h>>24&255,h>>16&255,h>>8&255,255&h,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n];return b>=256&&w.push(o>>24&255,o>>16&255,o>>8&255,255&o),b>=384&&w.push(a>>24&255,a>>16&255,a>>8&255,255&a,l>>24&255,l>>16&255,l>>8&255,255&l,f>>24&255,f>>16&255,f>>8&255,255&f,c>>24&255,c>>16&255,c>>8&255,255&c),512==b&&w.push(u>>24&255,u>>16&255,u>>8&255,255&u,y>>24&255,y>>16&255,y>>8&255,255&y,p>>24&255,p>>16&255,p>>8&255,255&p,d>>24&255,d>>16&255,d>>8&255,255&d),w},h.prototype.array=h.prototype.digest,h.prototype.arrayBuffer=function(){this.finalize();var h=this.bits,t=new ArrayBuffer(h/8),i=new DataView(t);return i.setUint32(0,this.h0h),i.setUint32(4,this.h0l),i.setUint32(8,this.h1h),i.setUint32(12,this.h1l),i.setUint32(16,this.h2h),i.setUint32(20,this.h2l),i.setUint32(24,this.h3h),h>=256&&i.setUint32(28,this.h3l),h>=384&&(i.setUint32(32,this.h4h),i.setUint32(36,this.h4l),i.setUint32(40,this.h5h),i.setUint32(44,this.h5l)),512==h&&(i.setUint32(48,this.h6h),i.setUint32(52,this.h6l),i.setUint32(56,this.h7h),i.setUint32(60,this.h7l)),t},h.prototype.clone=function(){var t=new h(this.bits,!1);return this.copyTo(t),t},h.prototype.copyTo=function(h){var t=0,i=["h0h","h0l","h1h","h1l","h2h","h2l","h3h","h3l","h4h","h4l","h5h","h5l","h6h","h6l","h7h","h7l","start","bytes","hBytes","finalized","hashed","lastByteIndex"];for(t=0;t<i.length;++t)h[i[t]]=this[i[t]];for(t=0;t<this.blocks.length;++t)h.blocks[t]=this.blocks[t]},(t.prototype=new h).finalize=function(){if(h.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();h.call(this,this.bits,this.sharedMemory),this.update(this.oKeyPad),this.update(t),h.prototype.finalize.call(this)}},t.prototype.clone=function(){var h=new t([],this.bits,!1);this.copyTo(h),h.inner=this.inner;for(var i=0;i<this.oKeyPad.length;++i)h.oKeyPad[i]=this.oKeyPad[i];return h};var _=b(512);_.sha512=_,_.sha384=b(384),_.sha512_256=b(256),_.sha512_224=b(224),_.sha512.hmac=A(512),_.sha384.hmac=A(384),_.sha512_256.hmac=A(256),_.sha512_224.hmac=A(224),n?module.exports=_:(e.sha512=_.sha512,e.sha384=_.sha384,e.sha512_256=_.sha512_256,e.sha512_224=_.sha512_224,o&&define(function(){return _}))}();

//在线 SHA512: https://www.strerr.com/cn/sha512.html
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function redirectToHome() {
    window.location = "/";
}

function getVerifyData(username) {
    var obj;
    obj = userLoginData[username];
    if(obj == undefined) return "USER_NOT_FOUND";
    ret = obj.verify;
    return ret;
}

function getUserSHA512PWD(username) {
    var obj;
    obj = userLoginData[username];
    if(obj == undefined) return "USER_NOT_FOUND";
    try {
        ret = obj.SHA512PWD;
    } catch (err) {
        return "SHA512PWD_NOT_FOUND";
    }
    return ret;
}

function loginWithPwd(username, userInputPwd) {
    userRightSHA512 = getUserSHA512PWD(username);
    if(userRightSHA512 == "USER_NOT_FOUND") return "USER_NOT_FOUND";
    if(userRightSHA512 == "SHA512PWD_NOT_FOUND") return "SHA512PWD_NOT_FOUND";
    userInputSHA512 = sha512(userInputPwd);
    if(userInputSHA512 == userRightSHA512) {
        setCookie("username", username, 30);
        setCookie("userpwd", userInputPwd, 30);
        setCookie("pwdSHA512", userRightSHA512, 30);
        setCookie("userLoginAuthCode", sha512(`${username},${userInputPwd}`), 30);
        return "VERIFY_OK";
    }
    else return "WRONG_PWD"; 
}

function verifyLoginStatus() {
    username = getCookie("username");
    userpwd = getCookie("userpwd");
    pwdSHA512 = getCookie("pwdSHA512");
    userLoginAuthCode = getCookie("userLoginAuthCode");
    if(username == "" || userpwd == "" || pwdSHA512 == "" || userLoginAuthCode == "") {
        setCookie("username", "", 0);
        setCookie("userpwd", "", 0);
        setCookie("pwdSHA512", "", 0);
        setCookie("userLoginAuthCode", "", 0);
        return "NOT_LOGIN";
    }
    userRightSHA512 = getUserSHA512PWD(username);
    if(userRightSHA512 == "USER_NOT_FOUND") {
        setCookie("username", "", 0);
        setCookie("userpwd", "", 0);
        setCookie("pwdSHA512", "", 0);
        setCookie("userLoginAuthCode", "", 0);
        return "USER_NOT_FOUND";
    }
    if(userRightSHA512 == "SHA512PWD_NOT_FOUND") {
        setCookie("username", "", 0);
        setCookie("userpwd", "", 0);
        setCookie("pwdSHA512", "", 0);
        setCookie("userLoginAuthCode", "", 0);
        return "SHA512PWD_NOT_FOUND";
    }
    userInputSHA512 = sha512(userpwd);
    if(userInputSHA512 == userRightSHA512) {
        rightAuthCode = sha512(`${username},${userpwd}`);
        if(rightAuthCode = userLoginAuthCode) {
            return username;
        } else {
            return "WRONG_AUTHCODE";
        }
    } else {
        return "WRONG_PWD";
    }
}

function logOut() {
    setCookie("username", "", 0);
    setCookie("userpwd", "", 0);
    setCookie("pwdSHA512", "", 0);
    setCookie("userLoginAuthCode", "", 0);
    redirectToHome();
}
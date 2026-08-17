var bv="185",Tv={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Av={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ev=0,wv=1,Cv=2,Rv=3,Iv=0,Pv=1,Lv=2,Uv=3,Nv=0,Dv=1,Ov=2,Fv=0,Bv=1,zv=2,Vv=3,kv=4,Gv=5,Hv=6,Wv=100,Xv=101,qv=102,Yv=103,Zv=104,Jv=200,Kv=201,$v=202,Qv=203,jv=204,e_=205,t_=206,i_=207,n_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,h_=0,u_=1,d_=2,f_=3,p_=4,m_=5,g_=6,v_=7,__=0,y_=1,x_=2,M_=0,S_=1,b_=2,T_=3,A_=4,E_=5,w_=6,C_=7,jh="attached",R_="detached",I_=300,P_=301,L_=302,U_=303,N_=304,D_=306,Cs=1e3,Zt=1001,Rs=1002,Ct=1003,cc=1004,O_=1004,hc=1005,F_=1005,St=1006,uc=1007,B_=1007,Cr=1008,z_=1008,Fi=1009,eu=1010,tu=1011,dc=1012,iu=1013,Bi=1014,zi=1015,hn=1016,fc=1017,pc=1018,mc=1020,nu=35902,ru=35899,su=1021,au=1022,Vi=1023,Sr=1026,gc=1027,vc=1028,to=1029,Is=1030,_c=1031,V_=1032,yc=1033,ou=33776,lu=33777,cu=33778,hu=33779,uu=35840,du=35841,fu=35842,pu=35843,mu=36196,gu=37492,vu=37496,_u=37488,yu=37489,xu=37490,Mu=37491,Su=37808,bu=37809,Tu=37810,Au=37811,Eu=37812,wu=37813,Cu=37814,Ru=37815,Iu=37816,Pu=37817,Lu=37818,Uu=37819,Nu=37820,Du=37821,Ou=36492,Fu=36494,Bu=36495,zu=36283,Vu=36284,ku=36285,Gu=36286,k_=2200,Hu=2201,Wu=2202,Ps=2300,Wa=2301,$s=2302,Co=2303,kn=2400,Gn=2401,Ls=2402,io=2500,xc=2501,G_=0,H_=1,W_=2,Xu=3200,X_=3201,q_=3202,Y_=3203,Z_=0,J_=1,K_="",jt="srgb",Xa="srgb-linear",Us="linear",Ns="srgb",$_="",Q_="rg",j_="ga",e0=0,Qs=7680,t0=7681,i0=7682,n0=7683,r0=34055,s0=34056,a0=5386,o0=512,l0=513,c0=514,h0=515,u0=516,d0=517,f0=518,p0=519,m0=512,g0=513,v0=514,_0=515,y0=516,x0=517,M0=518,S0=519,no=35044,b0=35048,T0=35040,A0=35045,E0=35049,w0=35041,C0=35046,R0=35050,I0=35042,P0="100",L0="300 es",un=2e3,U0=2001,N0={COMPUTE:"compute",RENDER:"render"},D0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},O0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},F0={TEXTURE_COMPARE:"depthTextureCompare"};function qu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Yu={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Hn(e,t){return new Yu[e](t)}function Mc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function br(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zu(){const e=br("canvas");return e.style.display="block",e}var Ro={},ki=null;function B0(e){ki=e}function z0(){return ki}function Ds(...e){const t="THREE."+e.shift();ki?ki("log",t,...e):console.log(t,...e)}function Sc(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function he(...e){e=Sc(e);const t="THREE."+e.shift();if(ki)ki("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Pe(...e){e=Sc(e);const t="THREE."+e.shift();if(ki)ki("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ln(...e){const t=e.join(" ");t in Ro||(Ro[t]=!0,he(...e))}function Ju(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Ku={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=1234567,cn=Math.PI/180,qn=180/Math.PI;function Jt(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[e&255]+Pt[e>>8&255]+Pt[e>>16&255]+Pt[e>>24&255]+"-"+Pt[t&255]+Pt[t>>8&255]+"-"+Pt[t>>16&15|64]+Pt[t>>24&255]+"-"+Pt[i&63|128]+Pt[i>>8&255]+"-"+Pt[i>>16&255]+Pt[i>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ve(e,t,i){return Math.max(t,Math.min(i,e))}function ro(e,t){return(e%t+t)%t}function $u(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function Qu(e,t,i){return e!==t?(i-e)/(t-e):0}function yr(e,t,i){return(1-i)*e+i*t}function ju(e,t,i,n){return yr(e,t,1-Math.exp(-i*n))}function ed(e,t=1){return t-Math.abs(ro(e,t*2)-t)}function td(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function id(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function nd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rd(e,t){return e+Math.random()*(t-e)}function sd(e){return e*(.5-Math.random())}function ad(e){e!==void 0&&(Io=e);let t=Io+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(e){return e*cn}function ld(e){return e*qn}function cd(e){return(e&e-1)===0&&e!==0}function hd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ud(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function dd(e,t,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),f=s((n-t)/2),m=a((n-t)/2);switch(r){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*m,l*f,o*c);break;case"YXY":e.set(l*f,o*h,l*m,o*c);break;case"ZYZ":e.set(l*m,l*f,o*h,o*c);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var V0={DEG2RAD:cn,RAD2DEG:qn,generateUUID:Jt,clamp:Ve,euclideanModulo:ro,mapLinear:$u,inverseLerp:Qu,lerp:yr,damp:ju,pingpong:ed,smoothstep:td,smootherstep:id,randInt:nd,randFloat:rd,randFloatSpread:sd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:Ye,denormalize:Vt},$=class bc{static{bc.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),r=Math.sin(i),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],d=r[s+0],u=r[s+1],f=r[s+2],m=r[s+3];if(h!==m||o!==d||l!==u||c!==f){let _=o*d+l*u+c*f+h*m;_<0&&(d=-d,u=-u,f=-f,m=-m,_=-_);let g=1-a;if(_<.9995){const p=Math.acos(_),S=Math.sin(p);g=Math.sin(g*p)/S,a=Math.sin(a*p)/S,o=o*g+d*a,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a}else{o=o*g+d*a,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a;const p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],h=r[s],d=r[s+1],u=r[s+2],f=r[s+3];return e[t]=a*f+c*h+o*u-l*d,e[t+1]=o*f+c*d+l*h-a*u,e[t+2]=l*f+c*u+a*d-o*h,e[t+3]=c*f-a*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),h=a(r/2),d=o(i/2),u=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(c-o)/u,this._x=.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class Tc{static{Tc.prototype.isVector3=!0}constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Po.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*i-s*r),d=2*(s*n-a*i);return this.x=i+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,r=t.y,s=t.z,a=i.x,o=i.y,l=i.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return i*i+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const r=Math.sin(i)*t;return this.x=r*Math.sin(n),this.y=Math.cos(i)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},js=new C,Po=new Wt,qe=class Ac{static{Ac.prototype.isMatrix3=!0}constructor(t,i,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c)}set(t,i,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=i,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=r[0],g=r[3],p=r[6],S=r[1],M=r[4],v=r[7],E=r[2],w=r[5],R=r[8];return s[0]=a*_+o*S+l*E,s[3]=a*g+o*M+l*w,s[6]=a*p+o*v+l*R,s[1]=c*_+h*S+d*E,s[4]=c*g+h*M+d*w,s[7]=c*p+h*v+d*R,s[2]=u*_+f*S+m*E,s[5]=u*g+f*M+m*w,s[8]=u*p+f*v+m*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=i*d+n*u+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(r*c-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=u*_,t[4]=(h*i-r*l)*_,t[5]=(r*s-o*i)*_,t[6]=f*_,t[7]=(n*l-c*i)*_,t[8]=(a*i-n*s)*_,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return ln("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(t,i)),this}rotate(t){return ln("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-t)),this}translate(t,i){return ln("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ea=new qe,Lo=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){const e={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ln("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ln("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Xa]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:Lo,fromXYZ:Uo,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),e}var et=fd();function Ti(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Xn(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _n,pd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_n===void 0&&(_n=br("canvas")),_n.width=e.width,_n.height=e.height;const n=_n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=_n}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Ti(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},md=0,an=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Jt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(ta(n[s].image)):r.push(ta(n[s]))}else r=ta(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function ta(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}var gd=0,ia=new C,Rt=class As extends fi{constructor(t=As.DEFAULT_IMAGE,i=As.DEFAULT_MAPPING,n=Zt,r=Zt,s=St,a=Cr,o=Vi,l=Fi,c=As.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Jt(),this.name="",this.source=new an(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case Zt:t.x=t.x<0?0:1;break;case Rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case Zt:t.y=t.y<0?0:1;break;case Rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=300;Rt.DEFAULT_ANISOTROPY=1;var pt=class Ec{static{Ec.prototype.isVector4=!0}constructor(t=0,i=0,n=0,r=1){this.x=t,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,r){return this.x=t,this.y=i,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*i+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*i+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*i+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const M=(c+1)/2,v=(f+1)/2,E=(p+1)/2,w=(h+u)/4,R=(d+_)/4,y=(m+g)/4;return M>v&&M>E?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=R/n):v>E?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=y/s),this.set(n,r,s,i),this}let S=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this.w=Ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this.w=Ve(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},r=new Rt(n),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new an(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends wc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},so=class extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},k0=class extends ei{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new so(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},ao=class extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},G0=class extends ei{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ao(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},He=class qa{static{qa.prototype.isMatrix4=!0}constructor(t,i,n,r,s,a,o,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c,h,d,u,f,m,_,g)}set(t,i,n,r,s,a,o,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,r=1/yn.setFromMatrixColumn(t,0).length(),s=1/yn.setFromMatrixColumn(t,1).length(),a=1/yn.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,m=o*h,_=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=f+m*c,i[5]=u-_*c,i[9]=-o*l,i[2]=_-u*c,i[6]=m+f*c,i[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;i[0]=u+_*o,i[4]=m*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*h,i[9]=-o,i[2]=f*o-m,i[6]=_+u*o,i[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;i[0]=u-_*o,i[4]=-a*d,i[8]=m+f*o,i[1]=f+m*o,i[5]=a*h,i[9]=_-u*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,m=o*h,_=o*d;i[0]=l*h,i[4]=m*c-f,i[8]=u*c+_,i[1]=l*d,i[5]=_*c+u,i[9]=f*c-m,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,m=o*l,_=o*c;i[0]=l*h,i[4]=_-u*d,i[8]=m*d+f,i[1]=d,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=f*d+m,i[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,m=o*l,_=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+_,i[5]=a*h,i[9]=f*d-m,i[2]=m*d-f,i[6]=o*h,i[10]=_*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,_d)}lookAt(t,i,n){const r=this.elements;return qt.subVectors(t,i),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Ci.crossVectors(n,qt),Ci.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Ci.crossVectors(n,qt)),Ci.normalize(),Nr.crossVectors(qt,Ci),r[0]=Ci.x,r[4]=Nr.x,r[8]=qt.x,r[1]=Ci.y,r[5]=Nr.y,r[9]=qt.y,r[2]=Ci.z,r[6]=Nr.z,r[10]=qt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],M=n[7],v=n[11],E=n[15],w=r[0],R=r[4],y=r[8],T=r[12],U=r[1],I=r[5],F=r[9],X=r[13],k=r[2],G=r[6],q=r[10],z=r[14],ee=r[3],ie=r[7],ne=r[11],ge=r[15];return s[0]=a*w+o*U+l*k+c*ee,s[4]=a*R+o*I+l*G+c*ie,s[8]=a*y+o*F+l*q+c*ne,s[12]=a*T+o*X+l*z+c*ge,s[1]=h*w+d*U+u*k+f*ee,s[5]=h*R+d*I+u*G+f*ie,s[9]=h*y+d*F+u*q+f*ne,s[13]=h*T+d*X+u*z+f*ge,s[2]=m*w+_*U+g*k+p*ee,s[6]=m*R+_*I+g*G+p*ie,s[10]=m*y+_*F+g*q+p*ne,s[14]=m*T+_*X+g*z+p*ge,s[3]=S*w+M*U+v*k+E*ee,s[7]=S*R+M*I+v*G+E*ie,s[11]=S*y+M*F+v*q+E*ne,s[15]=S*T+M*X+v*z+E*ge,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],S=l*f-c*u,M=o*f-c*d,v=o*u-l*d,E=a*f-c*h,w=a*u-l*h,R=a*d-o*h;return i*(_*S-g*M+p*v)-n*(m*S-g*E+p*w)+r*(m*M-_*E+p*R)-s*(m*v-_*w+g*R)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=i*o-n*a,M=i*l-r*a,v=i*c-s*a,E=n*l-r*o,w=n*c-s*o,R=r*c-s*l,y=h*_-d*m,T=h*g-u*m,U=h*p-f*m,I=d*g-u*_,F=d*p-f*_,X=u*p-f*g,k=S*X-M*F+v*I+E*U-w*T+R*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/k;return t[0]=(o*X-l*F+c*I)*G,t[1]=(r*F-n*X-s*I)*G,t[2]=(_*R-g*w+p*E)*G,t[3]=(u*w-d*R-f*E)*G,t[4]=(l*U-a*X-c*T)*G,t[5]=(i*X-r*U+s*T)*G,t[6]=(g*v-m*R-p*M)*G,t[7]=(h*R-u*v+f*M)*G,t[8]=(a*F-o*U+c*y)*G,t[9]=(n*U-i*F-s*y)*G,t[10]=(m*w-_*v+p*S)*G,t[11]=(d*v-h*w-f*S)*G,t[12]=(o*T-a*I-l*y)*G,t[13]=(i*I-n*T+r*y)*G,t[14]=(_*M-m*E-g*S)*G,t[15]=(h*E-d*M+u*S)*G,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,_=a*h,g=a*d,p=o*d,S=l*c,M=l*h,v=l*d,E=n.x,w=n.y,R=n.z;return r[0]=(1-(_+p))*E,r[1]=(f+v)*E,r[2]=(m-M)*E,r[3]=0,r[4]=(f-v)*w,r[5]=(1-(u+p))*w,r[6]=(g+S)*w,r[7]=0,r[8]=(m+M)*R,r[9]=(g-S)*R,r[10]=(1-(u+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=yn.set(r[0],r[1],r[2]).length();const o=yn.set(r[4],r[5],r[6]).length(),l=yn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ii.copy(this);const c=1/a,h=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,i.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,r,s,a,o=un,l=!1){const c=this.elements,h=2*s/(i-t),d=2*s/(n-r),u=(i+t)/(i-t),f=(n+r)/(n-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===2e3)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=un,l=!1){const c=this.elements,h=2/(i-t),d=2/(n-r),u=-(i+t)/(i-t),f=-(n+r)/(n-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===2e3)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},yn=new C,ii=new He,vd=new C(0,0,0),_d=new C(1,1,1),Ci=new C,Nr=new C,qt=new C,No=new He,Do=new Wt,Gi=class Cc{constructor(t=0,i=0,n=0,r=Cc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Do.setFromEuler(this),this.setFromQuaternion(Do,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yd=0,Oo=new C,xn=new Wt,gi=new He,Dr=new C,tr=new C,xd=new C,Md=new Wt,Fo=new C(1,0,0),Bo=new C(0,1,0),zo=new C(0,0,1),Vo={type:"added"},Sd={type:"removed"},Mn={type:"childadded",child:null},na={type:"childremoved",child:null},lt=class Es extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Es.DEFAULT_UP.clone();const t=new C,i=new Gi,n=new Wt,r=new C(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Es.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Es.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xn.setFromAxisAngle(t,i),this.quaternion.multiply(xn),this}rotateOnWorldAxis(t,i){return xn.setFromAxisAngle(t,i),this.quaternion.premultiply(xn),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,i){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Dr.copy(t):Dr.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(tr,Dr,this.up):gi.lookAt(Dr,tr,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),xn.setFromRotationMatrix(gi),this.quaternion.premultiply(xn.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sd),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}};lt.DEFAULT_UP=new C(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mr=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const u of e.hand.values()){const f=t.getJointPose(u,i),m=this._getHandJoint(l,u);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position);l.inputState.pinching&&d>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Or={h:0,s:0,l:0};function sa(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=ro(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=sa(s,r,e+1/3),this.g=sa(s,r,e),this.b=sa(s,r,e-1/3)}return et.colorSpaceToWorking(this,n),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:he("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);he("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Rc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):he("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return et.workingToColorSpace(Lt.copy(this),e),Math.round(Ve(Lt.r*255,0,255))*65536+Math.round(Ve(Lt.g*255,0,255))*256+Math.round(Ve(Lt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,n=Lt.g,r=Lt.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case i:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-i)/h+2;break;case r:o=(i-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=jt){et.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,n=Lt.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Or);const i=yr(Ri.h,Or.h,t),n=yr(Ri.s,Or.s,t),r=yr(Ri.l,Or.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new xe;xe.NAMES=Rc;var Td=class Ic{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=i}clone(){return new Ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ad=class Pc{constructor(t,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=n}clone(){return new Pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ed=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new C,vi=new C,aa=new C,_i=new C,Sn=new C,bn=new C,ko=new C,oa=new C,la=new C,ca=new C,ha=new pt,ua=new pt,da=new pt,sn=class zn{constructor(t=new C,i=new C,n=new C){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),ni.subVectors(t,i),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){ni.subVectors(r,i),vi.subVectors(n,i),aa.subVectors(t,i);const a=ni.dot(ni),o=ni.dot(vi),l=ni.dot(aa),c=vi.dot(vi),h=vi.dot(aa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,i,n,r,s,a,o,l){return this.getBarycoord(t,i,n,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,i,n,r,s,a){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,i),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(ua,s.y),a.addScaledVector(da,s.z),a}static isFrontFacing(t,i,n,r){return ni.subVectors(n,i),vi.subVectors(t,i),ni.cross(vi).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),ni.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zn.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return zn.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;Sn.subVectors(r,n),bn.subVectors(s,n),oa.subVectors(t,n);const l=Sn.dot(oa),c=bn.dot(oa);if(l<=0&&c<=0)return i.copy(n);la.subVectors(t,r);const h=Sn.dot(la),d=bn.dot(la);if(h>=0&&d<=h)return i.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(Sn,a);ca.subVectors(t,s);const f=Sn.dot(ca),m=bn.dot(ca);if(m>=0&&f<=m)return i.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),i.copy(n).addScaledVector(bn,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ko.subVectors(s,r),o=(d-h)/(d-h+(f-m)),i.copy(r).addScaledVector(ko,o);const p=1/(g+_+u);return a=_*p,o=u*p,i.copy(n).addScaledVector(Sn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ri):ri.fromBufferAttribute(r,s),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Br.subVectors(this.max,ir),Tn.subVectors(e.a,ir),An.subVectors(e.b,ir),En.subVectors(e.c,ir),Ii.subVectors(An,Tn),Pi.subVectors(En,An),Xi.subVectors(Tn,En);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Xi.z,Xi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Xi.z,0,-Xi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Xi.y,Xi.x,0];return!fa(t,Tn,An,En,Br)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Tn,An,En,Br))?!1:(zr.crossVectors(Ii,Pi),t=[zr.x,zr.y,zr.z],fa(t,Tn,An,En,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new C,new C,new C,new C,new C,new C,new C,new C],ri=new C,Fr=new kt,Tn=new C,An=new C,En=new C,Ii=new C,Pi=new C,Xi=new C,ir=new C,Br=new C,zr=new C,qi=new C;function fa(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){qi.fromArray(e,s);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=t.dot(qi),c=i.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Si=wd();function wd(){const e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ht(e){Math.abs(e)>65504&&he("DataUtils.toHalfFloat(): Value out of range."),e=Ve(e,-65504,65504),Si.floatView[0]=e;const t=Si.uint32View[0],i=t>>23&511;return Si.baseTable[i]+((t&8388607)>>Si.shiftTable[i])}function gr(e){const t=e>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[t]+(e&1023)]+Si.exponentTable[t],Si.floatView[0]}var H0=class{static toHalfFloat(e){return Ht(e)}static fromHalfFloat(e){return gr(e)}},bt=new C,Vr=new $,Cd=0,ht=class extends fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=no,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},W0=class extends ht{constructor(e,t,i){super(new Int8Array(e),t,i)}},X0=class extends ht{constructor(e,t,i){super(new Uint8Array(e),t,i)}},q0=class extends ht{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Y0=class extends ht{constructor(e,t,i){super(new Int16Array(e),t,i)}},Lc=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Z0=class extends ht{constructor(e,t,i){super(new Int32Array(e),t,i)}},Uc=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}},J0=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=gr(this.array[e*this.itemSize]);return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=Ht(t),this}getY(e){let t=gr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=Ht(t),this}getZ(e){let t=gr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=Ht(t),this}getW(e){let t=gr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=Ht(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=Ht(t),this.array[e+1]=Ht(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[e+0]=Ht(t),this.array[e+1]=Ht(i),this.array[e+2]=Ht(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=Ht(t),this.array[e+1]=Ht(i),this.array[e+2]=Ht(n),this.array[e+3]=Ht(r),this}},be=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},Rd=new kt,nr=new C,pa=new C,Dt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rd.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(nr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(pa)),this.expandByPoint(nr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Id=0,Qt=new He,ma=new lt,wn=new C,Yt=new kt,rr=new kt,wt=new C,Ze=class Nc extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Uc:Lc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qt.makeRotationFromQuaternion(t),this.applyMatrix4(Qt),this}rotateX(t){return Qt.makeRotationX(t),this.applyMatrix4(Qt),this}rotateY(t){return Qt.makeRotationY(t),this.applyMatrix4(Qt),this}rotateZ(t){return Qt.makeRotationZ(t),this.applyMatrix4(Qt),this}translate(t,i,n){return Qt.makeTranslation(t,i,n),this.applyMatrix4(Qt),this}scale(t,i,n){return Qt.makeScale(t,i,n),this.applyMatrix4(Qt),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wn).negate(),this.translate(wn.x,wn.y,wn.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,rr.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,rr.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(rr.min),Yt.expandByPoint(rr.max))}Yt.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)wt.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(wt));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(wn.fromBufferAttribute(t,c),wt.add(wn)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;const c=new C,h=new C,d=new C,u=new $,f=new $,m=new $,_=new C,g=new C;function p(y,T,U){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,U),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[y].add(_),o[T].add(_),o[U].add(_),l[y].add(g),l[T].add(g),l[U].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,T=S.length;y<T;++y){const U=S[y],I=U.start,F=U.count;for(let X=I,k=I+F;X<k;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const M=new C,v=new C,E=new C,w=new C;function R(y){E.fromBufferAttribute(r,y),w.copy(E);const T=o[y];M.copy(T),M.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(w,T);const U=v.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,U)}for(let y=0,T=S.length;y<T;++y){const U=S[y],I=U.start,F=U.count;for(let X=I,k=I+F;X<k;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new ht(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(i,m),s.fromBufferAttribute(i,_),a.fromBufferAttribute(i,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=i.count;u<f;u+=3)r.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)wt.fromBufferAttribute(t,i),wt.normalize(),t.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new ht(u,h,d)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nc,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);i.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(i))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new C,Os=class Dc{constructor(t,i,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)Bt.fromBufferAttribute(this,i),Bt.applyMatrix4(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)Bt.fromBufferAttribute(this,i),Bt.applyNormalMatrix(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)Bt.fromBufferAttribute(this,i),Bt.transformDirection(t),this.setXYZ(i,Bt.x,Bt.y,Bt.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Vt(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Vt(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Vt(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Vt(i,this.array)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),n=Ye(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,i,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ds("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return new ht(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ds("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pd=0,Ot=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){he(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){he(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oc=class extends Ot{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cn,sr=new C,Rn=new C,In=new C,Pn=new $,ar=new $,Fc=new He,kr=new C,or=new C,Gr=new C,Go=new $,ga=new $,Ho=new $,Ld=class extends lt{constructor(e=new Oc){if(super(),this.isSprite=!0,this.type="Sprite",Cn===void 0){Cn=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lo(t,5);Cn.setIndex([0,1,2,0,2,3]),Cn.setAttribute("position",new Os(i,3,0,!1)),Cn.setAttribute("uv",new Os(i,2,3,!1))}this.geometry=Cn,this.material=e,this.center=new $(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rn.setFromMatrixScale(this.matrixWorld),Fc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),In.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rn.multiplyScalar(-In.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const s=this.center;Hr(kr.set(-.5,-.5,0),In,s,Rn,n,r),Hr(or.set(.5,-.5,0),In,s,Rn,n,r),Hr(Gr.set(.5,.5,0),In,s,Rn,n,r),Go.set(0,0),ga.set(1,0),Ho.set(1,1);let a=e.ray.intersectTriangle(kr,or,Gr,!1,sr);if(a===null&&(Hr(or.set(-.5,.5,0),In,s,Rn,n,r),ga.set(0,1),a=e.ray.intersectTriangle(kr,Gr,or,!1,sr),a===null))return;const o=e.ray.origin.distanceTo(sr);o<e.near||o>e.far||t.push({distance:o,point:sr.clone(),uv:sn.getInterpolation(sr,kr,or,Gr,Go,ga,Ho,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Hr(e,t,i,n,r,s){Pn.subVectors(e,i).addScalar(.5).multiply(n),r!==void 0?(ar.x=s*Pn.x-r*Pn.y,ar.y=r*Pn.x+s*Pn.y):ar.copy(Pn),e.copy(t),e.x+=ar.x,e.y+=ar.y,e.applyMatrix4(Fc)}var Wr=new C,Wo=new C,Ud=class extends lt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Wr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Wr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Wr.setFromMatrixPosition(e.matrixWorld),Wo.setFromMatrixPosition(this.matrixWorld);const i=Wr.distanceTo(Wo)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),i>=s)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const s=i[n];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},xi=new C,va=new C,Xr=new C,Li=new C,_a=new C,qr=new C,ya=new C,Rr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){va.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Xr),a=Li.dot(this.direction),o=-Li.dot(Xr),l=Li.lengthSq(),c=Math.abs(1-s*s);let h,d,u,f;if(c>0)if(h=s*o-a,d=s*a-o,f=r*c,h>=0)if(d>=-f)if(d<=f){const m=1/c;h*=m,d*=m,u=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-f?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=f?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(va).addScaledVector(Xr,d),u}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),n=xi.dot(xi)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),c>=0?(r=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(a=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,n,r){_a.subVectors(t,e),qr.subVectors(i,e),ya.crossVectors(_a,qr);let s=this.direction.dot(ya),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Li.subVectors(this.origin,e);const o=a*this.direction.dot(qr.crossVectors(Li,qr));if(o<0)return null;const l=a*this.direction.dot(_a.cross(Li));if(l<0||o+l>s)return null;const c=-a*Li.dot(ya);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends Ot{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xo=new He,Yi=new Rr,Yr=new Dt,qo=new C,Zr=new C,Jr=new C,Kr=new C,xa=new C,$r=new C,Yo=new C,Qr=new C,Tt=class extends lt{constructor(e=new Ze,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(xa.fromBufferAttribute(h,e),s?$r.addScaledVector(xa,c):$r.addScaledVector(xa.sub(t),c))}t.add($r)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Yr.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Yr,qo)===null||Yi.origin.distanceToSquared(qo)>(e.far-e.near)**2))&&(Xo.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Xo),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){const _=d[f],g=s[_.materialIndex],p=Math.max(_.start,u.start),S=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let M=p,v=S;M<v;M+=3){const E=a.getX(M),w=a.getX(M+1),R=a.getX(M+2);n=jr(this,g,e,i,l,c,h,E,w,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let _=f,g=m;_<g;_+=3){const p=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);n=jr(this,s,e,i,l,c,h,p,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){const _=d[f],g=s[_.materialIndex],p=Math.max(_.start,u.start),S=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let M=p,v=S;M<v;M+=3){const E=M,w=M+1,R=M+2;n=jr(this,g,e,i,l,c,h,E,w,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let _=f,g=m;_<g;_+=3){const p=_,S=_+1,M=_+2;n=jr(this,s,e,i,l,c,h,p,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function Nd(e,t,i,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(Qr);return c<i.near||c>i.far?null:{distance:c,point:Qr.clone(),object:e}}function jr(e,t,i,n,r,s,a,o,l,c){e.getVertexPosition(o,Zr),e.getVertexPosition(l,Jr),e.getVertexPosition(c,Kr);const h=Nd(e,t,i,n,Zr,Jr,Kr,Yo);if(h){const d=new C;sn.getBarycoord(Yo,Zr,Jr,Kr,d),r&&(h.uv=sn.getInterpolatedAttribute(r,o,l,c,d,new $)),s&&(h.uv1=sn.getInterpolatedAttribute(s,o,l,c,d,new $)),a&&(h.normal=sn.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};sn.getNormal(Zr,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var lr=new pt,Zo=new pt,Jo=new pt,Dd=new pt,Ko=new He,es=new C,Ma=new Dt,$o=new He,Sa=new Rr,Od=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,es),this.boundingBox.expandByPoint(es)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,es),this.boundingSphere.expandByPoint(es)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1&&($o.copy(n).invert(),Sa.copy(e.ray).applyMatrix4($o),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():he("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Zo.fromBufferAttribute(n.attributes.skinIndex,e),Jo.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(lr.copy(t),t.set(0,0,0,0)):(lr.set(...t,1),t.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const s=Jo.getComponent(r);if(s!==0){const a=Zo.getComponent(r);Ko.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Dd.copy(lr).applyMatrix4(Ko),s)}}return t.isVector4&&(t.w=lr.w),t.applyMatrix4(this.bindMatrixInverse)}},Bc=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},si=class extends Rt{constructor(e=null,t=1,i=1,n,r,s,a,o,l=Ct,c=Ct,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qo=new He,Fd=new He,Bd=class zc{constructor(t=[],i=[]){this.uuid=Jt(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){he("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const n=new He;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,i=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Fd;Qo.multiplyMatrices(o,i[s]),Qo.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new zc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const n=new si(i,t,t,Vi,zi);return n.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=n,this}getBoneByName(t){for(let i=0,n=this.bones.length;i<n;i++){const r=this.bones[i];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=i[s];a===void 0&&(he("Skeleton: No bone found with UUID:",s),a=new Bc),this.bones.push(a),this.boneInverses.push(new He().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,n=this.boneInverses;for(let r=0,s=i.length;r<s;r++){const a=i[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}},Tr=class extends ht{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ln=new He,jo=new He,ts=[],el=new kt,zd=new He,cr=new Tt,hr=new Dt,Vd=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,zd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ln),el.copy(e.boundingBox).applyMatrix4(Ln),this.boundingBox.union(el)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ln),hr.copy(e.boundingSphere).applyMatrix4(Ln),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let s=0;s<i.length;s++)i[s]=n[r+s]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ln),jo.multiplyMatrices(i,Ln),cr.matrixWorld=jo,cr.raycast(e,ts);for(let s=0,a=ts.length;s<a;s++){const o=ts[s];o.instanceId=r,o.object=this,t.push(o)}ts.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(n*this.count),n,this.count,vc,zi));const r=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,o=n*e;return r[o]=a,r.set(i,o+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ba=new C,kd=new C,Gd=new qe,rn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ba.subVectors(i,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gd.getNormalMatrix(e),n=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Dt,Hd=new $(.5,.5),is=new C,Yn=class{constructor(e=new rn,t=new rn,i=new rn,n=new rn,r=new rn,s=new rn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=un,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],m=r[9],_=r[10],g=r[11],p=r[12],S=r[13],M=r[14],v=r[15];if(n[0].setComponents(l-s,u-c,g-f,v-p).normalize(),n[1].setComponents(l+s,u+c,g+f,v+p).normalize(),n[2].setComponents(l+a,u+h,g+m,v+S).normalize(),n[3].setComponents(l-a,u-h,g-m,v-S).normalize(),i)n[4].setComponents(o,d,_,M).normalize(),n[5].setComponents(l-o,u-d,g-_,v-M).normalize();else if(n[4].setComponents(l-o,u-d,g-_,v-M).normalize(),t===2e3)n[5].setComponents(l+o,u+d,g+_,v+M).normalize();else if(t===2001)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const t=Hd.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(is.x=n.normal.x>0?e.max.x:e.min.x,is.y=n.normal.y>0?e.max.y:e.min.y,is.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tl=new He,Wd=class Vc{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,n=this._frustums;for(let r=0;r<i.length;r++){const s=i[r];tl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Yn),n[r].setFromProjectionMatrix(tl,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new Yn),i[r].copy(n[r]);return this._count=t._count,this}clone(){return new Vc().copy(this)}};function Ta(e,t){return e-t}function Xd(e,t){return e.z-t.z}function qd(e,t){return t.z-e.z}var Yd=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}},Gt=new He,Zd=new xe(1,1,1),Jd=new Yn,Kd=new Wd,ns=new kt,Ji=new Dt,ur=new C,il=new C,$d=new C,Aa=new Yd,Ut=new Tt,rs=[];function Qd(e,t,i=0){const n=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const r=e.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)t.setComponent(s+i,a,e.getComponent(s,a))}else t.array.set(e.array,i*n);t.needsUpdate=!0}function Ki(e,t){if(e.constructor!==t.constructor){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)t[n]=e[n]}else{const i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var jd=class extends Tt{constructor(e,t,i=t*2,n){super(new Ze,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new si(t,e,e,Vi,zi);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new si(t,e,e,to,Bi);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new si(t,e,e,Vi,zi);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const{array:s,itemSize:a,normalized:o}=e.getAttribute(r),l=new s.constructor(i*a),c=new ht(l,a,o);t.setAttribute(r,c)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new ht(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Gt),this.getBoundingBoxAt(r,ns).applyMatrix4(Gt),e.union(ns)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Gt),this.getBoundingSphereAt(r,Ji).applyMatrix4(Gt),e.union(Ji)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ta),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const n=this._matricesTexture;Gt.identity().toArray(n.image.data,i*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(Zd.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const s=e.getIndex();if(s!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?s.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let a;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ta),a=this._availableGeometryIds.shift(),r[a]=n):(a=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(a,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,a}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),s=t.getIndex(),a=this._geometryInfo[e];if(n&&s.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const c in i.attributes){const h=t.getAttribute(c),d=i.getAttribute(c);Qd(h,d,o);const u=h.itemSize;for(let f=h.count,m=l;f<m;f++){const _=o+f;for(let g=0;g<u;g++)d.setComponent(_,g,0)}d.needsUpdate=!0,d.addUpdateRange(o*u,l*u)}if(n){const c=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<s.count;d++)r.setX(c+d,o+s.getX(d));for(let d=s.count,u=h;d<u;d++)r.setX(c+d,o);r.needsUpdate=!0,r.addUpdateRange(c,a.reservedIndexCount)}return a.start=n?a.indexStart:a.vertexStart,a.count=n?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((s,a)=>a).sort((s,a)=>i[s].vertexStart-i[a].vertexStart),r=this.geometry;for(let s=0,a=i.length;s<a;s++){const o=i[n[s]];if(o.active!==!1){if(r.index!==null){if(o.indexStart!==t){const{indexStart:l,vertexStart:c,reservedIndexCount:h}=o,d=r.index,u=d.array,f=e-c;for(let m=l;m<l+h;m++)u[m]=u[m]+f;d.array.copyWithin(t,l,l+h),d.addUpdateRange(t,h),d.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){const{vertexStart:l,reservedVertexCount:c}=o,h=r.attributes;for(const d in h){const u=h[d],{array:f,itemSize:m}=u;f.copyWithin(e*m,l*m,(l+c)*m),u.addUpdateRange(e*m,c*m),u.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=r.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new kt,s=i.index,a=i.attributes.position;for(let o=n.start,l=n.start+n.count;o<l;o++){let c=o;s&&(c=s.getX(c)),r.expandByPoint(ur.fromBufferAttribute(a,c))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Dt;this.getBoundingBoxAt(e,ns),ns.getCenter(r.center);const s=i.index,a=i.attributes.position;let o=0;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;s&&(h=s.getX(h)),ur.fromBufferAttribute(a,h),o=Math.max(o,r.center.distanceToSquared(ur))}r.radius=Math.sqrt(o),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Ta);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);Ki(this._multiDrawCounts,n),Ki(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const s=this._indirectTexture,a=this._matricesTexture,o=this._colorsTexture;s.dispose(),this._initIndirectTexture(),Ki(s.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ki(a.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),Ki(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ze,this._initializeGeometry(n));const r=this.geometry;n.index&&Ki(n.index.array,r.index.array);for(const s in n.attributes)Ki(n.attributes[s].array,r.attributes[s].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,s=this.geometry;Ut.material=this.material,Ut.geometry.index=s.index,Ut.geometry.attributes=s.attributes,Ut.geometry.boundingBox===null&&(Ut.geometry.boundingBox=new kt),Ut.geometry.boundingSphere===null&&(Ut.geometry.boundingSphere=new Dt);for(let a=0,o=i.length;a<o;a++){if(!i[a].visible||!i[a].active)continue;const l=i[a].geometryIndex,c=n[l];Ut.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(a,Ut.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ut.geometry.boundingBox),this.getBoundingSphereAt(l,Ut.geometry.boundingSphere),Ut.raycast(e,rs);for(let h=0,d=rs.length;h<d;h++){const u=rs[h];u.object=this,u.batchId=a,t.push(u)}rs.length=0}Ut.material=null,Ut.geometry.index=null,Ut.geometry.attributes={},Ut.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=n.getIndex();let a=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;r.wireframe&&(o=2,a=n.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,u=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,_=i.isArrayCamera?Kd:Jd;u&&(i.isArrayCamera?_.setFromArrayCamera(i):(Gt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(Gt,i.coordinateSystem,i.reversedDepth)));let g=0;if(this.sortObjects){Gt.copy(this.matrixWorld).invert(),ur.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Gt),il.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Gt);for(let M=0,v=l.length;M<v;M++)if(l[M].visible&&l[M].active){const E=l[M].geometryIndex;this.getMatrixAt(M,Gt),this.getBoundingSphereAt(E,Ji).applyMatrix4(Gt);let w=!1;if(u&&(w=!_.intersectsSphere(Ji)),!w){const R=d[E],y=$d.subVectors(Ji.center,ur).dot(il);Aa.push(R.start,R.count,y,M)}}const p=Aa.list,S=this.customSort;S===null?p.sort(r.transparent?qd:Xd):S.call(this,p,i);for(let M=0,v=p.length;M<v;M++){const E=p[M];c[g]=E.start*a*o,h[g]=E.count*o,m[g]=E.index,g++}Aa.reset()}else for(let p=0,S=l.length;p<S;p++)if(l[p].visible&&l[p].active){const M=l[p].geometryIndex;let v=!1;if(u&&(this.getMatrixAt(p,Gt),this.getBoundingSphereAt(M,Ji).applyMatrix4(Gt),v=!_.intersectsSphere(Ji)),!v){const E=d[M];c[g]=E.start*a*o,h[g]=E.count*o,m[g]=p,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,s){this.onBeforeRender(e,null,n,r,s)}},Xt=class extends Ot{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fs=new C,Bs=new C,nl=new He,dr=new Rr,ss=new Dt,Ea=new C,rl=new C,dn=class extends lt{constructor(e=new Ze,t=new Xt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Fs.fromBufferAttribute(t,n-1),Bs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Fs.distanceTo(Bs);e.setAttribute("lineDistance",new be(i,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(n),ss.radius+=r,e.ray.intersectsSphere(ss)===!1)return;nl.copy(n).invert(),dr.copy(e.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let f=d,m=u-1;f<m;f+=l){const _=c.getX(f),g=c.getX(f+1),p=as(this,e,dr,o,_,g,f);p&&t.push(p)}if(this.isLineLoop){const f=c.getX(u-1),m=c.getX(d),_=as(this,e,dr,o,f,m,u-1);_&&t.push(_)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let f=d,m=u-1;f<m;f+=l){const _=as(this,e,dr,o,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){const f=as(this,e,dr,o,u-1,d,u-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function as(e,t,i,n,r,s,a){const o=e.geometry.attributes.position;if(Fs.fromBufferAttribute(o,r),Bs.fromBufferAttribute(o,s),i.distanceSqToSegment(Fs,Bs,Ea,rl)>n)return;Ea.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(Ea);if(!(l<t.near||l>t.far))return{distance:l,point:rl.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var sl=new C,al=new C,Ai=class extends dn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)sl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sl.distanceTo(al);e.setAttribute("lineDistance",new be(i,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ef=class extends dn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kc=class extends Ot{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ol=new He,Ya=new Rr,os=new Dt,ls=new C,tf=class extends lt{constructor(e=new Ze,t=new kc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(n),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;ol.copy(n).invert(),Ya.copy(e.ray).applyMatrix4(ol);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let u=h,f=d;u<f;u++){const m=l.getX(u);ls.fromBufferAttribute(c,m),ll(ls,m,o,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let u=h,f=d;u<f;u++)ls.fromBufferAttribute(c,u),ll(ls,u,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function ll(e,t,i,n,r,s,a){const o=Ya.distanceSqToPoint(e);if(o<i){const l=new C;Ya.closestPointToPoint(e,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var nf=class extends Rt{constructor(e,t,i,n,r=St,s=St,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function h(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},K0=class extends nf{constructor(e,t,i,n,r,s,a,o){super({},e,t,i,n,r,s,a,o),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},$0=class extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ct,this.minFilter=Ct,this.generateMipmaps=!1,this.needsUpdate=!0}},co=class extends Rt{constructor(e,t,i,n,r,s,a,o,l,c,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Q0=class extends co{constructor(e,t,i,n,r,s){super(e,t,i,r,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Zt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},j0=class extends co{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Hs=class extends Rt{constructor(e=[],t=301,i,n,r,s,a,o,l,c){super(e,t,i,n,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ey=class extends Rt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ty=class extends Rt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const c=e?e.parentNode:null;c!==null&&"requestPaint"in c&&(c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Zn=class extends Rt{constructor(e,t,i=Bi,n,r,s,a=Ct,o=Ct,l,c=Sr,h=1){if(c!==1026&&c!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:h},n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new an(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rf=class extends Zn{constructor(e,t=Bi,i=301,n,r,s=Ct,a=Ct,o,l=Sr){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,a,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gc=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ws=class Hc extends Ze{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,i,t,a,s,0),m("z","y","x",1,-1,n,i,-t,a,s,1),m("x","z","y",1,1,t,n,i,r,a,2),m("x","z","y",1,-1,t,n,-i,r,a,3),m("x","y","z",1,-1,t,i,n,r,s,4),m("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function m(_,g,p,S,M,v,E,w,R,y,T){const U=v/R,I=E/y,F=v/2,X=E/2,k=w/2,G=R+1,q=y+1;let z=0,ee=0;const ie=new C;for(let ne=0;ne<q;ne++){const ge=ne*I-X;for(let we=0;we<G;we++)ie[_]=(we*U-F)*S,ie[g]=ge*M,ie[p]=k,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[p]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(we/R),d.push(1-ne/y),z+=1}for(let ne=0;ne<y;ne++)for(let ge=0;ge<R;ge++){const we=u+ge+G*ne,st=u+ge+G*(ne+1),at=u+(ge+1)+G*(ne+1),Y=u+(ge+1)+G*ne;l.push(we,st,Y),l.push(st,at,Y),ee+=6}o.addGroup(f,ee,T),f+=ee,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sf=class Wc extends Ze{constructor(t=1,i=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:n,radialSegments:r,heightSegments:s},i=Math.max(0,i),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=i/2,d=Math.PI/2*t,u=i,f=2*d+u,m=n*2+s,_=r+1,g=new C,p=new C;for(let S=0;S<=m;S++){let M=0,v=0,E=0,w=0;if(S<=n){const T=S/n,U=T*Math.PI/2;v=-h-t*Math.cos(U),E=t*Math.sin(U),w=-t*Math.cos(U),M=T*d}else if(S<=n+s){const T=(S-n)/s;v=-h+T*i,E=t,w=0,M=d+T*u}else{const T=(S-n-s)/n,U=T*Math.PI/2;v=h+t*Math.sin(U),E=t*Math.cos(U),w=t*Math.sin(U),M=d+u+T*d}const R=Math.max(0,Math.min(1,M/f));let y=0;S===0?y=.5/r:S===m&&(y=-.5/r);for(let T=0;T<=r;T++){const U=T/r,I=U*Math.PI*2,F=Math.sin(I),X=Math.cos(I);p.x=-E*X,p.y=v,p.z=E*F,o.push(p.x,p.y,p.z),g.set(-E*X,w,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(U+y,R)}if(S>0){const T=(S-1)*_;for(let U=0;U<r;U++){const I=T+U,F=T+U+1,X=S*_+U,k=S*_+U+1;a.push(I,F,X),a.push(F,k,X)}}}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},af=class Xc extends Ze{constructor(t=1,i=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:r},i=Math.max(3,i);const s=[],a=[],o=[],l=[],c=new C,h=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){const f=n+d/i*r;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qc=class Yc extends Ze{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;S(),a===!1&&(t>0&&M(!0),i>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function S(){const v=new C,E=new C;let w=0;const R=(i-t)/n;for(let y=0;y<=s;y++){const T=[],U=y/s,I=U*(i-t)+t;for(let F=0;F<=r;F++){const X=F/r,k=X*l+o,G=Math.sin(k),q=Math.cos(k);E.x=I*G,E.y=-U*n+g,E.z=I*q,d.push(E.x,E.y,E.z),v.set(G,R,q).normalize(),u.push(v.x,v.y,v.z),f.push(X,1-U),T.push(m++)}_.push(T)}for(let y=0;y<r;y++)for(let T=0;T<s;T++){const U=_[T][y],I=_[T+1][y],F=_[T+1][y+1],X=_[T][y+1];(t>0||T!==0)&&(h.push(U,I,X),w+=3),(i>0||T!==s-1)&&(h.push(I,F,X),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const E=m,w=new $,R=new C;let y=0;const T=v===!0?t:i,U=v===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,g*U,0),u.push(0,U,0),f.push(.5,.5),m++;const I=m;for(let F=0;F<=r;F++){const X=F/r*l+o,k=Math.cos(X),G=Math.sin(X);R.x=T*G,R.y=g*U,R.z=T*k,d.push(R.x,R.y,R.z),u.push(0,U,0),w.x=k*.5+.5,w.y=G*.5*U+.5,f.push(w.x,w.y),m++}for(let F=0;F<r;F++){const X=E+F,k=I+F;v===!0?h.push(k,k+1,X):h.push(k+1,k,X),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zc=class Jc extends qc{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Jc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ir=class Kc extends Ze{constructor(t=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new C,v=new C,E=new C;for(let w=0;w<i.length;w+=3)f(i[w+0],M),f(i[w+1],v),f(i[w+2],E),l(M,v,E,S)}function l(S,M,v,E){const w=E+1,R=[];for(let y=0;y<=w;y++){R[y]=[];const T=S.clone().lerp(v,y/w),U=M.clone().lerp(v,y/w),I=w-y;for(let F=0;F<=I;F++)F===0&&y===w?R[y][F]=T:R[y][F]=T.clone().lerp(U,F/I)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){const U=Math.floor(T/2);T%2===0?(u(R[y][U+1]),u(R[y+1][U]),u(R[y][U])):(u(R[y][U+1]),u(R[y+1][U+1]),u(R[y+1][U]))}}function c(S){const M=new C;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(S),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){const S=new C;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];const v=g(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(v,1-E)}m(),d()}function d(){for(let S=0;S<a.length;S+=6){const M=a[S+0],v=a[S+2],E=a[S+4];Math.max(M,v,E)>.9&&Math.min(M,v,E)<.1&&(M<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function f(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const S=new C,M=new C,v=new C,E=new C,w=new $,R=new $,y=new $;for(let T=0,U=0;T<s.length;T+=9,U+=6){S.set(s[T+0],s[T+1],s[T+2]),M.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),w.set(a[U+0],a[U+1]),R.set(a[U+2],a[U+3]),y.set(a[U+4],a[U+5]),E.copy(S).add(M).add(v).divideScalar(3);const I=g(E);_(w,U+0,S,I),_(R,U+2,M,I),_(y,U+4,v,I)}}function _(S,M,v,E){E<0&&S.x===1&&(a[M]=S.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.vertices,t.indices,t.radius,t.detail)}},of=class $c extends Ir{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new $c(t.radius,t.detail)}},cs=new C,hs=new C,wa=new C,us=new sn,lf=class extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(cn*t),r=e.getIndex(),s=e.getAttribute("position"),a=r?r.count:s.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},d=[];for(let u=0;u<a;u+=3){r?(o[0]=r.getX(u),o[1]=r.getX(u+1),o[2]=r.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);const{a:f,b:m,c:_}=us;if(f.fromBufferAttribute(s,o[0]),m.fromBufferAttribute(s,o[1]),_.fromBufferAttribute(s,o[2]),us.getNormal(wa),c[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,c[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let g=0;g<3;g++){const p=(g+1)%3,S=c[g],M=c[p],v=us[l[g]],E=us[l[p]],w=`${S}_${M}`,R=`${M}_${S}`;R in h&&h[R]?(wa.dot(h[R].normal)<=n&&(d.push(v.x,v.y,v.z),d.push(E.x,E.y,E.z)),h[R]=null):w in h||(h[w]={index0:o[g],index1:o[p],normal:wa.clone()})}}for(const u in h)if(h[u]){const{index0:f,index1:m}=h[u];cs.fromBufferAttribute(s,f),hs.fromBufferAttribute(s,m),d.push(cs.x,cs.y,cs.z),d.push(hs.x,hs.y,hs.z)}this.setAttribute("position",new be(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let a=0,o=r-1,l;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),l=i[n]-s,l<0)a=n+1;else if(l>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const c=i[n],h=i[n+1]-c,d=(s-c)/h;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new $:new C);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,n=[],r=[],s=[],a=new C,o=new He;for(let u=0;u<=e;u++){const f=u/e;n[u]=this.getTangentAt(f,new C)}r[0]=new C,s[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Ve(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,f))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(Ve(r[0].dot(r[e]),-1,1));u/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(n[f],u*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ho=class extends pi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new $){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cf=class extends ho{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function uo(){let e=0,t=0,i=0,n=0;function r(s,a,o,l){e=s,t=o,i=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return e+t*s+i*a+n*o}}}var cl=new C,hl=new C,Ca=new uo,Ra=new uo,Ia=new uo,hf=class extends pi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=n[(a-1)%r]:(hl.subVectors(n[0],n[1]).add(n[0]),l=hl);const h=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(cl.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(c),u);m<1e-4&&(m=1),f<1e-4&&(f=m),_<1e-4&&(_=m),Ca.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,m,_),Ra.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,m,_),Ia.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,m,_)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Ra.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Ia.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(Ca.calc(o),Ra.calc(o),Ia.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ul(e,t,i,n,r){const s=(n-t)*.5,a=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*n+s+a)*l+(-3*i+3*n-2*s-a)*o+s*e+i}function uf(e,t){const i=1-e;return i*i*t}function df(e,t){return 2*(1-e)*e*t}function ff(e,t){return e*e*t}function xr(e,t,i,n){return uf(e,t)+df(e,i)+ff(e,n)}function pf(e,t){const i=1-e;return i*i*i*t}function mf(e,t){const i=1-e;return 3*i*i*e*t}function gf(e,t){return 3*(1-e)*e*e*t}function vf(e,t){return e*e*e*t}function Mr(e,t,i,n,r){return pf(e,t)+mf(e,i)+gf(e,n)+vf(e,r)}var Qc=class extends pi{constructor(e=new $,t=new $,i=new $,n=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new $){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Mr(e,n.x,r.x,s.x,a.x),Mr(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_f=class extends pi{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Mr(e,n.x,r.x,s.x,a.x),Mr(e,n.y,r.y,s.y,a.y),Mr(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jc=class extends pi{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yf=class extends pi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends pi{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(xr(e,n.x,r.x,s.x),xr(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends pi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(xr(e,n.x,r.x,s.x),xr(e,n.y,r.y,s.y),xr(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ih=class extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(ul(a,o.x,l.x,c.x,h.x),ul(a,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new $().fromArray(n))}return this}},zs=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:hf,CubicBezierCurve:Qc,CubicBezierCurve3:_f,EllipseCurve:ho,LineCurve:jc,LineCurve3:yf,QuadraticBezierCurve:eh,QuadraticBezierCurve3:th,SplineCurve:ih}),xf=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zs[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let l=0;l<o.length;l++){const c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new zs[n.type]().fromJSON(n))}return this}},Vs=class extends xf{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new jc(this.currentPoint.clone(),new $(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new eh(this.currentPoint.clone(),new $(e,t),new $(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){const a=new Qc(this.currentPoint.clone(),new $(e,t),new $(i,n),new $(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){const l=new ho(e,t,i,n,r,s,a,o);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xs=class extends Vs{constructor(e){super(e),this.uuid=Jt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Vs().fromJSON(n))}return this}};function Mf(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let s=nh(e,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Ef(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let u=i;u<r;u+=i){const f=e[u],m=e[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ar(s,a,i,o,l,c,0),a}function nh(e,t,i,n,r){let s;if(r===Ff(e,t,i,n)>0)for(let a=t;a<i;a+=n)s=dl(a/n|0,e[a],e[a+1],s);else for(let a=i-n;a>=t;a-=n)s=dl(a/n|0,e[a],e[a+1],s);return s&&Jn(s,s.next)&&(wr(s),s=s.next),s}function fn(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(Jn(i,i.next)||gt(i.prev,i,i.next)===0)){if(wr(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Ar(e,t,i,n,r,s,a){if(!e)return;!a&&s&&Pf(e,n,r,s);let o=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?bf(e,n,r,s):Sf(e)){t.push(l.i,e.i,c.i),wr(e),e=c.next,o=c.next;continue}if(e=c,e===o){a?a===1?(e=Tf(fn(e),t),Ar(e,t,i,n,r,s,2)):a===2&&Af(e,t,i,n,r,s):Ar(fn(e),t,i,n,r,s,1);break}}}function Sf(e){const t=e.prev,i=e,n=e.next;if(gt(t,i,n)>=0)return!1;const r=t.x,s=i.x,a=n.x,o=t.y,l=i.y,c=n.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),f=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&vr(r,o,s,l,a,c,m.x,m.y)&&gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bf(e,t,i,n){const r=e.prev,s=e,a=e.next;if(gt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),p=Za(f,m,t,i,n),S=Za(_,g,t,i,n);let M=e.prevZ,v=e.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&vr(o,h,l,d,c,u,M.x,M.y)&&gt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&vr(o,h,l,d,c,u,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&vr(o,h,l,d,c,u,M.x,M.y)&&gt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&vr(o,h,l,d,c,u,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tf(e,t){let i=e;do{const n=i.prev,r=i.next.next;!Jn(n,r)&&sh(n,i,i.next,r)&&Er(n,r)&&Er(r,n)&&(t.push(n.i,i.i,r.i),wr(i),wr(i.next),i=e=r),i=i.next}while(i!==e);return fn(i)}function Af(e,t,i,n,r,s){let a=e;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nf(a,o)){let l=ah(a,o);a=fn(a,a.next),l=fn(l,l.next),Ar(a,t,i,n,r,s,0),Ar(l,t,i,n,r,s,0);return}o=o.next}a=a.next}while(a!==e)}function Ef(e,t,i,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=nh(e,t[s]*n,s<a-1?t[s+1]*n:e.length,n,!1);o===o.next&&(o.steiner=!0),r.push(Uf(o))}r.sort(wf);for(let s=0;s<r.length;s++)i=Cf(r[s],i);return i}function wf(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),i}function Cf(e,t){const i=Rf(e,t);if(!i)return t;const n=ah(i,e);return fn(n,n.next),fn(i,i.next)}function Rf(e,t){let i=t;const n=e.x,r=e.y;let s=-1/0,a;if(Jn(e,i))return i;do{if(Jn(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;i=a;do{if(n>=i.x&&i.x>=l&&n!==i.x&&rh(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){const d=Math.abs(r-i.y)/(n-i.x);Er(i,e)&&(d<h||d===h&&(i.x>a.x||i.x===a.x&&If(a,i)))&&(a=i,h=d)}i=i.next}while(i!==o);return a}function If(e,t){return gt(e.prev,e,t.prev)<0&&gt(t.next,e,e.next)<0}function Pf(e,t,i,n){let r=e;do r.z===0&&(r.z=Za(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Lf(r)}function Lf(e){let t,i=1;do{let n=e,r;e=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<i&&(o++,a=a.nextZ,!!a);c++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=a}s.nextZ=null,i*=2}while(t>1);return e}function Za(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Uf(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function rh(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function vr(e,t,i,n,r,s,a,o){return!(e===a&&t===o)&&rh(e,t,i,n,r,s,a,o)}function Nf(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Df(e,t)&&(Er(e,t)&&Er(t,e)&&Of(e,t)&&(gt(e.prev,e,t.prev)||gt(e,t.prev,t))||Jn(e,t)&&gt(e.prev,e,e.next)>0&&gt(t.prev,t,t.next)>0)}function gt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Jn(e,t){return e.x===t.x&&e.y===t.y}function sh(e,t,i,n){const r=fs(gt(e,t,i)),s=fs(gt(e,t,n)),a=fs(gt(i,n,e)),o=fs(gt(i,n,t));return!!(r!==s&&a!==o||r===0&&ds(e,i,t)||s===0&&ds(e,n,t)||a===0&&ds(i,e,n)||o===0&&ds(i,t,n))}function ds(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function fs(e){return e>0?1:e<0?-1:0}function Df(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&sh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Er(e,t){return gt(e.prev,e,e.next)<0?gt(e,t,e.next)>=0&&gt(e,e.prev,t)>=0:gt(e,t,e.prev)<0||gt(e,e.next,t)<0}function Of(e,t){let i=e,n=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function ah(e,t){const i=Ja(e.i,e.x,e.y),n=Ja(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function dl(e,t,i,n){const r=Ja(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function wr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ja(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ff(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}var Bf=class{static triangulate(e,t,i=2){return Mf(e,t,i)}},Di=class oh{static area(t){const i=t.length;let n=0;for(let r=i-1,s=0;s<i;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return oh.area(t)<0}static triangulateShape(t,i){const n=[],r=[],s=[];fl(t),pl(n,t);let a=t.length;i.forEach(fl);for(let l=0;l<i.length;l++)r.push(a),a+=i[l].length,pl(n,i[l]);const o=Bf.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function fl(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function pl(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var zf=class lh extends Ze{constructor(t=new Xs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new be(r,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals();function a(o){const l=[],c=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1;let u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,m=i.bevelSize!==void 0?i.bevelSize:f-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3;const p=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:Vf;let M,v=!1,E,w,R,y;if(p){M=p.getSpacedPoints(h),v=!0,u=!1;const J=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,J),w=new C,R=new C,y=new C}u||(g=0,f=0,m=0,_=0);const T=o.extractPoints(c);let U=T.shape;const I=T.holes;if(!Di.isClockWise(U)){U=U.reverse();for(let J=0,re=I.length;J<re;J++){const ce=I[J];Di.isClockWise(ce)&&(I[J]=ce.reverse())}}function F(J){const ce=10000000000000001e-36;let _e=J[0];for(let ye=1;ye<=J.length;ye++){const Le=ye%J.length,Ue=J[Le],We=Ue.x-_e.x,Xe=Ue.y-_e.y,P=We*We+Xe*Xe,mt=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(_e.x),Math.abs(_e.y));if(P<=ce*mt*mt){J.splice(Le,1),ye--;continue}_e=Ue}}F(U),I.forEach(F);const X=I.length,k=U;for(let J=0;J<X;J++){const re=I[J];U=U.concat(re)}function G(J,re,ce){return re||Pe("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(re,ce)}const q=U.length;function z(J,re,ce){let _e,ye,Le;const Ue=J.x-re.x,We=J.y-re.y,Xe=ce.x-J.x,P=ce.y-J.y,mt=Ue*Ue+We*We,tt=Ue*P-We*Xe;if(Math.abs(tt)>Number.EPSILON){const Qe=Math.sqrt(mt),A=Math.sqrt(Xe*Xe+P*P),x=re.x-We/Qe,L=re.y+Ue/Qe,H=ce.x-P/A,K=ce.y+Xe/A,se=((H-x)*P-(K-L)*Xe)/(Ue*P-We*Xe);_e=x+Ue*se-J.x,ye=L+We*se-J.y;const ue=_e*_e+ye*ye;if(ue<=2)return new $(_e,ye);Le=Math.sqrt(ue/2)}else{let Qe=!1;Ue>Number.EPSILON?Xe>Number.EPSILON&&(Qe=!0):Ue<-Number.EPSILON?Xe<-Number.EPSILON&&(Qe=!0):Math.sign(We)===Math.sign(P)&&(Qe=!0),Qe?(_e=-We,ye=Ue,Le=Math.sqrt(mt)):(_e=Ue,ye=We,Le=Math.sqrt(mt/2))}return new $(_e/Le,ye/Le)}const ee=[];for(let J=0,re=k.length,ce=re-1,_e=J+1;J<re;J++,ce++,_e++)ce===re&&(ce=0),_e===re&&(_e=0),ee[J]=z(k[J],k[ce],k[_e]);const ie=[];let ne,ge=ee.concat();for(let J=0,re=X;J<re;J++){const ce=I[J];ne=[];for(let _e=0,ye=ce.length,Le=ye-1,Ue=_e+1;_e<ye;_e++,Le++,Ue++)Le===ye&&(Le=0),Ue===ye&&(Ue=0),ne[_e]=z(ce[_e],ce[Le],ce[Ue]);ie.push(ne),ge=ge.concat(ne)}let we;if(g===0)we=Di.triangulateShape(k,I);else{const J=[],re=[];for(let ce=0;ce<g;ce++){const _e=ce/g,ye=f*Math.cos(_e*Math.PI/2),Le=m*Math.sin(_e*Math.PI/2)+_;for(let Ue=0,We=k.length;Ue<We;Ue++){const Xe=G(k[Ue],ee[Ue],Le);de(Xe.x,Xe.y,-ye),_e===0&&J.push(Xe)}for(let Ue=0,We=X;Ue<We;Ue++){const Xe=I[Ue];ne=ie[Ue];const P=[];for(let mt=0,tt=Xe.length;mt<tt;mt++){const Qe=G(Xe[mt],ne[mt],Le);de(Qe.x,Qe.y,-ye),_e===0&&P.push(Qe)}_e===0&&re.push(P)}}we=Di.triangulateShape(J,re)}const st=we.length,at=m+_;for(let J=0;J<q;J++){const re=u?G(U[J],ge[J],at):U[J];v?(R.copy(E.normals[0]).multiplyScalar(re.x),w.copy(E.binormals[0]).multiplyScalar(re.y),y.copy(M[0]).add(R).add(w),de(y.x,y.y,y.z)):de(re.x,re.y,0)}for(let J=1;J<=h;J++)for(let re=0;re<q;re++){const ce=u?G(U[re],ge[re],at):U[re];v?(R.copy(E.normals[J]).multiplyScalar(ce.x),w.copy(E.binormals[J]).multiplyScalar(ce.y),y.copy(M[J]).add(R).add(w),de(y.x,y.y,y.z)):de(ce.x,ce.y,d/h*J)}for(let J=g-1;J>=0;J--){const re=J/g,ce=f*Math.cos(re*Math.PI/2),_e=m*Math.sin(re*Math.PI/2)+_;for(let ye=0,Le=k.length;ye<Le;ye++){const Ue=G(k[ye],ee[ye],_e);de(Ue.x,Ue.y,d+ce)}for(let ye=0,Le=I.length;ye<Le;ye++){const Ue=I[ye];ne=ie[ye];for(let We=0,Xe=Ue.length;We<Xe;We++){const P=G(Ue[We],ne[We],_e);v?de(P.x,P.y+M[h-1].y,M[h-1].x+ce):de(P.x,P.y,d+ce)}}}Y(),oe();function Y(){const J=r.length/3;if(u){let re=0,ce=q*re;for(let _e=0;_e<st;_e++){const ye=we[_e];De(ye[2]+ce,ye[1]+ce,ye[0]+ce)}re=h+g*2,ce=q*re;for(let _e=0;_e<st;_e++){const ye=we[_e];De(ye[0]+ce,ye[1]+ce,ye[2]+ce)}}else{for(let re=0;re<st;re++){const ce=we[re];De(ce[2],ce[1],ce[0])}for(let re=0;re<st;re++){const ce=we[re];De(ce[0]+q*h,ce[1]+q*h,ce[2]+q*h)}}n.addGroup(J,r.length/3-J,0)}function oe(){const J=r.length/3;let re=0;ve(k,re),re+=k.length;for(let ce=0,_e=I.length;ce<_e;ce++){const ye=I[ce];ve(ye,re),re+=ye.length}n.addGroup(J,r.length/3-J,1)}function ve(J,re){let ce=J.length;for(;--ce>=0;){const _e=ce;let ye=ce-1;ye<0&&(ye=J.length-1);for(let Le=0,Ue=h+g*2;Le<Ue;Le++){const We=q*Le,Xe=q*(Le+1);Be(re+_e+We,re+ye+We,re+ye+Xe,re+_e+Xe)}}}function de(J,re,ce){l.push(J),l.push(re),l.push(ce)}function De(J,re,ce){Ne(J),Ne(re),Ne(ce);const _e=r.length/3,ye=S.generateTopUV(n,r,_e-3,_e-2,_e-1);Je(ye[0]),Je(ye[1]),Je(ye[2])}function Be(J,re,ce,_e){Ne(J),Ne(re),Ne(_e),Ne(re),Ne(ce),Ne(_e);const ye=r.length/3,Le=S.generateSideWallUV(n,r,ye-6,ye-3,ye-2,ye-1);Je(Le[0]),Je(Le[1]),Je(Le[3]),Je(Le[1]),Je(Le[2]),Je(Le[3])}function Ne(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Je(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,n=this.parameters.options;return kf(i,n,t)}static fromJSON(t,i){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=i[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new zs[r.type]().fromJSON(r)),new lh(n,t.options)}},Vf={generateTopUV:function(e,t,i,n,r){const s=t[i*3],a=t[i*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new $(s,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){const a=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],f=t[r*3+1],m=t[r*3+2],_=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new $(a,1-l),new $(c,1-d),new $(u,1-m),new $(_,1-p)]:[new $(o,1-l),new $(h,1-d),new $(f,1-m),new $(g,1-p)]}};function kf(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){const s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Gf=class ch extends Ir{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new ch(t.radius,t.detail)}},Hf=class hh extends Ze{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],i=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:r},i=Math.floor(i),r=Ve(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/i,d=new C,u=new $,f=new C,m=new C,_=new C;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let S=0;S<=i;S++){const M=n+S*h*r,v=Math.sin(M),E=Math.cos(M);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*E,a.push(d.x,d.y,d.z),u.x=S/i,u.y=w/(t.length-1),o.push(u.x,u.y);const R=l[3*w+0]*v,y=l[3*w+1],T=l[3*w+0]*E;c.push(R,y,T)}}for(let S=0;S<i;S++)for(let M=0;M<t.length-1;M++){const v=M+S*t.length,E=v,w=v+t.length,R=v+t.length+1,y=v+1;s.push(E,w,y),s.push(R,y,w)}this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.points,t.segments,t.phiStart,t.phiLength)}},uh=class dh extends Ir{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new dh(t.radius,t.detail)}},fo=class fh extends Ze{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=t/o,u=i/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const S=p*u-a;for(let M=0;M<c;M++){const v=M*d-s;m.push(v,-S,0),_.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const M=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),w=S+1+c*p;f.push(M,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fh(t.width,t.height,t.widthSegments,t.heightSegments)}},Wf=class ph extends Ze{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=t;const u=(i-t)/r,f=new C,m=new $;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/i+1)/2,m.y=(f.y/i+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<r;_++){const g=_*(n+1);for(let p=0;p<n;p++){const S=p+g,M=S,v=S+n+1,E=S+n+2,w=S+1;o.push(M,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Xf=class mh extends Ze{constructor(t=new Xs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2));function c(h){const d=r.length/3,u=h.extractPoints(i);let f=u.shape;const m=u.holes;Di.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const S=m[g];Di.isClockWise(S)===!0&&(m[g]=S.reverse())}const _=Di.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){const S=f[g];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let g=0,p=_.length;g<p;g++){const S=_[g],M=S[0]+d,v=S[1]+d,E=S[2]+d;n.push(M,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return qf(i,t)}static fromJSON(t,i){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=i[t.shapes[r]];n.push(a)}return new mh(n,t.curveSegments)}};function qf(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){const r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var gh=class vh extends Ze{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const S=[],M=p/n,v=a+M*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E);let R=0;p===0&&a===0?R=.5/i:p===n&&l===Math.PI&&(R=-.5/i);for(let y=0;y<=i;y++){const T=y/i,U=r+T*s;d.x=-w*Math.cos(U),d.y=E,d.z=w*Math.sin(U),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+R,1-M),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<i;S++){const M=h[p][S+1],v=h[p][S],E=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(M,v,w),(p!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Yf=class _h extends Ir{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new _h(t.radius,t.detail)}},Zf=class yh extends Ze{constructor(t=1,i=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],d=[],u=new C,f=new C,m=new C;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let p=0;p<=r;p++){const S=p/r*s;f.x=(t+i*Math.cos(g))*Math.cos(S),f.y=(t+i*Math.cos(g))*Math.sin(S),f.z=i*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/r),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=r;g++){const p=(r+1)*_+g-1,S=(r+1)*(_-1)+g-1,M=(r+1)*(_-1)+g,v=(r+1)*_+g;l.push(p,S,v),l.push(S,M,v)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Jf=class xh extends Ze{constructor(t=1,i=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,m=new C,_=new C,g=new C,p=new C;for(let M=0;M<=n;++M){const v=M/n*s*Math.PI*2;S(v,s,a,t,f),S(v+.01,s,a,t,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let E=0;E<=r;++E){const w=E/r*Math.PI*2,R=-i*Math.cos(w),y=i*Math.sin(w);d.x=f.x+(R*p.x+y*_.x),d.y=f.y+(R*p.y+y*_.y),d.z=f.z+(R*p.z+y*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(E/r)}}for(let M=1;M<=n;M++)for(let v=1;v<=r;v++){const E=(r+1)*(M-1)+(v-1),w=(r+1)*M+(v-1),R=(r+1)*M+v,y=(r+1)*(M-1)+v;o.push(E,w,y),o.push(w,R,y)}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2));function S(M,v,E,w,R){const y=Math.cos(M),T=Math.sin(M),U=E/v*M,I=Math.cos(U);R.x=w*(2+I)*.5*y,R.y=w*(2+I)*T*.5,R.z=w*Math.sin(U)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Kf=class Mh extends Ze{constructor(t=new th(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new $;let h=new C;const d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function _(){for(let M=0;M<i;M++)g(M);g(s===!1?i:0),S(),p()}function g(M){h=t.getPointAt(M/i,h);const v=a.normals[M],E=a.binormals[M];for(let w=0;w<=r;w++){const R=w/r*Math.PI*2,y=Math.sin(R),T=-Math.cos(R);l.x=T*v.x+y*E.x,l.y=T*v.y+y*E.y,l.z=T*v.z+y*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=i;M++)for(let v=1;v<=r;v++){const E=(r+1)*(M-1)+(v-1),w=(r+1)*M+(v-1),R=(r+1)*M+v,y=(r+1)*(M-1)+v;m.push(E,w,y),m.push(w,R,y)}}function S(){for(let M=0;M<=i;M++)for(let v=0;v<=r;v++)c.x=M/i,c.y=v/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mh(new zs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},$f=class extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new C,r=new C;if(e.index!==null){const s=e.attributes.position,a=e.index;let o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){const h=o[l],d=h.start,u=h.count;for(let f=d,m=d+u;f<m;f+=3)for(let _=0;_<3;_++){const g=a.getX(f+_),p=a.getX(f+(_+1)%3);n.fromBufferAttribute(s,g),r.fromBufferAttribute(s,p),ml(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){const c=3*a+l,h=3*a+(l+1)%3;n.fromBufferAttribute(s,c),r.fromBufferAttribute(s,h),ml(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ml(e,t,i){const n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(n)===!0||i.has(r)===!0?!1:(i.add(n),i.add(r),!0)}var gl=Object.freeze({__proto__:null,BoxGeometry:Ws,CapsuleGeometry:sf,CircleGeometry:af,ConeGeometry:Zc,CylinderGeometry:qc,DodecahedronGeometry:of,EdgesGeometry:lf,ExtrudeGeometry:zf,IcosahedronGeometry:Gf,LatheGeometry:Hf,OctahedronGeometry:uh,PlaneGeometry:fo,PolyhedronGeometry:Ir,RingGeometry:Wf,ShapeGeometry:Xf,SphereGeometry:gh,TetrahedronGeometry:Yf,TorusGeometry:Zf,TorusKnotGeometry:Jf,TubeGeometry:Kf,WireframeGeometry:$f}),Qf=class extends Ot{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Kn(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(vl(r))r.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(vl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function zt(e){const t={};for(let i=0;i<e.length;i++){const n=Kn(e[i]);for(const r in n)t[r]=n[r]}return t}function vl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function jf(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Sh(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}var ep={clone:Kn,merge:zt},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Ot{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(n.value);break;case"v2":this.uniforms[i].value=new $().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new He().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bh=class extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Th=class extends Ot{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},np=class extends Th{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},rp=class extends Ot{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sp=class extends Ot{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ap=class extends Ot{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},op=class extends Ot{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ah=class extends Ot{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends Ot{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lp=class extends Ot{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},cp=class extends Xt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function on(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function wh(e){function t(r,s){return e[r]-e[s]}const i=e.length,n=new Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function Ka(e,t,i){const n=e.length,r=new e.constructor(n);for(let s=0,a=0;a!==n;++s){const o=i[s]*t;for(let l=0;l!==t;++l)r[a++]=e[o+l]}return r}function Ch(e,t,i,n){let r=1,s=e[0];for(;s!==void 0&&s[n]===void 0;)s=e[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),i.push(...a)),s=e[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(i,i.length)),s=e[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),i.push(a)),s=e[r++];while(s!==void 0)}function hp(e,t,i,n,r=30){const s=e.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*r;if(!(m<i||m>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=on(d,c.times.constructor),c.values=on(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function up(e,t=0,i=e,n=30){n<=0&&(n=30);const r=i.tracks.length,s=t/n;for(let a=0;a<r;++a){const o=i.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=e.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const m=o.times.length-1;let _;if(s<=o.times[0]){const p=h,S=d-h;_=o.values.slice(p,S)}else if(s>=o.times[m]){const p=m*d+h,S=p+d-h;_=o.values.slice(p,S)}else{const p=o.createInterpolant(),S=h,M=d-h;p.evaluate(s),_=p.resultBuffer.slice(S,M)}l==="quaternion"&&new Wt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const S=p*f+u;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,S,_,0,c.values,S);else{const M=f-u*2;for(let v=0;v<M;++v)c.values[S+v]-=_[v]}}}return e.blendMode=xc,e}var iy=class{static convertArray(e,t){return on(e,t)}static isTypedArray(e){return Mc(e)}static getKeyframeOrder(e){return wh(e)}static sortedArray(e,t,i){return Ka(e,t,i)}static flattenJSON(e,t,i,n){Ch(e,t,i,n)}static subclip(e,t,i,n,r=30){return hp(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return up(e,t,i,n)}},Pr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break i}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break i}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dp=class extends Pr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kn,endingEnd:kn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case Gn:r=e,a=2*t-i;break;case Ls:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Gn:s=e,o=2*i-t;break;case Ls:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(n-t),m=f*f,_=m*f,g=-d*_+2*d*m-d*f,p=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*f+1,S=(-1-u)*_+(1.5+u)*m+.5*f,M=u*_-u*m;for(let v=0;v!==a;++v)r[v]=g*s[c+v]+p*s[l+v]+S*s[o+v]+M*s[h+v];return r}},Rh=class extends Pr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(i-t)/(n-t),h=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*h+s[o+d]*c;return r}},fp=class extends Pr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},pp=class extends Pr{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){const f=(i-t)/(n-t),m=1-f;for(let _=0;_!==a;++_)r[_]=s[l+_]*m+s[o+_]*f;return r}const d=a*2,u=e-1;for(let f=0;f!==a;++f){const m=s[l+f],_=s[o+f],g=u*d+f*2,p=h[g],S=h[g+1],M=e*d+f*2,v=c[M],E=c[M+1];let w=(i-t)/(n-t),R,y,T,U,I;for(let F=0;F<8;F++){R=w*w,y=R*w,T=1-w,U=T*T,I=U*T;const X=I*t+3*U*w*p+3*T*R*v+y*n-i;if(Math.abs(X)<1e-10)break;const k=3*U*(p-t)+6*T*w*(v-p)+3*R*(n-v);if(Math.abs(k)<1e-10)break;w=w-X/k,w=Math.max(0,Math.min(1,w))}r[f]=I*m+3*U*w*S+3*T*R*E+y*_}return r}},oi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=on(t,this.TimeBufferType),this.values=on(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:on(e.times,Array),values:on(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new pp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case $s:t=this.InterpolantFactoryMethodSmooth;break;case Co:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return he("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return $s;case this.InterpolantFactoryMethodBezier:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&Mc(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$s,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=e[a];if(l!==e[a+1]&&(a!==1||l!==e[0]))if(n)o=!0;else{const c=a*i,h=c-i,d=c+i;for(let u=0;u!==i;++u){const f=t[c+u];if(f!==t[h+u]||f!==t[d+u]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const c=a*i,h=s*i;for(let d=0;d!==i;++d)t[h+d]=t[c+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Wa;var $n=class extends oi{constructor(e,t,i){super(e,t,i)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ps;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};Ih.prototype.ValueTypeName="color";var po=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};po.prototype.ValueTypeName="number";var mp=class extends Pr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let l=e*a;for(let c=l+a;l!==c;l+=4)Wt.slerpFlat(r,0,s,l-a,s,l,o);return r}},mo=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new mp(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends oi{constructor(e,t,i){super(e,t,i)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ps;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends oi{constructor(e,t,i,n){super(e,t,i,n)}};Ph.prototype.ValueTypeName="vector";var ks=class{constructor(e="",t=-1,i=[],n=io){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Jt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(vp(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(oi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const c=wh(o);o=Ka(o,1,c),l=Ka(l,1,c),!n&&o[0]===0&&(o.push(r),l.push(l[0])),s.push(new po(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.name.match(r);if(c&&c.length>1){const h=c[1];let d=n[h];d||(n[h]=d=[]),d.push(l)}}const s=[];for(const a in n)s.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return s}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gp(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return Ph;case"color":return Ih;case"quaternion":return mo;case"bool":case"boolean":return $n;case"string":return Qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function vp(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=gp(e.type);if(e.times===void 0){const i=[],n=[];Ch(e.keys,i,n,"value"),e.times=i,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var bi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(_l(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!_l(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function _l(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Lh=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){const u=l[h],f=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_p=new Lh,Kt=class{constructor(e){this.manager=e!==void 0?e:_p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},yp=class extends Error{constructor(e,t){super(e),this.response=t}},Hi=class extends Kt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:n});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&he("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Mi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,f=u!==0;let m=0;const _=new ReadableStream({start(g){p();function p(){h.read().then(({done:S,value:M})=>{if(S)g.close();else{m+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:u});for(let E=0,w=c.length;E<w;E++){const R=c[E];R.onProgress&&R.onProgress(v)}g.enqueue(M),p()}},S=>{g.error(S)})}}});return new Response(_)}else throw new yp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{bi.add(`file:${e}`,l);const c=Mi[e];delete Mi[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{const c=Mi[e];if(c===void 0)throw this.manager.itemError(e),l;delete Mi[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ny=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Hi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Pe(o),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=ks.parse(e[i]);t.push(n)}return t}},ry=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=[],a=new co,o=new Hi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(h){o.load(e[h],function(d){const u=r.parse(d,!0);s[h]={width:u.width,height:u.height,format:u.format,mipmaps:u.mipmaps},l+=1,l===6&&(u.mipmapCount===1&&(a.minFilter=St),a.image=s,a.format=u.format,a.needsUpdate=!0,t&&t(a))},i,n)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)c(h);else o.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const u=d.mipmaps.length/d.mipmapCount;for(let f=0;f<u;f++){s[f]={mipmaps:[]};for(let m=0;m<d.mipmapCount;m++)s[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+m]),s[f].format=d.format,s[f].width=d.width,s[f].height=d.height}a.image=s}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=St),a.format=d.format,a.needsUpdate=!0,t&&t(a)},i,n);return a}},Un=new WeakMap,Gs=class extends Kt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=bi.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Un.get(s);h===void 0&&(h=[],Un.set(s,h)),h.push({onLoad:t,onError:n})}return s}const a=br("img");function o(){c(),t&&t(this);const h=Un.get(this)||[];for(let d=0;d<h.length;d++){const u=h[d];u.onLoad&&u.onLoad(this)}Un.delete(this),r.manager.itemEnd(e)}function l(h){c(),n&&n(h),bi.remove(`image:${e}`);const d=Un.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onError&&f.onError(h)}Un.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},sy=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=new Hs;r.colorSpace=jt;const s=new Gs(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(e[l],function(c){r.images[l]=c,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let l=0;l<e.length;++l)o(l);return r}},ay=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new si,a=new Hi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(o){let l;try{l=r.parse(o)}catch(c){n!==void 0?n(c):Pe(c);return}r._applyTexData(s,l),t&&t(s,l)},i,n),s}createDataTexture(e){const t=new si;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Zt,e.wrapT=t.wrapT!==void 0?t.wrapT:Zt,e.magFilter=t.magFilter!==void 0?t.magFilter:St,e.minFilter=t.minFilter!==void 0?t.minFilter:St,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Cr),t.mipmapCount===1&&(e.minFilter=St),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},oy=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=new Rt,s=new Gs(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},mn=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xp=class extends mn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pa=new He,yl=new C,xl=new C,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ps=new C,ms=new Wt,hi=new C,vo=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ps,ms,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ps,ms,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new C,Ml=new $,Sl=new $,Nt=class extends vo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qn*2*Math.atan(Math.tan(cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,Sl),t.subVectors(Sl,Ml)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/l,n*=s.width/o,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mp=class extends go{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=qn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sp=class extends mn{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Mp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bp=class extends go{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Tp=class extends mn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qs=class extends vo{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ap=class extends go{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ep=class extends mn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Ap}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},wp=class extends mn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Cp=class extends mn{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Uh=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*n),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*n)),t.addScaledVector(s[5],1.092548*(n*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(i*r)),t.addScaledVector(s[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],1.023328*n),t.addScaledVector(s[2],1.023328*r),t.addScaledVector(s[3],1.023328*i),t.addScaledVector(s[4],.858086*i*n),t.addScaledVector(s[5],.858086*n*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],.858086*i*r),t.addScaledVector(s[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}},Rp=class extends mn{constructor(e=new Uh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},bl={},Ip=class Nh extends Kt{constructor(t){super(t),this.textures={}}load(t,i,n,r){const s=this,a=new Hi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),s.manager.itemError(t)}},n,r)}parse(t){const i=this.createMaterialFromType(t.type);return i.fromJSON(t,this.textures),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Nh.createMaterialFromType(t)}static createMaterialFromType(t){const i={ShadowMaterial:Qf,SpriteMaterial:Oc,RawShaderMaterial:bh,ShaderMaterial:ai,PointsMaterial:kc,MeshPhysicalMaterial:np,MeshStandardMaterial:Th,MeshPhongMaterial:rp,MeshToonMaterial:sp,MeshNormalMaterial:ap,MeshLambertMaterial:op,MeshDepthMaterial:Ah,MeshDistanceMaterial:Eh,MeshBasicMaterial:pn,MeshMatcapMaterial:lp,LineDashedMaterial:cp,LineBasicMaterial:Xt,Material:Ot,...bl}[t];let n;return i===void 0?(ln(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),n=new Ot):n=new i,n}static registerMaterial(t,i){bl[t]=i}},Tl=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Pp=class extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Lp=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Hi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Pe(o),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(d,u){if(t[u]!==void 0)return t[u];const f=d.interleavedBuffers[u],m=r(d,f.buffer),_=Hn(f.type,m),g=new lo(_,f.stride);return g.uuid=f.uuid,t[u]=g,g}function r(d,u){if(i[u]!==void 0)return i[u];const f=d.arrayBuffers[u],m=new Uint32Array(f).buffer;return i[u]=m,m}const s=e.isInstancedBufferGeometry?new Pp:new Ze,a=e.data.index;if(a!==void 0){const d=Hn(a.type,a.array);s.setIndex(new ht(d,1))}const o=e.data.attributes;for(const d in o){const u=o[d];let f;if(u.isInterleavedBufferAttribute){const m=n(e.data,u.data);f=new Os(m,u.itemSize,u.offset,u.normalized)}else{const m=Hn(u.type,u.array);f=new(u.isInstancedBufferAttribute?Tr:ht)(m,u.itemSize,u.normalized)}u.name!==void 0&&(f.name=u.name),u.usage!==void 0&&f.setUsage(u.usage),s.setAttribute(d,f)}const l=e.data.morphAttributes;if(l)for(const d in l){const u=l[d],f=[];for(let m=0,_=u.length;m<_;m++){const g=u[m];let p;if(g.isInterleavedBufferAttribute){const S=n(e.data,g.data);p=new Os(S,g.itemSize,g.offset,g.normalized)}else{const S=Hn(g.type,g.array);p=new ht(S,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),f.push(p)}s.morphAttributes[d]=f}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let d=0,u=c.length;d!==u;++d){const f=c[d];s.addGroup(f.start,f.count,f.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(s.boundingSphere=new Dt().fromJSON(h)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},La={},ly=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=this.path===""?Tl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const a=new Hi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(h){n!==void 0&&n(h),Pe("ObjectLoader: Can't parse "+e+".",h.message);return}const c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}r.parse(l,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?Tl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new Hi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t);let a;try{a=JSON.parse(s)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+l.message)}const o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(a)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,i),c=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,c),this.bindLightTargets(l),t!==void 0){let h=!1;for(const d in s)if(s[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,n,a,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(e,t){La[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new Xs().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=new Bd().fromJSON(e[r],n);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Lp;for(let r=0,s=e.length;r<s;r++){let a;const o=e[r];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;default:o.type in gl?a=gl[o.type].fromJSON(o,t):o.type in La?a=La[o.type].fromJSON(o,t):he(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.userData!==void 0&&(a.userData=o.userData),i[o.uuid]=a}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new Ip;r.setTextures(t);for(let s=0,a=e.length;s<a;s++){const o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=r.parse(o)),n[o.uuid]=i[o.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=ks.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function s(o){return o=i.manager.resolveURL(o),i.manager.itemStart(o),r.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function a(o){if(typeof o=="string"){const l=o;return s(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}else return o.data?{data:Hn(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){const o=new Lh(t);r=new Gs(o),r.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const h=e[l],d=h.url;if(Array.isArray(d)){const u=[];for(let f=0,m=d.length;f<m;f++){const _=d[f],g=a(_);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new si(g.data,g.width,g.height)))}n[h.uuid]=new an(u)}else{const u=a(h.url);n[h.uuid]=new an(u)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(s){if(typeof s=="string"){const a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await n.loadAsync(o)}else return s.data?{data:Hn(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){n=new Gs(this.manager),n.setCrossOrigin(this.crossOrigin);for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.url;if(Array.isArray(l)){const c=[];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=await r(u);f!==null&&(f instanceof HTMLImageElement?c.push(f):c.push(new si(f.data,f.width,f.height)))}i[o.uuid]=new an(c)}else{const c=await r(o.url);i[o.uuid]=new an(c)}}}return i}parseTextures(e,t){function i(r,s){return typeof r=="number"?r:(he("ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const n={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=e[r];a.image===void 0&&he('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&he("ObjectLoader: Undefined image",a.image);const o=t[a.image],l=o.data;let c;Array.isArray(l)?(c=new Hs,l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new si:c=new Rt,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,Up)),a.channel!==void 0&&(c.channel=a.channel),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],Al),c.wrapT=i(a.wrap[1],Al)),a.format!==void 0&&(c.format=a.format),a.internalFormat!==void 0&&(c.internalFormat=a.internalFormat),a.type!==void 0&&(c.type=a.type),a.colorSpace!==void 0&&(c.colorSpace=a.colorSpace),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,El)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,El)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.generateMipmaps!==void 0&&(c.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(c.compareFunction=a.compareFunction),a.normalized!==void 0&&(c.normalized=a.normalized),a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}return n}parseObject(e,t,i,n,r){let s;function a(d){return t[d]===void 0&&he("ObjectLoader: Undefined geometry",d),t[d]}function o(d){if(d!==void 0){if(Array.isArray(d)){const u=[];for(let f=0,m=d.length;f<m;f++){const _=d[f];i[_]===void 0&&he("ObjectLoader: Undefined material",_),u.push(i[_])}return u}return i[d]===void 0&&he("ObjectLoader: Undefined material",d),i[d]}}function l(d){return n[d]===void 0&&he("ObjectLoader: Undefined texture",d),n[d]}let c,h;switch(e.type){case"Scene":s=new Ed,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new xe(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Ad(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Td(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new qs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new wp(e.color,e.intensity);break;case"DirectionalLight":s=new Ep(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new Tp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Cp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Sp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new xp(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new Uh().fromArray(e.sh);s=new Rp(d,e.intensity);break;case"SkinnedMesh":c=a(e.geometry),h=o(e.material),s=new Od(c,h),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=a(e.geometry),h=o(e.material),s=new Tt(c,h);break;case"InstancedMesh":c=a(e.geometry),h=o(e.material);const u=e.count,f=e.instanceMatrix,m=e.instanceColor;s=new Vd(c,h,u),s.instanceMatrix=new Tr(new Float32Array(f.array),16),m!==void 0&&(s.instanceColor=new Tr(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":c=a(e.geometry),h=o(e.material),s=new jd(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),s.geometry=c,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(_=>{let g=null,p=null;return _.boundingBox!==void 0&&(g=new kt().fromJSON(_.boundingBox)),_.boundingSphere!==void 0&&(p=new Dt().fromJSON(_.boundingSphere)),{..._,boundingBox:g,boundingSphere:p}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=l(e.matricesTexture.uuid),s._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Dt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new kt().fromJSON(e.boundingBox));break;case"LOD":s=new Ud;break;case"Line":s=new dn(a(e.geometry),o(e.material));break;case"LineLoop":s=new ef(a(e.geometry),o(e.material));break;case"LineSegments":s=new Ai(a(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new tf(a(e.geometry),o(e.material));break;case"Sprite":s=new Ld(o(e.material));break;case"Group":s=new mr;break;case"Bone":s=new Bc;break;default:s=new lt}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let u=0;u<d.length;u++)s.add(this.parseObject(d[u],t,i,n,r))}if(e.animations!==void 0){const d=e.animations;for(let u=0;u<d.length;u++){const f=d[u];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const d=e.levels;for(let u=0;u<d.length;u++){const f=d[u],m=s.getObjectByProperty("uuid",f.object);m!==void 0&&s.addLevel(m,f.distance,f.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?he("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new lt}})}},Up={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},Al={RepeatWrapping:Cs,ClampToEdgeWrapping:Zt,MirroredRepeatWrapping:Rs},El={NearestFilter:Ct,NearestMipmapNearestFilter:cc,NearestMipmapLinearFilter:hc,LinearFilter:St,LinearMipmapNearestFilter:uc,LinearMipmapLinearFilter:Cr},Ua=new WeakMap,cy=class extends Kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&he("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&he("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=bi.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(l=>{Ua.has(s)===!0?(n&&n(Ua.get(s)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),Ua.set(o,l),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,o),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},gs,Dh=class{static getContext(){return gs===void 0&&(gs=new(window.AudioContext||window.webkitAudioContext)),gs}static setContext(e){gs=e}},hy=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Hi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0),c=Dh.getContext(),h=e+"#decode";r.manager.itemStart(h),c.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},i,n);function a(o){n?n(o):Pe(o),r.manager.itemError(e)}}},wl=new He,Cl=new He,$i=new He,uy=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,$i.copy(e.projectionMatrix);const i=t.eyeSep/2,n=i*t.near/t.focus,r=t.near*Math.tan(cn*t.fov*.5)/t.zoom;let s,a;Cl.elements[12]=-i,wl.elements[12]=i,s=-r*t.aspect+n,a=r*t.aspect+n,$i.elements[0]=2*t.near/(a-s),$i.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy($i),s=-r*t.aspect-n,a=r*t.aspect-n,$i.elements[0]=2*t.near/(a-s),$i.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy($i)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Cl),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(wl),this.cameraR.matrixWorldNeedsUpdate=!0}},Nn=-90,Dn=1,Np=class extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Nt(Nn,Dn,e,t);n.layers=this.layers,this.add(n);const r=new Nt(Nn,Dn,e,t);r.layers=this.layers,this.add(r);const s=new Nt(Nn,Dn,e,t);s.layers=this.layers,this.add(s);const a=new Nt(Nn,Dn,e,t);a.layers=this.layers,this.add(a);const o=new Nt(Nn,Dn,e,t);o.layers=this.layers,this.add(o);const l=new Nt(Nn,Dn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Dp=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Op=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fp(){this._document.hidden===!1&&this.reset()}var Qi=new C,Na=new Wt,Bp=new C,ji=new C,en=new C,dy=class extends lt{constructor(){super(),this.type="AudioListener",this.context=Dh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Op}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Qi,Na,Bp),ji.set(0,0,-1).applyQuaternion(Na),en.set(0,1,0).applyQuaternion(Na),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Qi.x,i),t.positionY.linearRampToValueAtTime(Qi.y,i),t.positionZ.linearRampToValueAtTime(Qi.z,i),t.forwardX.linearRampToValueAtTime(ji.x,i),t.forwardY.linearRampToValueAtTime(ji.y,i),t.forwardZ.linearRampToValueAtTime(ji.z,i),t.upX.linearRampToValueAtTime(en.x,i),t.upY.linearRampToValueAtTime(en.y,i),t.upZ.linearRampToValueAtTime(en.z,i)}else t.setPosition(Qi.x,Qi.y,Qi.z),t.setOrientation(ji.x,ji.y,ji.z,en.x,en.y,en.z)}},zp=class extends lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){he("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(he("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(he("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},tn=new C,Rl=new Wt,Vp=new C,nn=new C,fy=class extends zp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(tn,Rl,Vp),nn.set(0,0,1).applyQuaternion(Rl);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(tn.x,i),t.positionY.linearRampToValueAtTime(tn.y,i),t.positionZ.linearRampToValueAtTime(tn.z,i),t.orientationX.linearRampToValueAtTime(nn.x,i),t.orientationY.linearRampToValueAtTime(nn.y,i),t.orientationZ.linearRampToValueAtTime(nn.z,i)}else t.setPosition(tn.x,tn.y,tn.z),t.setOrientation(nn.x,nn.y,nn.z)}},py=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},kp=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==n;++a)i[r+a]=i[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const o=t*this._origIndex;this._mixBufferRegion(i,n,o,1-r,t)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,s=n;r!==s;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[i+s]}_slerp(e,t,i,n){Wt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const s=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,s,e,t,e,i),Wt.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,i,n,r){const s=1-n;for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]*s+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[i+s]*n}}},Gp="\\[\\]\\.:\\/",Hp=new RegExp("[\\[\\]\\.:\\/]","g"),_o="[^\\[\\]\\.:\\/]",Wp="[^"+Gp.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",_o),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_o),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_o),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),Kp=["material","materials","bones","map"],$p=class{constructor(e,t,i){const n=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class Vn{constructor(t,i,n){this.path=i,this.parsedPath=n||Vn.parseTrackName(i),this.node=Vn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new Vn.Composite(t,i,n):new Vn(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){const i=Jp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Kp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=Vn.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[r];if(a===void 0){const c=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=$p;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Jt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,s=r.length;let a,o=e.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const d=arguments[c],u=d.uuid;let f=t[u];if(f===void 0){f=o++,t[u]=f,e.push(d);for(let m=0,_=s;m!==_;++m)r[m].push(new ft(d,i[m],n[m]))}else if(f<l){a=e[f];const m=--l,_=e[m];t[_.uuid]=f,e[f]=_,t[u]=m,e[m]=d;for(let g=0,p=s;g!==p;++g){const S=r[g],M=S[m];let v=S[f];S[f]=M,v===void 0&&(v=new ft(d,i[g],n[g])),S[m]=v}}else e[f]!==a&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const o=arguments[s],l=o.uuid,c=t[l];if(c!==void 0&&c>=r){const h=r++,d=e[h];t[d.uuid]=c,e[c]=d,t[l]=h,e[h]=o;for(let u=0,f=n;u!==f;++u){const m=i[u],_=m[h],g=m[c];m[c]=_,m[h]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,s=e.length;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a].uuid,c=t[l];if(c!==void 0)if(delete t[l],c<r){const h=--r,d=e[h],u=--s,f=e[u];t[d.uuid]=c,e[c]=d,t[f.uuid]=h,e[h]=f,e.pop();for(let m=0,_=n;m!==_;++m){const g=i[m],p=g[h],S=g[u];g[c]=p,g[h]=S,g.pop()}}else{const h=--s,d=e[h];h>0&&(t[d.uuid]=c),e[c]=d,e.pop();for(let u=0,f=n;u!==f;++u){const m=i[u];m[c]=m[h],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);n=r.length,i[e]=n,s.push(e),a.push(t),r.push(h);for(let d=c,u=o.length;d!==u;++d){const f=o[d];h[d]=new ft(f,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a],l=e[a];t[l]=i,s[i]=o,s.pop(),r[i]=r[a],r.pop(),n[i]=n[a],n.pop()}}},Qp=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,s=r.length,a=new Array(s),o={endingStart:kn,endingEnd:kn};for(let l=0;l!==s;++l){const c=r[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Hu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,s=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const o=(e-r)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case xc:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulateAdditive(a);break;case io:default:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const s=i===Wu;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){const l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Gn,n.endingEnd=Gn):(e?n.endingStart=this.zeroSlopeAtStart?Gn:kn:n.endingStart=Ls,t?n.endingEnd=this.zeroSlopeAtEnd?Gn:kn:n.endingEnd=Ls)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=t,a[1]=r+e,o[1]=i,this}},jp=new Float32Array(1),gy=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,a=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName;let c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==r;++h){const d=n[h],u=d.name;let f=c[u];if(f!==void 0)++f.referenceCount,s[h]=f;else{if(f=s[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,o,u));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;f=new kp(ft.create(i,u,m),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,o,u),s[h]=f}a[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,a=s[n],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Rh(new Float32Array(2),new Float32Array(2),1,jp),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let s=typeof e=="string"?ks.findByName(n,e):e;const a=s!==null?s.uuid:e,o=this._actionsByClip[a];let l=null;if(i===void 0&&(s!==null?i=s.blendMode:i=io),o!==void 0){const h=o.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new Qp(this,s,t,i);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?ks.findByName(i,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,r,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const s=i[r].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[t];if(n!==void 0)for(const r in n){const s=n[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},vy=class extends wc{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i,this.texture=new ao(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},_y=class Oh{constructor(t){this.value=t}clone(){return new Oh(this.value.clone===void 0?this.value:this.value.clone())}},em=0,yy=class extends fi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.usage=no,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<r.length;s++)this.uniforms.push(r[s].clone())}return this}clone(){return new this.constructor().copy(this)}},xy=class extends lo{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},My=class{constructor(e,t,i,n,r,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Il=new He,Sy=class{constructor(e,t,i=0,n=1/0){this.ray=new Rr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(e,t=!0,i=[]){return $a(e,this,i,t),i.sort(Pl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$a(e[n],this,i,t);return i.sort(Pl),i}};function Pl(e,t){return e.distance-t.distance}function $a(e,t,i,n){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&n===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)$a(s[a],t,i,!0)}}var by=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,he("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Ty=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ay=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},Ey=class Fh{static{Fh.prototype.isMatrix2=!0}constructor(t,i,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,r){const s=this.elements;return s[0]=t,s[2]=i,s[1]=n,s[3]=r,this}},Ll=new $,tm=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ll.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ll).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ul=new C,vs=new C,On=new C,Fn=new C,Da=new C,im=new C,nm=new C,wy=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ul.subVectors(e,this.start),vs.subVectors(this.end,this.start);const i=vs.dot(vs);if(i===0)return 0;let n=vs.dot(Ul)/i;return t&&(n=Ve(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=im,i=nm){const n=10000000000000001e-32;let r,s;const a=this.start,o=e.start,l=this.end,c=e.end;On.subVectors(l,a),Fn.subVectors(c,o),Da.subVectors(a,o);const h=On.dot(On),d=Fn.dot(Fn),u=Fn.dot(Da);if(h<=n&&d<=n)return t.copy(a),i.copy(o),t.sub(i),t.dot(t);if(h<=n)r=0,s=u/d,s=Ve(s,0,1);else{const f=On.dot(Da);if(d<=n)s=0,r=Ve(-f/h,0,1);else{const m=On.dot(Fn),_=h*d-m*m;_!==0?r=Ve((m*u-f*d)/_,0,1):r=0,s=(m*r+u)/d,s<0?(s=0,r=Ve(-f/h,0,1)):s>1&&(s=1,r=Ve((m-f)/h,0,1))}}return t.copy(a).addScaledVector(On,r),i.copy(o).addScaledVector(Fn,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Nl=new C,Cy=class extends lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ze,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const l=s/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new be(n,3));const r=new Xt({fog:!1,toneMapped:!1});this.cone=new Ai(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nl.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nl),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Ni=new C,_s=new He,Oa=new He,Ry=class extends Ai{constructor(e){const t=Bh(e),i=new Ze,n=[],r=[];for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new be(n,3)),i.setAttribute("color",new be(r,3));const s=new Xt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new xe(255),o=new xe(65280);this.setColors(a,o)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Oa.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(_s.multiplyMatrices(Oa,a.matrixWorld),Ni.setFromMatrixPosition(_s),n.setXYZ(s,Ni.x,Ni.y,Ni.z),_s.multiplyMatrices(Oa,a.parent.matrixWorld),Ni.setFromMatrixPosition(_s),n.setXYZ(s+1,Ni.x,Ni.y,Ni.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let n=0;n<i.count;n+=2)i.setXYZ(n,e.r,e.g,e.b),i.setXYZ(n+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function Bh(e){const t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push(...Bh(e.children[i]));return t}var Iy=class extends Tt{constructor(e,t,i){const n=new gh(t,4,2),r=new pn({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},rm=new C,Dl=new xe,Ol=new xe,Py=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new uh(t);n.rotateY(Math.PI*.5),this.material=new pn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),s=new Float32Array(r.count*3);n.setAttribute("color",new ht(s,3)),this.add(new Tt(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Dl.copy(this.light.color),Ol.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?Dl:Ol;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(rm.setFromMatrixPosition(this.light.matrixWorld).negate())}},Ly=class extends Ai{constructor(e=10,t=10,i=4473924,n=8947848){i=new xe(i),n=new xe(n);const r=t/2,s=e/t,a=e/2,o=[],l=[];for(let d=0,u=0,f=-a;d<=t;d++,f+=s){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);const m=d===r?i:n;m.toArray(l,u),u+=3,m.toArray(l,u),u+=3,m.toArray(l,u),u+=3,m.toArray(l,u),u+=3}const c=new Ze;c.setAttribute("position",new be(o,3)),c.setAttribute("color",new be(l,3));const h=new Xt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Uy=class extends Ai{constructor(e=10,t=16,i=8,n=64,r=4473924,s=8947848){r=new xe(r),s=new xe(s);const a=[],o=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),u=Math.sin(d)*e,f=Math.cos(d)*e;a.push(0,0,0),a.push(u,0,f);const m=h&1?r:s;o.push(m.r,m.g,m.b),o.push(m.r,m.g,m.b)}for(let h=0;h<i;h++){const d=h&1?r:s,u=e-e/i*h;for(let f=0;f<n;f++){let m=f/n*(Math.PI*2),_=Math.sin(m)*u,g=Math.cos(m)*u;a.push(_,0,g),o.push(d.r,d.g,d.b),m=(f+1)/n*(Math.PI*2),_=Math.sin(m)*u,g=Math.cos(m)*u,a.push(_,0,g),o.push(d.r,d.g,d.b)}}const l=new Ze;l.setAttribute("position",new be(a,3)),l.setAttribute("color",new be(o,3));const c=new Xt({vertexColors:!0,toneMapped:!1});super(l,c),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Fl=new C,ys=new C,Bl=new C,Ny=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ze;n.setAttribute("position",new be([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Xt({fog:!1,toneMapped:!1});this.lightPlane=new dn(n,r),this.add(this.lightPlane),n=new Ze,n.setAttribute("position",new be([0,0,0,0,0,1],3)),this.targetLine=new dn(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Fl.setFromMatrixPosition(this.light.matrixWorld),ys.setFromMatrixPosition(this.light.target.matrixWorld),Bl.subVectors(ys,Fl),this.lightPlane.lookAt(ys),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ys),this.targetLine.scale.z=Bl.length()}},xs=new C,yt=new vo,Dy=class extends Ai{constructor(e){const t=new Ze,i=new Xt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,m){o(f),o(m)}function o(f){n.push(0,0,0),r.push(0,0,0),s[f]===void 0&&(s[f]=[]),s[f].push(n.length/3-1)}t.setAttribute("position",new be(n,3)),t.setAttribute("color",new be(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new xe(16755200),c=new xe(16711680),h=new xe(43775),d=new xe(16777215),u=new xe(3355443);this.setColors(l,c,h,d,u)}setColors(e,t,i,n,r){const s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,s;if(yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,s=0;else if(this.camera.coordinateSystem===2e3)r=-1,s=1;else if(this.camera.coordinateSystem===2001)r=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Mt("c",t,e,yt,0,0,r),Mt("t",t,e,yt,0,0,s),Mt("n1",t,e,yt,-1,-1,r),Mt("n2",t,e,yt,i,-1,r),Mt("n3",t,e,yt,-1,n,r),Mt("n4",t,e,yt,i,n,r),Mt("f1",t,e,yt,-1,-1,s),Mt("f2",t,e,yt,i,-1,s),Mt("f3",t,e,yt,-1,n,s),Mt("f4",t,e,yt,i,n,s),Mt("u1",t,e,yt,i*.7,n*1.1,r),Mt("u2",t,e,yt,-.7,n*1.1,r),Mt("u3",t,e,yt,0,2,r),Mt("cf1",t,e,yt,-1,0,s),Mt("cf2",t,e,yt,i,0,s),Mt("cf3",t,e,yt,0,-1,s),Mt("cf4",t,e,yt,0,n,s),Mt("cn1",t,e,yt,-1,0,r),Mt("cn2",t,e,yt,i,0,r),Mt("cn3",t,e,yt,0,-1,r),Mt("cn4",t,e,yt,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Mt(e,t,i,n,r,s,a){xs.set(r,s,a).unproject(n);const o=t[e];if(o!==void 0){const l=i.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],xs.x,xs.y,xs.z)}}var Ms=new kt,Oy=class extends Ai{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Ze;r.setIndex(new ht(i,1)),r.setAttribute("position",new ht(n,3)),super(r,new Xt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ms.setFromObject(this.object),Ms.isEmpty())return;const e=Ms.min,t=Ms.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Fy=class extends Ai{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ze;r.setIndex(new ht(i,1)),r.setAttribute("position",new be(n,3)),super(r,new Xt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},By=class extends dn{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Ze;s.setAttribute("position",new be(r,3)),s.computeBoundingSphere(),super(s,new Xt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Ze;o.setAttribute("position",new be(a,3)),o.computeBoundingSphere(),this.add(new Tt(o,new pn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},zl=new C,Ss,Fa,zy=class extends lt{constructor(e=new C(0,0,1),t=new C(0,0,0),i=1,n=16776960,r=i*.2,s=r*.2){super(),this.type="ArrowHelper",Ss===void 0&&(Ss=new Ze,Ss.setAttribute("position",new be([0,0,0,0,1,0],3)),Fa=new Zc(.5,1,5,1),Fa.translate(0,-.5,0)),this.position.copy(t),this.line=new dn(Ss,new Xt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(Fa,new pn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{zl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(zl,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Vy=class extends Ai{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ze;n.setAttribute("position",new be(t,3)),n.setAttribute("color",new be(i,3));const r=new Xt({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new xe,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},ky=class{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Vs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,s){return this.currentPath.bezierCurveTo(e,t,i,n,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(o,l){let c=!1;const h=l.length;for(let d=0,u=h-1;d<h;u=d++){const f=l[d],m=l[u];f.y>o.y!=m.y>o.y&&o.x<(m.x-f.x)*(o.y-f.y)/(m.y-f.y)+f.x&&(c=!c)}return c}function t(o,l){const c=l.getCenter(new $);if(e(c,o))return c;const h=c.y,d=[],u=o.length;for(let f=0;f<u;f++){const m=o[f],_=o[(f+1)%u];if(m.y>h!=_.y>h){const g=m.x+(h-m.y)*(_.x-m.x)/(_.y-m.y);d.push(g)}}return d.length>1&&(d.sort((f,m)=>f-m),c.x=(d[0]+d[1])/2),c}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(he('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(o=>o!==0):(o=>(o&1)!==0),r=[];for(const o of this.subPaths){const l=o.getPoints();if(l.length<3)continue;const c=Di.area(l);if(c===0)continue;const h=new tm;for(let d=0;d<l.length;d++)h.expandByPoint(l[d]);r.push({subPath:o,points:l,boundingBox:h,interiorPoint:t(l,h),absArea:Math.abs(c),winding:c<0?-1:1,container:null,exclude:!1,role:null})}r.sort((o,l)=>l.absArea-o.absArea);for(let o=0;o<r.length;o++){const l=r[o];let c=0;for(let h=o-1;h>=0;h--){const d=r[h];if(d.boundingBox.containsBox(l.boundingBox)&&e(l.interiorPoint,d.points)){l.container=d.exclude?d.container:d,c=d.winding,l.winding+=c;break}}n(l.winding)===n(c)&&(l.exclude=!0)}for(const o of r)o.exclude||(o.role=o.container===null||o.container.role==="hole"?"outer":"hole");const s=[],a=new Map;for(const o of r){if(o.exclude||o.role!=="outer")continue;const l=new Xs;l.curves=o.subPath.curves,s.push(l),a.set(o,l)}for(const o of r){if(o.exclude||o.role!=="hole")continue;const l=a.get(o.container);if(!l)continue;const c=new Vs;c.curves=o.subPath.curves,l.holes.push(c)}return s}},Gy=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){he("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sm(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function am(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function om(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function Qa(e,t,i,n){const r=lm(n);switch(i){case su:return e*t;case vc:return e*t/r.components*r.byteLength;case to:return e*t/r.components*r.byteLength;case Is:return e*t*2/r.components*r.byteLength;case _c:return e*t*2/r.components*r.byteLength;case au:return e*t*3/r.components*r.byteLength;case Vi:return e*t*4/r.components*r.byteLength;case yc:return e*t*4/r.components*r.byteLength;case ou:case lu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cu:case hu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case du:case pu:return Math.max(e,16)*Math.max(t,8)/4;case uu:case fu:return Math.max(e,8)*Math.max(t,8)/2;case mu:case gu:case _u:case yu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vu:case xu:case Mu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Au:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ru:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Iu:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Uu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Du:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ou:case Fu:case Bu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zu:case Vu:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ku:case Gu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lm(e){switch(e){case Fi:case eu:return{byteLength:1,components:1};case dc:case tu:case hn:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Bi:case iu:case zi:return{byteLength:4,components:1};case nu:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var Hy=class{static contain(e,t){return sm(e,t)}static cover(e,t){return am(e,t)}static fill(e){return om(e)}static getByteLength(e,t,i,n){return Qa(e,t,i,n)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function zh(){let e=null,t=!1,i=null,n=null;function r(s,a){i(s,a),n=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function cm(e){const t=new WeakMap;function i(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},fe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},di={basic:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:zt([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:zt([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:zt([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:zt([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:zt([fe.lights,fe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};di.physical={uniforms:zt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var bs={r:0,b:0,g:0},hm=new He,Vh=new qe;Vh.set(-1,0,0,0,1,0,0,0,1);function um(e,t,i,n,r,s){const a=new xe(0);let o=r===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const v=S.backgroundBlurriness>0;M=t.get(M,v)}return M}function m(S){let M=!1;const v=f(S);v===null?g(a,o):v&&v.isColor&&(g(v,1),M=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(S,M){const v=f(M);v&&(v.isCubeTexture||v.mapping===306)?(c===void 0&&(c=new Tt(new Ws(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Kn(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vh),c.material.toneMapped=et.getTransfer(v.colorSpace)!==Ns,(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tt(new fo(2,2),new ai({name:"BackgroundMaterial",uniforms:Kn(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==Ns,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,M){S.getRGB(bs,Sh(e)),i.buffers.color.setClear(bs.r,bs.g,bs.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:_,dispose:p}}function dm(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,F,X,k,G){let q=!1;const z=d(I,k,X,F);s!==z&&(s=z,c(s.object)),q=f(I,k,X,G),q&&m(I,k,X,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(I,F,X,k),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function d(I,F,X,k){const G=k.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const z=I.isInstancedMesh===!0?I.id:0;let ee=q[z];ee===void 0&&(ee={},q[z]=ee);let ie=ee[X.id];ie===void 0&&(ie={},ee[X.id]=ie);let ne=ie[G];return ne===void 0&&(ne=u(l()),ie[G]=ne),ne}function u(I){const F=[],X=[],k=[];for(let G=0;G<i;G++)F[G]=0,X[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:k,object:I,attributes:{},index:null}}function f(I,F,X,k){const G=s.attributes,q=F.attributes;let z=0;const ee=X.getAttributes();for(const ie in ee)if(ee[ie].location>=0){const ne=G[ie];let ge=q[ie];if(ge===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function m(I,F,X,k){const G={},q=F.attributes;let z=0;const ee=X.getAttributes();for(const ie in ee)if(ee[ie].location>=0){let ne=q[ie];ne===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),G[ie]=ge,z++}s.attributes=G,s.attributesNum=z,s.index=k}function _(){const I=s.newAttributes;for(let F=0,X=I.length;F<X;F++)I[F]=0}function g(I){p(I,0)}function p(I,F){const X=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;X[I]=1,k[I]===0&&(e.enableVertexAttribArray(I),k[I]=1),G[I]!==F&&(e.vertexAttribDivisor(I,F),G[I]=F)}function S(){const I=s.newAttributes,F=s.enabledAttributes;for(let X=0,k=F.length;X<k;X++)F[X]!==I[X]&&(e.disableVertexAttribArray(X),F[X]=0)}function M(I,F,X,k,G,q,z){z===!0?e.vertexAttribIPointer(I,F,X,G,q):e.vertexAttribPointer(I,F,X,k,G,q)}function v(I,F,X,k){_();const G=k.attributes,q=X.getAttributes(),z=F.defaultAttributeValues;for(const ee in q){const ie=q[ee];if(ie.location>=0){let ne=G[ee];if(ne===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const ge=ne.normalized,we=ne.itemSize,st=t.get(ne);if(st===void 0)continue;const at=st.buffer,Y=st.type,oe=st.bytesPerElement,ve=Y===e.INT||Y===e.UNSIGNED_INT||ne.gpuType===1013;if(ne.isInterleavedBufferAttribute){const de=ne.data,De=de.stride,Be=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ie.locationSize;Ne++)p(ie.location+Ne,de.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)g(ie.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,at);for(let Ne=0;Ne<ie.locationSize;Ne++)M(ie.location+Ne,we/ie.locationSize,Y,ge,De*oe,(Be+we/ie.locationSize*Ne)*oe,ve)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<ie.locationSize;de++)p(ie.location+de,ne.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<ie.locationSize;de++)g(ie.location+de);e.bindBuffer(e.ARRAY_BUFFER,at);for(let de=0;de<ie.locationSize;de++)M(ie.location+de,we/ie.locationSize,Y,ge,we*oe,we/ie.locationSize*de*oe,ve)}}else if(z!==void 0){const ge=z[ee];if(ge!==void 0)switch(ge.length){case 2:e.vertexAttrib2fv(ie.location,ge);break;case 3:e.vertexAttrib3fv(ie.location,ge);break;case 4:e.vertexAttrib4fv(ie.location,ge);break;default:e.vertexAttrib1fv(ie.location,ge)}}}}S()}function E(){T();for(const I in n){const F=n[I];for(const X in F){const k=F[X];for(const G in k){const q=k[G];for(const z in q)h(q[z].object),delete q[z];delete k[G]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const X in F){const k=F[X];for(const G in k){const q=k[G];for(const z in q)h(q[z].object),delete q[z];delete k[G]}}delete n[I.id]}function R(I){for(const F in n){const X=n[F];for(const k in X){const G=X[k];if(G[I.id]===void 0)continue;const q=G[I.id];for(const z in q)h(q[z].object),delete q[z];delete G[I.id]}}}function y(I){for(const F in n){const X=n[F],k=I.isInstancedMesh===!0?I.id:0,G=X[k];if(G!==void 0){for(const q in G){const z=G[q];for(const ee in z)h(z[ee].object),delete z[ee];delete G[q]}delete X[k],Object.keys(X).length===0&&delete n[F]}}}function T(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function fm(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function pm(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!y)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(he("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:w}}function mm(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new rn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const S=s?0:n,M=S*4;let v=p.clippingState||null;l.value=v,v=h(m,u,M,f);for(let E=0;E!==M;++E)v[E]=i[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(d[M]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Oi=4,Vl=[.125,.215,.35,.446,.526,.582],Wn=20,gm=256,fr=new qs,kl=new xe,Ba=null,za=0,Va=0,ka=!1,vm=new C,Gl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:a=vm}=r;Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Va),this._renderer.xr.enabled=ka,e.scissorTest=!1,Bn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:hn,format:Vi,colorSpace:Xa,depthBuffer:!1},n=Hl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_m(r)),this._blurMaterial=xm(r,e,t),this._ggxMaterial=ym(r,e,t)}return n}_compileMaterial(e){const t=new Tt(new Ze,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,i,n,r){const s=new Nt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(kl),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Ws,new pn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,u=d.material;let f=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,f=!0):(u.color.copy(kl),f=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[_],r.y,r.z)):g===1?(s.up.set(0,0,a[_]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[_],r.z)):(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[_]));const p=this._cubeSize;Bn(n,g*p,_>2?p:0,p,p),l.setRenderTarget(n),f&&l.render(d,s),l.render(e,s)}l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Bn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,fr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,u=this._sizeLods[i],f=3*u*(i>d-Oi?i-d+Oi:0),m=4*(this._cubeSize-u);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=d-t,Bn(r,f,m,3*u,2*u),n.setRenderTarget(r),n.render(a,fr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-i,Bn(e,f,m,3*u,2*u),n.setRenderTarget(e),n.render(a,fr)}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[n];h.material=l;const d=l.uniforms,u=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,m=r/f,_=isFinite(r)?1+Math.floor(c*m):Wn;_>Wn&&he(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wn}`);const g=[];let p=0;for(let v=0;v<Wn;++v){const E=v/m,w=Math.exp(-E*E/2);g.push(w),v===0?p+=w:v<_&&(p+=2*w)}for(let v=0;v<g.length;v++)g[v]=g[v]/p;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=f,d.mipInt.value=S-i;const M=this._sizeLods[n];Bn(t,3*M*(n>S-Oi?n-S+Oi:0),4*(this._cubeSize-M),3*M,2*M),o.setRenderTarget(t),o.render(h,fr)}};function _m(e){const t=[],i=[],n=[];let r=e;const s=e-Oi+1+Vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>e-Oi?l=Vl[a-e+Oi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=3,_=2,g=1,p=new Float32Array(108),S=new Float32Array(72),M=new Float32Array(36);for(let E=0;E<f;E++){const w=E%3*2/3-1,R=E>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];p.set(y,18*E),S.set(u,12*E);const T=[E,E,E,E,E,E];M.set(T,6*E)}const v=new Ze;v.setAttribute("position",new ht(p,m)),v.setAttribute("uv",new ht(S,_)),v.setAttribute("faceIndex",new ht(M,g)),n.push(new Tt(v,null)),r>Oi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function Hl(e,t,i){const n=new ei(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bn(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function ym(e,t,i){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xm(e,t,i){const n=new Float32Array(Wn),r=new C(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xl(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ys(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var kh=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Hs(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ws(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new Tt(n,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=St),new Np(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}};function Mm(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===303||f===304)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new kh(m.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,m=f===303||f===304,_=f===301||f===302;if(m||_){let g=i.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Gl(e)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return m&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Gl(e)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===303?u.mapping=301:f===304&&(u.mapping=302),u}function l(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=i.get(f);m!==void 0&&(i.delete(f),m.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Sm(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&ln("WebGLRenderer: "+n+" extension not supported."),r}}}function bm(e,t,i,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,i.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let M=0,v=S.length;M<v;M+=3){const E=S[M+0],w=S[M+1],R=S[M+2];u.push(E,w,w,R,R,E)}}else{const S=m.array;_=m.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const E=M+0,w=M+1,R=M+2;u.push(E,w,w,R,R,E)}}const g=new(m.count>=65535?Uc:Lc)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Tm(e,t,i){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(n,u,s,d*a),i.update(u,n,1)}function c(d,u,f){f!==0&&(e.drawElementsInstanced(n,u,s,d*a,f),i.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];i.update(m,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Am(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a)}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Em(e,t,i){const n=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*E*4*d),R=new so(w,v,E,d);R.type=zi,R.needsUpdate=!0;const y=M*4;for(let U=0;U<d;U++){const I=g[U],F=p[U],X=S[U],k=v*E*4*U;for(let G=0;G<I.count;G++){const q=G*y;f===!0&&(r.fromBufferAttribute(I,G),w[k+q+0]=r.x,w[k+q+1]=r.y,w[k+q+2]=r.z,w[k+q+3]=0),m===!0&&(r.fromBufferAttribute(F,G),w[k+q+4]=r.x,w[k+q+5]=r.y,w[k+q+6]=r.z,w[k+q+7]=0),_===!0&&(r.fromBufferAttribute(X,G),w[k+q+8]=r.x,w[k+q+9]=r.y,w[k+q+10]=r.z,w[k+q+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new $(v,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function wm(e,t,i,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var Cm={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Rm(e,t,i,n,r,s){const a=new ei(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Zn(t,i):void 0}),o=new ei(t,i,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Ze;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));const c=new bh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Tt(l,c),d=new qs(-1,1,1,-1,0,1);let u=null,f=null,m=!1,_,g=null,p=[],S=!1;this.setSize=function(M,v){a.setSize(M,v),o.setSize(M,v);for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(M,v)}},this.setEffects=function(M){p=M,S=p.length>0&&p[0].isRenderPass===!0;const v=a.width,E=a.height;for(let w=0;w<p.length;w++){const R=p[w];R.setSize&&R.setSize(v,E)}},this.begin=function(M,v){if(m||M.toneMapping===0&&p.length===0)return!1;if(g=v,v!==null){const E=v.width,w=v.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return S===!1&&M.setRenderTarget(a),_=M.toneMapping,M.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(M,v){M.toneMapping=_,m=!0;let E=a,w=o;for(let R=0;R<p.length;R++){const y=p[R];if(y.enabled!==!1&&(y.render(M,w,E,v),y.needsSwap!==!1)){const T=E;E=w,w=T}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,c.defines={},et.getTransfer(u)==="srgb"&&(c.defines.SRGB_TRANSFER="");const R=Cm[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(g),M.render(h,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Gh=new Rt,ja=new Zn(1,1),Hh=new so,Wh=new ao,Xh=new Hs,ql=[],Yl=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Kl=new Float32Array(4);function jn(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function At(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Et(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Zs(e,t){let i=Yl[t];i===void 0&&(i=new Int32Array(t),Yl[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Im(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Pm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2fv(this.addr,t),Et(i,t)}}function Lm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(At(i,t))return;e.uniform3fv(this.addr,t),Et(i,t)}}function Um(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4fv(this.addr,t),Et(i,t)}}function Nm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(At(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(i,t)}else{if(At(i,n))return;Kl.set(n),e.uniformMatrix2fv(this.addr,!1,Kl),Et(i,n)}}function Dm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(At(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(i,t)}else{if(At(i,n))return;Jl.set(n),e.uniformMatrix3fv(this.addr,!1,Jl),Et(i,n)}}function Om(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(At(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(i,t)}else{if(At(i,n))return;Zl.set(n),e.uniformMatrix4fv(this.addr,!1,Zl),Et(i,n)}}function Fm(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Bm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2iv(this.addr,t),Et(i,t)}}function zm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3iv(this.addr,t),Et(i,t)}}function Vm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4iv(this.addr,t),Et(i,t)}}function km(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Gm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(At(i,t))return;e.uniform2uiv(this.addr,t),Et(i,t)}}function Hm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(At(i,t))return;e.uniform3uiv(this.addr,t),Et(i,t)}}function Wm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(At(i,t))return;e.uniform4uiv(this.addr,t),Et(i,t)}}function Xm(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(ja.compareFunction=i.isReversedDepthBuffer()?518:515,s=ja):s=Gh,i.setTexture2D(t||s,r)}function qm(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||Wh,r)}function Ym(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||Xh,r)}function Zm(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||Hh,r)}function Jm(e){switch(e){case 5126:return Im;case 35664:return Pm;case 35665:return Lm;case 35666:return Um;case 35674:return Nm;case 35675:return Dm;case 35676:return Om;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return Vm;case 5125:return km;case 36294:return Gm;case 36295:return Hm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}function Km(e,t){e.uniform1fv(this.addr,t)}function $m(e,t){const i=jn(t,this.size,2);e.uniform2fv(this.addr,i)}function Qm(e,t){const i=jn(t,this.size,3);e.uniform3fv(this.addr,i)}function jm(e,t){const i=jn(t,this.size,4);e.uniform4fv(this.addr,i)}function eg(e,t){const i=jn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function tg(e,t){const i=jn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function ig(e,t){const i=jn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function ng(e,t){e.uniform1iv(this.addr,t)}function rg(e,t){e.uniform2iv(this.addr,t)}function sg(e,t){e.uniform3iv(this.addr,t)}function ag(e,t){e.uniform4iv(this.addr,t)}function og(e,t){e.uniform1uiv(this.addr,t)}function lg(e,t){e.uniform2uiv(this.addr,t)}function cg(e,t){e.uniform3uiv(this.addr,t)}function hg(e,t){e.uniform4uiv(this.addr,t)}function ug(e,t,i){const n=this.cache,r=t.length,s=Zs(i,r);At(n,s)||(e.uniform1iv(this.addr,s),Et(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=ja:a=Gh;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function dg(e,t,i){const n=this.cache,r=t.length,s=Zs(i,r);At(n,s)||(e.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||Wh,s[a])}function fg(e,t,i){const n=this.cache,r=t.length,s=Zs(i,r);At(n,s)||(e.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)i.setTextureCube(t[a]||Xh,s[a])}function pg(e,t,i){const n=this.cache,r=t.length,s=Zs(i,r);At(n,s)||(e.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||Hh,s[a])}function mg(e){switch(e){case 5126:return Km;case 35664:return $m;case 35665:return Qm;case 35666:return jm;case 35674:return eg;case 35675:return tg;case 35676:return ig;case 5124:case 35670:return ng;case 35667:case 35671:return rg;case 35668:case 35672:return sg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}var gg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}},vg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}},_g=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function $l(e,t){e.seq.push(t),e.map[t.id]=t}function yg(e,t,i){const n=e.name,r=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$l(i,c===void 0?new gg(o,e,t):new vg(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new _g(o),$l(i,h)),i=h}}}var ws=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s);yg(a,e.getUniformLocation(t,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function Ql(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var xg=37297,Mg=0;function Sg(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var jl=new qe;function bg(e){et._getMatrix(jl,et.workingColorSpace,e);const t=`mat3( ${jl.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(e)){case Us:return[t,"LinearTransferOETF"];case Ns:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ec(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+Sg(e.getShaderSource(t),a)}else return r}function Tg(e,t){const i=bg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Ag={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Eg(e,t){const i=Ag[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ts=new C;function wg(){return et.getLuminanceCoefficients(Ts),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ts.x.toFixed(4)}, ${Ts.y.toFixed(4)}, ${Ts.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Rg(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function Ig(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function _r(e){return e!==""}function tc(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(e){return e.replace(Pg,Ug)}var Lg=new Map;function Ug(e,t){let i=Ke[t];if(i===void 0){const n=Lg.get(t);if(n!==void 0)i=Ke[n],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return eo(i)}var Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(e){return e.replace(Ng,Dg)}function Dg(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Og={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Fg(e){return Og[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bg={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function zg(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Bg[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vg={302:"ENVMAP_MODE_REFRACTION"};function kg(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Vg[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gg={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Hg(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Gg[e.combine]||"ENVMAP_BLENDING_NONE"}function Wg(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function Xg(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=Fg(i),c=zg(i),h=kg(i),d=Hg(i),u=Wg(i),f=Cg(i),m=Rg(s),_=r.createProgram();let g,p,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(_r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(g=[rc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[rc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?Ke.tonemapping_pars_fragment:"",i.toneMapping!==0?Eg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Tg("linearToOutputTexel",i.outputColorSpace),wg(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_r).join(`
`)),a=eo(a),a=tc(a,i),a=ic(a,i),o=eo(o),o=tc(o,i),o=ic(o,i),a=nc(a),o=nc(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+g+a,v=S+p+o,E=Ql(r,r.VERTEX_SHADER,M),w=Ql(r,r.FRAGMENT_SHADER,v);r.attachShader(_,E),r.attachShader(_,w),i.index0AttributeName!==void 0?r.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(e.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(E)||"",k=r.getShaderInfoLog(w)||"",G=F.trim(),q=X.trim(),z=k.trim();let ee=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,E,w);else{const ne=ec(r,E,"vertex"),ge=ec(r,w,"fragment");Pe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ne+`
`+ge)}else G!==""?he("WebGLProgram: Program Info Log:",G):(q===""||z==="")&&(ie=!1);ie&&(I.diagnostics={runnable:ee,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:z,prefix:p}})}r.deleteShader(E),r.deleteShader(w),y=new ws(r,_),T=Ig(r,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,xg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}var qg=0,Yg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zg(e),t.set(e,i)),i}},Zg=class{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}};function Jg(e){return e===1030||e===37490||e===36285}function Kg(e,t,i,n,r,s){const a=new oo,o=new Yg,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,U,I,F,X){const k=I.fog,G=F.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ee=t.get(y.envMap||q,z),ie=ee&&ee.mapping===306?ee.image.height:null,ne=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&he("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=ge!==void 0?ge.length:0;let st=0;G.morphAttributes.position!==void 0&&(st=1),G.morphAttributes.normal!==void 0&&(st=2),G.morphAttributes.color!==void 0&&(st=3);let at,Y,oe,ve;if(ne){const ze=di[ne];at=ze.vertexShader,Y=ze.fragmentShader}else{at=y.vertexShader,Y=y.fragmentShader;const ze=o.getVertexShaderStage(y),Ft=o.getFragmentShaderStage(y);o.update(y,ze,Ft),oe=ze.id,ve=Ft.id}const de=e.getRenderTarget(),De=e.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,Je=!!y.map,J=!!y.matcap,re=!!ee,ce=!!y.aoMap,_e=!!y.lightMap,ye=!!y.bumpMap&&y.wireframe===!1,Le=!!y.normalMap,Ue=!!y.displacementMap,We=!!y.emissiveMap,Xe=!!y.metalnessMap,P=!!y.roughnessMap,mt=y.anisotropy>0,tt=y.clearcoat>0,Qe=y.dispersion>0,A=y.iridescence>0,x=y.sheen>0,L=y.transmission>0,H=mt&&!!y.anisotropyMap,K=tt&&!!y.clearcoatMap,se=tt&&!!y.clearcoatNormalMap,ue=tt&&!!y.clearcoatRoughnessMap,D=A&&!!y.iridescenceMap,ae=A&&!!y.iridescenceThicknessMap,Se=x&&!!y.sheenColorMap,Ce=x&&!!y.sheenRoughnessMap,te=!!y.specularMap,Ie=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ge=L&&!!y.transmissionMap,it=L&&!!y.thicknessMap,N=!!y.gradientMap,Z=!!y.alphaMap,Q=y.alphaTest>0,Me=!!y.alphaHash,Ee=!!y.extensions;let j=0;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(j=e.toneMapping);const pe={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:Y,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:J,envMap:re,envMapMode:re&&ee.mapping,envMapCubeUVHeight:ie,aoMap:ce,lightMap:_e,bumpMap:ye,normalMap:Le,displacementMap:Ue,emissiveMap:We,normalMapObjectSpace:Le&&y.normalMapType===1,normalMapTangentSpace:Le&&y.normalMapType===0,packedNormalMap:Le&&y.normalMapType===0&&Jg(y.normalMap.format),metalnessMap:Xe,roughnessMap:P,anisotropy:mt,anisotropyMap:H,clearcoat:tt,clearcoatMap:K,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,dispersion:Qe,iridescence:A,iridescenceMap:D,iridescenceThicknessMap:ae,sheen:x,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:te,specularColorMap:Ie,specularIntensityMap:Oe,transmission:L,transmissionMap:Ge,thicknessMap:it,gradientMap:N,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:Q,alphaHash:Me,combine:y.combine,mapUv:Je&&m(y.map.channel),aoMapUv:ce&&m(y.aoMap.channel),lightMapUv:_e&&m(y.lightMap.channel),bumpMapUv:ye&&m(y.bumpMap.channel),normalMapUv:Le&&m(y.normalMap.channel),displacementMapUv:Ue&&m(y.displacementMap.channel),emissiveMapUv:We&&m(y.emissiveMap.channel),metalnessMapUv:Xe&&m(y.metalnessMap.channel),roughnessMapUv:P&&m(y.roughnessMap.channel),anisotropyMapUv:H&&m(y.anisotropyMap.channel),clearcoatMapUv:K&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(y.sheenRoughnessMap.channel),specularMapUv:te&&m(y.specularMap.channel),specularColorMapUv:Ie&&m(y.specularColorMap.channel),specularIntensityMapUv:Oe&&m(y.specularIntensityMap.channel),transmissionMapUv:Ge&&m(y.transmissionMap.channel),thicknessMapUv:it&&m(y.thicknessMap.channel),alphaMapUv:Z&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||mt),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Je||Z),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&Le===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:st,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:j,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)==="srgb",decodeVideoTextureEmissive:We&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(p(T,y),S(T,y),T.push(e.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const T=f[y.type];let U;if(T){const I=di[T];U=ep.clone(I.uniforms)}else U=y.uniforms;return U}function v(y,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new Xg(e,T,y,r),c.push(U),h.set(T,U)),U}function E(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function $g(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,l){e.get(a)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function Qg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function sc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ac(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,g,p){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},e[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=m,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=g,S.group=p),t++,S}function l(u,f,m,_,g,p){const S=o(u,f,m,_,g,p);m.transmission>0?n.push(S):m.transparent===!0?r.push(S):i.push(S)}function c(u,f,m,_,g,p){const S=o(u,f,m,_,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?r.unshift(S):i.unshift(S)}function h(u,f,m){i.length>1&&i.sort(u||Qg),n.length>1&&n.sort(f||sc),r.length>1&&r.sort(f||sc),m&&(i.reverse(),n.reverse(),r.reverse())}function d(){for(let u=t,f=e.length;u<f;u++){const m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function jg(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new ac,e.set(n,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function ev(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new C,color:new xe};break;case"SpotLight":i={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new C,halfWidth:new C,halfHeight:new C}}return e[t.id]=i,i}}}function tv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var iv=0;function nv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function rv(e){const t=new ev,i=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new He,a=new He;function o(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,S=0,M=0,v=0,E=0,w=0,R=0;c.sort(nv);for(let T=0,U=c.length;T<U;T++){const I=c[T],F=I.color,X=I.intensity,k=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===1030?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*X,d+=F.g*X,u+=F.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],X);R++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,ee=i.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,S++}n.directional[f]=q,f++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(X),q.distance=k,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;const z=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const ee=i.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=G,v++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(F).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=q,g++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const z=I.shadow,ee=i.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,ee.shadowCameraNear=z.camera.near,ee.shadowCameraFar=z.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=q,m++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[p]=q,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const y=n.hash;(y.directionalLength!==f||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==M||y.numSpotShadows!==v||y.numSpotMaps!==E||y.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,y.directionalLength=f,y.pointLength=m,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=M,y.numSpotShadows=v,y.numSpotMaps=E,y.numLightProbes=R,n.version=iv++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function oc(e){const t=new rv(e),i=[],n=[],r=[];function s(u){d.camera=u,i.length=0,n.length=0,r.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sv(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new oc(e),t.set(r,[o])):s>=a.length?(o=new oc(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],cv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],lc=new He,pr=new C,Ha=new C;function hv(e,t,i){let n=new Yn;const r=new $,s=new $,a=new pt,o=new Ah,l=new Eh,c={},h=i.maxTextureSize,d={0:1,1:0,2:2},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:av,fragmentShader:ov}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ze;m.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(w,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===2&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const T=e.getRenderTarget(),U=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),F=e.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=p!==this.type;X&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=w.length;k<G;k++){const q=w[k],z=q.shadow;if(z===void 0){he("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ee=z.getFrameExtents();r.multiply(ee),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,z.mapSize.y=s.y));const ie=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ie,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===3){if(q.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ei(r.x,r.y,{format:Is,type:hn,minFilter:St,magFilter:St,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Zn(r.x,r.y,zi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Sr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else q.isPointLight?(z.map=new kh(r.x),z.map.depthTexture=new rf(r.x,Bi)):(z.map=new ei(r.x,r.y),z.map.depthTexture=new Zn(r.x,r.y,Bi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Sr,this.type===1?(z.map.depthTexture.compareFunction=ie?518:515,z.map.depthTexture.minFilter=St,z.map.depthTexture.magFilter=St):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct);z.camera.updateProjectionMatrix()}const ne=z.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ne;ge++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,ge),e.clear();else{ge===0&&(e.setRenderTarget(z.map),e.clear());const we=z.getViewport(ge);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),F.viewport(a)}if(q.isPointLight){const we=z.camera,st=z.matrix,at=q.distance||we.far;at!==we.far&&(we.far=at,we.updateProjectionMatrix()),pr.setFromMatrixPosition(q.matrixWorld),we.position.copy(pr),Ha.copy(we.position),Ha.add(lv[ge]),we.up.copy(cv[ge]),we.lookAt(Ha),we.updateMatrixWorld(),st.makeTranslation(-pr.x,-pr.y,-pr.z),lc.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lc,we.coordinateSystem,we.reversedDepth)}else z.updateMatrices(q);n=z.getFrustum(),v(R,y,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===3&&S(z,y),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(T,U,I)};function S(w,R){const y=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(r.x,r.y,{format:Is,type:hn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,y,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,y,f,_,null)}function M(w,R,y,T){let U=null;const I=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)U=I;else if(U=y.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=U.uuid,X=R.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let G=k[X];G===void 0&&(G=U.clone(),k[X]=G,R.addEventListener("dispose",E)),U=G}if(U.visible=R.visible,U.wireframe=R.wireframe,T===3?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:d[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=e.properties.get(U);F.light=y}return U}function v(w,R,y,T,U){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const F=t.update(w),X=w.material;if(Array.isArray(X)){const k=F.groups;for(let G=0,q=k.length;G<q;G++){const z=k[G],ee=X[z.materialIndex];if(ee&&ee.visible){const ie=M(w,ee,T,U);w.onBeforeShadow(e,w,R,y,F,ie,z),e.renderBufferDirect(y,null,F,ie,w,z),w.onAfterShadow(e,w,R,y,F,ie,z)}}}else if(X.visible){const k=M(w,X,T,U);w.onBeforeShadow(e,w,R,y,F,k,null),e.renderBufferDirect(y,null,F,k,w,null),w.onAfterShadow(e,w,R,y,F,k,null)}}const I=w.children;for(let F=0,X=I.length;F<X;F++)v(I[F],R,y,T,U)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const y=c[R],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function uv(e,t){function i(){let N=!1;const Z=new pt;let Q=null;const Me=new pt(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!N&&(e.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,j,pe,ze,Ft){Ft===!0&&(Ee*=ze,j*=ze,pe*=ze),Z.set(Ee,j,pe,ze),Me.equals(Z)===!1&&(e.clearColor(Ee,j,pe,ze),Me.copy(Z))},reset:function(){N=!1,Q=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,Z=!1,Q=null,Me=null,Ee=null;return{setReversed:function(j){if(Z!==j){const pe=t.get("EXT_clip_control");j?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),Z=j;const ze=Ee;Ee=null,this.setClear(ze)}},getReversed:function(){return Z},setTest:function(j){j?de(e.DEPTH_TEST):De(e.DEPTH_TEST)},setMask:function(j){Q!==j&&!N&&(e.depthMask(j),Q=j)},setFunc:function(j){if(Z&&(j=Ku[j]),Me!==j){switch(j){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Me=j}},setLocked:function(j){N=j},setClear:function(j){Ee!==j&&(Ee=j,Z&&(j=1-j),e.clearDepth(j))},reset:function(){N=!1,Q=null,Me=null,Ee=null,Z=!1}}}function r(){let N=!1,Z=null,Q=null,Me=null,Ee=null,j=null,pe=null,ze=null,Ft=null;return{setTest:function(ut){N||(ut?de(e.STENCIL_TEST):De(e.STENCIL_TEST))},setMask:function(ut){Z!==ut&&!N&&(e.stencilMask(ut),Z=ut)},setFunc:function(ut,li,mi){(Q!==ut||Me!==li||Ee!==mi)&&(e.stencilFunc(ut,li,mi),Q=ut,Me=li,Ee=mi)},setOp:function(ut,li,mi){(j!==ut||pe!==li||ze!==mi)&&(e.stencilOp(ut,li,mi),j=ut,pe=li,ze=mi)},setLocked:function(ut){N=ut},setClear:function(ut){Ft!==ut&&(e.clearStencil(ut),Ft=ut)},reset:function(){N=!1,Z=null,Q=null,Me=null,Ee=null,j=null,pe=null,ze=null,Ft=null}}}const s=new i,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,S=null,M=null,v=null,E=null,w=null,R=null,y=new xe(0,0,0),T=0,U=!1,I=null,F=null,X=null,k=null,G=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ee=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=ee>=2);let ne=null,ge={};const we=e.getParameter(e.SCISSOR_BOX),st=e.getParameter(e.VIEWPORT),at=new pt().fromArray(we),Y=new pt().fromArray(st);function oe(N,Z,Q,Me){const Ee=new Uint8Array(4),j=e.createTexture();e.bindTexture(N,j),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<Q;pe++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(Z+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return j}const ve={};ve[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),ve[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ve[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(e.DEPTH_TEST),a.setFunc(3),ye(!1),Le(1),de(e.CULL_FACE),ce(0);function de(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function De(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Be(N,Z){return u[N]!==Z?(e.bindFramebuffer(N,Z),u[N]=Z,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Z),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ne(N,Z){let Q=m,Me=!1;if(N){Q=f.get(Z),Q===void 0&&(Q=[],f.set(Z,Q));const Ee=N.textures;if(Q.length!==Ee.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let j=0,pe=Ee.length;j<pe;j++)Q[j]=e.COLOR_ATTACHMENT0+j;Q.length=Ee.length,Me=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,Me=!0);Me&&e.drawBuffers(Q)}function Je(N){return _!==N?(e.useProgram(N),_=N,!0):!1}const J={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};J[103]=e.MIN,J[104]=e.MAX;const re={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(N,Z,Q,Me,Ee,j,pe,ze,Ft,ut){if(N===0){g===!0&&(De(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),N!==5){if(N!==p||ut!==U){if((S!==100||E!==100)&&(e.blendEquation(e.FUNC_ADD),S=100,E=100),ut)switch(N){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",N)}else switch(N){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",N)}M=null,v=null,w=null,R=null,y.set(0,0,0),T=0,p=N,U=ut}return}Ee=Ee||Z,j=j||Q,pe=pe||Me,(Z!==S||Ee!==E)&&(e.blendEquationSeparate(J[Z],J[Ee]),S=Z,E=Ee),(Q!==M||Me!==v||j!==w||pe!==R)&&(e.blendFuncSeparate(re[Q],re[Me],re[j],re[pe]),M=Q,v=Me,w=j,R=pe),(ze.equals(y)===!1||Ft!==T)&&(e.blendColor(ze.r,ze.g,ze.b,Ft),y.copy(ze),T=Ft),p=N,U=!1}function _e(N,Z){N.side===2?De(e.CULL_FACE):de(e.CULL_FACE);let Q=N.side===1;Z&&(Q=!Q),ye(Q),N.blending===1&&N.transparent===!1?ce(0):ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Me=N.stencilWrite;o.setTest(Me),Me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),We(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):De(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(N){I!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),I=N)}function Le(N){N!==0?(de(e.CULL_FACE),N!==F&&(N===1?e.cullFace(e.BACK):N===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):De(e.CULL_FACE),F=N}function Ue(N){N!==X&&(z&&e.lineWidth(N),X=N)}function We(N,Z,Q){N?(de(e.POLYGON_OFFSET_FILL),(k!==Z||G!==Q)&&(k=Z,G=Q,a.getReversed()&&(Z=-Z),e.polygonOffset(Z,Q))):De(e.POLYGON_OFFSET_FILL)}function Xe(N){N?de(e.SCISSOR_TEST):De(e.SCISSOR_TEST)}function P(N){N===void 0&&(N=e.TEXTURE0+q-1),ne!==N&&(e.activeTexture(N),ne=N)}function mt(N,Z,Q){Q===void 0&&(ne===null?Q=e.TEXTURE0+q-1:Q=ne);let Me=ge[Q];Me===void 0&&(Me={type:void 0,texture:void 0},ge[Q]=Me),(Me.type!==N||Me.texture!==Z)&&(ne!==Q&&(e.activeTexture(Q),ne=Q),e.bindTexture(N,Z||ve[N]),Me.type=N,Me.texture=Z)}function tt(){const N=ge[ne];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Qe(){try{e.compressedTexImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function L(){try{e.texSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function se(){try{e.texStorage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function ue(){try{e.texStorage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function D(){try{e.texImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function ae(){try{e.texImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Se(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function Ce(N,Z){d[N]!==Z&&(e.pixelStorei(N,Z),d[N]=Z)}function te(N){at.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),at.copy(N))}function Ie(N){Y.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Oe(N,Z){let Q=c.get(Z);Q===void 0&&(Q=new WeakMap,c.set(Z,Q));let Me=Q.get(N);Me===void 0&&(Me=e.getUniformBlockIndex(Z,N.name),Q.set(N,Me))}function Ge(N,Z){const Q=c.get(Z).get(N);l.get(Z)!==Q&&(e.uniformBlockBinding(Z,Q,N.__bindingPointIndex),l.set(Z,Q))}function it(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ge={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,S=null,M=null,v=null,E=null,w=null,R=null,y=new xe(0,0,0),T=0,U=!1,I=null,F=null,X=null,k=null,G=null,at.set(0,0,e.canvas.width,e.canvas.height),Y.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:De,bindFramebuffer:Be,drawBuffers:Ne,useProgram:Je,setBlending:ce,setMaterial:_e,setFlipSided:ye,setCullFace:Le,setLineWidth:Ue,setPolygonOffset:We,setScissorTest:Xe,activeTexture:P,bindTexture:mt,unbindTexture:tt,compressedTexImage2D:Qe,compressedTexImage3D:A,texImage2D:D,texImage3D:ae,pixelStorei:Ce,getParameter:Se,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:se,texStorage3D:ue,texSubImage2D:x,texSubImage3D:L,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:te,viewport:Ie,reset:it}}function dv(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):br("canvas")}function g(A,x,L){let H=1;const K=Qe(A);if((K.width>L||K.height>L)&&(H=L/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(H*K.width),ue=Math.floor(H*K.height);u===void 0&&(u=_(se,ue));const D=x?_(se,ue):u;return D.width=se,D.height=ue,D.getContext("2d").drawImage(A,0,0,se,ue),he("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ue+")."),D}else return"data"in A&&he("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){e.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,x,L,H,K,se=!1){if(A!==null){if(e[A]!==void 0)return e[A];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;H&&(ue=t.get("EXT_texture_norm16"),ue||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=x;if(x===e.RED&&(L===e.FLOAT&&(D=e.R32F),L===e.HALF_FLOAT&&(D=e.R16F),L===e.UNSIGNED_BYTE&&(D=e.R8),L===e.UNSIGNED_SHORT&&ue&&(D=ue.R16_EXT),L===e.SHORT&&ue&&(D=ue.R16_SNORM_EXT)),x===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(D=e.R8UI),L===e.UNSIGNED_SHORT&&(D=e.R16UI),L===e.UNSIGNED_INT&&(D=e.R32UI),L===e.BYTE&&(D=e.R8I),L===e.SHORT&&(D=e.R16I),L===e.INT&&(D=e.R32I)),x===e.RG&&(L===e.FLOAT&&(D=e.RG32F),L===e.HALF_FLOAT&&(D=e.RG16F),L===e.UNSIGNED_BYTE&&(D=e.RG8),L===e.UNSIGNED_SHORT&&ue&&(D=ue.RG16_EXT),L===e.SHORT&&ue&&(D=ue.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(D=e.RG8UI),L===e.UNSIGNED_SHORT&&(D=e.RG16UI),L===e.UNSIGNED_INT&&(D=e.RG32UI),L===e.BYTE&&(D=e.RG8I),L===e.SHORT&&(D=e.RG16I),L===e.INT&&(D=e.RG32I)),x===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(D=e.RGB8UI),L===e.UNSIGNED_SHORT&&(D=e.RGB16UI),L===e.UNSIGNED_INT&&(D=e.RGB32UI),L===e.BYTE&&(D=e.RGB8I),L===e.SHORT&&(D=e.RGB16I),L===e.INT&&(D=e.RGB32I)),x===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(D=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(D=e.RGBA16UI),L===e.UNSIGNED_INT&&(D=e.RGBA32UI),L===e.BYTE&&(D=e.RGBA8I),L===e.SHORT&&(D=e.RGBA16I),L===e.INT&&(D=e.RGBA32I)),x===e.RGB&&(L===e.UNSIGNED_SHORT&&ue&&(D=ue.RGB16_EXT),L===e.SHORT&&ue&&(D=ue.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(D=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(D=e.R11F_G11F_B10F)),x===e.RGBA){const ae=se?Us:et.getTransfer(K);L===e.FLOAT&&(D=e.RGBA32F),L===e.HALF_FLOAT&&(D=e.RGBA16F),L===e.UNSIGNED_BYTE&&(D=ae==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&ue&&(D=ue.RGBA16_EXT),L===e.SHORT&&ue&&(D=ue.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(D=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(D=e.RGB5_A1)}return(D===e.R16F||D===e.R32F||D===e.RG16F||D===e.RG32F||D===e.RGBA16F||D===e.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function E(A,x){let L;return A?x===null||x===1014||x===1020?L=e.DEPTH24_STENCIL8:x===1015?L=e.DEPTH32F_STENCIL8:x===1012&&(L=e.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?L=e.DEPTH_COMPONENT24:x===1015?L=e.DEPTH_COMPONENT32F:x===1012&&(L=e.DEPTH_COMPONENT16),L}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(A){const x=A.target;x.removeEventListener("dispose",y),I(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const L=A.source,H=f.get(L);if(H){const K=H[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(A),Object.keys(H).length===0&&f.delete(L)}n.remove(A)}function U(A){const x=n.get(A);e.deleteTexture(x.__webglTexture);const L=A.source,H=f.get(L);delete H[x.__cacheKey],a.memory.textures--}function I(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let K=0;K<x.__webglFramebuffer[H].length;K++)e.deleteFramebuffer(x.__webglFramebuffer[H][K]);else e.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)e.deleteFramebuffer(x.__webglFramebuffer[H]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=A.textures;for(let H=0,K=L.length;H<K;H++){const se=n.get(L[H]);se.__webglTexture&&(e.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(L[H])}n.remove(A)}let F=0;function X(){F=0}function k(){return F}function G(A){F=A}function q(){const A=F;return A>=r.maxTextures&&he("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function z(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const L=n.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&L.__version!==A.version){const H=A.image;if(H===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{De(L,A,x);return}}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+x)}function ie(A,x){const L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){De(L,A,x);return}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+x)}function ne(A,x){const L=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){De(L,A,x);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+x)}function ge(A,x){const L=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&L.__version!==A.version){Be(L,A,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+x)}const we={[Cs]:e.REPEAT,[Zt]:e.CLAMP_TO_EDGE,[Rs]:e.MIRRORED_REPEAT},st={[Ct]:e.NEAREST,[cc]:e.NEAREST_MIPMAP_NEAREST,[hc]:e.NEAREST_MIPMAP_LINEAR,[St]:e.LINEAR,[uc]:e.LINEAR_MIPMAP_NEAREST,[Cr]:e.LINEAR_MIPMAP_LINEAR},at={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Y(A,x){if(x.type===1015&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,we[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,we[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,we[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,st[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(A,x){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let K=f.get(H);K===void 0&&(K={},f.set(H,K));const se=z(x);if(se!==A.__cacheKey){K[se]===void 0&&(K[se]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[se].usedTimes++;const ue=K[A.__cacheKey];ue!==void 0&&(K[A.__cacheKey].usedTimes--,ue.usedTimes===0&&U(x)),A.__cacheKey=se,A.__webglTexture=K[se].texture}return L}function ve(A,x,L){return Math.floor(Math.floor(A/L)/x)}function de(A,x,L,H){const se=A.updateRanges;if(se.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,L,H,x.data);else{se.sort((Ce,te)=>Ce.start-te.start);let ue=0;for(let Ce=1;Ce<se.length;Ce++){const te=se[ue],Ie=se[Ce],Oe=te.start+te.count,Ge=ve(Ie.start,x.width,4),it=ve(te.start,x.width,4);Ie.start<=Oe+1&&Ge===it&&ve(Ie.start+Ie.count-1,x.width,4)===Ge?te.count=Math.max(te.count,Ie.start+Ie.count-te.start):(++ue,se[ue]=Ie)}se.length=ue+1;const D=i.getParameter(e.UNPACK_ROW_LENGTH),ae=i.getParameter(e.UNPACK_SKIP_PIXELS),Se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Ce=0,te=se.length;Ce<te;Ce++){const Ie=se[Ce],Oe=Math.floor(Ie.start/4),Ge=Math.ceil(Ie.count/4),it=Oe%x.width,N=Math.floor(Oe/x.width),Z=Ge,Q=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,it),i.pixelStorei(e.UNPACK_SKIP_ROWS,N),i.texSubImage2D(e.TEXTURE_2D,0,it,N,Z,Q,L,H,x.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,D),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function De(A,x,L){let H=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=e.TEXTURE_3D);const K=oe(A,x),se=x.source;i.bindTexture(H,A.__webglTexture,e.TEXTURE0+L);const ue=n.get(se);if(se.version!==ue.__version||K===!0){if(i.activeTexture(e.TEXTURE0+L),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const Z=et.getPrimaries(et.workingColorSpace),Q=x.colorSpace===""?null:et.getPrimaries(x.colorSpace),Me=x.colorSpace===""||Z===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let D=g(x.image,!1,r.maxTextureSize);D=tt(x,D);const ae=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let Ce=v(x.internalFormat,ae,Se,x.normalized,x.colorSpace,x.isVideoTexture);Y(H,x);let te;const Ie=x.mipmaps,Oe=x.isVideoTexture!==!0,Ge=ue.__version===void 0||K===!0,it=se.dataReady,N=w(x,D);if(x.isDepthTexture)Ce=E(x.format===gc,x.type),Ge&&(Oe?i.texStorage2D(e.TEXTURE_2D,1,Ce,D.width,D.height):i.texImage2D(e.TEXTURE_2D,0,Ce,D.width,D.height,0,ae,Se,null));else if(x.isDataTexture)if(Ie.length>0){Oe&&Ge&&i.texStorage2D(e.TEXTURE_2D,N,Ce,Ie[0].width,Ie[0].height);for(let Z=0,Q=Ie.length;Z<Q;Z++)te=Ie[Z],Oe?it&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,ae,Se,te.data):i.texImage2D(e.TEXTURE_2D,Z,Ce,te.width,te.height,0,ae,Se,te.data);x.generateMipmaps=!1}else Oe?(Ge&&i.texStorage2D(e.TEXTURE_2D,N,Ce,D.width,D.height),it&&de(x,D,ae,Se)):i.texImage2D(e.TEXTURE_2D,0,Ce,D.width,D.height,0,ae,Se,D.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&Ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,N,Ce,Ie[0].width,Ie[0].height,D.depth);for(let Z=0,Q=Ie.length;Z<Q;Z++)if(te=Ie[Z],x.format!==1023)if(ae!==null)if(Oe){if(it)if(x.layerUpdates.size>0){const Me=Qa(te.width,te.height,x.format,x.type);for(const Ee of x.layerUpdates){const j=te.data.subarray(Ee*Me/te.data.BYTES_PER_ELEMENT,(Ee+1)*Me/te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ee,te.width,te.height,1,ae,j)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,te.width,te.height,D.depth,ae,te.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Ce,te.width,te.height,D.depth,0,te.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?it&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,te.width,te.height,D.depth,ae,Se,te.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Z,Ce,te.width,te.height,D.depth,0,ae,Se,te.data)}else{Oe&&Ge&&i.texStorage2D(e.TEXTURE_2D,N,Ce,Ie[0].width,Ie[0].height);for(let Z=0,Q=Ie.length;Z<Q;Z++)te=Ie[Z],x.format!==1023?ae!==null?Oe?it&&i.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,ae,te.data):i.compressedTexImage2D(e.TEXTURE_2D,Z,Ce,te.width,te.height,0,te.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?it&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,te.width,te.height,ae,Se,te.data):i.texImage2D(e.TEXTURE_2D,Z,Ce,te.width,te.height,0,ae,Se,te.data)}else if(x.isDataArrayTexture)if(Oe){if(Ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,N,Ce,D.width,D.height,D.depth),it)if(x.layerUpdates.size>0){const Z=Qa(D.width,D.height,x.format,x.type);for(const Q of x.layerUpdates){const Me=D.data.subarray(Q*Z/D.data.BYTES_PER_ELEMENT,(Q+1)*Z/D.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,D.width,D.height,1,ae,Se,Me)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ae,Se,D.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,D.width,D.height,D.depth,0,ae,Se,D.data);else if(x.isData3DTexture)Oe?(Ge&&i.texStorage3D(e.TEXTURE_3D,N,Ce,D.width,D.height,D.depth),it&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ae,Se,D.data)):i.texImage3D(e.TEXTURE_3D,0,Ce,D.width,D.height,D.depth,0,ae,Se,D.data);else if(x.isFramebufferTexture){if(Ge)if(Oe)i.texStorage2D(e.TEXTURE_2D,N,Ce,D.width,D.height);else{let Z=D.width,Q=D.height;for(let Me=0;Me<N;Me++)i.texImage2D(e.TEXTURE_2D,Me,Ce,Z,Q,0,ae,Se,null),Z>>=1,Q>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),D.parentNode!==Z){Z.appendChild(D),d.add(x),Z.onpaint=Q=>{const Me=Q.changedElements;for(const Ee of d)Me.includes(Ee.image)&&(Ee.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,D);else{const Me=e.RGBA,Ee=e.RGBA,j=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Me,Ee,j,D)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Oe&&Ge){const Z=Qe(Ie[0]);i.texStorage2D(e.TEXTURE_2D,N,Ce,Z.width,Z.height)}for(let Z=0,Q=Ie.length;Z<Q;Z++)te=Ie[Z],Oe?it&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae,Se,te):i.texImage2D(e.TEXTURE_2D,Z,Ce,ae,Se,te);x.generateMipmaps=!1}else if(Oe){if(Ge){const Z=Qe(D);i.texStorage2D(e.TEXTURE_2D,N,Ce,Z.width,Z.height)}it&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,Se,D)}else i.texImage2D(e.TEXTURE_2D,0,Ce,ae,Se,D);p(x)&&S(H),ue.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Be(A,x,L){if(x.image.length!==6)return;const H=oe(A,x),K=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+L);const se=n.get(K);if(K.version!==se.__version||H===!0){i.activeTexture(e.TEXTURE0+L);const ue=et.getPrimaries(et.workingColorSpace),D=x.colorSpace===""?null:et.getPrimaries(x.colorSpace),ae=x.colorSpace===""||ue===D?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,te=[];for(let j=0;j<6;j++)!Se&&!Ce?te[j]=g(x.image[j],!0,r.maxCubemapSize):te[j]=Ce?x.image[j].image:x.image[j],te[j]=tt(x,te[j]);const Ie=te[0],Oe=s.convert(x.format,x.colorSpace),Ge=s.convert(x.type),it=v(x.internalFormat,Oe,Ge,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,Z=se.__version===void 0||H===!0,Q=K.dataReady;let Me=w(x,Ie);Y(e.TEXTURE_CUBE_MAP,x);let Ee;if(Se){N&&Z&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,it,Ie.width,Ie.height);for(let j=0;j<6;j++){Ee=te[j].mipmaps;for(let pe=0;pe<Ee.length;pe++){const ze=Ee[pe];x.format!==1023?Oe!==null?N?Q&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,ze.width,ze.height,Oe,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,it,ze.width,ze.height,0,ze.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,ze.width,ze.height,Oe,Ge,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,it,ze.width,ze.height,0,Oe,Ge,ze.data)}}}else{if(Ee=x.mipmaps,N&&Z){Ee.length>0&&Me++;const j=Qe(te[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,it,j.width,j.height)}for(let j=0;j<6;j++)if(Ce){N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,te[j].width,te[j].height,Oe,Ge,te[j].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,it,te[j].width,te[j].height,0,Oe,Ge,te[j].data);for(let pe=0;pe<Ee.length;pe++){const ze=Ee[pe].image[j].image;N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,ze.width,ze.height,Oe,Ge,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,it,ze.width,ze.height,0,Oe,Ge,ze.data)}}else{N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Oe,Ge,te[j]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,it,Oe,Ge,te[j]);for(let pe=0;pe<Ee.length;pe++){const ze=Ee[pe];N?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,Oe,Ge,ze.image[j]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,it,Oe,Ge,ze.image[j])}}}p(x)&&S(e.TEXTURE_CUBE_MAP),se.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ne(A,x,L,H,K,se){const ue=s.convert(L.format,L.colorSpace),D=s.convert(L.type),ae=v(L.internalFormat,ue,D,L.normalized,L.colorSpace),Se=n.get(x),Ce=n.get(L);if(Ce.__renderTarget=x,!Se.__hasExternalTextures){const te=Math.max(1,x.width>>se),Ie=Math.max(1,x.height>>se);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?i.texImage3D(K,se,ae,te,Ie,x.depth,0,ue,D,null):i.texImage2D(K,se,ae,te,Ie,0,ue,D,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,K,Ce.__webglTexture,0,Xe(x)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,K,Ce.__webglTexture,se),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(A,x,L){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){const H=x.depthTexture,K=H&&H.isDepthTexture?H.type:null,se=E(x.stencilBuffer,K),ue=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe(x),se,x.width,x.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe(x),se,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,se,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ue,e.RENDERBUFFER,A)}else{const H=x.textures;for(let K=0;K<H.length;K++){const se=H[K],ue=s.convert(se.format,se.colorSpace),D=s.convert(se.type),ae=v(se.internalFormat,ue,D,se.normalized,se.colorSpace);P(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe(x),ae,x.width,x.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe(x),ae,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ae,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function J(A,x,L){const H=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Y(e.TEXTURE_CUBE_MAP,x.depthTexture);const Se=s.convert(x.depthTexture.format),Ce=s.convert(x.depthTexture.type);let te;x.depthTexture.format===1026?te=e.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(te=e.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,te,x.width,x.height,0,Se,Ce,null)}}else ee(x.depthTexture,0);const se=K.__webglTexture,ue=Xe(x),D=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,ae=x.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,D,se,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,ae,D,se,0);else if(x.depthTexture.format===1027)P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,D,se,0,ue):e.framebufferTexture2D(e.FRAMEBUFFER,ae,D,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(A){const x=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let H=0;H<6;H++)J(x.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?J(x.__webglFramebuffer[0],A,0):J(x.__webglFramebuffer,A,0)}else if(L){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=e.createRenderbuffer(),Je(x.__webglDepthbuffer[H],A,!1);else{const K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,se)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Je(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,se)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(A,x,L){const H=n.get(A);x!==void 0&&Ne(H.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&re(A)}function _e(A){const x=A.texture,L=n.get(A),H=n.get(x);A.addEventListener("dispose",y);const K=A.textures,se=A.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=x.version,a.memory.textures++),se){L.__webglFramebuffer=[];for(let D=0;D<6;D++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[D]=[];for(let ae=0;ae<x.mipmaps.length;ae++)L.__webglFramebuffer[D][ae]=e.createFramebuffer()}else L.__webglFramebuffer[D]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let D=0;D<x.mipmaps.length;D++)L.__webglFramebuffer[D]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(ue)for(let D=0,ae=K.length;D<ae;D++){const Se=n.get(K[D]);Se.__webglTexture===void 0&&(Se.__webglTexture=e.createTexture(),a.memory.textures++)}if(A.samples>0&&P(A)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let D=0;D<K.length;D++){const ae=K[D];L.__webglColorRenderbuffer[D]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[D]);const Se=s.convert(ae.format,ae.colorSpace),Ce=s.convert(ae.type),te=v(ae.internalFormat,Se,Ce,ae.normalized,ae.colorSpace,A.isXRRenderTarget===!0),Ie=Xe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie,te,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+D,e.RENDERBUFFER,L.__webglColorRenderbuffer[D])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),Je(L.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(se){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Y(e.TEXTURE_CUBE_MAP,x);for(let D=0;D<6;D++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Ne(L.__webglFramebuffer[D][ae],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,ae);else Ne(L.__webglFramebuffer[D],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);p(x)&&S(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ue){for(let D=0,ae=K.length;D<ae;D++){const Se=K[D],Ce=n.get(Se);let te=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(te,Ce.__webglTexture),Y(te,Se),Ne(L.__webglFramebuffer,A,Se,e.COLOR_ATTACHMENT0+D,te,0),p(Se)&&S(te)}i.unbindTexture()}else{let D=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(D=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(D,H.__webglTexture),Y(D,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Ne(L.__webglFramebuffer[ae],A,x,e.COLOR_ATTACHMENT0,D,ae);else Ne(L.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,D,0);p(x)&&S(D),i.unbindTexture()}A.depthBuffer&&re(A)}function ye(A){const x=A.textures;for(let L=0,H=x.length;L<H;L++){const K=x[L];if(p(K)){const se=M(A),ue=n.get(K).__webglTexture;i.bindTexture(se,ue),S(se),i.unbindTexture()}}}const Le=[],Ue=[];function We(A){if(A.samples>0){if(P(A)===!1){const x=A.textures,L=A.width,H=A.height;let K=e.COLOR_BUFFER_BIT;const se=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=n.get(A),D=x.length>1;if(D)for(let Se=0;Se<x.length;Se++)i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ae=A.texture.mipmaps;ae&&ae.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),D){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Ce=n.get(x[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ce,0)}e.blitFramebuffer(0,0,L,H,0,0,L,H,K,e.NEAREST),l===!0&&(Le.length=0,Ue.length=0,Le.push(e.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Le.push(se),Ue.push(se),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),D)for(let Se=0;Se<x.length;Se++){i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,ue.__webglColorRenderbuffer[Se]);const Ce=n.get(x[Se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,Ce,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Xe(A){return Math.min(r.maxSamples,A.samples)}function P(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function tt(A,x){const L=A.colorSpace,H=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!=="srgb-linear"&&L!==""&&(et.getTransfer(L)==="srgb"?(H!==1023||K!==1009)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",L)),x}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=ge,this.rebindTextures=ce,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fv(e,t){function i(n,r=""){let s;const a=et.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vv=class extends fi{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,f=null;const m=typeof XRWebGLBinding<"u",_=new gv,g={},p=t.getContextAttributes();let S=null,M=null;const v=[],E=[],w=new $;let R=null;const y=new Nt;y.viewport=new pt;const T=new Nt;T.viewport=new pt;const U=[y,T],I=new Dp;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=v[Y];return oe===void 0&&(oe=new ra,v[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=v[Y];return oe===void 0&&(oe=new ra,v[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=v[Y];return oe===void 0&&(oe=new ra,v[Y]=oe),oe.getHandSpace()};function k(Y){const oe=E.indexOf(Y.inputSource);if(oe===-1)return;const ve=v[oe];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||s),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const oe=E[Y];oe!==null&&(E[Y]=null,v[Y].disconnect(oe))}F=null,X=null,_.reset();for(const Y in g)delete g[Y];e.setRenderTarget(S),u=null,d=null,h=null,n=null,M=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",G),n.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ve=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?gc:Sr,ve=p.stencil?mc:Bi);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(De),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:Vi,type:Fi,depthTexture:new Zn(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,oe),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new ei(u.framebufferWidth,u.framebufferHeight,{format:Vi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),at.setContext(n),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let oe=0;oe<Y.removed.length;oe++){const ve=Y.removed[oe],de=E.indexOf(ve);de>=0&&(E[de]=null,v[de].disconnect(ve))}for(let oe=0;oe<Y.added.length;oe++){const ve=Y.added[oe];let de=E.indexOf(ve);if(de===-1){for(let Be=0;Be<v.length;Be++)if(Be>=E.length){E.push(ve),de=Be;break}else if(E[Be]===null){E[Be]=ve,de=Be;break}if(de===-1)break}const De=v[de];De&&De.connect(ve)}}const z=new C,ee=new C;function ie(Y,oe,ve){z.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const de=z.distanceTo(ee),De=oe.projectionMatrix.elements,Be=ve.projectionMatrix.elements,Ne=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),J=(De[9]+1)/De[5],re=(De[9]-1)/De[5],ce=(De[8]-1)/De[0],_e=(Be[8]+1)/Be[0],ye=Ne*ce,Le=Ne*_e,Ue=de/(-ce+_e),We=Ue*-ce;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(We),Y.translateZ(Ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Xe=Ne+Ue,P=Je+Ue,mt=ye-We,tt=Le+(de-We),Qe=J*Je/P*Xe,A=re*Je/P*Xe;Y.projectionMatrix.makePerspective(mt,tt,Qe,A,Xe,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let oe=Y.near,ve=Y.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),I.near=T.near=y.near=oe,I.far=T.far=y.far=ve,(F!==I.near||X!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,X=I.far),I.layers.mask=Y.layers.mask|6,y.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;const de=Y.parent,De=I.cameras;ne(I,de);for(let Be=0;Be<De.length;Be++)ne(De[Be],de);De.length===2?ie(I,y,T):I.projectionMatrix.copy(y.projectionMatrix),ge(Y,I,de)};function ge(Y,oe,ve){ve===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(Y){o=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(Y){return g[Y]};let we=null;function st(Y,oe){if(c=oe.getViewerPose(l||s),f=oe,c!==null){const ve=c.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let de=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,de=!0);for(let Be=0;Be<ve.length;Be++){const Ne=ve[Be];let Je=null;if(u!==null)Je=u.getViewport(Ne);else{const re=h.getViewSubImage(d,Ne);Je=re.viewport,Be===0&&(e.setRenderTargetTextures(M,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(M))}let J=U[Be];J===void 0&&(J=new Nt,J.layers.enable(Be),J.viewport=new pt,U[Be]=J),J.matrix.fromArray(Ne.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ne.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Je.x,Je.y,Je.width,Je.height),Be===0&&(I.matrix.copy(J.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),de===!0&&I.cameras.push(J)}const De=n.enabledFeatures;if(De&&De.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&m){h=i.getBinding();const Be=h.getDepthInformation(ve[0]);Be&&Be.isValid&&Be.texture&&_.init(Be,n.renderState)}if(De&&De.includes("camera-access")&&m){e.state.unbindTexture(),h=i.getBinding();for(let Be=0;Be<ve.length;Be++){const Ne=ve[Be].camera;if(Ne){let Je=g[Ne];Je||(Je=new Gc,g[Ne]=Je);const J=h.getCameraImage(Ne);Je.sourceTexture=J}}}}for(let ve=0;ve<v.length;ve++){const de=E[ve],De=v[ve];de!==null&&De!==void 0&&De.update(de,oe,l||s)}we&&we(Y,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),f=null}const at=new zh;at.setAnimationLoop(st),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}},_v=new He,qh=new qe;qh.set(-1,0,0,0,1,0,0,0,1);function yv(e,t){function i(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Sh(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,S,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,i(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,i(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,i(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,i(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,v=S.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,i(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xv(e,t,i,n){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const w=E.program;n.uniformBlockBinding(v,w)}function c(v,E){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",S));const R=E.program;n.updateUBOMapping(v,R);const y=t.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){const E=d();v.__bindingPointIndex=E;const w=e.createBuffer(),R=v.__size,y=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,R,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const E=r[v.id],w=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let y=0,T=w.length;y<T;y++){const U=w[y];if(Array.isArray(U))for(let I=0,F=U.length;I<F;I++)f(U[I],y,I,R);else f(U,y,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,E,w,R){if(_(v,E,w,R)===!0){const y=v.__offset,T=v.value;if(Array.isArray(T)){let U=0;for(let I=0;I<T.length;I++){const F=T[I],X=p(F);m(F,v.__data,U),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,v.__data)}}function m(v,E,w){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,w)}function _(v,E,w,R){const y=v.value,T=E+"_"+w;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{const U=R[T];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function g(v){const E=v.uniforms;let w=0;const R=16;for(let T=0,U=E.length;T<U;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,X=I.length;F<X;F++){const k=I[F],G=Array.isArray(k.value)?k.value:[k.value];for(let q=0,z=G.length;q<z;q++){const ee=G[q],ie=p(ee),ne=w%R,ge=ne%ie.boundary,we=ne+ge;w+=ge,we!==0&&R-we<ie.storage&&(w+=R-we),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=ie.storage}}}const y=w%R;return y>0&&(w+=R-y),v.__size=w,v.__cache={},this}function p(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):he("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){const E=v.target;E.removeEventListener("dispose",S);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}var Mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Sv(){return ui===null&&(ui=new si(Mv,16,16,Is,hn),ui.name="DFG_LUT",ui.minFilter=St,ui.magFilter=St,ui.wrapS=Zt,ui.wrapT=Zt,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Wy=class{constructor(e={}){const{canvas:t=Zu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Fi}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const m=u,_=new Set([yc,_c,to]),g=new Set([Fi,Bi,dc,mc,fc,pc]),p=new Uint32Array(4),S=new Int32Array(4),M=new C;let v=null,E=null;const w=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1,I=null,F=null,X=null,k=null;this._outputColorSpace=jt;let G=0,q=0,z=null,ee=-1,ie=null;const ne=new pt,ge=new pt;let we=null;const st=new xe(0);let at=0,Y=t.width,oe=t.height,ve=1,de=null,De=null;const Be=new pt(0,0,Y,oe),Ne=new pt(0,0,Y,oe);let Je=!1;const J=new Yn;let re=!1,ce=!1;const _e=new He,ye=new C,Le=new pt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Xe(){return z===null?ve:1}let P=i;function mt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",ut,!1),P===null){const O="webgl2";if(P=mt(O,b),P===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Pe("WebGLRenderer: "+b.message),b}let tt,Qe,A,x,L,H,K,se,ue,D,ae,Se,Ce,te,Ie,Oe,Ge,it,N,Z,Q,Me,Ee;function j(){tt=new Sm(P),tt.init(),Q=new fv(P,tt),Qe=new pm(P,tt,e,Q),A=new uv(P,tt),Qe.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),F=P.createFramebuffer(),X=P.createFramebuffer(),k=P.createFramebuffer(),x=new Am(P),L=new $g,H=new dv(P,tt,A,L,Qe,Q,x),K=new Mm(T),se=new cm(P),Me=new dm(P,se),ue=new bm(P,se,x,Me),D=new wm(P,ue,se,Me,x),it=new Em(P,Qe,H),Ie=new mm(L),ae=new Kg(T,K,tt,Qe,Me,Ie),Se=new yv(T,L),Ce=new jg,te=new sv(tt),Ge=new um(T,K,A,D,f,o),Oe=new hv(T,D,Qe),Ee=new xv(P,x,Qe,A),N=new fm(P,tt,x),Z=new Tm(P,tt,x),x.programs=ae.programs,T.capabilities=Qe,T.extensions=tt,T.properties=L,T.renderLists=Ce,T.shadowMap=Oe,T.state=A,T.info=x}j(),m!==1009&&(y=new Rm(m,t.width,t.height,a,n,r));const pe=new vv(T,P);this.xr=pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(b){b!==void 0&&(ve=b,this.setSize(Y,oe,!1))},this.getSize=function(b){return b.set(Y,oe)},this.setSize=function(b,O,W=!0){if(pe.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,oe=O,t.width=Math.floor(b*ve),t.height=Math.floor(O*ve),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Y*ve,oe*ve).floor()},this.setDrawingBufferSize=function(b,O,W){Y=b,oe=O,ve=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(m===1009){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Be)},this.setViewport=function(b,O,W,V){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,O,W,V),A.viewport(ne.copy(Be).multiplyScalar(ve).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,O,W,V){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,O,W,V),A.scissor(ge.copy(Ne).multiplyScalar(ve).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){A.setScissorTest(Je=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){De=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,W=!0){let V=0;if(b){let B=!1;if(z!==null){const le=z.texture.format;B=_.has(le)}if(B){const le=z.texture.type,me=g.has(le),Te=Ge.getClearColor(),Ae=Ge.getClearAlpha(),ke=Te.r,$e=Te.g,je=Te.b;me?(p[0]=ke,p[1]=$e,p[2]=je,p[3]=Ae,P.clearBufferuiv(P.COLOR,0,p)):(S[0]=ke,S[1]=$e,S[2]=je,S[3]=Ae,P.clearBufferiv(P.COLOR,0,S))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ge.dispose(),Ce.dispose(),te.dispose(),L.dispose(),K.dispose(),D.dispose(),Me.dispose(),Ee.dispose(),ae.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",xo),pe.removeEventListener("sessionend",Mo),Wi.stop()};function ze(b){b.preventDefault(),Ds("WebGLRenderer: Context Lost."),U=!0}function Ft(){Ds("WebGLRenderer: Context Restored."),U=!1;const b=x.autoReset,O=Oe.enabled,W=Oe.autoUpdate,V=Oe.needsUpdate,B=Oe.type;j(),x.autoReset=b,Oe.enabled=O,Oe.autoUpdate=W,Oe.needsUpdate=V,Oe.type=B}function ut(b){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function li(b){const O=b.target;O.removeEventListener("dispose",li),mi(O)}function mi(b){Yh(b),L.remove(b)}function Yh(b){const O=L.get(b).programs;O!==void 0&&(O.forEach(function(W){ae.releaseProgram(W)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,V,B,le){O===null&&(O=Ue);const me=B.isMesh&&B.matrixWorld.determinantAffine()<0,Te=Kh(b,O,W,V,B);A.setMaterial(V,me);let Ae=W.index,ke=1;if(V.wireframe===!0){if(Ae=ue.getWireframeAttribute(W),Ae===void 0)return;ke=2}const $e=W.drawRange,je=W.attributes.position;let Fe=$e.start*ke,dt=($e.start+$e.count)*ke;le!==null&&(Fe=Math.max(Fe,le.start*ke),dt=Math.min(dt,(le.start+le.count)*ke)),Ae!==null?(Fe=Math.max(Fe,0),dt=Math.min(dt,Ae.count)):je!=null&&(Fe=Math.max(Fe,0),dt=Math.min(dt,je.count));const vt=dt-Fe;if(vt<0||vt===1/0)return;Me.setup(B,V,Te,W,Ae);let _t,nt=N;if(Ae!==null&&(_t=se.get(Ae),nt=Z,nt.setIndex(_t)),B.isMesh)V.wireframe===!0?(A.setLineWidth(V.wireframeLinewidth*Xe()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(B.isLine){let It=V.linewidth;It===void 0&&(It=1),A.setLineWidth(It*Xe()),B.isLineSegments?nt.setMode(P.LINES):B.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else B.isPoints?nt.setMode(P.POINTS):B.isSprite&&nt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,Re=B._multiDrawCounts,ti=B._multiDrawCount,rt=Ae?se.get(Ae).bytesPerElement:1,$t=L.get(V).currentProgram.getUniforms();for(let ci=0;ci<ti;ci++)$t.setValue(P,"_gl_DrawID",ci),nt.render(It[ci]/rt,Re[ci])}else if(B.isInstancedMesh)nt.renderInstances(Fe,vt,B.count);else if(W.isInstancedBufferGeometry){const It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,It);nt.renderInstances(Fe,vt,Re)}else nt.render(Fe,vt)};function yo(b,O,W){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,Ur(b,O,W),b.side=0,b.needsUpdate=!0,Ur(b,O,W),b.side=2):Ur(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),E=te.get(W),E.init(O),R.push(E),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const V=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Te=le[me];yo(Te,W,B),V.add(Te)}else yo(le,W,B),V.add(le)}),E=R.pop(),V},this.compileAsync=function(b,O,W=null){const V=this.compile(b,O,W);return new Promise(B=>{function le(){if(V.forEach(function(me){L.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){B(b);return}setTimeout(le,10)}tt.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Js=null;function Zh(b){Js&&Js(b)}function xo(){Wi.stop()}function Mo(){Wi.start()}const Wi=new zh;Wi.setAnimationLoop(Zh),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){Js=b,pe.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},pe.addEventListener("sessionstart",xo),pe.addEventListener("sessionend",Mo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;I!==null&&I.renderStart(b,O);const W=pe.enabled===!0&&pe.isPresenting===!0,V=y!==null&&(z===null||W)&&y.begin(T,z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,O,z),E=te.get(b,R.length),E.init(O),E.state.textureUnits=H.getTextureUnits(),R.push(E),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(_e,un,O.reversedDepth),ce=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,ce),v=Ce.get(b,w.length),v.init(),w.push(v),pe.enabled===!0&&pe.isPresenting===!0){const le=T.xr.getDepthSensingMesh();le!==null&&Ks(le,O,-1/0,T.sortObjects)}Ks(b,O,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(de,De,O.reversedDepth),We=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,We&&Ge.addToRenderList(v,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ie.beginShadows();const B=E.state.shadowsArray;if(Oe.render(B,b,O),re===!0&&Ie.endShadows(),(V&&y.hasRenderPass())===!1){const le=v.opaque,me=v.transmissive;if(E.setupLights(),O.isArrayCamera){const Te=O.cameras;if(me.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const $e=Te[Ae];bo(le,me,b,$e)}We&&Ge.render(b);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const $e=Te[Ae];So(v,b,$e,$e.viewport)}}else me.length>0&&bo(le,me,b,O),We&&Ge.render(b),So(v,b,O)}z!==null&&q===0&&(H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z)),V&&y.end(T),b.isScene===!0&&b.onAfterRender(T,b,O),Me.resetDefaultState(),ee=-1,ie=null,R.pop(),R.length>0?(E=R[R.length-1],H.setTextureUnits(E.state.textureUnits),re===!0&&Ie.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,I!==null&&I.renderEnd()};function Ks(b,O,W,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){V&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const le=D.update(b),me=b.material;me.visible&&v.push(b,le,me,W,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const le=D.update(b),me=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Le.copy(le.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(me)){const Te=le.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const $e=Te[Ae],je=me[$e.materialIndex];je&&je.visible&&v.push(b,le,je,W,Le.z,$e)}}else me.visible&&v.push(b,le,me,W,Le.z,null)}}const B=b.children;for(let le=0,me=B.length;le<me;le++)Ks(B[le],O,W,V)}function So(b,O,W,V){const{opaque:B,transmissive:le,transparent:me}=b;E.setupLightsView(W),re===!0&&Ie.setGlobalState(T.clippingPlanes,W),V&&A.viewport(ne.copy(V)),B.length>0&&Lr(B,O,W),le.length>0&&Lr(le,O,W),me.length>0&&Lr(me,O,W),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function bo(b,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const je=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ei(1,1,{generateMipmaps:!0,type:je?hn:Fi,minFilter:Cr,samples:Math.max(4,Qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const B=E.state.transmissionRenderTarget[V.id],le=V.viewport||ne;B.setSize(le.z*T.transmissionResolutionScale,le.w*T.transmissionResolutionScale);const me=T.getRenderTarget(),Te=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(B),T.getClearColor(st),at=T.getClearAlpha(),at<1&&T.setClearColor(16777215,.5),T.clear(),We&&Ge.render(W);const ke=T.toneMapping;T.toneMapping=0;const $e=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),re===!0&&Ie.setGlobalState(T.clippingPlanes,V),Lr(b,W,V),H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B),tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Fe=0,dt=O.length;Fe<dt;Fe++){const{object:vt,geometry:_t,material:nt,group:It}=O[Fe];if(nt.side===2&&vt.layers.test(V.layers)){const Re=nt.side;nt.side=1,nt.needsUpdate=!0,To(vt,W,V,_t,nt,It),nt.side=Re,nt.needsUpdate=!0,je=!0}}je===!0&&(H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B))}T.setRenderTarget(me,Te,Ae),T.setClearColor(st,at),$e!==void 0&&(V.viewport=$e),T.toneMapping=ke}function Lr(b,O,W){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,le=b.length;B<le;B++){const me=b[B],{object:Te,geometry:Ae,group:ke}=me;let $e=me.material;$e.allowOverride===!0&&V!==null&&($e=V),Te.layers.test(W.layers)&&To(Te,O,W,Ae,$e,ke)}}function To(b,O,W,V,B,le){b.onBeforeRender(T,O,W,V,B,le),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(T,O,W,V,b,le),B.transparent===!0&&B.side===2&&B.forceSinglePass===!1?(B.side=1,B.needsUpdate=!0,T.renderBufferDirect(W,O,V,B,b,le),B.side=0,B.needsUpdate=!0,T.renderBufferDirect(W,O,V,B,b,le),B.side=2):T.renderBufferDirect(W,O,V,B,b,le),b.onAfterRender(T,O,W,V,B,le)}function Ur(b,O,W){O.isScene!==!0&&(O=Ue);const V=L.get(b),B=E.state.lights,le=E.state.shadowsArray,me=B.state.version,Te=ae.getParameters(b,B.state,le,O,W,E.state.lightProbeGridArray),Ae=ae.getProgramCacheKey(Te);let ke=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=K.get(b.envMap||V.environment,$e),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",li),ke=new Map,V.programs=ke);let je=ke.get(Ae);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===me)return Eo(b,Te),je}else Te.uniforms=ae.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,W,Te),b.onBeforeCompile(Te,T),je=ae.acquireProgram(Te,Ae),ke.set(Ae,je),V.uniforms=Te.uniforms;const Fe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),Eo(b,Te),V.needsLights=Qh(b),V.lightsStateVersion=me,V.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=je,V.uniformsList=null,je}function Ao(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ws.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Eo(b,O){const W=L.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Jh(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let W=0,V=b.length;W<V;W++){const B=b[W];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function Kh(b,O,W,V,B){O.isScene!==!0&&(O=Ue),H.resetTextureUnits();const le=O.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Te=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:et.workingColorSpace,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ke=K.get(V.envMap||me,Ae),$e=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let _t=0;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_t=T.toneMapping);const nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=nt!==void 0?nt.length:0,Re=L.get(V),ti=E.state.lights;if(re===!0&&(ce===!0||b!==ie)){const ot=b===ie&&V.id===ee;Ie.setState(V,b,ot)}let rt=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ti.state.version||Re.outputColorSpace!==Te||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==ke||V.fog===!0&&Re.fog!==le||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ie.numPlanes||Re.numIntersection!==Ie.numIntersection)||Re.vertexAlphas!==$e||Re.vertexTangents!==je||Re.morphTargets!==Fe||Re.morphNormals!==dt||Re.morphColors!==vt||Re.toneMapping!==_t||Re.morphTargetsCount!==It||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Re.__version=V.version);let $t=Re.currentProgram;rt===!0&&($t=Ur(V,O,B),I&&V.isNodeMaterial&&I.onUpdateProgram(V,$t,Re));let ci=!1,Ei=!1,gn=!1;const ct=$t.getUniforms(),xt=Re.uniforms;if(A.useProgram($t.program)&&(ci=!0,Ei=!0,gn=!0),V.id!==ee&&(ee=V.id,Ei=!0),Re.needsLights){const ot=Jh(E.state.lightProbeGridArray,B);Re.lightProbeGrid!==ot&&(Re.lightProbeGrid=ot,Ei=!0)}if(ci||ie!==b){A.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",b.projectionMatrix),ct.setValue(P,"viewMatrix",b.matrixWorldInverse);const ot=ct.map.cameraPosition;ot!==void 0&&ot.setValue(P,ye.setFromMatrixPosition(b.matrixWorld)),Qe.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),ie!==b&&(ie=b,Ei=!0,gn=!0)}if(Re.needsLights&&(ti.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",ti.state.directionalShadowMap,H),ti.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",ti.state.spotShadowMap,H),ti.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",ti.state.pointShadowMap,H)),B.isSkinnedMesh){ct.setOptional(P,B,"bindMatrix"),ct.setOptional(P,B,"bindMatrixInverse");const ot=B.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),ct.setValue(P,"boneTexture",ot.boneTexture,H))}B.isBatchedMesh&&(ct.setOptional(P,B,"batchingTexture"),ct.setValue(P,"batchingTexture",B._matricesTexture,H),ct.setOptional(P,B,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",B._indirectTexture,H),ct.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",B._colorsTexture,H));const wi=W.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&it.update(B,W,$t),(Ei||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,ct.setValue(P,"receiveShadow",B.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(xt.envMapIntensity.value=O.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Sv()),Ei){if(ct.setValue(P,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&$h(xt,gn),le&&V.fog===!0&&Se.refreshFogUniforms(xt,le),Se.refreshMaterialUniforms(xt,V,ve,oe,E.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){const ot=Re.lightProbeGrid;xt.probesSH.value=ot.texture,xt.probesMin.value.copy(ot.boundingBox.min),xt.probesMax.value.copy(ot.boundingBox.max),xt.probesResolution.value.copy(ot.resolution)}ws.upload(P,Ao(Re),xt,H)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ws.upload(P,Ao(Re),xt,H),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(P,"center",B.center),ct.setValue(P,"modelViewMatrix",B.modelViewMatrix),ct.setValue(P,"normalMatrix",B.normalMatrix),ct.setValue(P,"modelMatrix",B.matrixWorld),V.uniformsGroups!==void 0){const ot=V.uniformsGroups;for(let er=0,vn=ot.length;er<vn;er++){const wo=ot[er];Ee.update(wo,$t),Ee.bind(wo,$t)}}return $t}function $h(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Qh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,O,W){const V=L.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),L.get(b.texture).__webglTexture=O,L.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const W=L.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){z=b,G=O,q=W;let V=null,B=!1,le=!1;if(b){const me=L.get(b);if(me.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(P.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(b.viewport),ge.copy(b.scissor),we=b.scissorTest,A.viewport(ne),A.scissor(ge),A.setScissorTest(we),ee=-1;return}else if(me.__webglFramebuffer===void 0)H.setupRenderTarget(b);else if(me.__hasExternalTextures)H.rebindTextures(b,L.get(b.texture).__webglTexture,L.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&L.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const Ae=L.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?V=Ae[O][W]:V=Ae[O],B=!0):b.samples>0&&H.useMultisampledRTT(b)===!1?V=L.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[W]:V=Ae,ne.copy(b.viewport),ge.copy(b.scissor),we=b.scissorTest}else ne.copy(Be).multiplyScalar(ve).floor(),ge.copy(Ne).multiplyScalar(ve).floor(),we=Je;if(W!==0&&(V=F),A.bindFramebuffer(P.FRAMEBUFFER,V)&&A.drawBuffers(b,V),A.viewport(ne),A.scissor(ge),A.setScissorTest(we),B){const me=L.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,W)}else if(le){const me=O;for(let Te=0;Te<b.textures.length;Te++){const Ae=L.get(b.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,W,me)}}else if(b!==null&&W!==0){const me=L.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,W)}ee=-1},this.readRenderTargetPixels=function(b,O,W,V,B,le,me,Te=0){if(!(b&&b.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=L.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){A.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const ke=b.textures[Te],$e=ke.format,je=ke.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),!Qe.textureFormatReadable($e)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(je)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&W>=0&&W<=b.height-B&&P.readPixels(O,W,V,B,Q.convert($e),Q.convert(je),le)}finally{const ke=z!==null?L.get(z).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,V,B,le,me,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=L.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae)if(O>=0&&O<=b.width-V&&W>=0&&W<=b.height-B){A.bindFramebuffer(P.FRAMEBUFFER,Ae);const ke=b.textures[Te],$e=ke.format,je=ke.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),!Qe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(O,W,V,B,Q.convert($e),Q.convert(je),0);const dt=z!==null?L.get(z).__webglFramebuffer:null;A.bindFramebuffer(P.FRAMEBUFFER,dt);const vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ju(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Fe),P.deleteSync(vt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,W=0){const V=Math.pow(2,-W),B=Math.floor(b.image.width*V),le=Math.floor(b.image.height*V),me=O!==null?O.x:0,Te=O!==null?O.y:0;H.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,me,Te,B,le),A.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,V=null,B=0,le=0){let me,Te,Ae,ke,$e,je,Fe,dt,vt;const _t=b.isCompressedTexture?b.mipmaps[le]:b.image;if(W!==null)me=W.max.x-W.min.x,Te=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,$e=W.min.y,je=W.isBox3?W.min.z:0;else{const xt=Math.pow(2,-B);me=Math.floor(_t.width*xt),Te=Math.floor(_t.height*xt),b.isDataArrayTexture?Ae=_t.depth:b.isData3DTexture?Ae=Math.floor(_t.depth*xt):Ae=1,ke=0,$e=0,je=0}V!==null?(Fe=V.x,dt=V.y,vt=V.z):(Fe=0,dt=0,vt=0);const nt=Q.convert(O.format),It=Q.convert(O.type);let Re;O.isData3DTexture?(H.setTexture3D(O,0),Re=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(H.setTexture2DArray(O,0),Re=P.TEXTURE_2D_ARRAY):(H.setTexture2D(O,0),Re=P.TEXTURE_2D),A.activeTexture(P.TEXTURE0),A.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const ti=A.getParameter(P.UNPACK_ROW_LENGTH),rt=A.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=A.getParameter(P.UNPACK_SKIP_PIXELS),ci=A.getParameter(P.UNPACK_SKIP_ROWS),Ei=A.getParameter(P.UNPACK_SKIP_IMAGES);A.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),A.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(P.UNPACK_SKIP_ROWS,$e),A.pixelStorei(P.UNPACK_SKIP_IMAGES,je);const gn=b.isDataArrayTexture||b.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const xt=L.get(b),wi=L.get(O),ot=L.get(xt.__renderTarget),er=L.get(wi.__renderTarget);A.bindFramebuffer(P.READ_FRAMEBUFFER,ot.__webglFramebuffer),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let vn=0;vn<Ae;vn++)gn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(b).__webglTexture,B,je+vn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(O).__webglTexture,le,vt+vn)),P.blitFramebuffer(ke,$e,me,Te,Fe,dt,me,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||L.has(b)){const xt=L.get(b),wi=L.get(O);A.bindFramebuffer(P.READ_FRAMEBUFFER,X),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let ot=0;ot<Ae;ot++)gn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,B,je+ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,B),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wi.__webglTexture,le,vt+ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wi.__webglTexture,le),B!==0?P.blitFramebuffer(ke,$e,me,Te,Fe,dt,me,Te,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(Re,le,Fe,dt,vt+ot,ke,$e,me,Te):P.copyTexSubImage2D(Re,le,Fe,dt,ke,$e,me,Te);A.bindFramebuffer(P.READ_FRAMEBUFFER,null),A.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Re,le,Fe,dt,vt,me,Te,Ae,nt,It,_t.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,le,Fe,dt,vt,me,Te,Ae,nt,_t.data):P.texSubImage3D(Re,le,Fe,dt,vt,me,Te,Ae,nt,It,_t):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Fe,dt,me,Te,nt,It,_t.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Fe,dt,_t.width,_t.height,nt,_t.data):P.texSubImage2D(P.TEXTURE_2D,le,Fe,dt,me,Te,nt,It,_t);A.pixelStorei(P.UNPACK_ROW_LENGTH,ti),A.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),A.pixelStorei(P.UNPACK_SKIP_ROWS,ci),A.pixelStorei(P.UNPACK_SKIP_IMAGES,Ei),le===0&&O.generateMipmaps&&P.generateMipmap(Re),A.unbindTexture()},this.initRenderTarget=function(b){L.get(b).__webglFramebuffer===void 0&&H.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?H.setTextureCube(b,0):b.isData3DTexture?H.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?H.setTexture2DArray(b,0):H.setTexture2D(b,0),A.unbindTexture()},this.resetState=function(){G=0,q=0,z=null,A.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};export{A_ as ACESFilmicToneMapping,Wv as AddEquation,x_ as AddOperation,xc as AdditiveAnimationBlendMode,zv as AdditiveBlending,w_ as AgXToneMapping,su as AlphaFormat,S0 as AlwaysCompare,u_ as AlwaysDepth,p0 as AlwaysStencilFunc,wp as AmbientLight,Qp as AnimationAction,ks as AnimationClip,ny as AnimationLoader,gy as AnimationMixer,my as AnimationObjectGroup,iy as AnimationUtils,cf as ArcCurve,Dp as ArrayCamera,zy as ArrowHelper,jh as AttachedBindMode,zp as Audio,py as AudioAnalyser,Dh as AudioContext,dy as AudioListener,hy as AudioLoader,Vy as AxesHelper,Dv as BackSide,Xu as BasicDepthPacking,Iv as BasicShadowMap,jd as BatchedMesh,pp as BezierInterpolant,Bc as Bone,$n as BooleanKeyframeTrack,tm as Box2,kt as Box3,Fy as Box3Helper,Ws as BoxGeometry,Oy as BoxHelper,ht as BufferAttribute,Ze as BufferGeometry,Lp as BufferGeometryLoader,eu as ByteType,bi as Cache,vo as Camera,Dy as CameraHelper,ey as CanvasTexture,sf as CapsuleGeometry,hf as CatmullRomCurve3,T_ as CineonToneMapping,af as CircleGeometry,Zt as ClampToEdgeWrapping,by as Clock,xe as Color,Ih as ColorKeyframeTrack,et as ColorManagement,F0 as Compatibility,Q0 as CompressedArrayTexture,j0 as CompressedCubeTexture,co as CompressedTexture,ry as CompressedTextureLoader,Zc as ConeGeometry,l_ as ConstantAlphaFactor,a_ as ConstantColorFactor,Gy as Controls,Np as CubeCamera,rf as CubeDepthTexture,P_ as CubeReflectionMapping,L_ as CubeRefractionMapping,Hs as CubeTexture,sy as CubeTextureLoader,D_ as CubeUVReflectionMapping,Qc as CubicBezierCurve,_f as CubicBezierCurve3,dp as CubicInterpolant,wv as CullFaceBack,Cv as CullFaceFront,Rv as CullFaceFrontBack,Ev as CullFaceNone,pi as Curve,xf as CurvePath,Gv as CustomBlending,E_ as CustomToneMapping,qc as CylinderGeometry,Ay as Cylindrical,ao as Data3DTexture,so as DataArrayTexture,si as DataTexture,ay as DataTextureLoader,H0 as DataUtils,n0 as DecrementStencilOp,s0 as DecrementWrapStencilOp,_p as DefaultLoadingManager,Sr as DepthFormat,gc as DepthStencilFormat,Zn as DepthTexture,R_ as DetachedBindMode,Ep as DirectionalLight,Ny as DirectionalLightHelper,fp as DiscreteInterpolant,of as DodecahedronGeometry,Ov as DoubleSide,t_ as DstAlphaFactor,n_ as DstColorFactor,R0 as DynamicCopyUsage,b0 as DynamicDrawUsage,E0 as DynamicReadUsage,lf as EdgesGeometry,ho as EllipseCurve,v0 as EqualCompare,p_ as EqualDepth,c0 as EqualStencilFunc,U_ as EquirectangularReflectionMapping,N_ as EquirectangularRefractionMapping,Gi as Euler,fi as EventDispatcher,Gc as ExternalTexture,zf as ExtrudeGeometry,Hi as FileLoader,J0 as Float16BufferAttribute,be as Float32BufferAttribute,zi as FloatType,Ad as Fog,Td as FogExp2,$0 as FramebufferTexture,Nv as FrontSide,Yn as Frustum,Wd as FrustumArray,My as GLBufferAttribute,P0 as GLSL1,L0 as GLSL3,y0 as GreaterCompare,g_ as GreaterDepth,M0 as GreaterEqualCompare,m_ as GreaterEqualDepth,f0 as GreaterEqualStencilFunc,u0 as GreaterStencilFunc,Ly as GridHelper,mr as Group,ty as HTMLTexture,hn as HalfFloatType,xp as HemisphereLight,Py as HemisphereLightHelper,Gf as IcosahedronGeometry,cy as ImageBitmapLoader,Gs as ImageLoader,pd as ImageUtils,i0 as IncrementStencilOp,r0 as IncrementWrapStencilOp,Tr as InstancedBufferAttribute,Pp as InstancedBufferGeometry,xy as InstancedInterleavedBuffer,Vd as InstancedMesh,Y0 as Int16BufferAttribute,Z0 as Int32BufferAttribute,W0 as Int8BufferAttribute,iu as IntType,lo as InterleavedBuffer,Os as InterleavedBufferAttribute,Pr as Interpolant,Co as InterpolateBezier,Ps as InterpolateDiscrete,Wa as InterpolateLinear,$s as InterpolateSmooth,O0 as InterpolationSamplingMode,D0 as InterpolationSamplingType,a0 as InvertStencilOp,Qs as KeepStencilOp,oi as KeyframeTrack,Ud as LOD,Hf as LatheGeometry,oo as Layers,g0 as LessCompare,d_ as LessDepth,_0 as LessEqualCompare,f_ as LessEqualDepth,h0 as LessEqualStencilFunc,l0 as LessStencilFunc,mn as Light,Rp as LightProbe,dn as Line,wy as Line3,Xt as LineBasicMaterial,jc as LineCurve,yf as LineCurve3,cp as LineDashedMaterial,ef as LineLoop,Ai as LineSegments,St as LinearFilter,Rh as LinearInterpolant,z_ as LinearMipMapLinearFilter,B_ as LinearMipMapNearestFilter,Cr as LinearMipmapLinearFilter,uc as LinearMipmapNearestFilter,Xa as LinearSRGBColorSpace,S_ as LinearToneMapping,Us as LinearTransfer,Kt as Loader,Tl as LoaderUtils,Lh as LoadingManager,k_ as LoopOnce,Wu as LoopPingPong,Hu as LoopRepeat,Tv as MOUSE,Ot as Material,Hv as MaterialBlending,Ip as MaterialLoader,V0 as MathUtils,Ey as Matrix2,qe as Matrix3,He as Matrix4,Zv as MaxEquation,Tt as Mesh,pn as MeshBasicMaterial,Ah as MeshDepthMaterial,Eh as MeshDistanceMaterial,op as MeshLambertMaterial,lp as MeshMatcapMaterial,ap as MeshNormalMaterial,rp as MeshPhongMaterial,np as MeshPhysicalMaterial,Th as MeshStandardMaterial,sp as MeshToonMaterial,Yv as MinEquation,Rs as MirroredRepeatWrapping,y_ as MixOperation,kv as MultiplyBlending,__ as MultiplyOperation,Ct as NearestFilter,F_ as NearestMipMapLinearFilter,O_ as NearestMipMapNearestFilter,hc as NearestMipmapLinearFilter,cc as NearestMipmapNearestFilter,C_ as NeutralToneMapping,m0 as NeverCompare,h_ as NeverDepth,o0 as NeverStencilFunc,Fv as NoBlending,K_ as NoColorSpace,$_ as NoNormalPacking,M_ as NoToneMapping,io as NormalAnimationBlendMode,Bv as NormalBlending,j_ as NormalGAPacking,Q_ as NormalRGPacking,x0 as NotEqualCompare,v_ as NotEqualDepth,d0 as NotEqualStencilFunc,po as NumberKeyframeTrack,lt as Object3D,ly as ObjectLoader,J_ as ObjectSpaceNormalMap,uh as OctahedronGeometry,Kv as OneFactor,c_ as OneMinusConstantAlphaFactor,o_ as OneMinusConstantColorFactor,i_ as OneMinusDstAlphaFactor,r_ as OneMinusDstColorFactor,e_ as OneMinusSrcAlphaFactor,Qv as OneMinusSrcColorFactor,qs as OrthographicCamera,Pv as PCFShadowMap,Lv as PCFSoftShadowMap,Gl as PMREMGenerator,Vs as Path,Nt as PerspectiveCamera,rn as Plane,fo as PlaneGeometry,By as PlaneHelper,Tp as PointLight,Iy as PointLightHelper,tf as Points,kc as PointsMaterial,Uy as PolarGridHelper,Ir as PolyhedronGeometry,fy as PositionalAudio,ft as PropertyBinding,kp as PropertyMixer,eh as QuadraticBezierCurve,th as QuadraticBezierCurve3,Wt as Quaternion,mo as QuaternionKeyframeTrack,mp as QuaternionLinearInterpolant,_u as R11_EAC_Format,ku as RED_GREEN_RGTC2_Format,zu as RED_RGTC1_Format,bv as REVISION,xu as RG11_EAC_Format,X_ as RGBADepthPacking,Vi as RGBAFormat,yc as RGBAIntegerFormat,Uu as RGBA_ASTC_10x10_Format,Iu as RGBA_ASTC_10x5_Format,Pu as RGBA_ASTC_10x6_Format,Lu as RGBA_ASTC_10x8_Format,Nu as RGBA_ASTC_12x10_Format,Du as RGBA_ASTC_12x12_Format,Su as RGBA_ASTC_4x4_Format,bu as RGBA_ASTC_5x4_Format,Tu as RGBA_ASTC_5x5_Format,Au as RGBA_ASTC_6x5_Format,Eu as RGBA_ASTC_6x6_Format,wu as RGBA_ASTC_8x5_Format,Cu as RGBA_ASTC_8x6_Format,Ru as RGBA_ASTC_8x8_Format,Ou as RGBA_BPTC_Format,vu as RGBA_ETC2_EAC_Format,pu as RGBA_PVRTC_2BPPV1_Format,fu as RGBA_PVRTC_4BPPV1_Format,lu as RGBA_S3TC_DXT1_Format,cu as RGBA_S3TC_DXT3_Format,hu as RGBA_S3TC_DXT5_Format,q_ as RGBDepthPacking,au as RGBFormat,V_ as RGBIntegerFormat,Fu as RGB_BPTC_SIGNED_Format,Bu as RGB_BPTC_UNSIGNED_Format,mu as RGB_ETC1_Format,gu as RGB_ETC2_Format,du as RGB_PVRTC_2BPPV1_Format,uu as RGB_PVRTC_4BPPV1_Format,ou as RGB_S3TC_DXT1_Format,Y_ as RGDepthPacking,Is as RGFormat,_c as RGIntegerFormat,bh as RawShaderMaterial,Rr as Ray,Sy as Raycaster,Cp as RectAreaLight,vc as RedFormat,to as RedIntegerFormat,b_ as ReinhardToneMapping,wc as RenderTarget,vy as RenderTarget3D,Cs as RepeatWrapping,t0 as ReplaceStencilOp,qv as ReverseSubtractEquation,Wf as RingGeometry,yu as SIGNED_R11_EAC_Format,Gu as SIGNED_RED_GREEN_RGTC2_Format,Vu as SIGNED_RED_RGTC1_Format,Mu as SIGNED_RG11_EAC_Format,jt as SRGBColorSpace,Ns as SRGBTransfer,Ed as Scene,Ke as ShaderChunk,di as ShaderLib,ai as ShaderMaterial,Qf as ShadowMaterial,Xs as Shape,Xf as ShapeGeometry,ky as ShapePath,Di as ShapeUtils,tu as ShortType,Bd as Skeleton,Ry as SkeletonHelper,Od as SkinnedMesh,an as Source,Dt as Sphere,gh as SphereGeometry,Ty as Spherical,Uh as SphericalHarmonics3,ih as SplineCurve,Sp as SpotLight,Cy as SpotLightHelper,Ld as Sprite,Oc as SpriteMaterial,jv as SrcAlphaFactor,s_ as SrcAlphaSaturateFactor,$v as SrcColorFactor,C0 as StaticCopyUsage,no as StaticDrawUsage,A0 as StaticReadUsage,uy as StereoCamera,I0 as StreamCopyUsage,T0 as StreamDrawUsage,w0 as StreamReadUsage,Qn as StringKeyframeTrack,Xv as SubtractEquation,Vv as SubtractiveBlending,Av as TOUCH,Z_ as TangentSpaceNormalMap,Yf as TetrahedronGeometry,Rt as Texture,oy as TextureLoader,Hy as TextureUtils,Op as Timer,N0 as TimestampQuery,Zf as TorusGeometry,Jf as TorusKnotGeometry,sn as Triangle,W_ as TriangleFanDrawMode,H_ as TriangleStripDrawMode,G_ as TrianglesDrawMode,Kf as TubeGeometry,I_ as UVMapping,Lc as Uint16BufferAttribute,Uc as Uint32BufferAttribute,X0 as Uint8BufferAttribute,q0 as Uint8ClampedBufferAttribute,_y as Uniform,yy as UniformsGroup,fe as UniformsLib,ep as UniformsUtils,Fi as UnsignedByteType,ru as UnsignedInt101111Type,mc as UnsignedInt248Type,nu as UnsignedInt5999Type,Bi as UnsignedIntType,fc as UnsignedShort4444Type,pc as UnsignedShort5551Type,dc as UnsignedShortType,Uv as VSMShadowMap,$ as Vector2,C as Vector3,pt as Vector4,Ph as VectorKeyframeTrack,K0 as VideoFrameTexture,nf as VideoTexture,G0 as WebGL3DRenderTarget,k0 as WebGLArrayRenderTarget,un as WebGLCoordinateSystem,kh as WebGLCubeRenderTarget,ei as WebGLRenderTarget,Wy as WebGLRenderer,fv as WebGLUtils,U0 as WebGPUCoordinateSystem,ra as WebXRController,$f as WireframeGeometry,Ls as WrapAroundEnding,kn as ZeroCurvatureEnding,Jv as ZeroFactor,Gn as ZeroSlopeEnding,e0 as ZeroStencilOp,Zu as createCanvasElement,Pe as error,z0 as getConsoleFunction,Ds as log,B0 as setConsoleFunction,he as warn,ln as warnOnce};

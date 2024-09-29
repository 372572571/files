import{w as ln,c as F}from"./path-53f90ab3.js";import{bA as an,bB as K,bC as w,bD as rn,bE as y,aL as on,bF as j,bG as _,bH as un,bI as t,bJ as sn,bK as tn,bL as fn}from"./doc-c58f2a0a.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,G,a){var L=I-l,i=D-h,n=G-v,m=a-A,r=m*L-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*L,h+r*i]}function V(l,h,I,D,v,A,G){var a=l-I,L=h-D,i=(G?A:-A)/j(a*a+L*L),n=i*L,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,H=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,b=v-A,T=r*c-f*s,q=(g<0?-1:1)*j(fn(0,b*b*R-T*T)),B=(T*g-p*q)/R,C=(-T*p-g*q)/R,P=(T*g+p*q)/R,d=(-T*p+g*q)/R,x=B-H,e=C-o,u=P-H,J=d-o;return x*x+e*e>u*u+J*J&&(B=P,C=d),{cx:B,cy:C,x01:-n,y01:-m,x11:B*(v/b-1),y11:C*(v/b-1)}}function vn(){var l=cn,h=yn,I=F(0),D=null,v=gn,A=mn,G=pn,a=null,L=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,H=un(c-f),o=c>f;if(a||(a=n=L()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(H>on-y)a.moveTo(s*K(f),s*w(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*K(c),r*w(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,b=c,T=H,q=H,B=G.apply(this,arguments)/2,C=B>y&&(D?+D.apply(this,arguments):j(r*r+s*s)),P=_(un(s-r)/2,+I.apply(this,arguments)),d=P,x=P,e,u;if(C>y){var J=sn(C/r*w(B)),z=sn(C/s*w(B));(T-=J*2)>y?(J*=o?1:-1,R+=J,b-=J):(T=0,R=b=(f+c)/2),(q-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(q=0,p=g=(f+c)/2)}var O=s*K(p),S=s*w(p),M=r*K(b),N=r*w(b);if(P>y){var Q=s*K(g),U=s*w(g),W=r*K(R),X=r*w(R),E;if(H<an)if(E=dn(O,S,W,X,Q,U,M,N)){var Y=O-E[0],Z=S-E[1],$=Q-E[0],k=U-E[1],nn=1/w(tn((Y*$+Z*k)/(j(Y*Y+Z*Z)*j($*$+k*k)))/2),en=j(E[0]*E[0]+E[1]*E[1]);d=_(P,(r-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}q>y?x>y?(e=V(W,X,O,S,s,x,o),u=V(Q,U,M,N,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(O,S),a.arc(0,0,s,p,g,!o)):a.moveTo(O,S),!(r>y)||!(T>y)?a.lineTo(M,N):d>y?(e=V(M,N,Q,U,r,-d,o),u=V(O,S,W,X,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,b,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[K(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:F(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:F(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:F(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:F(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:F(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:F(+n),i):A},i.padAngle=function(n){return arguments.length?(G=typeof n=="function"?n:F(+n),i):G},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};

"use strict";(self.webpackChunktest_task_tweet=self.webpackChunktest_task_tweet||[]).push([[982],{8137:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var i,r,o,a,l,s,x,c,p,d,u,f,g,h,m,b,Z=t(9439),w=t(168),A=t(8789),j=A.ZP.button(i||(i=(0,w.Z)(["\n  margin-top: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),v=t(184),S=function(n){var e=n.isLoading,t=n.onLoadMore;return(0,v.jsx)(j,{onClick:t,children:e?"Loading...":"Load More"})},k=t(2791),E=t(1087),L=(0,A.ZP)(E.rU)(r||(r=(0,w.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 70px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  max-width: 120px;\n\n  &:hover {\n    background-color: #d7d4f8;\n  }\n"]))),P=function(n){var e=n.to,t=n.children;return(0,v.jsx)(L,{to:e,children:t})},y=t(5243),Y=A.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),I=function(){return(0,v.jsx)(Y,{children:(0,v.jsx)(y.Bb,{height:"80",width:"80",radius:"9",color:"violet",ariaLabel:"loading",wrapperStyle:!0,className:"loader-audio"})})},O=t(1413),T=t(9434),C=t(5660),Q=t(6916),W=t(2330),B=function(n){return n.tweets.items},F=function(n){return n.tweets.isFollowing},N=function(n){return n.tweets.isLoading},q=function(n){return n.tweets.totalItems},z=(0,Q.P1)([B,function(n){return n.filters.status},F],(function(n,e,t){switch(e){case W.H.follow:return n.filter((function(n){return!t.includes(n.id)}));case W.H.followings:return n.filter((function(n){return t.includes(n.id)}));default:return n}})),R=t(4189),U=t.p+"static/media/picture.af9e159fba3a82e059d2.png",G=t(3044),M=t(890),V=A.ZP.article(a||(a=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 20px;\n  width: 308px;\n  height: 396px;\n  padding: 20px 36px 36px 20px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 214px;\n    right: 0;\n    height: 8px;\n    width: 100%;\n    background-color: #ebd8ff;\n    z-index: 0;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),D=A.ZP.div(l||(l=(0,w.Z)(["\n  position: absolute;\n  top: 178px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n"]))),H=(0,A.ZP)(G.Z)(s||(s=(0,w.Z)(["\n  object-fit: cover;\n  border-radius: 50%;\n  width: 62px;\n  height: 62px;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 2;\n"]))),X=A.ZP.div(x||(x=(0,w.Z)(["\n  margin-top: auto;\n  margin-bottom: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),J=(0,A.ZP)(M.Z)(c||(c=(0,w.Z)(["\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),K=A.ZP.button(p||(p=(0,w.Z)(["\n  width: 196px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n  text-align: center;\n  padding: 14px;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: 0;\n  cursor: pointer;\n"]))),_=(0,A.ZP)(K)(d||(d=(0,w.Z)(["\n  background-color: #ebd8ff;\n"]))),$=(0,A.ZP)(K)(u||(u=(0,w.Z)(["\n  background-color: #5cd3a8;\n"]))),nn=A.ZP.img(f||(f=(0,w.Z)(["\n  width: 308px;\n  height: 168px;\n  position: absolute;\n  top: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),en=A.ZP.img(g||(g=(0,w.Z)(["\n  width: 76px;\n  height: 22px;\n  margin-right: auto;\n"]))),tn=function(n){var e=n.id,t=n.user,i=n.avatar,r=n.tweets,o=n.followers,a=(0,k.useState)(o),l=(0,Z.Z)(a,2),s=l[0],x=l[1],c=(0,T.v9)(F).includes(e),p=(0,T.I0)(),d=function(){c?(p((0,C.qC)(e)),x(s-1),p((0,R.Sf)({id:e,followers:o-1}))):(p((0,C.LO)(e)),x(s+1),p((0,R.Sf)({id:e,followers:o+1})))};return(0,v.jsxs)(V,{children:[(0,v.jsx)(en,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"Image logo"}),(0,v.jsx)(nn,{src:U,alt:"Image follow"}),(0,v.jsx)(D,{children:(0,v.jsx)(H,{alt:t,src:i,sx:{width:62,height:62}})}),(0,v.jsxs)(X,{children:[(0,v.jsxs)(J,{variant:"p",children:[r.toLocaleString("en-US")," TWEETS"]}),(0,v.jsxs)(J,{variant:"p",children:[s.toLocaleString("en-US")," FOLLOWERS"]})]}),c?(0,v.jsx)($,{onClick:d,children:"FOLLOWING"}):(0,v.jsx)(_,{onClick:d,children:"FOLLOW"})]})},rn=A.ZP.ul(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 30px;\n"]))),on=A.ZP.li(m||(m=(0,w.Z)(["\n  && {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 380px;\n    height: 460px;\n  }\n"]))),an=function(){var n=(0,T.v9)(z);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(rn,{children:n.map((function(n){return(0,v.jsx)(on,{children:(0,v.jsx)(tn,(0,O.Z)({},n))},n.id)}))})})},ln=t(3061),sn=t(6362),xn=t(4925),cn=t(9731),pn=t(9891),dn=t(1429),un=A.ZP.div(b||(b=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),fn=function(){var n=(0,T.I0)(),e=(0,T.v9)((function(n){return n.filters.status}));return(0,v.jsx)(un,{children:(0,v.jsxs)(sn.Z,{style:{minWidth:180},children:[(0,v.jsx)(xn.Z,{children:"Filter"}),(0,v.jsxs)(cn.Z,{value:e,onChange:function(e){return function(e){return n((0,dn.T)(e))}(e.target.value)},children:[(0,v.jsx)(pn.Z,{value:W.H.all,children:"All"}),(0,v.jsx)(pn.Z,{value:W.H.follow,children:"Follow"}),(0,v.jsx)(pn.Z,{value:W.H.followings,children:"Followings"})]})]})})},gn=t(7689),hn=t(2675),mn=function(){var n,e,t=(0,T.I0)(),i=(0,T.v9)(N),r=(0,T.v9)(q),o=(0,k.useState)(1),a=(0,Z.Z)(o,2),l=a[0],s=a[1],x=(0,T.v9)(B),c=(0,k.useState)(!0),p=(0,Z.Z)(c,2),d=p[0],u=p[1],f=(0,gn.TH)(),g=(0,k.useRef)(null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),h=Math.ceil(r/3);return(0,k.useEffect)((function(){t((0,R.u_)()),g.current="/"}),[t]),(0,k.useEffect)((function(){t((0,R.P0)({page:l,limit:3}))}),[t,l]),(0,k.useEffect)((function(){0===x.length||l>=h?u(!1):u(!0)}),[l,h,x]),(0,v.jsxs)(hn.G,{children:[(0,v.jsxs)(P,{to:g.current,children:[(0,v.jsx)(ln.PjY,{})," Go back"]}),(0,v.jsx)(fn,{}),i&&(0,v.jsx)(I,{}),(0,v.jsx)(an,{}),d&&(0,v.jsx)(S,{isLoading:i,onLoadMore:function(){s((function(n){return n+1}))}})]})}},2675:function(n,e,t){t.d(e,{G:function(){return s},y:function(){return l}});var i,r,o=t(168),a=t(8789),l=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 80px;\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  padding: 20px 0;\n"])))}}]);
//# sourceMappingURL=982.1cd75616.chunk.js.map
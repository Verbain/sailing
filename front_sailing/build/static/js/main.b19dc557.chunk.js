(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(38),s=c.n(a),r=(c(47),c(48),c(2)),j=c(15),d=c(8),o=c(85),l=(c(29),c(1)),b=function(){var e=Object(d.b)().logout;return Object(l.jsx)(o.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},u=function(){var e=Object(d.b)().loginWithRedirect;return Object(l.jsx)(o.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})},O=c(3),m=c.n(O);var h=function(e){var t=e.wallet;return Object(l.jsxs)("div",{children:[t.wallet," SC"]})};var x=function(){var e=Object(d.b)(),t=e.isAuthenticated,c=e.user,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=a[0],o=a[1];return Object(n.useEffect)((function(){if(!0===t){var e=c.nickname;m.a.get("/api/playerByName/".concat(e)).then((function(e){return o(e.data)}))}}),[]),Object(l.jsx)("nav",{class:"nav-bar",children:Object(l.jsxs)("div",{class:"nav-item",children:[Object(l.jsx)(j.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(l.jsx)(j.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(l.jsx)(j.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(l.jsx)(j.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(l.jsx)(j.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(l.jsx)(j.b,{to:"/teams/createTeam",class:"nav-item-text",children:" CR\xc9ER UNE \xc9QUIPE"}),Object(l.jsx)("div",{class:"nav-item-wallet",children:s.map((function(e){return Object(l.jsx)(h,{wallet:e},e)}))}),Object(l.jsx)("div",{class:"nav-button",children:t?Object(l.jsx)(b,{}):Object(l.jsx)(u,{})})]})})};var v=function(e){var t=e.match,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){m.a.get("/api/teamName/".concat(t.id)).then((function(e){return a(e.data)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[Object(l.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(l.jsx)("div",{class:"div-match-2",children:"VS"}),Object(l.jsx)("div",{class:"div-match-3",children:t.team_2})]})]})},p=c(7),f=c(14);var g=function(e){var t=e.matchbis,c=e.dataTeam,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=a[0],j=a[1];Object(n.useEffect)((function(){m.a.get("/api/teamName/".concat(t.id)).then((function(e){return j(e.data)})),console.log(s)}),[]);var d=Object(f.a)(),o=d.register,b=d.handleSubmit;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[Object(l.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(l.jsx)("div",{class:"div-match-2",children:"VS"}),Object(l.jsx)("div",{class:"div-match-3",children:t.team_2})]}),Object(l.jsxs)("form",{onSubmit:b((function(e){var c={id:t.id,opponent:e.teamID};m.a.post("/api/updateOpponent",c),console.log(c)})),children:[Object(l.jsx)("label",{for:"teams",children:"Choose a team:"}),Object(l.jsx)("select",Object(p.a)(Object(p.a)({id:"teams"},o("teamID")),{},{children:c.map((function(e){return Object(l.jsx)("option",{children:e.id})}))})),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})};var S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(r.a)(a,2),j=s[0],d=s[1],o=Object(n.useState)([]),b=Object(r.a)(o,2),u=b[0],O=b[1];return Object(n.useEffect)((function(){m.a.get("/api/gamesWithOpponent").then((function(e){return i(e.data)})),m.a.get("/api/gamesWithoutOpponent").then((function(e){return d(e.data)})),m.a.get("/api/teams").then((function(e){return O(e.data)}))}),[]),Object(l.jsxs)("div",{class:"div-home-0",children:[Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2",children:[Object(l.jsx)("h2",{children:" Match en cours "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(v,{match:e},e.id)}))})]})}),Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2",children:[Object(l.jsx)("h2",{children:" Recherche de match "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsx)(g,{dataTeam:u,matchbis:e},e.id)}))})]})})]})};var w=function(){var e=Object(d.b)().user,t=e.nickname,c=e.picture,n=e.email,i=Object(f.a)(),a=i.register,s=i.handleSubmit;return Object(l.jsx)("div",{class:"profile-container",children:Object(l.jsxs)("div",{class:"div-profile-0",children:[Object(l.jsx)("div",{class:"div-profile-1",children:Object(l.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(l.jsxs)("div",{class:"div-profile-2",children:[Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Adresse e-mail : ",n]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={opGg:e.opGg,pseudo:t};m.a.post("/api/updateOpGg",c)})),children:[Object(l.jsx)("label",{children:" opgg : "}),Object(l.jsx)("input",Object(p.a)({},a("opGg"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={pseudo:t,summonerName:e.summonerName};m.a.post("/api/newPlayer",c)})),children:[Object(l.jsx)("label",{children:" summoner name : "}),Object(l.jsx)("input",Object(p.a)({},a("summonerName"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})})]})]})})},C=c(28),y=c.n(C);y.a.init("MIXPANEL_TOKEN");var E=function(){var e=Object(f.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newGame",e),window.location="/",y.a.track("Match created")})),children:[Object(l.jsx)("input",Object(p.a)({},t("gameName"))),Object(l.jsx)("input",Object(p.a)({},t("team"))),Object(l.jsx)("input",Object(p.a)({},t("mise"))),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})};var I=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(E,{})})};var k=function(e){var t=e.team,c=Object(f.a)(),n=c.register,i=c.handleSubmit;return Object(l.jsxs)("form",{onSubmit:i((function(e){var c={playerID:e.pseudo,teamID:t.id};m.a.post("/api/addPlayerInTeam",c)})),children:[Object(l.jsx)("input",Object(p.a)({},n("pseudo"))),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})};var N=function(e){var t=e.team,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){m.a.get("/api/teams").then((function(e){return a(e.data)}))}),[]),Object(l.jsx)("div",{class:"team",children:Object(l.jsxs)("div",{class:"teamcard",children:[Object(l.jsx)("div",{class:"teamcard-info",children:Object(l.jsxs)("p",{children:[" ",t.team_name," "]})}),Object(l.jsx)("div",{class:"teamcard-list",children:Object(l.jsx)("li",{children:Object(l.jsx)(k,{team:t})})})]})})},P=c.p+"static/media/add.f29a8121.png";var T=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){m.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(l.jsxs)("div",{class:"teams",children:[Object(l.jsx)("div",{class:"div-team-0",children:Object(l.jsxs)("div",{class:"div-team-1",children:[Object(l.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(l.jsx)("img",{src:P,alt:"+",class:"add-team-img"})}),Object(l.jsx)("div",{className:"div-team-description",children:Object(l.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(l.jsx)(N,{team:e},e.id)}))]})},M=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var R=function(){var e=Object(f.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(l.jsx)("input",Object(p.a)({},t("teamName"))),Object(l.jsx)("input",Object(p.a)({},t("teamPicture"))),Object(l.jsx)("input",Object(p.a)({},t("teamPicture"))),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})};var U=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(R,{})})},_=c(40),L=c(5),A=function(e){var t=e.component,c=Object(_.a)(e,["component"]);return Object(l.jsx)(L.a,Object(p.a)({component:Object(d.c)(t,{onRedirecting:function(){return Object(l.jsx)(M,{})}})},c))},F=c(4),D=c.n(F),Q=c(12),B=c(41),q=Object(B.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),G=function(e){var t=e.handleClick;return Object(l.jsx)("div",{class:"div-shop",children:Object(l.jsxs)("div",{class:"div-shop-container",children:[Object(l.jsxs)("div",{class:"div-shop-product",children:[Object(l.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(l.jsxs)("div",{className:"div-shop-description",children:[Object(l.jsx)("h3",{children:"1 SC"}),Object(l.jsx)("h5",{children:"1\u20ac"})]})]}),Object(l.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},H=function(e){var t=e.message;return Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:t})})};function X(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&i("Order placed! You will receive an email confirmation."),e.get("canceled")&&i("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var a=function(){var e=Object(Q.a)(D.a.mark((function e(t){var c,n,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.next=11,c.redirectToCheckout({sessionId:i.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(l.jsx)(H,{message:c}):Object(l.jsx)(G,{handleClick:a})}var W=function(){return Object(d.b)().isLoading?Object(l.jsx)(M,{}):Object(l.jsx)(j.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{class:"nav-space"}),Object(l.jsxs)(L.c,{children:[Object(l.jsx)(L.a,{path:"/",exact:!0,component:S}),Object(l.jsx)(A,{path:"/profile",exact:!0,component:w}),Object(l.jsx)(A,{path:"/createMatch",exact:!0,component:I}),Object(l.jsx)(A,{path:"/teams/createTeam",exact:!0,component:U}),Object(l.jsx)(A,{path:"/teams",exact:!0,component:T}),Object(l.jsx)(A,{path:"/shop",exact:!0,component:X})]})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};c(81).config();var V=function(e){var t=e.children;return Object(l.jsx)(d.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(V,{children:Object(l.jsx)(W,{})})}),document.getElementById("root")),J()}},[[84,1,2]]]);
//# sourceMappingURL=main.b19dc557.chunk.js.map
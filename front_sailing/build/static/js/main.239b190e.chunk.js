(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(38),s=c.n(a),r=(c(47),c(48),c(2)),j=c(15),d=c(8),l=c(85),o=(c(29),c(1)),b=function(){var e=Object(d.b)().logout;return Object(o.jsx)(l.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},u=function(){var e=Object(d.b)().loginWithRedirect;return Object(o.jsx)(l.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})},m=c(3),h=c.n(m);var O=function(e){var t=e.wallet;return Object(o.jsxs)("div",{children:[t.wallet," SC"]})};var v=function(){var e=Object(d.b)(),t=e.isAuthenticated,c=e.user,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=a[0],l=a[1];return Object(n.useEffect)((function(){if(!0===t){var e=c.nickname;h.a.get("/api/playerByName/".concat(e)).then((function(e){return l(e.data)}))}}),[]),Object(o.jsx)("nav",{class:"nav-bar",children:Object(o.jsxs)("div",{class:"nav-item",children:[Object(o.jsx)(j.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(o.jsx)(j.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(o.jsx)(j.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(o.jsx)(j.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(o.jsx)(j.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(o.jsx)(j.b,{to:"/teams/createTeam",class:"nav-item-text",children:" CR\xc9ER UNE \xc9QUIPE"}),Object(o.jsx)("div",{class:"nav-item-wallet",children:s.map((function(e){return Object(o.jsx)(O,{wallet:e},e)}))}),Object(o.jsx)("div",{class:"nav-button",children:t?Object(o.jsx)(b,{}):Object(o.jsx)(u,{})})]})})};var x=function(e){var t=e.match,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){h.a.get("/api/teamName/".concat(t.id)).then((function(e){return a(e.data)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(o.jsxs)("div",{class:"div-match-0",children:[Object(o.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(o.jsx)("div",{class:"div-match-2",children:"VS"}),Object(o.jsx)("div",{class:"div-match-3",children:t.team_2})]})]})},p=c(7),f=c(14);var g=function(e){var t=e.matchbis,c=e.dataTeam,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=(a[0],a[1]);Object(n.useEffect)((function(){h.a.get("/api/teamName/".concat(t.id)).then((function(e){return s(e.data)}))}),[]);var j=Object(f.a)(),d=j.register,l=j.handleSubmit;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(o.jsxs)("div",{class:"div-match-0",children:[Object(o.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(o.jsx)("div",{class:"div-match-2",children:"VS"}),Object(o.jsx)("div",{class:"div-match-3",children:Object(o.jsxs)("form",{onSubmit:l((function(e){var c={id:t.id,opponent:e.teamID};!t.team_1==e.teamID?h.a.post("/api/updateOpponent",c):alert("Erreur, vous devez \xeatre connecter pour rejoindre un match avec votre \xe9quipe, deplus une m\xeame \xe9quipe ne peux s'affronter.")})),class:"matchbis-form",children:[Object(o.jsx)("label",{for:"teams",children:"\xc9quipe : "}),Object(o.jsx)("select",Object(p.a)(Object(p.a)({id:"teams"},d("teamID")),{},{children:c.map((function(e){return Object(o.jsx)("option",{children:e.id})}))})),Object(o.jsx)("button",{type:"submit",class:"matchbis-button",children:" \u21a9 "})]})})]})]})};var S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(r.a)(a,2),j=s[0],d=s[1],l=Object(n.useState)([]),b=Object(r.a)(l,2),u=b[0],m=b[1];return Object(n.useEffect)((function(){h.a.get("/api/gamesWithOpponent").then((function(e){return i(e.data)})),h.a.get("/api/gamesWithoutOpponent").then((function(e){return d(e.data)})),h.a.get("/api/teams").then((function(e){return m(e.data)}))}),[]),Object(o.jsxs)("div",{class:"div-home-0",children:[Object(o.jsx)("div",{class:"div-home-1",children:Object(o.jsxs)("div",{class:"div-home-2",children:[Object(o.jsx)("h2",{children:" Recherche de match "}),Object(o.jsx)("div",{class:"h2-place"}),Object(o.jsx)("div",{children:j.map((function(e){return Object(o.jsx)(g,{dataTeam:u,matchbis:e},e.id)}))})]})}),Object(o.jsx)("div",{class:"div-home-1",children:Object(o.jsxs)("div",{class:"div-home-2-bis",children:[Object(o.jsx)("h2",{children:" Match en cours "}),Object(o.jsx)("div",{class:"h2-place"}),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)(x,{match:e},e.id)}))})]})})]})};var w=function(){var e=Object(d.b)().user,t=e.nickname,c=e.picture,n=e.email,i=Object(f.a)(),a=i.register,s=i.handleSubmit;return Object(o.jsx)("div",{class:"profile-container",children:Object(o.jsxs)("div",{class:"div-profile-0",children:[Object(o.jsx)("div",{class:"div-profile-1",children:Object(o.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(o.jsxs)("div",{class:"div-profile-2",children:[Object(o.jsx)("div",{class:"div-profile-info",children:Object(o.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(o.jsx)("div",{class:"div-profile-info",children:Object(o.jsxs)("h2",{children:["Adresse e-mail : ",n]})}),Object(o.jsx)("div",{class:"div-profile-info",children:Object(o.jsxs)("form",{onSubmit:s((function(e){var c={opGg:e.opGg,pseudo:t};h.a.post("/api/updateOpGg",c)})),children:[Object(o.jsx)("label",{children:" opgg : "}),Object(o.jsx)("input",Object(p.a)({},a("opGg"))),Object(o.jsx)("button",{type:"submit",children:"Enregistrer"})]})}),Object(o.jsx)("div",{class:"div-profile-info",children:Object(o.jsxs)("form",{onSubmit:s((function(e){var c={pseudo:t,summonerName:e.summonerName,email:n};h.a.post("/api/newPlayer",c)})),children:[Object(o.jsx)("label",{children:" summoner name : "}),Object(o.jsx)("input",Object(p.a)({},a("summonerName"))),Object(o.jsx)("button",{type:"submit",children:"Enregistrer"})]})})]})]})})},C=c(28),E=c.n(C);E.a.init("MIXPANEL_TOKEN");var I=function(e){var t=e.dataTeam,c=Object(f.a)(),n=c.register,i=c.handleSubmit;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{class:"form",onSubmit:i((function(e){h.a.post("/api/newGame",e),window.location="/",E.a.track("Match created")})),children:[Object(o.jsxs)("div",{class:"form-item",children:[Object(o.jsx)("label",{children:" Nom de la partie : "}),Object(o.jsx)("input",Object(p.a)({},n("gameName")))]}),Object(o.jsxs)("div",{class:"form-item",children:[Object(o.jsx)("label",{for:"teams",children:"\xc9quipe : "}),Object(o.jsx)("select",Object(p.a)(Object(p.a)({id:"teams"},n("team")),{},{children:t.map((function(e){return Object(o.jsx)("option",{children:e.id})}))}))]}),Object(o.jsxs)("div",{class:"form-item",children:[Object(o.jsx)("label",{children:" Mise : "}),Object(o.jsx)("input",Object(p.a)({},n("mise")))]}),Object(o.jsx)("div",{class:"form-item",children:Object(o.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){h.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(o.jsx)("div",{class:"div-home-0",children:Object(o.jsx)("div",{class:"div-home-1",children:Object(o.jsx)("div",{class:"div-home-2",children:Object(o.jsx)(I,{dataTeam:c})})})})};var N=function(e){var t=e.team,c=Object(f.a)(),n=c.register,i=c.handleSubmit;return Object(o.jsxs)("form",{onSubmit:i((function(e){var c={playerID:e.pseudo,teamID:t.id};h.a.post("/api/addPlayerInTeam",c)})),children:[Object(o.jsx)("input",Object(p.a)({},n("pseudo"))),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})};var k=function(e){var t=e.team,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){h.a.get("/api/teams").then((function(e){return a(e.data)}))}),[]),Object(o.jsx)("div",{class:"team",children:Object(o.jsxs)("div",{class:"teamcard",children:[Object(o.jsx)("div",{class:"teamcard-info",children:Object(o.jsxs)("p",{children:[" ",t.team_name," "]})}),Object(o.jsx)("div",{class:"teamcard-list",children:Object(o.jsx)("li",{children:Object(o.jsx)(N,{team:t})})})]})})},T=c.p+"static/media/add.f29a8121.png";var P=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){h.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(o.jsxs)("div",{class:"teams",children:[Object(o.jsx)("div",{class:"div-team-0",children:Object(o.jsxs)("div",{class:"div-team-1",children:[Object(o.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(o.jsx)("img",{src:T,alt:"+",class:"add-team-img"})}),Object(o.jsx)("div",{className:"div-team-description",children:Object(o.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(o.jsx)(k,{team:e},e.id)}))]})},M=function(){return Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var q=function(){var e=Object(f.a)(),t=e.register,c=e.handleSubmit;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{class:"form",onSubmit:c((function(e){h.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(o.jsxs)("div",{class:"form-item",children:[Object(o.jsx)("label",{children:" Nom de l'\xe9quipe : "}),Object(o.jsx)("input",Object(p.a)({},t("teamName")))]}),Object(o.jsxs)("div",{class:"form-item",children:[Object(o.jsx)("label",{for:"teams",children:"Image d'\xe9quipe ( pas obligatoire ) : "}),Object(o.jsx)("input",Object(p.a)({},t("teamPicture")))]}),Object(o.jsx)("div",{class:"form-item",children:Object(o.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var R=function(){return Object(o.jsx)("div",{class:"div-home-0",children:Object(o.jsx)("div",{class:"div-home-1",children:Object(o.jsx)("div",{class:"div-home-2",children:Object(o.jsx)(q,{})})})})},U=c(40),_=c(5),L=function(e){var t=e.component,c=Object(U.a)(e,["component"]);return Object(o.jsx)(_.a,Object(p.a)({component:Object(d.c)(t,{onRedirecting:function(){return Object(o.jsx)(M,{})}})},c))},A=c(4),D=c.n(A),F=c(12),Q=c(41),B=Object(Q.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),G=function(e){var t=e.handleClick;return Object(o.jsx)("div",{class:"div-shop",children:Object(o.jsxs)("div",{class:"div-shop-container",children:[Object(o.jsxs)("div",{class:"div-shop-product",children:[Object(o.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(o.jsxs)("div",{className:"div-shop-description",children:[Object(o.jsx)("h3",{children:"1 SC"}),Object(o.jsx)("h5",{children:"1\u20ac"})]})]}),Object(o.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},H=function(e){var t=e.message;return Object(o.jsx)("section",{children:Object(o.jsx)("p",{children:t})})};function X(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&i("Order placed! You will receive an email confirmation."),e.get("canceled")&&i("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var a=function(){var e=Object(F.a)(D.a.mark((function e(t){var c,n,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.next=11,c.redirectToCheckout({sessionId:i.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(o.jsx)(H,{message:c}):Object(o.jsx)(G,{handleClick:a})}var W=function(){return Object(d.b)().isLoading?Object(o.jsx)(M,{}):Object(o.jsx)(j.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(v,{}),Object(o.jsx)("div",{class:"nav-space"}),Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{path:"/",exact:!0,component:S}),Object(o.jsx)(L,{path:"/profile",exact:!0,component:w}),Object(o.jsx)(L,{path:"/createMatch",exact:!0,component:y}),Object(o.jsx)(L,{path:"/teams/createTeam",exact:!0,component:R}),Object(o.jsx)(L,{path:"/teams",exact:!0,component:P}),Object(o.jsx)(L,{path:"/shop",exact:!0,component:X})]})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};c(81).config();var V=function(e){var t=e.children;return Object(o.jsx)(d.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(V,{children:Object(o.jsx)(W,{})})}),document.getElementById("root")),J()}},[[84,1,2]]]);
//# sourceMappingURL=main.239b190e.chunk.js.map
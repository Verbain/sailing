(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(38),s=c.n(i),r=(c(47),c(48),c(3)),o=c(15),j=c(8),d=c(85),l=(c(29),c(1)),u=function(){var e=Object(j.b)().logout;return Object(l.jsx)(d.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},b=function(){var e=Object(j.b)().loginWithRedirect;return Object(l.jsx)(d.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})},m=c(2),O=c.n(m);var h=function(e){var t=e.wallet;return Object(l.jsxs)("div",{children:[t.wallet," SC"]})};var p=function(){var e=Object(j.b)(),t=e.isAuthenticated,c=e.user,a=Object(n.useState)([]),i=Object(r.a)(a,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){if(!0===t){var e=c.nickname;O.a.get("/api/playerByName/".concat(e)).then((function(e){return d(e.data)}))}}),[]),Object(l.jsx)("nav",{class:"nav-bar",children:Object(l.jsxs)("div",{class:"nav-item",children:[Object(l.jsx)(o.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(l.jsx)(o.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(l.jsx)(o.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(l.jsx)(o.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(l.jsx)(o.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(l.jsx)("div",{class:"nav-item-wallet",children:s.map((function(e){return Object(l.jsx)(h,{wallet:e},e)}))}),Object(l.jsx)("div",{class:"nav-button",children:t?Object(l.jsx)(u,{}):Object(l.jsx)(b,{})})]})})};var v=function(e){var t=e.teamName;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"div-match-1",children:t.team_name})})};var x=function(e){var t=e.match,c=Object(n.useState)([]),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){O.a.get("/api/teamName/".concat(t.id)).then((function(e){return s(e.data)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsx)("div",{class:"div-match-0",children:i.map((function(e){return Object(l.jsx)(v,{teamName:e},e.id)}))})]})},f=c(7),g=c(14);var w=function(e){var t=e.teams;return Object(l.jsx)("option",{value:t.id,children:t.team_name})};var S=function(e){var t=Object(j.b)().isAuthenticated,c=e.matchbis,a=e.dataTeam,i=Object(n.useState)([]),s=Object(r.a)(i,2),o=s[0],d=s[1];Object(n.useEffect)((function(){O.a.get("/api/teamName/".concat(c.id)).then((function(e){return d(e.data)}))}),[]);var u=Object(g.a)(),b=u.register,m=u.handleSubmit;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',c.game_name,'" | Mise : ',c.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[o.map((function(e){return Object(l.jsx)(v,{teamName:e},e.id)})),Object(l.jsx)("div",{class:"div-match-3",children:Object(l.jsxs)("form",{onSubmit:m((function(e){var n={id:c.id,opponent:e.teamID};c.team_1!=e.teamID&&!0===t?(O.a.post("/api/updateOpponent",n),window.location="/"):alert("Erreur, vous devez \xeatre connecter pour rejoindre un match avec votre \xe9quipe, deplus une m\xeame \xe9quipe ne peux s'affronter.")})),class:"matchbis-form",children:[Object(l.jsx)("select",Object(f.a)(Object(f.a)({id:"teams"},b("teamID")),{},{children:a.map((function(e){return Object(l.jsx)(w,{teams:e},e.id)}))})),Object(l.jsx)("button",{type:"submit",class:"matchbis-button",children:" \u21a9 "})]})})]})]})};var C=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),o=s[0],j=s[1],d=Object(n.useState)([]),u=Object(r.a)(d,2),b=u[0],m=u[1];return Object(n.useEffect)((function(){O.a.get("/api/gamesWithOpponent").then((function(e){return a(e.data)})),O.a.get("/api/gamesWithoutOpponent").then((function(e){return j(e.data)})),O.a.get("/api/teams").then((function(e){return m(e.data)}))}),[]),Object(l.jsxs)("div",{class:"div-home-0",children:[Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2-bis",children:[Object(l.jsx)("h2",{children:" Recherche de match "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:o.map((function(e){return Object(l.jsx)(S,{dataTeam:b,matchbis:e},e.id)}))})]})}),Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2",children:[Object(l.jsx)("h2",{children:" Match en cours "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(x,{match:e},e.id)}))})]})})]})};var y=function(){var e=Object(j.b)().user,t=e.nickname,c=e.picture,n=e.email,a=Object(g.a)(),i=a.register,s=a.handleSubmit;return Object(l.jsx)("div",{class:"profile-container",children:Object(l.jsxs)("div",{class:"div-profile-0",children:[Object(l.jsx)("div",{class:"div-profile-1",children:Object(l.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(l.jsxs)("div",{class:"div-profile-2",children:[Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Adresse e-mail : ",n]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={opGg:e.opGg,pseudo:t};O.a.post("/api/updateOpGg",c),window.location="/profile"})),children:[Object(l.jsx)("label",{children:" opgg : "}),Object(l.jsx)("input",Object(f.a)({},i("opGg"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={pseudo:t,summonerName:e.summonerName,email:n};O.a.post("/api/newPlayer",c),window.location="/profile"})),children:[Object(l.jsx)("label",{children:" summoner name : "}),Object(l.jsx)("input",Object(f.a)({},i("summonerName"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})})]})]})})},I=c(28),k=c.n(I);k.a.init("MIXPANEL_TOKEN");var N=function(e){var t=e.dataTeam,c=Object(g.a)(),n=c.register,a=c.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{class:"form",onSubmit:a((function(e){O.a.post("/api/newGame",e),window.location="/",k.a.track("Match created")})),children:[Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Nom de la partie : "}),Object(l.jsx)("input",Object(f.a)({},n("gameName")))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{for:"teams",children:"\xc9quipe : "}),Object(l.jsx)("select",Object(f.a)(Object(f.a)({id:"teams"},n("team")),{},{children:t.map((function(e){return Object(l.jsx)(w,{teams:e},e.id)}))}))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Mise : "}),Object(l.jsx)("input",Object(f.a)({},n("mise")))]}),Object(l.jsx)("div",{class:"form-item",children:Object(l.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var E=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){O.a.get("/api/teams").then((function(e){return a(e.data)}))}),[]),Object(l.jsx)("div",{class:"div-home-0",children:Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsx)("div",{class:"div-home-2-form",children:Object(l.jsx)(N,{dataTeam:c})})})})},T=c(4),P=c.n(T),q=c(9);var _=function(e){var t=e.team,c=e.teamComp,n=Object(g.a)(),a=n.register,i=n.handleSubmit,s=function(){var e=Object(q.a)(P.a.mark((function e(n){var a,i,s,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,c.map((function(e){n.pseudo==e.pseudo&&(alert("Impossible, le joueur est d\xe9j\xe0 dans l'\xe9quipe ".concat(t.team_name,".")),a=!0)})),a){e.next=13;break}return e.next=5,O.a.get("/api/playerByName/".concat(n.pseudo));case 5:return i=e.sent,s=i.data,console.log("playerData :",s),r={playerID:s[0].id,teamID:t.id},e.next=11,O.a.post("/api/addPlayerInTeam",r);case 11:alert("Joueur ajout\xe9 \xe0 l'\xe9quipe ".concat(t.team_name,". ")),window.location="/teams";case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"addplayer-id",children:c.map((function(e){return Object(l.jsx)("div",{children:e.pseudo})}))}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",Object(f.a)({},a("pseudo"))),Object(l.jsx)("button",{onClick:i(s),type:"submit",children:"Ajouter"}),Object(l.jsx)("button",{onClick:i((function(e){var n=!1;console.log("teamComp : ",c),c.forEach((function(c){c.pseudo!=e.pseudo||n||(O.a.get("/api/removePlayerInTeam/".concat(c.id)),alert("Joueur supprimer de l'\xe9quipe ".concat(t.team_name,". ")),n=!0,window.location="/teams")})),n||alert("Impossible, le joueur n'est pas dans l'\xe9quipe ".concat(t.team_name,"."))})),type:"submit",children:"Supprimer"})]})]})};var M=function(e){var t=e.team,c=Object(n.useState)([]),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){O.a.get("/api/teamComposition/".concat(t.id)).then((function(e){return s(e.data)}))}),[]),Object(l.jsx)("div",{class:"team",children:Object(l.jsxs)("div",{class:"teamcard",children:[Object(l.jsxs)("div",{class:"teamcard-info",children:[Object(l.jsxs)("p",{children:[" ",t.team_name," "]}),Object(l.jsx)("button",{onClick:function(){window.confirm("\xcates-vous s\xfbre de vouloir supprimer l'\xe9quipe ".concat(t.team_name))&&(O.a.get("/api/removeTeam/".concat(t.id)),window.location="/teams")},type:"submit",children:"X"})]}),Object(l.jsx)("div",{class:"teamcard-list",children:Object(l.jsx)("li",{children:Object(l.jsx)(_,{team:t,teamComp:i})})})]})})},A=c.p+"static/media/add.f29a8121.png";var D=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){O.a.get("/api/teams").then((function(e){return a(e.data)}))}),[]),Object(l.jsxs)("div",{class:"teams",children:[Object(l.jsx)("div",{class:"div-team-0",children:Object(l.jsxs)("div",{class:"div-team-1",children:[Object(l.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(l.jsx)("img",{src:A,alt:"+",class:"add-team-img"})}),Object(l.jsx)("div",{className:"div-team-description",children:Object(l.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(l.jsx)(M,{team:e},e.id)}))]})},L=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var F=function(){var e=Object(g.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{class:"form",onSubmit:c((function(e){O.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Nom de l'\xe9quipe : "}),Object(l.jsx)("input",Object(f.a)({},t("teamName")))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{for:"teams",children:"Image d'\xe9quipe ( pas obligatoire ) : "}),Object(l.jsx)("input",Object(f.a)({},t("teamPicture")))]}),Object(l.jsx)("div",{class:"form-item",children:Object(l.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var R=function(){return Object(l.jsx)("div",{class:"div-home-0",children:Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsx)("div",{class:"div-home-2-form",children:Object(l.jsx)(F,{})})})})},U=c(40),B=c(5),Q=function(e){var t=e.component,c=Object(U.a)(e,["component"]);return Object(l.jsx)(B.a,Object(f.a)({component:Object(j.c)(t,{onRedirecting:function(){return Object(l.jsx)(L,{})}})},c))},X=c(41),G=Object(X.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),H=function(e){var t=e.handleClick;return Object(l.jsx)("div",{class:"div-shop",children:Object(l.jsxs)("div",{class:"div-shop-container",children:[Object(l.jsxs)("div",{class:"div-shop-product",children:[Object(l.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(l.jsxs)("div",{className:"div-shop-description",children:[Object(l.jsx)("h3",{children:"1 SC"}),Object(l.jsx)("h5",{children:"1\u20ac"})]})]}),Object(l.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},J=function(e){var t=e.message;return Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:t})})};function W(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&a("Order placed! You will receive an email confirmation."),e.get("canceled")&&a("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var i=function(){var e=Object(q.a)(P.a.mark((function e(t){var c,n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.next=11,c.redirectToCheckout({sessionId:a.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(l.jsx)(J,{message:c}):Object(l.jsx)(H,{handleClick:i})}var Y=function(){return Object(j.b)().isLoading?Object(l.jsx)(L,{}):Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(p,{}),Object(l.jsx)("div",{class:"nav-space"}),Object(l.jsxs)(B.c,{children:[Object(l.jsx)(B.a,{path:"/",exact:!0,component:C}),Object(l.jsx)(Q,{path:"/profile",exact:!0,component:y}),Object(l.jsx)(Q,{path:"/createMatch",exact:!0,component:E}),Object(l.jsx)(Q,{path:"/teams/createTeam",exact:!0,component:R}),Object(l.jsx)(Q,{path:"/teams",exact:!0,component:D}),Object(l.jsx)(Q,{path:"/shop",exact:!0,component:W})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};c(81).config();var K=function(e){var t=e.children;return Object(l.jsx)(j.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{children:Object(l.jsx)(Y,{})})}),document.getElementById("root")),z()}},[[84,1,2]]]);
//# sourceMappingURL=main.f73f5d2c.chunk.js.map
(this.webpackJsonpdrafter_app=this.webpackJsonpdrafter_app||[]).push([[0],{3:function(e,n,t){e.exports={App:"AppStyles_App__1aSED",Flexi:"AppStyles_Flexi__3Vfdt",FlexiContent:"AppStyles_FlexiContent__ZgYCP",Top:"AppStyles_Top__MS2gt",SmallScreenLeft:"AppStyles_SmallScreenLeft__2WQzj",SmallScreen:"AppStyles_SmallScreen__3KQ5v",BigScreen:"AppStyles_BigScreen__2Ovgn",MobileTop:"AppStyles_MobileTop__3YCd8",MobileView:"AppStyles_MobileView__380PS",Mini:"AppStyles_Mini__1xnVW",MiniQueue:"AppStyles_MiniQueue__3WVNk",MiniDown:"AppStyles_MiniDown__1obLw",MiniUp:"AppStyles_MiniUp__2xW6g",NoMargin:"AppStyles_NoMargin__2S3q0",SelfInfoRed:"AppStyles_SelfInfoRed__1IGTb",SelfInfoOrange:"AppStyles_SelfInfoOrange__dDHRj",SelfInfoGreen:"AppStyles_SelfInfoGreen__3Clhg",TimerSection:"AppStyles_TimerSection__r8WnA",Timer:"AppStyles_Timer__NwwKb",TimerWithMargins:"AppStyles_TimerWithMargins__3X5f3",LittlePadding:"AppStyles_LittlePadding__2m1Kg",BackGroundGold:"AppStyles_BackGroundGold__2fWqM",NoBorder:"AppStyles_NoBorder__Yi3x6",TablePlayers:"AppStyles_TablePlayers__2saOQ",TablePlayers_td:"AppStyles_TablePlayers_td__1R_bw",TeamInfoStyle:"AppStyles_TeamInfoStyle__23c2H",Player:"AppStyles_Player__2J2wn",Button25:"AppStyles_Button25__1CwIr",GoldText:"AppStyles_GoldText__3Hr9_",PaddingLeft:"AppStyles_PaddingLeft__3KtBQ",NoMarginOrPadding:"AppStyles_NoMarginOrPadding__1-LBZ",Injured:"AppStyles_Injured__jyOXt"}},60:function(e,n,t){"use strict";t.r(n);var a,r,i,l,o,c,s,d,u,j,b=t(41),p=t(4),m=t(46),y=t.n(m),h=t(5),f=t(69),O=t(75),x=t(17),g=t(71),P=Object(g.a)(a||(a=Object(x.a)(["\n    mutation login($owner: String, $password: String) {\n        login(owner: $owner, password:$password) {\n            value\n        }\n    }\n"]))),v=(Object(g.a)(r||(r=Object(x.a)(["\n    query{\n        allTeams{\n            owner\n            id\n            players{\n                playerName\n                nflTeam\n                position\n                price\n                bye\n                id\n            }\n        }\n    }\n"]))),Object(g.a)(i||(i=Object(x.a)(["\n    query{\n        allPlayers{\n            playerName\n            nflTeam\n            rank\n            expectedValue\n            position\n            bye\n            injury\n            id\n        }\n    }\n"]))),Object(g.a)(l||(l=Object(x.a)(["\n    query{\n        allPlayers{\n            playerName\n            nflTeam\n            rank\n            expectedValue\n            position\n            bye\n            injury\n            id\n        }\n        allSoldPlayers{\n            playerName\n            nflTeam\n            position\n            price\n            id\n            oldId\n        }\n        allTeams{\n            owner\n            id\n            place\n            salary\n            players{\n                playerName\n                nflTeam\n                position\n                price\n                bye\n                id\n            }\n        }\n        lastProposer{\n            proposer\n        }\n        currentBid{\n            bidder\n            currentPrice\n            timeLeft\n            player{\n                playerName\n                nflTeam\n                rank\n                expectedValue\n                position\n                bye\n                id\n                injury\n            }\n        }\n\n    }\n"])))),S=(Object(g.a)(o||(o=Object(x.a)(["\n    mutation addTeam($owner:String!, $place: Int){\n        addTeam(owner:$owner, place:$place){\n            owner\n        }\n    }\n"]))),Object(g.a)(c||(c=Object(x.a)(["\n    mutation changeProposer{\n        changeProposer{\n            proposer\n        }\n    }\n"])))),w=(Object(g.a)(s||(s=Object(x.a)(["\n    mutation nullProposer{\n        nullProposer{\n            true\n        }\n    }\n"]))),Object(g.a)(d||(d=Object(x.a)(["\n    mutation changeBid($bidder: String!, $playerId: String!, $currentPrice:Int, $timeLeft:String){\n        changeBid(bidder:$bidder, playerId:$playerId, currentPrice:$currentPrice, timeLeft: $timeLeft){\n            currentPrice\n        }\n    }\n"])))),_=Object(g.a)(u||(u=Object(x.a)(["\n    mutation sellPlayer($owner:String!, $playerName:String!, $nflTeam:String!, $position:String!, $price:Int!, $oldId:String!, $bye:Int!){\n        addSoldPlayer(owner: $owner, playerName: $playerName, nflTeam:$nflTeam, position:$position, price:$price, oldId:$oldId, bye:$bye){\n            playerName\n        }\n    }\n"]))),N=(Object(g.a)(j||(j=Object(x.a)(["\n    mutation addPlayer($playerName: String!, $nflTeam: String!, $rank: Int!, $expectedValue: Int!, $position: String!, $bye: Int!){\n        addPlayer(playerName:$playerName, nflTeam:$nflTeam, rank:$rank, expectedValue:$expectedValue, position:$position, bye:$bye){\n            playerName\n        }\n    }\n"]))),t(49)),k=t(11),T=t.n(k),C=t(16),B=t(3),M=t.n(B),I=function(e,n){var t=200-n,a=19-e,r=t/a,i=t-(a-1);return{moneyAtStart:200,moneyLeft:t,maxRosterSize:19,avgPrice:Math.trunc(r),maxBid:i,seatsLeft:a}},A=function(e,n,t){return isNaN(Number(n.currentPrice))?(alert("Olet aasi, et hakkeri"),!1):e.bidder===n.bidder?(alert("Sinulla on jo johtava tarjous"),!1):e.currentPrice>=n.currentPrice?(alert("Liian pieni tarjous"),!1):0===t.seatsLeft?(alert("Joukkueesi on jo t\xe4ynn\xe4"),!1):!(t.maxBid<n.currentPrice)||(alert("VITUN K\xd6YH\xc4"),!1)},$=function(e,n){var t=19-n.players.length,a=200-n.salary-t+1;return!(n.players.length>=19)&&(null!==e&&(!(e.currentPrice>=a)&&e.bidder!==n.id))},L=function(e,n,t){return!!(null===e|void 0===e)&&(null!==t&&n.id===t.id)},R=t(76),Q=t(0),D=function(e){var n=e.playerQueue.filter((function(n,t){return e.playerQueue.indexOf(n)===t})),t=I(e.manager.players.length,e.manager.salary),a=function(e){var n=e.filter((function(e){return"QB"===e.position})),t=e.filter((function(e){return"RB"===e.position})),a=e.filter((function(e){return"WR"===e.position})),r=e.filter((function(e){return"TE"===e.position})),i=e.filter((function(e){return"D"===e.position})),l=e.filter((function(e){return"K"===e.position})),o=e.filter((function(e){return"IDP"===e.position}));return{qb:n.length,rb:t.length,wr:a.length,te:r.length,k:l.length,d:i.length,idp:o.length}}(e.manager.players),r=Object(R.a)(_),i=Object(h.a)(r,1)[0],l=Object(R.a)(w),o=Object(h.a)(l,1)[0],c=null!==e.nominatedPlayer?e.nominatedPlayer.currentPrice+1:1,s=function(){var n=Object(C.a)(T.a.mark((function n(){var t;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={owner:e.nominatedPlayer.bidder,playerName:e.nominatedPlayer.player.playerName,nflTeam:e.nominatedPlayer.player.nflTeam,position:e.nominatedPlayer.player.position,oldId:e.nominatedPlayer.player.id,bye:e.nominatedPlayer.player.bye,price:e.nominatedPlayer.currentPrice},n.next=3,i({variables:t});case 3:e.start(!0);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=Object(C.a)(T.a.mark((function n(t){var a,r,i;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a={bidder:t.id,playerId:e.nominatedPlayer.player.id,currentPrice:Number(c)},r=e.teams.find((function(e){return e.id===t.id})),i=I(r.players.length,r.salary),A(e.nominatedPlayer,a,i)?o({variables:a}):console.log("Virheilmoitus");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=window.innerHeight,j={height:.75*u,width:"35%",overflowY:"scroll",backgroundColor:"goldenrod",paddingTop:.2*u,paddingBottom:"1%"},b={height:.75*u,width:"100%",overflowY:"scroll",backgroundColor:"goldenrod",paddingTop:1,paddingBottom:"1%",border:"maroon solid 5px",paddingLeft:"10%"};return Object(Q.jsxs)("div",{style:!0===e.mobile?b:j,children:[Object(Q.jsxs)("h1",{children:["Manager: ",e.manager.owner]}),Object(Q.jsxs)("p",{children:["Money:",t.moneyLeft,"  Avg bid:",t.avgPrice," Max bid:",t.maxBid," Roster spots left:",t.seatsLeft]}),Object(Q.jsxs)("p",{children:["QB: ",a.qb," RB: ",a.rb," WR: ",a.wr," TE: ",a.te," K: ",a.k," D: ",a.d," IDP: ",a.idp]}),"Erik"===e.manager.owner&&Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("h2",{children:["Commish tools ",Object(Q.jsx)("button",{disabled:e.xfinalizeSaleButton,onClick:function(){return s()},children:"Finalize sale"})]}),e.teams.map((function(n){return Object(Q.jsxs)("p",{className:M.a.Mini,children:[n.owner,Object(Q.jsxs)("button",{disabled:!0!==$(e.nominatedPlayer,n),onClick:function(){return d(n)},children:["$",c]}),Object(Q.jsx)("button",{disabled:!0!==L(e.nominatedPlayer,n,e.turn),onClick:function(){return e.nominate(e.player)},children:"Nominate first"})]},n.id)}))]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h2",{children:"Queue"}),n.map((function(n){return Object(Q.jsxs)("p",{className:M.a.MiniQueue,children:[n.rank,". ",n.playerName," ",n.injury,Object(Q.jsx)("button",{onClick:function(){return e.callBackRemove(n.id)},children:"Remove"}),Object(Q.jsx)("button",{disabled:!0!==L(e.nominatedPlayer,e.manager,e.turn),onClick:function(){return e.nominate(n)},children:"Nominate"})]},n.id)}))]})]})},V=function(e){return Object(Q.jsxs)("tr",{className:M.a.TablePlayers,children:[Object(Q.jsxs)("td",{className:M.a.TablePlayers_td,children:[e.player.rank,". "]}),Object(Q.jsxs)("td",{className:M.a.TablePlayers_td,children:[e.player.playerName," ",null!==e.player.injury?e.player.injury:null]}),Object(Q.jsx)("td",{className:M.a.TablePlayers_td,children:e.player.position}),Object(Q.jsx)("td",{className:M.a.TablePlayers_td,children:e.player.nflTeam}),Object(Q.jsx)("td",{className:M.a.TablePlayers_td,children:e.player.bye}),Object(Q.jsxs)("td",{className:M.a.TablePlayers_td,children:["$",e.player.expectedValue]}),Object(Q.jsx)("td",{children:Object(Q.jsx)("button",{onClick:function(){return e.addPlayer(e.player)},children:"Add"})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("button",{disabled:!0!==e.validateManagerCanNominate,onClick:function(){return e.nominate(e.player)},children:"Nominate"})})]})},G=function(e){if(e.filter.length>2){var n=e.availablePlayers.filter((function(n){return n.playerName.toLowerCase().includes(e.filter.toLowerCase())}));return Object(Q.jsx)("tbody",{children:n.map((function(n){return Object(Q.jsx)(V,{player:n,addPlayer:e.addPlayer,nominate:e.nominate,validateManagerCanNominate:e.validateManagerCanNominate},n.id)}))})}if("ALL"===e.position)return Object(Q.jsx)("tbody",{children:e.availablePlayers.map((function(n){return Object(Q.jsx)(V,{player:n,addPlayer:e.addPlayer,nominate:e.nominate,validateManagerCanNominate:e.validateManagerCanNominate},n.id)}))});var t=e.availablePlayers.filter((function(n){return n.position===e.position}));return Object(Q.jsx)("tbody",{children:t.map((function(n){return Object(Q.jsx)(V,{player:n,addPlayer:e.addPlayer,nominate:e.nominate,validateManagerCanNominate:e.validateManagerCanNominate},n.id)}))})},z=function(e){var n=Object(p.useState)("ALL"),t=Object(h.a)(n,2),a=t[0],r=t[1],i=Object(p.useState)(""),l=Object(h.a)(i,2),o=l[0],c=l[1],s=window.innerHeight,d={height:.75*s,width:"35%",overflowY:"scroll",backgroundColor:"maroon",paddingTop:.2*s+1,paddingBottom:"1%"},u={height:.75*s,width:"100%",overflowY:"scroll",backgroundColor:"maroon",paddingTop:1,paddingBottom:"1%",marginLeft:"10%"};return Object(Q.jsx)("div",{style:!0===e.mobile?u:d,children:Object(Q.jsxs)("div",{className:M.a.scroll,children:[Object(Q.jsxs)("div",{className:M.a.PaddingLeft,children:[Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("button",{onClick:function(){r("ALL")},children:"ALL"}),Object(Q.jsx)("button",{onClick:function(){r("QB")},children:"QB"}),Object(Q.jsx)("button",{onClick:function(){r("RB")},children:"RB"}),Object(Q.jsx)("button",{onClick:function(){r("WR")},children:"WR"}),Object(Q.jsx)("button",{onClick:function(){r("TE")},children:"TE"})]}),Object(Q.jsxs)("p",{children:[Object(Q.jsx)("button",{onClick:function(){r("K")},children:"K"}),Object(Q.jsx)("button",{onClick:function(){r("D")},children:"D"}),Object(Q.jsx)("button",{onClick:function(){r("IDP")},children:"IDP"})]}),Object(Q.jsxs)("p",{className:M.a.GoldText,children:["Filter ",Object(Q.jsx)("input",{onChange:function(e){console.log(e.target.value),c(e.target.value)}})]}),Object(Q.jsx)("h2",{className:M.a.GoldText,children:"Available players:"})]}),Object(Q.jsxs)("table",{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Rank"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Name"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Pos"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Team"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Bye"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Avg"}),Object(Q.jsx)("th",{className:M.a.GoldText,scope:"col",children:"Queue"})]})}),Object(Q.jsx)(G,{availablePlayers:e.availablePlayers,position:a,filter:o,addPlayer:e.addPlayer,nominate:e.nominate,validateManagerCanNominate:e.validateManagerCanNominate})]})]})})},E=function(e){var n=null!==e.nominatedPlayer?e.nominatedPlayer.timeLeft:3e4,t=function(){return(n-Date.now())/1e3},a=Object(p.useState)(t()),r=Object(h.a)(a,2),i=r[0],l=r[1];return Object(p.useEffect)((function(){setTimeout((function(){i>0?(l(t()),!1===e.xfinalizeSaleButton&&e.l\u00e4hetys(!0)):(l(t()),!0===e.xfinalizeSaleButton&null!==e.nominatedPlayer&&e.l\u00e4hetys(!1))}),1e3)})),null===e.turn?Object(Q.jsx)("div",{children:Object(Q.jsx)("h1",{children:"Starting soon"})}):null===e.nominatedPlayer?Object(Q.jsx)("div",{children:Object(Q.jsxs)("h1",{children:[e.turn.owner," is nominating..."]})}):Object(Q.jsx)("div",{className:M.a.Timer,children:Object(Q.jsxs)("h2",{children:["0:",Math.trunc(i)<10?"0":null,Math.trunc(i)>=0?Math.trunc(i):0]})})},W=function(e){var n=e.playerQueue.filter((function(n,t){return e.playerQueue.indexOf(n)===t})),t=Object(R.a)(w),a=Object(h.a)(t,1)[0],r=Object(R.a)(_),i=(Object(h.a)(r,1)[0],Object(p.useState)(null!==e.nominatedPlayer?e.nominatedPlayer.currentPrice+1:2)),l=Object(h.a)(i,2),o=l[0],c=l[1],s=Object(p.useState)(!0),d=Object(h.a)(s,2),u=d[0],j=(d[1],I(e.manager.players.length,e.manager.salary)),b=null!==e.nominatedPlayer?e.nominatedPlayer.currentPrice+1:1,m=null!==e.nominatedPlayer?e.teams.find((function(n){return n.id===e.nominatedPlayer.bidder})):null,y=function(){var n=Object(C.a)(T.a.mark((function n(t){var r,i,l;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r={bidder:t.id,playerId:e.nominatedPlayer.player.id,currentPrice:Number(b)},i=e.teams.find((function(e){return e.id===t.id})),l=I(i.players.length,i.salary),A(e.nominatedPlayer,r,l)&&a({variables:r});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=Object(C.a)(T.a.mark((function n(t){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),r={bidder:e.manager.id,playerId:e.nominatedPlayer.player.id,currentPrice:Number(o)},A(e.nominatedPlayer,r,j)?a({variables:r}):console.log("Virheilmoitus");case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(Q.jsxs)("div",{className:null===e.turn?M.a.SelfInfoOrange:e.manager.id===e.turn.id&null===e.nominatedPlayer?M.a.SelfInfoGreen:null===e.nominatedPlayer?M.a.SelfInfoOrange:e.nominatedPlayer.bidder===e.manager.id?M.a.SelfInfoGreen:M.a.SelfInfoRed,children:["Erik"===e.manager.owner&&Object(Q.jsx)("button",{onClick:function(){return e.start()},children:"start"}),Object(Q.jsx)("button",{onClick:function(){return e.logOut()},children:"Sign out"}),Object(Q.jsxs)("div",{className:M.a.TimerSection,children:[null!==e.nominatedPlayer&&Object(Q.jsx)("h3",{className:M.a.Mini,children:"Time left:"}),Object(Q.jsx)(E,{playerQueue:n,nominatedPlayer:e.nominatedPlayer,turn:e.turn,"l\xe4hetys":e.l\u00e4hetys,xfinalizeSaleButton:u}),null!==e.nominatedPlayer&&Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h4",{className:M.a.Mini,children:"Nominated by"}),Object(Q.jsx)("h4",{className:M.a.MiniUp,children:e.turn.owner})]})]}),null!==e.nominatedPlayer&&Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h4",{className:M.a.Mini,children:"Current bid:"}),Object(Q.jsx)("h3",{className:M.a.TimerWithMargins,children:Object(Q.jsxs)("strong",{children:["$",e.nominatedPlayer.currentPrice]})}),Object(Q.jsxs)("div",{className:M.a.LittlePadding,children:["Quick bid ",Object(Q.jsxs)("button",{disabled:!0!==$(e.nominatedPlayer,e.manager),onClick:function(){return y(e.manager)},children:["$",b]}),Object(Q.jsx)("form",{onSubmit:f,children:Object(Q.jsxs)("div",{children:["Bid ",Object(Q.jsx)("input",{style:{width:"30px"},onChange:function(e){var n=e.target;return c(n.value)}}),Object(Q.jsx)("button",{disabled:!0!==$(e.nominatedPlayer,e.manager),type:"submit",children:"bid"})]})})]}),Object(Q.jsx)("h4",{className:M.a.Mini,children:"Highest bid:"}),Object(Q.jsx)("h4",{className:M.a.MiniUp,children:m.owner})]}),null!==e.nominatedPlayer&&Object(Q.jsxs)("div",{className:M.a.TimerSection,children:[Object(Q.jsxs)("h2",{className:M.a.MiniDown,children:["Player: ",e.nominatedPlayer.player.playerName," ,  ",e.nominatedPlayer.player.nflTeam]}),Object(Q.jsxs)("h4",{className:M.a.NoMarginOrPadding,children:["Position: ",e.nominatedPlayer.player.position," Injury: ",null!==e.nominatedPlayer.player.injury?Object(Q.jsx)("strong",{className:M.a.Injured,children:e.nominatedPlayer.player.injury}):"none"]}),Object(Q.jsxs)("h4",{className:M.a.NoMarginOrPadding,children:["Avg price: ",e.nominatedPlayer.player.expectedValue]}),Object(Q.jsxs)("h4",{className:M.a.NoMarginOrPadding,children:["Bye Week: ",e.nominatedPlayer.player.bye]})]})]})},Y=function(e){return Object(Q.jsx)("tr",{children:Object(Q.jsxs)("td",{className:M.a.Player,children:[e.player.playerName,null!==e.player.injury?e.player.injury:null,", ",e.player.nflTeam,", bye ",e.player.bye,", price: ",e.player.price]})})},K=function(e){var n=I(e.team.players.length,e.team.salary);return Object(Q.jsxs)("div",{className:M.a.TeamInfoStyle,children:[Object(Q.jsxs)("h3",{className:M.a.MiniDown,children:["Owner: ",e.team.owner]}),Object(Q.jsxs)("h4",{className:M.a.MiniUp,children:["Roster size: ",n.maxRosterSize-n.seatsLeft,"/19 Money left: ",n.moneyLeft," ",Object(Q.jsx)("br",{}),"Avg Price: ",n.avgPrice," Max Bid: ",n.maxBid]}),Object(Q.jsx)("table",{children:Object(Q.jsxs)("tbody",{children:[Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"QB(min 1):"})}),e.team.players.filter((function(e){return"QB"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"RB(min 2):"})}),e.team.players.filter((function(e){return"RB"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"WR(min 2):"})}),e.team.players.filter((function(e){return"WR"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"TE(min 1):"})}),e.team.players.filter((function(e){return"TE"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"K(min 1):"})}),e.team.players.filter((function(e){return"K"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"D(min 1):"})}),e.team.players.filter((function(e){return"D"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)})),Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{children:"IDP(min 4):"})}),e.team.players.filter((function(e){return"IDP"===e.position})).map((function(e){return Object(Q.jsx)(Y,{player:e},e.id)}))]})})]})},q=function(e){var n=Object(p.useState)(e.manager),t=Object(h.a)(n,2),a=t[0],r=t[1],i=window.innerHeight,l={height:.75*i,width:"30%",overflowY:"scroll",backgroundColor:"maroon",paddingTop:.2*i+1,paddingBottom:"1%"},o={height:.75*i,width:"100%",overflowY:"scroll",backgroundColor:"maroon",paddingTop:1,paddingBottom:"1%"};return Object(Q.jsxs)("div",{style:!0===e.mobile?o:l,children:[e.teams.slice(0,4).map((function(e){return Object(Q.jsxs)("button",{className:M.a.Button25,onClick:function(){r(e)},children:[e.owner," ",e.players.length,"/19"]},e.id)}))," ",Object(Q.jsx)("br",{}),e.teams.slice(4,8).map((function(e){return Object(Q.jsxs)("button",{className:M.a.Button25,onClick:function(){r(e)},children:[e.owner," ",e.players.length,"/19"]},e.id)})),Object(Q.jsx)("br",{}),e.teams.slice(8,12).map((function(e){return Object(Q.jsxs)("button",{className:M.a.Button25,onClick:function(){r(e)},children:[e.owner," ",e.players.length,"/19"]},e.id)})),Object(Q.jsx)("br",{}),e.teams.slice(12).map((function(e){return Object(Q.jsxs)("button",{className:M.a.Button25,onClick:function(){r(e)},children:[e.owner," ",e.players.length,"/19"]},e.id)})),Object(Q.jsx)(K,{team:a},a.id)]})},H=function(e){var n=Object(p.useState)("players"),t=Object(h.a)(n,2),a=t[0],r=t[1],i=function(e){r(e)},l=window.innerHeight,o={width:"100%",height:l,position:"relative",backgroundColor:"maroon"},c={height:.2*l,width:"100%",overflowY:"scroll",position:"fixed",top:0,left:0,zIndex:999},s={width:"100%",overflowY:"scroll",position:"fixed",marginTop:.18*l,zIndex:950,backgroundColor:"goldenRod",paddingTop:"1%"},d={width:"33%",padding:"none",margin:"none",height:.05*l,backgroundColor:"maroon",border:"goldenRod 2px solid",color:"gold",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},u={width:"33%",padding:"none",margin:"none",height:.05*l,backgroundColor:"goldenRod",border:"maroon 2px solid",color:"black"},j={height:.75*l,width:"100%",overflowY:"scroll",position:"absolute",marginTop:.25*l};return Object(Q.jsxs)("div",{style:o,children:[Object(Q.jsx)("div",{style:c,children:Object(Q.jsx)(W,{logOut:e.logOut,nominatedPlayer:e.nominatedPlayer,playerQueue:e.playerQueue,autoPick:e.availablePlayers[0],turn:e.turn,callBackRemove:e.callBackRemove,teams:e.teams,manager:e.manager,start:e.start,"l\xe4hetys":e.l\u00e4hetys})}),Object(Q.jsxs)("div",{style:s,children:[Object(Q.jsx)("button",{style:"players"!==a?d:u,onClick:function(){return i("players")},children:"Players"}),Object(Q.jsx)("button",{style:"queue"!==a?d:u,onClick:function(){return i("queue")},children:"Queue"}),Object(Q.jsx)("button",{style:"teams"!==a?d:u,onClick:function(){return i("teams")},children:"Teams"})]}),Object(Q.jsx)("div",{style:j,children:"players"===a?Object(Q.jsx)(z,{mobile:!0,availablePlayers:e.availablePlayers,addPlayer:e.addPlayer,nominate:e.nominate,validateManagerCanNominate:e.validateManagerCanNominate}):"queue"===a?Object(Q.jsx)(D,{mobile:!0,start:e.start,nominatedPlayer:e.nominatedPlayer,turn:e.turn,player:e.availablePlayers[0],nominate:e.nominate,manager:e.manager,playerQueue:e.playerQueue,callBackRemove:e.callBackRemove,xfinalizeSaleButton:e.xfinalizeSaleButton,teams:e.teams}):Object(Q.jsx)(q,{teams:e.teams,manager:e.manager,mobile:!0})})]})},F=function(e){var n=Object(p.useState)([]),t=Object(h.a)(n,2),a=t[0],r=t[1],i=e.data.currentBid,l=null===e.data.lastProposer?null:e.data.allTeams.find((function(n){return n.place===e.data.lastProposer.proposer})),o=e.data.allTeams.find((function(n){return n.owner===e.manager})),c=Object(R.a)(S),s=Object(h.a)(c,1)[0],d=Object(R.a)(w),u=Object(h.a)(d,1)[0],j=Object(p.useState)(!0),b=Object(h.a)(j,2),m=b[0],y=b[1],f=function(e){y(e)},O=function(){var e=Object(C.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(!0===n||window.confirm("Eth\xe4n painanut vahingossa?"))&&s();case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=L(i,o,l),g=function(e){r([].concat(Object(N.a)(a),[e]))},P=function(e){var n={bidder:l.id,playerId:e.id,price:1};u({variables:n})},v=e.data.allSoldPlayers.map((function(e){return e.oldId})),_=e.data.allPlayers.filter((function(e){return!v.includes(e.id)}));_.sort((function(e,n){return e.rank-n.rank}));var k=function(e){var n=a.filter((function(n){return n.id!==e}));r(n)},B={height:.2*window.innerHeight,width:"100%",overflowY:"scroll",position:"fixed"};return a.forEach((function(e){return v.includes(e.id)?k(e.id):console.log("")})),e.mobileView?Object(Q.jsx)(H,{logOut:e.logOut,nominatedPlayer:i,playerQueue:a,autoPick:_[0],turn:l,callBackRemove:k,teams:e.data.allTeams,manager:o,start:O,"l\xe4hetys":f,availablePlayers:_,addPlayer:g,nominate:P,validateManagerCanNominate:x,player:_[0],xfinalizeSaleButton:m}):Object(Q.jsxs)("div",{className:"App",children:[Object(Q.jsx)("div",{style:B,children:Object(Q.jsx)(W,{logOut:e.logOut,nominatedPlayer:i,playerQueue:a,autoPick:_[0],turn:l,callBackRemove:k,teams:e.data.allTeams,manager:o,start:O,"l\xe4hetys":f})}),Object(Q.jsxs)("div",{className:M.a.FlexiContent,children:[Object(Q.jsx)(z,{availablePlayers:_,addPlayer:g,nominate:P,validateManagerCanNominate:x}),Object(Q.jsx)(D,{start:O,nominatedPlayer:i,turn:l,player:_[0],nominate:P,manager:o,playerQueue:a,callBackRemove:k,xfinalizeSaleButton:m,teams:e.data.allTeams}),Object(Q.jsx)(q,{teams:e.data.allTeams,manager:o})]})]})},U=function(e){var n=Object(O.a)(v,{pollInterval:1e3}),t=n.data,a=n.error;return n.loading?Object(Q.jsx)("div",{children:"loading..."}):(a&&console.log(a),Object(Q.jsx)(F,{data:t,manager:e.manager,logOut:e.logOut,mobileView:e.mobileView}))},J=function(e){var n=Object(p.useState)(""),t=Object(h.a)(n,2),a=t[0],r=t[1],i=Object(p.useState)(""),l=Object(h.a)(i,2),o=l[0],c=l[1],s=Object(R.a)(P),d=Object(h.a)(s,2),u=d[0],j=d[1],b=Object(p.useState)(!1),m=Object(h.a)(b,2),y=m[0],f=m[1];Object(p.useEffect)((function(){if(j.data){var n=j.data.login.value;e.setToken(n),localStorage.setItem("manager-token",n)}}),[j.data]);var O=function(){var e=Object(C.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),u({variables:{owner:a,password:o}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(Q.jsx)("div",{children:Object(Q.jsxs)("form",{onSubmit:O,children:[Object(Q.jsxs)("div",{children:["manager ",Object(Q.jsx)("input",{value:a,onChange:function(e){var n=e.target;return r(n.value)}})]}),Object(Q.jsxs)("div",{children:["password ",Object(Q.jsx)("input",{value:o,onChange:function(e){var n=e.target;return c(n.value)}})]}),Object(Q.jsxs)("div",{children:["mobile ",Object(Q.jsx)("input",{type:"checkbox",onClick:function(){return f(!y)}})]}),Object(Q.jsx)("button",{type:"submit",children:"login"})]})})},X=function(){var e=Object(p.useState)(null),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(p.useState)("Erik"),i=Object(h.a)(r,2),l=i[0],o=i[1],c=Object(p.useState)(!1),s=Object(h.a)(c,2),d=s[0],u=s[1],j=Object(f.a)();Object(p.useEffect)((function(){var e=localStorage.getItem("manager-token");e&&a(e)}),[]);return!t|!l?Object(Q.jsx)(J,{setToken:a,setOwner:o,setMobileView:u}):Object(Q.jsx)(U,{manager:l,logOut:function(){a(null),o(null),localStorage.clear(),j.resetStore()},mobileView:d})},Z=t(73),ee=t(72),ne=t(74),te=t(70),ae=t(48),re=Object(ae.a)((function(e,n){var t=n.headers,a=localStorage.getItem("manager-token");return{headers:Object(b.a)(Object(b.a)({},t),{},{authorization:a?"bearer ".concat(a):null})}})),ie=new Z.a({uri:"http://localhost:4000/"}),le=new ee.a({cache:new ne.a,link:re.concat(ie)});y.a.render(Object(Q.jsx)(te.a,{client:le,children:Object(Q.jsx)(X,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.61251762.chunk.js.map
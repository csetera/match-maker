(function(e){function t(t){for(var r,i,u=t[0],s=t[1],o=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/match-maker/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a1a3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Match Maker")]),n("router-view")],1)},i=[],u=n("d4ec"),s=n("262e"),o=n("2caf"),l=n("9ab4"),f=n("1b40"),p=function(e){Object(s["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(f["c"]);p=Object(l["a"])([f["a"]],p);var h=p,b=h,v=(n("5c0b"),n("2877")),y=Object(v["a"])(b,c,i,!1,null,null,null),d=y.exports,m=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form-textarea",{attrs:{id:"textarea",rows:"20","max-rows":"8"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},k=[],O=n("bee2"),j=(n("1276"),n("ac1f"),n("159b"),n("99af"),n("b0c0"),n("fb6a"),n("4de4"),n("d81d"),function(){function e(t,n){Object(u["a"])(this,e),this._pairs=[t,n]}return Object(O["a"])(e,[{key:"combinedRankDifference",get:function(){return Math.abs(this._pairs[0].combinedRank-this._pairs[1].combinedRank)}},{key:"pairs",get:function(){return this._pairs}},{key:"hasOverlap",value:function(e){for(var t=0;t<2;t++)for(var n=0;n<2;n++)if(this._pairs[n].hasOverlap(e.pairs[t]))return!0;return!1}},{key:"toString",value:function(){return"[pair1=".concat(this._pairs[0],"] vs [pair2=").concat(this._pairs[1],"] [rankDifference=").concat(this.combinedRankDifference,"]")}}]),e}()),_=function(){function e(t,n){Object(u["a"])(this,e),this._players=[t,n]}return Object(O["a"])(e,[{key:"players",get:function(){return this._players}},{key:"hasOverlap",value:function(e){for(var t=0;t<2;t++)for(var n=0;n<2;n++)if(this._players[n].rank===e.players[t].rank)return!0;return!1}},{key:"combinedRank",get:function(){return this._players[0].rank+this._players[1].rank}},{key:"toString",value:function(){return"[player1=".concat(this._players[0],"] - [player2=").concat(this._players[1],"]; [combinedRank = ").concat(this.combinedRank,"]")}}]),e}(),w=function(){function e(t,n){Object(u["a"])(this,e),this.rank=t,this.name=n}return Object(O["a"])(e,[{key:"toString",value:function(){return"[name=".concat(this.name,"][rank=").concat(this.rank,"]")}}]),e}(),x=(n("13d5"),function(){function e(t){Object(u["a"])(this,e),this.matchups=t}return Object(O["a"])(e,[{key:"hasMatchupOverlap",value:function(){for(var e=0;e<this.matchups.length;e++)for(var t=e+1;t<this.matchups.length;t++){var n=this.matchups[e],r=this.matchups[t];if(n.hasOverlap(r))return!0}return!1}},{key:"totalRankDifference",get:function(){return this.matchups.reduce((function(e,t){return e+t.combinedRankDifference}),0)}}]),e}()),M=n("2909"),P=function e(t,n){if(n>t.length||n<=0)return[];if(n===t.length)return[t];if(1===n)return t.reduce((function(e,t){return[].concat(Object(M["a"])(e),[[t]])}),[]);for(var r=[],a=[],c=0;c<=t.length-n+1;c++){a=e(t.slice(c+1),n-1);for(var i=0;i<a.length;i++)r.push([t[c]].concat(Object(M["a"])(a[i])))}return r},R=function(){function e(t){Object(u["a"])(this,e),this.players=t}return Object(O["a"])(e,[{key:"generateLineups",value:function(){return this.generateRounds().sort((function(e,t){return e.totalRankDifference-t.totalRankDifference}))}},{key:"generateMatchups",value:function(){for(var e=[],t=this.generatePairs(),n=0;n<t.length;n++)for(var r=n+1;r<t.length;r++){var a=t[n],c=t[r];a.hasOverlap(c)||e.push(new j(a,c))}return e}},{key:"generatePairs",value:function(){for(var e=[],t=0;t<this.players.length;t++)for(var n=t+1;n<this.players.length;n++){var r=new w(t+1,this.players[t]),a=new w(n+1,this.players[n]);e.push(new _(r,a))}return e}},{key:"generateRounds",value:function(){var e=Math.floor(this.players.length/4),t=this.generateMatchups().sort((function(e,t){return e.combinedRankDifference-t.combinedRankDifference})),n=t.slice(0,Math.min(t.length,250)),r=P(n,e);return r.map((function(e){return new x(e)})).filter((function(e){return!e.hasMatchupOverlap()}))}}]),e}(),S=function(e){Object(s["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return Object(O["a"])(n,[{key:"rounds",get:function(){var e=this.players.split("|");return new R(e).generateLineups()}},{key:"text",get:function(){var e=this;if(!this.rounds)return"UNSET";var t="";return this.rounds.forEach((function(n){t+="\n##################################################\n";for(var r=0;r<n.matchups.length;r++)0!=r&&(t+="\nAnd\n"),t+=e.writeMatchup(n.matchups[r])})),t}},{key:"writeMatchup",value:function(e){var t=e.pairs[0],n=e.pairs[1];return"".concat(t.players[0].name,"/").concat(t.players[1].name," vs ").concat(n.players[0].name,"/").concat(n.players[1].name)}}]),n}(f["c"]);Object(l["a"])([Object(f["b"])(String)],S.prototype,"players",void 0),S=Object(l["a"])([f["a"]],S);var D=S,E=D,G=Object(v["a"])(E,g,k,!1,null,"54b47b96",null),$=G.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-entry"},[n("h2",[e._v("Player Entry")]),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter one player name per line...",rows:"8","max-rows":"12"},model:{value:e.names,callback:function(t){e.names=t},expression:"names"}}),n("br"),n("b-button",{attrs:{disabled:e.disableGenerateButton},on:{click:e.onGenerate}},[e._v("Generate Lineups...")])],1)},T=[],L=(n("a15b"),n("498a"),function(e){Object(s["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.names="",e}return Object(O["a"])(n,[{key:"created",value:function(){var e=localStorage.getItem("previousPlayers");this.names=e?e.split("|").join("\n"):""}},{key:"onGenerate",value:function(){localStorage.setItem("previousPlayers",this.playersParam),this.$router.push({name:"select-matches",params:{players:this.playersParam}})}},{key:"disableGenerateButton",get:function(){var e=this.parsedNames,t=e.length>0&&e.length%4==0;return!t}},{key:"parsedNames",get:function(){return this.names.split(/\r?\n/).filter((function(e){return e.trim().length>0}))}},{key:"playersParam",get:function(){return this.parsedNames.join("|")}}]),n}(f["c"]));L=Object(l["a"])([f["a"]],L);var B=L,I=B,J=Object(v["a"])(I,N,T,!1,null,"66b74cd8",null),A=J.exports,C=(n("a1a3"),new m["a"]({base:"/match-maker/",mode:"history",routes:[{path:"/",name:"user-entry",component:A},{path:"/select-matches",name:"select-matches",component:$,props:!0}]}));r["default"].use(m["a"]),r["default"].config.productionTip=!1,new r["default"]({router:C,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.a8780da2.js.map
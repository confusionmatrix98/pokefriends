(this.webpackJsonppokefriends=this.webpackJsonppokefriends||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=t(5),i=t(1),l=t(14),u=t(15),h=(t(27),t(3)),m=t(4),p=t(6),d=t(7),E=function(e){var n=e.name,t=e.id;return r.a.createElement("div",{className:"bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),width:"128px",height:"128px",alt:"pokemon"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,"#".concat(t))))},f=function(e){var n=e.pokemons;return r.a.createElement("div",{className:"flex flex-wrap justify-center"},n.map((function(e){return r.a.createElement(E,{key:e.id,name:e.name,id:e.id})})))},g=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search pokemons",onChange:n}))},k=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"}},e.children)},v=function(e){Object(d.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(m.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops! That is not good."):this.props.children}}]),t}(a.Component),b=(t(28),t(16)),O=function(e){Object(d.a)(t,e);var n=Object(p.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestPokemons()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,a=e.pokemons,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 dib grow"},"Pokefriends"),r.a.createElement(g,{searchChange:t}),r.a.createElement(k,null,r.a.createElement(v,null,r.a.createElement(f,{pokemons:c}))))}}]),t}(a.Component),P=Object(s.b)((function(e){return{searchField:e.searchPokemons.searchField,pokemons:e.requestPokemons.pokemons,isPending:e.requestPokemons.isPending,error:e.requestPokemons.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestPokemons:function(){return e((function(e){e({type:"REQUEST_POKEMONS_PENDING"}),fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_POKEMONS_SUCCESS",payload:n.results.map((function(e,n){return Object(b.a)({},e,{id:n+1})}))})})).catch((function(n){return e({type:"REQUEST_POKEMONS_FAILED",payload:n})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);var y={searchField:""},S={isPending:!1,pokemons:[],error:""},j=Object(l.createLogger)(),w=Object(i.c)({searchPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_POKEMONS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_POKEMONS_SUCCESS":return Object.assign({},e,{pokemons:n.payload,isPending:!1});case"REQUEST_POKEMONS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),N=Object(i.d)(w,Object(i.a)(u.a,j));c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ef9c205.chunk.js.map
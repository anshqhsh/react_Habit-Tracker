(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=(n(18),n(11)),s=n(7),i=n(1),u=n(2),m=n(3),d=n(4),h=(n(19),a.PureComponent,Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return c.a.createElement("form",{ref:t,action:"forRef",className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()}},c.a.createElement("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),c.a.createElement("button",{className:"add-button"},"Add"))}))),b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log("habits"),c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{onAdd:this.handleAdd}),c.a.createElement("ul",null,this.props.habits.map((function(e){}))),c.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"))}}]),n}(a.Component),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("Navbar"),c.a.createElement("nav",{className:"navbar"},c.a.createElement("i",{className:"navbar-logo fab fa-apple"}),c.a.createElement("span",null,"Habit Tracker"),c.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.PureComponent),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){console.log(t);var n=e.state.habits.map((function(e){return e.id===t.id?Object(s.a)({},t,{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(s.a)({},t,{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(l.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(s.a)({},e,{count:0}):e}));e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log("app"),c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),c.a.createElement(b,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),n}(a.Component),v=(n(20),n(12)),E=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(),l=Object(a.useCallback)((function(){r(n+1)}));return Object(a.useEffect)((function(){console.log("mounted & updated!: ".concat(n))}),[]),c.a.createElement("li",{className:"habit"},c.a.createElement("span",{ref:o,className:"habit-name"},"Reading"),c.a.createElement("span",{className:"habit-count"},n),c.a.createElement("button",{className:"habit-button habit-increase",onClick:l},c.a.createElement("i",{className:"fas fa-plus-square"})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null),c.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.799b64be.chunk.js.map
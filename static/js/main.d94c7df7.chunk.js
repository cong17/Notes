(this.webpackJsonpth3=this.webpackJsonpth3||[]).push([[0],{36:function(t,e,a){t.exports=a(58)},41:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),l=(a(41),a(9)),o=a(10),s=a(12),d=a(11),u=a(13),p=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).newNote=function(e){e.preventDefault(),t.props.CHANGE_EDIT_STATUS()},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Notes"),r.a.createElement("button",{className:"navbar-toggler d-lg-none collapsed",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),r.a.createElement("div",{className:"navbar-collapse justify-content-end collapse",id:"collapsibleNavId"},r.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link",href:"/newNote",onClick:function(e){return t.newNote(e)}},"Th\xeam m\u1edbi ghi ch\xfa")))))}}]),a}(n.Component),m=Object(u.b)((function(t,e){return{}}),(function(t,e){return{CHANGE_EDIT_STATUS:function(){t({type:"CHANGE_EDIT_STATUS"})}}}))(p),h=a(29),f=a.n(h);f.a.initializeApp({apiKey:"AIzaSyBrApKBZBcrWt4ECKRi7t0JFYIYOFOZAoE",authDomain:"notesreactjs-6b8c4.firebaseapp.com",databaseURL:"https://notesreactjs-6b8c4.firebaseio.com",projectId:"notesreactjs-6b8c4",storageBucket:"notesreactjs-6b8c4.appspot.com",messagingSenderId:"549882508650",appId:"1:549882508650:web:6436a8db79446a1df82113",measurementId:"G-0GDPTMPEKP"});var E=f.a.database().ref("dataForNode/"),b=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).whenClickToEdit=function(){t.props.changeDisplayFromEdit(),t.props.sendDataEditToStore(t.props.value)},t.whenClickToDelete=function(){t.props.sendDataDeleteToStore(t.props.value.id),t.props.changeDisplayAlert("X\xf3a th\xe0nh c\xf4ng")},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"card mb-2"},r.a.createElement("div",{className:"card-header",role:"tab",id:"section1HeaderId"+this.props.value.id},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("a",{"data-toggle":"collapse","data-parent":"#NoteList",href:"#noteContent1"+this.props.value.id,"aria-expanded":"false","aria-controls":"noteContent1"+this.props.value.id,className:"collapsed title-fit"},this.props.value.ftitle," "))),r.a.createElement("div",{id:"noteContent1"+this.props.value.id,className:"in collapse",role:"tabpanel",style:{}},r.a.createElement("div",{className:"card border-primary"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"title-p title-fit"},this.props.value.ftitle),r.a.createElement("div",{className:"btn btn-group float-right m-0 p-0"},r.a.createElement("button",{onClick:function(){t.whenClickToEdit()},className:"btn btn-outline-info"},"S\u1eeda"),r.a.createElement("button",{onClick:function(){t.whenClickToDelete()},disabled:!0,className:"btn btn-outline-warning"},"X\xf3a")),r.a.createElement("div",null,this.props.value.fcontent),r.a.createElement("div",{className:"last-update"},"C\u1eadp nh\u1eadt l\u1ea7n cu\u1ed1i - "+this.props.value.lastUpdate)))))}}]),a}(n.Component),v=Object(u.b)((function(t,e){return{isEdit:t.isEdit}}),(function(t,e){return{changeDisplayFromEdit:function(){t({type:"CHANGE_EDIT_STATUS"})},sendDataEditToStore:function(e){t({type:"SEND_DATA_EDIT_TO_STORE",dataEdit:e})},sendDataDeleteToStore:function(e){t({type:"DELETE_NOTE",id:e})},changeDisplayAlert:function(e){t({type:"CHANGE_ALERT_ON",alertContent:e})}}}))(b),g=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nothing"},r.a.createElement("span",null,"Ch\u01b0a c\xf3 ghi ch\xfa n\xe0o."),r.a.createElement("span",null,"H\xe3y th\xeam m\u1edbi"))}}]),a}(n.Component),N=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).getData=function(){if(n.state.datafireBase)return n.state.datafireBase.length?n.state.datafireBase.map((function(t,e){return r.a.createElement(v,{key:e,value:t})})):r.a.createElement(g,null)},n.state={datafireBase:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;E.on("value",(function(e){var a=[];e.forEach((function(t){var e=t.key,n=t.val().ftitle,r=t.val().fcontent,i=t.val().lastUpdate;a.push({id:e,ftitle:n,fcontent:r,lastUpdate:i})})),t.setState({datafireBase:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm col-xs-12 sangphai"},r.a.createElement("div",{id:"NoteList",role:"tablist","aria-multiselectable":"true"},this.getData()))}}]),a}(n.Component),O=a(27),y=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).isChange=function(t){var e=t.target.name,a=t.target.value;n.setState(Object(O.a)({},e,a))},n.addNote=function(){n.props.addDataStore(n.state),n.setState({ftitle:"",fcontent:""})},n.updateDataOrAddnew=function(t){var e=(new Date).toLocaleString();if(n.setState({time:e}),n.state.id){var a={id:n.state.id,ftitle:n.state.ftitle,fcontent:n.state.fcontent,lastUpdate:e};n.props.changeDisplayAlert("S\u1eeda th\xe0nh c\xf4ng"),n.props.updateDataStore(a),n.props.changeDisplayFormEdit()}else{var r={ftitle:n.state.ftitle,fcontent:n.state.fcontent,lastUpdate:e};n.props.changeDisplayAlert("Th\xeam th\xe0nh c\xf4ng"),n.props.addDataStore(r),n.props.changeDisplayFormEdit()}},n.state={ftitle:"",fcontent:"",time:""},n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.props.dataEdit.id&&this.setState({ftitle:this.props.dataEdit.ftitle,fcontent:this.props.dataEdit.fcontent,id:this.props.dataEdit.id})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"sangtrai col-sm col-xs-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"card "},r.a.createElement("h4",{className:"card-header"},this.state.id?"S\u1eeda ghi ch\xfa ":"Th\xeam ghi ch\xfa"),r.a.createElement("div",{className:"form-group m-2"},r.a.createElement("label",null," ",this.state.id?"S\u1eeda ti\xeau \u0111\u1ec1 ":"Th\xeam ti\xeau \u0111\u1ec1"),r.a.createElement("input",{onChange:function(e){return t.isChange(e)},type:"text",className:"form-control",name:"ftitle",placeholder:"Ti\xeau \u0111\u1ec3 notes",defaultValue:this.props.dataEdit.ftitle,disabled:this.state.id?"disabled":""})),r.a.createElement("div",{className:"form-group m-2"},r.a.createElement("label",null,"\u0110i\u1ec1n n\u1ed9i dung v\xe0o \u0111\xe2y"),r.a.createElement("textarea",{onChange:function(e){return t.isChange(e)},type:"text",className:"form-control",name:"fcontent",placeholder:"Ti\xeau \u0111\u1ec3 notes",style:{height:"30vh"},defaultValue:this.props.dataEdit.fcontent}))),r.a.createElement("button",{type:"reset",name:"fsave",id:"fsave",onClick:function(e){return t.updateDataOrAddnew(e)},className:"btn btn-primary btn-lg btn-block"},this.state.id?"C\u1eadp nh\u1eadt ":"Th\xeam m\u1edbi")))}}]),a}(n.Component),T=Object(u.b)((function(t,e){return{dataEdit:t.dataEdit}}),(function(t,e){return{addDataStore:function(e){t({type:"ADD_DATA",data:e})},updateDataStore:function(e){t({type:"UPDATE_DATA",data:e})},changeDisplayFormEdit:function(){t({type:"CHANGE_EDIT_STATUS"})},changeDisplayAlert:function(e){t({type:"CHANGE_ALERT_ON",alertContent:e})}}}))(y),D=a(30),A=a(60),j=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).handleDismiss=function(){t.props.CHANGE_ALERT_OFF()},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return this.props.alertShow?r.a.createElement(D.c,null,r.a.createElement(A.a,{type:"success",headline:"Th\xf4ng b\xe1o",onDismiss:function(){return t.handleDismiss()},timeout:2e3},this.props.alertContent)):null}}]),a}(n.Component),C=Object(u.b)((function(t,e){return{alertShow:t.alertShow,alertContent:t.alertContent}}),(function(t,e){return{CHANGE_ALERT_OFF:function(){t({type:"CHANGE_ALERT_OFF"})}}}))(j),S=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).dislayNewFormNote=function(){if(t.props.isEdit)return r.a.createElement(T,null)},t}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(C,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement(N,null),this.dislayNewFormNote())))}}]),a}(r.a.Component),_=Object(u.b)((function(t,e){return{isEdit:t.isEdit}}))(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(8),k=a(26),I=function(t){switch(t){case void 0:case null:case"":return 0;default:return 1}},F={isEdit:!1,alertShow:!1,dataEdit:{}},H=Object(k.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_DATA":return 0!==I(e.data.ftitle)&&I(e.data.fcontent)?(E.push(e.data),t):Object(w.a)(Object(w.a)({},t),{},{alertShow:!0,alertContent:"Kh\xf4ng th\xeam m\u1edbi \u0111\u01b0\u1ee3c g\xec...."});case"UPDATE_DATA":return 0!==I(e.data.ftitle)&&I(e.data.fcontent)?(E.child(e.data.id).update({ftitle:e.data.ftitle,fcontent:e.data.fcontent,lastUpdate:e.data.lastUpdate}),Object(w.a)(Object(w.a)({},t),{},{dataEdit:e.data})):Object(w.a)(Object(w.a)({},t),{},{alertShow:!0,alertContent:"Kh\xf4ng th\xeam m\u1edbi \u0111\u01b0\u1ee3c g\xec...."});case"CHANGE_EDIT_STATUS":return Object(w.a)(Object(w.a)({},t),{},{isEdit:!t.isEdit});case"CHANGE_ALERT_ON":return Object(w.a)(Object(w.a)({},t),{},{alertShow:!0,alertContent:e.alertContent});case"CHANGE_ALERT_OFF":return Object(w.a)(Object(w.a)({},t),{},{alertShow:!1});case"SEND_DATA_EDIT_TO_STORE":return Object(w.a)(Object(w.a)({},t),{},{dataEdit:e.dataEdit});case"DELETE_NOTE":return E.child(e.id).remove(),t;default:return t}}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:H},r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d94c7df7.chunk.js.map
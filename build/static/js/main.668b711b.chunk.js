(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),i=t.n(o);t(100),t(74),t(101);var c=t(21),l=t(7),s=t(75),m=t(83),u=t(187),d=t(5),p=t(194),g=t(191),h=t(44),b=(t(186),t(2)),f=t(3),v=t(178),E=t(192),y=t(175),k=t(195),x=t(176),O=t(177),w=t(79),C=t.n(w),j=t(77),S=t.n(j),N=t(78),Q=t.n(N),I=t(76),B=t.n(I),T=[{id:"",children:[{id:"Dashboard",icon:r.a.createElement(B.a,null),active:!0},{id:"Profile",icon:r.a.createElement(S.a,null)},{id:"Setting",icon:r.a.createElement(Q.a,null)}]}];var M=Object(d.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(b.a)(e,["classes"]);return r.a.createElement(E.a,Object.assign({variant:"permanent"},t),r.a.createElement(y.a,{disablePadding:!0},r.a.createElement(k.a,{className:Object(f.a)(a.firebase,a.item,a.itemCategory)},"Survey Form"),r.a.createElement(k.a,{className:Object(f.a)(a.item,a.itemCategory)},r.a.createElement(x.a,{className:a.itemIcon},r.a.createElement(C.a,null)),r.a.createElement(O.a,{classes:{primary:a.itemPrimary}},"Home")),T.map((function(e){var t=e.id,n=e.children;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(k.a,{className:a.categoryHeader},r.a.createElement(O.a,{classes:{primary:a.categoryHeaderPrimary}},t)),n.map((function(e){var t=e.id,n=e.icon,o=e.active;return r.a.createElement(k.a,{key:t,button:!0,className:Object(f.a)(a.item,o&&a.itemActiveItem)},r.a.createElement(x.a,{className:a.itemIcon},n),r.a.createElement(O.a,{classes:{primary:a.itemPrimary}},t))})),r.a.createElement(v.a,{className:a.divider}))}))))})),R=t(181),W=t(182),z=t(85),P=t(183),q=t(180),A=t(193),D=t(179),F=t(53),H=t.n(F),L=t(184),U=t(13),J=t(28),$=t(16),G=t(39),V=t(40),K=t(42),X=t(80),Y=t.n(X),Z=t(52),_=t.n(Z),ee=function(e){function a(){var e,t;Object(J.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(G.a)(this,(e=Object(V.a)(a)).call.apply(e,[this].concat(r)))).state={Questions:[]},t.singleQuestion={question:"",type:"",options:[],userId:""},t.options=["Option 1","Option 2"],t}return Object(K.a)(a,e),Object($.a)(a,[{key:"addQueston",value:function(){this.setState({Questions:[].concat(Object(U.a)(this.state.Questions),["  "])})}},{key:"handleChange",value:function(e,a){this.state.Questions[a]=e.target.value,this.setState({Questions:this.state.Questions})}},{key:"handleSelectChange",value:function(e,a){this.state.questionType[a]=e.target.value,this.setState({questionType:this.state.questionType}),console.log(this.questionType)}},{key:"handleRemove",value:function(e,a){this.state.Questions.splice(a,1),this.setState({Questions:this.state.Questions})}},{key:"handleSubmit",value:function(e){for(var a=0;a<this.state.Questions.length;a++)_.a.post("http://eletionapp.3m3pfprvaw.ap-south-1.elasticbeanstalk.com/api/questions",{question:this.state.Questions[a],type:"text",options:[],userId:""}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.setState({Questions:this.state.Questions})}},{key:"handleClear",value:function(e){this.state.Questions.splice(0)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a={color:"#ef0000"};return r.a.createElement("div",{style:{padding:"10px",marging:"10px"}},"Select a Type and Enter Question.",r.a.createElement("label",null,"Question"),this.state.Questions.map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("input",{onChange:function(a){return e.handleChange(a,n)},value:t}),r.a.createElement(D.a,{onClick:function(){return e.handleRemove(n)},style:a},r.a.createElement(Y.a,null)))})),r.a.createElement("hr",null),r.a.createElement(q.a,{onClick:function(a){return e.addQueston(a)}},"Add Question"),r.a.createElement("hr",null),r.a.createElement(q.a,{onClick:function(a){return e.handleSubmit(a)}},"Submit"))}}]),a}(r.a.Component),ae=(n.Component,function(e){function a(e){var t;return Object(J.a)(this,a),(t=Object(G.a)(this,Object(V.a)(a).call(this,e))).state={datas:[]},t}return Object(K.a)(a,e),Object($.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get("http://eletionapp.3m3pfprvaw.ap-south-1.elasticbeanstalk.com/api/questions").then((function(a){var t=a.data;e.setState({datas:t.reverse()}),console.log(a,e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.datas;return r.a.createElement("div",null,e.length?e.map((function(e,a){return r.a.createElement("div",{key:e.id}," ",a+1," - ",e.question," ")})):null)}}]),a}(n.Component));var te=Object(d.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},typography:{padding:e.spacing(2)},root:{"&:hover":{backgroundColor:"transparent"}},Form:{width:"50%"},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}}}))((function(e){var a=JSON.parse(localStorage.getItem("questionList"));console.log("QuestionList",a),console.log(e);var t=e.classes,n=r.a.useState(null),o=Object(c.a)(n,2),i=o[0],l=o[1],s=Boolean(i),m=s?"simple-popover":void 0;return r.a.createElement(z.a,{className:t.paper},r.a.createElement(R.a,{className:t.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(W.a,null,r.a.createElement(P.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(P.a,{item:!0},r.a.createElement(q.a,{"aria-describedby":m,variant:"contained",color:"primary",onClick:function(e){l(e.currentTarget)}},"Add Question"),r.a.createElement(L.a,{id:m,open:s,anchorEl:i,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(ee,null)),r.a.createElement(A.a,{title:"Reload"},r.a.createElement(D.a,null,r.a.createElement(H.a,{className:t.block,color:"inherit",onClick:function(e){new ae(1)}}))))))),r.a.createElement("div",{className:t.contentWrapper},r.a.createElement(h.a,{color:"textSecondary",align:"center"},"Questions"),r.a.createElement(ae,null)))})),ne=t(196),re=t(82),oe=t.n(re),ie=t(185),ce=t(190),le=t(189);var se=Object(d.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},createformWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return r.a.createElement(z.a,{className:a.paper},r.a.createElement(R.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(W.a,null,r.a.createElement(P.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(P.a,{item:!0},r.a.createElement(q.a,{variant:"contained",color:"primary",className:a.addUser},"Add Form"),r.a.createElement(A.a,{title:"Reload"},r.a.createElement(D.a,null,r.a.createElement(H.a,{className:a.block,color:"inherit"}))))))),r.a.createElement("div",{className:a.createformWrapper},r.a.createElement(h.a,{color:"textSecondary",align:"center"},"No Forms added yet!")))}));var me=Object(d.a)((function(e){return{secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{},root:{borderColor:"rgba(255, 255, 255, 0.7)",flexGrow:1}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,n=r.a.useState(0),o=Object(c.a)(n,2),i=o[0],l=o[1];function s(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function m(e){var a=e.children,t=e.value,n=e.index,o=Object(b.a)(e,["children","value","index"]);return r.a.createElement(h.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),t===n&&r.a.createElement(le.a,{p:3},a))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{color:"primary",position:"sticky",elevation:0},r.a.createElement(W.a,null,r.a.createElement(P.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(g.a,{smUp:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton},r.a.createElement(oe.a,null)))),r.a.createElement(P.a,{item:!0,xs:!0}),r.a.createElement(P.a,{item:!0}),r.a.createElement(P.a,{item:!0},r.a.createElement(D.a,{color:"inherit",className:a.iconButtonAvatar},r.a.createElement(ne.a,{src:"/static/images/avatar/1.jpg",alt:"Name Avatar"})))))),r.a.createElement(R.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0}),r.a.createElement(R.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0},r.a.createElement(ce.a,{value:i,textColor:"inherit",className:a.root,onChange:function(e,a){l(a)}},r.a.createElement(ie.a,Object.assign({textColor:"inherit",label:"Question bank"},s(0))),r.a.createElement(ie.a,Object.assign({textColor:"inherit",label:"Forms"},s(1))),r.a.createElement(ie.a,Object.assign({textColor:"inherit",label:"Create forms"},s(2))))),r.a.createElement(m,{value:i,index:0},r.a.createElement(te,null)),r.a.createElement(m,{value:i,index:1},"No Forms"),r.a.createElement(m,{value:i,index:2},r.a.createElement(se,null)))}));var ue=Object(m.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});ue=Object(s.a)({},ue,{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:ue.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:ue.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},ue.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:ue.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:ue.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var de={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},ue.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:ue.spacing(6,4),background:"#eaeff1"},footer:{padding:ue.spacing(2),background:"#eaeff1"}};var pe=Object(d.a)(de)((function(e){var a=e.classes,t=r.a.useState(!1),n=Object(c.a)(t,2),o=n[0],i=n[1],l=function(){i(!o)};return r.a.createElement(u.a,{theme:ue},r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement("nav",{className:a.drawer},r.a.createElement(g.a,{smUp:!0,implementation:"js"},r.a.createElement(M,{PaperProps:{style:{width:256}},variant:"temporary",open:o,onClose:l})),r.a.createElement(g.a,{xsDown:!0,implementation:"css"},r.a.createElement(M,{PaperProps:{style:{width:256}}}))),r.a.createElement("div",{className:a.app},r.a.createElement(me,{onDrawerToggle:l}),r.a.createElement("main",{className:a.main}),r.a.createElement("footer",{className:a.footer}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},95:function(e,a,t){e.exports=t(124)}},[[95,1,2]]]);
//# sourceMappingURL=main.668b711b.chunk.js.map
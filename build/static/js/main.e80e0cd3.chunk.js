(this.webpackJsonprabanymail=this.webpackJsonprabanymail||[]).push([[0],{112:function(e,t,a){"use strict";var n=a(56),r=a(67),i=a(6),c={loading:!0,fail:!1,error:null,username:void 0,firstChar:""},o=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.LOGIN:return void(e.loading=!0);case i.a.LOGIN_SUCCESS:return e.loading=!1,e.fail=!1,e.username=t.payload.username,void(e.firstChar=t.payload.firstChar);case i.a.LOGIN_FAIL:return e.loading=!1,void(e.fail=!0);case i.a.LOGIN_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.GET_USER:return void(e.loading=!0);case i.a.GET_USER_COMPLETE:return e.loading=!1,e.fail=!1,e.username=t.payload.username,void(e.firstChar=t.payload.firstChar);case i.a.GET_USER_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.LOGOUT:return void(e.loading=!0);case i.a.LOGOUT_COMPLETE:return e.loading=!1,e.username="",void(e.firstChar="");case i.a.LOGOUT_ERROR:return e.loading=!1,void(e.error=t.payload);default:return e}})),s=a(33),l=a(47);Object(r.b)();var d={loading:!1,sending:!1,error:null,mail:[],checked:new Set},u=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.FETCH_INBOX:return void(e.loading=!0);case i.a.FETCH_INBOX_COMPLETE:return void(e.loading=!1);case i.a.FETCH_INBOX_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.FETCH_ALL_MAIL:return void(e.loading=!0);case i.a.FETCH_ALL_MAIL_COMPLETE:return e.loading=!1,void(e.mail=t.payload);case i.a.FETCH_ALL_MAIL_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.TOGGLE_STAR:var a=t.payload,n=e.mail.findIndex((function(e){return e._id===a})),r=!e.mail[n].isStarred;return void(e.mail[n]=Object(l.a)(Object(l.a)({},e.mail[n]),{},{isStarred:r}));case i.a.TOGGLE_STAR_ERROR:return void(e.error=t.payload);case i.a.MARK_AS_READ:var c,o=t.payload,u=o.mailId,j=o.isRead,O=Object(s.a)(u);try{var b=function(){var t=c.value,a=e.mail.findIndex((function(e){return e._id===t}));e.mail[a]=Object(l.a)(Object(l.a)({},e.mail[a]),{},{isRead:j})};for(O.s();!(c=O.n()).done;)b()}catch(y){O.e(y)}finally{O.f()}return;case i.a.SEND_MAIL:return void(e.sending=!0);case i.a.SEND_MAIL_COMPLETE:return e.sending=!1,void e.mail.push(t.payload);case i.a.SEND_MAIL_ERROR:return e.sending=!1,void(e.error=t.payload);case i.a.MARK_AS_READ_ERROR:return void(e.error=t.payload);case i.a.TOGGLE_IS_TRASH:var p,h=t.payload,m=Object(s.a)(h);try{var f=function(){var t=p.value,a=e.mail.findIndex((function(e){return e._id===t})),n=!e.mail[a].isTrash;e.mail[a]=Object(l.a)(Object(l.a)({},e.mail[a]),{},{isTrash:n})};for(m.s();!(p=m.n()).done;)f()}catch(y){m.e(y)}finally{m.f()}return;case i.a.TOGGLE_IS_TRASH_ERROR:return void(e.error=t.payload);case i.a.DELETE_MAIL:var x,v=t.payload,g=new Array,_=Object(s.a)(e.mail);try{for(_.s();!(x=_.n()).done;){var E=x.value;v.includes(E._id)||g.push(E)}}catch(y){_.e(y)}finally{_.f()}return void(e.mail=g);case i.a.DELETE_MAIL_ERROR:return void(e.error=t.payload);case i.a.TOGGLE_ALL_MALI_CHECKBOX:return void(e.checked.size||t.payload.reset?e.checked=new Set:e.checked=new Set(t.payload.mailList.map((function(e){return e._id}))));case i.a.TOGGLE_MALI_CHECKBOX:return void(e.checked.has(t.payload)?e.checked.delete(t.payload):e.checked.add(t.payload));default:return e}})),j={sideBarOpen:!0,composeMailOpen:!1,location:""},O=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.SET_LOCATION:return void(e.location=t.payload);case i.a.TOGGLE_SIDEBAR:return void(e.sideBarOpen=!e.sideBarOpen);case i.a.OPEN_COMPOSE_MAIL:return void(e.composeMailOpen=!0);case i.a.CLOSE_COMPOSE_MAIL:return void(e.composeMailOpen=!1);default:return e}})),b=Object(n.c)({user:o,mail:u,control:O});t.a=b},116:function(e,t,a){"use strict";var n=a(165);a.d(t,"store",(function(){return n.a}));a(112),a(166);var r=a(242);a.d(t,"actionCreators",(function(){return r}))},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(56),r=a(248),i=a(112),c=Object(n.d)(i.a,{},Object(n.a)(r.a))},166:function(e,t){},242:function(e,t,a){"use strict";a.r(t),a.d(t,"setLocation",(function(){return f})),a.d(t,"toggleSideBar",(function(){return x})),a.d(t,"openComposeMail",(function(){return v})),a.d(t,"closeComposeMail",(function(){return g})),a.d(t,"toggleMailCheckbox",(function(){return _})),a.d(t,"toggleAllMailCheckbox",(function(){return E})),a.d(t,"login",(function(){return y})),a.d(t,"getUser",(function(){return R})),a.d(t,"logout",(function(){return L})),a.d(t,"fetchInbox",(function(){return C})),a.d(t,"fetchAllMail",(function(){return S})),a.d(t,"toggleStar",(function(){return T})),a.d(t,"sendMail",(function(){return w})),a.d(t,"markAsRead",(function(){return M})),a.d(t,"toggleIsTrash",(function(){return A})),a.d(t,"deleteMail",(function(){return k}));var n=a(10),r=a.n(n),i=a(19),c=a(37),o=a.n(c),s=a(249),l="https://rabany-mail.herokuapp.com",d=function(e){return o()({method:"POST",data:{mailSize:e},withCredentials:!0,url:l+"/messages/allmail"})},u=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/starred"})},j=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/istrash"})},O=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/deleteMessages"})},b=function(e){return e.text=Object(s.htmlToText)(e.html),o()({method:"POST",data:e,withCredentials:!0,url:l+"/messages"})},p=function(e,t){return o()({method:"POST",data:{mailId:e,isRead:t},withCredentials:!0,url:l+"/messages/markasread"})},h=a(83),m=a(6),f=function(e){return{type:m.a.SET_LOCATION,payload:e}},x=function(){return{type:m.a.TOGGLE_SIDEBAR}},v=function(){return{type:m.a.OPEN_COMPOSE_MAIL}},g=function(){return{type:m.a.CLOSE_COMPOSE_MAIL}},_=function(e){return{type:m.a.TOGGLE_MALI_CHECKBOX,payload:e}},E=function(e,t){return{type:m.a.TOGGLE_ALL_MALI_CHECKBOX,payload:{mailList:e,reset:t}}},y=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){var i,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:m.a.LOGIN}),a.prev=1,a.next=4,Object(h.b)(e,t);case 4:i=a.sent,c=i.data,n(c?{type:m.a.LOGIN_SUCCESS,payload:{username:c.username,firstChar:c.firstChar}}:{type:m.a.LOGIN_FAIL}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),n({type:m.a.LOGIN_ERROR,payload:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},R=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.a.GET_USER}),e.prev=1,e.next=4,Object(h.a)();case 4:a=e.sent,n=a.data,t({type:m.a.GET_USER_COMPLETE,payload:{username:n.username,firstChar:n.firstChar}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:m.a.GET_USER_ERROR,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.a.LOGOUT}),e.prev=1,e.next=4,Object(h.c)();case 4:t({type:m.a.LOGOUT_COMPLETE}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t({type:m.a.LOGOUT_ERROR,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.a.FETCH_INBOX}),e.prev=1,e.next=4,o()({method:"GET",withCredentials:!0,url:l+"/messages/inbox"});case 4:a=e.sent.data,t({type:m.a.FETCH_INBOX_COMPLETE,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m.a.FETCH_INBOX_ERROR,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.a.FETCH_ALL_MAIL}),i=(null===(n=a().mail)||void 0===n?void 0:n.mail.length)||0,e.prev=2,e.next=5,d(i);case 5:c=e.sent.data,o=c.allMail,c.needToUpdate&&t({type:m.a.FETCH_ALL_MAIL_COMPLETE,payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t({type:m.a.FETCH_ALL_MAIL_ERROR,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:m.a.TOGGLE_STAR,payload:e}),t.prev=1,t.next=4,u(e);case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),a({type:m.a.TOGGLE_STAR_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:m.a.SEND_MAIL}),t.prev=1,t.next=4,b(e);case 4:n=t.sent.data,console.log(n),a({type:m.a.SEND_MAIL_COMPLETE,payload:n}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("star error: "+t.t0.message),a({type:m.a.SEND_MAIL_ERROR,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},M=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p(e,t);case 3:n({type:m.a.MARK_AS_READ,payload:{mailId:e,isRead:t}}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),n({type:m.a.MARK_AS_READ_ERROR,payload:a.t0.message});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:m.a.TOGGLE_IS_TRASH,payload:e}),t.prev=1,t.next=4,j(e);case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),a({type:m.a.TOGGLE_IS_TRASH_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:a({type:m.a.DELETE_MAIL,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:m.a.DELETE_MAIL_ERROR,payload:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}},291:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},349:function(e,t,a){},363:function(e,t,a){},371:function(e,t){},373:function(e,t){},384:function(e,t){},386:function(e,t){},413:function(e,t){},415:function(e,t){},416:function(e,t){},421:function(e,t){},423:function(e,t){},442:function(e,t){},454:function(e,t){},457:function(e,t){},461:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(286)(r.a,{trackAllPureComponents:!0});var i=a(14),c=a.n(i),o=(a(291),a(18)),s=a(47),l=a(17),d=a(20),u=a(498),j=a(32),O=200,b=function(){return Object(u.a)((function(e){var t=e.spacing(7)+1;return{root:{display:"flex"},appBar:{display:"flex",width:"calc(100% - ".concat(t,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:O,width:"calc(100% - ".concat(O,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:O,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:O,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:t}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,paddingTop:e.spacing(3),paddingLeft:e.spacing(1)},AppBarRight:{marginLeft:10},AppbBarMiddle:{flex:1,display:"flex",alignItems:"center"},search:{display:"flex",flex:1,marginLeft:20,maxWidth:600,minWidth:200},input:{marginLeft:e.spacing(1),width:"100%"},iconButton:{padding:10},loc:{backgroundColor:"rgba(0, 0, 0, 0.1) !important"}}}))},p=a(512),h=a(4),m=a(500),f=a(502),x=a(99),v=a(521),g=a(464),_=a(503),E=a(523),y=a(504),R=a(524),L=a(265),C=a(508),S=a(250),T=a.n(S),w=a(82),M=w.c,A=a(56),k=a(116),I=function(){var e=Object(w.b)();return Object(n.useMemo)((function(){return Object(A.b)(k.actionCreators,e)}),[e])},N=a(2),G=b();function D(){var e=I().logout,t=M((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.username})),a=M((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.firstChar})),n=M((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.sideBarOpen})),i=G(),c=r.a.useState(null),s=Object(o.a)(c,2),d=s[0],u=s[1];return Object(N.jsx)("div",{children:Object(N.jsx)(m.a,{position:"fixed",className:Object(h.a)(i.appBar,Object(l.a)({},i.appBarShift,n)),children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(x.a,{variant:"h6",noWrap:!0,children:"Rabany Mail"}),Object(N.jsx)("div",{className:i.AppbBarMiddle,children:Object(N.jsxs)(g.a,{component:"form",className:i.search,children:[Object(N.jsx)(_.a,{type:"submit",className:i.iconButton,"aria-label":"search",children:Object(N.jsx)(T.a,{})}),Object(N.jsx)(E.a,{className:i.input,placeholder:"Search Mail",inputProps:{"aria-label":"Search Mail"}})]})}),Object(N.jsxs)("div",{className:i.AppBarRight,children:[Object(N.jsx)(y.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(N.jsx)(R.a,{title:"".concat(t,"@rabanymail.com"),"aria-label":"add",children:Object(N.jsxs)(v.a,{children:[" ",a,"  "]})})}),Object(N.jsxs)(L.a,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:function(){u(null)},children:[Object(N.jsxs)(x.a,{style:{margin:10},variant:"h5",children:[" ","".concat(t,"@rabanymail.com")," "]}),Object(N.jsx)(C.a,{onClick:function(){u(null),e()},children:Object(N.jsx)(y.a,{fullWidth:!0,variant:"contained",color:"secondary",children:"Logout"})})]})]})]})})})}var B=a(519),P=a(253),F=a.n(P),H=a(62),U=a.n(H),X=a(80),W=a.n(X),K=a(81),z=a.n(K),q=a(119),Y=a.n(q),J=a(79),V=a.n(J),Q=(a(346),a(252)),Z=a.n(Q),$=a(120),ee=a.n($),te=(a(347),a(118)),ae=a.n(te),ne=a(28),re=function(e){var t=e.mail,a=e.location,r=I(),i=r.toggleStar,c=r.markAsRead,s=r.toggleIsTrash,l=r.deleteMail,d=Object(n.useState)(!1),u=Object(o.a)(d,2),j=u[0],O=u[1],b=I().toggleMailCheckbox,p=M((function(e){var a;return null===(a=e.mail)||void 0===a?void 0:a.checked.has(t._id)}))||!1,m=function(){s([t._id])},f=function(){c([t._id],!t.isRead)},x=function(){return t.isRead?Object(N.jsx)(R.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(N.jsx)(_.a,{onClick:f,children:Object(N.jsx)(V.a,{})})}):Object(N.jsx)(R.a,{title:"Mark as read","aria-label":"Mark as read",children:Object(N.jsx)(_.a,{onClick:f,children:Object(N.jsx)(Y.a,{})})})};return Object(N.jsxs)("div",{className:Object(h.a)("emailRow",{readMark:t.isRead}),children:[Object(N.jsxs)("div",{className:"emailRow_options",children:[Object(N.jsx)(B.a,{checked:p,onClick:function(){b(t._id)}}),Object(N.jsx)(_.a,{onClick:function(){i(t._id)},children:t.isStarred?Object(N.jsx)(ee.a,{fontSize:"large"}):Object(N.jsx)(Z.a,{fontSize:"large"})})]}),Object(N.jsxs)(ne.b,{onClick:function(){t.isRead||c([t._id],!0)},className:"clickable",to:"/mail/".concat(a,"/").concat(t._id),style:{textDecoration:"none",color:"inherit"},onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},children:[Object(N.jsx)("div",{className:"emailRow_title",children:Object(N.jsx)("h3",{children:t.isOutbound?"To:".concat(t.to[0]):t.from})}),Object(N.jsx)("div",{className:"emailRow_message",children:Object(N.jsxs)("h4",{children:[t.subject,Object(N.jsxs)("span",{className:"emailRow_description",children:[" - "," ",t.text]})]})})]}),Object(N.jsx)("div",{onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},children:Object(N.jsx)("div",{className:"emailRow_time",children:j?Object(N.jsxs)(N.Fragment,{children:[t.isTrash?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(R.a,{title:"Delete","aria-label":"Delete",children:Object(N.jsx)(_.a,{onClick:function(){l([t._id])},children:Object(N.jsx)(W.a,{fontSize:"large"})})}),Object(N.jsx)(R.a,{title:"Restore","aria-label":"Restore",children:Object(N.jsx)(_.a,{onClick:m,children:Object(N.jsx)(z.a,{fontSize:"large"})})})]}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(R.a,{title:"move to trash","aria-label":"move to trash",children:Object(N.jsx)(_.a,{onClick:m,children:Object(N.jsx)(U.a,{fontSize:"large"})})})}),Object(N.jsx)(x,{})]}):Object(N.jsxs)("h4",{children:["  ",ae()(t.created).format("MMM Do")]})})})]})},ie=Object(u.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}));function ce(e){var t=e.match,a=(ie(),t.params.location),r=I(),i=r.setLocation,c=r.fetchAllMail,o=r.toggleAllMailCheckbox,s=r.toggleIsTrash,l=r.deleteMail,d=r.markAsRead,u=M((function(e){var t,a,n,r,i,c,o,s,l,d;return"inbox"===(null===(t=e.control)||void 0===t?void 0:t.location)?null===(a=e.mail)||void 0===a?void 0:a.mail.filter((function(e){return!e.isOutbound&&!e.isTrash})).reverse():"starred"===(null===(n=e.control)||void 0===n?void 0:n.location)?null===(r=e.mail)||void 0===r?void 0:r.mail.filter((function(e){return e.isStarred&&!e.isTrash})).reverse():"sent"===(null===(i=e.control)||void 0===i?void 0:i.location)?null===(c=e.mail)||void 0===c?void 0:c.mail.filter((function(e){return e.isOutbound&&!e.isTrash})).reverse():"allmail"===(null===(o=e.control)||void 0===o?void 0:o.location)?null===(s=e.mail)||void 0===s?void 0:s.mail.filter((function(e){return!e.isTrash})).reverse():"trash"===(null===(l=e.control)||void 0===l?void 0:l.location)?null===(d=e.mail)||void 0===d?void 0:d.mail.filter((function(e){return e.isTrash})).reverse():[]})),j=M((function(e){var t;return null===(t=e.mail)||void 0===t?void 0:t.checked}))||new Set;Object(n.useEffect)((function(){i(a)}),[]),Object(n.useEffect)((function(){o(u,!0),"inbox"===a&&c()}),[a]);var O=function(){o(u,!0),s(Array.from(j))};return Object(N.jsxs)("div",{className:"emailList",children:[Object(N.jsx)("div",{className:"emailList_settings",children:Object(N.jsxs)("div",{className:"emailList_settingsLeft",children:[Object(N.jsx)(B.a,{checked:0!==j.size,onClick:function(){o(u)}}),j.size?Object(N.jsxs)(N.Fragment,{children:["trash"!==a?Object(N.jsx)(R.a,{title:"move to trash","aria-label":"move to trash",children:Object(N.jsx)(_.a,{onClick:O,children:Object(N.jsx)(U.a,{})})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(R.a,{title:"Restore","aria-label":"Restore",children:Object(N.jsx)(_.a,{onClick:O,children:Object(N.jsx)(z.a,{})})}),Object(N.jsx)(R.a,{title:"Delete","aria-label":"Delete",children:Object(N.jsx)(_.a,{onClick:function(){o(u,!0),l(Array.from(j))},children:Object(N.jsx)(W.a,{})})})]}),Object(N.jsx)(R.a,{title:"Mark as read","aria-label":"Mark as read",children:Object(N.jsx)(_.a,{onClick:function(){d(Array.from(j),!0)},children:Object(N.jsx)(Y.a,{})})}),Object(N.jsx)(R.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(N.jsx)(_.a,{onClick:function(){d(Array.from(j),!1)},children:Object(N.jsx)(V.a,{})})})]}):Object(N.jsx)(R.a,{title:"Refresh","aria-label":"Refresh",children:Object(N.jsx)(_.a,{onClick:function(){c()},children:Object(N.jsx)(F.a,{})})})]})}),Object(N.jsx)("div",{className:"emailList_list",children:u.map((function(e){return Object(N.jsx)(re,{mail:e,location:a},e._id)}))})]})}var oe=a(520),se=a(507),le=a(509),de=a(254),ue=a.n(de),je=a(255),Oe=a.n(je),be=a(465),pe=a(510),he=a(511),me=a(155),fe=a.n(me),xe=a(257),ve=a.n(xe),ge=a(256),_e=a.n(ge),Ee=b(),ye=function(){var e,t,a=Ee(),n=(Object(j.a)(),I()),r=n.openComposeMail,i=n.toggleSideBar,c=n.setLocation,o=M((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.sideBarOpen})),s=M((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.location}));return Object(N.jsx)("div",{children:Object(N.jsxs)(oe.a,{variant:"permanent",className:Object(h.a)(a.drawer,(e={},Object(l.a)(e,a.drawerOpen,o),Object(l.a)(e,a.drawerClose,!o),e)),classes:{paper:Object(h.a)((t={},Object(l.a)(t,a.drawerOpen,o),Object(l.a)(t,a.drawerClose,!o),t))},children:[Object(N.jsx)("div",{className:a.toolbar,children:Object(N.jsx)(_.a,{onClick:i,children:o?Object(N.jsx)(ue.a,{}):Object(N.jsx)(Oe.a,{})})}),Object(N.jsx)(le.a,{}),Object(N.jsxs)(se.a,{children:[[["Inbox",Object(N.jsx)(fe.a,{})],["Starred",Object(N.jsx)(ee.a,{})],["Sent",Object(N.jsx)(_e.a,{})],["All mail",Object(N.jsx)(ve.a,{})],["trash",Object(N.jsx)(U.a,{})]].map((function(e,t){return Object(N.jsx)(ne.b,{to:"/mail/"+e[0].toLocaleLowerCase().replaceAll(" ",""),style:{textDecoration:"none",color:"inherit"},children:Object(N.jsxs)(be.a,{button:!0,className:Object(h.a)(Object(l.a)({},a.loc,e[0].toLocaleLowerCase().replaceAll(" ","")===s)),onClick:function(){c(e[0].toLocaleLowerCase().replaceAll(" ",""))},children:[Object(N.jsx)(pe.a,{children:e[1]}),Object(N.jsx)(he.a,{primary:e[0]})]},e)},e)})),Object(N.jsx)(le.a,{}),Object(N.jsx)(be.a,{}),Object(N.jsxs)(be.a,{button:!0,onClick:r,children:[Object(N.jsx)(pe.a,{children:Object(N.jsx)(fe.a,{})}),Object(N.jsx)(he.a,{primary:"compose"})]},"compose")]})]})})},Re=a(259),Le=a.n(Re),Ce=a(260),Se=a.n(Ce),Te=(a(349),a(258)),we=function(e){var t=e.match,a=I(),n=a.toggleIsTrash,r=a.deleteMail,i=a.markAsRead,c=Object(d.g)(),o=M((function(e){var a;return null===(a=e.mail)||void 0===a?void 0:a.mail.find((function(e){return e._id===t.params.mailID}))})),s=function(){o&&n([o._id])};return o?Object(N.jsxs)("div",{className:"mail",children:[Object(N.jsxs)("div",{className:"mail_tools",children:[Object(N.jsxs)("div",{className:"mail_toolsLeft",children:[Object(N.jsx)(_.a,{onClick:function(){return c.goBack()},children:Object(N.jsx)(Le.a,{})}),o.isTrash?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(R.a,{title:"Restore","aria-label":"Restore",children:Object(N.jsx)(_.a,{onClick:s,children:Object(N.jsx)(z.a,{})})}),Object(N.jsx)(R.a,{title:"Delete","aria-label":"Delete",children:Object(N.jsx)(_.a,{onClick:function(){o&&r([o._id]),c.goBack()},children:Object(N.jsx)(W.a,{})})})]}):Object(N.jsx)(R.a,{title:"move to trash","aria-label":"move to trash",children:Object(N.jsx)(_.a,{onClick:s,children:Object(N.jsx)(U.a,{})})}),Object(N.jsx)(R.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(N.jsx)(_.a,{onClick:function(){o&&i([o._id],!1),c.goBack()},children:Object(N.jsx)(V.a,{})})})]}),Object(N.jsx)("div",{className:"mail_toolsRight"})]}),Object(N.jsxs)("div",{className:"mail_body",children:[Object(N.jsxs)("div",{className:"mail_bodyHeader",children:[Object(N.jsx)("h2",{children:o.subject}),Object(N.jsx)(Se.a,{className:"mail_important"}),Object(N.jsx)("p",{children:o.from}),Object(N.jsx)("p",{className:"mail_time",children:ae()(o.created).format("MM/DD/YYYY")})]}),Object(N.jsx)("div",{className:"mail_message",children:Object(Te.a)(o.html)})]})]}):Object(N.jsx)("div",{})},Me=(a(363),a(262)),Ae=a.n(Me),ke=a(264),Ie=(a(364),a(365),a(366),a(261)),Ne=a.n(Ie),Ge=function(){var e=Object(ke.a)(),t=e.register,a=e.handleSubmit,r=(e.watch,e.errors,Object(n.useRef)("")),i=I().closeComposeMail,c=I().sendMail;return Object(N.jsxs)("div",{className:"sendMail",children:[Object(N.jsxs)("div",{className:"sendMail_header",children:[Object(N.jsx)("h3",{children:"New Message"}),Object(N.jsx)(Ae.a,{className:"sendMail_close",onClick:i})]}),Object(N.jsxs)("form",{onSubmit:a((function(e){e.to=[e.to],e.html=r.current,c(e),i()})),children:[Object(N.jsx)("input",{name:"to",type:"email",placeholder:"To",ref:t({required:!0})}),Object(N.jsx)("input",{name:"subject",type:"text",placeholder:"Subject",ref:t()}),Object(N.jsx)(Ne.a,{config:{attribution:!1,height:300,quickInsertTags:["p","div"],listAdvancedTypes:!0},onModelChange:function(e){r.current=e}}),Object(N.jsx)("div",{className:"sendMail_options",children:Object(N.jsx)(y.a,{type:"submit",className:"sendMail_send",variant:"contained",color:"primary",children:"Send"})})]})]})},De=200,Be=(Object(u.a)((function(e){var t=e.spacing(7)+1;return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(t,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:De,width:"calc(100% - ".concat(De,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:De,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:De,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:t}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})),function(){var e=M((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.composeMailOpen}));return Object(N.jsxs)("div",{children:[Object(N.jsxs)(d.d,{children:[Object(N.jsx)(d.b,{path:"/mail/:location",exact:!0,component:ce}),Object(N.jsx)(d.b,{path:"/mail/:location/:mailID",component:we}),Object(N.jsx)(d.b,{path:"/",children:Object(N.jsx)(d.a,{to:"/mail/inbox"})})]}),e&&Object(N.jsx)(Ge,{})]})}),Pe=r.a.memo(Be),Fe=b(),He=function(e){var t=Fe();Object(j.a)();return Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(p.a,{}),Object(N.jsx)(D,{}),Object(N.jsx)(ye,{}),Object(N.jsxs)("main",{className:t.content,children:[Object(N.jsx)("div",{className:t.toolbar}),Object(N.jsx)(Pe,{})]})]})},Ue=a(10),Xe=a.n(Ue),We=a(19),Ke=a(517),ze=a(514),qe=a(516),Ye=a(121),Je=a.n(Ye),Ve=a(513),Qe=a(83);function Ze(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(ne.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var $e=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function et(){var e=$e(),t=Object(d.g)(),a=Object(n.useState)(""),r=Object(o.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),u=l[0],j=l[1],O=Object(n.useState)(""),b=Object(o.a)(O,2),h=b[0],m=b[1],f=Object(n.useState)(void 0),g=Object(o.a)(f,2),_=g[0],E=g[1],R=Object(n.useState)(void 0),L=Object(o.a)(R,2),C=L[0],S=L[1],T=Object(n.useState)(void 0),w=Object(o.a)(T,2),M=w[0],A=w[1],k=function(){var e=Object(We.a)(Xe.a.mark((function e(a){var n,r,c,o;return Xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(Qe.d)(i,u,h);case 3:n=e.sent.data,console.log(n),n.length?(E(null===(r=n.find((function(e){return"username"===e.param})))||void 0===r?void 0:r.msg),S(null===(c=n.find((function(e){return"password"===e.param})))||void 0===c?void 0:c.msg),A(null===(o=n.find((function(e){return"passwordConfirm"===e.param})))||void 0===o?void 0:o.msg)):t.push("/login");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(Ve.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(p.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(v.a,{className:e.avatar,children:Object(N.jsx)(Je.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:k,children:[Object(N.jsxs)(ze.a,{container:!0,spacing:2,children:[Object(N.jsx)(ze.a,{item:!0,xs:12,children:Object(N.jsx)(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",onChange:function(e){return c(e.target.value)},helperText:_,error:!!_})}),Object(N.jsx)(ze.a,{item:!0,xs:12,children:Object(N.jsx)(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return j(e.target.value)},helperText:C,error:!!C})}),Object(N.jsx)(ze.a,{item:!0,xs:12,children:Object(N.jsx)(Ke.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password-confirm",label:"password confirm",type:"password",id:"password-confirm",autoComplete:"current-password",onChange:function(e){return m(e.target.value)},helperText:M,error:!!M})})]}),Object(N.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(N.jsx)(ze.a,{container:!0,justify:"flex-end",children:Object(N.jsx)(ze.a,{item:!0,children:Object(N.jsx)(ne.b,{to:"/login",style:{textDecoration:"none",color:"inherit"},children:"Already have an account? Sign in"})})})]})]}),Object(N.jsx)(qe.a,{mt:5,children:Object(N.jsx)(Ze,{})})]})}var tt=a(515),at=a(263),nt=a.n(at);function rt(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(ne.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var it=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},alert:{marginBottom:0,marginRight:10,marginTop:20,minHeight:0,position:"relative",display:"flex",padding:"9px 12px 9px 20px",borderWidth:"1px 1px 1px 0px",borderStyle:"solid",borderRadius:6,fontSize:14,lineHeight:3,color:"rgb(143, 34, 27)",borderColor:"rgb(249, 211, 197) rgb(249, 211, 197) rgb(249, 211, 197) rgb(207, 74, 34)",backgroundColor:"rgb(252, 235, 226)"},alertText:{alignSelf:"center",mozBoxFlex:1,flexGrow:1,marginLeft:15,marginRight:10,color:"rgb(207, 74, 34)"}}})),ct=function(){var e=it(),t=I(),a=t.login,r=(t.logout,M((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.fail}))),i=Object(n.useState)(""),c=Object(o.a)(i,2),s=c[0],l=c[1],d=Object(n.useState)(""),u=Object(o.a)(d,2),j=u[0],O=u[1];return Object(N.jsxs)(Ve.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(p.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(v.a,{className:e.avatar,children:Object(N.jsx)(Je.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),r&&Object(N.jsxs)("div",{role:"alert",className:e.alert,"data-testid":"bannerAuthCodeError",children:[Object(N.jsx)(nt.a,{style:{marginTop:8}}),Object(N.jsx)("span",{className:e.alertText,children:"Please provide a valid username and password."})]}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(s,j),window.addEventListener("beforeunload",(function(e){}))},children:[Object(N.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",autoFocus:!0,value:s,error:r,onChange:function(e){return l(e.target.value)}}),Object(N.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,error:r,onChange:function(e){return O(e.target.value)}}),Object(N.jsx)(tt.a,{control:Object(N.jsx)(B.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(N.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(N.jsxs)(ze.a,{container:!0,children:[Object(N.jsx)(ze.a,{item:!0,xs:!0,children:Object(N.jsx)(ne.b,{to:"/login",style:{textDecoration:"none",color:"inherit"},children:"Forgot password?"})}),Object(N.jsx)(ze.a,{item:!0,children:Object(N.jsx)(ne.b,{to:"/signup",style:{textDecoration:"none",color:"inherit"},children:"Don't have an account? Sign Up"})})]})]})]}),Object(N.jsx)(qe.a,{mt:8,children:Object(N.jsx)(rt,{})})]})},ot=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=(t[0],t[1],I()),r=a.getUser,i=a.fetchAllMail,c=M((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.username}));M((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.loading})),M((function(e){var t;return null===(t=e.mail)||void 0===t?void 0:t.error}));return Object(n.useEffect)((function(){c?i():r()}),[c]),void 0===c?Object(N.jsx)(N.Fragment,{}):c?Object(N.jsx)(He,{}):Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{to:"/login"}),Object(N.jsx)(d.b,{path:"/login",children:Object(N.jsx)(ct,{})}),Object(N.jsx)(d.b,{path:"/signup",children:Object(N.jsx)(et,{})})]})},st=function(){return Object(N.jsx)(w.a,{store:k.store,children:Object(N.jsx)(ne.a,{children:Object(N.jsx)(ot,{})})})};c.a.render(Object(N.jsx)(st,{}),document.querySelector("#root"))},6:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.TOGGLE_SIDEBAR="toggle_sideBar",e.OPEN_COMPOSE_MAIL="open_compose_mail",e.CLOSE_COMPOSE_MAIL="close_compose_mail",e.LOGIN="login",e.LOGIN_SUCCESS="login_success",e.LOGIN_FAIL="login_fail",e.LOGIN_ERROR="login_error",e.GET_USER="get_user",e.GET_USER_COMPLETE="get_user_complete",e.GET_USER_ERROR="get_user_error",e.LOGOUT="logout",e.LOGOUT_COMPLETE="logout_complete",e.LOGOUT_ERROR="logout_error",e.FETCH_ALL_MAIL="fetch_inbox",e.FETCH_ALL_MAIL_COMPLETE="fetch_all_mail_complete",e.FETCH_ALL_MAIL_ERROR="fetch_inbox_error",e.FETCH_INBOX="fetch_inbox",e.FETCH_INBOX_COMPLETE="fetch_inbox_complete",e.FETCH_INBOX_ERROR="fetch_inbox_error",e.TOGGLE_STAR="toggle_star",e.TOGGLE_STAR_ERROR="toggle_star_error",e.SEND_MAIL="send_mail",e.SEND_MAIL_COMPLETE="send_mail_complete",e.SEND_MAIL_ERROR="send_mail_error",e.SET_LOCATION="set_location",e.MARK_AS_READ="mark_as_read",e.MARK_AS_READ_ERROR="mark_as_read_error",e.TOGGLE_IS_TRASH="toggle_is_trash",e.TOGGLE_IS_TRASH_ERROR="toggle_is_trash_error",e.DELETE_MAIL="delete_mail",e.DELETE_MAIL_ERROR="delete_mail_error",e.TOGGLE_MALI_CHECKBOX="toggle_mail_checkbox",e.TOGGLE_ALL_MALI_CHECKBOX="toggle_all_mail_checkbox"}(n||(n={}))},83:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return l}));var n=a(37),r=a.n(n),i="https://rabany-mail.herokuapp.com",c=function(e,t){return r()({method:"POST",data:{username:e,password:t},withCredentials:!0,url:i+"/login"})},o=function(){return r()({method:"GET",withCredentials:!0,url:i+"/logout"})},s=function(){return r()({method:"GET",withCredentials:!0,url:i+"/user"})},l=function(e,t,a){return r()({method:"POST",data:{username:e,password:t,passwordConfirm:a},withCredentials:!0,url:i+"/register"})}}},[[461,1,2]]]);
//# sourceMappingURL=main.e80e0cd3.chunk.js.map
(this.webpackJsonprabanymail=this.webpackJsonprabanymail||[]).push([[0],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(44),r=a(146),i=a(77),c=Object(n.d)(i.a,{},Object(n.a)(r.a))},112:function(e,t){},140:function(e,t,a){"use strict";a.r(t),a.d(t,"setLocation",(function(){return f})),a.d(t,"toggleSideBar",(function(){return x})),a.d(t,"openComposeMail",(function(){return v})),a.d(t,"closeComposeMail",(function(){return _})),a.d(t,"toggleMailCheckbox",(function(){return g})),a.d(t,"toggleAllMailCheckbox",(function(){return E})),a.d(t,"login",(function(){return y})),a.d(t,"getUser",(function(){return R})),a.d(t,"logout",(function(){return L})),a.d(t,"fetchInbox",(function(){return C})),a.d(t,"fetchAllMail",(function(){return T})),a.d(t,"toggleStar",(function(){return S})),a.d(t,"sendMail",(function(){return M})),a.d(t,"markAsRead",(function(){return A})),a.d(t,"toggleIsTrash",(function(){return w})),a.d(t,"deleteMail",(function(){return k}));var n=a(9),r=a.n(n),i=a(15),c=a(31),o=a.n(c),s=a(147),l="https://rabany-mail.herokuapp.com",d=function(e){return o()({method:"POST",data:{mailSize:e},withCredentials:!0,url:l+"/messages/allmail"})},u=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/starred"})},j=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/istrash"})},O=function(e){return o()({method:"POST",data:{mailId:e},withCredentials:!0,url:l+"/messages/deleteMessages"})},p=function(e){return e.text=Object(s.htmlToText)(e.html),o()({method:"POST",data:e,withCredentials:!0,url:l+"/messages"})},b=function(e,t){return o()({method:"POST",data:{mailId:e,isRead:t},withCredentials:!0,url:l+"/messages/markasread"})},m=a(62),h=a(6),f=function(e){return{type:h.a.SET_LOCATION,payload:e}},x=function(){return{type:h.a.TOGGLE_SIDEBAR}},v=function(){return{type:h.a.OPEN_COMPOSE_MAIL}},_=function(){return{type:h.a.CLOSE_COMPOSE_MAIL}},g=function(e){return{type:h.a.TOGGLE_MALI_CHECKBOX,payload:e}},E=function(e,t){return{type:h.a.TOGGLE_ALL_MALI_CHECKBOX,payload:{mailList:e,reset:t}}},y=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){var i,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:h.a.LOGIN}),a.prev=1,a.next=4,Object(m.b)(e,t);case 4:i=a.sent,c=i.data,n(c?{type:h.a.LOGIN_SUCCESS,payload:{username:c.username,firstChar:c.firstChar}}:{type:h.a.LOGIN_FAIL}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),n({type:h.a.LOGIN_ERROR,payload:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},R=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.a.GET_USER}),e.prev=1,e.next=4,Object(m.a)();case 4:a=e.sent,n=a.data,t({type:h.a.GET_USER_COMPLETE,payload:{username:n.username,firstChar:n.firstChar}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:h.a.GET_USER_ERROR,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.a.LOGOUT}),e.prev=1,e.next=4,Object(m.c)();case 4:t({type:h.a.LOGOUT_COMPLETE}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t({type:h.a.LOGOUT_ERROR,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.a.FETCH_INBOX}),e.prev=1,e.next=4,o()({method:"GET",withCredentials:!0,url:l+"/messages/inbox"});case 4:a=e.sent.data,t({type:h.a.FETCH_INBOX_COMPLETE,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:h.a.FETCH_INBOX_ERROR,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.a.FETCH_ALL_MAIL}),i=(null===(n=a().mail)||void 0===n?void 0:n.mail.length)||0,e.prev=2,e.next=5,d(i);case 5:c=e.sent.data,o=c.allMail,c.needToUpdate&&t({type:h.a.FETCH_ALL_MAIL_COMPLETE,payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t({type:h.a.FETCH_ALL_MAIL_ERROR,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:h.a.TOGGLE_STAR,payload:e}),t.prev=1,t.next=4,u(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),a({type:h.a.TOGGLE_STAR_ERROR,payload:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:h.a.SEND_MAIL}),t.prev=1,t.next=4,p(e);case 4:n=t.sent.data,console.log(n),a({type:h.a.SEND_MAIL_COMPLETE,payload:n}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("star error: "+t.t0.message),a({type:h.a.SEND_MAIL_ERROR,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b(e,t);case 3:n({type:h.a.MARK_AS_READ,payload:{mailId:e,isRead:t}}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),n({type:h.a.MARK_AS_READ_ERROR,payload:a.t0.message});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:h.a.TOGGLE_IS_TRASH,payload:e}),t.prev=1,t.next=4,j(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),a({type:h.a.TOGGLE_IS_TRASH_ERROR,payload:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:a({type:h.a.DELETE_MAIL,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:h.a.DELETE_MAIL_ERROR,payload:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}},187:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},246:function(e,t,a){},260:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),i=(a(187),a(16)),c=a(45),o=a(17),s=a(300),l=200,d=function(){return Object(s.a)((function(e){var t=e.spacing(7)+1;return{root:{display:"flex"},appBar:{display:"flex",width:"calc(100% - ".concat(t,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:l,width:"calc(100% - ".concat(l,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:l,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:l,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:t}),toolbar:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,paddingTop:e.spacing(3),paddingLeft:e.spacing(1)},AppBarRight:{marginLeft:10},AppbBarMiddle:{flex:1,display:"flex",alignItems:"center"},search:{display:"flex",flex:1,marginLeft:20,maxWidth:600,minWidth:200},input:{marginLeft:e.spacing(1),width:"100%"},iconButton:{padding:10},loc:{backgroundColor:"rgba(0, 0, 0, 0.1) !important"}}}))},u=a(314),j=a(20),O=a(0),p=a(4),b=a(302),m=a(304),h=a(87),f=a(322),x=a(305),v=a(324),_=a(164),g=a(309),E=a(61),y=E.c,R=a(44),L=a(81),C=function(){var e=Object(E.b)();return Object(O.useMemo)((function(){return Object(R.b)(L.actionCreators,e)}),[e])},T=a(2),S=d();function M(){var e=S(),t=C().logout,a=y((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.username})),n=y((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.firstChar})),r=y((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.sideBarOpen})),i=Object(O.useState)(null),c=Object(j.a)(i,2),s=c[0],l=c[1];return Object(T.jsx)("div",{children:Object(T.jsx)(b.a,{position:"fixed",className:Object(p.a)(e.appBar,Object(o.a)({},e.appBarShift,r)),children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)(h.a,{variant:"h6",noWrap:!0,children:"Rabany Mail"}),Object(T.jsx)("div",{className:e.AppbBarMiddle}),Object(T.jsxs)("div",{className:e.AppBarRight,children:[Object(T.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},children:Object(T.jsx)(v.a,{title:"".concat(a,"@rabanymail.com"),"aria-label":"add",children:Object(T.jsxs)(f.a,{children:[" ",n,"  "]})})}),Object(T.jsxs)(_.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){l(null)},children:[Object(T.jsxs)(h.a,{style:{margin:10},variant:"h5",children:[" ","".concat(a,"@rabanymail.com")," "]}),Object(T.jsx)(g.a,{onClick:function(){l(null),t()},children:Object(T.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"secondary",children:"Logout"})})]})]})]})})})}var A=a(310),w=a(320),k=a(152),I=a.n(k),N=a(85),G=a.n(N),D=a(60),B=a.n(D),P=(a(242),a(151)),H=a.n(P),F=a(86),U=a.n(F),X=(a(243),a(83)),W=a.n(X),z=a(25),K=a(84),q=a.n(K),Y=a(150),J=a.n(Y),V=a(149),Q=a.n(V),Z=function(e){var t=e.isTrash,a=e.fontSize,n=e.onClickTrash,r=e.onClickDelete;return t?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(v.a,{title:"Restore","aria-label":"Restore",children:Object(T.jsx)(A.a,{onClick:n,children:Object(T.jsx)(Q.a,{fontSize:a})})}),Object(T.jsx)(v.a,{title:"Delete","aria-label":"Delete",children:Object(T.jsx)(A.a,{onClick:r,children:Object(T.jsx)(J.a,{fontSize:a})})})]}):Object(T.jsx)(v.a,{title:"move to trash","aria-label":"move to trash",children:Object(T.jsx)(A.a,{onClick:n,children:Object(T.jsx)(q.a,{fontSize:a})})})},$=function(e){var t=e.mail,a=e.location,n=C(),r=n.toggleStar,i=n.markAsRead,c=n.toggleIsTrash,o=n.deleteMail,s=Object(O.useState)(!1),l=Object(j.a)(s,2),d=l[0],u=l[1],b=C().toggleMailCheckbox,m=y((function(e){var a;return null===(a=e.mail)||void 0===a?void 0:a.checked.has(t._id)}))||!1,h=function(){i([t._id],!t.isRead)},f=function(){return t.isRead?Object(T.jsx)(v.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(T.jsx)(A.a,{onClick:h,children:Object(T.jsx)(B.a,{})})}):Object(T.jsx)(v.a,{title:"Mark as read","aria-label":"Mark as read",children:Object(T.jsx)(A.a,{onClick:h,children:Object(T.jsx)(G.a,{})})})};return Object(T.jsxs)("div",{className:Object(p.a)("emailRow",{readMark:t.isRead}),children:[Object(T.jsxs)("div",{className:"emailRow_options",children:[Object(T.jsx)(w.a,{checked:m,onClick:function(){b(t._id)}}),Object(T.jsx)(A.a,{onClick:function(){r(t._id)},children:t.isStarred?Object(T.jsx)(U.a,{fontSize:"large"}):Object(T.jsx)(H.a,{fontSize:"large"})})]}),Object(T.jsxs)(z.b,{onClick:function(){t.isRead||i([t._id],!0)},className:"clickable",to:"/mail/".concat(a,"/").concat(t._id),style:{textDecoration:"none",color:"inherit"},onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)},children:[Object(T.jsx)("div",{className:"emailRow_title",children:Object(T.jsx)("h3",{children:t.isOutbound?"To:".concat(t.to[0]):t.from})}),Object(T.jsx)("div",{className:"emailRow_message",children:Object(T.jsxs)("h4",{children:[t.subject,Object(T.jsxs)("span",{className:"emailRow_description",children:[" - "," ",t.text]})]})})]}),Object(T.jsx)("div",{onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)},children:Object(T.jsx)("div",{className:"emailRow_time",children:d?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{isTrash:t.isTrash,fontSize:"large",onClickTrash:function(){c([t._id])},onClickDelete:function(){o([t._id])}}),Object(T.jsx)(f,{})]}):Object(T.jsx)("h4",{children:W()(t.created).format("MMM Do")})})})]})},ee=function(){return y((function(e){var t,a,n,r,i,c,o,s,l,d;return"inbox"===(null===(t=e.control)||void 0===t?void 0:t.location)?null===(a=e.mail)||void 0===a?void 0:a.mail.filter((function(e){return!e.isOutbound&&!e.isTrash})).reverse():"starred"===(null===(n=e.control)||void 0===n?void 0:n.location)?null===(r=e.mail)||void 0===r?void 0:r.mail.filter((function(e){return e.isStarred&&!e.isTrash})).reverse():"sent"===(null===(i=e.control)||void 0===i?void 0:i.location)?null===(c=e.mail)||void 0===c?void 0:c.mail.filter((function(e){return e.isOutbound&&!e.isTrash})).reverse():"allmail"===(null===(o=e.control)||void 0===o?void 0:o.location)?null===(s=e.mail)||void 0===s?void 0:s.mail.filter((function(e){return!e.isTrash})).reverse():"trash"===(null===(l=e.control)||void 0===l?void 0:l.location)?null===(d=e.mail)||void 0===d?void 0:d.mail.filter((function(e){return e.isTrash})).reverse():[]}))};function te(e){var t=e.match.params.location,a=C(),n=a.setLocation,r=a.fetchAllMail,i=a.toggleAllMailCheckbox,c=a.toggleIsTrash,o=a.deleteMail,s=a.markAsRead,l=ee(),d=y((function(e){var t;return null===(t=e.mail)||void 0===t?void 0:t.checked}))||new Set;Object(O.useEffect)((function(){n(t),i(l,!0),"inbox"===t&&r()}),[n,i,r,t]);var u=function(){r()},j=function(){return Object(T.jsx)(v.a,{title:"Refresh","aria-label":"Refresh",children:Object(T.jsx)(A.a,{onClick:u,children:Object(T.jsx)(I.a,{})})})};return Object(T.jsxs)("div",{className:"emailList",children:[Object(T.jsx)("div",{className:"emailList_settings",children:Object(T.jsxs)("div",{className:"emailList_settingsLeft",children:[Object(T.jsx)(w.a,{checked:0!==d.size,onClick:function(){i(l)}}),d.size?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{isTrash:"trash"===t,onClickTrash:function(){i(l,!0),c(Array.from(d))},onClickDelete:function(){i(l,!0),o(Array.from(d))}}),Object(T.jsx)(v.a,{title:"Mark as read","aria-label":"Mark as read",children:Object(T.jsx)(A.a,{onClick:function(){s(Array.from(d),!0)},children:Object(T.jsx)(G.a,{})})}),Object(T.jsx)(v.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(T.jsx)(A.a,{onClick:function(){s(Array.from(d),!1)},children:Object(T.jsx)(B.a,{})})})]}):Object(T.jsx)(j,{})]})}),Object(T.jsx)("div",{className:"emailList_list",children:l.map((function(e){return Object(T.jsx)($,{mail:e,location:t},e._id)}))})]})}var ae=a(321),ne=a(308),re=a(311),ie=a(153),ce=a.n(ie),oe=a(154),se=a.n(oe),le=a(267),de=a(312),ue=a(313),je=a(101),Oe=a.n(je),pe=a(156),be=a.n(pe),me=a(155),he=a.n(me),fe=d(),xe=function(){var e,t,a=fe(),n=C(),r=n.openComposeMail,i=n.toggleSideBar,c=n.setLocation,s=y((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.sideBarOpen})),l=y((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.location}));return Object(T.jsx)("div",{children:Object(T.jsxs)(ae.a,{variant:"permanent",className:Object(p.a)(a.drawer,(e={},Object(o.a)(e,a.drawerOpen,s),Object(o.a)(e,a.drawerClose,!s),e)),classes:{paper:Object(p.a)((t={},Object(o.a)(t,a.drawerOpen,s),Object(o.a)(t,a.drawerClose,!s),t))},children:[Object(T.jsx)("div",{className:a.toolbar,children:Object(T.jsx)(A.a,{onClick:i,children:s?Object(T.jsx)(ce.a,{}):Object(T.jsx)(se.a,{})})}),Object(T.jsx)(re.a,{}),Object(T.jsxs)(ne.a,{children:[[["Inbox",Object(T.jsx)(Oe.a,{})],["Starred",Object(T.jsx)(U.a,{})],["Sent",Object(T.jsx)(he.a,{})],["All mail",Object(T.jsx)(be.a,{})],["trash",Object(T.jsx)(q.a,{})]].map((function(e,t){var n=e[0].toLocaleLowerCase().replaceAll(" ","");return Object(T.jsx)(z.b,{to:"/mail/"+n,style:{textDecoration:"none",color:"inherit"},children:Object(T.jsxs)(le.a,{button:!0,className:Object(p.a)(Object(o.a)({},a.loc,n===l)),onClick:function(){c(n)},children:[Object(T.jsx)(de.a,{children:e[1]}),Object(T.jsx)(ue.a,{primary:e[0]})]},e)},e)})),Object(T.jsx)(re.a,{}),Object(T.jsx)(le.a,{}),Object(T.jsxs)(le.a,{button:!0,onClick:r,children:[Object(T.jsx)(de.a,{children:Object(T.jsx)(Oe.a,{})}),Object(T.jsx)(ue.a,{primary:"compose"})]},"compose")]})]})})},ve=a(158),_e=a.n(ve),ge=a(159),Ee=a.n(ge),ye=(a(246),a(157)),Re=function(e){var t=e.match,a=C(),n=a.toggleIsTrash,r=a.deleteMail,c=a.markAsRead,o=a.setLocation,s=Object(i.g)(),l=y((function(e){var a;return null===(a=e.mail)||void 0===a?void 0:a.mail.find((function(e){return e._id===t.params.mailID}))}));return l?Object(T.jsxs)("div",{className:"mail",children:[Object(T.jsxs)("div",{className:"mail_tools",children:[Object(T.jsxs)("div",{className:"mail_toolsLeft",children:[Object(T.jsx)(A.a,{onClick:s.goBack,children:Object(T.jsx)(_e.a,{})}),Object(T.jsx)(Z,{isTrash:l.isTrash,onClickTrash:function(){l&&(n([l._id]),o("trash"),s.push("/mail/trash/".concat(l._id)))},onClickDelete:function(){l&&(r([l._id]),s.push("/mail/trash"))}}),Object(T.jsx)(v.a,{title:"Mark as unread","aria-label":"Mark as unread",children:Object(T.jsx)(A.a,{onClick:function(){l&&c([l._id],!1),s.goBack()},children:Object(T.jsx)(B.a,{})})})]}),Object(T.jsx)("div",{className:"mail_toolsRight"})]}),Object(T.jsxs)("div",{className:"mail_body",children:[Object(T.jsxs)("div",{className:"mail_bodyHeader",children:[Object(T.jsx)("h2",{children:l.subject}),Object(T.jsx)(Ee.a,{className:"mail_important"}),Object(T.jsx)("p",{children:l.from}),Object(T.jsx)("p",{className:"mail_time",children:W()(l.created).format("MM/DD/YYYY")})]}),Object(T.jsx)("div",{className:"mail_message",children:Object(ye.a)(l.html)})]})]}):Object(T.jsx)(T.Fragment,{})},Le=(a(260),a(161)),Ce=a.n(Le),Te=a(163),Se=(a(261),a(160)),Me=a.n(Se),Ae=function(){var e=Object(Te.a)(),t=e.register,a=e.handleSubmit,n=C(),r=n.closeComposeMail,i=n.sendMail,c=Object(O.useRef)("");return Object(T.jsxs)("div",{className:"sendMail",children:[Object(T.jsxs)("div",{className:"sendMail_header",children:[Object(T.jsx)("h3",{children:"New Message"}),Object(T.jsx)(Ce.a,{className:"sendMail_close",onClick:r})]}),Object(T.jsxs)("form",{onSubmit:a((function(e){e.to=[e.to],e.html=c.current,i(e),r()})),children:[Object(T.jsx)("input",{name:"to",type:"email",placeholder:"To",ref:t({required:!0})}),Object(T.jsx)("input",{name:"subject",type:"text",placeholder:"Subject",ref:t()}),Object(T.jsx)(Me.a,{config:{attribution:!1,height:300,quickInsertTags:["p","div"],listAdvancedTypes:!0},onModelChange:function(e){c.current=e}}),Object(T.jsx)("div",{className:"sendMail_options",children:Object(T.jsx)(x.a,{type:"submit",className:"sendMail_send",variant:"contained",color:"primary",children:"Send"})})]})]})},we=d(),ke=function(){var e=y((function(e){var t;return null===(t=e.control)||void 0===t?void 0:t.composeMailOpen}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{path:"/mail/:location",exact:!0,component:te}),Object(T.jsx)(i.b,{path:"/mail/:location/:mailID",component:Re}),Object(T.jsx)(i.b,{path:"/",children:Object(T.jsx)(i.a,{to:"/mail/inbox"})})]}),e&&Object(T.jsx)(Ae,{})]})},Ie=function(){var e=we();return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(u.a,{}),Object(T.jsx)(M,{}),Object(T.jsx)(xe,{}),Object(T.jsxs)("main",{className:e.content,children:[Object(T.jsx)("div",{className:e.toolbar}),Object(T.jsx)(ke,{})]})]})},Ne=a(9),Ge=a.n(Ne),De=a(15),Be=a(317),Pe=a(316),He=a(318),Fe=a(315),Ue=a(62),Xe=function(){return Object(T.jsx)("img",{src:"/rabany mail-logo.jpg",alt:"Rabany mail logo",width:"150",height:"150"})};function We(){return Object(T.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(z.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Rabany Mail"})," ",(new Date).getFullYear(),"."]})}var ze=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Ke(){var e=ze(),t=Object(i.g)(),a=Object(O.useState)(""),n=Object(j.a)(a,2),r=n[0],c=n[1],o=Object(O.useState)(""),s=Object(j.a)(o,2),l=s[0],d=s[1],p=Object(O.useState)(""),b=Object(j.a)(p,2),m=b[0],f=b[1],v=Object(O.useState)(void 0),_=Object(j.a)(v,2),g=_[0],E=_[1],y=Object(O.useState)(void 0),R=Object(j.a)(y,2),L=R[0],C=R[1],S=Object(O.useState)(void 0),M=Object(j.a)(S,2),A=M[0],w=M[1],k=function(){var e=Object(De.a)(Ge.a.mark((function e(a){var n,i,o,s;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c((function(e){return e.trim()})),e.next=4,Object(Ue.d)(r.trim(),l,m);case 4:n=e.sent.data,console.log(n),n.length?(E(null===(i=n.find((function(e){return"username"===e.param})))||void 0===i?void 0:i.msg),C(null===(o=n.find((function(e){return"password"===e.param})))||void 0===o?void 0:o.msg),w(null===(s=n.find((function(e){return"passwordConfirm"===e.param})))||void 0===s?void 0:s.msg)):t.push("/login");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(Fe.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(u.a,{}),Object(T.jsxs)("div",{className:e.paper,children:[Object(T.jsx)(Xe,{}),Object(T.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:k,children:[Object(T.jsxs)(Pe.a,{container:!0,spacing:2,children:[Object(T.jsx)(Pe.a,{item:!0,xs:12,children:Object(T.jsx)(Be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",onChange:function(e){return c(e.target.value)},value:r,helperText:g,error:!!g})}),Object(T.jsx)(Pe.a,{item:!0,xs:12,children:Object(T.jsx)(Be.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return d(e.target.value)},value:l,helperText:L,error:!!L})}),Object(T.jsx)(Pe.a,{item:!0,xs:12,children:Object(T.jsx)(Be.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password-confirm",label:"password confirm",type:"password",id:"password-confirm",autoComplete:"current-password",onChange:function(e){return f(e.target.value)},value:m,helperText:A,error:!!A})})]}),Object(T.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(T.jsx)(Pe.a,{container:!0,justify:"flex-start",children:Object(T.jsx)(Pe.a,{item:!0,children:Object(T.jsx)(z.b,{to:"/login",style:{textDecoration:"none",color:"inherit"},children:"Already have an account? Sign in"})})})]})]}),Object(T.jsx)(He.a,{mt:5,children:Object(T.jsx)(We,{})})]})}var qe=a(162),Ye=a.n(qe);function Je(){return Object(T.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(z.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Rabany Mail"})," ",(new Date).getFullYear(),"."]})}var Ve=Object(s.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},alert:{marginBottom:0,marginRight:10,marginTop:20,minHeight:0,position:"relative",display:"flex",padding:"9px 12px 9px 20px",borderWidth:"1px 1px 1px 0px",borderStyle:"solid",borderRadius:6,fontSize:14,lineHeight:3,color:"rgb(143, 34, 27)",borderColor:"rgb(249, 211, 197) rgb(249, 211, 197) rgb(249, 211, 197) rgb(207, 74, 34)",backgroundColor:"rgb(252, 235, 226)"},alertText:{alignSelf:"center",mozBoxFlex:1,flexGrow:1,marginLeft:15,marginRight:10,color:"rgb(207, 74, 34)"}}})),Qe=function(){var e=Ve(),t=C().login,a=y((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.fail})),n=Object(O.useState)(""),r=Object(j.a)(n,2),i=r[0],c=r[1],o=Object(O.useState)(""),s=Object(j.a)(o,2),l=s[0],d=s[1];return Object(T.jsxs)(Fe.a,{component:"main",maxWidth:"xs",children:[Object(T.jsx)(u.a,{}),Object(T.jsxs)("div",{className:e.paper,children:[Object(T.jsx)(Xe,{}),Object(T.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),a&&Object(T.jsxs)("div",{role:"alert",className:e.alert,"data-testid":"bannerAuthCodeError",children:[Object(T.jsx)(Ye.a,{style:{marginTop:8}}),Object(T.jsx)("span",{className:e.alertText,children:"Please provide a valid username and password."})]}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(i,l)},children:[Object(T.jsx)(Be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoFocus:!0,value:i,error:a,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(Be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,error:a,onChange:function(e){return d(e.target.value)}}),Object(T.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(T.jsx)(Pe.a,{container:!0,children:Object(T.jsx)(Pe.a,{item:!0,children:Object(T.jsx)(z.b,{to:"/signup",style:{textDecoration:"none",color:"inherit"},children:"Don't have an account? Sign Up"})})})]})]}),Object(T.jsx)(He.a,{mt:8,children:Object(T.jsx)(Je,{})})]})},Ze=function(){var e=C(),t=e.getUser,a=e.fetchAllMail,n=y((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.username}));return Object(O.useEffect)((function(){n?a():t()}),[n,t,a]),void 0===n?Object(T.jsx)(T.Fragment,{}):n?Object(T.jsx)(Ie,{}):Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{path:"/login",component:Qe}),Object(T.jsx)(i.b,{path:"/signup",component:Ke}),Object(T.jsx)(i.b,{path:"/",children:Object(T.jsx)(i.a,{to:"/login"})})]})})},$e=function(){return Object(T.jsx)(E.a,{store:L.store,children:Object(T.jsx)(z.a,{children:Object(T.jsx)(Ze,{})})})};r.a.render(Object(T.jsx)($e,{}),document.querySelector("#root"))},6:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.TOGGLE_SIDEBAR="toggle_sideBar",e.OPEN_COMPOSE_MAIL="open_compose_mail",e.CLOSE_COMPOSE_MAIL="close_compose_mail",e.LOGIN="login",e.LOGIN_SUCCESS="login_success",e.LOGIN_FAIL="login_fail",e.LOGIN_ERROR="login_error",e.GET_USER="get_user",e.GET_USER_COMPLETE="get_user_complete",e.GET_USER_ERROR="get_user_error",e.LOGOUT="logout",e.LOGOUT_COMPLETE="logout_complete",e.LOGOUT_ERROR="logout_error",e.FETCH_ALL_MAIL="fetch_inbox",e.FETCH_ALL_MAIL_COMPLETE="fetch_all_mail_complete",e.FETCH_ALL_MAIL_ERROR="fetch_inbox_error",e.FETCH_INBOX="fetch_inbox",e.FETCH_INBOX_COMPLETE="fetch_inbox_complete",e.FETCH_INBOX_ERROR="fetch_inbox_error",e.TOGGLE_STAR="toggle_star",e.TOGGLE_STAR_ERROR="toggle_star_error",e.SEND_MAIL="send_mail",e.SEND_MAIL_COMPLETE="send_mail_complete",e.SEND_MAIL_ERROR="send_mail_error",e.SET_LOCATION="set_location",e.MARK_AS_READ="mark_as_read",e.MARK_AS_READ_ERROR="mark_as_read_error",e.TOGGLE_IS_TRASH="toggle_is_trash",e.TOGGLE_IS_TRASH_ERROR="toggle_is_trash_error",e.DELETE_MAIL="delete_mail",e.DELETE_MAIL_ERROR="delete_mail_error",e.TOGGLE_MALI_CHECKBOX="toggle_mail_checkbox",e.TOGGLE_ALL_MALI_CHECKBOX="toggle_all_mail_checkbox"}(n||(n={}))},62:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return l}));var n=a(31),r=a.n(n),i="https://rabany-mail.herokuapp.com",c=function(e,t){return r()({method:"POST",data:{username:e,password:t},withCredentials:!0,url:i+"/login"})},o=function(){return r()({method:"GET",withCredentials:!0,url:i+"/logout"})},s=function(){return r()({method:"GET",withCredentials:!0,url:i+"/user"})},l=function(e,t,a){return r()({method:"POST",data:{username:e,password:t,passwordConfirm:a},withCredentials:!0,url:i+"/register"})}},77:function(e,t,a){"use strict";var n=a(44),r=a(53),i=a(6),c={loading:!0,fail:!1,error:null,username:void 0,firstChar:""},o=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.LOGIN:return void(e.loading=!0);case i.a.LOGIN_SUCCESS:return e.loading=!1,e.fail=!1,e.username=t.payload.username,void(e.firstChar=t.payload.firstChar);case i.a.LOGIN_FAIL:return e.loading=!1,void(e.fail=!0);case i.a.LOGIN_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.GET_USER:return void(e.loading=!0);case i.a.GET_USER_COMPLETE:return e.loading=!1,e.fail=!1,e.username=t.payload.username,void(e.firstChar=t.payload.firstChar);case i.a.GET_USER_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.LOGOUT:return void(e.loading=!0);case i.a.LOGOUT_COMPLETE:return e.loading=!1,e.username="",void(e.firstChar="");case i.a.LOGOUT_ERROR:return e.loading=!1,void(e.error=t.payload);default:return e}})),s=a(28),l=a(45);Object(r.b)();var d={loading:!1,sending:!1,error:null,mail:[],checked:new Set},u=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.FETCH_INBOX:return void(e.loading=!0);case i.a.FETCH_INBOX_COMPLETE:return void(e.loading=!1);case i.a.FETCH_INBOX_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.FETCH_ALL_MAIL:return void(e.loading=!0);case i.a.FETCH_ALL_MAIL_COMPLETE:return e.loading=!1,void(e.mail=t.payload);case i.a.FETCH_ALL_MAIL_ERROR:return e.loading=!1,void(e.error=t.payload);case i.a.TOGGLE_STAR:var a=t.payload,n=e.mail.findIndex((function(e){return e._id===a})),r=!e.mail[n].isStarred;return void(e.mail[n]=Object(l.a)(Object(l.a)({},e.mail[n]),{},{isStarred:r}));case i.a.TOGGLE_STAR_ERROR:return void(e.error=t.payload);case i.a.MARK_AS_READ:var c,o=t.payload,u=o.mailId,j=o.isRead,O=Object(s.a)(u);try{var p=function(){var t=c.value,a=e.mail.findIndex((function(e){return e._id===t}));e.mail[a]=Object(l.a)(Object(l.a)({},e.mail[a]),{},{isRead:j})};for(O.s();!(c=O.n()).done;)p()}catch(y){O.e(y)}finally{O.f()}return;case i.a.SEND_MAIL:return void(e.sending=!0);case i.a.SEND_MAIL_COMPLETE:return e.sending=!1,void e.mail.push(t.payload);case i.a.SEND_MAIL_ERROR:return e.sending=!1,void(e.error=t.payload);case i.a.MARK_AS_READ_ERROR:return void(e.error=t.payload);case i.a.TOGGLE_IS_TRASH:var b,m=t.payload,h=Object(s.a)(m);try{var f=function(){var t=b.value,a=e.mail.findIndex((function(e){return e._id===t})),n=!e.mail[a].isTrash;e.mail[a]=Object(l.a)(Object(l.a)({},e.mail[a]),{},{isTrash:n})};for(h.s();!(b=h.n()).done;)f()}catch(y){h.e(y)}finally{h.f()}return;case i.a.TOGGLE_IS_TRASH_ERROR:return void(e.error=t.payload);case i.a.DELETE_MAIL:var x,v=t.payload,_=[],g=Object(s.a)(e.mail);try{for(g.s();!(x=g.n()).done;){var E=x.value;v.includes(E._id)||_.push(E)}}catch(y){g.e(y)}finally{g.f()}return void(e.mail=_);case i.a.DELETE_MAIL_ERROR:return void(e.error=t.payload);case i.a.TOGGLE_ALL_MALI_CHECKBOX:return void(e.checked.size||t.payload.reset?e.checked=new Set:e.checked=new Set(t.payload.mailList.map((function(e){return e._id}))));case i.a.TOGGLE_MALI_CHECKBOX:return void(e.checked.has(t.payload)?e.checked.delete(t.payload):e.checked.add(t.payload));default:return e}})),j={sideBarOpen:!0,composeMailOpen:!1,location:""},O=Object(r.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a.SET_LOCATION:return void(e.location=t.payload);case i.a.TOGGLE_SIDEBAR:return void(e.sideBarOpen=!e.sideBarOpen);case i.a.OPEN_COMPOSE_MAIL:return void(e.composeMailOpen=!0);case i.a.CLOSE_COMPOSE_MAIL:return void(e.composeMailOpen=!1);default:return e}})),p=Object(n.c)({user:o,mail:u,control:O});t.a=p},81:function(e,t,a){"use strict";var n=a(111);a.d(t,"store",(function(){return n.a}));a(77),a(112);var r=a(140);a.d(t,"actionCreators",(function(){return r}))}},[[263,1,2]]]);
//# sourceMappingURL=main.156c029f.chunk.js.map
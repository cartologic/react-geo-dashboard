(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(e,n,t){e.exports=t(261)},241:function(e,n,t){},249:function(e,n,t){},261:function(e,n,t){"use strict";t.r(n);t(162),t(191),t(192),t(220),t(224),t(226);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=t(0),o=t.n(a),r=t(100),i=t.n(r),c=(t(241),t(243),t(245),t(95)),l=t(96),d=t(98),u=t(97),s=t(99),m=t(310),b=t(312),h=t(298),p=t(37),f=t.n(p),w=(t(249),function(){return o.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")}),g=f()({loader:function(){return Promise.all([t.e(0),t.e(14),t.e(2)]).then(t.bind(null,309))},loading:w}),v=f()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,299))},loading:w}),O=f()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,300))},loading:w}),E=f()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,301))},loading:w}),D=f()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,302))},loading:w}),j=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(b.a,null,o.a.createElement(h.a,{exact:!0,path:"/login",name:"Login Page",component:v}),o.a.createElement(h.a,{exact:!0,path:"/register",name:"Register Page",component:O}),o.a.createElement(h.a,{exact:!0,path:"/404",name:"Page 404",component:E}),o.a.createElement(h.a,{exact:!0,path:"/500",name:"Page 500",component:D}),o.a.createElement(h.a,{path:"/",name:"Base",component:g})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(157),A=t(30),y=t(159),P=t(64),S=t(63),x=t(258),B={newDashboardModalOpen:!1,dashboardList:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S.a:return function(e,n){var t=e,a=t.dashboardList,o=new Date;return a.push({title:n.newDashboardTitle,id:x(),date_created:o}),localStorage.setItem("dashboardList",JSON.stringify(a)),t={newDashboardModalOpen:!1,dashboardList:a},Object(P.a)({},e,t)}(e,n);case S.c:return function(e,n){var t={newDashboardModalOpen:!e.newDashboardModalOpen};return Object(P.a)({},e,t)}(e);case S.b:return function(e,n){var t=e,a=localStorage.getItem("dashboardList");return a&&(t={dashboardList:JSON.parse(a)}),Object(P.a)({},e,t)}(e);default:return e}},R=A.d,k=Object(A.c)({dashboardsReducer:C}),M=Object(A.e)(k,R(Object(A.a)(y.a))),I=o.a.createElement(L.a,{store:M},o.a.createElement(j,null));i.a.render(I,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"b",function(){return r});var a="CREATE_DASHBOARD",o="TOGGLENEWDASHBOARDMODAL",r="LOADSAVEDDASHBOARDS"}},[[161,17,13]]]);
//# sourceMappingURL=main.f6673ff1.chunk.js.map
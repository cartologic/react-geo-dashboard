(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(e,n,t){e.exports=t(265)},245:function(e,n,t){},253:function(e,n,t){},265:function(e,n,t){"use strict";t.r(n);t(166),t(195),t(196),t(224),t(228),t(230);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=t(0),r=t.n(a),o=t(101),i=t.n(o),d=(t(245),t(247),t(249),t(96)),c=t(97),l=t(99),s=t(98),u=t(100),b=t(314),h=t(316),m=t(302),f=t(39),p=t.n(f),O=(t(253),function(){return r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")}),E=p()({loader:function(){return Promise.all([t.e(0),t.e(14),t.e(2)]).then(t.bind(null,313))},loading:O}),g=p()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,303))},loading:O}),v=p()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,304))},loading:O}),D=p()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,305))},loading:O}),w=p()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,306))},loading:O}),L=function(e){function n(){return Object(d.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement(m.a,{exact:!0,path:"/login",name:"Login Page",component:g}),r.a.createElement(m.a,{exact:!0,path:"/register",name:"Register Page",component:v}),r.a.createElement(m.a,{exact:!0,path:"/404",name:"Page 404",component:D}),r.a.createElement(m.a,{exact:!0,path:"/500",name:"Page 500",component:w}),r.a.createElement(m.a,{path:"/",name:"Base",component:E})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(161),j=t(30),S=t(163),y=t(40),M=t(38),P=t(262),B={newDashboardModalOpen:!1,dashboardList:[],deleteDashboardModalOpen:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M.b:return function(e,n){var t=e,a=t.dashboardList,r=new Date;return a.push({title:n.newDashboardTitle,id:P(),date_created:r}),localStorage.setItem("dashboardList",JSON.stringify(a)),t={newDashboardModalOpen:!1,dashboardList:a},Object(y.a)({},e,t)}(e,n);case M.e:return function(e,n){var t={newDashboardModalOpen:!e.newDashboardModalOpen};return Object(y.a)({},e,t)}(e);case M.d:return function(e,n){var t=e,a=localStorage.getItem("dashboardList");return a&&(t={dashboardList:JSON.parse(a)}),Object(y.a)({},e,t)}(e);case M.c:return function(e,n){var t={deleteDashboardModalOpen:!e.deleteDashboardModalOpen};return Object(y.a)({},e,t)}(e);case M.a:return function(e,n){for(var t=e,a=0;a<e.dashboardList.length;a++)if(e.dashboardList[a].id===n.dashboardID){var r=e.dashboardList;r.splice(a,1),localStorage.setItem("dashboardList",JSON.stringify(r)),t={deleteDashboardModalOpen:!1,dashboardList:r};break}return Object(y.a)({},e,t)}(e,n);default:return e}},C=j.d,I=Object(j.c)({dashboardsReducer:R}),N=Object(j.e)(I,C(Object(j.a)(S.a))),k=r.a.createElement(A.a,{store:N},r.a.createElement(L,null));i.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"e",function(){return r}),t.d(n,"d",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return d});var a="CREATE_DASHBOARD",r="TOGGLENEWDASHBOARDMODAL",o="LOADSAVEDDASHBOARDS",i="DELETEDASHBOARD",d="CONTINUEDELETEDASHBOARD"}},[[165,17,13]]]);
//# sourceMappingURL=main.1c16f56b.chunk.js.map
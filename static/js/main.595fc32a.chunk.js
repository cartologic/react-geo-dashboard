(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(e,n,t){e.exports=t(264)},244:function(e,n,t){},252:function(e,n,t){},264:function(e,n,t){"use strict";t.r(n);t(165),t(194),t(195),t(223),t(227),t(229);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=t(0),r=t.n(a),o=t(102),i=t.n(o),d=(t(244),t(246),t(248),t(97)),c=t(98),l=t(100),s=t(99),u=t(101),b=t(313),h=t(315),m=t(301),f=t(39),p=t.n(f),O=(t(252),function(){return r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")}),E=p()({loader:function(){return Promise.all([t.e(0),t.e(14),t.e(2)]).then(t.bind(null,312))},loading:O}),g=p()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,302))},loading:O}),v=p()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,303))},loading:O}),D=p()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,304))},loading:O}),w=p()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,305))},loading:O}),L=function(e){function n(){return Object(d.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement(m.a,{exact:!0,path:"/login",name:"Login Page",component:g}),r.a.createElement(m.a,{exact:!0,path:"/register",name:"Register Page",component:v}),r.a.createElement(m.a,{exact:!0,path:"/404",name:"Page 404",component:D}),r.a.createElement(m.a,{exact:!0,path:"/500",name:"Page 500",component:w}),r.a.createElement(m.a,{path:"/",name:"Base",component:E})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=t(160),j=t(30),S=t(162),y=t(40),M=t(38),P=t(261),B={newDashboardModalOpen:!1,dashboardList:[],deleteDashboardModalOpen:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M.b:return function(e,n){var t=e,a=t.dashboardList,r=new Date;return a.push({title:n.newDashboardTitle,id:P(),date_created:r}),localStorage.setItem("dashboardList",JSON.stringify(a)),t={newDashboardModalOpen:!1,dashboardList:a},Object(y.a)({},e,t)}(e,n);case M.e:return function(e,n){var t={newDashboardModalOpen:!e.newDashboardModalOpen};return Object(y.a)({},e,t)}(e);case M.d:return function(e,n){var t=e,a=localStorage.getItem("dashboardList");return a&&(t={dashboardList:JSON.parse(a)}),Object(y.a)({},e,t)}(e);case M.c:return function(e,n){var t={deleteDashboardModalOpen:!e.deleteDashboardModalOpen};return Object(y.a)({},e,t)}(e);case M.a:return function(e,n){for(var t=e,a=0;a<e.dashboardList.length;a++)if(e.dashboardList[a].id===n.dashboardID){var r=e.dashboardList;r.splice(a,1),localStorage.setItem("dashboardList",JSON.stringify(r)),t={deleteDashboardModalOpen:!1,dashboardList:r};break}return Object(y.a)({},e,t)}(e,n);default:return e}},C=j.d,I=Object(j.c)({dashboardsReducer:R}),N=Object(j.e)(I,C(Object(j.a)(S.a))),k=r.a.createElement(A.a,{store:N},r.a.createElement(L,null));i.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"e",function(){return r}),t.d(n,"d",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return d});var a="CREATE_DASHBOARD",r="TOGGLENEWDASHBOARDMODAL",o="LOADSAVEDDASHBOARDS",i="DELETEDASHBOARD",d="CONTINUEDELETEDASHBOARD"}},[[164,17,13]]]);
//# sourceMappingURL=main.595fc32a.chunk.js.map
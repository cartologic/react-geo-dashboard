(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(e,t,a){e.exports=a.p+"static/media/default-dashboard.c772de00.png"},323:function(e,t,a){"use strict";a.r(t);var o=a(94),n=a(95),r=a(97),l=a(96),s=a(98),d=a(0),c=a.n(d),i=a(187),h=a(31),u=function(e){return{type:h.a,newDashboardTitle:e}},m=function(e){return{type:h.b,dashboardID:e}},b=function(){return{type:h.c}},p=a(102),g=a(101),f=a(302),D=a.n(f),E=a(303),O=a.n(E),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).setDashboardTitle=function(e){a.setState({newTitle:e.target.value})},a.saveDashboard=function(){var e={date_created:a.state.date_created,id:a.state.id,title:a.state.newTitle};a.props.onSaveDashboard(e)},a.toggleDeleteModal=a.toggleDeleteModal.bind(Object(g.a)(Object(g.a)(a))),a.toggleConfigureModal=a.toggleConfigureModal.bind(Object(g.a)(Object(g.a)(a))),a.state={title:a.props.dashboardObject.title,newTitle:a.props.dashboardObject.title,id:a.props.dashboardObject.id,date_created:a.props.dashboardObject.date_created,deleteModalOpen:!1,configureModalOpen:!1},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"toggleDeleteModal",value:function(){this.setState({deleteModalOpen:!this.state.deleteModalOpen})}},{key:"toggleConfigureModal",value:function(){this.setState({configureModalOpen:!this.state.configureModalOpen})}},{key:"render",value:function(){var e=this;return c.a.createElement(i.i,{xs:"12",sm:"3",md:"4",key:this.state.id,id:this.state.id},c.a.createElement(i.s,{isOpen:this.state.deleteModalOpen,toggle:this.toggleDeleteModal,className:"modal-danger"},c.a.createElement(i.v,{toggle:this.toggleDeleteModal},"Delete Dashboard ",this.state.title," ?"),c.a.createElement(i.t,null,"This action can not be undone!"),c.a.createElement(i.u,null,c.a.createElement(i.b,{onClick:function(t){e.toggleDeleteModal(),e.props.onDeleteDashboard(e.state.id)},color:"danger"},"Delete")," ",c.a.createElement(i.b,{color:"secondary",onClick:this.toggleDeleteModal},"Cancel"))),c.a.createElement(i.s,{isOpen:this.state.configureModalOpen,className:"modal-primary"},c.a.createElement(i.v,{toggle:this.toggleConfigureModal},"Configure Dashboard"),c.a.createElement(i.t,null,c.a.createElement(i.l,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(i.m,{row:!0},c.a.createElement(i.i,{md:"2"},c.a.createElement(i.r,{htmlFor:"dashboard-title"},"Title")),c.a.createElement(i.i,{xs:"12",md:"10"},c.a.createElement(i.n,{value:this.state.newTitle,onChange:this.setDashboardTitle,type:"text",id:"dashboard-title",name:"dashboard-title",placeholder:"Please enter title for dashboard"}))))),c.a.createElement(i.u,null,c.a.createElement(i.b,{onClick:function(t){e.toggleConfigureModal(),e.saveDashboard()},color:"primary"},"Save")," ",c.a.createElement(i.b,{color:"secondary",onClick:this.toggleConfigureModal},"Cancel"))),c.a.createElement(i.d,null,c.a.createElement(i.h,null,c.a.createElement("a",{href:"#/dashboards/"+this.state.id},this.state.title),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("button",{onClick:this.toggleConfigureModal,className:"card-header-action btn btn-setting"},c.a.createElement("i",{className:"icon-settings"})),c.a.createElement("button",{onClick:this.toggleDeleteModal,className:"card-header-action btn btn-close"},c.a.createElement("i",{className:"icon-close"})))),c.a.createElement(i.e,null,c.a.createElement("img",{className:"card-img-bottom",src:D.a,alt:"Default Dashboard"})),c.a.createElement(i.f,null,"Created - ",c.a.createElement(O.a,{interval:0,format:"DD MMM YYYY - hh:mm a",date:this.state.date_created}))))}}]),t}(d.Component),C=Object(p.b)(null,function(e){return{onSaveDashboard:function(t){return e(function(e){return{type:h.e,dashboardObject:e}}(t))}}})(M),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).setNewDashboardTitle=function(e){a.setState({newDashboardTitle:e.target.value})},a.state={newDashboardTitle:""},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.loadSavedDashboards()}},{key:"render",value:function(){var e=this,t=this.props.dashboardList.map(function(t,a){return c.a.createElement(C,{key:t.id,dashboardObject:t,onDeleteDashboard:e.props.onDeleteDashboard})});return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(i.a,{color:this.props.alertColor,isOpen:this.props.alertOpen,toggle:this.props.alertDismiss},this.props.alertMessage),c.a.createElement(i.x,null,c.a.createElement(i.i,null,c.a.createElement(i.c,{className:"mr-2"},c.a.createElement(i.b,{color:"primary",onClick:this.props.onToggleNewDashboardModal},"New Dashboard"),c.a.createElement(i.s,{isOpen:this.props.newDashboardModalOpen,toggle:this.props.onToggleNewDashboardModal,className:"modal-primary"},c.a.createElement(i.v,{toggle:this.props.onToggleNewDashboardModal},"Create Dashboard"),c.a.createElement(i.t,null,c.a.createElement(i.l,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(i.m,{row:!0},c.a.createElement(i.i,{md:"2"},c.a.createElement(i.r,{htmlFor:"dashboard-title"},"Title")),c.a.createElement(i.i,{xs:"12",md:"10"},c.a.createElement(i.n,{onChange:this.setNewDashboardTitle,type:"text",id:"dashboard-title",name:"dashboard-title",placeholder:"Please enter title for dashboard"}))))),c.a.createElement(i.u,null,c.a.createElement(i.b,{disabled:!this.state.newDashboardTitle,color:"primary",onClick:function(){return e.props.onDashboardCreate(e.state.newDashboardTitle)}},"Create")," ",c.a.createElement(i.b,{color:"secondary",onClick:this.props.onToggleNewDashboardModal},"Cancel")))),c.a.createElement(i.c,{className:"mr-2"},c.a.createElement(i.b,{disabled:!0,color:"success"},"Import")))),c.a.createElement(i.x,{className:"top-buffer"},t))}}]),t}(d.Component);t.default=Object(p.b)(function(e){return{newDashboardModalOpen:e.dashboardsReducer.newDashboardModalOpen,dashboardList:e.dashboardsReducer.dashboardList,alertOpen:e.dashboardsReducer.alertOpen,alertMessage:e.dashboardsReducer.alertMessage,alertColor:e.dashboardsReducer.alertColor}},function(e){return{onDashboardCreate:function(t){return e(function(e){return function(t){t(u(e)),setTimeout(function(){t(b())},5e3)}}(t))},onToggleNewDashboardModal:function(){return e({type:h.f})},loadSavedDashboards:function(){return e({type:h.d})},onDeleteDashboard:function(t){return e(function(e){return function(t){t(m(e)),setTimeout(function(){t(b())},5e3)}}(t))},alertDismiss:function(){return e(b())}}})(w)}}]);
//# sourceMappingURL=10.e77c28b5.chunk.js.map
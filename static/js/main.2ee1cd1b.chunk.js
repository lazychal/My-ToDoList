(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){},3:function(t,e,a){t.exports={container:"newStyle_container__2utr1",deleteTodoList:"newStyle_deleteTodoList__3Zgfj",circle:"newStyle_circle__ILh7r",taskContainer:"newStyle_taskContainer__2gavm",task:"newStyle_task__2XEZQ",taskValue:"newStyle_taskValue__GnFCN",taskChecked:"newStyle_taskChecked__17crZ",FA:"newStyle_FA__1-tn9",check:"newStyle_check__2cKxS",delete:"newStyle_delete__1ZKUa",taskA:"newStyle_taskA__27EZS",title:"newStyle_title__26W7e",addSection:"newStyle_addSection__3y3Sp",taskInput:"newStyle_taskInput__13g6f",add:"newStyle_add__28hGz",MainAddNewItemForm:"newStyle_MainAddNewItemForm__PgTFM",list:"newStyle_list__3n9Uw"}},37:function(t,e,a){t.exports=a(66)},42:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),s=(a(42),a(5)),c=a(16),l=a(7),d=a(6),u=(a(10),a(3)),p=a.n(u),f=a(13),T=a(17),k=a(33),m=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).onIsDoneChanged=function(){var e=2===t.props.task.status?0:2;t.props.changeStatus(t.props.task.id,e)},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.state={editMode:!1,title:t.props.task.title,isChecked:!1},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.changeTitle(t.props.task.id,t.state.title)},t.onDeleteTask=function(){t.props.deleteTask(t.props.task.id)},t.onIsChecked=function(){t.setState({isChecked:!0})},t.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p.a.task+" "+p.a.taskA},o.a.createElement("span",{className:t.props.task.status?p.a.taskChecked:p.a.taskValue},t.state.editMode?o.a.createElement("input",{onBlur:t.deactivateEditMode,onChange:t.onTitleChanged,autoFocus:!0,value:t.state.title}):o.a.createElement("span",{onClick:t.activateEditMode},t.props.task.title)),o.a.createElement("span",{className:p.a.FA},o.a.createElement(f.a,{icon:T.a,className:p.a.check,onClick:t.onIsDoneChanged}),o.a.createElement(f.a,{icon:k.a,className:p.a.delete,onClick:t.onDeleteTask}))))},t}return a}(o.a.Component),h=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(){var e=t.props.tasks.map(function(e){return o.a.createElement(m,{task:e,changeStatus:t.props.changeStatus,changeTitle:t.props.changeTitle,deleteTask:t.props.deleteTask})});return o.a.createElement("div",{className:p.a.list},o.a.createElement("div",{className:p.a.taskContainer},e))},t}return a}(o.a.Component),v=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).onAllFilterClick=function(){t.props.changeFilter("All")},t.onCompletedFilterClick=function(){t.props.changeFilter("Completed")},t.onActiveFilterClick=function(){t.props.changeFilter("Active")},t.render=function(){var e="All"===t.props.filterValue?"filter-active":"",a="Completed"===t.props.filterValue?"filter-active":"",n="Active"===t.props.filterValue?"filter-active":"";return o.a.createElement("div",{className:"todoList-footer"},o.a.createElement("i",{onClick:t.onAllFilterClick,id:"all",className:e},"All"),o.a.createElement("i",{onClick:t.onCompletedFilterClick,className:a},"Completed"),o.a.createElement("i",{onClick:t.onActiveFilterClick,id:"active",className:n},"Active"))},t}return a}(o.a.Component),O=a(1),b=a(34),j=a.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists",withCredentials:!0,headers:{"API-KEY":"08777951-79e8-4107-8dc3-392484b36531"}}),S={getTodolists:function(){return j.get("")},updateTask:function(t,e){return j.put("/tasks",Object(O.a)(Object(O.a)({},t),e))},createTodolist:function(t){return j.post("",{title:t})},deleteTodolist:function(t){return j.delete(""+t)},getTasks:function(t){return j.get("/".concat(t,"/tasks"))},createTask:function(t,e){return j.post("/".concat(e,"/tasks"),{title:t})},deleteTask:function(t,e){return j.delete("/tasks/".concat(t))},updateTodoList:function(t,e){return j.put("/".concat(t),{title:e})}},g=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={editMode:!1,title:t.props.title},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.changeTodolistTitle(t.props.todolistId,t.state.title)},t.activateEditMode=function(){t.setState({editMode:!0})},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.changeTodolistTitle=function(e,a){S.updateTodoList(e,a).then(function(n){t.props.updateTodoList(e,a)})},t.render=function(){return o.a.createElement("div",{className:p.a.title},o.a.createElement("h3",{className:"todoList-header__title"},t.state.editMode?o.a.createElement("input",{onBlur:t.deactivateEditMode,onChange:t.onTitleChanged,autoFocus:!0,value:t.state.title}):o.a.createElement("span",{onClick:t.activateEditMode},t.props.title)))},t}return a}(o.a.Component),E=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={error:!1,title:""},t.onAddItemClick=function(){var e=t.state.title;t.setState({title:""}),""===e?t.setState({error:!0}):(t.setState({error:!1}),t.props.addItem(e))},t.onTitleChanged=function(e){t.setState({error:!1,title:e.currentTarget.value})},t.onKeyPress=function(e){"Enter"===e.key&&t.onAddItemClick()},t.render=function(){return o.a.createElement("div",{className:p.a.addSection},o.a.createElement("input",{className:p.a.taskInput,type:"text",placeholder:"New item name",onChange:t.onTitleChanged,onKeyPress:t.onKeyPress,value:t.state.title}),o.a.createElement("button",{className:p.a.add,onClick:t.onAddItemClick},"Add"))},t}return a}(o.a.Component),w=a(11),y=a(4),_=a.n(y),C=a(9),A=a(22),L="TodoList/Reducer/ADD-TASK",I={todolists:[]},N=function(t,e,a,n){return{type:"TodoList/Reducer/UPDATE-TASK",taskId:t,obj:e,todolistId:a}},D=function(t){return{type:"TodoList/Reducer/DELETE-TODOLIST",todolistId:t}},F=function(t,e){return{type:"TodoList/Reducer/DELETE-TASK",todolistId:e,taskId:t}},M=function(t,e){return{type:L,newTask:t,todolistId:e}},R=function(t,e){return{type:"TodoList/Reducer/SET_TASKS",tasks:t,todolistId:e}},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/SET_TASKS":return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:Object(O.a)(Object(O.a)({},t),{},{tasks:e.tasks})})});case"TodoList/Reducer/SET_TODOLISTS":return Object(O.a)(Object(O.a)({},t),{},{todolists:e.todolists.map(function(t){return Object(O.a)(Object(O.a)({},t),{},{tasks:[]})})});case"TodoList/Reducer/ADD-TODOLIST":return Object(O.a)(Object(O.a)({},t),{},{todolists:[].concat(Object(A.a)(t.todolists),[e.newTodolist])});case"TodoList/Reducer/DELETE-TODOLIST":return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case"TodoList/Reducer/DELETE-TASK":return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(O.a)(Object(O.a)({},t),{},{tasks:t.tasks.filter(function(t){return t.id!==e.taskId})}):t})});case L:return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id===e.todolistId&&t.tasks?Object(O.a)(Object(O.a)({},t),{},{tasks:[].concat(Object(A.a)(t.tasks),[e.newTask])}):t})});case"TodoList/Reducer/UPDATE-TASK":return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(O.a)(Object(O.a)({},t),{},{tasks:t.tasks.map(function(t){return t.id!==e.taskId?t:Object(O.a)(Object(O.a)({},t),e.obj)})}):t})});case"TodoList/Reducer/UPDATE_TODOLIST":return Object(O.a)(Object(O.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(O.a)(Object(O.a)({},t),{},{title:e.title}):t})})}return console.log("reducer: ",e),t},V=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).saveState=function(){var e=JSON.stringify(t.state);localStorage.setItem("our-state-"+t.props.id,e)},t.restoreState=function(){t.props.getTasksT(t.props.id)},t.state={filterValue:"All"},t.addTask=function(e){t.props.addNewTask(e,t.props.id)},t.changeFilter=function(e){t.setState({filterValue:e},function(){t.saveState()})},t.changeTask=function(e,a){var n=t.props.tasks;t.props.changeTaskNow(e,a,t.props.id,n)},t.changeStatus=function(e,a){t.changeTask(e,{status:a})},t.changeTitle=function(e,a){t.changeTask(e,{title:a})},t.deleteTodolist=function(){t.props.deleteTL(t.props.id)},t.deleteTask=function(e){t.props.deleteTaskNow(e,t.props.id)},t.render=function(){var e=t.props.tasks,a=void 0===e?[]:e;return o.a.createElement("div",{className:p.a.container},o.a.createElement("div",{className:"todoList-header max"},o.a.createElement("span",{className:p.a.deleteTodoList,title:"Delete this list"},o.a.createElement(f.a,{icon:T.b,className:p.a.circle,onClick:t.deleteTodolist})),o.a.createElement(g,{title:t.props.title,todolistId:t.props.id,onDelete:t.deleteTodolist,updateTodoList:t.props.updateTodoList}),o.a.createElement(E,{addItem:t.addTask})),o.a.createElement(h,{changeStatus:t.changeStatus,changeTitle:t.changeTitle,deleteTask:t.deleteTask,tasks:a.filter(function(e){return"All"===t.state.filterValue||("Active"===t.state.filterValue?!1===e.isDone:"Completed"===t.state.filterValue?!0===e.isDone:void 0)})}),o.a.createElement(v,{changeFilter:t.changeFilter,filterValue:t.state.filterValue}))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),x=Object(w.b)(null,function(t){return{addTask:function(e,a){t(M(e,a))},setTasks:function(e,a){t(R(e,a))},deleteTodolist:function(e){var a=D(e);t(a)},deleteTask:function(e,a){var n=F(a,e);t(n)},updateTodoList:function(e,a){var n=function(t,e){return{type:"TodoList/Reducer/UPDATE_TODOLIST",todolistId:t,title:e}}(e,a);t(n)},getTasksT:function(e){var a;t((a=e,function(){var t=Object(C.a)(_.a.mark(function t(e){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:S.getTasks(a).then(function(t){var n=t.data.items;e(R(n,a))});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()))},addNewTask:function(e,a){t(function(t,e){return function(){var a=Object(C.a)(_.a.mark(function a(n){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:S.createTask(t,e).then(function(t){var a=t.data.data.item;n(M(a,e))});case 1:case"end":return a.stop()}},a)}));return function(t){return a.apply(this,arguments)}}()}(e,a))},deleteTL:function(e){t(function(t){return function(){var e=Object(C.a)(_.a.mark(function e(a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:S.deleteTodolist(t).then(function(){a(D(t))});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}(e))},deleteTaskNow:function(e,a){t(function(t,e){return function(){var a=Object(C.a)(_.a.mark(function a(n){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:S.deleteTask(t,e).then(function(a){n(F(t,e))});case 1:case"end":return a.stop()}},a)}));return function(t){return a.apply(this,arguments)}}()}(e,a))},changeTaskNow:function(e,a,n,o){t(function(t,e,a,n){return function(){var o=Object(C.a)(_.a.mark(function o(r){return _.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:n.forEach(function(n){n.id===t&&S.updateTask(n,e).then(function(e){var n=e.data.data.item;r(N(t,n,a))})});case 1:case"end":return o.stop()}},o)}));return function(t){return o.apply(this,arguments)}}()}(e,a,n,o))}}})(V),P=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={todolists:[]},t.addTodoList=function(e){t.props.createTodoList(e)},t.restoreState=function(){t.props.getTodolists()},t.render=function(){var e=t.props.todolists.map(function(t){return o.a.createElement(x,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p.a.MainAddNewItemForm},o.a.createElement(E,{addItem:t.addTodoList})),o.a.createElement("div",{className:"App"},e))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),U=Object(w.b)(function(t){return{todolists:t.todolist.todolists}},function(t){return{getTodolists:function(){t(function(){var t=Object(C.a)(_.a.mark(function t(e){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:S.getTodolists().then(function(t){e({type:"TodoList/Reducer/SET_TODOLISTS",todolists:t.data})});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},createTodoList:function(e){t(function(t){return function(){var e=Object(C.a)(_.a.mark(function e(a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:S.createTodolist(t).then(function(t){var e=t.data.data.item;a({type:"TodoList/Reducer/ADD-TODOLIST",newTodolist:Object(O.a)(Object(O.a)({},e),{},{tasks:[]})})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}(e))}}})(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(12),B=a(36),J=Object(Z.c)({todolist:K}),W=Object(Z.d)(J,Object(Z.a)(B.a));i.a.render(o.a.createElement(w.a,{store:W},o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.2ee1cd1b.chunk.js.map
let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-54-169-104-179.ap-southeast-1.compute.amazonaws.com:30721");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addTask = function(data, callback, errorCallback) {
	this.doPost("/task", data, callback, errorCallback);
};

AppAPIClient.prototype.updateTask = function(id, data, callback, errorCallback) {
	this.doPut("/task/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteTask = function(id, callback, errorCallback) {
	this.doDelete("/task/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getTasks = function(callback, errorCallback) {
	this.doGet("/tasks", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppTaskListAddTaskModel = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._name = null;
	this._description = null;
};

AppTaskListAddTaskModel.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppTaskListAddTaskModel.prototype.constructor = AppTaskListAddTaskModel;
AppTaskListAddTaskModel.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppTaskListAddTaskModel" : true
};
AppTaskListAddTaskModel.prototype._tobj = AppTaskListAddTaskModel;

AppTaskListAddTaskModel.NEW = function() {
	var v = new AppTaskListAddTaskModel;
	return v.CTOR_AppTaskListAddTaskModel();
};

AppTaskListAddTaskModel.prototype.CTOR_AppTaskListAddTaskModel = function() {
	this._description = null;
	this._name = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppTaskListAddTaskModel.prototype.setName = function(value) {
	this._name = value;
	return this;
};

AppTaskListAddTaskModel.prototype.getName = function() {
	return this._name;
};

AppTaskListAddTaskModel.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppTaskListAddTaskModel.prototype.getDescription = function() {
	return this._description;
};

AppTaskListAddTaskModel.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._name != null) {
		v.setObject("name", (this.asJsonValue(this._name)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppTaskListAddTaskModel.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._name = v.getString("name", null);
	this._description = v.getString("description", null);
	return true;
};

AppTaskListAddTaskModel.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppTaskListAddTaskModel.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppTaskListAddTaskModel.prototype.toString = function() {
	return this.toJsonString();
};

AppTaskListAddTaskModel.forJsonString = function(o) {
	var v = AppTaskListAddTaskModel.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppTaskListAddTaskModel.forJsonObject = function(o) {
	var v = AppTaskListAddTaskModel.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppTaskListAddTaskModel.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTaskListAddTaskModel"] === true;
};

let AppTaskListAdd = function() {
	JkWidgetLayerWidget.call(this);
	this.container = null;
	this.list = null;
};

AppTaskListAdd.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppTaskListAdd.prototype.constructor = AppTaskListAdd;
AppTaskListAdd.prototype._t = {
	"AppTaskListAdd" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppTaskListAdd.prototype._tobj = AppTaskListAdd;

AppTaskListAdd.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppTaskListAdd;
	return v.CTOR_AppTaskListAdd_JkUiGuiApplicationContext(context);
};

AppTaskListAdd.prototype.CTOR_AppTaskListAdd_JkUiGuiApplicationContext = function(context) {
	this.list = null;
	this.container = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppTaskListAdd.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var name = JkWidgetCommonTextInputWidget.forType(this.context, JkWidgetCommonTextInputWidget.TYPE_DEFAULT, "Name ");
	var desc = JkWidgetCommonTextInputWidget.forType(this.context, JkWidgetCommonTextInputWidget.TYPE_DEFAULT, "Description");
	this.list.addWidget(name);
	this.list.addWidget(desc);
	this.list.addWidget((JkWidgetCommonTextButtonWidget.forText(this.context, "Add Task", (function() {
		var task = AppTaskListAddTaskModel.NEW();
		task.setName((name.getWidgetText()));
		task.setDescription((desc.getWidgetText()));
		AppAPIClient.getInstance().addTask((task.toDynamicMap()), (function(res1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "TASK SUCCESSFULLY ADDED")), 0.5, 0.5, 0)), 1.0);
		}.bind(this)), (function(err1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "ADDING TASK FAILED")), 0.5, 0.5, 0)), 1.0);
		}.bind(this)));
	}.bind(this)))));
	name.focus();
};

AppTaskListAdd.prototype.getWidgetTitle = function() {
	return "Eqela Task list";
};

AppTaskListAdd.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetHorizontalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.white()));
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetPlaceholder("INPUT HERE");
	this.list.addWidget(widget2);
	this.container.addWidget(this.list);
	widget.addWidget(this.container);
	this.addWidget(widget);
};

AppTaskListAdd.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTaskListAdd"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppTaskList.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};

let AppTaskListTaskModel = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._name = null;
	this._description = null;
};

AppTaskListTaskModel.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppTaskListTaskModel.prototype.constructor = AppTaskListTaskModel;
AppTaskListTaskModel.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppTaskListTaskModel" : true
};
AppTaskListTaskModel.prototype._tobj = AppTaskListTaskModel;

AppTaskListTaskModel.NEW = function() {
	var v = new AppTaskListTaskModel;
	return v.CTOR_AppTaskListTaskModel();
};

AppTaskListTaskModel.prototype.CTOR_AppTaskListTaskModel = function() {
	this._description = null;
	this._name = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppTaskListTaskModel.prototype.setName = function(value) {
	this._name = value;
	return this;
};

AppTaskListTaskModel.prototype.getName = function() {
	return this._name;
};

AppTaskListTaskModel.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppTaskListTaskModel.prototype.getDescription = function() {
	return this._description;
};

AppTaskListTaskModel.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._name != null) {
		v.setObject("name", (this.asJsonValue(this._name)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppTaskListTaskModel.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._name = v.getString("name", null);
	this._description = v.getString("description", null);
	return true;
};

AppTaskListTaskModel.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppTaskListTaskModel.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppTaskListTaskModel.prototype.toString = function() {
	return this.toJsonString();
};

AppTaskListTaskModel.forJsonString = function(o) {
	var v = AppTaskListTaskModel.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppTaskListTaskModel.forJsonObject = function(o) {
	var v = AppTaskListTaskModel.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppTaskListTaskModel.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTaskListTaskModel"] === true;
};

let AppTaskList = function() {
	JkWidgetLayerWidget.call(this);
	this.container = null;
	this.list = null;
};

AppTaskList.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppTaskList.prototype.constructor = AppTaskList;
AppTaskList.prototype._t = {
	"AppTaskList" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppTaskList.prototype._tobj = AppTaskList;

AppTaskList.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppTaskList;
	return v.CTOR_AppTaskList_JkUiGuiApplicationContext(context);
};

AppTaskList.prototype.CTOR_AppTaskList_JkUiGuiApplicationContext = function(context) {
	this.list = null;
	this.container = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppTaskList.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var name = JkWidgetCommonTextInputWidget.forType(this.context, JkWidgetCommonTextInputWidget.TYPE_DEFAULT, "Name ");
	var desc = JkWidgetCommonTextInputWidget.forType(this.context, JkWidgetCommonTextInputWidget.TYPE_DEFAULT, "Description");
	this.list.addWidget(name);
	this.list.addWidget(desc);
	this.list.addWidget((JkWidgetCommonTextButtonWidget.forText(this.context, "Add", (function() {
		var task = AppTaskListTaskModel.NEW();
		task.setName((name.getWidgetText()));
		task.setDescription((desc.getWidgetText()));
		AppAPIClient.getInstance().addTask((task.toDynamicMap()), (function(res1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "TASK SUCCESSFULLY ADDED")), 0.5, 0.5, 0)), 1.0);
		}.bind(this)), (function(err1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "ADDING TASK FAILED")), 0.5, 0.5, 0)), 1.0);
		}.bind(this)));
	}.bind(this)))));
	name.focus();
};

AppTaskList.prototype.getWidgetTitle = function() {
	return "Eqela Task list";
};

AppTaskList.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.white()));
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.container.addWidget(this.list);
	widget.addWidget(this.container);
	this.addWidget(widget);
};

AppTaskList.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTaskList"] === true;
};

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data};
  if (stack1 = helpers.courses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.courses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <li><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.courses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.courses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><a href='#/courses/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/exercises'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n            ";
  return buffer;
  }

  buffer += "<h2>Courses</h2>\n\n<section>\n\n    <ul>\n        ";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal'>×</button>\n\n                <h1>Settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines'> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size'>\n                                <option value='11'>Small</option>\n                                <option value='12'>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal'>Cancel</button>\n            <button data-id='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\n\n        </div>\n\n</footer>\n";
  });

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<header>\n\n    <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n    <span class='pull-right'>\n\n        + ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || depth0.duration),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "\n\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n           data-original-title='\n\n                <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + " –</time>\n                <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\n\n           '\n\n           data-content='\n\n            <dl class=\"dl-horizontal pull-left\">\n\n              <dt>Change</dt>\n              <dd>";
  if (stack2 = helpers.percentageOfChange) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.percentageOfChange; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " %</dd>\n\n              <dt>Insert</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\n\n              <dt>Replace</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\n\n              <dt>Delete</dt>\n              <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\n\n            </dl>\n\n        '><i class='icon-info-sign icon-gray'></i></a>\n\n    </span>\n\n</header>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class='alert ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data};
  if (stack1 = helpers.exercises) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.exercises; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <li><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth1.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data};
  if (stack1 = helpers.exercises) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.exercises; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <li><a href='#/courses/"
    + escapeExpression(((stack1 = depth1.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n            ";
  return buffer;
  }

  buffer += "<h2>Exercises</h2>\n\n<section>\n\n    <ul>\n        ";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotFilesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='#/students/"
    + escapeExpression(((stack1 = depth1.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth1.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = depth1.exerciseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<header>\n\n    <i class='icon-folder-close icon-gray'></i> <h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n</header>\n\n<ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack2 = helpers.files) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.files; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.files) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='span2'>\n\n        <button id='toggleFiles' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>";
  if (stack1 = helpers.current) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.current; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='span2'>\n\n        <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + "</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + " (+ ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || depth0.duration),stack1 ? stack1.call(depth0, ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + ")</time>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <tr>\n                    <td class='link'><a href='#/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n                </tr>\n            ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n        <li class='active'>Students</li>\n    </ul>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.students) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.students; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });
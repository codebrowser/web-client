this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.studentId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || depth0.index),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, depth1.studentId, {hash:{},inverse:self.program(8, program8, data),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercises),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = depth2.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/courses/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/exercises'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Courses</li>\r\n\r\n    </ul>\r\n\r\n    <h2>";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(((stack1 = ((stack1 = depth0.courses),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n                <th>Exercises</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data};
  if (stack2 = helpers.courses) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.courses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.courses) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\r\n\r\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\r\n\r\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\r\n\r\n        <div class='modal-header'>\r\n\r\n            <header>\r\n\r\n                <button type='button' class='close' data-dismiss='modal'>×</button>\r\n\r\n                <h1>Settings</h1>\r\n\r\n            </header>\r\n\r\n        </div>\r\n\r\n        <div class='modal-body'>\r\n\r\n            <form class='form-horizontal'>\r\n\r\n                <fieldset>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='checkbox'>\r\n                            <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\r\n                        </label>\r\n\r\n                    </div>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='control-label' for='theme'>Theme</label>\r\n\r\n                        <div class='controls'>\r\n\r\n                            <select data-id='theme'>\r\n                                <option value='ace/theme/light'>Light</option>\r\n                                <option value='ace/theme/dark'>Dark</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='control-label' for='font-size'>Font size</label>\r\n\r\n                        <div class='controls'>\r\n\r\n                            <select data-id='font-size'>\r\n                                <option value='11'>Small</option>\r\n                                <option value='12' selected>Normal</option>\r\n                                <option value='13'>Larger</option>\r\n                                <option value='14'>Large</option>\r\n                                <option value='15'>Extra Large</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                </fieldset>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n        <div class='modal-footer'>\r\n\r\n            <button class='btn' data-dismiss='modal'>Cancel</button>\r\n            <button data-action='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\r\n\r\n        </div>\r\n\r\n</footer>\r\n";
  });

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\r\n\r\n        <section class='split'>\r\n\r\n            <div class='previous'><span>Previous</span></div>\r\n            <div class='current'><span>Current</span></div>\r\n\r\n        </section>\r\n\r\n    ";
  }

  buffer += "<header>\r\n\r\n    <section>\r\n\r\n        <h1>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || depth0.filename),stack1 ? stack1.call(depth0, depth0.name, options) : helperMissing.call(depth0, "filename", depth0.name, options)))
    + "</h1>\r\n\r\n        <span class='pull-right'>\r\n\r\n            + ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || depth0.duration),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "\r\n\r\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\r\n\r\n               data-original-title='\r\n\r\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = depth0.previous),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + " –</time>\r\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = depth0.snapshot),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\r\n\r\n               '\r\n\r\n               data-content='\r\n\r\n                <dl class=\"dl-horizontal pull-left\">\r\n\r\n                  <dt>Change</dt>\r\n                  <dd>";
  if (stack2 = helpers.percentageOfChange) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.percentageOfChange; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " %</dd>\r\n\r\n                  <dt>Insert</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\r\n\r\n                  <dt>Replace</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\r\n\r\n                  <dt>Delete</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || depth0.pluralize),stack1 ? stack1.call(depth0, ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = depth0.difference),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\r\n\r\n                </dl>\r\n\r\n            '><i class='icon-info-sign icon-gray'></i></a>\r\n\r\n        </span>\r\n\r\n    </section>\r\n\r\n    ";
  stack2 = helpers['if'].call(depth0, depth0.split, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n</header>\r\n";
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
    + "</p>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.studentId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.studentId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || depth0.index),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, depth1.studentId, {hash:{},inverse:self.programWithDepth(10, program10, data, depth1),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = depth2.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth2.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = depth2.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses'>Courses</a> <span class='divider'>/</span></li>\r\n        <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.courseId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        <li class='active'>Exercises</li>\r\n\r\n    </ul>\r\n\r\n    <h2>";
  stack2 = helpers['if'].call(depth0, depth0.studentId, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Exercises ("
    + escapeExpression(((stack1 = ((stack1 = depth0.exercises),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data};
  if (stack2 = helpers.exercises) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.exercises; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.exercises) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["NavigationBarContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.courseId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.exerciseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.exerciseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.exerciseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.studentId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.student),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.courseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.exerciseId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.courseRoute, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Snapshots</li>\r\n\r\n    </ul>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n        <li class='active'>Home</li>\r\n    </ul>\r\n\r\n    <ul class='nav nav-tabs nav-stacked selection'>\r\n        <li><a href='./#/students'>Students</a></li>\r\n        <li><a href='./#/courses'>Courses</a></li>\r\n    </ul>\r\n\r\n</section>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotFilesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n            ";
  stack2 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                <li class='folder'><i class='icon-folder-open icon-gray'></i>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n\r\n            ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                ";
  stack1 = helpers['if'].call(depth0, depth2.courseRoute, {hash:{},inverse:self.programWithDepth(7, program7, data, depth2),fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                    <li data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/courses/"
    + escapeExpression(((stack1 = depth3.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = depth3.exerciseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = depth3.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = depth3.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || depth0.filename),stack1 ? stack1.call(depth0, depth0.name, options) : helperMissing.call(depth0, "filename", depth0.name, options)))
    + "</a></li>\r\n\r\n                ";
  return buffer;
  }

function program7(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                    <li data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/students/"
    + escapeExpression(((stack1 = depth3.studentId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = depth3.courseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = depth3.exerciseId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = depth3.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || depth0.filename),stack1 ? stack1.call(depth0, depth0.name, options) : helperMissing.call(depth0, "filename", depth0.name, options)))
    + "</a></li>\r\n\r\n                ";
  return buffer;
  }

  buffer += "<header>\r\n\r\n    <h1><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n\r\n</header>\r\n\r\n<ul>\r\n\r\n        ";
  stack2 = helpers.each.call(depth0, depth0.files, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n</ul>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\r\n\r\n    <div class='span2'>\r\n\r\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\r\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\r\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\r\n\r\n    </div>\r\n\r\n    <div class='span4 pull-right'>\r\n\r\n        <div class='row'>\r\n\r\n            <div class='span1 text-center'>";
  if (stack1 = helpers.current) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.current; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n\r\n            <div class='span3'>\r\n\r\n                <div class='btn-group pull-right'>\r\n                    <button type='button' id='first' class='btn'>First</button>\r\n                    <button type='button' id='previous' class='btn'>Previous</button>\r\n                    <button type='button' id='next' class='btn'>Next</button>\r\n                    <button type='button' id='last' class='btn'>Last</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotTagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n\r\n    <ul>\r\n\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.tags; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    </ul>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n            <li>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <button type='button' data-action='delete' data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' class='delete'>×</button></li>\r\n\r\n        ";
  return buffer;
  }

  buffer += "<header>\r\n\r\n    <h1><i class='icon-tags icon-gray'></i> Tags</h1>\r\n\r\n</header>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, depth0.tags, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<div class='input-append'>\r\n\r\n    <form>\r\n\r\n        <input type='text' data-id='tag' id='appendedInputButton' placeholder='New tag…'>\r\n        <button type='submit' data-action='create' class='btn'>+</button>\r\n\r\n    </form>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\r\n\r\n    <div class='span2'>\r\n\r\n        <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + "</time>\r\n\r\n    </div>\r\n\r\n    <div class='center text-center'>. . .</div>\r\n\r\n    <div class='span3 pull-right'>\r\n\r\n        <time class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + " (+ ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || depth0.duration),stack1 ? stack1.call(depth0, ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = depth0.last),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = depth0.first),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + ")</time>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = depth0.course),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — "
    + escapeExpression(((stack1 = ((stack1 = depth0.exercise),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\r\n                    <th>Courses</th>\r\n                ";
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || depth0.index),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, depth1.course, {hash:{},inverse:self.program(10, program10, data),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    ";
  stack2 = helpers.unless.call(depth0, depth1.course, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = depth2.course),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = depth2.exercise),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.courses),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.course, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Students</li>\r\n    </ul>\r\n\r\n    <h2>";
  stack1 = helpers['if'].call(depth0, depth0.course, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = depth0.students),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n\r\n                <th>#</th>\r\n                <th>Name</th>\r\n\r\n                ";
  stack2 = helpers.unless.call(depth0, depth0.course, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data};
  if (stack2 = helpers.students) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.students; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.students) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["VisualizationSettings"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='row'>\r\n    <div class=\"well\">\r\n        <h6 class=\"text-center\">Toggle visualizations</h6>\r\n        <div id=\"buttonWrapper\">\r\n            <button id=\"toggleTimeline\" class=\"btn pull-left\">Timeline</button>\r\n            <button id=\"toggleButton2\" class=\"btn pull-left\">Visualization2</button>\r\n            <button id=\"toggleButton3\" class=\"btn pull-left\">Visualization3</button>\r\n            <span class=\"clearfix\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
  });
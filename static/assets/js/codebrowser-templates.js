this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CommentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n\n        <ul class='breadcrumb'>\n\n            <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n            <li class='active'>Comments</li>\n\n        </ul>\n\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " — Search results for \"";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.query); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\n                <span class='prev'> << prev </span>\n            ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class='cprev' href='./#/comments?page=";
  if (stack1 = helpers.prevPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prevPage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'> << prev </span>\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "\n                <span class='next'> next >> </span>\n            ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class='cnext' href='./#/comments?page=";
  if (stack1 = helpers.nextPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.nextPage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'> next >> </span>\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <span class='pull-right'> Page ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " of ";
  if (stack1 = helpers.totalPages) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.totalPages); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " Pages </span>\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isRead), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n            <h3>\n                <strong>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.username); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n                <span class='pull-right'>\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  stack2 = ((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "date", (depth0 && depth0.createdAt), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </span>\n            </h3>\n\n\n            <p class='comment-text' data-action='toggle-comment-edit' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>\n\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.breaklines || (depth0 && depth0.breaklines)),stack1 ? stack1.call(depth0, (depth0 && depth0.comment), options) : helperMissing.call(depth0, "breaklines", (depth0 && depth0.comment), options)))
    + "\n\n            </p>\n\n            <p class='comment-controls'>\n\n                ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                <span class='pull-right'>\n\n                    <button class='btn btn-mini' data-action='toggle-comment-edit' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-toggle='tooltip' title='Edit this comment'>\n                        <i class='icon-edit'> </i>\n                    </button>\n\n                    <button class='btn btn-mini' data-action='delete-comment' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-toggle='tooltip' title='Delete this comment'>\n                        <i class='icon-remove'> </i>\n                    </button>\n\n                </span>\n            </p>\n\n\n\n        </article>\n\n    ";
  return buffer;
  }
function program18(depth0,data) {
  
  
  return "\n            <article>\n        ";
  }

function program20(depth0,data) {
  
  
  return "\n            <article class='new'>\n        ";
  }

function program22(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                      <a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                          <i class='icon-snapshot icon-gray icon-intext'></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                      </a>\n\n                  ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                      <a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                          <i class='icon-answer icon-gray icon-intext'/> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                      </a>\n\n                ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(29, program29, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program29(depth0,data) {
  
  
  return "\n                <span class='cprev'> << prev </span>\n            ";
  }

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(32, program32, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program32(depth0,data) {
  
  
  return "\n                <span class='cnext'> next >> </span>\n            ";
  }

  buffer += "<section>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showBreadcrumb), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div>\n        <h2>\n            Comments";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.query), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (stack1 = helpers.totalElements) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.totalElements); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n\n            <span class=\"pull-right\">\n                <div class=\"input-append\">\n                    <form>\n                        <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\n                        <button type=\"submit\" class=\"btn\" data-action=\"search\" title=\"Search text in comments\">\n                            <i class=\"icon-search\"></i>\n                        </button>\n                    </form>\n                </div>\n            </span>\n        </h2>\n    </div>\n\n    <div class = 'pagination'>\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.onlyOnePage), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.comments) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.comments); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.comments) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class = 'pagination'>\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.onlyOnePage), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "<th>Students</th>";
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.program(10, program10, data),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n\n                    <td>";
  stack2 = helpers.unless.call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n\n                </tr>\n\n            ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = (depth2 && depth2.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        <td class='link'><a href='./#/courses/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.amountOfStudents) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.amountOfStudents); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Courses</li>\n\n    </ul>\n\n    <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        <span class=\"pull-right\">\n            <div class=\"input-append\">\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\n                <button class=\"btn\" data-action=\"search\" title=\"Search for courses\">\n                    <i class=\"icon-search\"></i>\n                </button>\n            </div>\n        </span>\n\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n                <th>Exercises</th>\n                ";
  stack2 = helpers.unless.call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data};
  if (stack2 = helpers.courses) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.courses); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.courses) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray' title='Change code view settings'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal' title='Close the settings dialog without saving any changes'>×</button>\n\n                <h1>Code viewer settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines' title='Ignore empty lines when calculating differences between two snapshots' checked> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme' title='Choose the color scheme for the code viewer'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size' title='Choose the font size for the code viewer'>\n                                <option value='11'>Small</option>\n                                <option value='12' selected>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal' title='Close the settings dialog without saving any changes'>Cancel</button>\n            <button data-action='save' class='btn btn-primary' data-dismiss='modal' title='Apply new settings and close the dialog'>Save</button>\n\n        </div>\n\n</footer>\n";
  });

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\n\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n    ";
  }

  buffer += "<header>\n\n    <section>\n\n        <h1>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || (depth0 && depth0.filename)),stack1 ? stack1.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</h1>\n\n        <span class='pull-right'>\n\n            + ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || (depth0 && depth0.duration)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>";
  if (stack2 = helpers.percentageOfChange) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.percentageOfChange); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\n\n                  <dt>Modify</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\n\n                </dl>\n\n            '><i class='icon-info-sign icon-gray' title='Show snapshot statistics'></i></a>\n\n        </span>\n\n    </section>\n\n    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.split), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n</header>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class='alert ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['class']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseId), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><a href='./#/courses/'>Courses</a> <span class='divider'>/</span></li>\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/students/'>Students</a> <span class='divider'>/</span></li>\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n                <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(19, program19, data, depth1),fn:self.programWithDepth(14, program14, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                </tr>\n\n            ";
  return buffer;
  }
function program14(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewPath), {hash:{},inverse:self.programWithDepth(17, program17, data, depth2),fn:self.programWithDepth(15, program15, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    ";
  return buffer;
  }
function program15(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                            <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program17(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                            <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program19(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                        <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = (depth2 && depth2.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewPath), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <li class='active'>Exercises</li>\n\n    </ul>\n\n    <h2>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Exercises ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data};
  if (stack2 = helpers.exercises) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.exercises); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.exercises) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<i id=\"settingsModalButton\" class=\"icon-wrench icon-gray pull-left\" title=\"Change Code Browser settings\"></i>\n\n<p>Open source project by the Department of Computer Science, University of Helsinki - <a href=\"http://github.com/codebrowser/web-client\" target=\"_blank\">View source on GitHub</a></p>\n";
  });

this["Handlebars"]["templates"]["Navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n      	<li><a href=\"./#/studentgroups\">Tags</a></li>\n      ";
  }

function program3(depth0,data) {
  
  
  return "\n      	<li><a href=\"./#/tagnames\">Tags</a></li>\n      ";
  }

function program5(depth0,data) {
  
  
  return "\n      	<li><a href=\"./#/tagcategories\">Tag categories</a></li>\n      ";
  }

function program7(depth0,data) {
  
  
  return "\n      	<li><a href=\"./#/comments\">Comments</a></li>\n      ";
  }

function program9(depth0,data) {
  
  
  return "\n\n        <button class='btn btn-small pull-right' id='startTour' title='Start a tour'>\n            <i class='icon-question-sign icon-gray'></i>\n        </button>\n\n    ";
  }

  buffer += "<nav class='navbar navbar-default' role='navigation'>\n    <ul class=\"nav navbar-nav\">\n      <li><a href=\"./#\">Home</a></li>\n\n      <li><a href=\"./#/students\">Students</a></li>\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showStudentgroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <li><a href=\"./#/courses\">Courses</a></li>\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTags), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showComments), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tourEnabled), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>\n\n";
  return buffer;
  });

this["Handlebars"]["templates"]["NavigationBarContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRoute), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Snapshots</li>\n\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n            <li><a href='./#/studentgroups'>Student groups</a></li>\n        ";
  }

function program3(depth0,data) {
  
  
  return "\n            <li><a href='./#/tagnames'>Tags</a></li>\n        ";
  }

function program5(depth0,data) {
  
  
  return "\n            <li><a href='./#/tagcategories'>Tag categories</a></li>\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            <li><a href='./#/comments'>Comments</a></li>\n        ";
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n        <li class='active'>Home</li>\n    </ul>\n\n    <ul class='nav nav-tabs nav-stacked selection'>\n        <li><a href='./#/students'>Students</a></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showStudentGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li><a href='./#/courses'>Courses</a></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTags), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showComments), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SelectContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Select</li>\n    </ul>\n\n    <h2>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Select view mode</h2>\n\n    <table class='table table-hover'>\n\n        <tbody>\n\n            <ul class=\"nav nav-tabs nav-stacked selection\">\n                <li class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>View students of the course</a></td>\n                <li class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>View exercises of the course</a></td>\n            </ul>\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SettingsModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n            <div id=\"capability-report\" class=\"text-center\">\n            ";
  }

function program3(depth0,data) {
  
  
  return "\n            <div id=\"capability-report\" class=\"text-center\" style=\"display:none;\">\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>\n                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.program(11, program11, data),fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </td>\n                        <td>\n                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </td>\n                    </tr>\n                    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n                                <i class=\"fa fa-2x fa-check\" title=\"Verified\"></i>\n                                ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <i class=\"fa fa-2x fa-warning\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n                                ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <i class=\"fa fa-2x fa-question-circle\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n                            ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <input class=\"toggleEnabled\" type=\"checkbox\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" checked>\n                            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <input class=\"toggleEnabled\" type=\"checkbox\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                            ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\n            <button id=\"saveButton\" class=\"btn btn-primary\" data-action=\"save\" title=\"Apply new settings and close the dialog\">Save</button>\n            ";
  }

function program19(depth0,data) {
  
  
  return "\n            <button id=\"saveButton\" class=\"btn btn-primary\" data-action=\"save\" title=\"Apply new settings and close the dialog\" disabled>Save</button>\n            ";
  }

  buffer += "<div id=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\n\n    <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n            <button type=\"button\" id=\"closeButton\" class=\"close\" aria-hidden=\"true\" title=\"Close the settings dialog without saving any changes\">×</button>\n            <h3 id=\"myModalLabel\">Settings</h3>\n        </div>\n\n        <div class=\"modal-body inline\">\n            <label for=\"apiUrl\">Server URL</label>\n            <input id=\"apiUrl\" type=\"text\" value=\"";
  if (stack1 = helpers.apiUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.apiUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"URL of the backend that provides the data for Code Browser\"/>\n            <button id=\"applyButton\" class=\"btn btn-primary\">Apply</button>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.applied), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>Feature</th>\n                            <th>Check status</th>\n                            <th>Enabled</th>\n                        </tr>\n                    </thead>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.capabilities), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </table>\n\n                <button id=\"checkButton\" class=\"btn btn-small\">Check back-end capabilities</button>\n\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button id=\"cancelButton\" class=\"btn\" aria-hidden=\"true\" title=\"Close the settings dialog without saving any changes\">Cancel</button>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.applied), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n    </div>\n\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotCommentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section id='snapshot-comment-form'>\n\n    <header>\n\n        <h1>\n            <i class='icon-comment icon-gray'></i> Post a comment\n        </h1>\n\n    </header>\n\n    <form class='form-horizontal'>\n\n\n        <div class='control-group'>\n\n            <label class='control-label' for='comment-username'>Username</label>\n\n            <div class='controls'>\n                <input type='text' data-id='comment-username' placeholder='Username' value='";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.username); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "' title='Name that will be shown to other users'>\n            </div>\n        </div>\n\n        <div class='control-group'>\n\n            <label class='control-label' for='comment-type'>Comment on</label>\n\n            <div class='controls btn-group' data-toggle='buttons-radio'>\n                <button name='comment-type' type='button' data-action='solution-comment' class='btn active' title='Comment on the entire solution'>\n                    <i class='icon-answer icon-gray'></i>\n                    solution\n                </button>\n\n                <button name='comment-type' type='button' data-action='snapshot-comment' class='btn' title='Comment on the current snapshot'>\n                    <i class='icon-snapshot icon-gray'></i>\n                    snapshot\n                </button>\n            </div>\n        </div>\n\n        <div class='control-group'>\n\n            <label class='control-label' for='comment-text'>Comment</label>\n\n            <div class='controls'>\n                <textarea rows='8' data-id='comment-text'></textarea>\n            </div>\n        </div>\n\n        <div class='control-group'>\n\n            <div class='controls'>\n                <button type='submit' class='btn btn-primary' data-action='create-comment' class='Submit comment'>Submit</button>\n            </div>\n        </div>\n\n    </form>\n\n\n</section>\n\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotDataContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tests), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<p>Complete: ";
  if (stack1 = helpers.percentageOfTestsPassing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.percentageOfTestsPassing); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</p>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"tests ";
  if (stack1 = helpers.passed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.passed); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <p class=\"test-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"test-message\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n    <div><p>No test data.</p></div>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tests), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["SnapshotFilesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n            ";
  stack2 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                <li class='folder'><i class='icon-folder-open icon-gray'></i>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n            ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.courseRoute), {hash:{},inverse:self.programWithDepth(7, program7, data, depth2),fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                    <li data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = (depth3 && depth3.exerciseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = (depth3 && depth3.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || (depth0 && depth0.filename)),stack1 ? stack1.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</a></li>\n\n                ";
  return buffer;
  }

function program7(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                    <li data-id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = (depth3 && depth3.exerciseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = (depth3 && depth3.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'><i class='icon-file icon-gray'></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filename || (depth0 && depth0.filename)),stack1 ? stack1.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</a></li>\n\n                ";
  return buffer;
  }

  buffer += "<header>\n\n    <h1><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n</header>\n\n<ul>\n\n        ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n</ul>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div id='editor-modes' class='span2'>\n\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button' title='Show file list'>\n            <i class='icon-folder icon-gray'></i>\n        </button>\n        <button id='split' type='button' class='btn' data-toggle='button'>\n            <i class='icon-split-editor icon-gray' title='Show side-by-side comparison of file contents'></i>\n        </button>\n        <button id='diff' type='button' class='btn' data-toggle='button' title='Highlight changed lines (BLUE: inserted, RED: deleted, GREEN: modified)'>\n            <i class='icon-diff icon-gray'></i>\n        </button>\n\n    </div>\n\n    <div id='visualization-settings' class='span6'>\n\n        <button id='toggleTimeline' class='btn' title='Show timeline'>\n            <i class='icon-time icon-gray'></i>\n        </button>\n        <button id='toggleTree' class='btn'>\n            <i class='icon-tree icon-gray' title='Show timelines for each file'></i>\n        </button>\n        <button id='toggleTestOutput' class='btn' title='Show test results and output'>\n            <i class='icon-ok icon-gray'></i>\n        </button>\n        <button id='toggleConceptBubbles' class='btn' title='Show concept bubble chart'>\n            <i class='icon-bubble icon-gray'></i>\n        </button>\n        <button id='toggleConceptHeatmap' class='btn' title='Show concept heat map'>\n            <i class='icon-fire icon-gray'></i>\n        </button>\n\n    </div>\n\n\n    <div id='snapshot-navi' class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>";
  if (stack1 = helpers.current) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.current); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.total); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn' title='Go to first snapshot'>First</button>\n                    <button type='button' id='previous' class='btn' title='Go to previous snapshot'>Previous</button>\n                    <button type='button' id='next' class='btn' title='Go to next snapshot'>Next</button>\n                    <button type='button' id='last' class='btn' title='Go to last snapshot'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotTagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n        <ul>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tags); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </ul>\n\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                    <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagName)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <button type='button' data-action='delete' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove this tag'>×</button></li>\n\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n        <ul>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tags); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </ul>\n\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.visible), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagName)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<button type='button' data-action='delete' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove this tag'>×</button></li>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <header>\n\n        <h1><i class='icon-tags icon-gray'></i> Tags</h1>\n\n    </header>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class='input-append'>\n\n        <form>\n\n            <input type='text' data-id='tag' placeholder='New tag…'>\n\n            <button title='Add new tag to this solution' type='submit' data-action='create-tag' class='btn'>+</button>\n\n        </form>\n\n    </div>\n\n</section>\n\n<section>\n    <header>\n\n        <h1><i class='icon-tags icon-gray'></i> Tags (Snapshot)</h1>\n\n    </header>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class='input-append'>\n\n        <form>\n\n            <input type='text' data-id='snapshot-tag' placeholder='New snapshot tag…'>\n\n            <button title='Add new tag to this snapshot' type='submit' data-action='create-snapshot-tag' class='btn'>+</button>\n\n        </form>\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='span2'>\n\n        <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + "</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + " (+ ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || (depth0 && depth0.duration)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + ")</time>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentGroupsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                    <td class='link'><a href='./#/studentgroups/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n\n                </tr>\n\n            ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Student groups</li>\n\n    </ul>\n\n    <h2>\n        Student groups ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroups)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        <span class=\"pull-right\">\n            <div class=\"input-append\">\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\n                <button class=\"btn\" data-action=\"search\" title=\"Search for student groups\">\n                    <i class=\"icon-search\"></i>\n                </button>\n            </div>\n        </span>\n\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n                <th>Students</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.studentGroups) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.studentGroups); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.studentGroups) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='./#/studentgroups'>Student groups</a> <span class='divider'>/</span></li>\n            <li><a href='./#/studentgroups/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.exercise), {hash:{},inverse:self.program(13, program13, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n            ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n            ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "\n                    <th>Courses</th>\n                ";
  }

function program18(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.program(24, program24, data),fn:self.programWithDepth(19, program19, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    ";
  stack2 = helpers.unless.call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                </tr>\n\n            ";
  return buffer;
  }
function program19(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.exercise), {hash:{},inverse:self.programWithDepth(22, program22, data, depth2),fn:self.programWithDepth(20, program20, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    ";
  return buffer;
  }
function program20(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                            <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/snapshots'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program22(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n                            <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        <td class='link'><a href='./#/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        \n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.exercise), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentGroup), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Students</li>\n    </ul>\n\n\n    <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentGroup), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <span class=\"pull-right\">\n            <div class=\"input-append\">\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\n                <button class=\"btn\" data-action=\"search\" title=\"Search for students\">\n                    <i class=\"icon-search\"></i>\n                </button>\n            </div>\n        </span>\n\n    </h2>\n\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n\n                <th>#</th>\n                <th>Name</th>\n\n                ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(18, program18, data, depth0),data:data};
  if (stack1 = helpers.students) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.students); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TagCategoriesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n            <tr>\n\n                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                <td class='link'><a href='./#/tagcategories/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tagnames'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n\n                <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagnames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n\n                <td><button type='button' data-action='delete-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Delete this tag category'>×</button></td>\n\n            </tr>\n\n        ";
  return buffer;
  }

  buffer += "\n<ul class='breadcrumb'>\n\n    <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n    <li>Tag categories</li>\n\n</ul>\n\n<h2>Tag categories ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategories)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n<div class='input-append'>\n\n    <form>\n\n        <input type='text' data-id='category' placeholder='New tag category…'>\n\n        <button title='Add new tag category' type='submit' data-action='create-category' class='btn'>+</button>\n\n    </form>\n\n</div>\n\n<table class='table table-hover'>\n\n    <thead>\n        <tr>\n            <th>#</th>\n            <th>Tag category</th>\n            <th>Tag Count</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.tagCategories) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.tagCategories); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.tagCategories) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    </tbody>\n\n</table>";
  return buffer;
  });

this["Handlebars"]["templates"]["TagNamesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n            <li><a href='./#/tagcategories'>Tag categories</a><span class='divider'>/</span></li>\n            <li class='active'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n            <li class='active'>Tags</li>\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <div class=\"add-to-categories\">\n            <div class=\"category-list\">\n                <div class=\"scroll up-scroll\"><i class='icon-arrow-up'></i></div>\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.tagCategories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tagCategories); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tagCategories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div class=\"scroll down-scroll\"><i class='icon-arrow-down'></i></div>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <p class=\"tag-category\" id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n                ";
  return buffer;
  }

function program8(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                <td class='double-list triple-list'>\n\n                    <h2>Unused tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.unusedTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n                    <table class='table table-hover'>\n\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Tag</th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth1),data:data};
  if (stack2 = helpers.unusedTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.unusedTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.unusedTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </tbody>\n\n                    </table>\n                </td>\n            ";
  return buffer;
  }
function program9(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n                                <tr>\n                                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n                                    <td><span class='button button-add' id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-action=\"add-to-category\" title='Add tag to category'>+</span></td>\n                                </tr>\n                            ";
  return buffer;
  }

function program11(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                            <tr>\n\n                                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                                ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.tagCategory), {hash:{},inverse:self.program(14, program14, data),fn:self.programWithDepth(12, program12, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                            </tr>\n\n                        ";
  return buffer;
  }
function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n                                    <td><button type='button' data-action='delete-from-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove tag from category'>×</button></td>\n                                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                    <td class='link' draggable='true' id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/tagnames/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/tags'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n                                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tags)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                                ";
  return buffer;
  }

function program16(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                            <tr>\n\n                                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                                ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.tagCategory), {hash:{},inverse:self.program(14, program14, data),fn:self.programWithDepth(17, program17, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                            </tr>\n\n                        ";
  return buffer;
  }
function program17(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\n                                    <td><button type='button' data-action='delete-from-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete'>×</button></td>\n                                ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategory), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        \n\n    </ul>\n\n    <button id=\"downloadTagListJson\" class=\"btn\" title=\"Download list of tags in JSON format\">Export tags as JSON</button>\n\n    <span class=\"pull-left add-message\"></span>\n\n    <span class=\"pull-right\">\n        <div class=\"input-append\">\n            <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\n            <button class=\"btn\" data-action=\"search\" title=\"Search for tags\">\n                <i class=\"icon-search\"></i>\n            </button>\n        </div>\n    </span>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <table class='double-list'>\n\n        <tr>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unusedTagNames), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <td class='double-list-left'>\n\n                <h2>Tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exerciseAnswerTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n                <table class='table table-hover'>\n\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Tag</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth0),data:data};
  if (stack2 = helpers.exerciseAnswerTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.exerciseAnswerTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.exerciseAnswerTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    </tbody>\n\n                </table>\n\n            </td>\n\n            <td class='double-list-right'>\n\n                <h2>Snapshot tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.snapshotTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n                <table class='table table-hover'>\n\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Tag</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(16, program16, data, depth0),data:data};
  if (stack2 = helpers.snapshotTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.snapshotTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.snapshotTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    </tbody>\n\n                </table>\n\n            </td>\n\n        </tr>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><a href='/#/tagcategories'>Tag categories</a><span class='divider'>/</span></li>\n            <li><a href='/#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><span class='divider'>/</span></li>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\n\n                    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    <td class='link'><a href=\"./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n\n                </tr>\n\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'><i class='icon-snapshot icon-gray icon-intext'/> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " (Snapshot)</a></td>\n\n                    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'><i class='icon-answer icon-gray icon-intext'/> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategory), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Tags</li>\n\n    </ul>\n\n    <h2>Tags — ";
  if (stack1 = helpers.tagNameText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.tagNameText); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tags)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                    <th>Tagged answer or snapshot</th>\n                <th>Student</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.tags) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.tags); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.tags) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TreeFilenameContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n\n    <div class='visualization-filename'>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div>\n\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.filenames) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.filenames); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.filenames) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotConceptsBubbleIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show concepts</strong>\n\n<p>\n    Shows the concepts of the current snapshot.\n</p>\n\n";
  });

this["Handlebars"]["templates"]["SnapshotConceptsHeatmapIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show concepts heatmap</strong>\n\n<p>\n    Shows all concepts on given solution.\n    Dark coloured cells are snapshots where value is high.\n</p>";
  });

this["Handlebars"]["templates"]["SnapshotDataIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show snapshot data</strong>\n\n<p>\n    Shows the test outputs of current snapshot.\n</p>\n";
  });

this["Handlebars"]["templates"]["SnapshotEditorIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot content</strong>\n\n<p>\n    Here you can see the actual code.\n</p>";
  });

this["Handlebars"]["templates"]["SnapshotEditorModesIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot editor modes</strong>\n\n<p>\n    <i class=\"icon-folder icon-gray\"></i>\n    Show snapshot file list and tags\n<p>\n\n<p>\n    <i class=\"icon-split-editor icon-gray\"></i>\n    You can split the editor in half and see previous and current snapshots code side-by-side.\n<p>\n\n<p>\n    <i class=\"icon-diff icon-gray\"></i>\n    Toggle diff to see changed lines:\n    <ul>\n        <li><i style='color:green'>Green</i> is new inserted line</li>\n        <li><i style='color:red'>Red</i> deleted line</li>\n        <li><i style='color:blue'>Blue</i> modified line</li>\n    </ul>\n</p>\n";
  });

this["Handlebars"]["templates"]["SnapshotEditorSettingsIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot editor setting</strong>\n\n<p>\n    Change the settings of editor view. You can set diff to ignore empty lines.\n</p>\n";
  });

this["Handlebars"]["templates"]["SnapshotNavigationIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Browse snapshots</strong>\n\n<p>\n    You can also navigate using left and right arrow keys,\n    using slider or by clicking single snapshot in visualizations.\n</p>\n";
  });

this["Handlebars"]["templates"]["SnapshotTimelineIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show timeline</strong>\n\n<p>\n    Shows the amount of change and time elapsed between snapshots.\n</p>\n\n<ul>\n    <li><i style=\"color:grey\">Grey</i> circle if code won't compile.</li>\n    <li>Amount of failing tests in <i style=\"color:red\">red</i></li>\n    <li>Passing tests in <i style=\"color:green\">green</i></li>\n</ul>\n";
  });

this["Handlebars"]["templates"]["SnapshotTreeIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show file timeline</strong>\n\n<p>\n    Size of the circle shows the file size in given snapshot.\n    Type of modification is shown at the border:\n    <ul>\n        <li><i style='color:green'>Green</i> - new lines</li>\n        <li><i style='color:red'>Red</i> - deleted lines</li>\n        <li><i style='color:blue'>Blue</i> - modified lines</li>\n    </ul>\n</p>\n\n\n";
  });
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CommentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\r\n\r\n        <ul class='breadcrumb'>\r\n\r\n            <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n            <li class='active'>Comments</li>\r\n\r\n        </ul>\r\n\r\n    ";
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
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "\r\n                <span class='prev'> << prev </span>\r\n            ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <span class='cprev' href='./#/comments?page=";
  if (stack1 = helpers.prevPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prevPage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'> << prev </span>\r\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "\r\n                <span class='next'> next >> </span>\r\n            ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <span class='cnext' href='./#/comments?page=";
  if (stack1 = helpers.nextPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.nextPage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'> next >> </span>\r\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <span class='pull-right'> Page ";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.page); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " of ";
  if (stack1 = helpers.totalPages) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.totalPages); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " Pages </span>\r\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isRead), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n            <h3>\r\n                <strong>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.username); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\r\n                <span class='pull-right'>\r\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  stack2 = ((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "date", (depth0 && depth0.createdAt), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </span>\r\n            </h3>\r\n\r\n\r\n            <p class='comment-text' data-action='toggle-comment-edit' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>\r\n\r\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.breaklines || (depth0 && depth0.breaklines)),stack1 ? stack1.call(depth0, (depth0 && depth0.comment), options) : helperMissing.call(depth0, "breaklines", (depth0 && depth0.comment), options)))
    + "\r\n\r\n            </p>\r\n\r\n            <p class='comment-controls'>\r\n\r\n                ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                <span class='pull-right'>\r\n\r\n                    <button class='btn btn-mini' data-action='toggle-comment-edit' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-toggle='tooltip' title='Edit this comment'>\r\n                        <i class='icon-edit'> </i>\r\n                    </button>\r\n\r\n                    <button class='btn btn-mini' data-action='delete-comment' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-toggle='tooltip' title='Delete this comment'>\r\n                        <i class='icon-remove'> </i>\r\n                    </button>\r\n\r\n                </span>\r\n            </p>\r\n\r\n\r\n\r\n        </article>\r\n\r\n    ";
  return buffer;
  }
function program18(depth0,data) {
  
  
  return "\r\n            <article>\r\n        ";
  }

function program20(depth0,data) {
  
  
  return "\r\n            <article class='new'>\r\n        ";
  }

function program22(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                      <a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                          <i class='icon-snapshot icon-gray icon-intext'></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                      </a>\r\n\r\n                  ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                      <a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                          <i class='icon-answer icon-gray icon-intext'/> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                      </a>\r\n\r\n                ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(29, program29, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program29(depth0,data) {
  
  
  return "\r\n                <span class='cprev'> << prev </span>\r\n            ";
  }

function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshotView), {hash:{},inverse:self.program(32, program32, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program32(depth0,data) {
  
  
  return "\r\n                <span class='cnext'> next >> </span>\r\n            ";
  }

  buffer += "<section>\r\n\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showBreadcrumb), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <div>\r\n        <h2>\r\n            Comments";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.query), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (stack1 = helpers.totalElements) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.totalElements); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\r\n\r\n            <span class=\"pull-right\">\r\n                <div class=\"input-append\">\r\n                    <form>\r\n                        <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\r\n                        <button type=\"submit\" class=\"btn\" data-action=\"search\" title=\"Search text in comments\">\r\n                            <i class=\"icon-search\"></i>\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </span>\r\n        </h2>\r\n    </div>\r\n\r\n    <div class = 'pagination'>\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.onlyOnePage), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    </div>\r\n\r\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.comments) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.comments); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.comments) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class = 'pagination'>\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.firstPage), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.onlyOnePage), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    </div>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
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
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.program(10, program10, data),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n\r\n                    <td>";
  stack2 = helpers.unless.call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = (depth2 && depth2.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/courses/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.amountOfStudents) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.amountOfStudents); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Courses</li>\r\n\r\n    </ul>\r\n\r\n    <h2>\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\r\n\r\n        <span class=\"pull-right\">\r\n            <div class=\"input-append\">\r\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\r\n                <button class=\"btn\" data-action=\"search\" title=\"Search for courses\">\r\n                    <i class=\"icon-search\"></i>\r\n                </button>\r\n            </div>\r\n        </span>\r\n\r\n    </h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n                <th>Exercises</th>\r\n                ";
  stack2 = helpers.unless.call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data};
  if (stack2 = helpers.courses) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.courses); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.courses) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\r\n\r\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray' title='Change code view settings'></i></a>\r\n\r\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\r\n\r\n        <div class='modal-header'>\r\n\r\n            <header>\r\n\r\n                <button type='button' class='close' data-dismiss='modal' title='Close the settings dialog without saving any changes'>×</button>\r\n\r\n                <h1>Code viewer settings</h1>\r\n\r\n            </header>\r\n\r\n        </div>\r\n\r\n        <div class='modal-body'>\r\n\r\n            <form class='form-horizontal'>\r\n\r\n                <fieldset>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='checkbox'>\r\n                            <input type='checkbox' data-id='ignore-empty-lines' title='Ignore empty lines when calculating differences between two snapshots' checked> Ignore empty lines (improves diff results)\r\n                        </label>\r\n\r\n                    </div>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='control-label' for='theme'>Theme</label>\r\n\r\n                        <div class='controls'>\r\n\r\n                            <select data-id='theme' title='Choose the color scheme for the code viewer'>\r\n                                <option value='ace/theme/light'>Light</option>\r\n                                <option value='ace/theme/dark'>Dark</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class='control-group'>\r\n\r\n                        <label class='control-label' for='font-size'>Font size</label>\r\n\r\n                        <div class='controls'>\r\n\r\n                            <select data-id='font-size' title='Choose the font size for the code viewer'>\r\n                                <option value='11'>Small</option>\r\n                                <option value='12' selected>Normal</option>\r\n                                <option value='13'>Larger</option>\r\n                                <option value='14'>Large</option>\r\n                                <option value='15'>Extra Large</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                </fieldset>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n        <div class='modal-footer'>\r\n\r\n            <button class='btn' data-dismiss='modal' title='Close the settings dialog without saving any changes'>Cancel</button>\r\n            <button data-action='save' class='btn btn-primary' data-dismiss='modal' title='Apply new settings and close the dialog'>Save</button>\r\n\r\n        </div>\r\n\r\n</footer>\r\n";
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
  buffer += escapeExpression(((stack1 = helpers.filename || (depth0 && depth0.filename)),stack1 ? stack1.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</h1>\r\n\r\n        <span class='pull-right'>\r\n\r\n            + ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || (depth0 && depth0.duration)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "\r\n\r\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\r\n\r\n               data-original-title='\r\n\r\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\r\n                    <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + "</time>\r\n\r\n               '\r\n\r\n               data-content='\r\n\r\n                <dl class=\"dl-horizontal pull-left\">\r\n\r\n                  <dt>Change</dt>\r\n                  <dd>";
  if (stack2 = helpers.percentageOfChange) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.percentageOfChange); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " %</dd>\r\n\r\n                  <dt>Insert</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\r\n\r\n                  <dt>Modify</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\r\n\r\n                  <dt>Delete</dt>\r\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.pluralize || (depth0 && depth0.pluralize)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\r\n\r\n                </dl>\r\n\r\n            '><i class='icon-info-sign icon-gray' title='Show snapshot statistics'></i></a>\r\n\r\n        </span>\r\n\r\n    </section>\r\n\r\n    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.split), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
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
  else { stack1 = (depth0 && depth0['class']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseId), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li><a href='./#/courses/'>Courses</a> <span class='divider'>/</span></li>\r\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/students/'>Students</a> <span class='divider'>/</span></li>\r\n                <li><a href='./#/courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses/";
  if (stack1 = helpers.courseId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n                <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            ";
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
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(19, program19, data, depth1),fn:self.programWithDepth(14, program14, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program14(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.viewPath), {hash:{},inverse:self.programWithDepth(17, program17, data, depth2),fn:self.programWithDepth(15, program15, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    ";
  return buffer;
  }
function program15(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                            <td class='link'><a href='./#/courses/"
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
    + "</a></td>\r\n\r\n                        ";
  return buffer;
  }

function program17(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                            <td class='link'><a href='./#/students/"
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
    + "</a></td>\r\n\r\n                        ";
  return buffer;
  }

function program19(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = (depth2 && depth2.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.viewPath), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <li class='active'>Exercises</li>\r\n\r\n    </ul>\r\n\r\n    <h2>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Exercises ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data};
  if (stack2 = helpers.exercises) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.exercises); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.exercises) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<i id=\"settingsModalButton\" class=\"icon-wrench icon-gray pull-left\" title=\"Change Code Browser settings\"></i>\r\n\r\n<p>Open source project by the Department of Computer Science, University of Helsinki - <a href=\"http://github.com/codebrowser/web-client\" target=\"_blank\">View source on GitHub</a></p>\r\n";
  });

this["Handlebars"]["templates"]["Navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\r\n      	<li><a href=\"./#/studentgroups\">Tags</a></li>\r\n      ";
  }

function program3(depth0,data) {
  
  
  return "\r\n      	<li><a href=\"./#/tagnames\">Tags</a></li>\r\n      ";
  }

function program5(depth0,data) {
  
  
  return "\r\n      	<li><a href=\"./#/tagcategories\">Tag categories</a></li>\r\n      ";
  }

function program7(depth0,data) {
  
  
  return "\r\n      	<li><a href=\"./#/comments\">Comments</a></li>\r\n      ";
  }

function program9(depth0,data) {
  
  
  return "\r\n\r\n        <button class='btn btn-small pull-right' id='startTour' title='Start a tour'>\r\n            <i class='icon-question-sign icon-gray'></i>\r\n        </button>\r\n\r\n    ";
  }

  buffer += "<nav class='navbar navbar-default' role='navigation'>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a href=\"./#\">Home</a></li>\r\n\r\n      <li><a href=\"./#/students\">Students</a></li>\r\n\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showStudentgroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n      <li><a href=\"./#/courses\">Courses</a></li>\r\n\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTags), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showComments), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tourEnabled), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</nav>\r\n\r\n";
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
  else { stack1 = (depth0 && depth0.courseId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises/";
  if (stack2 = helpers.exerciseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.exerciseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/";
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
    + "</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack2 = helpers.studentId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.studentId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/courses/";
  if (stack2 = helpers.courseId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.courseId); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
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
    + "</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRoute), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Snapshots</li>\r\n\r\n    </ul>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\r\n            <li><a href='./#/studentgroups'>Student groups</a></li>\r\n        ";
  }

function program3(depth0,data) {
  
  
  return "\r\n            <li><a href='./#/tagnames'>Tags</a></li>\r\n        ";
  }

function program5(depth0,data) {
  
  
  return "\r\n            <li><a href='./#/tagcategories'>Tag categories</a></li>\r\n        ";
  }

function program7(depth0,data) {
  
  
  return "\r\n            <li><a href='./#/comments'>Comments</a></li>\r\n        ";
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n        <li class='active'>Home</li>\r\n    </ul>\r\n\r\n    <ul class='nav nav-tabs nav-stacked selection'>\r\n        <li><a href='./#/students'>Students</a></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showStudentGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li><a href='./#/courses'>Courses</a></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTags), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showTagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showComments), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    </ul>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SelectContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Select</li>\r\n    </ul>\r\n\r\n    <h2>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Select view mode</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <tbody>\r\n\r\n            <ul class=\"nav nav-tabs nav-stacked selection\">\r\n                <li class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>View students of the course</a></td>\r\n                <li class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>View exercises of the course</a></td>\r\n            </ul>\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SettingsModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\r\n            <div id=\"capability-report\" class=\"text-center\">\r\n            ";
  }

function program3(depth0,data) {
  
  
  return "\r\n            <div id=\"capability-report\" class=\"text-center\" style=\"display:none;\">\r\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n                    <tr>\r\n                        <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                        <td>\r\n                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.program(11, program11, data),fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                        </td>\r\n                        <td>\r\n                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                        </td>\r\n                    </tr>\r\n                    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\r\n                                <i class=\"fa fa-2x fa-check\" title=\"Verified\"></i>\r\n                                ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                <i class=\"fa fa-2x fa-warning\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\r\n                                ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <i class=\"fa fa-2x fa-question-circle\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.error)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\r\n                            ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <input class=\"toggleEnabled\" type=\"checkbox\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" checked>\r\n                            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <input class=\"toggleEnabled\" type=\"checkbox\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\r\n            <button id=\"saveButton\" class=\"btn btn-primary\" data-action=\"save\" title=\"Apply new settings and close the dialog\">Save</button>\r\n            ";
  }

function program19(depth0,data) {
  
  
  return "\r\n            <button id=\"saveButton\" class=\"btn btn-primary\" data-action=\"save\" title=\"Apply new settings and close the dialog\" disabled>Save</button>\r\n            ";
  }

  buffer += "<div id=\"modal-dialog\" role=\"dialog\" aria-hidden=\"true\">\r\n\r\n    <div class=\"modal-content\">\r\n\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" id=\"closeButton\" class=\"close\" aria-hidden=\"true\" title=\"Close the settings dialog without saving any changes\">×</button>\r\n            <h3 id=\"myModalLabel\">Settings</h3>\r\n        </div>\r\n\r\n        <div class=\"modal-body inline\">\r\n            <label for=\"apiUrl\">Server URL</label>\r\n            <input id=\"apiUrl\" type=\"text\" value=\"";
  if (stack1 = helpers.apiUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.apiUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"URL of the backend that provides the data for Code Browser\"/>\r\n            <button id=\"applyButton\" class=\"btn btn-primary\">Apply</button>\r\n\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.applied), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Feature</th>\r\n                            <th>Check status</th>\r\n                            <th>Enabled</th>\r\n                        </tr>\r\n                    </thead>\r\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.capabilities), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </table>\r\n\r\n                <button id=\"checkButton\" class=\"btn btn-small\">Check back-end capabilities</button>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button id=\"cancelButton\" class=\"btn\" aria-hidden=\"true\" title=\"Close the settings dialog without saving any changes\">Cancel</button>\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.applied), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotCommentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section id='snapshot-comment-form'>\r\n\r\n    <div class=\"accordion-heading\">\r\n\r\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" href=\"#postComment\">\r\n        <i class='icon-comment icon-gray'></i> Post a comment\r\n      </a>\r\n\r\n    </div>\r\n\r\n    <div id=\"postComment\" class=\"accordion-body collapse\">\r\n      <div class=\"accordion-inner\">\r\n\r\n        <form class='form-horizontal'>\r\n\r\n            <div class='control-group'>\r\n\r\n                <label class='control-label' for='comment-username'>Username</label>\r\n\r\n                <div class='controls'>\r\n                    <input type='text' data-id='comment-username' placeholder='Username' value='";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.username); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "' title='Name that will be shown to other users'>\r\n                </div>\r\n            </div>\r\n\r\n            <div class='control-group'>\r\n\r\n                <label class='control-label' for='comment-type'>Comment on</label>\r\n\r\n                <div class='controls btn-group' data-toggle='buttons-radio'>\r\n                    <button name='comment-type' type='button' data-action='solution-comment' class='btn active' title='Comment on the entire solution'>\r\n                        <i class='icon-answer icon-gray'></i>\r\n                        solution\r\n                    </button>\r\n\r\n                    <button name='comment-type' type='button' data-action='snapshot-comment' class='btn' title='Comment on the current snapshot'>\r\n                        <i class='icon-snapshot icon-gray'></i>\r\n                        snapshot\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class='control-group'>\r\n\r\n                <label class='control-label' for='comment-text'>Comment</label>\r\n\r\n                <div class='controls'>\r\n                    <textarea rows='8' data-id='comment-text'></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class='control-group'>\r\n\r\n                <div class='controls'>\r\n                    <button type='submit' class='btn btn-primary' data-action='create-comment' class='Submit comment'>Submit</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotDataContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tests), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<p>Complete: ";
  if (stack1 = helpers.percentageOfTestsPassing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.percentageOfTestsPassing); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</p>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <div class=\"tests ";
  if (stack1 = helpers.passed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.passed); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <p class=\"test-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n            <p class=\"test-message\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.message); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n        </div>\r\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n    <div><p>No test data.</p></div>\r\n";
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
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.courseRoute), {hash:{},inverse:self.programWithDepth(7, program7, data, depth2),fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                    <li data-id='";
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
    + "</a></li>\r\n\r\n                ";
  return buffer;
  }

function program7(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                    <li data-id='";
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
    + "</a></li>\r\n\r\n                ";
  return buffer;
  }

  buffer += "<header>\r\n\r\n    <h1><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n\r\n</header>\r\n\r\n<ul>\r\n\r\n        ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n</ul>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\r\n\r\n    <div id='editor-modes' class='span2'>\r\n\r\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button' title='Show file list'>\r\n            <i class='icon-folder icon-gray'></i>\r\n        </button>\r\n        <button id='split' type='button' class='btn' data-toggle='button'>\r\n            <i class='icon-split-editor icon-gray' title='Show side-by-side comparison of file contents'></i>\r\n        </button>\r\n        <button id='diff' type='button' class='btn' data-toggle='button' title='Highlight changed lines (BLUE: inserted, RED: deleted, GREEN: modified)'>\r\n            <i class='icon-diff icon-gray'></i>\r\n        </button>\r\n\r\n    </div>\r\n\r\n    <div id='visualization-settings' class='span6'>\r\n\r\n        <button id='toggleTimeline' class='btn' title='Show timeline'>\r\n            <i class='icon-time icon-gray'></i>\r\n        </button>\r\n        <button id='toggleTree' class='btn'>\r\n            <i class='icon-tree icon-gray' title='Show timelines for each file'></i>\r\n        </button>\r\n        <button id='toggleTestOutput' class='btn' title='Show test results and output'>\r\n            <i class='icon-ok icon-gray'></i>\r\n        </button>\r\n        <button id='toggleConceptBubbles' class='btn' title='Show concept bubble chart'>\r\n            <i class='icon-bubble icon-gray'></i>\r\n        </button>\r\n        <button id='toggleConceptHeatmap' class='btn' title='Show concept heat map'>\r\n            <i class='icon-fire icon-gray'></i>\r\n        </button>\r\n\r\n    </div>\r\n\r\n\r\n    <div id='snapshot-navi' class='span4 pull-right'>\r\n\r\n        <div class='row'>\r\n\r\n            <div class='span1 text-center'>";
  if (stack1 = helpers.current) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.current); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.total); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n\r\n            <div class='span3'>\r\n\r\n                <div class='btn-group pull-right'>\r\n                    <button type='button' id='first' class='btn' title='Go to first snapshot'>First</button>\r\n                    <button type='button' id='previous' class='btn' title='Go to previous snapshot'>Previous</button>\r\n                    <button type='button' id='next' class='btn' title='Go to next snapshot'>Next</button>\r\n                    <button type='button' id='last' class='btn' title='Go to last snapshot'>Last</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotTagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n\r\n        <ul>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tags); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        </ul>\r\n\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                    <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagName)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <button type='button' data-action='delete' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove this tag'>×</button></li>\r\n\r\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n\r\n        <ul>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tags); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        </ul>\r\n\r\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.visible), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagName)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<button type='button' data-action='delete' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove this tag'>×</button></li>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <header>\r\n\r\n        <h1><i class='icon-tags icon-gray'></i> Tags</h1>\r\n\r\n    </header>\r\n\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class='input-append'>\r\n\r\n        <form>\r\n\r\n            <input type='text' data-id='tag' placeholder='New tag…'>\r\n\r\n            <button title='Add new tag to this solution' type='submit' data-action='create-tag' class='btn'>+</button>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</section>\r\n\r\n<section>\r\n    <header>\r\n\r\n        <h1><i class='icon-tags icon-gray'></i> Tags (Snapshot)</h1>\r\n\r\n    </header>\r\n\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class='input-append'>\r\n\r\n        <form>\r\n\r\n            <input type='text' data-id='snapshot-tag' placeholder='New snapshot tag…'>\r\n\r\n            <button title='Add new tag to this snapshot' type='submit' data-action='create-snapshot-tag' class='btn'>+</button>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\r\n\r\n    <div class='span2'>\r\n\r\n        <time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + "</time>\r\n\r\n    </div>\r\n\r\n    <div class='center text-center'>. . .</div>\r\n\r\n    <div class='span3 pull-right'>\r\n\r\n        <time class='pull-right'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.date || (depth0 && depth0.date)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), false, options)))
    + " (+ ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.duration || (depth0 && depth0.duration)),stack1 ? stack1.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.snapshotTime), options)))
    + ")</time>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentGroupsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/students/";
  if (stack1 = helpers.studentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.studentId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    <td class='link'><a href='./#/studentgroups/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/students'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Student groups</li>\r\n\r\n    </ul>\r\n\r\n    <h2>\r\n        Student groups ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroups)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\r\n\r\n        <span class=\"pull-right\">\r\n            <div class=\"input-append\">\r\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\r\n                <button class=\"btn\" data-action=\"search\" title=\"Search for student groups\">\r\n                    <i class=\"icon-search\"></i>\r\n                </button>\r\n            </div>\r\n        </span>\r\n\r\n    </h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Name</th>\r\n                <th>Students</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.studentGroups) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.studentGroups); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.studentGroups) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='./#/studentgroups'>Student groups</a> <span class='divider'>/</span></li>\r\n            <li><a href='./#/studentgroups/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.studentGroup)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\r\n\r\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.exercise), {hash:{},inverse:self.program(13, program13, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\r\n\r\n            ";
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
  buffer += "\r\n\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\r\n\r\n            ";
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
  
  
  return "\r\n                    <th>Courses</th>\r\n                ";
  }

function program18(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.program(24, program24, data),fn:self.programWithDepth(19, program19, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    ";
  stack2 = helpers.unless.call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program19(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.exercise), {hash:{},inverse:self.programWithDepth(22, program22, data, depth2),fn:self.programWithDepth(20, program20, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    ";
  return buffer;
  }
function program20(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                            <td class='link'><a href='./#/courses/"
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
    + "</a></td>\r\n\r\n                        ";
  return buffer;
  }

function program22(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n                            <td class='link'><a href='./#/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth3 && depth3.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                        \r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.exercise), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentGroup), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Students</li>\r\n    </ul>\r\n\r\n\r\n    <h2>\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentGroup), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <span class=\"pull-right\">\r\n            <div class=\"input-append\">\r\n                <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\r\n                <button class=\"btn\" data-action=\"search\" title=\"Search for students\">\r\n                    <i class=\"icon-search\"></i>\r\n                </button>\r\n            </div>\r\n        </span>\r\n\r\n    </h2>\r\n\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n\r\n                <th>#</th>\r\n                <th>Name</th>\r\n\r\n                ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(18, program18, data, depth0),data:data};
  if (stack1 = helpers.students) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.students); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TagCategoriesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n            <tr>\r\n\r\n                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                <td class='link'><a href='./#/tagcategories/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tagnames'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n\r\n                <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagnames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\r\n\r\n                <td><button type='button' data-action='delete-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Delete this tag category'>×</button></td>\r\n\r\n            </tr>\r\n\r\n        ";
  return buffer;
  }

  buffer += "\r\n<ul class='breadcrumb'>\r\n\r\n    <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n    <li>Tag categories</li>\r\n\r\n</ul>\r\n\r\n<h2>Tag categories ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategories)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n<div class='input-append'>\r\n\r\n    <form>\r\n\r\n        <input type='text' data-id='category' placeholder='New tag category…'>\r\n\r\n        <button title='Add new tag category' type='submit' data-action='create-category' class='btn'>+</button>\r\n\r\n    </form>\r\n\r\n</div>\r\n\r\n<table class='table table-hover'>\r\n\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>Tag category</th>\r\n            <th>Tag Count</th>\r\n        </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n\r\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.tagCategories) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.tagCategories); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.tagCategories) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n    </tbody>\r\n\r\n</table>";
  return buffer;
  });

this["Handlebars"]["templates"]["TagNamesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n            <li><a href='./#/tagcategories'>Tag categories</a><span class='divider'>/</span></li>\r\n            <li class='active'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n            <li class='active'>Tags</li>\r\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n        <div class=\"add-to-categories\">\r\n            <div class=\"category-list\">\r\n                <div class=\"scroll up-scroll\"><i class='icon-arrow-up'></i></div>\r\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.tagCategories) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.tagCategories); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.tagCategories) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <div class=\"scroll down-scroll\"><i class='icon-arrow-down'></i></div>\r\n            </div>\r\n        </div>\r\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <p class=\"tag-category\" id='";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n                ";
  return buffer;
  }

function program8(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                <td class='double-list triple-list'>\r\n\r\n                    <h2>Unused tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.unusedTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n                    <table class='table table-hover'>\r\n\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Tag</th>\r\n                            </tr>\r\n                        </thead>\r\n\r\n                        <tbody>\r\n                            ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth1),data:data};
  if (stack2 = helpers.unusedTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.unusedTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.unusedTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </td>\r\n            ";
  return buffer;
  }
function program9(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                                <tr>\r\n                                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n                                    <td><span class='button button-add' id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' data-action=\"add-to-category\" title='Add tag to category'>+</span></td>\r\n                                </tr>\r\n                            ";
  return buffer;
  }

function program11(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                            <tr>\r\n\r\n                                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                                ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.tagCategory), {hash:{},inverse:self.program(14, program14, data),fn:self.programWithDepth(12, program12, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                            </tr>\r\n\r\n                        ";
  return buffer;
  }
function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n                                    <td><button type='button' data-action='delete-from-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete' title='Remove tag from category'>×</button></td>\r\n                                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                    <td class='link' draggable='true' id='";
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
    + "</a></td>\r\n                                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tags)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                                ";
  return buffer;
  }

function program16(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                            <tr>\r\n\r\n                                <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                                ";
  stack2 = helpers['if'].call(depth0, (depth1 && depth1.tagCategory), {hash:{},inverse:self.program(14, program14, data),fn:self.programWithDepth(17, program17, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                            </tr>\r\n\r\n                        ";
  return buffer;
  }
function program17(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n                                    <td class='link'><a href='./#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/tags'>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></td>\r\n                                    <td><button type='button' data-action='delete-from-category' data-id='";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "' class='delete'>×</button></td>\r\n                                ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategory), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        \r\n\r\n    </ul>\r\n\r\n    <button id=\"downloadTagListJson\" class=\"btn\" title=\"Download list of tags in JSON format\">Export tags as JSON</button>\r\n\r\n    <span class=\"pull-left add-message\"></span>\r\n\r\n    <span class=\"pull-right\">\r\n        <div class=\"input-append\">\r\n            <input type=\"text\" class=\"span2\" placeholder=\"Search\" data-id=\"query-string\" />\r\n            <button class=\"btn\" data-action=\"search\" title=\"Search for tags\">\r\n                <i class=\"icon-search\"></i>\r\n            </button>\r\n        </div>\r\n    </span>\r\n\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategories), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <table class='double-list'>\r\n\r\n        <tr>\r\n\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unusedTagNames), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            <td class='double-list-left'>\r\n\r\n                <h2>Tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exerciseAnswerTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n                <table class='table table-hover'>\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Tag</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n\r\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth0),data:data};
  if (stack2 = helpers.exerciseAnswerTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.exerciseAnswerTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.exerciseAnswerTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n            </td>\r\n\r\n            <td class='double-list-right'>\r\n\r\n                <h2>Snapshot tags ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.snapshotTagNames)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n                <table class='table table-hover'>\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Tag</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n\r\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(16, program16, data, depth0),data:data};
  if (stack2 = helpers.snapshotTagNames) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.snapshotTagNames); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.snapshotTagNames) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n            </td>\r\n\r\n        </tr>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li><a href='/#/tagcategories'>Tag categories</a><span class='divider'>/</span></li>\r\n            <li><a href='/#/tagcategories/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/tagnames'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tagCategory)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><span class='divider'>/</span></li>\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n\r\n                <tr>\r\n\r\n                    <td class='index'>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.index || (depth0 && depth0.index)),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "index", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</td>\r\n\r\n                    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.snapshot), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    <td class='link'><a href=\"./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\r\n\r\n                </tr>\r\n\r\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/"
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
    + " (Snapshot)</a></td>\r\n\r\n                    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n                        <td class='link'><a href='./#/students/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'><i class='icon-answer icon-gray icon-intext'/> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\r\n\r\n                    ";
  return buffer;
  }

  buffer += "<section>\r\n\r\n    <ul class='breadcrumb'>\r\n\r\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tagCategory), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <li class='active'>Tags</li>\r\n\r\n    </ul>\r\n\r\n    <h2>Tags — ";
  if (stack1 = helpers.tagNameText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.tagNameText); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.tags)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</h2>\r\n\r\n    <table class='table table-hover'>\r\n\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                    <th>Tagged answer or snapshot</th>\r\n                <th>Student</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.tags) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.tags); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.tags) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n</section>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["TreeFilenameContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n\r\n    <div class='visualization-filename'>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div>\r\n\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.filenames) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.filenames); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.filenames) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotConceptsBubbleIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show concepts</strong>\r\n\r\n<p>\r\n    Shows the concepts of the current snapshot.\r\n</p>\r\n\r\n";
  });

this["Handlebars"]["templates"]["SnapshotConceptsHeatmapIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show concepts heatmap</strong>\r\n\r\n<p>\r\n    Shows all concepts on given solution.\r\n    Dark coloured cells are snapshots where value is high.\r\n</p>";
  });

this["Handlebars"]["templates"]["SnapshotDataIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show snapshot data</strong>\r\n\r\n<p>\r\n    Shows the test outputs of current snapshot.\r\n</p>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotEditorIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot content</strong>\r\n\r\n<p>\r\n    Here you can see the actual code.\r\n</p>";
  });

this["Handlebars"]["templates"]["SnapshotEditorModesIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot editor modes</strong>\r\n\r\n<p>\r\n    <i class=\"icon-folder icon-gray\"></i>\r\n    Show snapshot file list and tags\r\n<p>\r\n\r\n<p>\r\n    <i class=\"icon-split-editor icon-gray\"></i>\r\n    You can split the editor in half and see previous and current snapshots code side-by-side.\r\n<p>\r\n\r\n<p>\r\n    <i class=\"icon-diff icon-gray\"></i>\r\n    Toggle diff to see changed lines:\r\n    <ul>\r\n        <li><i style='color:green'>Green</i> is new inserted line</li>\r\n        <li><i style='color:red'>Red</i> deleted line</li>\r\n        <li><i style='color:blue'>Blue</i> modified line</li>\r\n    </ul>\r\n</p>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotEditorSettingsIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Snapshot editor setting</strong>\r\n\r\n<p>\r\n    Change the settings of editor view. You can set diff to ignore empty lines.\r\n</p>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotNavigationIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Browse snapshots</strong>\r\n\r\n<p>\r\n    You can also navigate using left and right arrow keys,\r\n    using slider or by clicking single snapshot in visualizations.\r\n</p>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotTimelineIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show timeline</strong>\r\n\r\n<p>\r\n    Shows the amount of change and time elapsed between snapshots.\r\n</p>\r\n\r\n<ul>\r\n    <li><i style=\"color:grey\">Grey</i> circle if code won't compile.</li>\r\n    <li>Amount of failing tests in <i style=\"color:red\">red</i></li>\r\n    <li>Passing tests in <i style=\"color:green\">green</i></li>\r\n</ul>\r\n";
  });

this["Handlebars"]["templates"]["SnapshotTreeIntro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<strong>Show file timeline</strong>\r\n\r\n<p>\r\n    Size of the circle shows the file size in given snapshot.\r\n    Type of modification is shown at the border:\r\n    <ul>\r\n        <li><i style='color:green'>Green</i> - new lines</li>\r\n        <li><i style='color:red'>Red</i> - deleted lines</li>\r\n        <li><i style='color:blue'>Blue</i> - modified lines</li>\r\n    </ul>\r\n</p>\r\n\r\n\r\n";
  });
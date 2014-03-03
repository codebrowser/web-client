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
  
  
  return "\r\n\r\n        <button class='btn pull-right' id='startTour' title='Start a tour'>\r\n            <i class='icon-info-sign icon-gray'></i> Help\r\n        </button>\r\n\r\n    ";
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
  });;

/* exported config */

/* Global configuration */

var config = {

    /* Storage keys */

    storage: {

        setting: {

            editor: {

                ignoreEmptyLines: 'codebrowser.setting.editor.ignoreEmptyLines',
                theme:            'codebrowser.setting.editor.theme',
                fontSize:         'codebrowser.setting.editor.fontSize'

            }
        },

        view: {

            SnapshotView: {

                browser: 'codebrowser.view.SnapshotView.browser'

            },

            EditorView: {

                split: 'codebrowser.view.EditorView.split',
                diff: 'codebrowser.view.EditorView.diff'

            }
        }
    },

    /* API */

    api: {

        main: {

            root: localStorage.getItem('config.apiUrl') ? localStorage.getItem('config.apiUrl') : 'http://t-jamikarv.users.cs.helsinki.fi/codebrowser/app/'

        }
    },

    /* Cache */

    cache: {

        expires: 3600

    },

    /* View */

    view: {

        container: '#container'

    },

    /* Comment view configuration */

    commentsView: {

        pageSize: 10

    },

    /* Ace editor */

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);
            editor.getSession().setFoldStyle('markbeginend');

            // Text
            editor.setTheme(localStorage.getItem(config.storage.setting.editor.theme) || 'ace/theme/light');
            editor.setFontSize(parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10) || 12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
;

/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    controller: {},
    router: {},

    initialize: function () {

        // Oops! Catch all global unhandled errors
        window.onerror = function (error) {

            var errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops! ' + error } });
            codebrowser.controller.ViewController.push(errorView, true);
        }

        $('#navigation-container').html((this.navigation = new codebrowser.view.NavigationView()).render().el);

        // Initialise footer
        $('#footer-container').html((this.footer = new codebrowser.view.FooterView()).render().el);

        // Initialise routers
        codebrowser.app.rootRouter = new codebrowser.router.RootRouter();
        codebrowser.app.studentRouter = new codebrowser.router.StudentRouter();
        codebrowser.app.studentGroupRouter = new codebrowser.router.StudentGroupRouter();
        codebrowser.app.courseRouter = new codebrowser.router.CourseRouter();
        codebrowser.app.exerciseRouter = new codebrowser.router.ExerciseRouter();
        codebrowser.app.snapshotRouter = new codebrowser.router.SnapshotRouter();
        codebrowser.app.tagRouter = new codebrowser.router.TagRouter();
        codebrowser.app.selectRouter = new codebrowser.router.SelectRouter();
        codebrowser.app.commentRouter = new codebrowser.router.CommentRouter();

        // History
        Backbone.history.start();
    }
}
;

codebrowser.helper.AceMode = {

    mode: {

        'c':    'c_cpp',
        'css':  'css',
        'h':    'c_cpp',
        'htm':  'html',
        'html': 'html',
        'java': 'java',
        'js':   'javascript',
        'json': 'json',
        'rb':   'ruby',
        'xml':  'xml',
        'yml':  'yaml'

    },

    getModeForFilename: function (filename) {

        // Fallback to text
        var mode = 'text';

        // Can determine filename extension
        if (filename.indexOf('.') !== -1 && filename.indexOf('.') !== 0) {

            var split = filename.split('.');
            var filenameExtension = split[split.length - 1];

            // Set mode or fallback to text if no mode is specified for the filename extension
            mode = this.mode[filenameExtension] || mode;
        }

        return 'ace/mode/' + mode;
    }
}
;

Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.toString();
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});;

Handlebars.registerHelper('date', function (date, precise) {

    if (precise) {
        return moment(new Date(date)).format('D.M.YYYY HH.mm.ss');
    }

    return moment(new Date(date)).format('D.M.YYYY HH.mm');
});
;

codebrowser.helper.Duration = {

    calculate: function (time, previousTime, simplify) {

        var difference = time - previousTime;

        var value;
        var timeUnit;

        var seconds = Math.round(difference / 1000);

        if (seconds > 60) {

            var minutes = Math.round(seconds / 60);

            if (minutes > 60) {

                var hours = Math.round(minutes / 60);

                if (hours > 24) {

                    var days = Math.round(hours / 24);

                    value = days;
                    timeUnit = 'day';

                } else {

                    value = hours;
                    timeUnit = 'hour';
                }

            } else {

                value = minutes;
                timeUnit = 'minute';
            }

        } else {

            value = seconds;
            timeUnit = 'second';
        }

        if (value !== 1) {
            timeUnit += 's';
        }

        if (simplify) {
            timeUnit = timeUnit.slice(0, 1);
        }

        return value + ' ' + timeUnit;
    }
}

Handlebars.registerHelper('duration', function (time, previousTime) {

    return codebrowser.helper.Duration.calculate(time, previousTime);
});
;

Handlebars.registerHelper('filename', function (name) {

    return _.last(name.split('/'));
});
;

Handlebars.registerHelper('index', function (index) {

    return index + 1;
});
;

codebrowser.helper.ListViewFilter = function(options) {

    // default selector for elements to filter
    this.rowSelector = 'tbody tr';

    // default selector inside single element
    this.targetCellSelector = 'td:eq(1) a';

    // default where to find search input string
    this.searchInputSelector = 'input[data-id="query-string"]';

    // default container element selector
    this.containerSelector = 'body';

    if (options) {

        this.rowSelector = options.rowSelector || this.rowSelector;
        this.targetCellSelector = options.targetCellSelector || this.targetCellSelector;
        this.searchInputSelector = options.searchInputSelector || this.searchInputSelector;
        this.containerSelector = options.containerSelector || this.containerSelector;
    }

    this.filterList = function () {

        var query = this._getQueryString().toLowerCase();

        var $tableRows = $(this.containerSelector).find(this.rowSelector);

        var that = this;

        // first show all and clean highlights
        $tableRows.each(function() {

            $(this).show();

            var cell =  $(this).find(that.targetCellSelector);
            var cellText = cell.text();

            cell.html(_.escape(cellText));
        });

        if (query !== '') {

            $tableRows.each(function() {

                var $nameCell = $(this).find(that.targetCellSelector);

                if ( that._nodeTextContains($nameCell, query) ) {

                    that._highlightMatch($nameCell, query);
                } else {

                    $nameCell.text( $nameCell.text() );
                    $(this).hide();
                }
            });
        }
    };

    this._getQueryString = function () {

        return $(this.containerSelector).find(this.searchInputSelector).val().trim();
    };

    this._nodeTextContains = function ($node, query) {

        return $node.text().toLowerCase().indexOf(query) !== -1;
    };

    this._highlightMatch = function ($node, query) {
        // wrap matched part of nodes text in span

        var text = $node.text();
        var i = text.toLowerCase().indexOf(query);
        var l = query.length;

        var highlighted = _.escape(text.substring(0, i)) + '<span class="search-highlight">' +
                _.escape(text.substring(i, i + l)) + '</span>' + _.escape(text.substring(i + l));

        $node.html(highlighted);
    };
};
;

Handlebars.registerHelper('pluralize', function (value, string) {

    if (value === 1) {
        return string;
    }

    return string + 's';
});
;

/*jshint unused: false */

var Utils = {

    getLocalStorageValue: function(name, defaultValue) {

        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, defaultValue);
        }

        return localStorage.getItem(name);

    },


    parseConceptData: function(data) {

        data.forEach(function(element) {

            element.value = parseInt(element.size, 10);

        });

        data.sort(function(a, b) {
            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });

        return { children: data };
    }

};


;

/*
 *
 */

codebrowser.model.Comment = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.attributes.student || !this.attributes.course || !this.attributes.exercise ||
                !this.attributes.student.id || !this.attributes.course.id || !this.attributes.exercise.id) {
            throw new Error('Attributes student.id, course.id and exercise.id are required to fetch a comment.');
        }

        var path = config.api.main.root +
               'students/' +
               this.attributes.student.id +
               '/courses/' +
               this.attributes.course.id +
               '/exercises/' +
               this.attributes.exercise.id;

        if (this.attributes.snapshot && this.attributes.snapshot.id) {
            path += '/snapshots/' + this.attributes.snapshot.id;
        }

        return path + '/comments';
    },

});
;

/*
 * Single concept
 */

codebrowser.model.Concept = Backbone.Model.extend({

});

;

codebrowser.model.Course = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'courses',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.model.Exercise',
            collectionType: 'codebrowser.collection.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ]
});
;

codebrowser.model.Diff = function (previousContent, content, differencesFromBackend) {

    /* Lines */

    var count = {

        replace:  0,
        insert:   0,
        'delete': 0,

        total: function () {

            return this.replace + this.insert + this['delete'];
        }
    }

    /* Differences */

    var differences = {

        insert:   [],
        replace:  [],
        'delete': [],
        all: []

    }



    this.createOperation = function (type, fromRowStart, fromRowEnd, toRowStart, toRowEnd) {

        var newOperation = [];
        newOperation.push(type);
        newOperation.push(fromRowStart);
        newOperation.push(fromRowEnd);
        newOperation.push(toRowStart);
        newOperation.push(toRowEnd);

        return newOperation;
    }

    this.createBackendDifference = function (differencesFromBackend, differences, count) {

        count.replace = differencesFromBackend.modified;
        count.insert = differencesFromBackend.inserted;
        count['delete'] = differencesFromBackend.deleted;

        differences.all = differencesFromBackend.differences;

        for (var i = 0; i < differences.all.length; i++) {

            var diff = differences.all[i];

            if (diff.type === 'insert') {
                differences.insert.push(diff);
            }

            else if (diff.type === 'replace') {
                differences.replace.push(diff);
            }

            else if (diff.type === 'delete') {
                differences['delete'].push(diff);
            }

        }
    }

    this.createFrontendDifference = function (differences, count) {
        /* Initialise */

        var from = difflib.stringAsLines(previousContent);
        var to = difflib.stringAsLines(content);

        // Create diff
        var sequenceMatcher = new difflib.SequenceMatcher(from, to);

        /* jshint camelcase: false */

        // Diff operations
        var operations = sequenceMatcher.get_opcodes();

        /* jshint camelcase: true */

        // Offset
        var offset = 0;

        for (var i = 0; i < operations.length; i++) {

            var operation = operations[i];

            var difference = {

                type:      operation[0],
                rowStart:  operation[3],
                rowEnd:    operation[4] - 1,
                offset:    offset,
                overwrite: false

            }

            // Ignore equal
            if (difference.type === 'equal') {
                continue;
            }

            // Replace
            if (difference.type === 'replace') {

                var originalDifference = _.clone(difference);

                var fromChange = operation[2] - operation[1] - 1;
                var toChange = operation[4] - operation[3] - 1;

                // Delta
                var lines = difference.rowEnd - difference.rowStart + 1;
                var changed = operation[2] - operation[1];

                // Replaced something to nothing
                if (to.slice(operation[3], operation[4]).join('').length === 0) {

                    // Should overwrite previous line
                    difference.overwrite = true;

                    difference.type = 'delete';

                    // New delete
                    if (fromChange - toChange > 0) {

                        var change = fromChange - toChange;

                        operation[2] -= change;

                        var operationChange = operation[2] - operation[1];

                        var newDelete = this.createOperation('delete',
                                                             operation[1] + operationChange,
                                                             operation[2] + change,
                                                             (operation[3] + operationChange),
                                                             operation[4]);

                        // Insert new delete
                        operations.splice(i + 1, 0, newDelete);
                    }
                }

                // Replaced nothing to something
                if (from.slice(operation[1], operation[2]).join('').length === 0) {
                    difference.type = 'insert';
                }

                // Replace contains deleted lines
                if (fromChange > toChange && difference.type !== 'delete') {

                    differences.replace.push(difference);
                    differences.all.push(difference);

                    // Increase replaced lines
                    count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                    // Delete
                    difference = originalDifference;

                    difference.type = 'delete';

                    // Move index
                    operation[1] += lines;
                    operation[3] += lines;
                }

                // Replace contains inserted lines
                if (toChange > fromChange && difference.type !== 'insert') {

                    // Replace
                    difference.rowEnd = difference.rowStart + changed - 1;

                    if (to.slice(difference.rowStart, difference.rowEnd + 1).join('').length === 0) {

                        difference.type = 'delete';
                        difference.overwrite = true;

                        var newInsert = this.createOperation('insert',
                                                             operation[1],
                                                             operation[2],
                                                             (operation[3] + (difference.rowEnd - difference.rowStart + 1)),
                                                             operation[4]);

                        operations.splice(i + 1, 0, newInsert);

                    } else {

                        differences.replace.push(difference);
                        differences.all.push(difference);

                        // Increase replaced lines
                        count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                        var insertRowStart = difference.rowEnd + 1;

                        // Insert
                        difference = originalDifference;

                        difference.type = 'insert';

                        // Insert should start from where replace ended
                        difference.rowStart = insertRowStart;
                    }
                }
            }

            // Delete
            if (difference.type === 'delete') {

                // Deleted lines
                var deletedAsLines = from.slice(operation[1], operation[2]);
                var deleted = deletedAsLines.join('\n');

                // Add line ending if we don't overwrite
                if (!difference.overwrite) {
                    deleted += '\n';
                }

                difference.rowStart = operation[3];
                difference.rowEnd = difference.rowStart + (operation[2] - operation[1] - 1);

                difference = _.extend(difference, { fromRowStart: operation[1],
                                                    fromRowEnd: operation[2] - 1,
                                                    lines: deleted });

                // Delete increases offsets if we don't overwrite
                if (!difference.overwrite) {

                    var increase = difference.rowEnd - difference.rowStart + 1;
                    offset += increase;
                }
            }

            // Increase lines
            count[difference.type] += difference.rowEnd - difference.rowStart + 1;

            differences[difference.type].push(difference);
            differences.all.push(difference);
        }
    }


    if (differencesFromBackend) {
        this.createBackendDifference(differencesFromBackend, differences, count);
    }
    else {
        this.createFrontendDifference(differences, count);
    }

    this.getCount = function () {

        return count;
    }

    this.getDifferences = function () {

        return differences;
    }
}
;

/*
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('course').url() + '/exercises';
    }
});
;

/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    totalLines : null,
    content: '',

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    getContent: function () {

        var ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);
        var content = this.content;

        // Standardise line endings
        content = content.replace(/\r\n|\r/g, '\n');

        // Convert tabs to 4 spaces
        content = content.replace(/\t/g, '    ');

        // Trim empty lines
        if (ignoreEmptyLines && ignoreEmptyLines === 'true') {
            content = content.replace(/^ +$/gm, '');
        }

        return content;
    },

    lines: function (amount) {

        if (amount) {
            this.totalLines = amount;
        }

        if (this.totalLines) {
            return this.totalLines;
        }

        return this.getContent().split('\n').length;
    },

    getFolder: function () {

        return this.get('name').substring(0, this.get('name').lastIndexOf('/'));
    },

    getName: function () {

        return _.last(this.get('name').split('/'));
    },

    /* Callback parameters (content, [error]) are the received data and possible error, respectively. */

    fetchContent: function (callback) {

        // Return content
        if (this.content.length !== 0) {

            callback(this.getContent(), null);

            return;
        }

        var self = this;

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (content) {

            self.content = content;

            callback(self.getContent(), null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
;

/*
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 *
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.api.main.root +
               'students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        },

        {
            type: Backbone.HasOne,
            key: 'course',
            relatedModel: 'codebrowser.model.Course'
        },

        {
            type: Backbone.HasOne,
            key: 'exercise',
            relatedModel: 'codebrowser.model.Exercise'
        }
    ],

    initialize: function () {

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.set('studentId', this.collection.studentId);
            this.set('courseId', this.collection.courseId);
            this.set('exerciseId', this.collection.exerciseId);
        }
    },

    getFiles: function () {

        var files = {};

        this.get('files').each(function (file) {

            var folder = file.getFolder();

            if (!files[folder]) {
                files[folder] = [];
            }

            files[folder].push(file.toJSON());
        });

        return files;
    }
});
;

codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.model.Course',
            collectionType: 'codebrowser.collection.CourseCollection'
        }
    ]
});
;

codebrowser.model.StudentGroup = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root + 'studentgroups',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'students',
            relatedModel: 'codebrowser.model.Student',
            collectionType: 'codebrowser.collection.StudentCollection',
        }
    ]
});
;

/*
 * Fetch a tag by passing a studentId, courseId and exerciseId as options for the model:
 *
 * var tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { studentId: 1, courseId: 2, exerciseId: 3 });
 *
 * Create a new tag the same way:
 *
 * var tag = new codebrowser.model.Tag({ text: 'Tag' }, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.model.Tag = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.attributes.student || !this.attributes.course || !this.attributes.exercise ||
                !this.attributes.student.id || !this.attributes.course.id || !this.attributes.exercise.id) {
            throw new Error('Attributes student.id, course.id and exercise.id are required to fetch a tag.');
        }

        var path = config.api.main.root +
               'students/' +
               this.attributes.student.id +
               '/courses/' +
               this.attributes.course.id +
               '/exercises/' +
               this.attributes.exercise.id;

        if (this.attributes.snapshot && this.attributes.snapshot.id) {
            path += '/snapshots/' + this.attributes.snapshot.id;
        }

        return path + '/tags';
    },

    //initialize: function (attributes, options) {
    //}
});
;

codebrowser.model.TagCategory = Backbone.RelationalModel.extend({

    urlRoot:  config.api.main.root + 'tagcategories',

    sync: function(method, model, options) {

		if (options.tagid) {
			options.url = config.api.main.root + 'tagcategories/' + this.id + '/tagnames/' + options.tagid;
		}

		return Backbone.sync(method, model, options);
	}

});
;

codebrowser.model.TagName = Backbone.RelationalModel.extend({

    urlRoot:  config.api.main.root + 'tagnames'
});
;

/*
 *
 *
 */

codebrowser.collection.CommentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Comment,

    comparator: function(comment) {

        // comments by timestamp in descending order
        return -comment.get('createdAt');
    },

    url: function () {

        if (this.studentId && this.courseId && this.exerciseId && this.snapshotId) {

            // Comments for given course, student, exercise and snapshot
            return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots/' +
               this.snapshotId +
               '/comments'+
               this._getQueryString();
        } else {

            // All comments
            return config.api.main.root + 'comments' + this._getQueryString();
        }
    },

    initialize: function (models, options) {

        this.pagesize = 10;

        if (options) {

            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
            this.snapshotId = options.snapshotId;
            this.page = options.page;
            this.query = options.query;
        }
    },

    /* Configure pagination and optional search string */

    _getQueryString: function() {

        var q = '?page=' + (this.page !== undefined ? this.page : 0);
        q += '&size=' + config.commentsView.pageSize;

        if (this.query !== undefined && this.query !== '') {

            q += '&query=' + encodeURIComponent(this.query);
        }

        return q;
    }

    /* Filtering currently done in backend, needed only if filtering should be done in frontend

    bySnapshotId: function (id) {

        var filtered = this.filter(function(comment) {

            var snapshot = comment.get('snapshot');

            // Collect all comments which have given id or
            // doesn't have snapshot at all (exercise comments).
            return (snapshot === null || snapshot.id === id);
        });

        return new codebrowser.collection.CommentCollection(filtered);
    },*/
});
;

/*
 * ConceptCollection is resolved through a snapshot.
 */

codebrowser.collection.ConceptCollection = Backbone.Collection.extend({

    model: codebrowser.model.Concept,

    comparator: 'name',

    initialize: function(models, options) {

        if (models) {

            this.models = models;
        }

        if (options) {

            if (options.studentId) {
                this.studentId = options.studentId;
            }

            if (options.courseId) {
                this.courseId = options.courseId;
            }

            if (options.exerciseId) {
                this.exerciseId = options.exerciseId;
            }

            if (options.snapshotId) {
                this.snapshotId = options.snapshotId;
            }
        }
    },

    url: function () {

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots/' +
               this.snapshotId +
               '/concepts';
    },

    getMaxSize : function () {

        var max = 0;

        for (var i = 0; i < this.size(); i++) {

            max = Math.max( max, this.at(i).get('size') );
        }

        return max;
    }
});
;

/*
 * Fetch all courses:
 *
 * var courses = new codebrowser.collection.CourseCollection();
 *
 * Fetch courses related to a student by passing a studentId as an option for the collection:
 *
 * var courses = new codebrowser.collection.CourseCollection(null, { studentId: 1 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        /* Fetch courses related to a student */
        if (this.studentId) {
            return config.api.main.root + 'students/' + this.studentId + '/courses';
        }

        /* Fetch all courses */
        return config.api.main.root + 'courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
        }
    }
});
;

/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ id: 1 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing a studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { studentId: 1, courseId: 2 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        if (!this.courseId) {
            throw new Error('Option courseId is required to fetch exercises.');
        }

        /* Fetch exercises related to a course */
        if (!this.studentId) {
            return config.api.main.root + 'courses/' + this.courseId + '/exercises';
        }

        /* Fetch exercises related to a student and course */
        return config.api.main.root + 'students/' + this.studentId + '/courses/' + this.courseId + '/exercises';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
        }
    }
});
;

/*
 * ConceptCollection is resolved through a snapshot.
 */

codebrowser.collection.ExerciseConceptsCollection = Backbone.Collection.extend({

    model: codebrowser.model.Concept,

    comparator: 'name',

    initialize: function(models, options) {

        if (models) {

            this.models = models;
        }

        if (options) {

            if (options.studentId) {
                this.studentId = options.studentId;
            }

            if (options.courseId) {
                this.courseId = options.courseId;
            }

            if (options.exerciseId) {
                this.exerciseId = options.exerciseId;
            }

        }
    },

    url: function () {

        return config.api.main.root +
            'students/' +
            this.studentId +
            '/courses/' +
            this.courseId +
            '/exercises/' +
            this.exerciseId +
            '/concepts/';
    },

    getMaxSize : function () {

        var max = 0;

        for (var i = 0; i < this.size(); i++) {

            max = Math.max( max, this.at(i).get('size') );
        }

        return max;
    }
});
;

/*
 * FileCollection is resolved through a snapshot.
 */

codebrowser.collection.FileCollection = Backbone.Collection.extend({

    model: codebrowser.model.File,

    url: function () {

        return config.api.main.root +
               'students/' +
               this.snapshot.get('studentId') +
               '/courses/' +
               this.snapshot.get('courseId') +
               '/exercises/' +
               this.snapshot.get('exerciseId') +
               '/snapshots/' +
               this.snapshot.id +
               '/files';
    }
});
;

/*
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,

    /* Differences */

    differencesDone: false,
    differences: [],

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    },

    getDuration: function (fromIndex, toIndex) {

        return this.at(fromIndex).get('snapshotTime') - this.at(toIndex).get('snapshotTime');
    },

    getMinDuration: function () {

        var self = this;

        var min = Number.MAX_VALUE;

        // Find min duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new min
            if (duration < min) {
                min = duration;
            }
        });

        return min;
    },

    getMaxDuration: function () {

        var self = this;

        var max = Number.MIN_VALUE;

        // Find max duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new max
            if (duration > max) {
                max = duration;
            }
        });

        return max;
    },

    getMinAndMaxFileSize: function () {

        var range = { min: Number.MAX_VALUE, max : Number.MIN_VALUE};

        this.each(function (snapshot) {

            snapshot.get('files').each(function (file) {

                var size = file.get('filesize');
                range.min = Math.min(range.min, size);
                range.max = Math.max(range.max, size);
            });
        });

        return range;
    },

    getDifference: function (index, filename) {

        var difference = this.differences[index];

        if (!difference) {
            return null;
        }

        if (!difference[filename]) {
            return null;
        }

        return difference[filename];
    },

    getDifferences: function (callback) {

        if (this.differencesDone) {

            callback(this.differences);

            return;
        }


        this.differences = [];

        var self = this;

        // Called after all snapshots have been analyzed
        var snapshotsSynced = _.after(this.length, function () {

            self.differencesDone = true;

            callback(self.differences);
        });

        if(this.at(0).get('files').models[0].attributes.diffs) {

            this.getDifferencesFromBackend(this);
            callback(self.differences);

        }

        else {

            this.getDifferencesFromFrontend(this, snapshotsSynced);

        }
    },

    getDifferencesFromFrontend: function (self, snapshotsSynced) {

        self.each(function (snapshot, index) {

            var previousSnapshot = self.at(index - 1);

            // Divide diffs by snapshot indexes
            if (!self.differences[index]) {

                self.differences[index] = {

                    total: 0,
                    lines: 0

                }
            }

            var files = snapshot.get('files');

            // Called after all files in snapshot have been analyzed
            var filesSynced = _.after(files.length, function () {

                snapshotsSynced();
            });

            // Calculate differences for every file of each snapshot
            files.each(function (file, i) {

                var filename = file.get('name');

                // Create namespace for every file name
                if (!self.differences[index].filename) {
                    self.differences[index][filename] = null;
                }

                var currentFile = file;
                var previousFile = null;

                // If previous snapshot doesn't exist, current file doesn't have earlier version of it
                if (!previousSnapshot) {

                    // Set previous file to current file
                    previousFile = currentFile;

                } else {

                    // Get previous version of the current file from the previous snapshot
                    previousFile = previousSnapshot.get('files').findWhere({ name: filename });
                }

                // Couldn't find file from previous snapshot, set previous file to current file
                if (!previousFile) {
                    previousFile = currentFile;
                }

                // Bind necessary context for fetching
                var context = {

                    currentFile: currentFile,
                    previousFile: previousFile,
                    snapshotIndex: index,
                    fileIndex: i,

                    // Wait files to be in sync
                    fileSynced: _.after(2, function () {

                        var snapshotIndex = context.snapshotIndex;

                        var filename = context.currentFile.get('name');
                        var previousContent = context.previousFile.getContent();

                        // New file
                        if (context.previousFile === context.currentFile) {
                            previousContent = '';
                        }

                        // Create difference
                        var difference = new codebrowser.model.Diff(previousContent, context.currentFile.getContent(), null);

                        // Count how many lines were in snapshot's files overall and how many lines of them changed
                        self.differences[snapshotIndex].total += difference.getCount().total();
                        self.differences[snapshotIndex].lines += context.currentFile.lines();

                        self.differences[snapshotIndex][filename] = difference;

                        // Diffed last file of last snapshot, return diffs
                        filesSynced();
                    })
                }

                // Fetch previous file only if the models are not the same
                if (previousFile !== currentFile) {

                    previousFile.fetchContent(function (content, error) {

                        if (error) {
                            throw new Error('Failed file fetch.');
                        }

                        this.fileSynced();

                    }.bind(context));
                }

                // Fetch current file
                currentFile.fetchContent(function (content, error) {

                    if (error) {
                        throw new Error('Failed file fetch.');
                    }

                    // If both models are the same, current model is a new file, set empty content to previous
                    if (this.currentFile === this.previousFile) {

                        this.fileSynced();
                    }

                    this.fileSynced();

                }.bind(context));

            });
        });
    },

    getDifferencesFromBackend: function (self) {

        this.each(function (snapshot, index) {

            // Divide diffs by snapshot indexes
            if (!self.differences[index]) {

                self.differences[index] = {

                    total: 0,
                    lines: 0

                }
            }

            var files = snapshot.get('files');


            // Calculate differences for every file of each snapshot
            files.each(function (file, i) {

                var filename = file.get('name');

                // Create namespace for every file name
                if (!self.differences[index].filename) {
                    self.differences[index][filename] = null;
                }

                var backendFile = self.at(index).get('files').models[i].attributes.diffs;

                // Count how many lines were in snapshot's files overall and how many lines of them changed
                self.differences[index].total += backendFile.total;
                self.differences[index].lines += file.lines(backendFile.lines);

                var difference = new codebrowser.model.Diff(null, null, backendFile);

                self.differences[index][filename] = difference;

            });
        });

        // Diffed last file of last snapshot, return diffs
        self.differencesDone = true;

    },

    getFiles: function() {

        var files = [];

        this.each(function (snapshot) {

            var snapshotFiles = snapshot.get('files');

            snapshotFiles.each(function (file) {

                if (files.indexOf(file.getName()) < 0) {
                    files.push(file.getName());
                }
            });
        });

        return files;
    }
});
;

codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,

    url: function () {

        if (this.studentGroupId) {
            return config.api.main.root + 'studentgroups/' + this.studentGroupId + '/students';
        }

        if (this.courseId && this.exerciseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/exercises/' + this.exerciseId + '/students';
        }

        if (this.courseId) {
            return config.api.main.root + 'courses/' + this.courseId + '/students';
        }

        return config.api.main.root + 'students';
    },

    initialize: function (models, options) {

        if (options) {
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
            this.studentGroupId = options.studentGroupId;
        }
    },

    byPartialName: function(queryString) {

        var filtered = this.filter(function(student) {
            return (student.get('name').indexOf(queryString) !== -1);
        });

        return new codebrowser.collection.StudentCollection(filtered);
    }
});
;

codebrowser.collection.StudentGroupCollection = Backbone.Collection.extend({

    model: codebrowser.model.StudentGroup,

    url: function () {

        return config.api.main.root + 'studentgroups';
    },
});
;

/*
 * Fetch tags by passing either tagNameId or studentId, courseId and exerciseId as options for the collection:
 *
 * var tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 * var tags = new codebrowser.collection.TagCollection(null, { tagNameId: 4 });
 *
 */

codebrowser.collection.TagCollection = Backbone.Collection.extend({

    model: codebrowser.model.Tag,

    url: function () {

        /* Fetch tags with given name */
        if (this.tagNameId) {
            return config.api.main.root + 'tagnames/' + this.tagNameId + '/tags';
        }

        /* Fetch tags for given course, student and exercise */
        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch tags.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/tags';
    },

    initialize: function (models, options) {

        if (options) {
            this.tagNameId = options.tagNameId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
;

codebrowser.collection.TagCategoryCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagCategory,

    url: function () {

        return config.api.main.root +
               'tagcategories';
               
    },

    initialize: function () {

    }
});
;

codebrowser.collection.TagNameCollection = Backbone.Collection.extend({

    model: codebrowser.model.TagName,

    url: function () {

        /* Fetch tags by tag category */
        if (this.tagCategoryId) {

            if (this.onlySnapshotTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/snapshots';
            }

            if (this.onlyExerciseAnswerTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/exercises';
            }

            if (this.unusedTags) {

                return config.api.main.root + 'tagcategories/' + this.tagCategoryId + '/tagnames/unused';
            }

        }

        /* Only tag names used by snapshot tags */
        if (this.onlySnapshotTags) {

            return config.api.main.root + 'tagnames/snapshots';
        }

        /* Only tag names used by normal tags */
        if (this.onlyExerciseAnswerTags) {

            return config.api.main.root + 'tagnames/exerciseanswers';
        }

        /* All tag names */
        return config.api.main.root + 'tagnames';
    },

    initialize: function (models, options) {

        if (options) {

            this.onlySnapshotTags = options.onlySnapshotTags;
            this.onlyExerciseAnswerTags = options.onlyExerciseAnswerTags;
            this.tagCategoryId = options.tagCategoryId;
            this.unusedTags = options.unusedTags;
        }
    }
});
;

codebrowser.view.CommentsView = Backbone.View.extend({

    id: 'comments-container',
    template: Handlebars.templates.CommentsContainer,

    showBreadcrumb: true,

    events: {

        'click [data-action="delete-comment"]': 'confirmDelete',
        'click [data-action="toggle-comment-edit"]': 'setCommentEditable',
        'blur .comment-text': 'updateComment',
        'click span.cnext': 'cNextPage',
        'click span.cprev': 'cPrevPage',
        'click [data-action="search"]': 'searchComments'

    },

    initialize: function (options) {

        if (options) {

            this.collection = options.collection;
            this.showBreadcrumb = options.showBreadcrumb;
        }
    },

    /* Render */

    render: function () {

        if (localStorage.getItem('config.comments') === 'false') {
            throw new Error('Your backend does not support comments.');
        }

        if (this.collection) {
            this._markCommentsReadFlags();
        }

        // View attributes
        var attributes = {

            showBreadcrumb: this.showBreadcrumb,
            firstPage: this.firstPage,
            lastPage: this.lastPage,
            totalPages: this.totalPages,
            numberOfElements: this.numberOfElements,
            totalElements: this.totalElements,
            page: parseInt(this.page, 10)+1,
            prevPage: this.page > 0 ? parseInt(this.page, 10)-1 : 0,
            nextPage: this.page < this.totalPages-1 ? parseInt(this.page, 10)+1 : this.totalPages-1,
            onlyOnePage: this.firstPage && this.lastPage ? true : false,
            snapshotView: this.snapshotView,
            query: this.query,

        };

        if (this.collection) {
            attributes = _.extend(attributes, { comments : this.collection.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        this.delegateEvents();
    },

    cNextPage: function () {

        this.page += 1;
        this.update();
    },

    cPrevPage: function () {

        this.page -= 1;
        this.update();
    },

    /* Actions */
    confirmDelete: function (event) {

        var confirmed = window.confirm('Are you sure you want\nto delete this comment?');

        if (confirmed) {

            var id = this._getEventTargetDataId(event);
            this._delete(id);
        }
    },

    update: function () {

        var self = this;

        // Re-fetch comment collection using same options (snapshot, page, query etc)
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function (data, response) {

                self.collection.reset(response.content);

                self.page = response.page;
                self.firstPage = response.firstPage;
                self.lastPage = response.lastPage;
                self.totalPages = response.totalPages;
                self.numberOfElements = response.numberOfElements;
                self.totalElements = response.totalElements;

                self.render();
            },

            error: function () {

                throw new Error('Failed comments fetch.');
            }
        });
    },

    setCommentEditable: function (event) {

        var id = this._getEventTargetDataId(event);

        var comment = this.collection.get(id);

        var $commentTextEl = $('.comment-text[data-id="' + id + '"]');
        var $textareaEl = this._createCommentTextarea(comment);

        $commentTextEl.after($textareaEl);
        $commentTextEl.remove();
        $textareaEl.focus();
    },

    updateComment: function (event) {

        var $commentElement = $(event.target);

        var id = $commentElement.data('id');
        var commentText = $commentElement.val().trim();

        var comment = this.collection.get(id);

        comment.set({'comment': commentText});

        this.render();

        // Update comment
        comment.save({
            error: function () {

                throw new Error('Failed comment update.')
            }
        });
    },

    searchComments: function(event) {

        event.preventDefault();

        var query = $('body').find('input[data-id="query-string"]').val().trim();

        var self = this;

        // Re-fetch with same options (snapshot, page etc); only change search string.
        this.collection.query = query;

        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function (data, response) {

                // Add comments as collection
                self.collection.reset(response.content);

                // Render after comments have been fetched
                self.page = 0;
                self.firstPage = response.firstPage;
                self.lastPage = response.lastPage;
                self.totalPages = response.totalPages;
                self.numberOfElements = response.numberOfElements;
                self.totalElements = response.totalElements;
                self.query = query;

                self.render();

                $('[data-id="query-string"]').focus();
            },

            error: function () {
                throw new Error('Failed comments fetch.');
            }
        });
    },

    _markCommentsReadFlags: function () {

        var commentsRead = this._getCommentsRead();
        var commentIds = commentsRead;

        this.collection.each(function(comment) {

            var id = comment.get('id');

            var isRead = (commentsRead.indexOf(id) > -1);

            comment.set('isRead', isRead, {silent: true});

            if (commentIds.indexOf(id) === -1) {
                commentIds.push(id);
            }
        });

        this._setCommentsRead(commentIds);
    },

    _getCommentsRead: function () {

        var commentsRead = localStorage.getItem('commentsRead');

        if (commentsRead === null) {

            return [];
        } else {

            return JSON.parse(commentsRead);
        }
    },

    _setCommentsRead: function (commentsRead) {

        localStorage.setItem('commentsRead', JSON.stringify(commentsRead));
    },

    _delete: function (commentId) {

        var comment = this.collection.get(commentId);

        var self = this;

        // Destroy comment
        comment.destroy({

            success: function () {

                self.update();

            },

            error: function () {

                throw new Error('Failed comment delete.');
            }
        });
    },

    _createCommentTextarea: function (comment) {

        var $textAreaEl = $('<textarea>');
        $textAreaEl.attr('data-id', comment.id);
        $textAreaEl.addClass('comment-text');
        $textAreaEl.val(comment.get('comment'));

        return $textAreaEl;
    },

    _getEventTargetDataId: function (event) {

        // event.target can be button element or it's child i element
        var id = $(event.target).data('id') || $(event.target).parent().data('id');
        return id;
    }
});

;

codebrowser.view.CoursesView = Backbone.View.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    events: {
        'click [data-action="search"]': 'filterCourseListByName',
        'keyup [data-id="query-string"]': 'filterCourseListByName',
        'keypress [data-id="query-string"]': 'filterCourseListByName'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courses: this.collection.toJSON(),
            amountOfStudents: this.collection.amountOfStudents

        };

        if (this.collection.studentId) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },

    filterCourseListByName: function() {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});
;

codebrowser.view.EditorSettingsView = Backbone.View.extend({

    id: 'editor-settings-container',
    template: Handlebars.templates.EditorSettingsContainer,

    events: {

        'click [data-action="save"]': 'save'

    },

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        this.render();
    },

    /* Render */

    render: function () {

        var ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);
        var fontSize = parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10);
        var theme = localStorage.getItem(config.storage.setting.editor.theme);

        // Template
        var output = $(this.template());

        // Restore ignore empty lines
        if (ignoreEmptyLines) {
            $('[data-id="ignore-empty-lines"]', output).prop('checked', ignoreEmptyLines === 'true');
        }

        // Restore theme
        if (theme) {
            $('[data-id="theme"] option[value="' + theme + '"]', output).prop('selected', true);
        }

        // Restore font size
        if (fontSize) {
            $('[data-id="font-size"] option[value="' + fontSize + '"]', output).prop('selected', true);
        }

        this.$el.html(output);
    },

    /* Actions */

    save: function () {

        // Ignore empty lines
        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, $('[data-id="ignore-empty-lines"]').prop('checked'));

        // Set theme
        localStorage.setItem(config.storage.setting.editor.theme, $('[data-id="theme"] option:selected', this.$el).val());

        // Set font size
        localStorage.setItem(config.storage.setting.editor.fontSize, $('[data-id="font-size"] option:selected', this.$el).val());

        // Configure
        this.parentView.configure();

        // Update
        this.parentView.update(this.parentView.previousModel, this.parentView.model);
    }
});
;

codebrowser.view.EditorView = Backbone.View.extend({

    id: 'editor-container',

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    /* Decorations */

    decorations: {

        'main-editor': [],
        'side-editor': []

    },

    /* Markers */

    markers: {

        'main-editor': [],
        'side-editor': []

    },

    /* Inserted lines */

    insertedLines: {

        'main-editor': []

    },

    /* Replaced lines */

    replacedLines: {

        'main-editor': []

    },

    events: {

        'click #editor-inspector': 'toggleInspector'

    },

    /* Split */

    split: false,

    canSplit: function () {

        return this.model !== this.previousModel;
    },

    /* Diff */

    diff: false,

    differences: new codebrowser.model.Diff('', ''),

    /* Inspector */

    inspector: false,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Elements
        this.topContainer = $('<div>', { id: 'editor-top-container' });
        this.editorElement = $('<div>', { id: 'editor' });
        this.settingsView = new codebrowser.view.EditorSettingsView({ parentView: this });

        // Elements for editors
        this.sideEditorElement = $('<div>', { id: 'side-editor' }).hide();
        this.mainEditorElement = $('<div>', { id: 'main-editor' });

        // Append editor elements to parent
        this.editorElement.append(this.sideEditorElement);
        this.editorElement.append(this.mainEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);
        this.$el.append(this.settingsView.el);

        // Create Ace editor
        this.sideEditor = ace.edit(this.sideEditorElement.get(0));
        this.mainEditor = ace.edit(this.mainEditorElement.get(0));

        // Configure editor
        this.configure();
    },

    /* Remove */

    remove: function () {

        // Remove settings
        this.settingsView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Reset */

    configure: function () {

        // Configure editors
        config.editor.configure(this.mainEditor);
        config.editor.configure(this.sideEditor);
    },

    removeDecorations: function (editor) {

        // Remove decorations from editor
        while (this.decorations[editor.container.id].length > 0) {

            var decoration = this.decorations[editor.container.id].pop();

            editor.getSession().removeGutterDecoration(decoration.row, decoration.style);
        }
    },

    removeMarkers: function (editor) {

        // Remove markers from editor
        while (this.markers[editor.container.id].length > 0) {
            editor.getSession().removeMarker(this.markers[editor.container.id].pop());
        }
    },

    removeInsertedLines: function (editor) {

        var Range = ace.require('ace/range').Range;

        // Remove inserted lines from editor
        while (this.insertedLines[editor.container.id].length > 0) {

            var difference = this.insertedLines[editor.container.id].pop();

            editor.getSession()
                  .remove(new Range(difference.rowStart,
                                    0,
                                    difference.rowEnd + 1,
                                    0));
        }
    },

    resetReplacedLines: function (editor) {

        var Range = ace.require('ace/range').Range;

        // Reset replaced lines from editor
        while (this.replacedLines[editor.container.id].length > 0) {

            var difference = this.replacedLines[editor.container.id].pop();

            editor.getSession()
                  .replace(new Range(difference.rowStart,
                                     0,
                                     difference.rowEnd,
                                     editor.getSession().getLine(difference.rowEnd).length),
                           difference.lines);
        }
    },

    clearDiff: function () {

        // Remove decorations
        this.removeDecorations(this.mainEditor);
        this.removeDecorations(this.sideEditor);

        // Reset replaced lines
        this.resetReplacedLines(this.mainEditor);

        // Remove inserted lines
        this.removeInsertedLines(this.mainEditor);

        // Remove markers
        this.removeMarkers(this.mainEditor);
        this.removeMarkers(this.sideEditor);
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            split: this.split,
            previous: this.previousModel.toJSON(),
            difference: this.differences.getCount(),
            percentageOfChange: Math.round((this.differences.getCount().total() / this.model.lines()) * 100)

        }

        // Template
        var topContainerOutput = $(this.template.topContainer(_.extend(this.model.toJSON(), attributes)));

        // Editor inspector
        $('#editor-inspector', topContainerOutput).popover({ animation: false, html: true, trigger: 'click' });

        // Update top container
        this.topContainer.html(topContainerOutput);

        // Restore inspector state
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
        }
    },

    fold: function (editor, folds) {

        _.each(folds, function (fold) {

            editor.getSession().foldAll(fold.start.row, fold.end.row, 0);
        });
    },

    decorateGutter: function (editor, rowStart, rowEnd, style) {

        // Decorate gutter for lines
        for (var row = rowStart; row <= rowEnd; row++) {

            this.decorations[editor.container.id].push({ row: row, style: 'decoration gutter-' + style });

            editor.getSession().addGutterDecoration(row, 'decoration gutter-' + style);
        }
    },

    /* Update */

    setContent: function (editor, content, mode) {

        // Remember folds
        var folds = _.clone(editor.getSession().getAllFolds());

        // Remember cursor position
        var position = editor.getSelection().getSelectionAnchor();

        // Remember scroll position
        var scrollPosition = editor.getSession().getScrollTop();

        // Remove decorations
        this.removeDecorations(editor);

        // Remove markers
        this.removeMarkers(editor);

        // Set content for editor
        editor.setValue(content);

        // Set folds for editor
        this.fold(editor, folds);

        // Set cursor and scroll position
        editor.moveCursorToPosition(position);
        editor.getSelection().clearSelection();
        editor.getSession().setScrollTop(scrollPosition);

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    update: function (previousFile, file, backendFile) {

        var self = this;

        this.model = file;
        this.previousModel = previousFile;

        // Wait files to be in sync
        var fileSynced = _.after(2, function() {

            var previousContent = self.sideEditor.getValue();
            var content = self.mainEditor.getValue();

            // Create difference
            self.differences = new codebrowser.model.Diff(previousContent, content, backendFile);
            
            // Re-render diff
            self.toggleDiff(self.diff);

            self.render();
        });

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Both models are the same
        if (this.previousModel === this.model) {

            // Disable split
            this.toggleSplit(false);

        } else {

            // Restore split state if necessary
            if (!this.split) {
                this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');
            }
        }

        // Restore or clear diff state
        if (!this.diff) {
            this.toggleDiff(localStorage.getItem(config.storage.view.EditorView.diff) === 'true');
        } else {
            this.clearDiff();
        }

        // Fetch previous file only if the models are not the same
        if (this.previousModel !== this.model) {

            previousFile.fetchContent(function (content, error) {

                if (error) {
                    throw new Error('Failed file fetch.');
                }

                self.setContent(self.sideEditor, content, mode);

                fileSynced();
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content, error) {

            if (error) {
                throw new Error('Failed file fetch.');
            }

            // If both models are the same, current model is a new file, set empty content to the side editor
            if (self.previousModel === self.model) {

                self.setContent(self.sideEditor, null, mode);

                fileSynced();
            }

            self.setContent(self.mainEditor, content, mode);

            fileSynced();
        });

        // Show view if necessary
        this.$el.show();

        this.render();
    },

    /* Events */

    didResize: function () {

        // Relocate inspector
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
            $('#editor-inspector').popover('toggle');
        }

        // Editors can get confused after a resize
        this.mainEditor.resize();
        this.sideEditor.resize();
    },

    didSplit: function () {

        if (this.diff) {

            // Re-render diff
            this.clearDiff();
            this.toggleDiff(this.diff);
        }

        // Editors can get confused after a split
        this.mainEditor.resize();
        this.sideEditor.resize();
        this.mainEditor.renderer.updateFull();
        this.sideEditor.renderer.updateFull();

        // Render
        this.render();
    },

    /* Actions */

    toggleSplit: function (split) {

        // Use parameter if given, otherwise toggle internal split state
        if (split !== undefined) {

            this.split = split;

        } else {

            this.split = !this.split;

            // Store split state
            localStorage.setItem(config.storage.view.EditorView.split, this.split);
        }

        // Enable split
        if (this.split) {

            // Split side editor to left
            this.sideEditorElement.css({ float: 'left', width: '50%' });
            this.sideEditorElement.show();

            // Split main editor to right
            this.mainEditorElement.css({ float: 'right', width: '50%' });

            this.didSplit();

            return;
        }

        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });

        this.didSplit();
    },

    toggleDiff: function (diff) {

        var Range = ace.require('ace/range').Range;

        // Use parameter if given, otherwise toggle internal diff state
        if (diff !== undefined) {

            this.diff = diff;

        } else {

            this.diff = !this.diff;

            // Store diff state
            localStorage.setItem(config.storage.view.EditorView.diff, this.diff);
        }

        // Enable diff
        if (this.diff) {

            // Show differences
            for (var i = 0; i < this.differences.getDifferences().all.length; i++) {

                var difference = this.differences.getDifferences().all[i];

                var marker;

                // Delete
                if (difference.type === 'delete') {

                    // If not in split view, show removed lines within the main editor
                    if (!this.split) {

                        // Add removed lines to main editor
                        if (!difference.overwrite) {

                            this.mainEditor.getSession()
                                           .insert({ row: difference.rowStart + difference.offset, column: 0 },
                                                   difference.lines);

                            // Remember removed lines
                            this.insertedLines['main-editor'].push({

                                rowStart: difference.rowStart + difference.offset,
                                rowEnd: difference.rowEnd + difference.offset

                            });

                        // Overwrite previous lines
                        } else {

                            // Remember replaced lines
                            this.replacedLines['main-editor'].push({

                                rowStart: difference.rowStart + difference.offset,
                                rowEnd: difference.rowEnd + difference.offset,
                                lines: this.mainEditor.getSession().getLines(difference.rowStart + difference.offset,
                                                                             difference.rowEnd + difference.offset).join('\n')

                            });

                            this.mainEditor.getSession()
                                           .replace(new Range(difference.rowStart + difference.offset,
                                                              0,
                                                              difference.rowEnd + difference.offset,
                                                              this.mainEditor.getSession().getLine(difference.rowEnd).length),
                                                    difference.lines);
                        }

                        // Decorate gutter
                        this.decorateGutter(this.mainEditor,
                                            difference.rowStart + difference.offset,
                                            difference.rowEnd + difference.offset,
                                            'delete');

                    // If split view is enabled, show removed lines in side editor
                    } else {

                        // Add marker for removed line in side editor
                        marker = this.sideEditor
                                     .getSession()
                                     .addMarker(new Range(difference.fromRowStart,
                                                          0,
                                                          difference.fromRowEnd,
                                                          1),
                                                difference.type,
                                                'fullLine');

                        // Decorate
                        this.decorateGutter(this.sideEditor, difference.fromRowStart, difference.fromRowEnd, 'delete');

                        // Remember marker
                        this.markers['side-editor'].push(marker);

                        continue;
                    }
                }

                var offset = 0;

                // Offset in single mode by removed lines
                if (!this.split) {
                    offset = difference.offset;
                }

                // Add marker to main editor
                marker = this.mainEditor
                             .getSession()
                             .addMarker(new Range(difference.rowStart + offset,
                                                  0,
                                                  difference.rowEnd + offset,
                                                  1),
                                        difference.type,
                                        'fullLine');

                // Decorate
                this.decorateGutter(this.mainEditor,
                                    difference.rowStart + offset,
                                    difference.rowEnd + offset,
                                    difference.type);

                // Remember marker
                this.markers['main-editor'].push(marker);
            }

            return;
        }

        // Disable diff
        this.clearDiff();
    },

    toggleInspector: function (event) {

        event.preventDefault();

        this.inspector = !this.inspector;
    }
});
;

codebrowser.view.ErrorView = Backbone.View.extend({

    id: 'error-container',
    template: Handlebars.templates.Error,

    /* Render */

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
;

codebrowser.view.ExercisesView = Backbone.View.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            course: this.course.toJSON(),
            exercises: this.collection.toJSON(),
            viewPath: this.viewPath
        }

        if (this.student) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
;

codebrowser.view.FooterView = Backbone.View.extend({

    id: 'footer-container',
    template: Handlebars.templates.Footer,
    events: {
        'click #settingsModalButton': 'openModal'
    },

    initialize: function() {

        this.modalView = new codebrowser.view.SettingsModalView();
        this.render();

    },

    render: function () {

        // Template
        this.$el.html(this.template());
        return this;

    },

    openModal: function() {

        this.modalView.show();

    }

});
;

codebrowser.view.NavigationView = Backbone.View.extend({

    id: 'navigation-container',
    template: Handlebars.templates.Navigation,

    tourEnabled: false,
    startTourCallback: null,

    events: {

        'click #startTour': 'startTour'

    },

    /* Render */

    render: function () {

        var attributes = {

            showComments: localStorage.getItem('config.comments') === 'true' ? true : false,
            showTags: localStorage.getItem('config.tagnames') === 'true' ? true : false,
            showTagCategories: localStorage.getItem('config.tagcategories') === 'true' ? true : false,
            showStudentGroups: localStorage.getItem('config.studentgroups') === 'true' ? true : false,
            tourEnabled: this.tourEnabled
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
        return this;

    },

    /* Events */

    startTour: function (event) {

        if (_.isFunction(this.startTourCallback)) {

            this.startTourCallback(event);
        }
    },

    enableTour: function (startTourCallback) {

        this.startTourCallback = startTourCallback;
        this.tourEnabled = true;

        this.render();
    },

    disableTour: function () {

        this.startTourCallback = null;
        this.tourEnabled = false;

        this.render();
    }

});
;

codebrowser.view.NotFoundErrorView = codebrowser.view.ErrorView.extend({

    model: {

        class: 'alert-warning',
        message: 'Not Found.'

    }
});
;

codebrowser.view.RootView = Backbone.View.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    render: function () {

        var attributes = {

            showStudentGroups : this.showStudentGroups,
            showTags : this.showTags === 'true' ? true: false,
            showTagCategories : this.showTagCategories === 'true' ? true: false,
            showComments : this.showComments === 'true' ? true: false

        }

        var output = this.template(attributes);
        this.$el.html(output);

        return this;
    }
});
;

codebrowser.view.SelectView = Backbone.View.extend({

    id: 'select-container',
    template: Handlebars.templates.SelectContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            course: this.course.toJSON()
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
;

codebrowser.view.SettingsModalView = Backbone.View.extend({

    id: 'settings-modal',
    className: 'modal fade hide',
    template: Handlebars.templates.SettingsModal,
    events: {
        'click #saveButton': 'updateApiUrl',
        'click #cancelButton': 'onCancelButton',
        'click #closeButton': 'onCancelButton',
        'click #checkButton': 'checkCapabilities',
        'click .toggleEnabled': 'toggleCapability',
        'keyup #apiUrl': 'onKeyUp',
        'click #applyButton': 'showCapabilityCheck'
    },


    initialize: function() {

        var capabilities = [
            {
                name: 'Comments',
                testUrl: 'comments',
                testMethod: 'GET',
                storageKey: 'config.comments'
            },
            {
                name: 'Tags',
                testUrl: 'tagnames',
                testMethod: 'HEAD',
                storageKey: 'config.tagnames'
            },
            {
                name: 'Tag categories',
                testUrl: 'tagcategories',
                testMethod: 'HEAD',
                storageKey: 'config.tagcategories'
            },
            {
                name: 'Student groups',
                testUrl: 'studentgroups',
                testMethod: 'HEAD',
                storageKey: 'config.studentgroups'
            },
            {
                name: 'Concepts',
                testUrl: ['students', 'courses', 'exercises', 'concepts'],
                testMethod: 'recursive',
                storageKey: 'config.concepts'
            }
        ];

        capabilities.forEach(function(capability) {
            capability.error = 'Not checked yet';
            capability.checked = false;
        });

        this.attributes = {

            apiUrl: config.api.main.root,
            capabilities: capabilities,
            applied: false

        };

        var backendChecked = localStorage.getItem('backendChecked');
        if (backendChecked !== 'true') {
            this.checkCapabilities();
        }
        else {
            capabilities.forEach(function(capability) {
                capability.status = localStorage.getItem(capability.storageKey) === 'true';
            })
        }

        this.render();

    },

    render: function () {

        // Template
        var output = this.template(this.attributes);

        this.$el.html(output);
        this.$el.modal({show:false});
        return this;

    },

    show: function() {

        this.$el.modal('show');

    },

    showCapabilityCheck: function() {

        var self = this;
        this.attributes.apiUrl = $('#apiUrl').val();
        this.attributes.applied = true;
        this.clearCapabilities();

        $('#capability-report').slideDown(function() {
            self.render();
        });

    },

    updateApiUrl: function () {

        var apiUrl = $('#apiUrl').val();
        localStorage.removeItem('backboneCache');
        localStorage.setItem('config.apiUrl', apiUrl);
        location.href = '.';

    },

    onCancelButton: function() {

        this.initialize();
        this.$el.modal('hide');
        this.render();

    },

    onKeyUp: function(event) {

        if (event.keyCode === 13) { // user pressed enter
            this.showCapabilityCheck();
        }
        else if (this.attributes.applied === true){
            $('#capability-report').slideUp();
        }

    },

    toggleCapability: function(ev) {

        var index = $(ev.target).data('index');
        var capability = this.attributes.capabilities[index];

        capability.status = !capability.status;
        localStorage.setItem(capability.storageKey, capability.status.toString());

    },

    clearCapabilities: function() {

        this.attributes.capabilities.forEach(function(capability) {
            capability.checked = false;
            capability.enabled = false;
        });

        this.render();

    },

    checkCapabilities: function() {

        var self = this;
        this.clearCapabilities();
        this.render();
        this.attributes.capabilities.forEach(function(capability) {
            self.checkCapability(capability);
        });

        localStorage.setItem('backendChecked', true);

    },

    checkCapability: function(capability) {

        if (capability.testMethod === 'recursive') {
            this.recursiveCheck(capability);
        }
        else {
            this.simpleCheck(capability);
        }


    },

    simpleCheck: function(capability) {

        var self = this;
        var apiRoot = this.attributes.apiUrl;

        $.ajax({

            async: false,
            url: apiRoot + capability.testUrl,
            type: capability.testMethod,

            success: function () {

                localStorage.setItem(capability.storageKey, true);
                capability.status = true;
                capability.checked = true;
                self.render();

            },

            error: function() {

                localStorage.setItem(capability.storageKey, false);
                capability.status = false;
                capability.checked = true;
                self.render();

            }

        });
    },

    recursiveCheck: function(capability) {

        var self = this;
        var url = this.attributes.apiUrl;

        var breakLoop = false;

        capability.testUrl.forEach(function(urlPart, index) {

            if (!breakLoop) {

                url += index === 0 ? urlPart : '/' + urlPart;

                $.ajax({

                    async: false,
                    url: url,
                    type: 'GET',

                    success: function (data) {

                        if (index === capability.testUrl.length - 1) {
                            localStorage.setItem(capability.storageKey, true);
                            capability.status = true;
                            capability.checked = true;
                            self.render();
                        }
                        else {
                            if (data.length > 0) {

                                url += '/' + data[0].id;
                            }
                            else {
                                capability.status = false;
                                capability.checked = false;
                                capability.error = 'Back-end didn\'t have enough data to test this feature. URL ' + url + 'returned an empty response';
                            }

                        }

                    },

                    error: function() {

                        localStorage.setItem(capability.storageKey, false);
                        capability.status = false;
                        capability.checked = true;
                        capability.error = 'GET-request to ' + url + ' failed!';
                        self.render();
                        breakLoop = true;

                    }

                });
            }
        })
    }

});
;

codebrowser.view.SnapshotBrowserView = Backbone.View.extend({

    id: 'snapshot-browser-container',

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Files
        this.snapshotFilesView = new codebrowser.view.SnapshotFilesView({ parentView: this });
        this.$el.append(this.snapshotFilesView.el);

        // Tags
        if (localStorage.getItem('config.tagnames') === 'true') {
           
            this.snapshotTagsView = new codebrowser.view.SnapshotTagsView();
            this.$el.append(this.snapshotTagsView.el);
        }

    },

    /* Remove */

    remove: function () {

        // Remove files view
        this.snapshotFilesView.remove();

        // Remove tags view
        if (localStorage.getItem('config.tagnames') === 'true') {

            this.snapshotTagsView.remove();
        }

        Backbone.View.prototype.remove.call(this);
    },

    /* Update */

    update: function (snapshot, file, courseRoute) {

        // Update files view
        this.snapshotFilesView.update(snapshot, file, courseRoute);

        // Update tags view
        if (localStorage.getItem('config.tagnames') === 'true') {
        
            this.snapshotTagsView.update(snapshot);
        }

    }
});
;

codebrowser.view.SnapshotCommentsView = Backbone.View.extend({

    id: 'snapshot-comments-container',
    template: Handlebars.templates.SnapshotCommentsContainer,

    newCommentType: 'solution',

    collection:  new codebrowser.collection.CommentCollection(),

    events: {

        'click [data-action="create-comment"]': 'createComment',
        'click [data-action="solution-comment"]': 'solutionComment',
        'click [data-action="snapshot-comment"]': 'snapshotComment',
        'click span.next': 'nextPage',
        'click span.prev': 'prevPage'

    },

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var attributes = {

            username: Utils.getLocalStorageValue('username', 'AnonymousJack'),
            comments: this.collection.toJSON(),

        };

        var output = $(this.template(attributes));

        this.$el.html(output);

        this._renderCommentsView();
    },

    nextPage: function () {

        this.page += 1;
        this.update(this.snapshot);
    },

    prevPage: function () {

        this.page -= 1;
        this.update(this.snapshot);
    },

    /* Remove */

    remove: function () {

        // Remove Comments view
        this._removeCommentsView();

        Backbone.View.prototype.remove.call(this);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        if (this.page === undefined) {
            this.page = 0;
        }

        this.collection = new codebrowser.collection.CommentCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId'),
                                                                           snapshotId: this.snapshot.get('id'),
                                                                           page: this.page });
        var self = this;

        // Fetch comments
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function (data, response) {

                self.firstPage = response.firstPage;
                self.lastPage = response.lastPage;
                self.totalPages = response.totalPages;
                self.nummberOfElements = response.numberOfElements;
                self.totalElements = response.totalElements;
                self.collection.reset(response.content);

                self.render();
            },

            error: function () {

                throw new Error('Failed comments fetch.');
            }
        });

    },

    /* Actions */

    createComment: function (event) {

        event.preventDefault();

        var commentUsername = $('[data-id="comment-username"]', this.$el).val().trim();
        var commentText = $('[data-id="comment-text"]', this.$el).val().trim();

        if (!commentText) {
            return;
        }

        var self = this;

        // Create new comment
        var commentData = {
            comment: commentText,
            student: { id: self.snapshot.get('studentId') },
            course: { id: self.snapshot.get('courseId') },
            exercise: { id: self.snapshot.get('exerciseId') }
        };

        if (this.newCommentType === 'snapshot') {

            commentData.snapshot = { id: self.snapshot.id };
        }

        if (commentUsername) {

            commentData.username = commentUsername;
            localStorage.setItem('username', commentUsername);
        }

        var comment = new codebrowser.model.Comment(commentData);


        // Save comment
        comment.save({}, {

            success: function () {

                self.collection.add(comment);
                self.update(self.snapshot);
            },

            error: function () {

                throw new Error('Failed comment save.')
            }
        });

        this._resetForm();
    },

    solutionComment: function () {

        this.newCommentType = 'solution';
    },

    snapshotComment: function () {

        this.newCommentType = 'snapshot';
    },

    /* Helpers */

    _resetForm: function () {

        this.$el.find('textarea').val('').focus();

    },

    _renderCommentsView: function () {

        this._removeCommentsView();

        this.commentsView = new codebrowser.view.CommentsView({

            showBreadcrumb: false,
            collection: this.collection,
        });

        this.commentsView.firstPage = this.firstPage;
        this.commentsView.lastPage = this.lastPage;
        this.commentsView.totalPages = this.totalPages;
        this.commentsView.numberOfElements = this.numberOfElements;
        this.commentsView.totalElements = this.totalElements;
        this.commentsView.page = parseInt(this.page, 10);
        this.commentsView.prevPage = this.page > 0 ? parseInt(this.page, 10)-1 : 0;
        this.commentsView.nextPage = this.page < this.totalPages-1 ? parseInt(this.page, 10)+1 : this.totalPages-1;
        this.commentsView.onlyOnePage = this.firstPage && this.lastPage ? true : false;
        this.commentsView.snapshotView = true;
        this.$el.append(this.commentsView.el);

        this.commentsView.render();
    },

    _removeCommentsView: function () {

        if (this.commentsView) {

            this.commentsView.remove();
        }
    }
});
;

codebrowser.view.SnapshotsDataView = Backbone.View.extend({

    id: 'snapshots-data-container',
    template: Handlebars.templates.SnapshotDataContainer,

    isActive: Utils.getLocalStorageValue('showData', false) === 'true',

    initialize: function (options) {

        this.parentView = options.parentView;

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showData', this.isActive);

        this.$el.slideToggle();

    },

    render: function () {

        var attributes = {

            tests : this.collection.models[this.index].attributes.tests,
            percentageOfTestsPassing : this.collection.models[this.index].attributes.percentageOfTestsPassing

        };
        var output = this.template(attributes);

        this.$el.html(output);
    },

    update: function (collection, index) {
        this.collection = collection;
        this.index = index;
        this.render();
    }

});

;

codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView.parentView;
    },

    /* Render */

    renderDifferences: function (output) {

        var self = this;

        this.parentView.collection.getDifferences(function (differences) {

            var index = self.parentView.collection.indexOf(self.model);
            var difference = differences[index];

            var files = self.model.get('files');

            files.each(function (file) {

                var fileDifference = difference[file.get('name')];
                var fileElement = $('[data-id="' + file.id + '"]', output);

                var lines = file.lines();
                var changed = fileDifference.getCount().total();

                // New file
                if (changed === lines) {
                    fileElement.addClass('new');
                }

                // Modified file
                if (changed > 0 && changed !== lines) {
                    fileElement.addClass('modified');
                }
            });
        });
    },

    render: function () {

        // View attributes
        var attributes = {

            courseRoute: this.courseRoute,
            files: this.model.getFiles()

        }

        // Template
        var output = $(this.template(_.extend(this.model.toJSON(), attributes)));

        if (this.parentView.editorView.diff) {

            // Render new and modified files
            this.renderDifferences(output);
        }

        // Active file
        var activeFileElement = $('[data-id="' + this.file.id + '"]', output);
        activeFileElement.addClass('active');

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot, file, courseRoute) {

        this.model = snapshot;
        this.file = file;
        this.courseRoute = courseRoute;

        this.render();
    }
});
;

codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create-tag"]': 'createTag',
        'click [data-action="create-snapshot-tag"]': 'createSnapshotTag',
        'click [data-action="delete"]': 'delete'

    },

    collection: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        var self = this;

        var showSnapshotTags;

        this.collection.each(function(tag) {

            var visible = !tag.get('snapshot') || tag.get('snapshot').id === self.snapshot.id;
            tag.set('visible', visible);
            showSnapshotTags |= tag.get('snapshot') && visible;
        });

        // Template
        var context = { tags: this.collection.toJSON() };
        if (showSnapshotTags) {
            context.showSnapshotTags = true;
        }

        var output = $(this.template(context));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.collection = new codebrowser.collection.TagCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId') });

        // Render on add and remove
        this.collection.on('add', $.proxy(this.render, this));
        this.collection.on('remove', $.proxy(this.render, this));

        var self = this;

        // Fetch tags
        this.collection.fetch({

            cache: false,
            expires: 0,

            success: function () {

                self.render();
            },

            error: function () {

                throw new Error('Failed tags fetch.');
            }
        });
    },

    /* Actions */

    createTag: function (event, snapshotTag) {

        event.preventDefault();

        var text;
        if (snapshotTag) {
            text = $('[data-id="snapshot-tag"]', this.$el).val().trim();
        } else {
            text = $('[data-id="tag"]', this.$el).val().trim();
        }

        if (!text) {
            return;
        }

        var self = this;

        // Create new tag name if necessary.
        var tagName = codebrowser.model.TagName.findOrCreate({ name : text });

        // Create new tag
        var attribs = { tagName: tagName,
                        student: { id: self.snapshot.get('studentId') },
                        course: { id: self.snapshot.get('courseId') },
                        exercise: { id: self.snapshot.get('exerciseId') }};
        if (snapshotTag) {
            attribs.snapshot = { id: self.snapshot.id };
        }

        var tag = new codebrowser.model.Tag(attribs);

        // Save tag
        tag.save({ tagName: tagName }, {

            success: function () {

                self.collection.add(tag, { at: 0 });
                if (snapshotTag) {
                    $('[data-id="snapshot-tag"]').focus();
                }
                else {
                    $('[data-id="tag"]').focus();
                }
                
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
    },

    createSnapshotTag: function (event) {
        this.createTag(event, true);
    },

    'delete': function (event) {

        var id = $(event.target).data('id');
        var tag = this.collection.get(id);

        var self = this;

        // Destroy tag
        tag.destroy({

            success: function () {

                // Remove from collection
                self.collection.remove(tag);
            },

            error: function () {

                throw new Error('Failed tag delete.')
            }
        });
    }
});
;

codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #toggleConceptBubbles': 'toggleConceptBubbles',
        'click #toggleConceptHeatmap': 'toggleConceptHeatmap',
        'click #toggleTimeline':       'toggleTimeline',
        'click #toggleBrowser':        'toggleBrowser',
        'click #toggleTree':           'toggleTree',
        'click #toggleTestOutput':     'toggleTestOutput',
        'click #split':                'split',
        'click #diff':                 'diff',
        'click #first':                'first',
        'click #previous':             'previous',
        'click #next':                 'next',
        'click #last':                 'last'

    },

    /* Routing */
    courseRoute: false,

    /* Browser */
    browser: true,

    visualizations: null,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        this.visualizations = this._initializeVisualizations();

        // Navigation
        this.navigationContainer = $('<div>', { id: 'snapshot-navigation-container' });
        this.$el.append(this.navigationContainer);

        this._initializeContentContainer();

        // Bind resize
        $(window).resize($.proxy(this.resize, this));

        // Bind keydown
        $(document).keydown($.proxy(this.keydown, this));


        // Enable tour button on navigation view
        if (codebrowser && codebrowser.navigation) {

            var self = this;

            codebrowser.navigation.enableTour(function() {
                self.startTour();
            });
        }
    },

    _initializeVisualizations: function() {

        var visualizations = {};

        visualizations.timeline = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        visualizations.tree = new codebrowser.view.SnapshotsTreeView({ parentView: this });
        visualizations.testOutput = new codebrowser.view.SnapshotsDataView({ parentView: this });
        visualizations.conceptBubbles = new codebrowser.view.SnapshotsConceptBubbleView({ parentView: this });
        visualizations.conceptHeatmap = new codebrowser.view.SnapshotsConceptHeatmapView({ parentView: this });

        visualizations.timeline.buttonSelector = '#toggleTimeline';
        visualizations.tree.buttonSelector = '#toggleTree';
        visualizations.testOutput.buttonSelector = '#toggleTestOutput';
        visualizations.conceptBubbles.buttonSelector = '#toggleConceptBubbles';
        visualizations.conceptHeatmap.buttonSelector = '#toggleConceptHeatmap';

        for (var key in visualizations) {
            if (visualizations.hasOwnProperty(key)) {
                var visualization = visualizations[key];

                if (!visualization.isActive) {
                    visualization.$el.hide();
                }
                this.$el.append(visualization.el);
            }
        }

        return visualizations;
    },

    _initializeContentContainer: function() {

        // Content container
        var contentContainer = $('<div>', { id: 'snapshot-content-container' });

        // Browser
        this.snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: this });
        contentContainer.append(this.snapshotBrowserView.el);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        contentContainer.append(this.editorView.el);

        // Comments
        if (localStorage.getItem('config.comments') === 'true') {

            this.snapshotCommentsView = new codebrowser.view.SnapshotCommentsView();
            contentContainer.append(this.snapshotCommentsView.el);
        }

        this.$el.append(contentContainer);
    },

    /* Remove */

    remove: function () {

        // Unbind resize
        $(window).off('resize', this.resize);

        // Unbind keydown
        $(document).off('keydown', this.keydown);

        // Visualizations teardown
        for (var visualization in this.visualizations) {
            if (this.visualizations.hasOwnProperty(visualization)) {
                this.visualizations[visualization].remove();
            }
        }

        // Remove editor
        this.editorView.remove();

        // Comment view
        if (localStorage.getItem('config.comments') === 'true') {
            this.snapshotCommentsView.remove();
        }

        // Disable tour button on navigation view
        codebrowser.navigation.disableTour();

        Backbone.View.prototype.remove.call(this);
    },

    /* Render */

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        this.renderNavigationBar(index);
        this.renderNavigation(index);

    },

    renderNavigation: function(index) {

        // View attributes
        var attributes = {
            current: index + 1,
            total: this.collection.length
        };

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(attributes));

        this.renderButtons(navigationContainerOutput, index);

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    renderButtons: function (navigationContainerOutput, index) {

        // Browser is enabled, set toggleBrowser button as active
        if (this.browser) {
            $('#toggleBrowser', navigationContainerOutput).addClass('active');
        }

        // Split view is enabled, set split button as active
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        }

        // Disable split button if editor can not be split
        if (!this.editorView.canSplit()) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // Diff is enabled, set diff button as active
        if (this.editorView.diff) {
            $('#diff', navigationContainerOutput).addClass('active');
        }

        // First snapshot, disable the buttons for first and previous
        if (index === 0) {
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable the buttons for next and last
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Visualization toggle buttons
        for (var key in this.visualizations) {
            var visualization = this.visualizations[key];
            if (this.visualizations.hasOwnProperty(key) && visualization.isActive) {
                $(visualization.buttonSelector, navigationContainerOutput).addClass('active');
            }
            if (this.visualizations.hasOwnProperty(key) && visualization.isDisabled) {
                $(visualization.buttonSelector, navigationContainerOutput).prop('disabled', true );
            }
        }
    },

    renderNavigationBar: function(index) {

        // Template for navigation bar container
        var navigationbarContainerOutput = $(this.template.navigationbarContainer(_.extend(
            this.model.toJSON(),
            {
                exercise: this.collection.at(index).get('exercise').toJSON(),
                student:  this.student.toJSON(),
                courseRoute: this.courseRoute
            }
        )));

        // Update navigation bar container
        this.navigationbarContainer.html(navigationbarContainerOutput);
    },

    /* Update */

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Restore browser state if necessary
        if (this.browser) {
            this.toggleBrowser(null, localStorage.getItem(config.storage.view.SnapshotView.browser) === 'true');
        }

        var index = this.collection.indexOf(snapshot);

        // Previous snapshot, use the current snapshot as the previous, if no previous available
        var previousSnapshot = !this.collection.at(index - 1) ? this.model : this.collection.at(index - 1);

        // Determine current file
        this.file = this.model.get('files').get(fileId);

        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Show view if necessary
        this.$el.show();

        this.updateVisualizations(index, filename);

        // Update editor
        var backendFile = this.collection.at(index).get('files').findWhere({ name: filename }).attributes.diffs;
        this.editorView.update(previousFile || this.file, this.file, backendFile);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        // Update comments view
        if (localStorage.getItem('config.comments') === 'true') {
            this.snapshotCommentsView.update(this.model);
        }

        this.render();
    },

    updateVisualizations: function (index, filename) {

        var visualizations = this.visualizations;

        if (visualizations.timeline.isActive) {
            visualizations.timeline.update(this.collection, index, filename, this.courseRoute);
        }

        if (visualizations.tree.isActive) {
            visualizations.tree.update(this.collection, index, filename, this.courseRoute);
        }

        if (visualizations.testOutput.isActive) {
            visualizations.testOutput.update(this.collection, index);
        }

        if (visualizations.conceptBubbles.isActive) {
            visualizations.conceptBubbles.update(this.model);
        }

        if (visualizations.conceptHeatmap.isActive) {
            visualizations.conceptHeatmap.update(this.model, index);
        }
    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        if (this.visualizations.timeline.isActive) {
            this.visualizations.timeline.didResize();
        }
        if (this.visualizations.tree.isActive) {
            this.visualizations.tree.didResize();
        }
        this.editorView.didResize();
    },

    keydown: function (event) {

        // Left
        if (event.keyCode === 37) {
            this.previous();
        }

        // Right
        if (event.keyCode === 39) {
            this.next();
        }
    },

    /* Actions */

    toggleBrowser: function (event, browser) {

        // Use parameter if given, otherwise toggle internal browser state
        if (browser !== undefined) {

            this.browser = browser;

        } else {

            this.browser = !this.browser;

            // Store browser state
            localStorage.setItem(config.storage.view.SnapshotView.browser, this.browser);
        }

        // Enable browser
        if (this.browser) {

            // Move editor view
            this.editorView.$el.css('margin-left', this.snapshotBrowserView.$el.width() + 30);
            this.editorView.didResize();

            this.snapshotBrowserView.$el.show();

            return;
        }

        // Disable browser
        this.snapshotBrowserView.$el.hide();

        // Move editor view
        this.editorView.$el.css('margin-left', 0);
        this.editorView.didResize();
    },

    toggleTimeline: function () {

        $(this.visualizations.timeline.buttonSelector).toggleClass('active');

        this.visualizations.timeline.toggle();

        if (this.visualizations.tree.isActive && this.visualizations.timeline.isActive) {
            this.toggleTree();
        }

        if (this.visualizations.timeline.isActive) {
            this.visualizations.timeline.update(this.collection, this.collection.indexOf(this.model), this.file.get('name'), this.courseRoute);
        }
    },

    toggleTree: function () {

        $(this.visualizations.tree.buttonSelector).toggleClass('active');

        this.visualizations.tree.toggle();

        if (this.visualizations.tree.isActive && this.visualizations.timeline.isActive) {
            this.toggleTimeline();
        }

        if (this.visualizations.tree.isActive) {
            this.visualizations.tree.update(this.collection, this.collection.indexOf(this.model), this.file.get('name'), this.courseRoute);
        }
    },

    toggleTestOutput: function () {

        $(this.visualizations.testOutput.buttonSelector).toggleClass('active');

        this.visualizations.testOutput.toggle();

        // Update Data view
        if (this.visualizations.testOutput.isActive) {
            this.visualizations.testOutput.update(
                this.collection,
                this.collection.indexOf(this.model)
            );
        }
    },

    toggleConceptBubbles: function () {

        $(this.visualizations.conceptBubbles.buttonSelector).toggleClass('active');

        this.visualizations.conceptBubbles.toggle();

        // Update Concepts view
        if (this.visualizations.conceptBubbles.isActive) {
            this.visualizations.conceptBubbles.update(this.model);
        }
    },

    toggleConceptHeatmap: function () {

        $(this.visualizations.conceptHeatmap.buttonSelector).toggleClass('active');

        this.visualizations.conceptHeatmap.toggle();

        // Update Concepts view
        if (this.visualizations.conceptHeatmap.isActive) {
            this.visualizations.conceptHeatmap.update(this.model);
        }
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);
    },

    /* Actions - Navigation */

    navigate: function (snapshot, file, options) {

        // Reset introJs tour if necessary
        this.resetTour();

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        if (this.courseRoute) {
            codebrowser.app.snapshotRouter.navigate('#/courses/' +
                this.collection.courseId +
                '/exercises/' +
                this.collection.exerciseId +
                '/students/' +
                this.collection.studentId +
                '/snapshots/' +
                snapshot.id +
                '/files/' +
                file.id, { replace: !options ? options : options.replace });
        } else {

            codebrowser.app.snapshotRouter.navigate('#/students/' +
                this.collection.studentId +
                '/courses/' +
                this.collection.courseId +
                '/exercises/' +
                this.collection.exerciseId +
                '/snapshots/' +
                snapshot.id +
                '/files/' +
                file.id, { replace: !options ? options : options.replace });
        }
    },

    first: function () {

        this.navigateToIndex(0);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model);

        this.navigateToIndex(index - 1);
    },

    next: function () {

        var index = this.collection.indexOf(this.model);

        this.navigateToIndex(index + 1);
    },

    last: function () {

        var last = this.collection.size() - 1;

        this.navigateToIndex(last);
    },

    navigateToIndex: function(index) {

        var snapshot = this.collection.at(index);

        if (!snapshot) {
            return;
        }

        var file = snapshot.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(snapshot, file);
    },

    startTour: function () {

        var self = this;
        var intro = introJs();

        // Set elements and guide templates
        intro.setOptions({
            keyboardNavigation: false,
            steps: [
                {
                    element: '#editor-container',
                    intro: Handlebars.templates.SnapshotEditorIntro(),
                    position: 'right'
                },
                {
                    element: 'a[href="#editor-settings"]',
                    intro: Handlebars.templates.SnapshotEditorSettingsIntro(),
                    position: 'left'
                },
                {
                    element: '#editor-modes',
                    intro: Handlebars.templates.SnapshotEditorModesIntro()
                },
                {
                    element: '#snapshot-navi',
                    intro: Handlebars.templates.SnapshotNavigationIntro()
                },
                {
                    element: '#toggleTimeline',
                    intro: Handlebars.templates.SnapshotTimelineIntro()
                },
                {
                    element: '#toggleTree',
                    intro: Handlebars.templates.SnapshotTreeIntro()
                },
                {
                    element: '#toggleTestOutput',
                    intro: Handlebars.templates.SnapshotDataIntro()
                },
                {
                    element: '#toggleConceptBubbles',
                    intro: Handlebars.templates.SnapshotConceptsBubbleIntro()
                },
                {
                    element: '#toggleConceptHeatmap',
                    intro: Handlebars.templates.SnapshotConceptsHeatmapIntro()
                }
            ]
        });

        // Set tour in progess flag
        this.tourInProgress = true;

        // Register callbacks
        intro.onexit(function() {
            self.tourInProgress = false;
        });
        intro.oncomplete(function() {
            self.tourInProgress = false;
        });

        intro.start();
    },

    resetTour: function () {

        if (this.tourInProgress === true) {

            this.tourInProgress = false;
            introJs().exit();
        }
    }
});
;


codebrowser.view.SnapshotsConceptBubbleView = Backbone.View.extend({

    id: 'snapshots-concept-bubbles-container',

    isDisabled: true,

    isActive: false,

    // concept container (bubble) diameter
    diameter: 400,

    format: null,

    color: null,


    initialize: function() {

        this.isDisabled = Utils.getLocalStorageValue('config.concepts', false) === 'false';
        this.isActive = !this.isDisabled && Utils.getLocalStorageValue('showConceptBubbles', false) === 'true';

        this.format = d3.format(',d');
        this.color = d3.scale.category20c();

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConceptBubbles', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot) {
        var self = this;
        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId'),
            snapshotId : snapshot.get('id')

        };

        this.collection = new codebrowser.collection.ConceptCollection([], options);

        this.collection.fetch({

            success: function() {

                self.concepts = Utils.parseConceptData(self.collection.toJSON());

                if (self.initialized === undefined) { // if this is the first rendering
                    self.firstRender();
                }
                else {
                    self._updateConceptList();
                    self._updateBubbles();
                }
            }

        });

    },

    firstRender: function() {

        // add container for bubble chart
        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', this.diameter)
            .attr('height', this.diameter)
            .attr('class', 'bubble');

        this._drawConceptList();
        this._drawInitialBubbles();

        this.initialized = true;

    },

    _getListTextPosition: function(d) {
        return '50,' + ((this.concepts.children.indexOf(d) + 3) * 20);
    },

    _drawConceptList: function() {

        var self = this;
        var concepts = this.concepts.children;

        // add container for concept list
        this.listSvg = d3.select('#' + this.id).append('svg')
            .attr('width', this.diameter)
            .attr('height', this.diameter)
            .attr('class', 'list');

        var textElements = this.listSvg.selectAll('.list-element')
            .data(concepts);

        // Add elements and text for all concepts
        textElements.enter()
            .append('g')
            .attr('class', 'list-element')
            .attr('transform', function(d) {
                    return 'translate(' + self._getListTextPosition(d) + ')';
                })
            .append('text')
            .attr('fill', function(d) { return self.color(d.name); })
            .style('font-size', '16px')
            .text(function(d) { return d.name + ': ' + d.value ; } );

    },

    _updateConceptList: function() {

        var self = this;
        var concepts = this.concepts.children;

        var listElements = this.listSvg.selectAll('.list-element')
            .data(concepts, function(d) { return d.name } );

        // create elements for new concepts
        var g = listElements.enter().append('g')
            .attr('class', 'list-element')
            .attr('transform', function(d) {
                return 'translate(' + self._getListTextPosition(d) + ')';
            });


        // add text for new concepts
        g.append('text')
            .style('opacity', 0)
            .style('font-size', '16px')
            .attr('fill', function(d) { return self.color(d.name); })
            .text(function(d) { return d.name + ': ' + d.value ; });


        // update text for existing concepts, interpolate value change by whole numbers
        // and animate transformation to full opacity
        listElements.select('text').transition().duration(1000)
            .tween('text', function(d) {
                var i = d3.interpolate(this.textContent.substr(this.textContent.indexOf(':') + 2), d.value)
                return function(t) {
                    var value = i(t) % 1 === 0 ? i(t) : Math.round(i(t));
                    this.textContent = d.name + ': ' + value;
                };
            })
            .style('opacity', 1);


        // move concepts to correct places in list and animate transition
        listElements.transition().duration(1000)
            .attr('transform', function(d) {
                return 'translate(' + self._getListTextPosition(d) + ')';
            });

        // remove exiting concepts
        listElements.exit().remove();

    },

    _drawInitialBubbles: function() {

        // initialize the container bubble that holds all concept circles
        this.bubble = d3.layout.pack()
            .sort(null)
            .size([this.diameter, this.diameter])
            .padding(1.5);

        // Bind data to elements with .node-class (even if there aren't any yet...)
        var data = this.svg.selectAll('.node')
            .data(this.bubble.nodes(this.concepts)
                .filter(function(d) { return !d.children; }));

        // create g-elements for new concepts and position them correctly
        var newNodes = this._createNewConceptNodes(data.enter());

        // add titles for new nodes
        this._addTitle(newNodes);

        // add circles for new nodes
        this._addCircle(newNodes);

        // add text for new nodes
        this._addText(newNodes);

        data.select('text')
            .text(function(d) { return d.name.substring(0, ((d.r / 3) - 1)); })
            .transition().delay(1000)
            .duration(1000)
            .style('opacity', 1);

    },

    _updateBubbles: function() {

        var concepts = this.concepts;
        var self = this;

        // bind data to new nodes and match old nodes to new ones by concept name
        var data = this.svg.selectAll('.node')
            .data(this.bubble.nodes(concepts)
            .filter(function(d) { return !d.children; }), function(d) { return d.name });


        /*** Node adding ***/

        // initialize new concepts
        var newNodes = this._createNewConceptNodes(data.enter());
        newNodes.append('title');
        this._addCircle(newNodes);
        this._addText(newNodes);


        /*** Node updating ***/

        // update position for old bubbles and animate the transition
        data.transition().delay(1000).duration(1000)
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
            .style('opacity', 1);

        // update circle size for old concepts and animate the transition
        data.select('circle').transition().delay(1000).duration(1000)
            .attr('r', function(d) { return d.r; });

        // update titles for old and added concepts
        data.select('title')
            .text(function(d) { return d.name + ': ' + self.format(d.value); });

        // update text for old and added concepts
        data.select('text')
            .transition().delay(1000).duration(1000)
            .style('opacity', 1)
            .text(function(d) { return d.name ? d.name.substring(0, ((d.r / 3) - 1)) : ''; });


        /*** Node removal ***/

        // animate the shrinking of exiting concept circles before removing them from DOM
        data.exit().selectAll('circle')
            .transition().delay(1000)
            .duration(1000)
            .attr('r', 0)
            .remove();

        // animate the removal of DOM-elements belonging to exiting concepts
        data.exit()
            .style('opacity', 1)
            .transition().delay(1000)
            .duration(1000)
            .style('opacity', 0)
            .remove();

    },

    _addCircle: function(nodes) {

        var self = this;
        nodes.append('circle')
            .style('fill', function(d) { return self.color(d.name); })
            .attr('r', 0)
            .transition().delay(1000)
            .duration(2000)
            .attr('r', function(d) { return d.r; });

    },

    _addTitle: function(nodes) {

        var self = this;
        nodes.append('title')
            .text(function(d) {
                return d.name + ': ' + self.format(d.value);
            });

    },

    _addText: function(nodes) {

        nodes.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .style('opacity', 0.00001);

    },

    // Add g-elements to new concepts and position them
    _createNewConceptNodes: function(data) {

        return data.append('g')
            .attr('class', 'node')
            .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

    }

});






;


codebrowser.view.SnapshotsConceptHeatmapView = Backbone.View.extend({

    id: 'snapshots-concept-heatmap-container',

    isDisabled: true,

    isActive: false,

    format: undefined,

    initialized: undefined,

    lastIndex: undefined,

    initialize: function(options) {

        this.parentView = options.parentView;

        this.isDisabled = Utils.getLocalStorageValue('config.concepts', false) === 'false';
        this.isActive = !this.isDisabled && Utils.getLocalStorageValue('showConceptHeatmap', false) === 'true';

    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showConceptHeatmap', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot, index) {
        var self = this;
        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId')

        };

        if (self.initialized === undefined) { // if this is the first rendering

            this.collection = new codebrowser.collection.ExerciseConceptsCollection([], options);

            this.collection.fetch({

                success: function() {

                    var concepts = self.collection.toJSON();
                    var snapshotArray = [];
                    var conceptArray = [];
                    var maxConceptSize = 0;
                    for (var key in concepts[0]) {
                        snapshotArray.push(concepts[0][key]);
                        // jshint -W083
                        concepts[0][key].forEach(function(concept) {
                            if (conceptArray.indexOf(concept.name) === -1) {
                                conceptArray.push(concept.name);
                            }
                            if (concept.size > maxConceptSize) {
                                maxConceptSize = concept.size;
                            }
                        });
                        // jshint +W083
                    }
                    self.concepts = {maxConceptSize: maxConceptSize, snapshots: snapshotArray, concepts: conceptArray};

                    self.firstRender(index);
                }

            });
        }

        else {

            self._updateHeatmap(index);

        }

    },

    firstRender: function(index) {

        this.width = $('#snapshots-concept-heatmap-container').width();
        this.height = 400;

        this.svg = d3.select('#' + this.id).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('class', 'heatmap');

        this._drawHeatmap(index);

        this.initialized = true;
        this.lastIndex = index;

    },

    _drawHeatmap: function(index) {

        var self = this;
        var snapshots = this.concepts.snapshots;
        var concepts = this.concepts.concepts;
        var widthOffset;
        var heightOffset = 5;
        var rectWidth;
        var rectHeight = Math.floor((self.height - heightOffset)/concepts.length) - 2;

        // draw labels for concepts
        var textElements = this.svg.selectAll('.concept')
            .data(concepts).enter()
            .append('g')
            .attr('class', 'concept')
            .attr('transform', function(d, i ) { return 'translate(5, ' + ((i * rectHeight) + rectHeight/2 + 4) + ')'; })
            .append('text')
            .attr('fill', 'rgb(0,0,0)')
            .text(function(d) { return d });

        // Calculate grid offset based on the longest concept string
        var maxTextWidth = 0;
        textElements.each(function() {
            if (this.getBBox().width > maxTextWidth) {
                maxTextWidth = this.getBBox().width;
            }
        });
        widthOffset = maxTextWidth + 20;
        rectWidth = Math.floor((self.width - widthOffset)/snapshots.length);

        // draw labels for snapshots
        this.svg.selectAll('.snapshot-index')
            .data(snapshots).enter()
            .append('g')
            .attr('class', 'snapshot-index')
            .attr('transform', function(d, i ) {
                var xOffset = i < 9 ? 5 : 9; // offset for two-digit labels
                return 'translate(' + ((i * rectWidth) + ((rectWidth/2) - xOffset) + widthOffset) + ',' + (self.height - heightOffset) + ')';
            })
            .append('text')
            .attr('class', function(d, i) { return 'snapshotlabel_' + (i + 1)})
            .attr('fill', 'rgb(0,0,0)')
            .style('font-weight', function(d, i) { return i === index ? 'bold' : 'normal' })
            .style('opacity', function(d, i) { return i === index ? 1 : 0 })
            .text(function(d, i) { return i + 1 });

        // jshint -W083
        for (var snapshotIndex = 0, len = snapshots.length; snapshotIndex < len; snapshotIndex++) {
            var snapshotData = snapshots[snapshotIndex];

            // draw grid
            this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
                .data(concepts)
                .enter()
                .append('svg:rect')
                .attr('class', 'snapshot_' + (snapshotIndex + 1))
                .attr('x', (snapshotIndex * rectWidth) + widthOffset)
                .attr('y', function(d, i) { return (i * (rectHeight) + 2); })
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .style('stroke', function() {
                    return snapshotIndex === index ? 'rgba(90,90,90,0.9)' : 'rgba(90,90,90,0.4)';
                })
                .style('stroke-width', 1);

            // color rectangles to represent concept size
            this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
                .style('fill', function(d) {
                    var returnValue = 'rgb(255,255,255)';
                    snapshotData.forEach(function(concept) {
                        if (concept.name === d) {
                            returnValue = 'rgba(0,0,0, ' + concept.size/self.concepts.maxConceptSize +')'
                        }

                    });
                    return returnValue;
                })

                // highlight row labels on mouseover
                .on('mouseover', function(thisData) {
                    changeConceptLabelWeight(thisData, 'bold');
                    changeSnapshotLabelOpacity(this, 1);
                })
                .on('mouseout', function(thisData) {
                    changeConceptLabelWeight(thisData, 'normal');
                    changeSnapshotLabelOpacity(this, 0);
                })
                .on('click', function() {
                    var snapshotIndex = parseInt($(this).attr('class').substr(9), 10) - 1;
                    self.parentView.navigateToIndex(snapshotIndex);
                });

            var changeSnapshotLabelOpacity = function(element, opacity) {
                var snapshotIndex = parseInt(element.className.baseVal.substr(9), 10);
                if (snapshotIndex !== self.lastIndex + 1) {
                    self.svg.selectAll('.snapshotlabel_' + snapshotIndex)
                        .style('opacity', opacity);
                }
            };

            var changeConceptLabelWeight = function(elementData, weight) {
                self.svg.selectAll('.concept text').filter(function(d) { return d === elementData })
                    .style('font-weight', weight);
            };


        }

    },

    _updateHeatmap: function(snapshotIndex) {

        // old column hilighting
        this.svg.selectAll('.snapshot_' + (this.lastIndex + 1))
            .style('stroke', 'rgba(90,90,90,0.4)');

        // new column hilighting
        this.svg.selectAll('.snapshot_' + (snapshotIndex + 1))
            .style('stroke', 'rgba(90,90,90,0.9)');

        // remove bolding from and fade away last snapshot label
        this.svg.selectAll('.snapshotlabel_' + (this.lastIndex + 1))
            .transition()
            .duration(1000)
            .style('opacity', 0)
            .style('font-weight', 'normal');

        // add bolding to current snapshot label
        this.svg.selectAll('.snapshotlabel_' + (snapshotIndex + 1))
            .transition()
            .duration(1000)
            .style('opacity', 1)
            .style('font-weight', 'bold');


        this.lastIndex = snapshotIndex;

    }

});






;

codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',
    className: 'visualization-container',

    template: {

        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    isActive: Utils.getLocalStorageValue('showTimeline', true) === 'true',

    /* Absolute width */
    width: 0,

    /* X coordinates of snapshot elements */
    snapshotPositions: [],

    /* Pointer */
    pointerSetOffsetX: 0,

    scroll: null,

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        /* jshint newcap: false */

        this.paper = Raphael(this.el, '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showTimeline', this.isActive);

        this.$el.slideToggle();

    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    snapshotWeight: function (index) {

        var difference = this.differences[index];

        var weight = 0.8;
        var percentage = Math.round((difference.total / difference.lines) * 100);

        if (percentage === 0) {
            return weight;
        }

        // Scale between 1 and 2
        weight = 2 * percentage / 100 + 1;

        // Round to nearest .5
        weight = Math.round(weight * 2) / 2;

        return Math.min(2, weight);
    },

    distanceWeight: function (index, min, max) {

        var weight = 0;

        // First snapshot has a static weight
        if (index === 0) {
            return 1;
        }

        // Duration between snapshots
        var duration = this.collection.getDuration(index, index - 1);

        // Scale between 1 and 6
        weight = 5 * (duration - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(6, weight);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width();
        var center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            this.setViewBox(this.width - viewWidth);

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        // Center of the current snapshot element
        var cx = this.snapshotPositions[this.currentSnapshotIndex];

        // Make previous snapshot element visible
        if (this.currentSnapshotIndex !== 0) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex - 1])) {
                this.centerOn(cx);
            }
        }

        // Make next snapshot element visible
        if (this.currentSnapshotIndex !== this.snapshotPositions.length - 1) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex + 1])) {
                this.centerOn(cx);
            }
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        // Duration label
        var duration = codebrowser.helper.Duration.calculate(snapshot.get('snapshotTime'),
                                                             previousSnapshot.get('snapshotTime'), true);

        // Duration element
        var durationElement = this.paper.text(x - radius - distance / 2, y + 30, duration);
        $(durationElement.node).attr('class', 'duration');
    },

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderSnapshotWeight: function (index, x, y) {

        var difference = this.differences[index];
        var percentage = (difference.total / difference.lines).toFixed(2);

        // Snapshot has no changes
        if (percentage === '0.00') {
            return;
        }

        if (percentage !== '1.00') {
            percentage = percentage.slice(1);
        } else {
            percentage = percentage.slice(0,1);
        }

        // Snapshot weight element
        var snapshotWeightElement = this.paper.text(x, y, percentage);

        // Adjust font size by weight
        var snapshotWeight = this.snapshotWeight(index);
        var fontSize = 11;

        if (snapshotWeight > 1) {
            fontSize *= snapshotWeight;
        }

        snapshotWeightElement.attr({ 'font-size': fontSize });

        $(snapshotWeightElement.node).attr('class', 'snapshot-weight');
    },

    renderSnapshot: function (snapshot, index, x, y, radius) {

        // Render index of the snapshot
        this.renderSnapshotIndex(index, x);

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        // When test data is available, a pie chart is drawn. Otherwise we draw a circle.
        var snapshotElement;
        if (snapshot.attributes.percentageOfTestsPassing == null) {
            snapshotElement = this.paper.circle(x, y, radius);
        } else {
            snapshotElement = this.paper.pieChart(x, y, radius, [snapshot.attributes.percentageOfTestsPassing, 100 - snapshot.attributes.percentageOfTestsPassing]);
        }

        // If snapshot does not compile, css class is added
        if(snapshot.attributes.compiles) {
            $(snapshotElement.node).attr('class', 'snapshot');
        } else {
            $(snapshotElement.node).attr('class', 'snapshot not-compiles');
        }

        // Render weight for the snapshot
        this.renderSnapshotWeight(index, x, y);

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        $(snapshotClickArea.node).attr('class', 'area snapshot');

        // Tooltip
        $(snapshotClickArea.node).attr({

            'data-toggle': 'tooltip',
            'title': moment(new Date(snapshot.get('snapshotTime'))).format('D.M.YYYY HH.mm'),
            'data-container': 'body'

        });

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(snapshotClickArea.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(snapshotClickArea.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
        this.pointerSet = this.paper.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = this.paper.height;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
                                      pointerX +
                                      ' ' +
                                      pointerY +
                                      ', L' +
                                      (pointerX + width / 2) +
                                      ' ' +
                                      (pointerY - width) +
                                      ', ' +
                                      (pointerX + width) +
                                      ' ' +
                                      pointerY +
                                      'Z');

        $(pointer.node).attr('class', 'pointer');

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        // Limit minimum to 1 minute and maximum to 5 minutes
        var min = Math.min(60000, this.collection.getMinDuration());
        var max = Math.min(300000, this.collection.getMaxDuration());

        // Clear paper
        this.paper.clear();

        // Center point
        var y = this.paper.height / 2 + 3;

        var leftOffset = 0;
        var rightOffset = 0;
        var x = 0;

        var self = this;

        this.snapshotPositions = [];

        this.collection.each(function (snapshot, index) {

            var distanceWeight = self.distanceWeight(index, min, max);
            var snapshotWeight = self.snapshotWeight(index);

            // Weight by duration between snapshots
            var distance = 45 * distanceWeight;

            // Weight by amount of differences between snapshots
            var radius = 12 * snapshotWeight;

            x += (radius * 2);

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === self.collection.length - 1) {

                // Right offset
                rightOffset = radius;
            }

            var previousSnapshot = self.collection.at(index - 1);

            // Render duration between snapshots
            self.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render snapshot
            self.renderSnapshot(snapshot, index, x, y, radius);
            self.snapshotPositions.push(x);

            // Current snapshot
            if (index === self.currentSnapshotIndex) {

                // Render pointer on current snapshot
                self.renderPointer(x, radius);
            }
        });

        // Render timeline
        this.renderTimeline(leftOffset, y, x);

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Focus
        this.focus();

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON()

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput, bottomContainerOutput);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Start spinner
        this.startSpinner();

        var self = this;

        // Calculate differences between snapshots before continuing
        this.collection.getDifferences(function (differences) {

            self.differences = differences;

            self.currentSnapshotIndex = currentSnapshotIndex;
            self.filename = filename;

            // Stop spinner
            self.stopSpinner();

            // Render if user is not dragging
            if (!self.dragging) {
                self.render();
            }
        });
    },

    /* Events */

    didResize: function () {

        // Relocate spinner if necessary
        if (this.spinner) {
            this.stopSpinner();
            this.startSpinner();
        }

        // Rendering finished
        if (this.snapshotPositions.length === this.collection.length) {

            // Center of the current snapshot element
            var cx = this.snapshotPositions[this.currentSnapshotIndex];

            this.render();
            this.centerOn(cx);
        }
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width();
        var canvasOffset = $(this.paper.canvas).offset();

        var leftOffset = canvasOffset.left;
        var rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startSpinner: function () {

        if (this.spinner) {
            return;
        }

        this.spinner = new Spinner({

            lines:      13,
            length:     4,
            width:      4,
            radius:     10,
            corners:    1,
            rotate:     0,
            direction:  1,
            color:      'rgba(0, 0, 0, 0.4)',
            speed:      0.8,
            trail:      60,
            shadow:     false,
            hwaccel:    false,
            className: 'spinner',
            zIndex:     2e9,
            top:        'auto',
            left:       'auto'

        }).spin(this.$el.get(0));
    },

    stopSpinner: function () {

        if (this.spinner) {
            this.spinner.stop();
            this.spinner = null;
        }
    },

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
;

codebrowser.view.SnapshotsTreeView = Backbone.View.extend({

    id: 'snapshots-tree-container',
    className: 'visualization-container',

    template: {

        filenameContainer: Handlebars.templates.TreeFilenameContainer,
        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    isActive: Utils.getLocalStorageValue('showTree', false) === 'true',

    /* Absolute width */
    width: 0,

    /* X-coordinates of all snapshots */
    snapshotPositions: [],

    /* Pointer */
    pointerSetOffsetX: 0,

    scroll: null,

    dragging: false,

    bottomContainer: null,

    filenameContainer: null,

    /* Initialise */
    initialize: function (options) {

        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        var topContainer = $('<tr>');
        topContainer.attr('class','top-container');
        this.$el.append(topContainer);

        // File name container
        this.filenameContainer = $('<td>');
        this.filenameContainer.attr('class','filename-container');
        topContainer.append(this.filenameContainer);

        var toprightContainer = $('<td>');
        toprightContainer.attr('class', 'raphael-container')
        topContainer.append(toprightContainer);

        /* jshint newcap: false */

        this.paper = Raphael(toprightContainer.get(0), '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showTree', this.isActive);

        this.$el.slideToggle();

    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width();
        var center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            this.setViewBox(this.width - viewWidth);

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        // Cx of the current snapshot element
        var cx = this.snapshotPositions[this.currentSnapshotIndex];

        // Make previous snapshot element visible
        if (this.currentSnapshotIndex !== 0) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex - 1])) {
                this.centerOn(cx);
            }
        }

        // Make next snapshot element visible
        if (this.currentSnapshotIndex !== this.snapshotPositions.length - 1) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex + 1])) {
                this.centerOn(cx);
            }
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderTimeline: function (leftOffset, y, x, dashed) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', dashed ? 'timeline-dashed' : 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderFilenameContainer: function (files) {

        var filenames = [];

        for (var i = 0; i < files.length; ++i) {

            filenames.push(files[i]);
        }

        var attributes = {

            filenames: filenames

        };

        this.filenameContainer.html(this.template.filenameContainer(attributes));
    },

    renderBottomContainer: function () {

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON(),

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput);
    },

    renderSnapshotArea: function (snapshot, x, radius) {

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);
    },

    renderSnapshotFile: function (snapshot, index, file, x, y, radius, modified) {

        // Snapshot element
        var snapshotElement = this.paper.circle(x, y, radius);

        $(snapshotElement.node).attr('class', modified ? 'snapshot-modified' : 'snapshot');

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        var isSelected = index === this.currentSnapshotIndex && file.getName() === this.filename;
        $(snapshotClickArea.node).attr('class', isSelected ? 'area snapshot selected' : 'area snapshot');

        // Tooltip
        $(snapshotClickArea.node).attr({

            'data-toggle': 'tooltip',
            'title': moment(new Date(snapshot.get('snapshotTime'))).format('D.M.YYYY HH.mm'),
            'data-container': 'body'

        });

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(snapshotClickArea.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(snapshotClickArea.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
        this.pointerSet = this.paper.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = this.paper.height;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
                                      pointerX +
                                      ' ' +
                                      pointerY +
                                      ', L' +
                                      (pointerX + width / 2) +
                                      ' ' +
                                      (pointerY - width) +
                                      ', ' +
                                      (pointerX + width) +
                                      ' ' +
                                      pointerY +
                                      'Z');

        $(pointer.node).attr('class', 'pointer');

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        var files = this.collection.getFiles();

        // File list affects the canvas size so it should be rendered first
        this.renderFilenameContainer(files);

        var baseHeight = 81;
        var lineSpacing = 60;
        var height = baseHeight + lineSpacing * (files.length - 1);

        this.paper.setSize('100%', height)

        // Clear paper
        this.paper.clear();

        // Y-coordinate of the first line
        var firstLineY = baseHeight / 2 + 3;

        var leftOffset = 100;
        var rightOffset = 0;
        var x = 0;

        var sizeRange = this.collection.getMinAndMaxFileSize();

        var self = this;

        var fileLineStarts = [];

        this.snapshotPositions = [];

        this.collection.each(function (snapshot, index) {

            var snapshotArearadius = 15;

            var distance = 100;
            x += snapshotArearadius * 2;

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === self.collection.length - 1) {

                // Right offset
                rightOffset = snapshotArearadius;
            }

            var currentFiles = [];

            self.snapshotPositions.push(x);

            self.renderSnapshotArea(snapshot, x, snapshotArearadius);
            self.renderSnapshotIndex(index, x);

            // Current snapshot
            if (index === self.currentSnapshotIndex) {

                // Render pointer on current snapshot
                self.renderPointer(x, snapshotArearadius);
            }


            snapshot.get('files').each(function (file) {

                var fileIdx = files.indexOf(file.getName());
                currentFiles[fileIdx] = file.getName();

                var radius = 12 * self._getFileWeight(file.get('filesize'), sizeRange.min, sizeRange.max);

                var diffs = self.differences[index][file.get('name')];

                var y = firstLineY + fileIdx * lineSpacing;
                self.renderSnapshotFile(snapshot, index, file, x, y, radius, diffs.getCount().total() !== 0);

                self.renderChanges(index, diffs, x, y, file, radius);
            });

            self.renderFileLines(fileLineStarts, currentFiles, index, files.length, firstLineY, lineSpacing);

        });

        // Render file lines that have not ended yet
        this.renderFileLines(fileLineStarts, [], this.snapshotPositions.length, files.length, firstLineY, lineSpacing);

        // Show dashed line where file doesn't exist
        for (var i = 0; i < files.length; i++) {

            this.renderTimeline(leftOffset, firstLineY + lineSpacing * i, x, true);
        }

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Focus
        this.focus();

        this.renderBottomContainer();
    },

    renderFileLines: function(fileLineStarts, currentFiles, index, n, firstLineY, lineSpacing) {

        for (var i = 0; i < n; i++) {

            if (currentFiles[i] && !fileLineStarts[i]) {

                fileLineStarts[i] = this.snapshotPositions[index];
            }

            if (!currentFiles[i] && fileLineStarts[i]) {

                this.renderTimeline(fileLineStarts[i], firstLineY + lineSpacing * i, this.snapshotPositions[index - 1]);
                fileLineStarts[i] = undefined;
            }
        }
    },

    renderChanges: function (index, diffs, x, y, file, radius) {

        var total = file.lines();
        var inserted = Math.round((diffs.getCount().insert / total) * 100);
        var deleted = Math.round((diffs.getCount()['delete'] / total) * 100);
        var modified = Math.round((diffs.getCount().replace / total) * 100);

        var totalLength = inserted + deleted + modified;
        if (totalLength > 100) {
            inserted = inserted * (100 / totalLength);
            deleted = deleted * (100 / totalLength);
            modified = modified * (100 / totalLength);
        }

        var values = [inserted, deleted, modified, 100 - totalLength];
        if (totalLength > 0) {
            this.paper.pieChart(x, y, radius+7, values, false);
        }

    },

    _getFileWeight: function (size, minSize, maxSize) {

        if (minSize === maxSize) {
            return 1.5;
        }

        // Linear interpolation between 0.8 and 2.0
        var weight = 1.2 * (size - minSize) / (maxSize - minSize) + 0.8;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(2, weight);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Start spinner
        this.startSpinner();

        var self = this;

        // Calculate differences between snapshots before continuing
        this.collection.getDifferences(function (differences) {

            self.differences = differences;

            self.currentSnapshotIndex = currentSnapshotIndex;
            self.filename = filename;

            // Stop spinner
            self.stopSpinner();

            // Render if user is not dragging
            if (!self.dragging) {
                self.render();
            }
        });
    },

    /* Events */

    didResize: function () {

        // Relocate spinner if necessary
        if (this.spinner) {
            this.stopSpinner();
            this.startSpinner();
        }

        // Rendering finished
        if (this.snapshotPositions.length === this.collection.length) {

            // Cx of the current snapshot element
            var cx = this.snapshotPositions[this.currentSnapshotIndex];

            this.render();
            this.centerOn(cx);
        }
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width();
        var canvasOffset = $(this.paper.canvas).offset();

        var leftOffset = canvasOffset.left;
        var rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startSpinner: function () {

        if (this.spinner) {
            return;
        }

        this.spinner = new Spinner({

            lines:      13,
            length:     4,
            width:      4,
            radius:     10,
            corners:    1,
            rotate:     0,
            direction:  1,
            color:      'rgba(0, 0, 0, 0.4)',
            speed:      0.8,
            trail:      60,
            shadow:     false,
            hwaccel:    false,
            className: 'spinner',
            zIndex:     2e9,
            top:        'auto',
            left:       'auto'

        }).spin(this.$el.get(0));
    },

    stopSpinner: function () {

        if (this.spinner) {
            this.spinner.stop();
            this.spinner = null;
        }
    },

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
;

codebrowser.view.StudentGroupsView = Backbone.View.extend({

    id: 'studentgroups-container',
    template: Handlebars.templates.StudentGroupsContainer,

    events: {
        'click [data-action="search"]': 'filterByName',
        'keyup [data-id="query-string"]': 'filterByName',
        'keypress [data-id="query-string"]': 'filterByName'
    },

    render: function () {

        var output = this.template({ studentGroups: this.collection.toJSON() });
        this.$el.html(output);

        return this;
    },

    filterByName: function() {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});
;

codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    events: {
        'click [data-action="search"]': 'filterStudentListByName',
        'keyup [data-id="query-string"]': 'filterStudentListByName',
        'keypress [data-id="query-string"]': 'filterStudentListByName'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            students: this.collection.toJSON()

        };

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        } else if (this.course) {
            attributes = _.extend(attributes, { course: this.course.toJSON() });
        } else if (this.studentGroup) {
            attributes = _.extend(attributes, { studentGroup: this.studentGroup.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        // bind events also on re-render
        this.delegateEvents();
    },

    filterStudentListByName: function() {

        if (!this.filterHelper) {

            var filterOptions = {

                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    }
});;

codebrowser.view.TagCategoriesView = Backbone.View.extend({

    id: 'tagcategories-container',
    template: Handlebars.templates.TagCategoriesContainer,

    events: {
        'click [data-action="create-category"]': 'createTagCategory',
        'click [data-action="delete-category"]': 'deleteTagCategory'
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tagCategories: this.tagCategories.toJSON(),

        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        this.delegateEvents();
    },

    createTagCategory: function (event) {

        event.preventDefault();

        var text = $('[data-id="category"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        var self = this;

        var existing = self.collection.where({ name: text });

        //If no category with same name, add new
        if (existing.length === 0) {

            var tagCategory = new codebrowser.model.TagCategory({ name: text });

            tagCategory.save( {}, {

                success: function () {

                    self.collection.add(tagCategory);
                    self.render();
                    $('[data-id="category"]').focus();

                },

                error: function () {

                    throw new Error('Failed tag category save.');
                }
            });

        } else {

            self.render();
            $('[data-id="category"]').focus();

        }

    },

    deleteTagCategory: function (event) {
        var id = $(event.target).data('id');
        var category = this.collection.get(id);

        var self = this;

        // Destroy tag Category
        category.destroy({

            success: function () {
                // Remove from collection
                self.collection.remove(category);
                self.render();
            },

            error: function () {

                throw new Error('Failed to delete Tag Category')
            }
        });

    }
});
;

codebrowser.view.TagNamesView = Backbone.View.extend({

    id: 'tagnames-container',
    template: Handlebars.templates.TagNamesContainer,

    events: {

        'click [data-action="search"]':                 'filterTagListsByName',
        'keyup [data-id="query-string"]':               'filterTagListsByName',
        'keypress [data-id="query-string"]':            'filterTagListsByName',
        'click #downloadTagListJson':                   'download',
        'click [data-action="add-to-category"]':        'addTagToCategory',
        'click [data-action="delete-from-category"]':   'deleteTagFromCategory',
        'click .toggle-add':                            'toggleAdd',
        'dragenter .up-scroll':                         'scrollTimer',
        'dragenter .down-scroll':                       'scrollTimer',
        'dragleave .up-scroll':                         'clearScrollTimer',
        'dragleave .down-scroll':                       'clearScrollTimer',
        'dragstart td.link':                            'drag',
        'dragend *:not("p.tag-category")':              'endDrag',
        'drop p.tag-category':                          'dropAndAddToCategory',
        'dragover p.tag-category':                      'allowDropping',
        'dragenter p.tag-category':                     'hilight',
        'dragleave p.tag-category':                     'dehilight'

    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            snapshotTagNames: this.snapshotTagNames.toJSON(),
            exerciseAnswerTagNames: this.exerciseAnswerTagNames.toJSON(),

        }

        if (this.unusedTagNames) {
            attributes = _.extend(attributes, { unusedTagNames : this.unusedTagNames.toJSON() });
        }

        if (this.tagCategory) {
            attributes = _.extend(attributes, { tagCategory: this.tagCategory.toJSON() });
        }

        if (this.tagCategories) {
            attributes = _.extend(attributes, { tagCategories: this.tagCategories.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);

        this.delegateEvents();
    },

    filterTagListsByName: function () {

        if (!this.filterHelper) {

            var filterOptions = {

                'rowSelector' : '.triple-list table tbody tr, .double-list-left table tbody tr, .double-list-right table tbody tr',
                'containerSelector' : '#' + this.id
            };

            this.filterHelper = new codebrowser.helper.ListViewFilter(filterOptions);
        }

        this.filterHelper.filterList();
    },

    download: function () {

        // map from ids to tagnames so that each tagname is only added once
        var exportData = {};

        this._addTagNamesToExport(this.snapshotTagNames, exportData);
        this._addTagNamesToExport(this.exerciseAnswerTagNames, exportData);

        // get values from the map
        var exportValues = Object.keys(exportData).map(function (id) { return exportData[id]; });

        var blob = new Blob([JSON.stringify(exportValues)], {type: 'application/json'});
        saveAs(blob, 'tags.json');

        return false;
    },

    _addTagNamesToExport: function (tagNames, exportData) {

        tagNames.each(function (tagName) {
            var students = {};
            var exercises = {};

            tagName.get('tags').forEach(function (tag) {

                students[tag.student.name] = true;
                exercises[tag.exercise.name  + ' (' + tag.course.name + ')'] = true;
            });

            exportData[tagName.id] = {
                tag: tagName.get('name'),
                students: Object.keys(students),
                exercises: Object.keys(exercises)
            };
        });
    },

    addTagToCategory: function (event) {

        event.preventDefault();

        var id = event.target.id;

        if (!id) {
            return;
        }

        // Find tag that is being added.
        var tagName = codebrowser.model.TagName.findOrCreate({ id : id });

        var tagNames = this.tagCategory.get('tagnames');

        tagNames.push(tagName);

        this.tagCategory.set('tagnames', tagNames);

        var self = this;

        this.tagCategory.save({}, {

            success: function () {

                self.unusedTagNames.remove(tagName);
                self.snapshotTagNames.fetch({ success : function() { self.render(); } });
                self.exerciseAnswerTagNames.fetch({ success : function() { self.render(); } });
            },

            error: function () {

                throw new Error('Adding tag to category failed.');
            }
        });

    },

    deleteTagFromCategory: function (event) {
        var id = $(event.target).data('id');

        if (!id) {
            return;
        }

        var tagName = codebrowser.model.TagName.findOrCreate({ id : id });

        var tagNames = this.tagCategory.get('tagnames');

        var index = tagNames.indexOf(tagName);

        if ( index > -1 ) {
            tagNames.splice(index, 1);
        }

        this.tagCategory.set('tagnames', tagNames);

        var self = this;

        this.tagCategory.save({}, {

            'tagid': id,

            success: function () {

                self.unusedTagNames.fetch({ success : function() { self.render(); } });
                self.snapshotTagNames.fetch({ success : function() { self.render(); } });
                self.exerciseAnswerTagNames.fetch({ success : function() { self.render(); } });
            },

            error: function () {

                throw new Error('Removing tag from category failed.');
            }
        });
    },

    toggleAdd: function () {

        $('.toggle-add').toggleClass('open');
        $('.toggle-add').toggleClass('close');
        $('.tags').slideToggle();
    },

    allowDropping: function (event) {

        event.preventDefault();
    },

    drag: function (event) {

        this.draggedTagnameId = event.currentTarget.id;

        var left = (($(document).width()-$('.add-to-categories').width())/2)-150;
        var top = ($(document).height()-$('.add-to-categories').height())/2;

        $('.add-to-categories').css({ 'display': 'block', 'z-index': '50', 'left': left +'px', 'top': top + 'px' });
        $('.add-to-categories *:not(".scroll")').css({ 'z-index': '50' });

    },

    endDrag: function (event) {

        event.preventDefault();
        $('.add-to-categories').css({ 'display': 'none', 'z-index': '-50' });
        $('.add-to-categories *:not(".scroll")').css({ 'z-index': '-50' });

    },

    dropAndAddToCategory: function (event) {

        event.preventDefault();

        $(event.target).removeClass('hilight');

        $('.add-to-categories').css({ 'display': 'none' });

        var tagName = codebrowser.model.TagName.findOrCreate({ id : this.draggedTagnameId });

        var targetCategoryId = event.currentTarget.id;
        var tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : targetCategoryId }, { create : false });

        var tagNames = tagCategory.get('tagnames');
        tagNames.push(tagName);
        tagCategory.set('tagnames', tagNames);

        tagCategory.save({}, {

            success: function () {
                $('.add-message').css({ display: 'block'});
                $('.add-message').empty().append('Added tag '+ tagName.id + ' into category '+tagCategory.id);
                $('.add-message').delay(800).fadeOut();

            },

            error: function () {

                throw new Error('Adding tag to category failed.');
            }
        });

    },

    scrollCategoriesDown: function () {

        var categories = $('.category-list');
        var curTop = categories.scrollTop();
        categories.scrollTop(curTop+1);

    },

    scrollCategoriesUp: function () {

        var categories = $('.category-list');
        var curTop = categories.scrollTop();
        categories.scrollTop(curTop-1);

    },

    scrollTimer: function (event) {

        event.preventDefault();

        if (event.currentTarget.classList[1] === 'down-scroll') {

            this.repeater = setInterval(this.scrollCategoriesDown, 10);
        }
        else if (event.currentTarget.classList[1] === 'up-scroll') {

            this.repeater = setInterval(this.scrollCategoriesUp, 10);
        }
    },

    clearScrollTimer: function () {

        clearInterval(this.repeater);
    },

    hilight: function (event) {

        $(event.target).addClass('hilight');
    },

    dehilight: function (event) {

        $(event.target).removeClass('hilight');
    }

});
;

codebrowser.view.TagsView = Backbone.View.extend({

    id: 'tags-container',
    template: Handlebars.templates.TagsContainer,

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            tagNameText: this.tagName.get('name'),
            tags: this.collection.toJSON()

        }

        if (this.tagCategory) {
            attributes = _.extend(attributes, { tagCategory: this.tagCategory.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    }
});
;

codebrowser.controller.ViewController = {

    view: null,

    isActive: function (view) {

        return this.view === view;
    },

    push: function (view, render) {

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }

        // Set to container
        $(config.view.container).html(this.view.el);
    }
}
;

/*
 * Base type for all routers with common functionality.
 */

codebrowser.router.BaseRouter = Backbone.Router.extend({

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    fetchModel: function (model, useCache, onSuccess) {

        var self = this;

        model.fetch({

            cache: useCache,
            expires: useCache ? config.cache.expires : 0,

            success: function (model, response, options) {

                onSuccess(model, response, options);
            },

            error: function () {

                self.notFound();
            }
        });

    }
});
;

codebrowser.router.CommentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'comments(/)':          'allComments',
        'comments?page=:page':  'paginatedComments',

    },

    /* Initialise */

    initialize: function () {

        this.commentsView = new codebrowser.view.CommentsView();
    },

    /* Actions */

    paginatedComments: function (page) {

        this.comments(page);
    },

    allComments: function() {

        // Show first page
        this.comments(0);
    },

    comments: function (page) {

        var self = this;

        var commentCollection = new codebrowser.collection.CommentCollection(null, { 'page' : page });

        this.fetchModel(commentCollection, false, function (data, response) {

            // add comments as collection
            commentCollection.reset(response.content);

            // Render after comments have been fetched
            self.commentsView.page = page;
            self.commentsView.collection = commentCollection;
            self.commentsView.firstPage = response.firstPage;
            self.commentsView.lastPage = response.lastPage;
            self.commentsView.totalPages = response.totalPages;
            self.commentsView.numberOfElements = response.numberOfElements;
            self.commentsView.totalElements = response.totalElements;
            self.commentsView.query = undefined;

            codebrowser.controller.ViewController.push(self.commentsView, true);
        });
    }
});
;

codebrowser.router.CourseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'courses(/)':                     'courses',
        'students/:studentId(/)':         'navigation',
        'students/:studentId/courses(/)': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.courseView = new codebrowser.view.CoursesView();
    },

    /* Actions */

    navigation: function (studentId) {

        codebrowser.app.courseRouter.navigate('#/students/' +
                                                studentId +
                                                '/courses', { replace: true });
    },

    courses: function (studentId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(studentId ? 2 : 1, function () {

            codebrowser.controller.ViewController.push(self.courseView, true);
        });

        if (studentId) {
            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.courseView.student = student;
                fetchSynced();
            });
        }

        var courseCollection = new codebrowser.collection.CourseCollection(null, { studentId: studentId });

        this.courseView.collection = courseCollection;

        // Fetch course collection
        this.fetchModel(courseCollection, true, fetchSynced);
    }
});
;

codebrowser.router.ExerciseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'courses/:courseId/exercises(/)':                     'courseExercises',
        'courses/:courseId/students/:studentId(/)':           'navigateToStudentExercises',
        'courses/:courseId/students/:studentId/exercises(/)': 'studentExercises',
        'students/:studentId/courses/:courseId(/)':           'navigation',
        'students/:studentId/courses/:courseId/exercises(/)': 'exercises'

    },

    /* Initialise */

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExercisesView();
    },

    /* Actions */

    navigation: function (studentId, courseId) {

        codebrowser.app.exerciseRouter.navigate('#/students/' +
                                                studentId +
                                                '/courses/' +
                                                courseId +
                                                '/exercises', { replace: true });
    },

    courseExercises: function (courseId) {

        this.exercises(null, courseId, null);
    },

    navigateToStudentExercises: function (courseId, studentId) {

        codebrowser.app.exerciseRouter.navigate('#/courses/' +
                                                courseId +
                                                '/students/' +
                                                studentId +
                                                '/exercises', { replace: true });
    },

    studentExercises: function (courseId, studentId) {

        this.exercises(studentId, courseId, 'studentExercises');
    },

    exercises: function (studentId, courseId, viewPath) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            codebrowser.controller.ViewController.push(self.exerciseView, true);
        });

        if (viewPath) {
            self.exerciseView.viewPath = viewPath;
        }

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.exerciseView.student = student;
                fetchSynced();
            });
        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ id: courseId });

        var exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { studentId: studentId,
                                                                                       courseId: courseId });

        // Fetch course
        this.fetchModel(course, true, function () {

            self.exerciseView.course = course;
            fetchSynced();
        });

        this.exerciseView.collection = exerciseCollection;

        // Fetch exercise collection
        this.fetchModel(exerciseCollection, true, fetchSynced);
    }
});
;

codebrowser.router.RootRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        '':          'root',
        '*notFound': 'pageNotFound'

    },

    /* Initialise */

    initialize: function () {

        this.rootView = new codebrowser.view.RootView();
        this.errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops!' } });
    },

    /* Actions */

    root: function () {

        var self = this;

        var studentGroups = new codebrowser.collection.StudentGroupCollection();

        this.fetchModel(studentGroups, true, function () {

            self.rootView.showStudentGroups = studentGroups.size() > 0;
            codebrowser.controller.ViewController.push(self.rootView, true);
        });

        this.rootView.showTags = localStorage.getItem('config.tagnames');
        this.rootView.showTagCategories = localStorage.getItem('config.tagcategories');
        this.rootView.showComments = localStorage.getItem('config.comments');
    },

    pageNotFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    }
});
;

codebrowser.router.SelectRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'courses/:courseId(/)':                               'navigateToCourse',
        'courses/:courseId/select(/)':                        'select'

    },

    /* Initialise */

    initialize: function () {

        this.selectView = new codebrowser.view.SelectView();
    },

    /* Actions */

    navigateToCourse: function (courseId) {

        codebrowser.app.exerciseRouter.navigate('#/courses/' +
                                                courseId +
                                                '/select', { replace: true });
    },

    select: function (courseId) {

        var self = this;
        var course = codebrowser.model.Course.findOrCreate({ id: courseId });
        this.fetchModel(course, true, function () {

            self.selectView.course = course;
            codebrowser.controller.ViewController.push(self.selectView, true);
        });
    }
});
;

codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                     'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                           'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':               'snapshot',
        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId(/)': 'snapshot',

        'courses/:courseId/students/:studentId/exercises/:exerciseId(/)':                                     'courseNavigation',
        'courses/:courseId/students/:studentId/exercises/:exerciseId/snapshots(/)':                           'courseSnapshot',

        'courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                           'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':               'navigation',
        'courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId(/)': 'navigation'

    },

    studentId: null,
    exerciseId: null,

    /* Initialise */

    initialize: function () {

        this.setUp();
    },

    setUp: function () {

        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {

            this.snapshotView = new codebrowser.view.SnapshotView();
            codebrowser.controller.ViewController.push(this.snapshotView);
        }
    },

    /* Actions */

    navigation: function (courseId, exerciseId, studentId, snapshotId, fileId) {

        this.snapshot(studentId, courseId, exerciseId, snapshotId, fileId, { courseRoute: true });
    },

    courseNavigation: function (courseId, exerciseId, studentId) {

        codebrowser.app.snapshotRouter.navigate('#/courses/' +
                                                courseId +
                                                '/students/' +
                                                studentId +
                                                '/exercises/' +
                                                exerciseId +
                                                '/snapshots/', { replace: true });
    },

    courseSnapshot: function (courseId, studentId, exerciseId) {
        this.snapshot(studentId, courseId, exerciseId, null, null, null, { courseRoute: true});
    },

    snapshot: function (studentId, courseId, exerciseId, snapshotId, fileId, options) {

        var self = this;

        this.setUp();

        var snapshotCollection;

        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            this.snapshotView.collection = snapshotCollection;

            this.studentId = studentId;
            this.exerciseId = exerciseId;

        } else {

            snapshotCollection = this.snapshotView.collection;
        }

        if (options && options.courseRoute) {
            this.snapshotView.courseRoute = true;
        }

        // Wait for fetches to be in sync
        var fetchSynced = _.after(2, function () {
            var snapshot;

            // No snapshot ID specified, navigate to first snapshot
            if (!snapshotId) {

                snapshot = snapshotCollection.at(0);

                self.snapshotView.navigate(snapshot, null, { replace: true });

                return;
            }

            // Snapshot
            snapshot = snapshotCollection.get(snapshotId);

            // Invalid snapshot ID
            if (!snapshot) {

                self.notFound();

                return;
            }

            // No file ID specified, navigate to first file
            if (!fileId) {

                self.snapshotView.navigate(snapshot, null, { replace: true });

                return;
            }

            // Invalid file ID
            if (!snapshot.get('files').get(fileId)) {

                self.notFound();

                return;
            }

            self.snapshotView.update(snapshot, fileId);
        });

        var student = codebrowser.model.Student.findOrCreate({ id: studentId });

        // Fetch student
        this.fetchModel(student, true, function () {

            self.snapshotView.student = student;
            fetchSynced();
        });

        // Fetch snapshot collection
        this.fetchModel(snapshotCollection, true, fetchSynced);
    }
});
;

codebrowser.router.StudentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'students(/)':                                                    'students',
        'studentgroups/:studentGroupId(/)':                               'groupNavigation',
        'studentgroups/:studentGroupId/students(/)':                      'groupStudents',
        'courses/:courseId/exercises/:exerciseId(/)':                     'navigation',
        'courses/:courseId/exercises/:exerciseId/students(/)':            'exerciseStudents',
        'courses/:courseId/students(/)':                                  'courseStudents'

    },

    /* Initialise */

    initialize: function () {

        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    navigation: function (courseId, exerciseId) {

        codebrowser.app.studentRouter.navigate('#/courses/' +
                                         courseId +
                                         '/exercises/' +
                                         exerciseId +
                                         '/students', { replace: true });

    },

    groupNavigation: function (studentGroupId) {

        codebrowser.app.studentRouter.navigate('#/studentgroups/' +
                                         studentGroupId +
                                         '/students', { replace: true });
    },

    exerciseStudents: function (courseId, exerciseId) {

        this.students({ courseId: courseId, exerciseId: exerciseId });

    },

    courseStudents: function (courseId) {

        this.students({ courseId: courseId });
    },

    groupStudents: function (studentGroupId) {

        this.students({ studentGroupId: studentGroupId });
    },

    students: function (options) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            codebrowser.controller.ViewController.push(self.studentView, true);
        });

        if (options && options.courseId) {

            var courseFetched = _.after(1, function () {

                if(options.exerciseId) {

                    var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

                    // Fetch exercise
                    self.fetchModel(exercise, true, function() {

                        self.studentView.exercise = exercise;
                        fetchSynced();
                    });

                } else {

                    fetchSynced();
                }
            });

            var course = codebrowser.model.Course.findOrCreate({ id: options.courseId });

            // Fetch course
            this.fetchModel(course, true, function() {

                self.studentView.course = course;
                self.studentView.exercise = null;
                self.studentView.studentGroup = null;
                courseFetched();
                fetchSynced();
            });

        } else if (options && options.studentGroupId) {

            var studentGroup = codebrowser.model.StudentGroup.findOrCreate({ id: options.studentGroupId });

            this.fetchModel(studentGroup, true, function() {

                self.studentView.studentGroup = studentGroup;
                self.studentView.course = null;
                self.studentView.exercise = null;
                fetchSynced();
                fetchSynced();
            });

        } else {

            self.studentView.studentGroup = null;
            self.studentView.course = null;
            self.studentView.exercise = null;
            fetchSynced();
            fetchSynced();
        }

        var studentCollection = new codebrowser.collection.StudentCollection(null, options);

        this.studentView.collection = studentCollection;

        // Fetch student collection
        this.fetchModel(studentCollection, true, fetchSynced);
    }
});
;

codebrowser.router.StudentGroupRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'studentgroups(/)': 'studentGroups',

    },

    /* Initialise */

    initialize: function () {

        this.studentGroupsView = new codebrowser.view.StudentGroupsView();
    },

    /* Actions */

    studentGroups: function () {

        var self = this;

        var studentGroupCollection = new codebrowser.collection.StudentGroupCollection();

        this.studentGroupsView.collection = studentGroupCollection;

        this.fetchModel(studentGroupCollection, true, function () {

            codebrowser.controller.ViewController.push(self.studentGroupsView, true);
        });
    }
});
;

codebrowser.router.TagRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        'tagnames(/)':                                                  'tagnames',
        'tagnames/:tagNameId(/)':                                       'navigation',
        'tagnames/:tagNameId/tags(/)':                                  'tagsForTagName',
        'tagcategories(/)':                                             'listcategories',
        'tagcategories/:tagCategoryId(/)':                              'navigateToTagnames',
        'tagcategories/:tagCategoryId/tagnames(/)':                     'tagnames',
        'tagcategories/:tagCategoryId/tagnames/:tagNameId/tags(/)':     'tagsForCategory'

    },

    /* Initialise */

    initialize: function () {

        this.tagNamesView = new codebrowser.view.TagNamesView();
        this.tagsView = new codebrowser.view.TagsView();
        this.tagCategoriesView = new codebrowser.view.TagCategoriesView();
    },

    /* Actions */

    navigation: function (tagNameId) {

        codebrowser.app.tagRouter.navigate('#/tagnames/' + tagNameId + '/tags', { replace: true });
    },

    navigateToTagnames: function (tagCategoryId) {

        codebrowser.app.tagRouter.navigate('#/tagcategories/' + tagCategoryId + '/tagnames', { replace: true });
    },

    tagnames: function (tagCategoryId) {

        var self = this;
        var snapshotTagNames;
        var exerciseAnswerTagNames;
        var unusedTagNames;
        var tagCategory;
        var tagCategories;

        if (tagCategoryId) {

            snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, onlySnapshotTags : true });

            exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, onlyExerciseAnswerTags : true });

            unusedTagNames = new codebrowser.collection.TagNameCollection(null, { tagCategoryId: tagCategoryId, unusedTags : true });

            tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : tagCategoryId });

        } else {

            snapshotTagNames = new codebrowser.collection.TagNameCollection(null, { onlySnapshotTags : true });

            exerciseAnswerTagNames = new codebrowser.collection.TagNameCollection(null, { onlyExerciseAnswerTags : true });

            tagCategories = new codebrowser.collection.TagCategoryCollection(null, null);

        }

        // Render after tag name, tags and when needed tag categories and unused tags have been fetched
        var fetchSynced = _.after(5, function () {

            self.tagNamesView.snapshotTagNames = snapshotTagNames;
            self.tagNamesView.exerciseAnswerTagNames = exerciseAnswerTagNames;
            self.tagNamesView.tagCategory = tagCategory;
            self.tagNamesView.unusedTagNames = unusedTagNames;
            self.tagNamesView.tagCategories = tagCategories;

            codebrowser.controller.ViewController.push(self.tagNamesView, true);
        });

        // Fetch snapshot tag names
        this.fetchModel(snapshotTagNames, false, fetchSynced);

        // Fetch tag names for normal tags
        this.fetchModel(exerciseAnswerTagNames, false, fetchSynced);

        // Fetch tag names that are not yet added to tag category when needed
        // Needed when showing tags inside a certain category
        if (unusedTagNames) {
            this.fetchModel(unusedTagNames, false, fetchSynced);
        }
        else {
            fetchSynced();
        }

        // Fetch tag category when needed
        // Needed when tags inside a certaon category are shown
        if (tagCategory) {
            tagCategory.fetch();
            fetchSynced();
        }
        else {
            fetchSynced();
        }

        // Fetch all tag categories when needed
        // Needed when all tags are shown
        if (tagCategories) {
            this.fetchModel(tagCategories, false, fetchSynced);
        }
        else {
            fetchSynced();
        }

    },

    tagsForTagName: function (tagNameId) {

        this.tags({ tagNameId: tagNameId });
    },

    tagsForCategory: function (tagCategoryId, tagNameId) {

        this.tags({ tagNameId: tagNameId, tagCategoryId: tagCategoryId });
    },

    tags: function (options) {

        var self = this;

        var tagName = codebrowser.model.TagName.findOrCreate({ id : options.tagNameId });

        var tagCollection = new codebrowser.collection.TagCollection(null, { tagNameId: options.tagNameId });

        var tagCategory;
        if (options.tagCategoryId) {
            tagCategory = codebrowser.model.TagCategory.findOrCreate({ id : options.tagCategoryId });
        }

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(3, function () {

            self.tagsView.tagName = tagName;
            self.tagsView.collection = tagCollection;
            self.tagsView.tagCategory = tagCategory;

            codebrowser.controller.ViewController.push(self.tagsView, true);
        });

        // Fetch tag name
        this.fetchModel(tagName, false, fetchSynced);

        // Fetch tags
        this.fetchModel(tagCollection, false, fetchSynced);

        // Fetch tagCategory if needed
        if (tagCategory) {
            this.fetchModel(tagCategory, false, fetchSynced);
        }
        else {
            fetchSynced();
        }
    },

    listcategories: function () {

        var self = this;

        var tagCategories = new codebrowser.collection.TagCategoryCollection(null, { onlySnapshotTags : true });

        // Render after both tag name and tags have been fetched
        var fetchSynced = _.after(1, function () {

            self.tagCategoriesView.collection = tagCategories;
            self.tagCategoriesView.tagCategories = tagCategories;

            codebrowser.controller.ViewController.push(self.tagCategoriesView, true);
        });

        // Fetch tag names for normal tags
        this.fetchModel(tagCategories, false, fetchSynced);
    },
});
;

/* Draws a piechart of the amount of tests passing */
Raphael.fn.pieChart = function (cx, cy, r, values) {

    var paper = this,
    rad = Math.PI / 180,
    circle,
    chart = this.set();

    //Draw a sector
    function sector(cx, cy, r, startAngle, endAngle, params) {

        var x1 = cx + r * Math.cos(startAngle * rad),
            x2 = cx + r * Math.cos(endAngle * rad),
            y1 = cy + r * Math.sin(startAngle * rad),
            y2 = cy + r * Math.sin(endAngle * rad);

        return paper.path(['M', cx, cy, 'L', x1, y1, 'A', r, r, 1, +(endAngle - startAngle > 180), 1, x2, y2, 'z']).attr(params);

    }

    var angle = -90,
        total = 0,
        colors = ['#C5FFBF', '#FABEB6', '#228BE0', '#FFFFFF'];

    for (var j = 0; j < values.length; j++) {

        total += values[i];
    }

    for (var i = 0; i < values.length; i++) {

        var value = values[i];

        if (value === 100) {

            circle = paper.circle(cx, cy, r);
            circle.attr('fill', colors[i]);
            circle.toBack();
            chart.push(circle);

            return chart;
        }

        if (value === 0) {

            continue;
        }

        circle = paper.circle(cx, cy, r);
        $(circle.node).attr('class', 'snapshot-with-test-results');
        circle.toBack();
        chart.push(circle);

        var angleplus = 360 * value / 100,
                color = colors[i],
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: color, 'stroke-width': 0});

        p.toBack();

        angle += angleplus;
        chart.push(p);

    }

    return chart;
}

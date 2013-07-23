this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n            ",e={hash:{},inverse:n.noop,fn:n.programWithDepth(2,g,b,a),data:b},(d=c.courses)?d=d.call(a,e):(d=a.courses,d=typeof d===l?d.apply(a):d),c.courses||(d=o.call(a,d,e)),(d||0===d)&&(f+=d),f+="\n\n        "}function g(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+m((e=d.studentId,typeof e===l?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===l?f.apply(a):f),g+=m(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===l?f.apply(a):f),g+=m(f)+"</a></li>\n            "}function h(a,b){var d,e,f="";return f+="\n\n            ",e={hash:{},inverse:n.noop,fn:n.program(5,i,b),data:b},(d=c.courses)?d=d.call(a,e):(d=a.courses,d=typeof d===l?d.apply(a):d),c.courses||(d=o.call(a,d,e)),(d||0===d)&&(f+=d),f+="\n\n        "}function i(a,b){var d,e="";return e+="\n                <li><a href='#/courses/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===l?d.apply(a):d),e+=m(d)+"/exercises'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===l?d.apply(a):d),e+=m(d)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this,o=c.blockHelperMissing;return k+="<h2>Courses</h2>\n\n<section>\n\n    <ul>\n        ",j=c["if"].call(b,b.studentId,{hash:{},inverse:n.program(4,h,e),fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.EditorSettingsContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal'>×</button>\n\n                <h1>Settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines'> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size'>\n                                <option value='11'>Small</option>\n                                <option value='12'>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal'>Cancel</button>\n            <button data-id='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\n\n        </div>\n\n</footer>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h,i="",j="function",k=this.escapeExpression,l=c.helperMissing;return i+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===j?f.apply(b):f),i+=k(f)+"</h1>\n\n    <span class='pull-right'>\n\n        + ",h={hash:{},data:e},i+=k((f=c.duration||b.duration,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"duration",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+"\n\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n           data-original-title='\n\n                <time>",h={hash:{},data:e},i+=k((f=c.date||b.date,f?f.call(b,(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"date",(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+" –</time>\n                <time>",h={hash:{},data:e},i+=k((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+"</time>\n\n           '\n\n           data-content='\n\n            <dl class=\"dl-horizontal pull-left\">\n\n              <dt>Change</dt>\n              <dd>",(g=c.percentageOfChange)?g=g.call(b,{hash:{},data:e}):(g=b.percentageOfChange,g=typeof g===j?g.apply(b):g),i+=k(g)+" %</dd>\n\n              <dt>Insert</dt>\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f.insert,typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.insert),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.insert),"line",h)))+"</dd>\n\n              <dt>Replace</dt>\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f.replace,typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.replace),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.replace),"line",h)))+"</dd>\n\n              <dt>Delete</dt>\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f["delete"],typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f["delete"]),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f["delete"]),"line",h)))+"</dd>\n\n            </dl>\n\n        '><i class='icon-info-sign icon-gray'></i></a>\n\n    </span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n            ",e={hash:{},inverse:n.noop,fn:n.programWithDepth(2,g,b,a),data:b},(d=c.exercises)?d=d.call(a,e):(d=a.exercises,d=typeof d===l?d.apply(a):d),c.exercises||(d=o.call(a,d,e)),(d||0===d)&&(f+=d),f+="\n\n        "}function g(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+m((e=d.studentId,typeof e===l?e.apply(a):e))+"/courses/"+m((e=d.courseId,typeof e===l?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===l?f.apply(a):f),g+=m(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===l?f.apply(a):f),g+=m(f)+"</a></li>\n            "}function h(a,b){var d,e,f="";return f+="\n\n            ",e={hash:{},inverse:n.noop,fn:n.programWithDepth(5,i,b,a),data:b},(d=c.exercises)?d=d.call(a,e):(d=a.exercises,d=typeof d===l?d.apply(a):d),c.exercises||(d=o.call(a,d,e)),(d||0===d)&&(f+=d),f+="\n\n        "}function i(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/courses/"+m((e=d.courseId,typeof e===l?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===l?f.apply(a):f),g+=m(f)+"/students'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===l?f.apply(a):f),g+=m(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this,o=c.blockHelperMissing;return k+="<h2>Exercises</h2>\n\n<section>\n\n    <ul>\n        ",j=c["if"].call(b,b.studentId,{hash:{},inverse:n.program(4,h,e),fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotFilesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n        <li data-id='",(e=c.id)?e=e.call(a,{hash:{},data:b}):(e=a.id,e=typeof e===k?e.apply(a):e),g+=l(e)+"'><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<header>\n\n    <i class='icon-folder-close icon-gray'></i> <h1>"+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+"</h1>\n\n</header>\n\n<ul>\n    ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n</ul>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<div class='row'>\n\n    <div class='span2'>\n\n        <button id='toggleFiles' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(f=c.current)?f=f.call(b,{hash:{},data:e}):(f=b.current,f=typeof f===h?f.apply(b):f),g+=i(f)+" / ",(f=c.total)?f=f.call(b,{hash:{},data:e}):(f=b.total,f=typeof f===h?f.apply(b):f),g+=i(f)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.SnapshotsTimelineBottomContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i=c.helperMissing,j=this.escapeExpression;return h+="<div class='row'>\n\n    <div class='span2'>\n\n        <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g)))+"</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g)))+" (+ ",g={hash:{},data:e},h+=j((f=c.duration||b.duration,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g):i.call(b,"duration",(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g)))+")</time>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n                <tr>\n                    <td class='link'><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===j?d.apply(a):d),e+=k(d)+"</a></td>\n                </tr>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n        <li class='active'>Students</li>\n    </ul>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            ",h={hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e},(g=c.students)?g=g.call(b,h):(g=b.students,g=typeof g===j?g.apply(b):g),c.students||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n        </tbody>\n\n    </table>\n\n</section>\n"});
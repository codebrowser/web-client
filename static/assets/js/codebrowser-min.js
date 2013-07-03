this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Courses</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.courses)?g=g.call(b,h):(g=b.courses,g=typeof g===j?g.apply(b):g),c.courses||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n\n    <span class='pull-right'>\n\n        + ",g={hash:{},data:e},h+=j((f=c.duration||b.duration,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"duration",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"\n\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n           data-original-title='\n\n                <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+" –</time>\n                <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</time>\n\n           '\n\n           data-content='\n\n            <dl class=\"dl-horizontal pull-left\">\n\n              <dt>Insert</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f.insert,typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.insert),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.insert),"line",g)))+"</dd>\n\n              <dt>Replace</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f.replace,typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.replace),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.replace),"line",g)))+"</dd>\n\n              <dt>Delete</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f["delete"],typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f["delete"]),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f["delete"]),"line",g)))+"</dd>\n\n            </dl>\n\n        '><i class='icon-info-sign icon-gray'></i></a>\n\n    </span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/"+k((e=d.courseId,typeof e===j?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Exercises</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.exercises)?g=g.call(b,h):(g=b.exercises,g=typeof g===j?g.apply(b):g),c.exercises||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                    <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\n\n    <div class='span6'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n                ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n            <li><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===j?d.apply(a):d),e+=k(d)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Students</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e},(g=c.students)?g=g.call(b,h):(g=b.students,g=typeof g===j?g.apply(b):g),c.students||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"});var config={storage:{view:{EditorView:{split:"codebrowser.view.EditorView.split",diff:"codebrowser.view.EditorView.diff"}}},api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/light"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},controller:{},router:{},initialize:function(){window.onerror=function(){var a=new codebrowser.view.ErrorView({model:{message:"Oops!"}});codebrowser.controller.ViewController.push(a,!0)},codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.student=new codebrowser.router.StudentRouter,codebrowser.app.course=new codebrowser.router.CourseRouter,codebrowser.app.exercise=new codebrowser.router.ExerciseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return moment(new Date(a)).format("D.M.YYYY HH.mm.ss")}),codebrowser.helper.Duration={calculate:function(a,b,c){var d,e,f=a-b,g=Math.round(f/1e3);if(g>60){var h=Math.round(g/60);if(h>60){var i=Math.round(h/60);if(i>24){var j=Math.round(i/24);d=j,e="day"}else d=i,e="hour"}else d=h,e="minute"}else d=g,e="second";return d>1&&(e+="s"),c?(e=e.slice(0,1),d+e):d+" "+e}},Handlebars.registerHelper("duration",function(a,b){return codebrowser.helper.Duration.calculate(a,b)}),Handlebars.registerHelper("pluralize",function(a,b){return 1===a?b:b+"s"}),codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Diff=function(a,b){for(var c={replace:0,insert:0,"delete":0},d={insert:[],replace:[],"delete":[],all:[]},e=difflib.stringAsLines(a),f=difflib.stringAsLines(b),g=new difflib.SequenceMatcher(e,f),h=g.get_opcodes(),i=0,j=0,k=0;k<h.length;k++){var l=h[k],m={type:l[0],rowStart:l[3],rowEnd:l[4]-1,offset:i};if("equal"!==m.type){if("replace"===m.type){var n=_.clone(m),o=l[2]-l[1]-1,p=l[4]-l[3]-1,q=m.rowEnd-m.rowStart+1,r=l[2]-l[1],s=q-r;o>p&&(0!==m.rowEnd-m.rowStart&&(m.rowEnd-=r>s?r:s),d.replace.push(m),d.all.push(m),c.replace+=m.rowEnd-m.rowStart+1,m=n,m.type="delete",l[1]+=q),p>o&&(m.rowEnd-=r>s?r:s,d.replace.push(m),d.all.push(m),c.replace+=m.rowEnd-m.rowStart+1,m=n,m.type="insert",m.rowStart+=r)}if("insert"===m.type&&(j+=m.rowEnd-m.rowStart+1),"delete"===m.type){var t=e.slice(l[1],l[2]),u=t.join("\n")+"\n";m.rowStart=l[1]+j,m.rowEnd=l[2]-1+j,m=_.extend(m,{fromRowStart:l[1],fromRowEnd:l[2]-1,lines:u});var v=m.rowEnd-m.rowStart+1;i+=v,j+=v}c[m.type]+=m.rowEnd-m.rowStart+1,d[m.type].push(m),d.all.push(m)}}this.getCount=function(){return c},this.getDifferences=function(){return d}},codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({content:null,urlRoot:function(){return config.api.main.root+"students/"+this.get("snapshot").get("studentId")+"/courses/"+this.get("snapshot").get("courseId")+"/exercises/"+this.get("snapshot").get("exerciseId")+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){if(this.content)return a(this.content,null),void 0;var b=this,c=$.get(this.urlRoot()+"/"+this.id+"/content",function(c){b.content=c,a(b.content,null)});c.fail(function(){a(null,c)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}},{type:Backbone.HasOne,key:"course",relatedModel:"codebrowser.model.Course"},{type:Backbone.HasOne,key:"exercise",relatedModel:"codebrowser.model.Exercise"}],initialize:function(){this.collection&&(this.set("studentId",this.collection.studentId),this.set("courseId",this.collection.courseId),this.set("exerciseId",this.collection.exerciseId))}}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:function(){return this.studentId?config.api.main.root+"students/"+this.studentId+"/courses":config.api.main.root+"courses"},initialize:function(a,b){b&&(this.studentId=b.studentId)}}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){if(this.course)return this.course.url()+"/exercises";if(!this.studentId||!this.courseId)throw new Error("Options studentId and courseId are required to fetch exercises.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId)}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.CoursesView=Backbone.View.extend({id:"courses-container",template:{coursesContainer:Handlebars.templates.CoursesContainer},render:function(){var a={studentId:this.collection.studentId,courses:this.collection.toJSON()},b=$(this.template.coursesContainer(a));this.$el.html(b)}}),codebrowser.view.EditorView=Backbone.View.extend({id:"editor-container",template:{topContainer:Handlebars.templates.EditorTopContainer},decorations:{"main-editor":[],"side-editor":[]},markers:{"main-editor":[],"side-editor":[]},insertedLines:{"main-editor":[]},events:{"click #editor-inspector":"toggleInspector"},split:!1,canSplit:function(){return this.model!==this.previousModel},diff:!1,canDiff:function(){return this.model!==this.previousModel},differences:new codebrowser.model.Diff("",""),inspector:!1,initialize:function(){this.$el.hide(),this.topContainer=$("<div>"),this.editorElement=$("<div>",{id:"editor"}),this.sideEditorElement=$("<div>",{id:"side-editor",height:"800px"}).hide(),this.mainEditorElement=$("<div>",{id:"main-editor",height:"800px"}),this.editorElement.append(this.sideEditorElement),this.editorElement.append(this.mainEditorElement),this.$el.append(this.topContainer),this.$el.append(this.editorElement),this.sideEditor=ace.edit(this.sideEditorElement.get(0)),this.mainEditor=ace.edit(this.mainEditorElement.get(0)),config.editor.configure(this.sideEditor),config.editor.configure(this.mainEditor)},removeDecorations:function(a){for(;this.decorations[a.container.id].length>0;){var b=this.decorations[a.container.id].pop();a.getSession().removeGutterDecoration(b.row,b.style)}},removeMarkers:function(a){for(;this.markers[a.container.id].length>0;)a.getSession().removeMarker(this.markers[a.container.id].pop())},removeInsertedLines:function(a){for(var b=ace.require("ace/range").Range;this.insertedLines[a.container.id].length>0;){var c=this.insertedLines[a.container.id].pop();a.getSession().remove(new b(c.rowStart,0,c.rowEnd,0))}},clearDiff:function(){this.removeDecorations(this.mainEditor),this.removeDecorations(this.sideEditor),this.removeInsertedLines(this.mainEditor),this.removeMarkers(this.mainEditor),this.removeMarkers(this.sideEditor)},render:function(){var a={previous:this.previousModel.toJSON(),difference:this.differences.getCount()},b=$(this.template.topContainer(_.extend(this.model.toJSON(),a)));$("#editor-inspector",b).popover({animation:!1,html:!0,trigger:"click"}),this.topContainer.html(b),this.inspector&&$("#editor-inspector").popover("toggle")},fold:function(a,b){_.each(b,function(b){a.getSession().foldAll(b.start.row,b.end.row,0)})},decorateGutter:function(a,b,c,d){for(var e=b;c>=e;e++)this.decorations[a.container.id].push({row:e,style:"decoration gutter-"+d}),a.getSession().addGutterDecoration(e,"decoration gutter-"+d)},setContent:function(a,b,c){var d=_.clone(a.getSession().getAllFolds()),e=a.getSelection().getSelectionAnchor(),f=a.getSession().getScrollTop();this.removeDecorations(a),this.removeMarkers(a),a.setValue(b),this.fold(a,d),a.moveCursorToPosition(e),a.getSelection().clearSelection(),a.getSession().setScrollTop(f),a.getSession().setMode(c)},update:function(a,b){var c=this;this.model=b,this.previousModel=a;var d=_.after(2,function(){var a=c.sideEditor.getValue(),b=c.mainEditor.getValue();c.differences=new codebrowser.model.Diff(a,b),c.toggleDiff(c.diff),c.render()}),e=codebrowser.helper.AceMode.getModeForFilename(this.model.get("name"));this.previousModel===this.model?(this.differences=new codebrowser.model.Diff("",""),this.toggleSplit(!1),this.toggleDiff(!1)):(this.split||this.toggleSplit("true"===localStorage.getItem(config.storage.view.EditorView.split)),this.diff||this.toggleDiff("true"===localStorage.getItem(config.storage.view.EditorView.diff))),this.previousModel!==this.model&&a.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.setContent(c.sideEditor,a,e),d()}),this.model.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.previousModel===c.model&&c.setContent(c.sideEditor,a,e),c.setContent(c.mainEditor,a,e),d()}),this.$el.show(),this.render()},didResize:function(){this.inspector&&($("#editor-inspector").popover("toggle"),$("#editor-inspector").popover("toggle"))},didSplit:function(){this.diff&&(this.clearDiff(),this.toggleDiff(this.diff)),this.mainEditor.resize(),this.sideEditor.resize(),this.mainEditor.renderer.updateFull(),this.sideEditor.renderer.updateFull()},toggleSplit:function(a){return void 0!==a?this.split=a:(this.split=!this.split,localStorage.setItem(config.storage.view.EditorView.split,this.split)),this.split?(this.sideEditorElement.css({"float":"left",width:"50%"}),this.sideEditorElement.show(),this.mainEditorElement.css({"float":"right",width:"50%"}),this.didSplit(),void 0):(this.sideEditorElement.hide(),this.mainEditorElement.css({"float":"",width:""}),this.didSplit(),void 0)},toggleDiff:function(a){var b=ace.require("ace/range").Range;if(void 0!==a?this.diff=a:(this.diff=!this.diff,localStorage.setItem(config.storage.view.EditorView.diff,this.diff)),this.diff)for(var c=0;c<this.differences.getDifferences().all.length;c++){var d,e=this.differences.getDifferences().all[c];if("delete"===e.type){if(this.split){d=this.sideEditor.getSession().addMarker(new b(e.fromRowStart,0,e.fromRowEnd,1),e.type,"fullLine"),this.decorateGutter(this.sideEditor,e.fromRowStart,e.fromRowEnd,"delete"),this.markers["side-editor"].push(d);continue}this.mainEditor.getSession().insert({row:e.rowStart+e.offset,column:0},e.lines),this.decorateGutter(this.mainEditor,e.rowStart+e.offset,e.rowEnd+e.offset,"delete"),this.insertedLines["main-editor"].push({rowStart:e.rowStart+e.offset,rowEnd:e.rowEnd+1+e.offset})}var f=0;this.split||(f=e.offset),d=this.mainEditor.getSession().addMarker(new b(e.rowStart+f,0,e.rowEnd+f,1),e.type,"fullLine"),this.decorateGutter(this.mainEditor,e.rowStart+f,e.rowEnd+f,e.type),this.markers["main-editor"].push(d)}else this.clearDiff()},toggleInspector:function(a){a.preventDefault(),this.inspector=!this.inspector}}),codebrowser.view.ErrorView=Backbone.View.extend({id:"error-container",template:Handlebars.templates.Error,render:function(){var a=this.template(this.model);this.$el.html(a)}}),codebrowser.view.ExercisesView=Backbone.View.extend({id:"exercises-container",template:{exercisesContainer:Handlebars.templates.ExercisesContainer},render:function(){var a={studentId:this.collection.studentId,courseId:this.collection.courseId,exercises:this.collection.toJSON()},b=$(this.template.exercisesContainer(a));this.$el.html(b)}}),codebrowser.view.NotFoundErrorView=codebrowser.view.ErrorView.extend({model:{message:"Not Found."}}),codebrowser.view.SnapshotView=Backbone.View.extend({id:"snapshot-container",template:{navigationContainer:Handlebars.templates.SnapshotNavigationContainer},events:{"click #split":"split","click #diff":"diff","click #first":"first","click #previous":"previous","click #next":"next","click #last":"last"},initialize:function(){var a=this;this.snapshotsTimelineView=new codebrowser.view.SnapshotsTimelineView({parentView:this}),this.$el.append(this.snapshotsTimelineView.el),this.navigationContainer=$("<div>",{id:"navigation-container"}),this.$el.append(this.navigationContainer),this.editorView=new codebrowser.view.EditorView,this.$el.append(this.editorView.el),this.resize=function(){a.didResize()},$(window).resize(this.resize),this.keydown=function(){37===event.keyCode&&a.previous(),39===event.keyCode&&a.next()},$(document).keydown(this.keydown)},remove:function(){$(window).off("resize",this.resize),$(document).off("keydown",this.keydown),this.editorView.remove(),Backbone.View.prototype.remove.call(this)},render:function(){var a=this.collection.indexOf(this.model),b={current:a+1,total:this.collection.length},c=$(this.template.navigationContainer(_.extend(this.model.toJSON(),b)));this.editorView.split&&$("#split",c).addClass("active"),this.editorView.canSplit()||$("#split",c).attr("disabled",!0),this.editorView.diff&&$("#diff",c).addClass("active"),this.editorView.canDiff()||$("#diff",c).attr("disabled",!0),0===a&&($("#first",c).attr("disabled",!0),$("#previous",c).attr("disabled",!0)),a===this.collection.length-1&&($("#next",c).attr("disabled",!0),$("#last",c).attr("disabled",!0)),this.navigationContainer.html(c)},update:function(a,b){this.model=a;var c=this.collection.indexOf(a),d=this.collection.at(c-1);d||(d=this.model),this.file=this.model.get("files").get(b);var e=this.file.get("name"),f=d.get("files").findWhere({name:e});this.snapshotsTimelineView.update(this.collection,c,e),this.editorView.update(f||this.file,this.file),this.render()},didResize:function(){this.editorView.didResize()},split:function(){this.editorView.toggleSplit()},diff:function(){this.editorView.toggleDiff()},navigate:function(a,b,c){b||(b=a.get("files").first()),codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a.id+"/files/"+b.id,{replace:c?c.replace:c})},first:function(){var a=this.collection.first(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)},previous:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a-1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},next:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a+1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},last:function(){var a=this.collection.last(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)}}),codebrowser.view.SnapshotsTimelineView=Backbone.View.extend({id:"snapshots-timeline-container",dragging:!1,initialize:function(a){this.parentView=a.parentView,this.canvas=Raphael(this.el,"100%",61)},renderTimeline:function(a,b,c){var d=this.canvas.path("M "+a+" "+b+" L "+c+" "+b);$(d.node).attr("class","timeline"),d.toBack()},renderSnapshot:function(a,b,c,d){var e=this,f=this.canvas.rect(b-d,0,2*d,this.canvas.height);$(f.node).attr("class","area");var g=e.canvas.circle(b,c,d);$(g.node).attr("class","snapshot");var h=a.get("files").findWhere({name:this.filename});f.data("snapshot",a),f.data("file",h),g.data("snapshot",a),g.data("file",h),g.click(function(){var a=this.data("snapshot"),b=this.data("file");e.parentView.navigate(a,b)}),g.mouseover(function(){this.animate({transform:"s1.2"},150)}),g.mouseout(function(){this.animate({transform:"s1"},150)})},renderPointer:function(a,b,c){var d=this.canvas.set(),e=7,f=a-e/2,g=b+27,h=a,i=g-e/2,j=this.canvas.path("M"+h+" "+i+", L"+h+" "+0);$(j.node).attr("class","pointer-line"),j.toBack(),d.push(j);var k=this.canvas.path("M"+f+" "+g+", L"+(f+e/2)+" "+(g-e)+", "+(f+e)+" "+g+"Z");$(k.node).attr("class","pointer"),d.push(k);var l=this.canvas.rect(a-c,0,2*c,this.canvas.height);$(l.node).attr("class","area pointer"),d.push(l);var m=this,n=function(a){d.transform("T "+a+", 0")},o=function(){m.dragging=!0},p=function(){m.dragging=!1,m.render()};d.drag(n,o,p).onDragOver(function(a){a.data("snapshot")&&m.parentView.navigate(a.data("snapshot"),a.data("file"))})},renderDuration:function(a,b,c,d){if(a){var e=codebrowser.helper.Duration.calculate(b.get("snapshotTime"),a.get("snapshotTime"),!0),f=this.canvas.text(c-65,d+15,"+ "+e);f.attr({"font-size":13})}},render:function(){this.canvas.clear();var a=this.canvas.height/2+3,b=0,c=0,d=this;this.collection.each(function(e,f){var g=100,h=7;c+=2*h,0===f&&(b=c);var i=d.collection.at(f-1);d.renderDuration(i,e,c,a),d.renderSnapshot(e,c,a,h),f===d.currentSnapshotIndex&&d.renderPointer(c,a,h),f!==d.collection.length-1&&(c+=g)}),this.renderTimeline(b,a,c)},update:function(a,b,c){this.collection=a,this.currentSnapshotIndex=b,this.filename=c,this.dragging||this.render()}}),codebrowser.view.StudentsView=Backbone.View.extend({id:"students-container",template:{studentsContainer:Handlebars.templates.StudentsContainer},render:function(){var a={students:this.collection.toJSON()},b=$(this.template.studentsContainer(a));this.$el.html(b)}}),codebrowser.controller.ViewController={view:null,isActive:function(a){return this.view===a},push:function(a,b){this.view&&this.view.remove(),this.view=a,b&&this.view.render(),$(config.view.container).html(this.view.el)}},codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"":"root","*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView({model:{message:"Oops!"}})},notFound:function(){codebrowser.controller.ViewController.push(this.errorView,!0)},root:function(){this.navigate("#/students")}}),codebrowser.router.CourseRouter=Backbone.Router.extend({routes:{"students/:studentId/courses":"courses"},initialize:function(){this.courseView=new codebrowser.view.CoursesView},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.push(a,!0)},courses:function(a){var b=new codebrowser.collection.CourseCollection(null,{studentId:a});this.courseView.collection=b;var c=this;b.fetch({success:function(){c.courseView.render()},error:function(){c.notFound()}}),codebrowser.controller.ViewController.push(this.courseView)}}),codebrowser.router.ExerciseRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises":"exercises"},initialize:function(){this.exerciseView=new codebrowser.view.ExercisesView},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.push(a,!0)},exercises:function(a,b){var c=new codebrowser.collection.ExerciseCollection(null,{studentId:a,courseId:b});this.exerciseView.collection=c;var d=this;c.fetch({success:function(){d.exerciseView.render()},error:function(){d.notFound()}}),codebrowser.controller.ViewController.push(this.exerciseView)}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.setUp()},setUp:function(){codebrowser.controller.ViewController.isActive(this.snapshotView)||(this.snapshotView=new codebrowser.view.SnapshotView,codebrowser.controller.ViewController.push(this.snapshotView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.push(a,!0)},snapshot:function(a,b,c,d,e){this.setUp();var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a;return d?(a=f.get(d))?e?a.get("files").get(e)?(g.snapshotView.update(a,e),void 0):(g.notFound(),void 0):(g.snapshotView.navigate(a,null),void 0):(g.notFound(),void 0):(a=f.at(0),g.snapshotView.navigate(a,null,{replace:!0}),void 0)},error:function(){g.notFound()}})}}),codebrowser.router.StudentRouter=Backbone.Router.extend({routes:{students:"courses"},initialize:function(){this.studentView=new codebrowser.view.StudentsView},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.push(a,!0)},courses:function(){var a=new codebrowser.collection.StudentCollection;this.studentView.collection=a;var b=this;a.fetch({success:function(){b.studentView.render()},error:function(){b.notFound()}}),codebrowser.controller.ViewController.push(this.studentView)}});
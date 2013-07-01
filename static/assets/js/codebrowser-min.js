this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CourseContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.list)?g=g.call(b,h):(g=b.list,g=typeof g===j?g.apply(b):g),c.list||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n    <span class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.ExerciseContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<section>\n\n    <h1>"+l((g=b.course,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+"</h1>\n\n    <ul>\n        ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.list)?h=h.call(b,i):(h=b.list,h=typeof h===k?h.apply(b):h),c.list||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\n\n    <div class='span5'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n            <li><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===j?d.apply(a):d),e+=k(d)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e},(g=c.list)?g=g.call(b,h):(g=b.list,g=typeof g===j?g.apply(b):g),c.list||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"});var config={storage:{view:{EditorView:{split:"codebrowser.view.EditorView.split",diff:"codebrowser.view.EditorView.diff"}}},api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/light"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},controller:{},router:{},initialize:function(){window.onerror=function(){var a=new codebrowser.view.ErrorView({model:{message:"Oops!"}});codebrowser.controller.ViewController.pushToView(a,!0)},codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.student=new codebrowser.router.StudentRouter,codebrowser.app.course=new codebrowser.router.CourseRouter,codebrowser.app.exercise=new codebrowser.router.ExerciseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return new Date(a).toLocaleString()}),codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Diff=function(a,b){for(var c={replace:0,insert:0,"delete":0},d=[],e=difflib.stringAsLines(a),f=difflib.stringAsLines(b),g=new difflib.SequenceMatcher(e,f),h=g.get_opcodes(),i=0,j=0,k=0;k<h.length;k++){var l=h[k],m={type:l[0],rowStart:l[3],rowEnd:l[4]-1,offset:i};if("equal"!==m.type){if("replace"===m.type){var n=_.clone(m),o=l[2]-l[1]-1,p=l[4]-l[3]-1,q=m.rowEnd-m.rowStart+1,r=l[2]-l[1],s=q-r;o>p&&(0!==m.rowEnd-m.rowStart&&(m.rowEnd-=r>s?r:s),d.push(m),c[m.type]+=m.rowEnd-m.rowStart+1,m=n,m.type="delete",l[1]+=q),p>o&&(m.rowEnd-=r>s?r:s,d.push(m),c[m.type]+=m.rowEnd-m.rowStart+1,m=n,m.type="insert",m.rowStart+=r)}if("insert"===m.type&&(j+=m.rowEnd-m.rowStart+1),"delete"===m.type){var t=e.slice(l[1],l[2]),u=t.join("\n")+"\n";m.rowStart=l[1]+j,m.rowEnd=l[2]-1+j,m=_.extend(m,{fromRowStart:l[1],fromRowEnd:l[2]-1,lines:u});var v=m.rowEnd-m.rowStart+1;i+=v,j+=v}c[m.type]+=m.rowEnd-m.rowStart+1,d.push(m)}}this.getDifferences=function(){return d},this.getStatistics=function(){return c}},codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+this.get("snapshot").get("studentId")+"/courses/"+this.get("snapshot").get("courseId")+"/exercises/"+this.get("snapshot").get("exerciseId")+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}},{type:Backbone.HasOne,key:"course",relatedModel:"codebrowser.model.Course"},{type:Backbone.HasOne,key:"exercise",relatedModel:"codebrowser.model.Exercise"}],initialize:function(){this.collection&&(this.set("studentId",this.collection.studentId),this.set("courseId",this.collection.courseId),this.set("exerciseId",this.collection.exerciseId))}}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses",initialize:function(a,b){b&&(this.studentId=b.studentId)}}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){if(this.course)return this.course.url()+"/exercises";if(!this.studentId||!this.courseId)throw new Error("Options studentId and courseId are required to fetch exercises.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId)}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.CourseView=Backbone.View.extend({id:"course-container",template:{courseContainer:Handlebars.templates.CourseContainer},render:function(){this.model={studentId:this.collection.studentId,list:this.collection.toJSON()};var a=$(this.template.courseContainer(this.model));this.$el.html(a)}}),codebrowser.view.EditorView=Backbone.View.extend({template:{topContainer:Handlebars.templates.EditorTopContainer},split:!1,canSplit:function(){return this.model!==this.previousModel},diff:!1,canDiff:function(){return this.model!==this.previousModel},decorations:{"main-editor":[],"side-editor":[]},markers:{"main-editor":[],"side-editor":[]},removedLines:[],initialize:function(){this.$el.hide(),this.topContainer=$("<div>"),this.editorElement=$("<div>",{id:"editor"}),this.sideEditorElement=$("<div>",{id:"side-editor",height:"800px"}).hide(),this.mainEditorElement=$("<div>",{id:"main-editor",height:"800px"}),this.editorElement.append(this.sideEditorElement),this.editorElement.append(this.mainEditorElement),this.$el.append(this.topContainer),this.$el.append(this.editorElement),this.sideEditor=ace.edit(this.sideEditorElement.get(0)),this.mainEditor=ace.edit(this.mainEditorElement.get(0)),config.editor.configure(this.sideEditor),config.editor.configure(this.mainEditor)},remove:function(){this.$el.empty()},render:function(){var a=$(this.template.topContainer(this.model.toJSON()));this.topContainer.html(a)},removeDecorations:function(a){for(;this.decorations[a.container.id].length>0;){var b=this.decorations[a.container.id].pop();a.getSession().removeGutterDecoration(b.row,b.style)}},removeMarkers:function(a){for(;this.markers[a.container.id].length>0;)a.getSession().removeMarker(this.markers[a.container.id].pop())},setContent:function(a,b,c){var d=a.getSelection().getSelectionAnchor(),e=a.getSession().getScrollTop();this.removeDecorations(a),this.removeMarkers(a),a.setValue(b),a.moveCursorToPosition(d),a.getSelection().clearSelection(),a.getSession().setScrollTop(e),a.getSession().setMode(c)},update:function(a,b){var c=this;this.model=b,this.previousModel=a;var d=_.after(2,function(){c.toggleDiff(c.diff)}),e=codebrowser.helper.AceMode.getModeForFilename(this.model.get("name"));a===this.model?(this.toggleSplit(!1),this.toggleDiff(!1)):(this.toggleSplit("true"===localStorage.getItem(config.storage.view.EditorView.split)),this.diff||this.toggleDiff("true"===localStorage.getItem(config.storage.view.EditorView.diff))),a!==this.model&&a.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.setContent(c.sideEditor,a,e),d()}),this.model.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.setContent(c.mainEditor,a,e),d()}),this.$el.show(),this.render()},didSplit:function(){this.clearDiff(),this.toggleDiff(this.diff)},toggleSplit:function(a){return void 0!==a?this.split=a:(this.split=!this.split,localStorage.setItem(config.storage.view.EditorView.split,this.split)),this.split?(this.sideEditorElement.css({"float":"left",width:"50%"}),this.sideEditorElement.show(),this.mainEditorElement.css({"float":"right",width:"50%"}),this.didSplit(),void 0):(this.sideEditorElement.hide(),this.mainEditorElement.css({"float":"",width:""}),this.didSplit(),void 0)},decorate:function(a,b,c,d){for(var e=b;c>=e;e++)this.decorations[a.container.id].push({row:e,style:"decoration gutter-"+d}),a.getSession().addGutterDecoration(e,"decoration gutter-"+d)},clearDiff:function(){var a=ace.require("ace/range").Range;for(this.removeDecorations(this.mainEditor),this.removeDecorations(this.sideEditor);this.removedLines.length>0;){var b=this.removedLines.pop();this.mainEditor.getSession().remove(new a(b.rowStart,0,b.rowEnd,0))}this.removeMarkers(this.mainEditor),this.removeMarkers(this.sideEditor)},toggleDiff:function(a){var b=ace.require("ace/range").Range;if(void 0!==a?this.diff=a:(this.diff=!this.diff,localStorage.setItem(config.storage.view.EditorView.diff,this.diff)),this.diff)for(var c=this.sideEditor.getValue(),d=this.mainEditor.getValue(),e=new codebrowser.model.Diff(c,d).getDifferences(),f=0;f<e.length;f++){var g,h=e[f];if("delete"===h.type){if(this.split){g=this.sideEditor.getSession().addMarker(new b(h.fromRowStart,0,h.fromRowEnd,1),h.type,"fullLine"),this.decorate(this.sideEditor,h.fromRowStart,h.fromRowEnd,"delete"),this.markers["side-editor"].push(g);continue}this.mainEditor.getSession().insert({row:h.rowStart+h.offset,column:0},h.lines),this.decorate(this.mainEditor,h.rowStart+h.offset,h.rowEnd+h.offset,"delete"),this.removedLines.push({rowStart:h.rowStart+h.offset,rowEnd:h.rowEnd+1+h.offset})}var i=0;this.split||(i=h.offset),g=this.mainEditor.getSession().addMarker(new b(h.rowStart+i,0,h.rowEnd+i,1),h.type,"fullLine"),this.decorate(this.mainEditor,h.rowStart+i,h.rowEnd+i,h.type),this.markers["main-editor"].push(g)}else this.clearDiff()}}),codebrowser.view.ErrorView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Error,remove:function(){this.$el.empty()},render:function(){var a=this.template(this.model);this.$el.html(a)}}),codebrowser.view.ExerciseView=Backbone.View.extend({id:"exercise-container",template:{exerciseContainer:Handlebars.templates.ExerciseContainer},render:function(){this.model={studentId:this.collection.studentId,courseId:this.collection.courseId,list:this.collection.toJSON()};var a=$(this.template.exerciseContainer(this.model));this.$el.html(a)}}),codebrowser.view.NotFoundErrorView=codebrowser.view.ErrorView.extend({model:{message:"Not Found."}}),codebrowser.view.SnapshotView=Backbone.View.extend({el:config.view.container,template:{navigationContainer:Handlebars.templates.SnapshotNavigationContainer},events:{"click #split":"split","click #diff":"diff","click #first":"first","click #previous":"previous","click #next":"next","click #last":"last"},initialize:function(){var a=this;this.snapshotContainer=$("<div>",{id:"snapshot-container"}),this.navigationContainer=$("<div>",{id:"navigation-container"}),this.editorContainer=$("<div>",{id:"editor-container"}),this.snapshotContainer.append(this.navigationContainer),this.snapshotContainer.append(this.editorContainer),this.editorView=new codebrowser.view.EditorView({el:this.editorContainer}),$(document).keydown(function(){37===event.keyCode&&a.previous(),39===event.keyCode&&a.next()})},remove:function(){$(document).unbind(),this.editorView.remove(),this.$el.empty(),this.$el.undelegate()},render:function(){this.$el.append(this.snapshotContainer);var a=this.collection.indexOf(this.model),b={current:a+1,total:this.collection.length},c=$(this.template.navigationContainer(_.extend(this.model.toJSON(),b)));this.editorView.split&&$("#split",c).addClass("active"),this.editorView.canSplit()||$("#split",c).attr("disabled",!0),this.editorView.diff&&$("#diff",c).addClass("active"),this.editorView.canDiff()||$("#diff",c).attr("disabled",!0),0===a&&($("#first",c).attr("disabled",!0),$("#previous",c).attr("disabled",!0)),a===this.collection.length-1&&($("#next",c).attr("disabled",!0),$("#last",c).attr("disabled",!0)),this.navigationContainer.html(c)},update:function(a,b){this.model=a;var c=this.collection.indexOf(a),d=this.collection.at(c-1);d||(d=this.model),this.file=this.model.get("files").get(b);var e=this.file.get("name"),f=d.get("files").findWhere({name:e});this.editorView.update(f||this.file,this.file),this.render()},split:function(){this.editorView.toggleSplit()},diff:function(){this.editorView.toggleDiff()},navigate:function(a,b,c){b||(b=a.get("files").first()),codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a.id+"/files/"+b.id,{replace:c?c.replace:c})},first:function(){var a=this.collection.first(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)},previous:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a-1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},next:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a+1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},last:function(){var a=this.collection.last(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)}}),codebrowser.view.StudentView=Backbone.View.extend({id:"student-container",template:{studentContainer:Handlebars.templates.StudentContainer},render:function(){this.model={list:this.collection.toJSON()};var a=$(this.template.studentContainer(this.model));this.$el.html(a)}}),codebrowser.controller.ViewController={view:null,isActive:function(a){return this.view===a},pushToView:function(a,b){this.view&&this.view.remove(),this.view=a,b&&this.view.render()}},codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView({model:{message:"Oops!"}})},notFound:function(){codebrowser.controller.ViewController.pushToView(this.errorView,!0)}}),codebrowser.router.CourseRouter=Backbone.Router.extend({routes:{"students/:studentId/courses":"courses"},setUp:function(){codebrowser.controller.ViewController.isActive(this.courseView)||(this.courseView=new codebrowser.view.CourseView,codebrowser.controller.ViewController.pushToView(this.courseView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.pushToView(a,!0)},courses:function(a){this.setUp();var b=new codebrowser.collection.CourseCollection(null,{studentId:a});this.courseView.collection=b;var c=this;b.fetch({success:function(){c.courseView.render()},error:function(){c.notFound()}})}}),codebrowser.router.ExerciseRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises":"exercises"},setUp:function(){codebrowser.controller.ViewController.isActive(this.exerciseView)||(this.exerciseView=new codebrowser.view.ExerciseView,codebrowser.controller.ViewController.pushToView(this.exerciseView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.pushToView(a,!0)},exercises:function(a,b){this.setUp();var c=new codebrowser.collection.ExerciseCollection(null,{studentId:a,courseId:b});this.exerciseView.collection=c;var d=this;c.fetch({success:function(){d.exerciseView.render()},error:function(){d.notFound()}})}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.setUp()},setUp:function(){codebrowser.controller.ViewController.isActive(this.snapshotView)||(this.snapshotView=new codebrowser.view.SnapshotView,codebrowser.controller.ViewController.pushToView(this.snapshotView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.pushToView(a,!0)},snapshot:function(a,b,c,d,e){this.setUp();var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a;return d?(a=f.get(d))?e?a.get("files").get(e)?(g.snapshotView.update(a,e),void 0):(g.notFound(),void 0):(g.snapshotView.navigate(a,null),void 0):(g.notFound(),void 0):(a=f.at(0),g.snapshotView.navigate(a,null,{replace:!0}),void 0)},error:function(){g.notFound()}})}}),codebrowser.router.StudentRouter=Backbone.Router.extend({routes:{students:"courses"},setUp:function(){codebrowser.controller.ViewController.isActive(this.studentView)||(this.studentView=new codebrowser.view.StudentView,codebrowser.controller.ViewController.pushToView(this.studentView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.pushToView(a,!0)},courses:function(){this.setUp();var a=new codebrowser.collection.StudentCollection;this.studentView.collection=a;var b=this;a.fetch({success:function(){b.studentView.render()},error:function(){b.notFound()}})}});
this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n    <span class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/"+k((e=d.courseId,typeof e===j?e.apply(a):e))+"/exercises/"+k((e=d.exerciseId,typeof e===j?e.apply(a):e))+"/snapshots/"+k((e=d.id,typeof e===j?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<div class='row'>\n\n    <div class='span8'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'>Files <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.files)?g=g.call(b,h):(g=b.files,g=typeof g===j?g.apply(b):g),c.files||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'>Split</button>\n\n    </div>\n\n    <div class='span1 text-center'>",(g=c.current)?g=g.call(b,{hash:{},data:e}):(g=b.current,g=typeof g===j?g.apply(b):g),i+=k(g)+" / ",(g=c.total)?g=g.call(b,{hash:{},data:e}):(g=b.total,g=typeof g===j?g.apply(b):g),i+=k(g)+"</div>\n\n    <div class='span3'>\n\n        <div class='btn-group pull-right'>\n            <button type='button' id='first' class='btn'>First</button>\n            <button type='button' id='previous' class='btn'>Previous</button>\n            <button type='button' id='next' class='btn'>Next</button>\n            <button type='button' id='last' class='btn'>Last</button>\n        </div>\n\n    </div>\n\n</div>\n"});var config={api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/crimson_editor"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},router:{},initialize:function(){codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return new Date(a).toLocaleString()}),codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+(this.get("snapshot").get("studentId")||this.get("snapshot").collection.studentId)+"/courses/"+(this.get("snapshot").get("courseId")||this.get("snapshot").collection.courseId)+"/exercises/"+(this.get("snapshot").get("exerciseId")||this.get("snapshot").collection.exerciseId)+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses"}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){return this.course.url()+"/exercises"}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.EditorView=Backbone.View.extend({template:{topContainer:Handlebars.templates.EditorTopContainer},split:!1,initialize:function(){this.$el.empty(),this.$el.hide(),this.topContainer=$("<div>"),this.editorElement=$("<div>",{id:"editor"}),this.sideEditorElement=$("<div>",{id:"side-editor",height:"800px"}).hide(),this.mainEditorElement=$("<div>",{id:"main-editor",height:"800px"}),this.editorElement.append(this.sideEditorElement),this.editorElement.append(this.mainEditorElement),this.$el.append(this.topContainer),this.$el.append(this.editorElement),this.sideEditor=ace.edit(this.sideEditorElement.get(0)),this.mainEditor=ace.edit(this.mainEditorElement.get(0)),config.editor.configure(this.sideEditor),config.editor.configure(this.mainEditor)},render:function(){var a=$(this.template.topContainer(this.model.toJSON()));this.topContainer.html(a)},setContent:function(a,b,c){a.setValue(b),a.navigateFileStart(),a.getSession().setMode(c)},update:function(a,b){this.$el.show(),this.model=b;var c=codebrowser.helper.AceMode.getModeForFilename(this.model.get("name")),d=this;a!==this.model&&a.fetchContent(function(a){d.setContent(d.sideEditor,a,c)}),this.model.fetchContent(function(a){d.setContent(d.mainEditor,a,c)}),this.render()},toggleSplit:function(a){return this.split=void 0!==a?a:!this.split,this.split?(this.sideEditorElement.css({"float":"left",width:"50%"}),this.sideEditorElement.show(),this.mainEditorElement.css({"float":"right",width:"50%"}),void 0):(this.sideEditorElement.hide(),this.mainEditorElement.css({"float":"",width:""}),void 0)}}),codebrowser.view.ErrorView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Error,initialize:function(){this.render()},render:function(){var a=this.template(this.model);this.$el.html(a)}}),codebrowser.view.SnapshotView=Backbone.View.extend({el:config.view.container,template:{navigationContainer:Handlebars.templates.SnapshotNavigationContainer},events:{"click #split":"split","click #first":"first","click #previous":"previous","click #next":"next","click #last":"last"},initialize:function(){this.$el.empty(),this.$el.undelegate(),this.navigationContainer=$("<div>",{id:"navigation-container"}),this.editorContainer=$("<div>",{id:"editor-container"}),this.$el.append(this.navigationContainer),this.$el.append(this.editorContainer),this.editorView=new codebrowser.view.EditorView({el:this.editorContainer})},render:function(){var a=this.collection.indexOf(this.model),b={studentId:this.collection.studentId,courseId:this.collection.courseId,exerciseId:this.collection.exerciseId,current:a+1,total:this.collection.length},c=$(this.template.navigationContainer($.extend(this.model.toJSON(),b)));this.editorView.split&&$("#split",c).addClass("active"),0===a&&($("#split",c).attr("disabled",!0),$("#first",c).attr("disabled",!0),$("#previous",c).attr("disabled",!0)),a===this.collection.length-1&&($("#next",c).attr("disabled",!0),$("#last",c).attr("disabled",!0)),this.navigationContainer.html(c)},update:function(a,b,c){this.model=b,a||(a=this.model,this.editorView.toggleSplit(!1)),c?this.editorView.update(a.get("files").get(c),this.model.get("files").get(c)):this.editorView.update(a.get("files").at(0),this.model.get("files").at(0)),this.render()},split:function(){this.editorView.toggleSplit()},navigate:function(a){codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a)},first:function(){var a=this.collection.at(0);this.navigate(a.id)},previous:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a-1);this.navigate(b.id)},next:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a+1);this.navigate(b.id)},last:function(){var a=this.collection.at(this.collection.length-1);this.navigate(a.id)}}),codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView({model:{message:"Oops!"}})},notFound:function(){this.errorView.render()}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.setUp()},setUp:function(){this.snapshotView||(this.snapshotView=new codebrowser.view.SnapshotView)},snapshot:function(a,b,c,d,e){this.setUp();var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a=f.get(d),b=f.indexOf(a),c=f.at(b-1);return a?(g.snapshotView.update(c,a,e),void 0):(g.snapshotView=null,new codebrowser.view.ErrorView({model:{message:"No snapshot found with given ID."}}),void 0)},error:function(){g.snapshotView=null,new codebrowser.view.ErrorView({model:{message:"Failed fetching snapshots."}})}})}});
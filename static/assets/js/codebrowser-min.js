this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n    <span class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\n\n    <div class='span5'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"});var config={storage:{view:{EditorView:{split:"codebrowser.view.EditorView.split"}}},api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/light"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},router:{},initialize:function(){codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return new Date(a).toLocaleString()}),codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+this.get("snapshot").get("studentId")+"/courses/"+this.get("snapshot").get("courseId")+"/exercises/"+this.get("snapshot").get("exerciseId")+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}},{type:Backbone.HasOne,key:"course",relatedModel:"codebrowser.model.Course"},{type:Backbone.HasOne,key:"exercise",relatedModel:"codebrowser.model.Exercise"}],initialize:function(){this.collection&&(this.set("studentId",this.collection.studentId),this.set("courseId",this.collection.courseId),this.set("exerciseId",this.collection.exerciseId))}}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses"}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){return this.course.url()+"/exercises"}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.EditorView=Backbone.View.extend({template:{topContainer:Handlebars.templates.EditorTopContainer},split:!1,canSplit:function(){return this.model!==this.previousModel},initialize:function(){this.$el.empty(),this.$el.hide(),this.topContainer=$("<div>"),this.editorElement=$("<div>",{id:"editor"}),this.sideEditorElement=$("<div>",{id:"side-editor",height:"800px"}).hide(),this.mainEditorElement=$("<div>",{id:"main-editor",height:"800px"}),this.editorElement.append(this.sideEditorElement),this.editorElement.append(this.mainEditorElement),this.$el.append(this.topContainer),this.$el.append(this.editorElement),this.sideEditor=ace.edit(this.sideEditorElement.get(0)),this.mainEditor=ace.edit(this.mainEditorElement.get(0)),config.editor.configure(this.sideEditor),config.editor.configure(this.mainEditor)},render:function(){var a=$(this.template.topContainer(this.model.toJSON()));this.topContainer.html(a)},setContent:function(a,b,c){var d=a.getSelection().getSelectionAnchor(),e=a.getSession().getScrollTop();a.setValue(b),a.moveCursorToPosition(d),a.getSelection().clearSelection(),a.getSession().setScrollTop(e),a.getSession().setMode(c)},update:function(a,b){var c=this;this.model=b,this.previousModel=a;var d=codebrowser.helper.AceMode.getModeForFilename(this.model.get("name"));this.$el.show(),a===this.model?this.toggleSplit(!1):this.toggleSplit("true"===localStorage.getItem(config.storage.view.EditorView.split)),a!==this.model&&a.fetchContent(function(a){c.setContent(c.sideEditor,a,d)}),this.model.fetchContent(function(a){c.setContent(c.mainEditor,a,d)}),this.render()},toggleSplit:function(a){return void 0!==a?this.split=a:(this.split=!this.split,localStorage.setItem(config.storage.view.EditorView.split,this.split)),this.split?(this.sideEditorElement.css({"float":"left",width:"50%"}),this.sideEditorElement.show(),this.mainEditorElement.css({"float":"right",width:"50%"}),void 0):(this.sideEditorElement.hide(),this.mainEditorElement.css({"float":"",width:""}),void 0)}}),codebrowser.view.ErrorView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Error,initialize:function(){this.render()},render:function(){var a=this.template(this.model);this.$el.html(a)}}),codebrowser.view.NotFoundErrorView=codebrowser.view.ErrorView.extend({model:{message:"Not Found."}}),codebrowser.view.SnapshotView=Backbone.View.extend({el:config.view.container,template:{navigationContainer:Handlebars.templates.SnapshotNavigationContainer},events:{"click #split":"split","click #first":"first","click #previous":"previous","click #next":"next","click #last":"last"},initialize:function(){this.$el.empty(),this.$el.undelegate(),this.navigationContainer=$("<div>",{id:"navigation-container"}),this.editorContainer=$("<div>",{id:"editor-container"}),this.$el.append(this.navigationContainer),this.$el.append(this.editorContainer),this.editorView=new codebrowser.view.EditorView({el:this.editorContainer})},render:function(){var a=this.collection.indexOf(this.model),b={current:a+1,total:this.collection.length},c=$(this.template.navigationContainer(_.extend(this.model.toJSON(),b)));this.editorView.split&&$("#split",c).addClass("active"),this.editorView.canSplit()||$("#split",c).attr("disabled",!0),0===a&&($("#first",c).attr("disabled",!0),$("#previous",c).attr("disabled",!0)),a===this.collection.length-1&&($("#next",c).attr("disabled",!0),$("#last",c).attr("disabled",!0)),this.navigationContainer.html(c)},update:function(a,b){this.model=a;var c=this.collection.indexOf(a),d=this.collection.at(c-1);d||(d=this.model),this.file=this.model.get("files").get(b);var e=this.file.get("name"),f=d.get("files").findWhere({name:e});this.editorView.update(f||this.file,this.file),this.render()},split:function(){this.editorView.toggleSplit()},navigate:function(a,b){b||(b=a.get("files").first()),codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a.id+"/files/"+b.id)},first:function(){var a=this.collection.first(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)},previous:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a-1),c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)},next:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a+1),c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)},last:function(){var a=this.collection.last(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)}}),codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView({model:{message:"Oops!"}})},notFound:function(){this.errorView.render()}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.setUp()},setUp:function(){this.snapshotView||(this.snapshotView=new codebrowser.view.SnapshotView)},snapshot:function(a,b,c,d,e){this.setUp();var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a=f.get(d);return a?e?(g.snapshotView.update(a,e),void 0):(g.snapshotView.navigate(a,null),void 0):(g.snapshotView=null,new codebrowser.view.NotFoundErrorView,void 0)},error:function(){g.snapshotView=null,new codebrowser.view.NotFoundErrorView}})}});
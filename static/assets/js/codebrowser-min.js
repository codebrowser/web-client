this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.Editor=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n    <span class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</span>\n\n</header>\n\n<div id='editor'></div>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<p>Oops!</p>\n"}),this.Handlebars.templates.Snapshot=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/"+k((e=d.courseId,typeof e===j?e.apply(a):e))+"/exercises/"+k((e=d.exerciseId,typeof e===j?e.apply(a):e))+"/snapshots/"+k((e=d.id,typeof e===j?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<div class='row'>\n\n    <div class='span8'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'>Files <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.files)?g=g.call(b,h):(g=b.files,g=typeof g===j?g.apply(b):g),c.files||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n            </ul>\n\n        </div>\n\n    </div>\n\n    <div class='span4'>\n\n        <div class='btn-group pull-right'>\n            <input type='button' id='previous' class='btn' value='Previous'>\n            <input type='button' id='next' class='btn' value='Next'>\n        </div>\n\n    </div>\n\n</div>\n\n<div id='editor-container'></div>\n"});var config={test:{async:{timeout:4e3}},api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/crimson_editor"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},router:{},initialize:function(){codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return new Date(a).toLocaleString()}),codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+(this.get("snapshot").get("studentId")||this.get("snapshot").collection.studentId)+"/courses/"+(this.get("snapshot").get("courseId")||this.get("snapshot").collection.courseId)+"/exercises/"+(this.get("snapshot").get("exerciseId")||this.get("snapshot").collection.exerciseId)+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses"}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){return this.course.url()+"/exercises"}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.EditorView=Backbone.View.extend({template:Handlebars.templates.Editor,render:function(a,b){var c=this.template(this.model.toJSON());this.$el.html(c),this.editor=ace.edit("editor"),config.editor.configure(this.editor),this.editor.setValue(a),this.editor.navigateFileStart(),this.editor.getSession().setMode(b)},setModel:function(a){this.model=a,this.update()},update:function(){var a=this;this.model.fetchContent(function(b){var c=a.model.get("name"),d=codebrowser.helper.AceMode.getModeForFilename(c);a.render(b,d)})}}),codebrowser.view.ErrorView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Error,render:function(){this.$el.html(this.template)}}),codebrowser.view.SnapshotView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Snapshot,events:{"click #previous":"previous","click #next":"next"},initialize:function(){this.model=new codebrowser.model.Snapshot,this.collection=new codebrowser.collection.SnapshotCollection,this.render(),this.editorView=new codebrowser.view.EditorView},render:function(){var a={studentId:this.collection.studentId,courseId:this.collection.courseId,exerciseId:this.collection.exerciseId},b=this.template($.extend(this.model.toJSON(),a));this.$el.html(b);var c=this.collection.indexOf(this.model);0===c&&$("#previous").attr("disabled",!0),c===this.collection.length-1&&$("#next").attr("disabled",!0)},setModel:function(a,b){this.model=a,this.render(),this.editorView.setElement("#editor-container"),b?this.editorView.setModel(this.model.get("files").get(b)):this.editorView.setModel(this.model.get("files").at(0))},navigate:function(a){codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a)},previous:function(a){a.preventDefault();var b=this.collection.indexOf(this.model),c=this.collection.at(b-1);this.navigate(c.id)},next:function(a){a.preventDefault();var b=this.collection.indexOf(this.model),c=this.collection.at(b+1);this.navigate(c.id)}}),codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView},notFound:function(){console.log("Caught!"),this.errorView.render()}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.snapshotView=new codebrowser.view.SnapshotView},snapshot:function(a,b,c,d,e){var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a=f.get(d);return a?(g.snapshotView.setModel(a,e),void 0):(console.log("No snapshot found with given ID."),void 0)},error:function(){console.log("Failed fetching snapshots.")}})}});
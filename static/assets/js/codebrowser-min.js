var config={api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/github"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},model:{},collection:{},view:{},router:{},initialize:function(){codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").urlRoot+"/"+this.get("course").id+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+this.get("snapshot").get("studentId")+"/courses/"+this.get("snapshot").get("courseId")+"/exercises/"+this.get("snapshot").get("exerciseId")+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses"}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){return this.course.urlRoot+"/"+this.course.id+"/exercises"}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.EditorView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var a=$("#editor-template").html();$(this.el).html(a),this.editor=ace.edit("editor"),config.editor.configure(this.editor),this.editor.getSession().setMode("ace/mode/java")},setContent:function(a){this.editor.setValue(a),this.editor.navigateFileStart()}}),codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"catch"},"catch":function(){$("#container").empty(),console.log("Catched!")}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"snapshots/:id":"read"},read:function(a){var b=codebrowser.model.Snapshot.findOrCreate({studentId:1,courseId:2,exerciseId:3,id:a});b.fetch({success:function(){console.log("Received snapshot from backend..."),console.log(b);var a=new codebrowser.view.EditorView({el:$(config.view.container)});b.get("files").at(0).fetchContent(function(b){a.setContent(b),console.log("Done.")})},error:function(){console.log("Request failed.")}})}});
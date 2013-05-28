var config={apiRoot:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/",editor:{configure:function(e){e.setReadOnly(!0),e.setPrintMarginColumn(!1),e.setDisplayIndentGuides(!1),e.setTheme("ace/theme/crimson_editor"),e.setFontSize(12),e.getSession().setTabSize(4),e.getSession().setUseWrapMode(!0),e.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},models:{},helpers:{},collections:{},views:{},routers:{},initialize:function(){codebrowser.app.snapshot=new codebrowser.routers.SnapshotRouter,Backbone.history.start()}};codebrowser.helpers.aceModeMapper={mode:{java:"java",js:"javascript",py:"python"},getMode:function(e){var o=e.split(".");return o=o[o.length-1],"ace/mode/"+this.mode[o]}},codebrowser.models.Course=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("student")?this.get("student").urlRoot+"/"+this.get("student").id+"/courses":config.apiRoot+"courses"},relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.models.Exercise",collectionType:"codebrowser.collections.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.models.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return config.apiRoot+"students/1/courses/2/exercises"},relations:[{type:Backbone.HasMany,key:"snapshots",relatedModel:"codebrowser.models.Snapshot",collectionType:"codebrowser.collections.SnapshotCollection",reverseRelation:{key:"exercise"}}]}),codebrowser.models.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(e){$.get(this.urlRoot()+"/"+this.id,function(o){e(o)})}}),codebrowser.models.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.models.File",collectionType:"codebrowser.collections.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.models.Student=Backbone.RelationalModel.extend({urlRoot:config.apiRoot+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.models.Course",collectionType:"codebrowser.collections.CourseCollection",reverseRelation:{key:"student"}}]}),codebrowser.collections.CourseCollection=Backbone.Collection.extend({model:codebrowser.models.Course,url:function(){return this.get("student")?this.get("student").urlRoot+"/"+this.get("student").id+"/courses":config.apiRoot+"courses"}}),codebrowser.collections.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.models.Exercise,url:function(){return this.get("course").urlRoot()+"/"+this.get("course").id+"/exercises"}}),codebrowser.collections.FileCollection=Backbone.Collection.extend({model:codebrowser.models.File,url:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"}}),codebrowser.collections.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.models.Snapshot,url:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots"}}),codebrowser.collections.StudentCollection=Backbone.Collection.extend({model:codebrowser.models.Student,url:function(){return config.apiRoot+"students"}}),codebrowser.views.EditorView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var e=$("#editor-template").html();$(this.el).html(e),this.editor=ace.edit("editor"),config.editor.configure(this.editor)},setContent:function(e,o){this.editor.setValue(e),this.editor.navigateFileStart(),this.editor.getSession().setMode(o)}}),codebrowser.views.SnapshotView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #prevButton":"previous","click #nextButton":"next"},setModel:function(e){this.model=e},previous:function(e){var o=this.collection.indexOf(this.model),t=this.collection.at(o-1);codebrowser.app.snapshot.navigateTo(t.id),e.preventDefault()},next:function(e){var o=this.collection.indexOf(this.model),t=this.collection.at(o+1);codebrowser.app.snapshot.navigateTo(t.id),e.preventDefault()},render:function(){var e=$("#snapshot-template").html();$(this.el).html(e)}}),codebrowser.routers.SnapshotRouter=Backbone.Router.extend({initialize:function(){this.snapshotCollection=new codebrowser.collections.SnapshotCollection,this.snapshotCollection.fetch({async:!1}),this.snapshotView=new codebrowser.views.SnapshotView({el:$("#container"),collection:this.snapshotCollection})},routes:{"snapshots/:id":"read"},read:function(e){var o=this.snapshotCollection.get(e),t=this;o.fetch({success:function(){console.log("Received snapshot from backend..."),console.log(o),t.snapshotView.setModel(o);var e=o.get("files").at(0).get("name"),s=codebrowser.helpers.aceModeMapper.getMode(e),n=new codebrowser.views.EditorView({el:$("#view")});o.get("files").at(0).fetchContent(function(e){n.setContent(e,s),console.log("Done.")})},error:function(){console.log("Request failed.")}})},navigateTo:function(e){this.navigate("#/snapshots/"+e)}});
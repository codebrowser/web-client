var config={apiRoot:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"};$(document).ready(function(){editor.initialize(),codebrowser.initialize()});var codebrowser={app:{},models:{},collections:{},views:{},routers:{},initialize:function(){codebrowser.app.snapshot=new codebrowser.routers.SnapshotRouter,Backbone.history.start()}},editor={initialize:function(){var e=ace.edit("container");e.setTheme("ace/theme/twilight"),e.getSession().setMode("ace/mode/java"),e.getSession().setTabSize(4)}};codebrowser.models.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(e){$.get(this.urlRoot()+"/"+this.id,function(o){e(o)})}}),codebrowser.models.Snapshot=Backbone.RelationalModel.extend({urlRoot:config.apiRoot+"students/1/courses/2/exercises/3/snapshots",relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.models.File",collectionType:"codebrowser.collections.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.models.Student=Backbone.Model.extend({urlRoot:config.apiRoot+"students"}),codebrowser.collections.FileCollection=Backbone.Collection.extend({model:codebrowser.models.File,url:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"}}),codebrowser.views.SnapshotView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var e=$("#snapshot-template").html(),o=Mustache.render(e,{data:this.model});$(this.el).html(o)}}),codebrowser.routers.SnapshotRouter=Backbone.Router.extend({routes:{"snapshots/:id":"read"},render:function(e){new codebrowser.views.SnapshotView({el:$("#container"),model:e})},read:function(e){var o=this,t=new codebrowser.models.Snapshot({id:e});t.fetch({success:function(){console.log("Received snapshot from backend..."),console.log(t),t.get("files").at(0).fetchContent(function(e){o.render(e),console.log("Done.")})},error:function(){console.log("Request failed.")}})}});

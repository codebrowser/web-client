this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n    <span class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\n\n    <div class='span5'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n            ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'>Diff</button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"});
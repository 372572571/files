import{_ as B,V as F,bT as L,bU as S,r as I,o as T,j as y,l as M,J as C}from"./doc-dc3b39dd.js";import"./ext-language_tools-66adbdd7.js";var O={exports:{}};(function(x,m){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,v,k){var h=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};h.inherits(c,f),v.JsonHighlightRules=c}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(o,v,k){var h=o("../range").Range,f=function(){};(function(){this.checkOutdent=function(c,g){return/^\s+$/.test(c)?/^\s*\}/.test(g):!1},this.autoOutdent=function(c,g){var u=c.getLine(g),l=u.match(/^(\s*\})/);if(!l)return 0;var a=l[1].length,r=c.findMatchingBracket({row:g,column:a});if(!r||r.row==g)return 0;var t=this.$getIndent(c.getLine(r.row));c.replace(new h(g,0,g,a-1),t)},this.$getIndent=function(c){return c.match(/^\s*/)[0]}}).call(f.prototype),v.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,v,k){var h=o("../../lib/oop"),f=o("../../range").Range,c=o("./fold_mode").FoldMode,g=v.FoldMode=function(u){u&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+u.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+u.end)))};h.inherits(g,c),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(u,l,a){var r=u.getLine(a);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var t=this._getFoldWidgetBase(u,l,a);return!t&&this.startRegionRe.test(r)?"start":t},this.getFoldWidgetRange=function(u,l,a,r){var t=u.getLine(a);if(this.startRegionRe.test(t))return this.getCommentRegionBlock(u,t,a);var n=t.match(this.foldingStartMarker);if(n){var e=n.index;if(n[1])return this.openingBracketBlock(u,n[1],a,e);var i=u.getCommentFoldRange(a,e+n[0].length,1);return i&&!i.isMultiLine()&&(r?i=this.getSectionRange(u,a):l!="all"&&(i=null)),i}if(l!=="markbegin"){var n=t.match(this.foldingStopMarker);if(n){var e=n.index+n[0].length;return n[1]?this.closingBracketBlock(u,n[1],a,e):u.getCommentFoldRange(a,e,-1)}}},this.getSectionRange=function(u,l){var a=u.getLine(l),r=a.search(/\S/),t=l,e=a.length;l=l+1;for(var i=l,n=u.getLength();++l<n;){a=u.getLine(l);var s=a.search(/\S/);if(s!==-1){if(r>s)break;var d=this.getFoldWidgetRange(u,"all",l);if(d){if(d.start.row<=t)break;if(d.isMultiLine())l=d.end.row;else if(r==s)break}i=l}}return new f(t,e,i,u.getLine(i).length)},this.getCommentRegionBlock=function(u,l,a){for(var r=l.search(/\s*$/),t=u.getLength(),e=a,i=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++a<t;){l=u.getLine(a);var s=i.exec(l);if(s&&(s[1]?n--:n++,!n))break}var d=a;if(d>e)return new f(e,r,d,l.length)}}).call(g.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(o,v,k){var h=o("../lib/oop"),f=o("./text").Mode,c=o("./json_highlight_rules").JsonHighlightRules,g=o("./matching_brace_outdent").MatchingBraceOutdent,u=o("./folding/cstyle").FoldMode,l=o("../worker/worker_client").WorkerClient,a=function(){this.HighlightRules=c,this.$outdent=new g,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new u};h.inherits(a,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,t,e){var i=this.$getIndent(t);if(r=="start"){var n=t.match(/^.*[\{\(\[]\s*$/);n&&(i+=e)}return i},this.checkOutdent=function(r,t,e){return this.$outdent.checkOutdent(t,e)},this.autoOutdent=function(r,t,e){this.$outdent.autoOutdent(t,e)},this.createWorker=function(r){var t=new l(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(r.getDocument()),t.on("annotate",function(e){r.setAnnotations(e.data)}),t.on("terminate",function(){r.clearAnnotations()}),t},this.$id="ace/mode/json"}).call(a.prototype),v.Mode=a}),function(){ace.require(["ace/mode/json"],function(o){x&&(x.exports=o)})}()})(O);var E={exports:{}};(function(x,m){ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,v,k){var h=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,c=function(g){var u="[_:a-zA-ZÀ-￿][-_:.a-zA-Z0-9À-￿]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+u+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:u},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+u+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+u+":)?"+u+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:u},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===c&&this.normalizeRules()};(function(){this.embedTagRules=function(g,u,l){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+l+".tag-name.xml"],regex:"(<)("+l+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:u+"start"}]}),this.$rules[l+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(a,r,t){return t.splice(0),this.token}}],this.embedRules(g,u,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+l+".tag-name.xml"],regex:"(</)("+l+"(?=\\s|>|$))",next:l+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(f.prototype),h.inherits(c,f),v.XmlHighlightRules=c}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(o,v,k){var h=o("../../lib/oop"),f=o("../behaviour").Behaviour,c=o("../../token_iterator").TokenIterator;o("../../lib/lang");function g(l,a){return l&&l.type.lastIndexOf(a+".xml")>-1}var u=function(){this.add("string_dquotes","insertion",function(l,a,r,t,e){if(e=='"'||e=="'"){var i=e,n=t.doc.getTextRange(r.getSelectionRange());if(n!==""&&n!=="'"&&n!='"'&&r.getWrapBehavioursEnabled())return{text:i+n+i,selection:!1};var s=r.getCursorPosition(),d=t.doc.getLine(s.row),b=d.substring(s.column,s.column+1),w=new c(t,s.row,s.column),p=w.getCurrentToken();if(b==i&&(g(p,"attribute-value")||g(p,"string")))return{text:"",selection:[1,1]};if(p||(p=w.stepBackward()),!p)return;for(;g(p,"tag-whitespace")||g(p,"whitespace");)p=w.stepBackward();var _=!b||b.match(/\s/);if(g(p,"attribute-equals")&&(_||b==">")||g(p,"decl-attribute-equals")&&(_||b=="?"))return{text:i+i,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(l,a,r,t,e){var i=t.doc.getTextRange(e);if(!e.isMultiLine()&&(i=='"'||i=="'")){var n=t.doc.getLine(e.start.row),s=n.substring(e.start.column+1,e.start.column+2);if(s==i)return e.end.column++,e}}),this.add("autoclosing","insertion",function(l,a,r,t,e){if(e==">"){var i=r.getSelectionRange().start,n=new c(t,i.row,i.column),s=n.getCurrentToken()||n.stepBackward();if(!s||!(g(s,"tag-name")||g(s,"tag-whitespace")||g(s,"attribute-name")||g(s,"attribute-equals")||g(s,"attribute-value"))||g(s,"reference.attribute-value"))return;if(g(s,"attribute-value")){var d=n.getCurrentTokenColumn()+s.value.length;if(i.column<d)return;if(i.column==d){var b=n.stepForward();if(b&&g(b,"attribute-value"))return;n.stepBackward()}}if(/^\s*>/.test(t.getLine(i.row).slice(i.column)))return;for(;!g(s,"tag-name");)if(s=n.stepBackward(),s.value=="<"){s=n.stepForward();break}var w=n.getCurrentTokenRow(),p=n.getCurrentTokenColumn();if(g(n.stepBackward(),"end-tag-open"))return;var _=s.value;return w==i.row&&(_=_.substring(0,i.column-p)),this.voidElements.hasOwnProperty(_.toLowerCase())?void 0:{text:"></"+_+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(l,a,r,t,e){if(e==`
`){var i=r.getCursorPosition(),n=t.getLine(i.row),s=new c(t,i.row,i.column),d=s.getCurrentToken();if(d&&d.type.indexOf("tag-close")!==-1){if(d.value=="/>")return;for(;d&&d.type.indexOf("tag-name")===-1;)d=s.stepBackward();if(!d)return;var b=d.value,w=s.getCurrentTokenRow();if(d=s.stepBackward(),!d||d.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[b]){var p=t.getTokenAt(i.row,i.column+1),n=t.getLine(w),_=this.$getIndent(n),R=_+t.getTabString();return p&&p.value==="</"?{text:`
`+R+`
`+_,selection:[1,R.length,1,R.length]}:{text:`
`+R}}}}})};h.inherits(u,f),v.XmlBehaviour=u}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,v,k){var h=o("../../lib/oop"),f=o("../../range").Range,c=o("./fold_mode").FoldMode,g=v.FoldMode=function(a,r){c.call(this),this.voidElements=a||{},this.optionalEndTags=h.mixin({},this.voidElements),r&&h.mixin(this.optionalEndTags,r)};h.inherits(g,c);var u=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(a,r){return a.type.lastIndexOf(r+".xml")>-1}(function(){this.getFoldWidget=function(a,r,t){var e=this._getFirstTagInLine(a,t);return e?e.closing||!e.tagName&&e.selfClosing?r==="markbeginend"?"end":"":!e.tagName||e.selfClosing||this.voidElements.hasOwnProperty(e.tagName.toLowerCase())||this._findEndTagInLine(a,t,e.tagName,e.end.column)?"":"start":this.getCommentFoldWidget(a,t)},this.getCommentFoldWidget=function(a,r){return/comment/.test(a.getState(r))&&/<!-/.test(a.getLine(r))?"start":""},this._getFirstTagInLine=function(a,r){for(var t=a.getTokens(r),e=new u,i=0;i<t.length;i++){var n=t[i];if(l(n,"tag-open")){if(e.end.column=e.start.column+n.value.length,e.closing=l(n,"end-tag-open"),n=t[++i],!n)return null;for(e.tagName=n.value,e.end.column+=n.value.length,i++;i<t.length;i++)if(n=t[i],e.end.column+=n.value.length,l(n,"tag-close")){e.selfClosing=n.value=="/>";break}return e}else if(l(n,"tag-close"))return e.selfClosing=n.value=="/>",e;e.start.column+=n.value.length}return null},this._findEndTagInLine=function(a,r,t,e){for(var i=a.getTokens(r),n=0,s=0;s<i.length;s++){var d=i[s];if(n+=d.value.length,!(n<e)&&l(d,"end-tag-open")&&(d=i[s+1],d&&d.value==t))return!0}return!1},this.getFoldWidgetRange=function(a,r,t){var e=a.getMatchingTags({row:t,column:0});return e?new f(e.openTag.end.row,e.openTag.end.column,e.closeTag.start.row,e.closeTag.start.column):this.getCommentFoldWidget(a,t)&&a.getCommentFoldRange(t,a.getLine(t).length)}}).call(g.prototype)}),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"],function(o,v,k){var h=o("../lib/oop"),f=o("../lib/lang"),c=o("./text").Mode,g=o("./xml_highlight_rules").XmlHighlightRules,u=o("./behaviour/xml").XmlBehaviour,l=o("./folding/xml").FoldMode,a=o("../worker/worker_client").WorkerClient,r=function(){this.HighlightRules=g,this.$behaviour=new u,this.foldingRules=new l};h.inherits(r,c),(function(){this.voidElements=f.arrayToMap([]),this.blockComment={start:"<!--",end:"-->"},this.createWorker=function(t){var e=new a(["ace"],"ace/mode/xml_worker","Worker");return e.attachToDocument(t.getDocument()),e.on("error",function(i){t.setAnnotations(i.data)}),e.on("terminate",function(){t.clearAnnotations()}),e},this.$id="ace/mode/xml"}).call(r.prototype),v.Mode=r}),function(){ace.require(["ace/mode/xml"],function(o){x&&(x.exports=o)})}()})(E);var W={exports:{}};(function(x,m){(function(){ace.require(["ace/mode/text"],function(o){x&&(x.exports=o)})})()})(W);const H={name:"EditorShow",components:{editor:F},props:{value:{type:String,required:!0,default:""},mode:{type:String,required:!0,default:"json"},debugResponse:{type:Boolean,default:!1}},emits:["update:value","debugEditorChange","showDescription"],setup(x){const m=L(x.value);return S(()=>x.value,()=>{m.value=x.value}),{valueText:m}},data(){return{editor:null,editorHeight:200,debugOptions:{readOnly:!1,autoScrollEditorIntoView:!0,displayIndentGuides:!1,fixedWidthGutter:!0},commonOptions:{readOnly:!1}}},methods:{resetEditorHeight(){var x=this;setTimeout(()=>{var m=x.editor.session.getLength();m==1&&(m=15),m<15&&(x.debugResponse?m=30:m=15),m>20&&(x.debugResponse||(m=20));var o=m*16;o>2e3&&(o=2e3),x.editorHeight=o},10)},change(){this.$emit("update:value",this.valueText),this.debugResponse||this.resetEditorHeight()},editorInit(x){var m=this;this.editor=x,this.debugResponse?(this.editor.getSession().setUseWrapMode(!0),this.editor.setOptions(this.debugOptions),this.mode=="text"&&this.editor.getSession().setUseWrapMode(!0)):this.editor.setOptions(this.commonOptions),this.resetEditorHeight(),this.editor.renderer.on("afterRender",function(){var o=m.editor.session.getLength();m.$emit("showDescription",o)})}}},A={key:0},$={key:1};function X(x,m,o,v,k,h){const f=I("editor");return T(),y("div",null,[o.debugResponse?(T(),y("div",A,[M(f,{class:"knife4j-debug-ace-editor",onInput:h.change,options:k.debugOptions,value:v.valueText,"onUpdate:value":m[0]||(m[0]=c=>v.valueText=c),onInit:h.editorInit,lang:o.mode,theme:"eclipse",width:"100%",style:C({height:k.editorHeight+"px"})},null,8,["onInput","options","value","onInit","lang","style"])])):(T(),y("div",$,[M(f,{value:v.valueText,"onUpdate:value":m[1]||(m[1]=c=>v.valueText=c),onInit:h.editorInit,onInput:h.change,lang:o.mode,theme:"eclipse",width:"100%",style:C({height:k.editorHeight+"px"})},null,8,["value","onInit","onInput","lang","style"])]))])}const z=B(H,[["render",X]]);export{z as default};

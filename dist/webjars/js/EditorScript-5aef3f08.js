import{_ as b,V as _,r as R,o as S,j as w,l as T,J as I}from"./doc-dc3b39dd.js";import"./ext-language_tools-66adbdd7.js";var C={exports:{}};(function(m,k){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,x,f){var h=t("../lib/oop"),d=t("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:["comment.doc.tag","text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text"}]},{token:["comment.doc.tag","text","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text"}]},{token:["comment.doc.tag","text","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},g.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};h.inherits(g,d),g.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},g.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},g.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},x.JsDocCommentHighlightRules=g}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,x,f){var h=t("../lib/oop"),d=t("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,g=t("./text_highlight_rules").TextHighlightRules,e="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",r=function(s){var i=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),c="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",l="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[d.getStartRule("doc-start"),a("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+e+")(\\.)(prototype)(\\.)("+e+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+e+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+e+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+c+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:i,regex:e},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+e+")(\\.)("+e+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:e},{regex:"",token:"empty",next:"no_regex"}],start:[d.getStartRule("doc-start"),a("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[a("function_arguments"),{token:"variable.parameter",regex:e},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:l},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:l},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!s||!s.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(o,u,p){if(this.next=o=="{"?this.nextState:"",o=="{"&&p.length)p.unshift("start",u);else if(o=="}"&&p.length&&(p.shift(),this.next=p.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return o=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:l},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+e+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!s||s.jsx!=!1)&&n.call(this)),this.embedRules(d,"doc-",[d.getEndRule("no_regex")]),this.normalizeRules()};h.inherits(r,g);function n(){var s=e.replace("\\d","\\d\\-"),i={onMatch:function(l,o,u){var p=l.charAt(1)=="/"?2:1;return p==1?(o!=this.nextState?u.unshift(this.next,this.nextState,0):u.unshift(this.next),u[2]++):p==2&&o==this.nextState&&(u[1]--,(!u[1]||u[1]<0)&&(u.shift(),u.shift())),[{type:"meta.tag.punctuation."+(p==1?"":"end-")+"tag-open.xml",value:l.slice(0,p)},{type:"meta.tag.tag-name.xml",value:l.substr(p)}]},regex:"</?"+s,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(i);var c={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[c,i,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(l,o,u){return o==u[0]&&u.shift(),l.length==2&&(u[0]==this.nextState&&u[1]--,(!u[1]||u[1]<0)&&u.splice(0,2)),this.next=u[0]||"start",[{type:this.token,value:l}]},nextState:"jsx"},c,a("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:s},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},i],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function a(s){return[{token:"comment",regex:/\/\*/,next:[d.getTagRule(),{token:"comment",regex:"\\*\\/",next:s||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[d.getTagRule(),{token:"comment",regex:"$|^",next:s||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}x.JavaScriptHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,x,f){var h=t("../range").Range,d=function(){};(function(){this.checkOutdent=function(g,e){return/^\s+$/.test(g)?/^\s*\}/.test(e):!1},this.autoOutdent=function(g,e){var r=g.getLine(e),n=r.match(/^(\s*\})/);if(!n)return 0;var a=n[1].length,s=g.findMatchingBracket({row:e,column:a});if(!s||s.row==e)return 0;var i=this.$getIndent(g.getLine(s.row));g.replace(new h(e,0,e,a-1),i)},this.$getIndent=function(g){return g.match(/^\s*/)[0]}}).call(d.prototype),x.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,x,f){var h=t("../../lib/oop"),d=t("../../range").Range,g=t("./fold_mode").FoldMode,e=x.FoldMode=function(r){r&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+r.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+r.end)))};h.inherits(e,g),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(r,n,a){var s=r.getLine(a);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var i=this._getFoldWidgetBase(r,n,a);return!i&&this.startRegionRe.test(s)?"start":i},this.getFoldWidgetRange=function(r,n,a,s){var i=r.getLine(a);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(r,i,a);var o=i.match(this.foldingStartMarker);if(o){var c=o.index;if(o[1])return this.openingBracketBlock(r,o[1],a,c);var l=r.getCommentFoldRange(a,c+o[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(r,a):n!="all"&&(l=null)),l}if(n!=="markbegin"){var o=i.match(this.foldingStopMarker);if(o){var c=o.index+o[0].length;return o[1]?this.closingBracketBlock(r,o[1],a,c):r.getCommentFoldRange(a,c,-1)}}},this.getSectionRange=function(r,n){var a=r.getLine(n),s=a.search(/\S/),i=n,c=a.length;n=n+1;for(var l=n,o=r.getLength();++n<o;){a=r.getLine(n);var u=a.search(/\S/);if(u!==-1){if(s>u)break;var p=this.getFoldWidgetRange(r,"all",n);if(p){if(p.start.row<=i)break;if(p.isMultiLine())n=p.end.row;else if(s==u)break}l=n}}return new d(i,c,l,r.getLine(l).length)},this.getCommentRegionBlock=function(r,n,a){for(var s=n.search(/\s*$/),i=r.getLength(),c=a,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++a<i;){n=r.getLine(a);var u=l.exec(n);if(u&&(u[1]?o--:o++,!o))break}var p=a;if(p>c)return new d(c,s,p,n.length)}}).call(e.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(t,x,f){var h=t("../lib/oop"),d=t("./text").Mode,g=t("./javascript_highlight_rules").JavaScriptHighlightRules,e=t("./matching_brace_outdent").MatchingBraceOutdent,r=t("../worker/worker_client").WorkerClient,n=t("./behaviour/cstyle").CstyleBehaviour,a=t("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=g,this.$outdent=new e,this.$behaviour=new n,this.foldingRules=new a};h.inherits(s,d),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(i,c,l){var o=this.$getIndent(c),u=this.getTokenizer().getLineTokens(c,i),p=u.tokens,v=u.state;if(p.length&&p[p.length-1].type=="comment")return o;if(i=="start"||i=="no_regex"){var y=c.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);y&&(o+=l)}else if(i=="doc-start"){if(v=="start"||v=="no_regex")return"";var y=c.match(/^\s*(\/?)\*/);y&&(y[1]&&(o+=" "),o+="* ")}return o},this.checkOutdent=function(i,c,l){return this.$outdent.checkOutdent(c,l)},this.autoOutdent=function(i,c,l){this.$outdent.autoOutdent(c,l)},this.createWorker=function(i){var c=new r(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return c.attachToDocument(i.getDocument()),c.on("annotate",function(l){i.setAnnotations(l.data)}),c.on("terminate",function(){i.clearAnnotations()}),c},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}).call(s.prototype),x.Mode=s}),ace.define("ace/mode/typescript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/javascript_highlight_rules"],function(t,x,f){var h=t("../lib/oop"),d=t("./javascript_highlight_rules").JavaScriptHighlightRules,g=function(e){var r=[{token:["storage.type","text","entity.name.function.ts"],regex:"(function)(\\s+)([a-zA-Z0-9$_¡-￿][a-zA-Z0-9d$_¡-￿]*)"},{token:"keyword",regex:"(?:\\b(constructor|declare|interface|as|AS|public|private|extends|export|super|readonly|module|namespace|abstract|implements)\\b)"},{token:["keyword","storage.type.variable.ts"],regex:"(class|type)(\\s+[a-zA-Z0-9_?.$][\\w?.$]*)"},{token:"keyword",regex:"\\b(?:super|export|import|keyof|infer)\\b"},{token:["storage.type.variable.ts"],regex:"(?:\\b(this\\.|string\\b|bool\\b|boolean\\b|number\\b|true\\b|false\\b|undefined\\b|any\\b|null\\b|(?:unique )?symbol\\b|object\\b|never\\b|enum\\b))"}],n=new d({jsx:(e&&e.jsx)==!0}).getRules();n.no_regex=r.concat(n.no_regex),this.$rules=n};h.inherits(g,d),x.TypeScriptHighlightRules=g}),ace.define("ace/mode/typescript",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/typescript_highlight_rules","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],function(t,x,f){var h=t("../lib/oop"),d=t("./javascript").Mode,g=t("./typescript_highlight_rules").TypeScriptHighlightRules,e=t("./folding/cstyle").FoldMode,r=t("./matching_brace_outdent").MatchingBraceOutdent,n=function(){this.HighlightRules=g,this.$outdent=new r,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};h.inherits(n,d),(function(){this.createWorker=function(a){return null},this.$id="ace/mode/typescript"}).call(n.prototype),x.Mode=n}),function(){ace.require(["ace/mode/typescript"],function(t){m&&(m.exports=t)})}()})(C);const $={name:"EditorShow",components:{editor:_},props:{value:{type:[String,Object],required:!0,default:""},tsMode:{type:Boolean,required:!1,default:!1}},emits:["showDescription"],data(){return{lang:"javascript",editor:null,editorHeight:200}},methods:{resetEditorHeight(){var m=this;setTimeout(()=>{var k=m.editor.session.getLength();k==1&&(k=10);var t=k*16;m.editorHeight=t},300)},change(m){this.$emit("change",m)},editorInit(m){var k=this;this.editor=m,this.tsMode&&(this.lang="typescript"),this.resetEditorHeight(),this.editor.renderer.on("afterRender",function(){k.$emit("showDescription","123")})}}};function A(m,k,t,x,f,h){const d=R("editor");return S(),w("div",null,[T(d,{value:t.value,onInit:h.editorInit,lang:f.lang,onInput:h.change,theme:"eclipse",width:"100%",style:I({height:f.editorHeight+"px"})},null,8,["value","onInit","lang","onInput","style"])])}const F=b($,[["render",A]]);export{F as default};

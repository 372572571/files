import{l as a,B as v,_ as b,Z as r,V as A,d as j,a as C,b as D,c as I,f as R,u as x,m as u,r as i,o as U,j as M,w as c,k as l,t as m,p as E,M as P,y as S}from"./doc-b0433f98.js";import{C as V}from"./clipboard-6af76158.js";import{m as B,a as L,t as k,e as N}from"./ext-language_tools-602acc1a.js";import{C as T}from"./CopyOutlined-05e2b5a4.js";var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const J=$;function g(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),o.forEach(function(s){q(n,s,t[s])})}return n}function q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=function(e,t){var o=g({},e,t.attrs);return a(v,g({},o,{icon:J}),null)};p.displayName="DownloadOutlined";p.inheritAttrs=!1;const z=p,H=""+new URL("mode-json5-ed4a693f.js",import.meta.url).href;r.config.setModuleUrl("ace/mode/json",B);r.config.setModuleUrl("ace/mode/json",H);r.config.setModuleUrl("ace/mode/xml",L);r.config.setModuleUrl("ace/theme/eclipse",k);r.config.setModuleUrl("ace/ext-language/tools",N);const G={name:"Document",components:{editor:A,CopyOutlined:T,DownloadOutlined:z,EditorShow:j(()=>C(()=>import("./EditorShow-b8d644d5.js"),["./EditorShow-b8d644d5.js","./doc-b0433f98.js","../css/doc-c5f35ca0.css","./ext-language_tools-602acc1a.js"],import.meta.url))},props:{api:{type:Object,required:!0},swaggerInstance:{type:Object,required:!0}},setup(){const n=D(),e=I(()=>n.language),{messages:t}=R();return{language:e,messages:t}},data(){return{openApiRaw:"",name:"OpenAPI.json"}},created(){this.openApiRaw=x.json5stringify(this.api.openApiRaw),this.name=this.api.summary+"_OpenAPI.json",setTimeout(()=>{this.copyOpenApi()},500)},methods:{getCurrentI18nInstance(){return this.messages[this.language]},triggerDownloadOpen(){var n=this.openApiRaw,e=document.createElement("a"),t={},o=this.name,s=window.URL.createObjectURL(new Blob([n],{type:(t.type||"text/plain")+";charset="+(t.encoding||"utf-8")}));e.href=s,e.download=o||"file",e.click(),window.URL.revokeObjectURL(s)},copyOpenApi(){const n="btnCopyOpenApi"+this.api.id,e=new V("#"+n,{text:()=>this.openApiRaw});e.on("success",()=>{const o=this.getCurrentI18nInstance().message.copy.open.success;u.info(o)}),e.on("error",t=>{console.log(t);const o=this.getCurrentI18nInstance();console.log(o);const s=o.message.copy.open.fail;u.info(s)})}}},X={class:"document"},Z={style:{"margin-top":"10px"},id:"knife4jDocumentOpenApiShowEditor"};function F(n,e,t,o,s,f){const w=i("CopyOutlined"),d=P,_=i("DownloadOutlined"),O=S,h=i("editor-show");return U(),M("div",X,[a(O,{style:{"margin-top":"10px"}},{default:c(()=>[a(d,{type:"primary",id:"btnCopyOpenApi"+t.api.id},{default:c(()=>[a(w),l("span",null,m(n.$t("open.copy")),1)]),_:1},8,["id"]),a(d,{style:{"margin-left":"10px"},onClick:f.triggerDownloadOpen},{default:c(()=>[a(_),e[1]||(e[1]=E()),l("span",null,m(n.$t("open.download")),1)]),_:1},8,["onClick"])]),_:1}),l("div",Z,[a(h,{value:s.openApiRaw,"onUpdate:value":e[0]||(e[0]=y=>s.openApiRaw=y),theme:"eclipse"},null,8,["value"])])])}const ee=b(G,[["render",F]]);export{ee as default};

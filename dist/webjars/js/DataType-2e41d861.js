import{_ as d,o as r,j as n,t as s,l as u,w as _,k as v,F as h,v as p,p as f,a0 as y}from"./doc-dc3b39dd.js";const g={name:"DataType",props:{text:{type:String,default:"string",required:!0},record:{type:Object,required:!0}},data(){return{validators:[]}},created(){this.intiValidator()},methods:{intiValidator(){var a=this;const e=this.record;if(e.validateInstance!=null){a.getJsonKeyLength(e.validateInstance);for(var t in e.validateInstance){var i=t+":"+e.validateInstance[t];a.validators.push({key:t,val:i})}}},getJsonKeyLength(a){var e=0;if(a!=null)for(var t in a)a.hasOwnProperty(t)&&e++;return e}}},m={key:0},x={key:1,class:"knife4j-request-validate-jsr"},k={slot:"title"};function V(a,e,t,i,l,I){const c=y;return r(),n("div",null,[t.record.validateStatus?(r(),n("span",x,[u(c,{placement:"right"},{default:_(()=>[v("template",k,[(r(!0),n(h,null,p(l.validators,o=>(r(),n("div",{key:o.key},s(o.val),1))),128))]),f(" "+s(t.text),1)]),_:1})])):(r(),n("span",m,s(t.text==null||t.text==""?"string":t.text),1))])}const w=d(g,[["render",V]]);export{w as default};

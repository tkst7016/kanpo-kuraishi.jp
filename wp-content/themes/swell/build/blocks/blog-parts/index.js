!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(e,t,r){var l=window.wp.i18n,c=window.wp.blocks,a=window.wp.element,n=window.wp.components,s=window.wp.blockEditor,o=window.wp.serverSideRender,i=r.n(o);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}var d=function(e){var t=e.icon,r=e.size,l=void 0===r?24:r,c=function(e,t){if(null==e)return{};var r,l,c=function(e,t){if(null==e)return{};var r,l,c={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}(e,["icon","size"]);return(0,a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:l,height:l},c))},w=window.wp.primitives,b=(0,a.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(w.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),v=window.wp.url,m=JSON.parse('{"u2":"loos/blog-parts"}'),h=[{attributes:{partsTitle:{type:"string",default:""},partsID:{type:"string",default:""}},save:({attributes:e})=>React.createElement("div",null,'[blog_parts id="'+e.partsID+'"]')}],f=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("g",null,React.createElement("path",{d:"M15.4,41.9c0,0.6,0.4,1,1,1h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1V41.9z"}),React.createElement("path",{d:"M11.2,42.9c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4S10.4,42.9,11.2,42.9z"}),React.createElement("path",{d:"M45.2,42.9c0.6,0,1-0.4,1-1v-12c0-0.6-0.4-1-1-1h-12c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1H45.2z"}),React.createElement("path",{d:"M15.4,36.3c0,0.6,0.4,1,1,1h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1V36.3z"}),React.createElement("path",{d:"M16.4,31.7h9.2c0.6,0,1-0.4,1-1v-0.8c0-0.6-0.4-1-1-1h-9.2c-0.6,0-1,0.4-1,1v0.8C15.4,31.3,15.8,31.7,16.4,31.7z"}),React.createElement("path",{d:"M11.2,37.3c0.8,0,1.4-0.6,1.4-1.4c0-0.8-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4C9.8,36.7,10.4,37.3,11.2,37.3z"}),React.createElement("path",{d:"M45.2,13.1H10.8c-0.6,0-1,0.4-1,1v9.2c0,0.6,0.4,1,1,1h34.4c0.6,0,1-0.4,1-1v-9.2C46.2,13.5,45.8,13.1,45.2,13.1z M21,21.6 h-8.4v-5.9H21V21.6z M32.2,21.6h-8.4v-5.9h8.4V21.6z M43.4,21.6H35v-5.9h8.4V21.6z"}),React.createElement("path",{d:"M11.2,31.7c0.8,0,1.4-0.6,1.4-1.4s-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4S10.4,31.7,11.2,31.7z"})),React.createElement("path",{d:"M50.5,46.8h-45c-0.3,0-0.5-0.2-0.5-0.5V9.7c0-0.3,0.2-0.5,0.5-0.5h45c0.3,0,0.5,0.2,0.5,0.5v36.7 C51,46.6,50.8,46.8,50.5,46.8z M53,6.2H3c-0.6,0-1,0.4-1,1v41.7c0,0.6,0.4,1,1,1h50c0.6,0,1-0.4,1-1V7.2C54,6.6,53.6,6.2,53,6.2 L53,6.2z"}));const E=window.swellBlogParts||{},O=window.swellPartsUses||{},g=[{value:"all",label:"--- "+(0,l.__)("用途で絞り込む","swell")+" ---"}];g.push({value:"id-0",label:(0,l.__)("通常パーツ（用途の設定なし）","swell")});const y={"id-0":[],all:[]};Object.keys(O).forEach((e=>{const t=O[e];g.push({value:"id-"+e,label:t}),y["id-"+e]=[]})),Object.keys(E).forEach((e=>{const t=E[e],r=t.term_id||"0";y["id-"+r].push({value:e,label:t.title||""}),y.all.push({value:e,label:t.title||""})}));const R=(0,a.memo)((({partsID:e,setAttributes:t,selectedTerm:r,setSelectedTerm:c})=>React.createElement("div",{className:"swl-block-selectArea"},React.createElement(n.SelectControl,{value:e,className:"-partlist",options:[{value:"",label:(0,l.__)("-- ブログパーツを選択 --","swell")},...y[r]],onChange:e=>{t({partsID:e})}}),React.createElement(n.SelectControl,{value:r,options:g,onChange:e=>{c(e),t({partsID:""})}}))));(0,c.registerBlockType)(m.u2,{title:(0,l.__)("ブログパーツ","swell"),description:(0,l.__)("登録済みのブログパーツを呼び出すことができます。","swell"),icon:f,edit:({attributes:e,setAttributes:t})=>{const{partsID:r}=e,c=E[r]||null,n=c?"id-"+(c.term_id||0):"all",[o,p]=(0,a.useState)(n),u=(0,s.useBlockProps)({className:"swell-block-blog-parts swl-block-hasPreview"});return React.createElement("div",u,React.createElement(R,{partsID:r,setAttributes:t,selectedTerm:o,setSelectedTerm:p}),React.createElement("div",{className:"swl-block-previewLabel"},React.createElement("span",null,"Preview"),r&&React.createElement("a",{href:(0,v.addQueryArgs)("post.php",{post:r,action:"edit"}),className:"__editLink",target:"_blank",rel:"noopener noreferrer"},React.createElement(d,{icon:b}),React.createElement("span",null,(0,l.__)("このブログパーツを編集する","swell")))),React.createElement("div",{className:"swl-block-previewArea"},r?React.createElement(i(),{block:"loos/blog-parts",attributes:e}):React.createElement("p",null,(0,l.__)("ブログパーツを選択してください。","swell"))))},save:()=>null,deprecated:h})}(0,0,e)}();
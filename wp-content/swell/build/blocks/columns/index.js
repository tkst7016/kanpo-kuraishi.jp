!function(){var e={63:function(e,t,l){"use strict";var n=window.wp.i18n,a=window.wp.element,c=window.wp.blocks,r=window.wp.blockEditor,o=window.wp.components,s="function"==typeof r.useInnerBlocksProps?r.useInnerBlocksProps:r.__experimentalUseInnerBlocksProps,i=JSON.parse('{"u2":"loos/columns"}');const m=e=>Math.floor(1e4/e)/100+"%",u="swell-block-columns";var p=[{attributes:{vAlign:{type:"string",default:""},colPC:{type:"string",default:"2"},colTab:{type:"string",default:"2"},colMobile:{type:"string",default:"1"},margin:{type:"object",default:{x:"1.5rem",y:"1.5rem"}}},supports:{anchor:!0,className:!1,align:["wide","full"]},save:({attributes:e})=>{const{vAlign:t,colPC:l,colTab:n,colMobile:a,margin:c}=e,o=r.useBlockProps.save({className:u,style:{"--swl-fb":"1"!==a?m(a):null,"--swl-fb_tab":"2"!==n?m(n):null,"--swl-fb_pc":"2"!==l?m(l):null,"--swl-clmn-mrgn--x":"1.5rem"!==c.x?c.x:null,"--swl-clmn-mrgn--y":"1.5rem"!==c.y?c.y:null},"data-valign":t||null});return React.createElement("div",o,React.createElement("div",{className:`${u}__inner`},React.createElement(r.InnerBlocks.Content,null)))}}],v=({value:e})=>React.createElement("div",{className:`swell-block-columns u-mb-0 u-fz-10 ${e}`},React.createElement("div",{className:"swell-block-columns__inner"},React.createElement("div",{className:"swell-block-column"}))),d=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M53.2,7.2H2.8C2.4,7.2,2,7.5,2,8.1v40.1C2,48.6,2.3,49,2.8,49h50.4c0.4,0,0.8-0.3,0.8-0.8V8.1C53.9,7.5,53.6,7.2,53.2,7.2z M29.2,30.6c0-0.1,0.1-0.2,0.2-0.2H51c0.1,0,0.2,0.1,0.2,0.2V46c0,0.1-0.1,0.2-0.2,0.2H29.4c-0.1,0-0.2-0.1-0.2-0.2V30.6z M37.5,27.5V10c0-0.1,0.1-0.2,0.2-0.2H51c0.1,0,0.2,0.1,0.2,0.2v17.5c0,0.1-0.1,0.2-0.2,0.2H37.7C37.7,27.8,37.5,27.6,37.5,27.5z M34.7,27.8H21.3c-0.1,0-0.2-0.1-0.2-0.2V10.1c0-0.1,0.1-0.2,0.2-0.2h13.4c0.1,0,0.2,0.1,0.2,0.2v17.5C35,27.6,34.8,27.8,34.7,27.8z M18.5,27.5c0,0.1-0.1,0.2-0.2,0.2H5c-0.1,0-0.2-0.1-0.2-0.2V10c0-0.1,0.1-0.2,0.2-0.2h13.4c0.1,0,0.2,0.1,0.2,0.2V27.5z M4.6,30.6 c0-0.1,0.1-0.2,0.2-0.2h21.6c0.1,0,0.2,0.1,0.2,0.2V46c0,0.1-0.1,0.2-0.2,0.2H4.8c-0.1,0-0.2-0.1-0.2-0.2V30.6z"})),b=window.wp.compose,w=l(184),g=l.n(w);const f=["px","rem","em","%","vw","vh"];var R=({value:e,units:t,onChange:l,defaultUnit:a,step:c="1",idKey:s="",className:i="",onClear:m=null})=>{const u=t||f,{num:p,unit:v}=((e,t)=>{if(!e)return{num:"",unit:t||"px"};const l=e.toString(),n=l.replace(/[^0-9\.]/g,""),a=l.replace(/[0-9\.]/g,"");return{num:parseFloat(n),unit:a}})(e,a),d=`${s}-${(0,b.useInstanceId)(r.__experimentalUnitControl)}`,w=!!m;return React.createElement("div",{className:g()("swl-unitNumber",i,{"has-clear":w})},React.createElement(r.__experimentalUnitControl,{id:d,min:0,onBlur:null,onChange:e=>{l(e)},step:"px"===v?"1":c,unit:v,units:u.map((e=>({label:e,value:e}))),value:p}),m&&React.createElement(o.Button,{isSmall:!0,isSecondary:!0,text:(0,n.__)("Clear"),onClick:()=>{m()}}))};function E(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function y(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}var h=function(e){var t=e.icon,l=e.size,n=void 0===l?24:l,c=function(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}(e,["icon","size"]);return(0,a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?y(Object(l),!0).forEach((function(t){E(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):y(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({width:n,height:n},c))},x=window.wp.primitives,C=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),_=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),B=(0,a.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(x.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),k=(0,a.memo)((({colPC:e,colTab:t,colMobile:l,setAttributes:n,min:a=1,max:c=8})=>React.createElement(React.Fragment,null,React.createElement(o.Flex,null,React.createElement(o.FlexItem,{style:{marginRight:"4px",marginBottom:"8px"}},React.createElement(h,{icon:C})),React.createElement(o.FlexBlock,null,React.createElement(o.RangeControl,{value:parseInt(e),onChange:e=>{n({colPC:e+""})},min:a,max:c}))),React.createElement(o.Flex,null,React.createElement(o.FlexItem,{style:{marginRight:"4px",marginBottom:"8px"}},React.createElement(h,{icon:_})),React.createElement(o.FlexBlock,null,React.createElement(o.RangeControl,{value:parseInt(t),onChange:e=>{n({colTab:e+""})},min:a,max:c}))),React.createElement(o.Flex,null,React.createElement(o.FlexItem,{style:{marginRight:"4px",marginBottom:"8px"}},React.createElement(h,{icon:B})),React.createElement(o.FlexBlock,null,React.createElement(o.RangeControl,{value:parseInt(l),onChange:e=>{n({colMobile:e+""})},min:a,max:c})))))),O=(0,a.memo)((({colWidth:e,setAttributes:t,defaultUnit:l,defaultWidth:n,isLinked:a})=>{const c=(l,n)=>{t(a?{colWidth:{pc:n,tab:n,mobile:n}}:{colWidth:{...e,[l]:n}})};return React.createElement(React.Fragment,null,React.createElement(o.Flex,{style:{marginBottom:"8px"}},React.createElement(o.FlexItem,{style:{marginRight:"4px"}},React.createElement(h,{icon:C})),React.createElement(o.FlexBlock,null,React.createElement(R,{value:(null==e?void 0:e.pc)||"",step:"1",defaultUnit:l||"",units:["em","px","vw","%"],onChange:e=>{c("pc",e)},onClear:()=>{c("pc",(null==n?void 0:n.pc)||void 0)}}))),React.createElement(o.Flex,{style:{marginBottom:"8px"}},React.createElement(o.FlexItem,{style:{marginRight:"4px"}},React.createElement(h,{icon:_})),React.createElement(o.FlexBlock,null,React.createElement(R,{value:(null==e?void 0:e.tab)||"",step:"1",defaultUnit:l||"",units:["em","px","vw","%"],onChange:e=>{c("tab",e)},onClear:()=>{c("tab",(null==n?void 0:n.tab)||void 0)}}))),React.createElement(o.Flex,{style:{marginBottom:"8px"}},React.createElement(o.FlexItem,{style:{marginRight:"4px"}},React.createElement(h,{icon:B})),React.createElement(o.FlexBlock,null,React.createElement(R,{value:(null==e?void 0:e.mobile)||"",step:"1",defaultUnit:l||"",units:["em","px","vw","%"],onChange:e=>{c("mobile",e)},onClear:()=>{c("mobile",(null==n?void 0:n.mobile)||void 0)}}))))})),P=l(991),F=l.n(P);const j=(e,t)=>-1!==e.split(" ").indexOf(t);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},N.apply(this,arguments)}const V=({idKey:e,selected:t,title:l,onClick:n,children:a})=>React.createElement("div",{className:"swl-styleControl"},React.createElement(o.Button,{id:`swl-styleControl-${e}`,onClick:n}),React.createElement("label",{htmlFor:`swl-styleControl-${e}`,className:"swl-styleControl__inner","data-selected":t},React.createElement("div",{className:"swl-styleControl__body"},React.createElement("div",{className:"swl-styleControl__preview"},React.createElement("div",{className:"swl-styleControl__preview__inner"},a))),l&&React.createElement("div",{className:"swl-styleControl__title"},l)));var I=(0,a.memo)((({type:e,styles:t,nowClass:l,Preview:n,exData:a,height:c,setAttributes:r,rate:o=200,defaultValue:s=""})=>{const i=t.map((e=>e.value));return React.createElement("fieldset",{className:`swl-styleControls for-${e}`,"data-rate":o,style:c?{"--swl--previewHeight":`${c}%`}:null},t.map((t=>{const c=t.value?j(l,t.value):!((e,t)=>{if(!e)return!1;const l=e.split(" ");return n=l,a=t,[...n,...a].filter((e=>!!e&&n.includes(e)&&a.includes(e))).length>0;var n,a})(l,i);return React.createElement(V,{key:`${e}_${t.value}`,idKey:`${e}--${t.value}`,title:t.label,selected:c,onClick:()=>{(e=>{const t=((e,t,l,n="")=>{if(j(e,t))return e;let a;if(l){const c={};l.map((e=>{c[e]=!1})),n&&(c[n]=!1),a=F()(e,c),t&&(a=F()(a,n,t))}else t&&(a=F()(e,t));return a})(l,e,i);r({className:t})})(c?s:t.value)}},React.createElement(n,N({},t,{exData:a})))})))}));const S=["loos/column"],A=[["loos/column"],["loos/column"]],z=(0,a.createInterpolateElement)((0,n.__)("カラム間の余白 (<code>margin</code>)"),{code:React.createElement("code",{className:"u-fz-s"})}),M={pc:"400px",tab:"400px",mobile:"300px"},H=[{value:"",label:(0,n.__)("デフォルト","swell")},{value:"is-style-clmn-border",label:(0,n.__)("ボーダー","swell")},{value:"is-style-clmn-shadow",label:(0,n.__)("シャドウ","swell")}],W="swell-block-columns";(0,c.registerBlockType)(i.u2,{title:(0,n.__)("リッチカラム","swell"),icon:d,transforms:{from:[{type:"block",blocks:["core/columns"],transform:(e,t)=>{const l=[];return t.forEach((e=>{l.push((0,c.createBlock)("loos/column",{},e.innerBlocks))})),(0,c.createBlock)(i.u2,{},l)}}]},edit:({attributes:e,setAttributes:t})=>{const{vAlign:l,colPC:a,colTab:c,colMobile:i,isScrollable:u,colWidth:p,margin:d}=e,b=e.className||"";let w={};w=u?{"--clmn-w--pc":null==p?void 0:p.pc,"--clmn-w--tab":null==p?void 0:p.tab,"--clmn-w--mobile":null==p?void 0:p.mobile}:{"--clmn-w--pc":"2"!==a?m(a):null,"--clmn-w--tab":"2"!==c?m(c):null,"--clmn-w--mobile":"1"!==i?m(i):null};const g=(0,r.useBlockProps)({className:W,style:{...w,"--swl-clmn-mrgn--x":"1.5rem"!==d.x?d.x:null,"--swl-clmn-mrgn--y":"1.5rem"!==d.y?d.y:null},"data-valign":l||null,"data-scrollable":u?"1":null}),f=s({className:"swell-block-columns__inner"},{allowedBlocks:S,template:A,templateLock:!1,orientation:"horizontal",renderAppender:r.InnerBlocks.ButtonBlockAppender});return React.createElement(React.Fragment,null,React.createElement(r.BlockControls,null,React.createElement(r.BlockVerticalAlignmentToolbar,{onChange:e=>{t({vAlign:e})},value:l})),React.createElement(r.InspectorControls,null,React.createElement(o.PanelBody,{title:(0,n.__)("スタイル","swell"),initialOpen:!0},React.createElement(I,{type:"swl-columns",styles:H,nowClass:b,setAttributes:t,Preview:v})),React.createElement(o.PanelBody,{title:(0,n.__)("設定","swell")},React.createElement(o.ToggleControl,{label:(0,n.__)("横スクロールで表示する","swell"),checked:u,onChange:e=>{t(e?{isScrollable:!0,colWidth:M}:{isScrollable:!1,colWidth:void 0})}}),u&&React.createElement(o.BaseControl,null,React.createElement(o.BaseControl.VisualLabel,null,(0,n.__)("横幅","swell")),React.createElement(O,{colWidth:p,defaultWidth:M,setAttributes:t})),!u&&React.createElement(o.BaseControl,null,React.createElement(o.BaseControl.VisualLabel,null,(0,n.__)("列数","swell")),React.createElement(k,{colPC:a,colTab:c,colMobile:i,setAttributes:t})),React.createElement(o.BaseControl,null,React.createElement(o.BaseControl.VisualLabel,null,z),React.createElement(o.Flex,null,React.createElement(o.FlexItem,{style:{minWidth:"4em",marginRight:"auto"}},(0,n.__)("左右の余白","swell")),React.createElement(o.FlexBlock,{style:{flex:"0 1 auto"}},React.createElement(R,{value:d.x,step:"0.5",onChange:e=>{t({margin:{...d,x:e}})}}))),React.createElement(o.Flex,{style:{marginTop:"8px"},"data-swl-disable":u?"1":null},React.createElement(o.FlexItem,{style:{minWidth:"4em",marginRight:"auto"}},(0,n.__)("上下の余白","swell")),React.createElement(o.FlexBlock,{style:{flex:"0 1 auto"}},React.createElement(R,{value:d.y,step:"0.5",onChange:e=>{t({margin:{...d,y:e}})}})))))),React.createElement("div",g,u&&React.createElement("div",{className:"c-scrollHint"},React.createElement("span",null,"スクロールできます ",React.createElement("i",{className:"icon-more_arrow"}))),React.createElement("div",f)))},save:({attributes:e})=>{const{vAlign:t,colPC:l,colTab:n,colMobile:a,isScrollable:c,colWidth:o,margin:s}=e;let i={};i=c?{"--clmn-w--pc":null==o?void 0:o.pc,"--clmn-w--tab":null==o?void 0:o.tab,"--clmn-w--mobile":null==o?void 0:o.mobile}:{"--clmn-w--pc":"2"!==l?m(l):null,"--clmn-w--tab":"2"!==n?m(n):null,"--clmn-w--mobile":"1"!==a?m(a):null};const u=r.useBlockProps.save({className:W,style:{...i,"--swl-clmn-mrgn--x":"1.5rem"!==s.x?s.x:null,"--swl-clmn-mrgn--y":"1.5rem"!==s.y?s.y:null},"data-valign":t||null,"data-scrollable":c?"1":null});return React.createElement("div",u,c&&React.createElement("div",{className:"c-scrollHint"},React.createElement("span",null,"スクロールできます ",React.createElement("i",{className:"icon-more_arrow"}))),React.createElement("div",{className:"swell-block-columns__inner"},React.createElement(r.InnerBlocks.Content,null)))},deprecated:p})},991:function(e,t){var l;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var l=t.length,n=0;n<l;++n)a(e,t[n])}e.prototype=Object.create(null);var l={}.hasOwnProperty,n=/\s+/;function a(e,a){if(a){var c=typeof a;"string"===c?function(e,t){for(var l=t.split(n),a=l.length,c=0;c<a;++c)e[l[c]]=!0}(e,a):Array.isArray(a)?t(e,a):"object"===c?function(e,t){if(t.toString===Object.prototype.toString)for(var n in t)l.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,a):"number"===c&&function(e,t){e[t]=!0}(e,a)}}return function(){for(var l=arguments.length,n=Array(l),a=0;a<l;a++)n[a]=arguments[a];var c=new e;t(c,n);var r=[];for(var o in c)c[o]&&r.push(o);return r.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},184:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var c=typeof l;if("string"===c||"number"===c)e.push(l);else if(Array.isArray(l)){if(l.length){var r=a.apply(null,l);r&&e.push(r)}}else if("object"===c)if(l.toString===Object.prototype.toString)for(var o in l)n.call(l,o)&&l[o]&&e.push(o);else e.push(l.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},t={};function l(n){var a=t[n];if(void 0!==a)return a.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,l),c.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l(63)}();
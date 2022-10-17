!function(){var e={937:function(e,l,t){"use strict";var a=window.wp.i18n,n=window.wp.blocks,r=window.wp.blockEditor,c=window.wp.element,s=window.wp.components,o=window.wp.primitives,i=(0,c.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(o.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),u=window.wp.serverSideRender,m=t.n(u),w=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M8.8,22.7H6.6v4.2h2.2c5.3,0,10.6,2.2,14.2,5.8c3.9,3.9,5.8,8.9,5.8,14.2v2.2H33v-1.9c0-6.4-2.5-12.5-7.2-17.3 C21.3,25.5,15.2,22.7,8.8,22.7z M37.7,18.3C29.9,10.5,19.6,6,8.8,6H6.6v4.2h2.2C18.5,10.2,28,14.1,35,21s10.9,16.2,10.9,26.2v2.2H50 v-2.2C50,36.4,45.5,26.1,37.7,18.3z M7,50h6.4c0.5,0,1-0.4,1-1v-6.4c0-0.5-0.4-1-1-1H7c-0.5,0-1,0.4-1,1V49C6,49.6,6.4,50,7,50z"}));const _=[{label:(0,a.__)("カード型","swell"),value:"card"},{label:(0,a.__)("リスト型","swell"),value:"list"},{label:(0,a.__)("テキスト型","swell"),value:"simple"}],p=[{label:(0,a.__)("h2","swell"),val:"h2"},{label:(0,a.__)("h3","swell"),val:"h3"},{label:(0,a.__)("div","swell"),val:"div"}],v=[{label:(0,a.__)("1列","swell"),val:"1"},{label:(0,a.__)("2列","swell"),val:"2"},{label:(0,a.__)("3列","swell"),val:"3"}],b=[{label:(0,a.__)("1列","swell"),val:"1"},{label:(0,a.__)("2列","swell"),val:"2"}];function h({attributes:e,setAttributes:l}){const{pageName:t,useCache:n,listType:r,listCountPC:o,listCountSP:i,showDate:u,showAuthor:m,showSite:w,showThumb:h,hTag:R,pcCol:d,spCol:C}=e,E=(0,c.useMemo)((()=>{const e=[{name:"showSite",label:(0,a.__)("サイトのページ名を表示する","swell"),value:w},{name:"showDate",label:(0,a.__)("公開日を表示する","swell"),description:"",value:u},{name:"showAuthor",label:(0,a.__)("著者を表示する","swell"),value:m}];return"simple"!==r&&e.push({name:"showThumb",label:(0,a.__)("サムネイルを表示する","swell"),value:h}),e}),[r,w,u,m,h]);return React.createElement(React.Fragment,null,React.createElement(s.PanelBody,{title:(0,a.__)("RSS設定","swell"),initialOpen:!0},React.createElement(s.TextControl,{label:(0,a.__)("RSSフィードのページ名","swell"),value:t,onChange:e=>{l({pageName:e})}}),React.createElement(s.ToggleControl,{label:(0,a.__)("キャッシュを利用する","swell"),help:(0,a.__)("キャッシュを削除したい時、一度だけオフにしてください。","swell"),checked:n,onChange:e=>{l({useCache:e})}})),React.createElement(s.PanelBody,{title:(0,a.__)("表示設定","swell"),initialOpen:!0},React.createElement(s.RangeControl,{label:(0,a.__)("表示する投稿数","swell")+"(PC)",value:o,onChange:e=>{l({listCountPC:e})},min:1,max:10}),React.createElement(s.RangeControl,{label:(0,a.__)("表示する投稿数","swell")+"(SP)",value:i,onChange:e=>{l({listCountSP:e})},min:1,max:10}),React.createElement(s.RadioControl,{label:(0,a.__)("リストレイアウト","swell"),selected:r,options:_,onChange:e=>{l({listType:e})}}),React.createElement(s.BaseControl,{className:"arkb-toggles"},React.createElement(s.BaseControl.VisualLabel,null,(0,a.__)("小さく表示何を表示するか","swell")),E.map((e=>{const t=""===e.description?e.label:React.createElement("span",null,e.label,React.createElement("br",null),React.createElement("small",null,e.description));return React.createElement(s.ToggleControl,{label:t,checked:e.value,onChange:t=>{l({[e.name]:t})},key:`toggle_${e.name}`})}))),React.createElement(s.BaseControl,null,React.createElement(s.BaseControl.VisualLabel,null,(0,a.__)("タイトルのHTMLタグ","swell")),React.createElement(s.ButtonGroup,{className:"ark-btns--minWidth"},p.map((e=>{const t=e.val===R;return React.createElement(s.Button,{isPrimary:t,onClick:()=>{l({hTag:e.val})},key:`hTag_${e.val}`},e.label)})))),"card"===r&&React.createElement(React.Fragment,null,React.createElement(s.BaseControl,null,React.createElement(s.BaseControl.VisualLabel,null,(0,a.__)("最大カラム数","swell")+" (PC)"),React.createElement("small",{className:"swl-helptext--btns"},(0,a.__)("※ カード型でのみ有効","swell")),React.createElement(s.ButtonGroup,{className:"swl-btns--minWidth"},v.map((e=>{const t=e.val===d;return React.createElement(s.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{l({pcCol:e.val})},key:`pcCol_${e.val}`},e.label)})))),React.createElement(s.BaseControl,null,React.createElement(s.BaseControl.VisualLabel,null,(0,a.__)("最大カラム数","swell")+" (SP)"),React.createElement("small",{className:"swl-helptext--btns"},(0,a.__)("※ カード型でのみ有効","swell")),React.createElement(s.ButtonGroup,{className:"swl-btns--minWidth"},b.map((e=>{const t=e.val===C;return React.createElement(s.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{l({spCol:e.val})},key:`spCol_${e.val}`},e.label)})))))))}const R={color:"#04384c",swellFavi:React.createElement("svg",{width:"20",height:"20","aria-hidden":"true",viewBox:"0 0 56 56","data-icon-name":"swell-block-category"},React.createElement("circle",{cx:"5.24",cy:"20.48",r:"3.09"}),React.createElement("path",{className:"st0",d:"M52.14,14.73c-1.52-3.17-5.37-5.58-9.98-4.7c-5.22,1-7.84,4.17-11.3,8.54c-3.9,4.94-7.93,10.05-13.58,12.33 c-1.99,0.8-4.06,1.21-6.22,1.21c-1.65,0-3.35-0.24-5.11-0.7c-1.08-0.29-2.17-0.66-3.3-1.12C5.49,41.74,15.93,50.2,28.3,50 c14.14-0.23,25.6-11.92,25.55-26.07C53.84,20.69,53.46,17.49,52.14,14.73z"}))};var d=t(184),C=t.n(d);(0,n.registerBlockType)("loos/rss",{title:(0,a.__)("RSS","swell"),description:(0,a.__)("RSSフィードのリストを作成します。","swell"),icon:w,edit:({attributes:e,setAttributes:l})=>{const{rssUrl:t}=e,[n,o]=(0,c.useState)(!t),u=(0,r.useBlockProps)({className:C()("swell-block-rss","post_content")});if(n)return React.createElement("div",u,React.createElement(s.Placeholder,{icon:R.swellFavi,label:(0,a.__)("RSS","swell")},React.createElement("form",{onSubmit:function(e){e.preventDefault(),t&&o(!1)},className:"wp-block-rss__placeholder-form"},React.createElement(s.TextControl,{placeholder:(0,a.__)("Enter URL here…"),value:t,onChange:e=>l({rssUrl:e}),className:"wp-block-rss__placeholder-input"}),React.createElement(s.Button,{isPrimary:!0,variant:"primary",type:"submit"},(0,a.__)("Use URL")))));const w=[{icon:i,title:(0,a.__)("Edit RSS URL"),onClick:()=>o(!0)}];return React.createElement(React.Fragment,null,React.createElement(r.BlockControls,null,React.createElement(s.ToolbarGroup,{controls:w})),React.createElement(r.InspectorControls,null,React.createElement(h,{attributes:e,setAttributes:l})),React.createElement("div",u,React.createElement(m(),{block:"loos/rss",attributes:e})))},save:()=>null})},184:function(e,l){var t;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var c=n.apply(null,t);c&&e.push(c)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var s in t)a.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(l,[]))||(e.exports=t)}()}},l={};function t(a){var n=l[a];if(void 0!==n)return n.exports;var r=l[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,{a:l}),l},t.d=function(e,l){for(var a in l)t.o(l,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})},t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},t(937)}();
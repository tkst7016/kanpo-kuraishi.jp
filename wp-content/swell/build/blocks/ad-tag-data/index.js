!function(){var e={221:function(e,t,a){"use strict";var l=window.wp.i18n,n=window.wp.blocks,r=window.wp.element,o=window.wp.data,c=window.wp.coreData,s=window.wp.blockEditor,i=window.wp.components,d="function"==typeof s.useInnerBlocksProps?s.useInnerBlocksProps:s.__experimentalUseInnerBlocksProps,u=JSON.parse('{"u2":"loos/ad-tag-data"}'),_=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M56,17l-2.8,7.9v0c-1.5-0.5-2.9-0.4-4.3,0.2c-1.4,0.7-2.4,1.7-2.9,3.2s-0.4,2.9,0.2,4.3c0.7,1.4,1.7,2.4,3.2,2.9v0l-2.8,7.9 L4.4,28.3l2.8-7.8c1.5,0.5,2.9,0.4,4.3-0.2c1.4-0.6,2.4-1.7,2.9-3.2c0.5-1.5,0.4-2.9-0.2-4.3c-0.6-1.4-1.7-2.3-3.2-2.9l2.9-8L56,17z M42.1,32.9l3.8-10.5c0.3-0.9,0.3-1.8-0.1-2.7c-0.4-0.8-1.1-1.5-2-1.8l-21.1-7.6c-1.8-0.6-3.8,0.3-4.5,2.1l-3.8,10.5 c-0.7,1.8,0.3,3.8,2.1,4.5L37.6,35c0.4,0.1,0.8,0.2,1.2,0.2C40.3,35.2,41.6,34.3,42.1,32.9z M22.3,11.6l21,7.6 c0.5,0.2,1,0.6,1.2,1.1c0.2,0.5,0.3,1.1,0.1,1.6l-3.8,10.5c-0.4,1.1-1.6,1.7-2.7,1.3l-21-7.7c-1.1-0.4-1.7-1.6-1.3-2.7l3.8-10.5 c0.3-0.8,1.1-1.4,2-1.4C21.8,11.4,22.1,11.5,22.3,11.6z M41.4,45.6c1,0.8,2.1,1.1,3.4,1.1h0v8.4H0v-8.3c1.5,0,2.9-0.6,3.9-1.7 c1.1-1.1,1.7-2.4,1.7-3.9S5,38.4,3.9,37.3S1.5,35.6,0,35.6v-8.5h2.9l-0.8,2.2l8,2.9c-1.4,0.4-2.5,1.7-2.5,3.3v11.2 c0,1.9,1.6,3.5,3.5,3.5h22.4c1.9,0,3.5-1.6,3.5-3.5v-4.9l2.3,0.8C39.8,43.8,40.4,44.8,41.4,45.6z M9.1,46.7V35.5 c0-1.1,1-2.1,2.1-2.1h2.3l22.2,7.9v5.4c0,1.1-1,2.1-2.1,2.1H11.2C10.1,48.8,9.1,47.8,9.1,46.7z"})),p=a(184),v=a.n(p);const b=["loos/ad-tag-data-body","loos/ad-tag-data-free-contents","loos/ad-tag-data-buttons"],w=[["loos/ad-tag-data-body"],["loos/ad-tag-data-free-contents"],["loos/ad-tag-data-buttons"]],m=[{value:"text",label:(0,l.__)("テキスト広告","swell"),help:[(0,l.__)("入力したタグをspanタグで囲んでそのまま出力します。","swell"),(0,l.__)("ショートコードで呼び出すことで文章の中に広告リンクを設置することが可能ですが、「広告タグ」ブロックでの呼び出しはできません。","swell")]},{value:"banner",label:(0,l.__)("バナー広告","swell"),help:[(0,l.__)("入力した広告タグをdivタグで囲んでそのまま出力します。","swell")]},{value:"card",label:(0,l.__)("カード型","swell"),help:[(0,l.__)("カード型広告の説明文が入ります。","swell")]},{value:"box",label:(0,l.__)("ボックス型","swell"),help:[(0,l.__)("ボックス型広告の説明文が入ります。","swell")]},{value:"ranking",label:(0,l.__)("ランキング型","swell"),help:[(0,l.__)("ランキング型広告の説明文が入ります。","swell")]}],g=[{value:1,label:(0,l.__)("1位","swell")},{value:2,label:(0,l.__)("2位","swell")},{value:3,label:(0,l.__)("3位","swell")},{value:0,label:(0,l.__)("なし","swell")}];window.adTagDataContext=(0,r.createContext)();const k="swell-block-ad-tag-data";(0,n.registerBlockType)(u.u2,{title:(0,l.__)("広告タグ管理","swell"),icon:_,edit:({attributes:e,setAttributes:t,clientId:a})=>{var u,_;const[p,h]=(0,r.useState)(!1),{adType:f,hasBorder:y,useFreeContents:E,cardUrl:R,isUnderBtn:C}=e,B=window.adTagDataContext,x={isPreview:p},$=(0,o.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),[T,P]=(0,c.useEntityProp)("postType",$,"meta"),{updateBlockAttributes:N,replaceInnerBlocks:I}=(0,o.useDispatch)("core/block-editor"),{getBlocks:S}=(0,o.useSelect)("core/block-editor"),U=(0,o.useSelect)((e=>e("core/block-editor").getBlocks(a).find((e=>"loos/ad-tag-data-body"===e.name))),[a]),A=(null==U||null===(u=U.attributes)||void 0===u?void 0:u.rank)||void 0,L=(null==U||null===(_=U.attributes)||void 0===_?void 0:_.isWideTagArea)||void 0,{label:M,help:O}=m.find((e=>e.value===f)),j=e=>{const t=S(a);if(!t.length)return;const l=t.find((e=>"loos/ad-tag-data-buttons"===e.name)),r=t.find((e=>"loos/ad-tag-data-body"===e.name));if(!l||!r)return;const o=S(r.clientId);if(!o.length)return;const c=o.find((e=>"loos/ad-tag-data-buttons"===e.name));if(!c)return;const s=S((e?c:l).clientId),i=(0,n.createBlocksFromInnerBlocksTemplate)(s);I((e?l:c).clientId,i)},z=(0,s.useBlockProps)({className:v()(`${k}`,`-${f}`,{"-is-under-btn":C})}),D=d({},{allowedBlocks:b,template:w,templateLock:!0});return React.createElement("div",z,React.createElement(i.ButtonGroup,{className:`${k}__nav`},m.map((e=>{const a=f===e.value;return React.createElement(i.Button,{isSecondary:!a,isPrimary:a,onClick:()=>{C||"box"!==f||"ranking"!==e.value||j(!0),C||"ranking"!==f||"box"!==e.value||j(!1),t({adType:e.value}),P({...T,swell_ad_type:e.value})},key:`key_${e.value}`},`${e.label}`)}))),React.createElement(i.ToggleControl,{label:(0,l.__)("プレビュー","swell"),checked:p,className:`${k}__preview`,onChange:e=>{h(e)}}),React.createElement("div",{className:`${k}__wrap`},React.createElement("div",{className:v()(`${k}__content`,{"-border-on":y&&("banner"===f||"box"===f||"ranking"===f),"-preview":p})},React.createElement(B.Provider,{value:x},D.children))),React.createElement("div",{className:`${k}__control`},"card"===f&&React.createElement(i.TextControl,{value:R||"",placeholder:(0,l.__)("リンク先のURLを入力してください","swell"),onChange:e=>{t({cardUrl:e})}}),"ranking"===f&&React.createElement(i.BaseControl,null,React.createElement(i.BaseControl.VisualLabel,null,(0,l.__)("ランキング順位","swell")),React.createElement(i.ButtonGroup,null,g.map((e=>{const t=A===e.value;return React.createElement(i.Button,{className:`${k}__ranking-button -rank${e.value}`,isSecondary:!t,isPrimary:t,onClick:()=>{N(U.clientId,{rank:e.value})},key:`key_${e.value}`},`${e.label}`)})))),("banner"===f||"box"===f||"ranking"===f)&&React.createElement(i.ToggleControl,{label:(0,l.__)("広告エリアに枠をつける","swell"),checked:y||!1,onChange:e=>{t({hasBorder:e})}}),"box"===f&&React.createElement(React.Fragment,null,React.createElement(i.ToggleControl,{label:(0,l.__)("広告タグの表示幅を広くする","swell"),checked:L||!1,onChange:e=>{N(U.clientId,{isWideTagArea:e})}}),React.createElement(i.ToggleControl,{label:(0,l.__)("ボタンを下側に配置","swell"),checked:C||!1,onChange:e=>{t({isUnderBtn:e}),j(e)}})),"ranking"===f&&React.createElement(i.ToggleControl,{label:(0,l.__)("ボタン上に自由コンテンツを配置する","swell"),checked:E||!1,onChange:e=>{t({useFreeContents:e})}})),O.length>0&&React.createElement("div",{className:`${k}__help`},React.createElement("div",{className:`${k}__help-ttl`},(0,l.sprintf)(
/* translators: %s 広告タイプ */
(0,l.__)("「%s」の特徴","swell"),M)),O.map(((e,t)=>React.createElement("div",{key:t,className:`${k}__help-txt`},e)))))},save:({attributes:e})=>{const{adType:t,hasBorder:a,cardUrl:l}=e,n="card"===t?"a":"div",r=s.useBlockProps.save({className:v()(`${k}`,`-${t}`),href:"card"===t?l:void 0});return React.createElement(n,r,React.createElement("div",{className:v()(`${k}__content`,{"-border-on":a&&("banner"===t||"box"===t||"ranking"===t)})},React.createElement(s.InnerBlocks.Content,null)))}})},184:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&e.push(o)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var c in a)l.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,a),r.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a(221)}();
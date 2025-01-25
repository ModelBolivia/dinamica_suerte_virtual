(()=>{var e,t={3314:(e,t,n)=>{"use strict";const o=window.React,r=window.wp.i18n,a=window.wp.components,l=window.wp.blocks;var i=n(6942),s=n.n(i);const c=window.lodash,u=window.wp.element,p=window.wp.blockEditor,d=window.wp.compose,m=window.wp.data,g=window.wp.date,b=window.wp.coreData,h=window.wp.hooks,_=e=>{const{clearable:t=!0}=e,{colors:n}=(0,m.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[]})));return(0,o.createElement)(a.BaseControl,{label:e.label,id:"textcolor-1"},(0,o.createElement)(a.ColorPalette,{colors:n,value:e.value,onChange:t=>{e.onChange(t)},clearable:t}))},v=e=>{const{clearable:t=!0}=e,{colors:n,gradients:r}=(0,m.useSelect)((e=>({colors:e("core/block-editor").getSettings().colors||[],gradients:e("core/block-editor").getSettings().gradients||[]})));return(0,o.createElement)("div",{className:"gutenify-color-gradient-control-wrapper"},(0,o.createElement)(p.__experimentalColorGradientControl,{label:e.label,colorValue:e.colorValue,gradientValue:e.gradientValue,colors:n,gradients:r,disableCustomColors:!1,disableCustomGradients:!1,onColorChange:t=>{if((0,c.isEmpty)(t))return;const n={backgroundColor:t,backgroundGradient:void 0};e.onChange(n)},onGradientChange:t=>{if((0,c.isEmpty)(t))return;const n={backgroundGradient:t,backgroundColor:void 0};e.onChange(n)},clearable:!1}),t&&(0,o.createElement)("div",{className:"components-circular-option-picker__custom-clear-wrapper"},(0,o.createElement)("button",{type:"button",className:"components-button components-circular-option-picker__clear is-secondary is-small",onClick:()=>{e.onChange({backgroundColor:void 0,backgroundGradient:void 0})}},"Clear")))};u.Component;const y="gutenify",f=window?.[`_${y}_vars`]?window[`_${y}_vars`]:{},{is_pro_activated:k,pro_account_url:x,pro_license_status:C,title:$,prefix:E,slug:w,authorWebSite:B,authorDemoWebSite:P,authorWebSiteProPage:S,defaultTheme:O,authorWebSiteSupport:A,plugin_directory_url:F,brand_color:N,plugin_main_version:T,documentationsURL:j,pro_title:I,active_blocks:U,plugin_main_camel_case_name:R}=f,z=(f?.siteUrl?f.siteUrl:f.site_url,(0,r.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+S+'" target="_blank">',I,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:R,pluginMainFunctionPrefix:"gutenify"}),L=({className:e,contentClassName:t,position:n,value:l={},onChange:i,label:c})=>{const u=l?.color||l?.horizontal||l?.vertical||l?.blur||l?.spread||l?.position;return(0,o.createElement)("div",{className:"gutenify--box-shadow-control"},(0,o.createElement)("label",{htmlFor:"field-101"},(0,o.createElement)("span",null,c),(0,o.createElement)(a.Dropdown,{headerTitle:(0,r.__)("Box Shadow"),id:"field-101",className:e,contentClassName:s()(t,"gutenify--box-shadow-control-content"),position:n,renderToggle:({isOpen:e,onToggle:t})=>(0,o.createElement)(a.Button,{onClick:t,"aria-expanded":e,icon:"admin-customizer",variant:"secondary",className:s()("gutenify--box-shadow-control--button",(u||e)&&"gutenify--box-shadow-control--button--active")}),renderContent:()=>(0,o.createElement)("div",null,(0,o.createElement)(p.PanelColorSettings,{__experimentalIsRenderedInSidebar:!0,title:(0,r.__)("Color"),enableAlpha:!0,colorSettings:[{onChange:e=>{i({...l,color:e})},value:l?.color?l?.color:"",label:(0,r.__)("Shadow")}]}),(0,o.createElement)(a.RangeControl,{label:(0,r.__)("Horizontal (PX)"),value:l?.horizontal?l?.horizontal:0,onChange:e=>{i({...l,horizontal:e})},min:-100,max:100}),(0,o.createElement)(a.RangeControl,{label:(0,r.__)("Vertical (PX)"),value:l?.vertical?l?.vertical:0,onChange:e=>{i({...l,vertical:e})},min:-100,max:100}),(0,o.createElement)(a.RangeControl,{label:(0,r.__)("Blur (PX)"),value:l?.blur?l?.blur:0,onChange:e=>{i({...l,blur:e})},min:0,max:100}),(0,o.createElement)(a.RangeControl,{label:(0,r.__)("Spread (PX)"),value:l?.spread?l?.spread:0,onChange:e=>{i({...l,spread:e})},min:-100,max:100}),(0,o.createElement)(a.SelectControl,{label:(0,r.__)("Position"),value:l?.position?l?.position:"outline",onChange:e=>{i({...l,position:e})},options:[{value:"outline",label:(0,r.__)("Outline")},{value:"inset",label:(0,r.__)("Inset")}]}))})))};var M=n(1448),G=n.n(M);const q=e=>{const{value:t,label:n,id:l,help:i,disabled:s=!1,onChange:c}=e,p=G()(t,"desktop")?t.desktop:{},d=G()(t,"tablet")?t.tablet:{},m=G()(t,"mobile")?t.mobile:{},g=[{value:"px",label:"px",default:""},{value:"%",label:"%",default:""},{value:"em",label:"em",default:""}],[b,h]=(0,u.useState)({device:"desktop"}),_=e=>{const n={...t,...e};c(n)};return(0,o.createElement)("div",{className:"padding-control-wrapper"},(0,o.createElement)(a.BaseControl,{label:n,id:l,help:i},(0,o.createElement)("div",{className:"padding-actions-area"},(0,o.createElement)(a.ButtonGroup,null,(0,o.createElement)(a.IconButton,{disabled:s,icon:"desktop",label:(0,r.__)("Desktop"),isPrimary:"desktop"===b.device,onClick:()=>{h({device:"desktop"})}}),(0,o.createElement)(a.IconButton,{disabled:s,icon:"tablet",label:(0,r.__)("Tablet"),isPrimary:"tablet"===b.device,onClick:()=>{h({device:"tablet"})}}),(0,o.createElement)(a.IconButton,{disabled:s,icon:"smartphone",label:(0,r.__)("Mobile"),isPrimary:"mobile"===b.device,onClick:()=>{h({device:"mobile"})}}))),(0,o.createElement)("div",{className:"padding-fields-area"},"desktop"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:p.top,onChange:e=>{const t={...p,top:e};_({desktop:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:p.right,onChange:e=>{const t={...p,right:e};_({desktop:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:p.bottom,onChange:e=>{const t={...p,bottom:e};_({desktop:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:p.left,onChange:e=>{const t={...p,left:e};_({desktop:t})},units:g})),"tablet"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:d.top,onChange:e=>{const t={...d,top:e};_({tablet:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:d.right,onChange:e=>{const t={...d,right:e};_({tablet:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:d.bottom,onChange:e=>{const t={...d,bottom:e};_({tablet:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:d.left,onChange:e=>{const t={...d,left:e};_({tablet:t})},units:g})),"mobile"===b.device&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Top"),value:m.top,onChange:e=>{const t={...m,top:e};_({mobile:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Right"),value:m.right,onChange:e=>{const t={...m,right:e};_({mobile:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Bottom"),value:m.bottom,onChange:e=>{const t={...m,bottom:e};_({mobile:t})},units:g}),(0,o.createElement)(a.__experimentalUnitControl,{disabled:s,label:(0,r.__)("Left"),value:m.left,onChange:e=>{const t={...m,left:e};_({mobile:t})},units:g})))))},D=JSON.parse('{"UU":"gutenify/post-carousel","rE":"2","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"itemBackgroundColor":"#fff","itemLinkColor":"","itemColor":"","innerBlock":{"backgroundColor":"#f3f3f3","boxShadow":{"color":"#00000014","horizontal":0,"vertical":0,"blur":17,"spread":0,"position":""},"contentPadding":{"desktop":{"top":"30px","left":"40px","bottom":"30px","right":"40px"}}}}},"postLink":{"type":"string","default":"Read more"},"columns":{"type":"number","default":2},"excerptLength":{"type":"number","default":12},"displayFeaturedImage":{"type":"boolean","default":true},"displayPostContent":{"type":"boolean","default":true},"displayPostLink":{"type":"boolean","default":true},"displayPostDate":{"type":"boolean","default":true},"displayPostAuthor":{"type":"boolean","default":true},"displayPostCategories":{"type":"boolean","default":true},"query":{"type":"object","default":{"numberOfItems":3}},"spaceBetween":{"type":"number","default":30},"hasNavigation":{"type":"boolean","default":true},"hasPagination":{"type":"boolean","default":true},"isAutoplay":{"type":"boolean","default":false},"layout":{"type":"string","default":"layout-1"}}}'),{pluginMainFunctionPrefix:W}=z,{UU:H}=D,{plugin_directory_url:V}=window[`_${W}_vars`],X={name:H,blockId:H.replace("/","--"),hookPrefix:"post-carousel",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",ratingAlign:"center",thumbnailUrl:`${V}/assets/images/post-slider-layouts/layout-1.png`},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",ratingAlign:"left",thumbnailUrl:`${V}/assets/images/post-slider-layouts/layout-3.png`},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${V}/assets/images/post-slider-layouts/layout-2.png`},{name:"layout-4",label:"Layout 4",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${V}/assets/images/post-slider-layouts/layout-4.png`},{name:"layout-5",label:"Layout 5",imageAlign:"center",titleAlign:"right",ratingAlign:"right",thumbnailUrl:`${V}/assets/images/post-slider-layouts/layout-5.png`}]},{Accordion:K}=window?.[`_${E}_vars`]?.components,{blockId:Q,hookPrefix:J}=X,{pluginMainSlug:Y}=z;(0,h.addFilter)(`${Y}--inspector-controls--${Q}--style`,`${Y}--inspector-controls--${Q}--style--opitons`,((e,t)=>{const{attributes:n,setAttributes:l}=t,{blockAdvanceOptions:i}=n,{innerBlock:s}=i;return[...e,(0,o.createElement)(u.Fragment,{key:`gutenify-block-${J}-options-tab-content-basic`},(0,o.createElement)(K,{tabs:[{name:"post-wrapper",initialOpen:!0,label:()=>(0,r.__)("Post style"),cb:()=>(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.TabPanel,{className:"gutenify-editor-tab-panel gutenify-editor-tab-ovel",activeClass:"active-tab",tabs:[{name:"normal",title:(0,r.__)("Normal"),className:"gutenify-color-normal-tab"},{name:"hover",title:(0,r.__)("Hover"),className:"gutenify-color-hover-tab"}]},(e=>(0,o.createElement)(u.Fragment,null,"normal"===e.name&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(_,{label:(0,r.__)("Color"),onChange:e=>{let t={blockAdvanceOptions:i};t={...i,innerBlock:{...s,textColor:e}},l({blockAdvanceOptions:{...t}})},value:(0,c.has)(i,"innerBlock.textColor")?i.innerBlock.textColor:""}),(0,o.createElement)(v,{label:(0,r.__)("Background Color"),colorValue:i.innerBlock.backgroundColor,gradientValue:i.innerBlock.backgroundGradient,onChange:e=>{let t={blockAdvanceOptions:i};t={...i,innerBlock:{...s,...e}},l({blockAdvanceOptions:{...t}})}}),(0,o.createElement)(_,{label:(0,r.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderColor:e}}};l(t)},value:(0,c.has)(i,"innerBlock.borderColor")?i.innerBlock.borderColor:""})),"hover"===e.name&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(_,{label:(0,r.__)("Color"),onChange:e=>{let t={blockAdvanceOptions:i};t={...i,innerBlock:{...s,hoverTextColor:e}},l({blockAdvanceOptions:{...t}})},value:(0,c.has)(i,"innerBlock.hoverTextColor")?i.innerBlock.hoverTextColor:""}),(0,o.createElement)(v,{label:(0,r.__)("Background Color"),colorValue:i.innerBlock.hoverBackgroundColor,gradientValue:i.innerBlock.hoverBackgroundGradient,onChange:e=>{let t={blockAdvanceOptions:i};t={...i,innerBlock:{...s,hoverBackgroundColor:e.backgroundColor,hoverBackgroundGradient:e.backgroundGradient}},l({blockAdvanceOptions:{...t}})}}),(0,o.createElement)(_,{label:(0,r.__)("Border Color"),onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,hoverBorderColor:e}}};l(t)},value:(0,c.has)(i,"innerBlock.hoverBorderColor")?i.innerBlock.hoverBorderColor:""})),(0,h.applyFilters)(`gutenify--${J}--inspector--tab-style--posts`,[],t),(0,o.createElement)(a.__experimentalNumberControl,{label:(0,r.__)("Border Width"),value:(0,c.has)(i,"innerBlock.borderWidth")?i.innerBlock.borderWidth:"",onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderWidth:e}}};l(t)},min:0,max:300}),(0,o.createElement)(a.__experimentalUnitControl,{label:(0,r.__)("Border Radius"),value:(0,c.has)(i,"innerBlock.borderRadius")?i.innerBlock.borderRadius:"",onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,borderRadius:e}}};l(t)},min:0,max:300}),(0,o.createElement)(a.__experimentalUnitControl,{label:(0,r.__)("Thumbnail Min Height"),value:i?.innerBlock?.thumbnailMinHeight&&i.innerBlock.thumbnailMinHeight,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,thumbnailMinHeight:e}}};l(t)},min:0,disableUnits:!0}),(0,o.createElement)(L,{label:(0,r.__)("Box Shadow"),value:i?.innerBlock?.boxShadow,onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,boxShadow:e}}};l(t)}}),(0,o.createElement)(q,{label:(0,r.__)("Content Box Padding"),value:i?.innerBlock?.contentPadding?i.innerBlock.contentPadding:{},onChange:e=>{const t={blockAdvanceOptions:{...i,innerBlock:{...s,contentPadding:e}}};l(t)}}),(0,o.createElement)(a.__experimentalDivider,null)))))}]}))]}));const Z=({layouts:e,label:t="Layouts",value:n,onChange:r,blockName:l})=>{e=(0,h.applyFilters)(`${w}--layouts--${l}`,e);const i=l.replace(new RegExp(w+"--","gi"),"");return(0,o.createElement)(o.Fragment,null,e&&e.length?(0,o.createElement)("div",{className:`${w}-template-browser`},(0,o.createElement)(a.Flex,{direction:"column",gap:"20px"},(0,o.createElement)(a.FlexBlock,null,(0,o.createElement)("h2",null,t)),(0,o.createElement)(a.FlexBlock,null,(0,o.createElement)("ul",null,e.map((e=>{let t=`${w}-template-browser-item`;return n===e.name&&(t+=` ${w}-template-browser-item-active`),(0,o.createElement)("li",{className:t,key:e.name},(0,o.createElement)("button",{className:`${w}-template-browser-selector`,onClick:()=>{r(e)}},(0,o.createElement)("img",{src:e?.thumbnailUrl?e.thumbnailUrl:`${F}/assets/images/layouts/${i}/${e.name}.png`,alt:e.name}),(0,o.createElement)("small",null,e.label)))})))))):"")},ee={who:"authors",per_page:-1,_fields:"id,name",context:"view"},te=function({value:e,onChange:t}){const n=(0,m.useSelect)((e=>{const{getUsers:t}=e(b.store);return t(ee)}),[]);if(!n)return null;const l=(e=>{const t=e?.reduce(((e,t)=>{const{mapById:n,mapByName:o,names:r}=e;return n[t.id]=t,o[t.name]=t,r.push(t.name),e}),{mapById:{},mapByName:{},names:[]});return{entities:e,...t}})(n),i=(e?e.toString().split(","):[]).reduce(((e,t)=>{const n=l.mapById[t];return n&&e.push({id:t,value:n.name}),e}),[]);return(0,o.createElement)(a.FormTokenField,{label:(0,r.__)("Authors"),value:i,suggestions:l.names,onChange:e=>{const n=Array.from(e.reduce(((e,t)=>{const n=((e,t)=>{const n=t?.id||e[t]?.id;if(n)return n})(l.mapByName,t);return n&&e.add(n),e}),new Set));t({author:n.join(",")})}})},ne=[{label:(0,r.__)("Decending"),value:"desc"},{label:(0,r.__)("Ascending"),value:"asc"}],oe=[{label:(0,r.__)("Date"),value:"date"},{label:(0,r.__)("Title"),value:"title"}],re=(0,d.compose)([(0,m.withSelect)(((e,t)=>{let{postTypes:n=[],query:o}=t;const{postTypes:r=[]}=o;n=r.length>0?r:n;const{getEntityRecords:a,getPostTypes:l,getTaxonomy:i}=e(b.store),s=l({per_page:-1})?.filter((({viewable:e})=>e)),c=l({per_page:-1})?.filter((({viewable:e,slug:t})=>e&&n.includes(t)));let u=[];const p={};let d=[];return c?.length&&c.forEach((e=>{e?.taxonomies&&(d=[...e.taxonomies,...d])})),d?.length&&d.forEach((e=>{p[e]=a("taxonomy",e,{per_page:-1}),u=[...u,i(e)]})),u=u.filter((e=>e)),{taxonomies:u,taxonomiesTerms:p,availablePostTypes:s}}))])((e=>{const{query:t,taxonomies:n=[],taxonomiesTerms:l,onChange:i,excludeFields:s=[],orderByOptions:u=[],availablePostTypes:p=[]}=e,{orderBy:d,order:m,numberOfItems:g,authorIds:b=[],tax:_={}}=t,v=e=>{i({...t,...e})};return(0,o.createElement)(o.Fragment,null,(0,h.applyFilters)("gutenify--advance-query-control--fields",[],e),(0,o.createElement)(a.SelectControl,{label:(0,r.__)("Order"),value:m,onChange:e=>{v({order:e})},options:ne}),(0,o.createElement)(a.SelectControl,{label:(0,r.__)("Order by"),value:d,onChange:e=>{v({orderBy:e})},options:u.length>0?u:oe}),!s.includes("taxonomies")&&n.length>0&&n.map((e=>(0,o.createElement)(a.BaseControl,{key:`tax-$${e.slug}`},(0,o.createElement)("div",{style:{maxHeight:"300px",overflow:"scroll"}},l[e.slug]&&l[e.slug]?.length>0&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("h2",{htmlFor:`tax-term-${e.slug}`},e.name),l[e.slug]&&l[e.slug]?.length&&(0,o.createElement)(o.Fragment,null,l[e.slug].map((t=>{const n=(0,c.has)(_,`${e.slug}`)&&_[e.slug].includes(t.id);return(0,o.createElement)("div",{key:`tax-term-${t.slug}`},(0,o.createElement)(a.CheckboxControl,{label:t.name,checked:n,onChange:()=>{const n=_;(0,c.has)(_,`${e.slug}`)||(n[e.slug]=[]),n[e.slug].includes(t.id)?n[e.slug]=n[e.slug].filter((function(e){return e!==t.id})):n[e.slug].push(t.id),v({tax:{...n}})}}))})))))))),!s.includes("authors")&&(0,o.createElement)(te,{value:b.join(","),onChange:e=>{let t=e?.author.split(",");t=t.filter((e=>""!==e)),v({authorIds:t})}}),(0,o.createElement)(a.RangeControl,{label:(0,r.__)("Number of items"),min:1,max:100,value:g,onChange:e=>{v({numberOfItems:e})}}))})),{Accordion:ae}=window?.[`_${E}_vars`]?.components,{blockId:le,layouts:ie,hookPrefix:se}=X,{pluginMainSlug:ce}=z;(0,h.addFilter)(`${ce}--inspector-controls--${le}--content`,`${ce}--inspector-controls--${le}--content--opitons`,((e,t)=>{const{attributes:n,setAttributes:l}=t,{columns:i,displayPostContent:s,excerptLength:c,displayPostLink:p}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`${ce}-block-${se}-options-tab-content-basic`},(0,o.createElement)(ae,{tabs:[{name:"posts",initialOpen:!0,label:()=>(0,r.__)("Posts"),cb:()=>(0,o.createElement)(u.Fragment,null,(0,h.applyFilters)(`${ce}--${se}--inspector--tab-content--posts`,[],t),(0,o.createElement)(a.ToggleControl,{label:(0,r.__)("Show content"),help:s?(0,r.__)("Content showing"):(0,r.__)("Content hidden"),checked:s,onChange:()=>{l({displayPostContent:!s})}}),s&&(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.TextControl,{value:c,onChange:e=>{l({excerptLength:e})},type:"number",min:"0",label:(0,r.__)("Excerpt Length"),help:(0,r.__)("Number of words in content")}),(0,o.createElement)(a.ToggleControl,{label:(0,r.__)("Show Read more link"),help:p?(0,r.__)("Read more link showing"):(0,r.__)("Read more link hidden"),checked:p,onChange:()=>{l({displayPostLink:!p})}})))},{name:"slider-options",initialOpen:!0,label:()=>(0,r.__)("Slider"),cb:()=>(0,o.createElement)(u.Fragment,null,(0,o.createElement)(a.RangeControl,{value:i,label:(0,r.__)("Columns"),min:1,max:(0,h.applyFilters)(`${ce}--${le}--max-columns`,3),step:1,onChange:e=>{l({columns:e})}}),(0,h.applyFilters)(`${ce}--${se}--inspector--tab-content--slider`,[],t))}]}))]})),(0,h.addFilter)(`${ce}--${se}--inspector--tab-content--posts`,`${ce}--${se}--inspector--tab-content--posts--post-layout`,((e,t)=>{const{attributes:n,setAttributes:a,updateInnerBlocks:l}=t,{layout:i}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`${ce}--${se}--inspector--tab-content--posts--post-layout`},(0,o.createElement)(Z,{label:(0,r.__)("Post Layout"),layouts:ie,value:i,blockName:se,onChange:e=>{const t={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};a(t)}}))]})),(0,h.addFilter)(`${ce}--${se}--inspector--tab-content--posts`,`${ce}--${se}--inspector--tab-content--posts--advance-query-controls`,((e,t)=>{const{attributes:n,setAttributes:r}=t,{query:a}=n;return[...e,(0,o.createElement)(u.Fragment,{key:`${ce}--${se}--inspector--tab-content--posts--advance-query-controls`},(0,o.createElement)(re,{query:a,postTypes:["post"],onChange:e=>{r({query:{...e}})},...t}))]}));const{blockId:ue,name:pe}=X,{pluginMainSlug:de}=z;(0,h.addFilter)(`${de}--inline-styles--${ue}`,`${de}--inline-styles--${ue}--post-carousel`,((e,t,n="")=>{const{attributes:o,name:r}=t;if(r!==pe)return e;const{blockAdvanceOptions:a,blockClientId:l}=o,i=`${n=n||`.gutenify-section-${l}.wp-block-gutenify-post-carousel`} .gutenify-post-carousel-item-inner-wrapper`;let s=(0,c.has)(a,"innerBlock.textColor")&&!(0,c.isEmpty)(a.innerBlock.textColor)?`color: ${a.innerBlock.textColor};`:"";s+=(0,c.has)(a,"innerBlock.borderColor")&&!(0,c.isEmpty)(a.innerBlock.borderColor)?`border-color: ${a.innerBlock.borderColor};`:"",s+=(0,c.has)(a,"innerBlock.borderWidth")&&!(0,c.isEmpty)(a.innerBlock.borderWidth)?`border-width: ${a.innerBlock.borderWidth}px;`:"",s+=(0,c.has)(a,"innerBlock.borderWidth")&&!(0,c.isEmpty)(a.innerBlock.borderWidth)?"border-style: solid;":"",s+=(0,c.has)(a,"innerBlock.borderRadius")&&!(0,c.isEmpty)(a.innerBlock.borderRadius)?`border-radius: ${a.innerBlock.borderRadius};`:"",s+=(0,c.has)(a,"innerBlock.backgroundColor")&&!(0,c.isEmpty)(a.innerBlock.backgroundColor)?`background: ${a.innerBlock.backgroundColor};`:"",s+=(0,c.has)(a,"innerBlock.backgroundGradient")&&!(0,c.isEmpty)(a.innerBlock.backgroundGradient)?`background: ${a.innerBlock.backgroundGradient};`:"";let u=(0,c.has)(a,"innerBlock.hoverTextColor")&&!(0,c.isEmpty)(a.innerBlock.hoverTextColor)?`color: ${a.innerBlock.hoverTextColor};`:"";u+=(0,c.has)(a,"innerBlock.hoverBackgroundColor")&&!(0,c.isEmpty)(a.innerBlock.hoverBackgroundColor)?`background: ${a.innerBlock.hoverBackgroundColor};`:"",u+=(0,c.has)(a,"innerBlock.hoverBackgroundGradient")&&!(0,c.isEmpty)(a.innerBlock.hoverBackgroundGradient)?`background: ${a.innerBlock.hoverBackgroundGradient};`:"",u+=(0,c.has)(a,"innerBlock.hoverBorderColor")&&!(0,c.isEmpty)(a.innerBlock.hoverBorderColor)?`border-color: ${a.innerBlock.hoverBorderColor};`:"",s&&(e+=`${i} { ${s} }`),u&&(e+=`${i}:hover { ${u} }`),u="",u+=a?.innerBlock?.thumbnailMinHeight?`min-height:${a?.innerBlock?.thumbnailMinHeight}`:"",u&&(e+=`.${de}-section-${l}.wp-block-${de}-post-carousel .${de}-post-carousel-thumb img { ${u} }`);const p=a?.innerBlock?.boxShadow?a.innerBlock.boxShadow:{};if(u="",p?.color||p?.horizontal||p?.vertical||p?.blur||p?.spread||p?.position){const e=p?.color?p?.color:"#7a7a7a1a";u=`box-shadow: ${p?.horizontal?p?.horizontal:0}px ${p?.vertical?p?.vertical:0}px ${p?.blur?p?.blur:32}px ${p?.spread?p?.spread:0}px ${e} ${p?.position&&"inset"===p.position?"inset":""};`}return u&&(e+=`${n} .${de}-post-carousel-item-inner-wrapper { ${u} }`),u=((e,t,n="padding")=>{let o="";return o+=`${t}{\n\t\t${e?.desktop?.top?`${n}-top: ${e.desktop.top};`:""}\n\t\t${e?.desktop?.right?`${n}-right: ${e.desktop.right};`:""}\n\t\t${e?.desktop?.bottom?`${n}-bottom: ${e.desktop.bottom};`:""}\n\t\t${e?.desktop?.left?`${n}-left: ${e.desktop.left};`:""}\n\t}`,o+=`@media only screen and (max-width: 992px) {\n\t\t${t}{\n\n\t\t\t${e?.tablet?.top?`${n}-top: ${e.tablet.top};`:""}\n\t\t\t${e?.tablet?.right?`${n}-right: ${e.tablet.right};`:""}\n\t\t\t${e?.tablet?.bottom?`${n}-bottom: ${e.tablet.bottom};`:""}\n\t\t\t${e?.tablet?.left?`${n}-left: ${e.tablet.left};`:""}\n\t\t}\n\t}`,o+=`@media only screen and (max-width: 768px) {\n\t\t${t}{\n\n\t\t\t${e?.mobile?.top?`${n}-top: ${e.mobile.top};`:""}\n\t\t\t${e?.mobile?.right?`${n}-right: ${e.mobile.right};`:""}\n\t\t\t${e?.mobile?.bottom?`${n}-bottom: ${e.mobile.bottom};`:""}\n\t\t\t${e?.mobile?.left?`${n}-left: ${e.mobile.left};`:""}\n\t\t}\n\t}`,o})(a?.innerBlock?.contentPadding?a.innerBlock.contentPadding:{},`${n} .${de}-post-carousel-text-content`),u&&(e+=u),a?.innerBlock?.postTitleSize&&(n=`${n} .${de}-post-carousel-title`,u=`font-size: ${a.innerBlock.postTitleSize};`,e+=`${n} { ${u} }`),e}));const{hookPrefix:me}=X,{pluginMainSlug:ge}=z;function be(e){const{plugin_directory_url:t}=window[`_${E}_vars`],{post:n,setAttributes:a,attributes:l}=e,{postLink:i,excerptLength:s,displayFeaturedImage:d,displayPostDate:m,displayPostContent:b,displayPostLink:h,displayPostAuthor:_,displayPostCategories:v}=l,{link:y,title:f}=n,k=(0,g.__experimentalGetSettings)().formats.date;let x=n.excerpt.rendered;""===n.excerpt.raw&&(x=n.content.raw);const C=document.createElement("div");C.innerHTML=x,x=C.textContent||C.innerText||"";const $=n.featured_media_object?n.featured_media_object.source_url:null;return(0,o.createElement)("div",{className:`${ge}-post-carousel-item-inner-wrapper`},(0,o.createElement)("div",{className:`${ge}-post-carousel-thumb ${d?"":`${ge}-post-carousel-hide-thumb`} ${$?"":`${ge}-post-carousel-no-thumb`}`},(0,o.createElement)("a",{className:"image-hover-zoom",href:y,onClick:e=>e.preventDefault()},(0,o.createElement)("img",{src:$||`${t}/assets/images/placeholder-attachment.png`,alt:f.rendered}))),(0,o.createElement)("div",{className:`${ge}-post-carousel-text-content`},(0,o.createElement)("h3",{className:`${ge}-post-carousel-title`},(0,o.createElement)("a",{href:y,onClick:e=>e.preventDefault(),rel:"bookmark"},(0,o.createElement)(u.RawHTML,{key:"html"},f.rendered))),(0,o.createElement)("div",{className:`${ge}-post-carousel-meta`},m&&n.date_gmt&&(0,o.createElement)("span",{className:"posted-on"},(0,o.createElement)("time",{dateTime:(0,g.format)("c",n.date_gmt),className:`entry-date ${ge}-posts-date`},(0,g.dateI18n)(k,n.date_gmt))),!(0,c.isEmpty)(n.authorInfo)&&_&&(0,o.createElement)("span",{className:"byline"},(0,o.createElement)("a",{href:y,onClick:e=>e.preventDefault(),rel:"author"},n.authorInfo.name)),!(0,c.isEmpty)(n.categories)&&v&&(0,o.createElement)("span",{className:"cat-links"},(0,o.createElement)(o.Fragment,null,n.categories.map((e=>(0,o.createElement)("a",{href:y,onClick:e=>e.preventDefault(),rel:"category tag",key:e.id},e.name)))))),b&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"entry-summary"},(0,o.createElement)(u.RawHTML,{key:"html"},s<x.trim().split(" ").length?x.trim().split(" ",s).join(" ")+"…":x.trim().split(" ",s).join(" ")),h&&(0,o.createElement)(p.RichText,{tagName:"a",className:`wp-block-${ge}-posts__more-link`,onChange:e=>a({postLink:e}),value:i,placeholder:(0,r.__)("Read more","gutenify"),multiline:!1,withoutInteractiveFormatting:!1,isSelected:!1})))))}const he=(0,d.compose)([(0,m.withSelect)(((e,t)=>{const{query:n}=t.attributes,{getEntityRecords:o,getMedia:r,getUser:l}=e(b.store),{getCurrentPost:i}=e("core/editor"),s=a.QueryControls.toString().includes("selectedCategories"),u=i(),p={...n};return{latestPosts:s?(()=>{const t={categories:p.selectedCategories&&p.selectedCategories.length>0?p.selectedCategories.map((e=>e.id)):[],order:p.order,orderby:p.orderBy,per_page:p.numberOfItems,exclude:u.id};p?.tax?.post_tag&&(t.tags=p.tax.post_tag),p?.tax?.category&&(t.categories=[...t.categories,...p.tax.category]),p?.authorIds&&(t.author=p.authorIds);const n=(0,c.pickBy)(t,(e=>!(0,c.isArray)(e)&&!(0,c.isUndefined)(e)||!!((0,c.isArray)(e)&&e.length>0))),a=p?.postTypes?p.postTypes[0]:"post",i=o("postType",a,n);return!(0,c.isEmpty)(i)&&i.map((t=>{if(t.featured_media){const n=r(t.featured_media);let o=(0,c.get)(n,["media_details","sizes","source_url"],null);o||(o=(0,c.get)(n,"source_url",null)),t={...t,featured_media_object:t.featured_media&&e("core").getMedia(t.featured_media)}}if(!(0,c.isEmpty)(t.categories)){const e={per_page:-1,context:"view",include:t.categories},n=o("taxonomy","category",e);t={...t,categories:n}}if(t.author){const e=l(t.author,{context:"view"});t={...t,authorInfo:e}}return t}))})():[],useUpdatedQueryControls:s}})),(0,m.withDispatch)(((e,t)=>{const{selectBlock:n}=e("core/block-editor");return{selectBlock:()=>{n(t.clientId)}}}))])((e=>{const{attributes:t,latestPosts:n}=e,{columns:a,hasPagination:l,hasNavigation:i,spaceBetween:c,layout:d,blockClientId:m}=t,g=(0,u.useRef)(),[b,_]=(0,u.useState)(null),v=()=>{const{ownerDocument:e}=g.current,t={allowTouchMove:!1,slidesPerView:a,pagination:{el:e.querySelector(`.${ge}-section-${m} .swiper-pagination`),clickable:!0},navigation:{nextEl:e.querySelector(`.${ge}-section-${m} .swiper-button-next`),prevEl:e.querySelector(`.${ge}-section-${m} .swiper-button-prev`)},scrollbar:{el:e.querySelector(`.${ge}-section-${m} .swiper-scrollbar`)},spaceBetween:c};return new Swiper(e.querySelector(`.${ge}-section-${m}`),t)};(0,u.useEffect)((()=>{const e=v();_(e)}),[a,c,l,i]),(0,u.useEffect)((()=>{if(null!=b){b.destroy(!0,!0);const e=v();_(e)}}),[a,c,l,i,n]);let y=[`gutenify-post-carousel-${d}`,`${D.UU.replace(/\//gm,"-")}-version-${D.rE}`,`gutenify--${me}--has-post`,"swiper-container"];const f=Array.isArray(n)&&n.length;y=s()((0,h.applyFilters)(`gutenify--${me}--wrapper-class`,y,e));const k=(0,p.useBlockProps)({className:y,ref:g});return(0,o.createElement)("div",{...k},!f&&(0,o.createElement)(o.Fragment,null,(0,r.__)("No posts found.")),f&&(0,o.createElement)("div",{className:"swiper-wrapper"},n.map((t=>(0,o.createElement)("div",{className:"gutenify-post-carousel-item gutenify-post-carousel-item-wrapper swiper-slide",key:t.id||t.link},(0,o.createElement)(be,{post:t,...e}))))),l&&(0,o.createElement)("div",{className:"swiper-pagination"}),i&&(0,o.createElement)("div",{className:"navigation-wrap"},(0,o.createElement)("div",{className:"swiper-button-prev"}),(0,o.createElement)("div",{className:"swiper-button-next"})))})),{postCarousel:_e}=window?.[`_${E}_vars`]?.components?.Icons,{UU:ve,uK:ye}=D,fe={title:(0,r.__)("Post Carousel"),description:(0,r.__)("Gutenify Post Carousel."),icon:(0,o.createElement)(a.Icon,{icon:_e}),keywords:["gutenify",(0,r.__)("Post Carousel"),(0,r.__)("Posts"),(0,r.__)("Post"),(0,r.__)("Slider")],example:{attributes:{}},attributes:ye,edit:he,save:()=>{},supports:{html:!1,align:["center","wide","full"]}};(0,l.registerBlockType)(ve,{...fe})},1549:(e,t,n)=>{var o=n(2032),r=n(3862),a=n(6721),l=n(2749),i=n(5749);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=a,s.prototype.has=l,s.prototype.set=i,e.exports=s},79:(e,t,n)=>{var o=n(3702),r=n(80),a=n(4739),l=n(8655),i=n(1175);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=a,s.prototype.has=l,s.prototype.set=i,e.exports=s},8223:(e,t,n)=>{var o=n(6110)(n(9325),"Map");e.exports=o},3661:(e,t,n)=>{var o=n(3040),r=n(7670),a=n(289),l=n(4509),i=n(2949);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=a,s.prototype.has=l,s.prototype.set=i,e.exports=s},1873:(e,t,n)=>{var o=n(9325).Symbol;e.exports=o},4932:e=>{e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},6025:(e,t,n)=>{var o=n(5288);e.exports=function(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}},2552:(e,t,n)=>{var o=n(1873),r=n(659),a=n(9350),l=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):a(e)}},426:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},7534:(e,t,n)=>{var o=n(2552),r=n(346);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},5083:(e,t,n)=>{var o=n(1882),r=n(7296),a=n(3805),l=n(7473),i=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,u=s.toString,p=c.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||r(e))&&(o(e)?d:i).test(l(e))}},7556:(e,t,n)=>{var o=n(1873),r=n(4932),a=n(6449),l=n(4394),i=o?o.prototype:void 0,s=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},1769:(e,t,n)=>{var o=n(6449),r=n(8586),a=n(1802),l=n(3222);e.exports=function(e,t){return o(e)?e:r(e,t)?[e]:a(l(e))}},5481:(e,t,n)=>{var o=n(9325)["__core-js_shared__"];e.exports=o},4840:(e,t,n)=>{var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},2651:(e,t,n)=>{var o=n(4218);e.exports=function(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}},6110:(e,t,n)=>{var o=n(5083),r=n(392);e.exports=function(e,t){var n=r(e,t);return o(n)?n:void 0}},659:(e,t,n)=>{var o=n(1873),r=Object.prototype,a=r.hasOwnProperty,l=r.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[i]=n:delete e[i]),r}},392:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},9326:(e,t,n)=>{var o=n(1769),r=n(2428),a=n(6449),l=n(361),i=n(294),s=n(7797);e.exports=function(e,t,n){for(var c=-1,u=(t=o(t,e)).length,p=!1;++c<u;){var d=s(t[c]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++c!=u?p:!!(u=null==e?0:e.length)&&i(u)&&l(d,u)&&(a(e)||r(e))}},2032:(e,t,n)=>{var o=n(1042);e.exports=function(){this.__data__=o?o(null):{},this.size=0}},3862:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},6721:(e,t,n)=>{var o=n(1042),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(o){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return r.call(t,e)?t[e]:void 0}},2749:(e,t,n)=>{var o=n(1042),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return o?void 0!==t[e]:r.call(t,e)}},5749:(e,t,n)=>{var o=n(1042);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?"__lodash_hash_undefined__":t,this}},361:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var o=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==o||"symbol"!=o&&t.test(e))&&e>-1&&e%1==0&&e<n}},8586:(e,t,n)=>{var o=n(6449),r=n(4394),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;e.exports=function(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!r(e))||l.test(e)||!a.test(e)||null!=t&&e in Object(t)}},4218:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},7296:(e,t,n)=>{var o,r=n(5481),a=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";e.exports=function(e){return!!a&&a in e}},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},80:(e,t,n)=>{var o=n(6025),r=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=o(t,e);return!(n<0||(n==t.length-1?t.pop():r.call(t,n,1),--this.size,0))}},4739:(e,t,n)=>{var o=n(6025);e.exports=function(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}},8655:(e,t,n)=>{var o=n(6025);e.exports=function(e){return o(this.__data__,e)>-1}},1175:(e,t,n)=>{var o=n(6025);e.exports=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}},3040:(e,t,n)=>{var o=n(1549),r=n(79),a=n(8223);e.exports=function(){this.size=0,this.__data__={hash:new o,map:new(a||r),string:new o}}},7670:(e,t,n)=>{var o=n(2651);e.exports=function(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}},289:(e,t,n)=>{var o=n(2651);e.exports=function(e){return o(this,e).get(e)}},4509:(e,t,n)=>{var o=n(2651);e.exports=function(e){return o(this,e).has(e)}},2949:(e,t,n)=>{var o=n(2651);e.exports=function(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}},2224:(e,t,n)=>{var o=n(104);e.exports=function(e){var t=o(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},1042:(e,t,n)=>{var o=n(6110)(Object,"create");e.exports=o},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,n)=>{var o=n(4840),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},1802:(e,t,n)=>{var o=n(2224),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,l=o((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,(function(e,n,o,r){t.push(o?r.replace(a,"$1"):n||e)})),t}));e.exports=l},7797:(e,t,n)=>{var o=n(4394);e.exports=function(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7473:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5288:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},1448:(e,t,n)=>{var o=n(426),r=n(9326);e.exports=function(e,t){return null!=e&&r(e,t,o)}},2428:(e,t,n)=>{var o=n(7534),r=n(346),a=Object.prototype,l=a.hasOwnProperty,i=a.propertyIsEnumerable,s=o(function(){return arguments}())?o:function(e){return r(e)&&l.call(e,"callee")&&!i.call(e,"callee")};e.exports=s},6449:e=>{var t=Array.isArray;e.exports=t},1882:(e,t,n)=>{var o=n(2552),r=n(3805);e.exports=function(e){if(!r(e))return!1;var t=o(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},294:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,n)=>{var o=n(2552),r=n(346);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},104:(e,t,n)=>{var o=n(3661);function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],a=n.cache;if(a.has(r))return a.get(r);var l=e.apply(this,o);return n.cache=a.set(r,l)||a,l};return n.cache=new(r.Cache||o),n}r.Cache=o,e.exports=r},3222:(e,t,n)=>{var o=n(7556);e.exports=function(e){return null==e?"":o(e)}},6942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={4569:0,1677:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,i,s]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var u=s(o)}for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1677],(()=>o(3314)));r=o.O(r)})();
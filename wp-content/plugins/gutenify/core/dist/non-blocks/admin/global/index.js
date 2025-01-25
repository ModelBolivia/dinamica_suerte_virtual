(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{getSettings:()=>s,getSiteOptions:()=>a,getTemplateData:()=>u});var n={};t.r(n),t.d(n,{apiFetch:()=>c,setSettings:()=>_,setSiteOptions:()=>p,updateSiteOptions:()=>l});var i={};t.r(i),t.d(i,{API_FETCH:()=>S});var o={};t.r(o),t.d(o,{getSettings:()=>f,getSiteOptions:()=>b});const r=window.wp.data;function s(t){return t.settings}function a(t){return t.site_options}function u(t,e){return t.templatesData[e]}function c(t){return{type:"API_FETCH",request:t}}function _(t){return{type:"SET_SETTINGS",settings:t}}function p(t){return{type:"SET_SITE_OPTIONS",site_options:{...t}}}function l(t){return{type:"UPDATE_SITE_OPTIONS",site_options:{...t}}}const g=window.wp.apiFetch;var d=t.n(g);function S({request:t}){return d()(t).then((t=>!!(t&&t.success&&t.response)&&t.response))}function*f(){return _(yield c({path:"/gutenify/v1/get_settings/"}))}function*b(){return p({settings:yield c({path:"/gutenify/v1/get_site_options/"}),coreSettings:{}})}const y=(0,r.createReduxStore)("gutenify/settings",{reducer:function(t={settings:!1,site_options:!1},e){switch(e.type){case"SET_SETTINGS":t.settings=e.settings;break;case"SET_SITE_OPTIONS":!t.site_options&&e.site_options&&(t.site_options={...e.site_options});break;case"UPDATE_SITE_OPTIONS":e.site_options&&(t.site_options={...e.site_options})}return{...t}},selectors:e,actions:n,controls:i,resolvers:o});(0,r.register)(y);const T=window.jQuery;var m=t.n(T);const $=window.wp.i18n,v="gutenify",w=window?.[`_${v}_vars`]?window[`_${v}_vars`]:{},{is_pro_activated:O,pro_account_url:E,pro_license_status:h,title:P,prefix:I,slug:k,authorWebSite:j,authorDemoWebSite:N,authorWebSiteProPage:D,defaultTheme:U,authorWebSiteSupport:W,plugin_directory_url:A,brand_color:F,plugin_main_version:q,documentationsURL:x,pro_title:C,active_blocks:M,plugin_main_camel_case_name:G}=w;w?.siteUrl?w.siteUrl:w.site_url,(0,$.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+D+'" target="_blank">',C,"</a>"),m()((function(){window.addEventListener("load",(()=>{[`${k}/faqs`,`${k}/content-toggle-item`,`${k}/buttons`,`${k}/button`,`${k}/info-box`,`${k}/map`,`${k}/service`,`${k}/star-rating`,`${k}/team-member`,`${k}/team`,`${k}/testimonial`,`${k}/testimonials`,`${k}/grid`,`${k}/grid-item`,`${k}/icon`].forEach((t=>{m()(`[data-type="${t}"]`).find(".block-editor-warning__action button").trigger("click")}))}))}))})();
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[64618],{513004:(e,a,l)=>{var n,i,r;l.r(a),l.d(a,{default:()=>s});let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetPinHiddenFeedbackText_pin",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"explicitlyFollowedByMe",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[r],storageKey:null},{alias:null,args:null,concreteType:"Interest",kind:"LinkedField",name:"sourceInterest",plural:!1,selections:[n,i,{alias:null,args:null,kind:"ScalarField",name:"urlName",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};t.hash="b63669be5b8d253a5df7b4d5c61f0037";let s=t},669408:(e,a,l)=>{var n,i,r,t;l.r(a),l.d(a,{default:()=>o});let s=(r={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetPinRecommendationDescription_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"adMatchReason",storageKey:null},i={alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"explicitlyFollowedByMe",storageKey:null},r,t],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[r,t],storageKey:null},{alias:null,args:null,concreteType:"Interest",kind:"LinkedField",name:"sourceInterest",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"urlName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PinRecommendationReason",kind:"LinkedField",name:"recommendationReason",plural:!1,selections:[i],storageKey:null}],type:"Pin",abstractKey:null});s.hash="00f2295c5efdc68960c49b10df38c74e";let o=s},2161:(e,a,l)=>{l.r(a),l.d(a,{default:()=>i});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinGifOrImageSrc_pin",selections:[{alias:null,args:null,concreteType:"Embed",kind:"LinkedField",name:"embed",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="e4de3c30775bc66fe057a2692ac884eb";let i=n},373462:(e,a,l)=>{var n;l.r(a),l.d(a,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinImageUrls_pin",selections:[{alias:"imageSpec_60x60",args:[{kind:"Literal",name:"spec",value:"60x60"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"60x60")'},{alias:"imageSpec_136x136",args:[{kind:"Literal",name:"spec",value:"136x136"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"136x136")'},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_600x315",args:[{kind:"Literal",name:"spec",value:"600x315"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"600x315")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'}],type:"Pin",abstractKey:null};i.hash="b7ea441f2c20a68b323088ebe3847835";let r=i},26473:(e,a,l)=>{l.d(a,{Z:()=>n});function n({embedSrc:e,embedType:a,imagesUrls:l,preferredResolution:n,excludeOriginals:i}){if(!e&&!a&&!l)return"";if("gif"===a)return e||"";if(!l)return"";if(n){let e="474x"===n&&l["474x"]||"236x"===n&&l["236x"]||l["736x"];if(e)return e}let r=Object.keys(l).reduce((e,a)=>{try{let n=a.split("x")[0];if(Number.isNaN(Number(n)))return{...e,[a]:l[a]};return{...e,[n]:l[a]}}catch(a){return e}},{}),t=Object.keys(r);return i&&"orig"===t[t.length-1]&&t.pop(),r[t.pop()]||""}},973612:(e,a,l)=>{l.d(a,{Z:()=>r});var n=l(786890);let i=e=>(e||"").trim().replace(/\s+/g," "),r=({storyPinDataId:e,pinDescription:a,richMetadataDescription:l,richSummaryDisplayName:r,closeupDescription:t,closeupUnifiedDescription:s,seoDescription:o,seoNoindexReason:d})=>d&&n.eg.has(d)?i(o):e?i(a):i((0,n.eK)({richMetadataDescription:l,richSummaryDisplayName:r,closeupUnifiedDescription:s}).description)||i(s||"")||i(t)||i(a)||i(l)||""},786890:(e,a,l)=>{l.d(a,{eg:()=>t,kt:()=>_,rw:()=>p,fs:()=>c,eK:()=>u,Ly:()=>m,BY:()=>g,bN:()=>y,RC:()=>o,EU:()=>d});let n=/\s\s+/g,i=e=>e.replace(n," ");var r=l(715824);let t=Object.freeze(new Set(["sensitive_raw_pin_text","is_sensitive_rich_pin_description","is_sensitive_rich_pin_title","is_sensitive_board_title"])),s=e=>"string"==typeof e?e:"",o=({storyPinDataMetadataPinTitle:e,pinTitle:a})=>e||a,d=(e,a)=>e?e.trim().length>a?(0,r.ZP)(e.trim(),a).trim():e.trim():"",c=({pinTitle:e,gridTitle:a,richSummaryDisplayName:l,richMetadataTitle:n,storyPinDataId:i,storyPinDataMetadataPinTitle:r})=>{let t=r||e,s=d(a,200);return s||l||n||(i&&t?t:null)},u=e=>{let{richSummaryDisplayName:a}=e,l=e.pinJoinVisualAnnotation||[],n=e.pinJoinAnnotationsWithLinks||{},t=e.richMetadataDescription||"",s=e.closeupUnifiedDescription||"",o=l.map(e=>(n||{})[e]||{name:e,url:""}),d="",c=(a||"").toLocaleLowerCase().trim(),u=t.toLocaleLowerCase().trim(),m=s.toLocaleLowerCase().trim();return s&&s.length>3&&m!==c?d=s:t&&t.length>3&&u!==c&&(d=t),d&&(d=i((0,r.ZP)(d,496)).trim()),{description:d,annotationsWithLinks:o}},m=({pinTitle:e,gridTitle:a,richSummaryDisplayName:l,richMetadataTitle:n,storyPinDataId:i,storyPinDataMetadataPinTitle:r,pinJoinVisualAnnotation:s,seoNoindexReason:o,seoTitle:d})=>t.has(o??"")?d:c({pinTitle:e,gridTitle:a,richSummaryDisplayName:l,richMetadataTitle:n,storyPinDataId:i,storyPinDataMetadataPinTitle:r})||s?.[0]||e,p=(e,a,l,n,i)=>{let r=s(e).trim(),t=(e,a)=>a&&a.length>0?`${e} ${a.join(", ")}`:e;return n&&n.trim().length?t(n.trim(),l):i&&i.trim().length?i.trim():r?t(r,l):l?l.join(", "):""},g=e=>`/pin/${e}/`,_=(e,a)=>{let l=`Pinterest video from ${a}: `.concat(e);return""===a?e:l},y=({pinId:e,seoUrl:a})=>a&&"string"==typeof a?a:g(e)},356959:(e,a,l)=>{l.d(a,{Z:()=>c}),l(167912);var n,i=l(616550),r=l(318717),t=l(144326),s=l(240760),o=l(915831);let d=void 0!==n?n:n=l(513004);function c({feedbackType:e,getRecommendationDescription:a,isPromoted:l,pinKey:n}){let c=(0,r.Z)(d,n),u=(0,t.ZP)(),m=(0,i.TH)();return n=>{let i;if(l&&c&&c.promoter?.fullName)return{title:"",subTitle:(0,s.nk)(u._('{{ promoter }} has paid to have this pin show up where you\'d be more likely to notice it.', 'pinRep.promotedPinfeedbackText.subtitle', 'message displayed after hiding a promoted pin'),{promoter:c.promoter.fullName})};let r=m.pathname.includes("following");switch(e){case"followed":c&&c.board?.entityId&&c.pinner&&!r&&(i=(0,o.oK)({boardId:c.board.entityId,i18n:u,makeNavigateLink:n,display:c.pinner.explicitlyFollowedByMe?{type:"board",data:{name:c.board.name,url:c.board.url}}:{type:"pinner",data:{full_name:c.pinner.fullName,username:c.pinner.username}}}));break;case"topic":c?.sourceInterest&&!r&&(i=(0,o.Iv)({i18n:u,makeNavigateLink:n,sourceInterest:{id:c.sourceInterest.entityId,name:c.sourceInterest.name,url_name:c.sourceInterest.urlName}}))}return i?{title:u._('Pin hidden', 'message displayed after hiding a pin', 'message displayed after hiding a pin'),subTitle:a(n),unfollow:i}:{title:u._('Pin hidden', 'message displayed after hiding a pin', 'message displayed after hiding a pin'),subTitle:u._('Got it! We\'ll try to show you more relevant Pins in the future.', 'message displayed after hiding a pin', 'message displayed after hiding a pin')}}}},360847:(e,a,l)=>{l.d(a,{Z:()=>c}),l(167912);var n,i=l(318717),r=l(144326),t=l(240760);let s=void 0!==n?n:n=l(669408),o=e=>e.length>32?`${e.substring(0,32).trim()}...`:e;function d({feedback:e,i18n:a,makeNavigateLink:l}){switch(e.type){case"pfy":return a._('This Pin was inspired by your recent activity', 'Pin feedback reason', 'Pin feedback reason');case"pfyBoard":let{recommendationReasonBoard:n}=e;return n?(0,t.nk)(a._('This Pin was inspired by your board {{ boardLink }}', 'Pin feedback - inspired by your board', 'Pin feedback - inspired by your board'),{boardLink:l("navigation",n.url,n.name)}):null;case"topic":let{sourceInterest:i}=e;return i?(0,t.nk)(a._('This Pin was inspired by {{ formattedTopic }}', 'Pin feedback', 'Pin feedback'),{formattedTopic:l("topicUrl",`/topics/${i.url_name}`,i.name)}):null;case"followed":let{followed:r}=e;return"pinner"===r.type?(0,t.nk)(a._('This Pin is from {{ formattedPinner }}, a profile you follow', 'Pin feedback', 'Pin feedback'),{formattedPinner:l("pinnerUrl",`/${r.pinner?.username??""}`,o(r.pinner?.full_name??""))}):(0,t.nk)(a._('This Pin is from {{ formattedBoard }}, a board you follow', 'Pin feedback', 'Pin feedback'),{formattedBoard:l("boardUrl",r.board?.url??"",o(r.board?.name??""))});case"promoted":let{promotedIsPersonalized:s,isEligibleForPromotedPartnership:d,promotedPartnershipAttributionName:c,promotedPartnershipAdvertiserName:u}=e.thirdPartyAdAttributes||{};if(!s&&d)return(0,t.nk)(a._('{{ promotedPartnershipAdvertiserName }} paid, through a partnership with {{ promotedPartnershipAttributionName }}, to have this Pin show up where you\'d be more likely to notice it', 'feedbackHelpers.getRecommendationDescription.promoted.thirdParty', 'Recommendation description for ads with promoted partnership. promotedPartnershipAdvertiserName:Name of advertiser, promotedPartnershipAttributionName:Name of promoted partner'),{promotedPartnershipAdvertiserName:u,promotedPartnershipAttributionName:c});if(!e.promoter||s)return a._('This ad was personalized for you using info from one of our partners', 'Pin feedback', 'Pin feedback');{let{full_name:n,username:i}=e.promoter,r=l("promotedLink",i?"/"+i+"/":"/",n);return(0,t.nk)(a._('{{ promoterLink }} paid to have this Pin show up where you\u2019d be more likely to notice it', 'Pin feedback', 'Pin feedback'),{promoterLink:r})}default:return null}}function c({feedbackType:e,pinKey:a}){let l=(0,r.ZP)(),n=(0,i.Z)(s,a);return a=>n?function({adMatchReason:e,board:a,feedbackType:l,i18n:n,makeNavigateLink:i,pinner:r,promoter:t,recommendationReason:s,sourceInterest:o,thirdPartyAdAttributes:c}){let u={i18n:n,makeNavigateLink:i};switch(l){case"pfy":return d({...u,feedback:{type:"pfy"}});case"pfyBoard":return d({...u,feedback:{type:"pfyBoard",recommendationReasonBoard:s?.board&&{name:s.board.name??"",url:s.board.url??""}}});case"topic":return d({...u,feedback:{type:"topic",sourceInterest:o&&o.name&&o.urlName?{name:o.name,url_name:o.urlName}:null}});case"followed":return d({...u,feedback:{type:"followed",followed:r?.explicitlyFollowedByMe?{type:"pinner",pinner:r.fullName?{full_name:r.fullName,username:r.username??""}:null}:{type:"board",board:a&&a.name&&a.url?{name:a.name,url:a.url}:null}}});case"promoted":return d({...u,feedback:{type:"promoted",promoter:!e&&t?.fullName?{full_name:t.fullName,username:t.username}:null,thirdPartyAdAttributes:c}});default:return null}}({adMatchReason:n.adMatchReason,board:n.board,feedbackType:e,i18n:l,makeNavigateLink:a,pinner:n.pinner,promoter:n.promoter,recommendationReason:n.recommendationReason,sourceInterest:n.sourceInterest}):null}},272911:(e,a,l)=>{l.d(a,{Z:()=>o}),l(167912);var n,i=l(318717),r=l(26473),t=l(730212);let s=void 0!==n?n:n=l(2161);function o(e,a,l){let n=(0,i.Z)(s,e),{isBot:o,isSocialBot:d}=(0,t.B)();return(0,r.Z)({embedSrc:n.embed?.src,embedType:n.embed?.type,imagesUrls:a,preferredResolution:l??"736x",excludeOriginals:!o&&!d})}},593078:(e,a,l)=>{l.d(a,{Z:()=>t}),l(167912);var n,i=l(318717);let r=void 0!==n?n:n=l(373462),t=e=>{let a=(0,i.Z)(r,e);return[["60x60",a?.imageSpec_60x60],["136x136",a?.imageSpec_136x136],["170x",a?.imageSpec_170x],["236x",a?.imageSpec_236x],["474x",a?.imageSpec_474x],["564x",a?.imageSpec_564x],["736x",a?.imageSpec_736x],["600x315",a?.imageSpec_600x315],["orig",a?.imageSpec_orig]].reduce((e,[a,l])=>l?{...e,[a]:l.url}:e,{})}},293321:(e,a,l)=>{l.d(a,{kf:()=>y,l5:()=>g,of:()=>m,xC:()=>_,yz:()=>p});var n=l(667294),i=l(498490),r=l(915571),t=l(969119),s=l(346645),o=l(415787),d=l(785893);let{Provider:c,useMaybeHook:u}=(0,i.Z)("PwaContext"),m=({children:e,initialContext:a})=>{let[l,i]=(0,n.useState)(null),s=a||{pwaType:"unknown",twaType:null},u=s.pwaType;(0,t.Z)(()=>{let e=(0,r.FB)(window)||"unknown";i(e),u!==e&&(0,o.nP)("pwa.type_mismatch",{sampleRate:1,tags:{serverPwaType:u,clientPwaType:e,conflict:"unknown"!==u&&"unknown"!==e}})});let m="unknown"===u&&l?l:u,{twaType:p}=s,g=(0,n.useMemo)(()=>({pwaType:m,twaType:p}),[m,p]);return(0,d.jsx)(c,{value:g,children:e})},p=()=>{let e=u();return e?.pwaType??"unknown"},g=()=>{let e=u();return e?.twaType??null},_=()=>"android-twa"===p(),y=()=>{let e=p(),a=(0,s.Z)();return"unknown"===e&&a?null:"windows"===e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/PinRepOverflowMenuButtonCommon-c1762781bd786b11.mjs.map
(function(){"use strict";var e={7177:function(e,t,i){var n=i(9242),s=i(3396),a=i(4870),c=i(7139);const r={class:"base-checkbox"},o={class:"text"};var l={props:{val:Object,selected:Array},emits:["updateSelected"],setup(e,{emit:t}){const i=e;function n(){t("updateSelected",i.val.id)}return(t,i)=>{const a=(0,s.up)("v-checkbox");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("label",o,(0,c.zw)(e.val.title),1),(0,s.Wm)(a,{class:"checkbox","model-value":e.selected,value:e.val.id,onClick:n},null,8,["model-value","value"])])}}},u=i(89);const d=(0,u.Z)(l,[["__scopeId","data-v-76f34661"]]);var p=d,g={props:{range:Object,selected:Array},emits:["updateSelectedRange"],setup(e,{emit:t}){function i(e){t("updateSelectedRange",e)}return(t,n)=>{const a=(0,s.up)("v-range-slider");return(0,s.wg)(),(0,s.j4)(a,{class:"base-slider",color:"#82786A","thumb-size":"12px","thumb-label":"always","track-size":"2px",min:e.range.min,max:e.range.max,"model-value":e.selected,"onUpdate:modelValue":i,step:"5"},null,8,["min","max","model-value"])}}};const h=g;var m=h;const f=e=>((0,s.dD)("data-v-65fee46a"),e=e(),(0,s.Cn)(),e),w=f((()=>(0,s._)("h3",null,"Filter",-1))),v=(0,s.Uk)(" mdi-close ");var y={emits:["closeModal"],setup(e,{emit:t}){function i(){t("closeModal")}return(e,t)=>{const n=(0,s.up)("v-col"),a=(0,s.up)("v-icon"),c=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(c,{class:"modal-header"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{cols:"10",style:{"font-family":"'Gilroy ExtraBold'","font-size":"24px"}},{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(n,{class:"close-btn",cols:"2"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{color:"rgba(130, 120, 106, 1)",style:{cursor:"pointer"},onClick:i},{default:(0,s.w5)((()=>[v])),_:1})])),_:1})])),_:1})}}};const _=(0,u.Z)(y,[["__scopeId","data-v-65fee46a"]]);var S=_,b={props:{isDark:Boolean},setup(e){return(t,i)=>{const n=(0,s.up)("v-btn");return(0,s.wg)(),(0,s.j4)(n,{class:(0,c.C_)({dark:e.isDark,light:!e.isDark}),variant:"outlined"},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default")])),_:3},8,["class"])}}};const C=(0,u.Z)(b,[["__scopeId","data-v-17a4b078"]]);var R=C;const k=(0,s.Uk)(" CLEAR "),x=(0,s.Uk)(" SHOW RECIPES ");var I={props:{showClearBtn:{type:Boolean,default:!1}},emits:["clearParams","showRecipes"],setup(e,{emit:t}){function i(){t("clearParams")}function c(){t("showRecipes")}return(t,r)=>{const o=(0,s.up)("v-col"),l=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(l,{class:"modal-buttons"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"clear-btn"},{default:(0,s.w5)((()=>[(0,s.Wm)(n.uT,{name:"clear-btn-transition"},{default:(0,s.w5)((()=>[e.showClearBtn?((0,s.wg)(),(0,s.j4)((0,a.SU)(R),{key:0,"is-dark":!1,onClick:i},{default:(0,s.w5)((()=>[k])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1}),(0,s.Wm)(o,{class:"show-btn"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(R),{"is-dark":!0,onClick:c},{default:(0,s.w5)((()=>[x])),_:1})])),_:1})])),_:1})}}};const j=(0,u.Z)(I,[["__scopeId","data-v-0c982d81"]]);var U=j,W={props:{warning:String},setup(e){return(t,i)=>{const n=(0,s.up)("v-col"),a=(0,s.up)("v-progress-circular"),r=(0,s.up)("v-row"),o=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(o,{style:{height:"400px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"fill-height","align-content":"center",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{class:"text-subtitle-1 text-center",cols:"12"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.warning),1)])),_:1}),(0,s.Wm)(n,{cols:"6",style:{display:"flex","justify-content":"center"}},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{indeterminate:"",color:"green"})])),_:1})])),_:1})])),_:1})}}};const M=W;var D=M;const V={min:0,max:Number.MAX_VALUE};class F{static collectionToString(e){return JSON.stringify(e)}static stringToCollection(e){return JSON.parse(e)}}class A{constructor(){localStorage.setItem("searchLine",""),localStorage.setItem("caloricityDefault",F.collectionToString(V)),localStorage.setItem("caloricityChosen",F.collectionToString(V)),localStorage.setItem("cuisinesIncludedDefault",F.collectionToString([])),localStorage.setItem("cuisinesIncludedChosen",F.collectionToString([]))}setSearchLine(e){localStorage.setItem("searchLine",e)}getSearchLine(){return localStorage.getItem("searchLine")}setCaloricity(e){localStorage.setItem("caloricityDefault",F.collectionToString(e)),localStorage.setItem("caloricityChosen",F.collectionToString(e))}setCaloricityChosen(e){localStorage.setItem("caloricityChosen",F.collectionToString(e))}getCaloricityDefault(){return F.stringToCollection(localStorage.getItem("caloricityDefault"))}getCaloricityChosen(){return F.stringToCollection(localStorage.getItem("caloricityChosen"))}setCuisines(e){localStorage.setItem("cuisinesIncludedDefault",F.collectionToString(e)),localStorage.setItem("cuisinesIncludedChosen",F.collectionToString(e))}setCuisinesChosen(e){localStorage.setItem("cuisinesIncludedChosen",F.collectionToString(e))}getCuisinesIncludedDefault(){return F.stringToCollection(localStorage.getItem("cuisinesIncludedDefault"))}getCuisinesIncludedChosen(){return F.stringToCollection(localStorage.getItem("cuisinesIncludedChosen"))}setParamsToDefault(){localStorage.setItem("caloricityChosen",localStorage.getItem("caloricityDefault")),localStorage.setItem("cuisinesIncludedChosen",localStorage.getItem("cuisinesIncludedDefault"))}}const T=new A,O=e=>((0,s.dD)("data-v-6aab98d2"),e=e(),(0,s.Cn)(),e),B={key:1},H=O((()=>(0,s._)("div",null,"Calories, kCal",-1)));var P={props:{isLoaded:{type:Boolean,default:!1},cuisines:Array,selectedCuisines:Array,caloricityRange:Array,chosenCaloricity:Array,showClearBtn:Boolean},emits:["closeModal","clearParams","showRecipes","updateSelected","updateSelectedRange"],setup(e,{emit:t}){function i(){t("closeModal")}function c(){t("clearParams")}function r(){t("showRecipes")}function o(e){t("updateSelected",e)}function l(e){t("updateSelectedRange",e)}return(t,u)=>{const d=(0,s.up)("v-row"),g=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(g,{class:"container",onClick:(0,n.iM)(i,["self"]),fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"modal"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(S),{onCloseModal:i}),e.isLoaded?((0,s.wg)(),(0,s.iD)("div",B,[(0,s.Wm)(d,{class:"justify-center"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cuisines,(t=>((0,s.wg)(),(0,s.j4)((0,a.SU)(p),{key:t.id,val:t,selected:e.selectedCuisines,onUpdateSelected:o},null,8,["val","selected"])))),128))])),_:1}),(0,s.Wm)(d,{class:"modal-slider"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(m),{style:{height:"32px"},range:(0,a.SU)(T).getCaloricityDefault(),selected:e.chosenCaloricity,onUpdateSelectedRange:l},null,8,["range","selected"]),H])),_:1}),(0,s.Wm)((0,a.SU)(U),{"show-clear-btn":e.showClearBtn,onClearParams:c,onShowRecipes:r},null,8,["show-clear-btn"])])):((0,s.wg)(),(0,s.j4)((0,a.SU)(D),{key:0}))])),_:1})])),_:1},8,["onClick"])}}};const Z=(0,u.Z)(P,[["__scopeId","data-v-6aab98d2"]]);var E=Z,L=i(65),z=i(2483),N=i(2482);class ${constructor(e){this._store=e}async fetchRecipes(){await this._store.dispatch("fetchRecipes")}setRecipes(e){this._store.dispatch("setRecipes",e)}setSearchLine(e){this._store.dispatch("setSearchLine",e)}setCuisines(e){this._store.dispatch("setCuisines",e)}setCuisinesIncluded(e){this._store.dispatch("setCuisinesIncluded",e)}setMaxAndMinCaloricity(e){this._store.dispatch("setMaxAndMinCaloricity",e)}setMaxAndMinCaloricityChosen(e){this._store.dispatch("setMaxAndMinCaloricityChosen",e)}setFilterParamsToDefault(){this._store.dispatch("setFilterParamsToDefault")}}class q{constructor(e){this._store=e}async fetchRecipe(e){try{await this._store.dispatch("fetchRecipe",e)}catch{throw Error}}setRecipe(e){this._store.dispatch("setRecipe",e)}clearRecipe(){this._store.dispatch("clearRecipe")}}class K{constructor(e){this._store=e}switchIsShownModal(){this._store.dispatch("switchIsShownModal")}changeIsAnyFilter(e){this._store.dispatch("changeIsAnyFilter",e)}}var Y={recipes:[],filteredRecipes:[]},G={getRecipes(e){const t=new RegExp("^"+T.getSearchLine(),"i"),i=e=>T.getCuisinesIncludedChosen().includes(e);return e.recipes.filter((e=>t.test(e.title)&&e.caloricity>=T.getCaloricityChosen().min&&e.caloricity<=T.getCaloricityChosen().max&&i(e.cuisine.id)))},getCuisines(e){const t=e.recipes.map((e=>e.cuisine));let i=t.reduce(((e,t)=>-1===e.indexOf(t.id)?[...e,t.id]:e),[]);return t.filter((e=>{const t=i.indexOf(e.id);return-1!==t&&(i=i.splice(0,t).concat(i.splice(t+1)),!0)}))},getCuisinesId(e,t){return t.getCuisines.map((e=>e.id))},getCaloricityRange(e){const t=e.recipes.map((e=>e.caloricity));return{min:Math.min(...t),max:Math.max(...t)}}},J=i(6265),X=i.n(J);const Q="https://test.kode-t.ru/list.json",ee="https://test.kode-t.ru/detail_",te=async()=>await X().get(Q);var ie={async fetchRecipes(e){try{const t=await te();fe.getRecipesViewModal().setRecipes(t.data),T.setCuisines(e.getters.getCuisinesId),T.setCaloricity(e.getters.getCaloricityRange)}catch(t){console.log(t)}},setRecipes({commit:e},t){e("setRecipes",t)},setSearchLine(e,t){T.setSearchLine(t),e.commit("setFilteredRecipes",e.getters.getRecipes)},setCuisines(e,t){T.setCuisines(t),e.commit("setFilteredRecipes",e.getters.getRecipes)},setCuisinesIncluded(e,t){T.setCuisinesChosen(t),e.commit("setFilteredRecipes",e.getters.getRecipes)},setMaxAndMinCaloricity(e,t){T.setCaloricity(t),e.commit("setFilteredRecipes",e.getters.getRecipes)},setMaxAndMinCaloricityChosen(e,t){T.setCaloricityChosen(t),e.commit("setFilteredRecipes",e.getters.getRecipes)},setFilterParamsToDefault(e){T.setParamsToDefault(),e.commit("setFilteredRecipes",e.getters.getRecipes)}},ne={setRecipes(e,t){e.recipes=t.recipes,e.filteredRecipes=e.recipes},setFilteredRecipes(e,t){e.filteredRecipes=t}},se={state:Y,getters:G,actions:ie,mutations:ne},ae={recipe:null};const ce=async e=>await X().get(ee+`${e}.json`);var re={async fetchRecipe(e,t){try{const e=await ce(t);fe.getRecipeViewModal().setRecipe(e.data)}catch{throw Error}},setRecipe({commit:e},t){e("setRecipe",t)},clearRecipe({commit:e}){e("clearRecipe")}},oe={setRecipe(e,t){e.recipe=t.recipe},clearRecipe(e){e.recipe=null}},le={state:ae,actions:re,mutations:oe},ue={isShownModal:!1,isAnyFilter:!1},de={switchIsShownModal({commit:e}){e("switchIsShownModal")},changeIsAnyFilter({commit:e},t){e("changeIsAnyFilter",t)}},pe={switchIsShownModal(e){e.isShownModal=!e.isShownModal},changeIsAnyFilter(e,t){e.isAnyFilter=t}},ge={state:ue,actions:de,mutations:pe},he=(0,L.MT)({modules:{recipes:se,recipe:le,modal:ge}});class me{constructor(e){me._instance||(me._instance=this,this._recipesViewModal=new $(e),this._recipeViewModal=new q(e),this._modalViewModel=new K(e))}getRecipesViewModal(){return this._recipesViewModal}getRecipeViewModal(){return this._recipeViewModal}getModalViewModel(){return this._modalViewModel}}(0,N.Z)(me,"_instance",null);const fe=new me(he),we="/air-recipes/";function ve(e,t){return e.length===t.length&&e.filter((e=>-1!==t.indexOf(e))).length===t.length}var ye={setup(e){const t=(0,L.oR)();let i=(0,a.iH)(!1),n=(0,a.iH)([]),c=(0,a.iH)([]),r=(0,a.iH)([]);function o(){n.value=[...T.getCuisinesIncludedChosen()],c.value=[T.getCaloricityChosen().min,T.getCaloricityChosen().max],r.value=[...c.value]}function l(){fe.getModalViewModel().switchIsShownModal()}(0,s.bv)((async()=>{t.state.recipes.recipes.length||await fe.getRecipesViewModal().fetchRecipes(),i.value=!0,o()}));const u=(0,a.Fl)((()=>!(!n.value.length&&!t.state.modal.isAnyFilter)&&!(ve(n.value,T.getCuisinesIncludedDefault())&&r.value[0]===T.getCaloricityDefault().min&&r.value[1]===T.getCaloricityDefault().max)));function d(){fe.getModalViewModel().changeIsAnyFilter(!1),fe.getRecipesViewModal().setFilterParamsToDefault(),o(),l()}const p=(0,z.yj)(),g=(0,z.tv)();function h(){p.path!==we&&g.push(we),fe.getRecipesViewModal().setCuisinesIncluded(n.value),fe.getRecipesViewModal().setMaxAndMinCaloricityChosen({min:r.value[0],max:r.value[1]}),l()}function m(e){fe.getModalViewModel().changeIsAnyFilter(!0),n.value=-1===n.value.indexOf(e)?[...n.value,e]:n.value.filter((t=>t!==e))}function f(e){fe.getModalViewModel().changeIsAnyFilter(!0),r.value=[...e]}return(e,o)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(E),{"is-loaded":(0,a.SU)(i),cuisines:(0,a.SU)(t).getters.getCuisines,"selected-cuisines":(0,a.SU)(n),"caloricity-range":(0,a.SU)(c),"chosen-caloricity":(0,a.SU)(r),"show-clear-btn":(0,a.SU)(u),onCloseModal:l,onClearParams:d,onShowRecipes:h,onUpdateSelected:m,onUpdateSelectedRange:f},null,8,["is-loaded","cuisines","selected-cuisines","caloricity-range","chosen-caloricity","show-clear-btn"]))}};const _e=ye;var Se=_e;const be=(0,s.Uk)(" Air Recipes "),Ce={key:0,style:{width:"100%"},class:"description"};var Re={props:{height:Number},setup(e){return(t,i)=>{const n=(0,s.up)("router-link"),r=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(r,{style:{height:"104px",width:"331px"},class:(0,c.C_)(["base-header-title",{"base-header-title-rolled":e.height<=192}])},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{style:{height:"80px",width:"100%"},class:(0,c.C_)(["ma-0 justify-center",{"full-height":e.height<=192}])},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{to:(0,a.SU)(we),class:(0,c.C_)(["title",{"full-height title-rolled":e.height<=192}])},{default:(0,s.w5)((()=>[be])),_:1},8,["to","class"])])),_:1},8,["class"]),(0,s.Wm)(r,{class:"ma-0"},{default:(0,s.w5)((()=>[e.height>200?((0,s.wg)(),(0,s.iD)("span",Ce," Best Recipes for Best People ")):(0,s.kq)("",!0)])),_:1})])),_:1},8,["class"])}}};const ke=(0,u.Z)(Re,[["__scopeId","data-v-6294755b"]]);var xe=ke;const Ie=(0,s.Uk)("mdi-filter-variant");function je(e,t){const i=(0,s.up)("v-icon"),n=(0,s.up)("v-btn");return(0,s.wg)(),(0,s.j4)(n,{variant:"outlined",size:"large",color:"#DDDDDD",style:{"background-color":"white"},icon:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{color:"black"},{default:(0,s.w5)((()=>[Ie])),_:1})])),_:1})}const Ue={},We=(0,u.Z)(Ue,[["render",je]]);var Me=We,De={props:{modelValue:String},emits:["update:modelValue","clearButtonClicked"],setup(e,{emit:t}){const i=e,n=(0,a.iH)(!1);function r(){n.value=!n.value}function o(e){null!==e.data?t("update:modelValue",`${i.modelValue}${e.data}`):t("update:modelValue",i.modelValue.slice(0,i.modelValue.length-1))}function l(){t("update:modelValue",""),t("clearButtonClicked")}return(t,i)=>{const a=(0,s.up)("v-text-field"),u=(0,s.up)("v-responsive");return(0,s.wg)(),(0,s.j4)(u,{class:(0,c.C_)(["mx-auto rounded-pill border-sm mr-0",{"border-opacity-25":n.value}]),"max-width":"276","max-height":"56"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"base-input-text-field",value:e.modelValue,onInput:o,onFocus:r,onFocusout:r,placeholder:"Search",variant:"solo",clearable:"","onClick:clear":l,"prepend-inner-icon":"mdi-magnify"},null,8,["value"])])),_:1},8,["class"])}}};const Ve=De;var Fe=Ve,Ae={emits:["clickFilterButton","searchRecipes"],setup(e,{emit:t}){const i=(0,a.iH)("");function c(){t("clickFilterButton")}function r(){t("searchRecipes",i.value)}function o(){r()}return(e,t)=>{const l=(0,s.up)("v-col"),u=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(u,{class:"align-center text"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"v-col-md-8 v-col-sm-9"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Fe),{class:"input-container",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),onKeydown:(0,n.D2)(r,["enter"]),onClearButtonClicked:o},null,8,["modelValue","onKeydown"])])),_:1}),(0,s.Wm)(l,{class:"v-col-md-4 v-col-sm-3 filter-button-container"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Me),{onClick:c})])),_:1})])),_:1})}}};const Te=(0,u.Z)(Ae,[["__scopeId","data-v-513aa8c3"]]);var Oe=Te,Be={props:{height:Number},emits:["clickFilterButton","searchRecipes"],setup(e,{emit:t}){function i(){t("clickFilterButton")}function n(e){t("searchRecipes",e)}return(t,r)=>{const o=(0,s.up)("v-row"),l=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(l,{class:"pa-0",style:(0,c.j5)({height:e.height+"px"}),fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:(0,c.C_)(["base-header-content",{"base-header-content-rolled":e.height<=200,"base-header-content-full":e.height>200}])},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(xe),{height:e.height},null,8,["height"]),(0,s.Wm)((0,a.SU)(Oe),{class:"search-bar",height:e.height,onClickFilterButton:i,onSearchRecipes:n},null,8,["height"])])),_:1},8,["class"])])),_:1},8,["style"])}}};const He=(0,u.Z)(Be,[["__scopeId","data-v-1c93c314"]]);var Pe=He,Ze=i.p+"img/headerImage.dc948e7d.png";const Ee=["src"];var Le={setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)("img",{src:(0,a.SU)(Ze),class:"base-header-image"},null,8,Ee))}};const ze=(0,u.Z)(Le,[["__scopeId","data-v-f1ea8b86"]]);var Ne=ze,$e={props:{height:Number},emits:["clickFilterButton","searchRecipes"],setup(e,{emit:t}){function i(){t("clickFilterButton")}function r(e){t("searchRecipes",e)}return(t,o)=>{const l=(0,s.up)("v-col"),u=(0,s.up)("v-row"),d=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(d,{class:(0,c.C_)(["pa-0 position-fixed",{"base-header-shadow":e.height<600}]),style:(0,c.j5)([{"z-index":"2"},{height:e.height+"px"}]),fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"ma-0 position-relative"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{class:(0,c.C_)(["base-content-container",{"base-content-container-responsive":e.height>=200}])},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Pe),{height:e.height,onClickFilterButton:i,onSearchRecipes:r},null,8,["height"])])),_:1},8,["class"]),(0,s.wy)((0,s.Wm)(l,{class:"image-container",style:(0,c.j5)({height:e.height+"px"})},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Ne))])),_:1},8,["style"]),[[n.F8,e.height>200]])])),_:1})])),_:1},8,["class","style"])}}};const qe=(0,u.Z)($e,[["__scopeId","data-v-6bc0bb2d"]]);var Ke=qe,Ye={emits:["changeHeaderHeight","setScrollReaction","changeScrollVar"],setup(e,{emit:t}){const i=600;let n=(0,a.iH)(600),c=(0,a.iH)(!0);function r(){if(!c.value)return;let e=Math.floor(window.pageYOffset);e<=328?(n.value=Math.floor(i-e),t("changeScrollVar",e)):(n.value=80,t("changeScrollVar",328)),t("changeHeaderHeight",n.value)}function o(){let e=window.innerWidth;e<=960?(n.value=160,c.value=!1):(window.scrollTo(0,0),n.value=i,c.value=!0),t("changeHeaderHeight",n.value),t("setScrollReaction",c.value)}function l(){fe.getModalViewModel().switchIsShownModal()}(0,s.bv)((()=>{window.addEventListener("resize",(()=>o())),o(),window.addEventListener("scroll",(()=>r()))}));const u=(0,z.yj)(),d=(0,z.tv)();function p(e){u.path!==we&&d.push(we),fe.getRecipesViewModal().setSearchLine(e)}return(e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(Ke),{height:(0,a.SU)(n),onClickFilterButton:l,onSearchRecipes:p},null,8,["height"]))}};const Ge=Ye;var Je=Ge,Xe={setup(e){let t=(0,a.iH)(600),i=(0,a.iH)(0),r=(0,a.iH)(!0);const o=(0,a.Fl)((()=>r.value?t.value+i.value+"px":"150px"));function l(e){t.value=e}function u(e){r.value=e}function d(e){i.value=e}return(e,t)=>{const i=(0,s.up)("router-view"),r=(0,s.up)("v-main"),p=(0,s.up)("v-app");return(0,s.wg)(),(0,s.j4)(p,{class:"app-container"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n.uT,{name:"modal"},{default:(0,s.w5)((()=>[e.$store.state.modal.isShownModal?((0,s.wg)(),(0,s.j4)((0,a.SU)(Se),{key:0})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)((0,a.SU)(Je),{onChangeHeaderHeight:l,onSetScrollReaction:u,onChangeScrollVar:d}),(0,s._)("div",{style:(0,c.j5)({"padding-top":(0,a.SU)(o)}),class:"router-view-container"},[(0,s.Wm)(i,{key:e.$route.fullPath})],4)])),_:1})])),_:1})}}};const Qe=(0,u.Z)(Xe,[["__scopeId","data-v-3ca42fec"]]);var et=Qe,tt={setup(e){return(e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(et)))}};const it=tt;var nt=it;async function st(){const e=await i.e(461).then(i.t.bind(i,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var at=i(6213),ct=i(8600),rt=(i(9773),i(8957));function ot(e){return e/60<=60?`${lt(e/60)} min`:`${lt(e/60/60)} hours`}function lt(e){return Number.isInteger(e)?e:e.toFixed(1)}function ut(e,t=170){return e.length>t?e.slice(0,t)+"...":e}var dt={props:{text:String},setup(e){return(t,i)=>{const n=(0,s.up)("v-chip");return(0,s.wg)(),(0,s.j4)(n,{class:"base-chip",variant:"elevated"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.text),1)])),_:1})}}};const pt=(0,u.Z)(dt,[["__scopeId","data-v-384d2bbe"]]);var gt=pt,ht={props:{recipe:Object},setup(e){return(t,i)=>{const n=(0,s.up)("v-item-group"),r=(0,s.up)("v-img"),o=(0,s.up)("v-card-title"),l=(0,s.up)("v-card-text"),u=(0,s.up)("v-card");return(0,s.wg)(),(0,s.j4)(u,{class:"mx-auto base-card mb-6",width:"348",height:"384",onClickPassive:i[0]||(i[0]=i=>t.$router.push(`${e.recipe.id}`))},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{src:e.recipe.thumbnail,height:"200",cover:""},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{style:{display:"flex"},class:"fill-height justify-end align-end pr-4 pb-4"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(gt),{text:(0,a.SU)(ot)(e.recipe.cookTime)},null,8,["text"]),(0,s.Wm)((0,a.SU)(gt),{class:"mr-2 ml-2",text:e.recipe.caloricity+"kCal"},null,8,["text"]),(0,s.Wm)((0,a.SU)(gt),{text:e.recipe.cuisine.title},null,8,["text"])])),_:1})])),_:1},8,["src"]),(0,s.Wm)(o,{class:"base-card-title mt-6 pt-0 pl-6 pr-6 text-wrap"},{default:(0,s.w5)((()=>[(0,s._)("h3",null,(0,c.zw)(e.recipe.title),1)])),_:1}),(0,s.Wm)(l,{class:"base-card-description pl-6 pr-6"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)((0,a.SU)(ut)(e.recipe.description)),1)])),_:1})])),_:1})}}};const mt=(0,u.Z)(ht,[["__scopeId","data-v-708440f5"]]);var ft=mt;const wt={class:"base-warn"};var vt={props:{warn:String},setup(e){return(t,i)=>((0,s.wg)(),(0,s.iD)("h2",wt,(0,c.zw)(e.warn),1))}};const yt=(0,u.Z)(vt,[["__scopeId","data-v-7bffb9e2"]]);var _t=yt,St={props:{getRecipes:Array},setup(e){return(t,i)=>{const c=(0,s.up)("v-row"),r=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(r,{class:"pt-0 ps-0 pe-0 pb-16",fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"main-page-container",fluid:""},{default:(0,s.w5)((()=>[t.$store.state.recipes.recipes.length?e.getRecipes.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)((0,a.SU)(_t),{key:1,id:"main-page-base-warning",warn:"Recipes with this parameters not found"})):((0,s.wg)(),(0,s.j4)((0,a.SU)(D),{key:0,id:"main-page-base-progress",warning:"Getting recipes list..."},null,8,["warning"])),(0,s.Wm)(c,{class:"pt-8 cards-container"},{default:(0,s.w5)((()=>[(0,s.Wm)(n.W3,{name:"base-cards"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.getRecipes,(e=>((0,s.wg)(),(0,s.j4)((0,a.SU)(ft),{class:"main-page-base-card",key:e.id,recipe:e},null,8,["recipe"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})}}};const bt=(0,u.Z)(St,[["__scopeId","data-v-721b8bb8"]]);var Ct=bt,Rt={setup(e){const t=(0,L.oR)(),i=(0,z.tv)();return(0,s.bv)((async()=>{i.currentRoute.value.fullPath!==we&&i.push(we),t.state.recipes.recipes.length||await fe.getRecipesViewModal().fetchRecipes()})),(e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(Ct),{getRecipes:e.$store.state.recipes.filteredRecipes},null,8,["getRecipes"]))}};const kt=Rt;var xt=kt;function It(e){return e[0].toUpperCase()+e.slice(1)}var jt={props:{text:String,iconName:String,color:String},setup(e){return(t,i)=>{const n=(0,s.up)("v-icon");return(0,s.wg)(),(0,s.iD)("div",{style:(0,c.j5)({color:e.color}),class:"base-info"},[(0,s.Wm)(n,{style:(0,c.j5)({color:e.color}),class:"base-info-icon",icon:e.iconName},null,8,["style","icon"]),(0,s.Uk)(" "+(0,c.zw)(e.text),1)],4)}}};const Ut=(0,u.Z)(jt,[["__scopeId","data-v-0327bec5"]]);var Wt=Ut,Mt={props:{title:String,description:String,difficulty:String,cookTime:Number,caloricity:Number,cuisine:String},setup(e){function t(e){switch(e){case"easy":return"#2FB65D";case"medium":return"#EB8A31";case"hard":return"#EB3C31"}}return(i,n)=>{const r=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(r,{style:{display:"block"}},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"info-title"},{default:(0,s.w5)((()=>[(0,s._)("h2",null,(0,c.zw)(e.title),1)])),_:1}),(0,s.Wm)(r,{class:"info-description"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,c.zw)(e.description),1)])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Wt),{text:(0,a.SU)(It)(e.difficulty),"icon-name":"mdi-chef-hat",color:t(e.difficulty)},null,8,["text","color"]),(0,s.Wm)((0,a.SU)(Wt),{text:(0,a.SU)(ot)(e.cookTime),"icon-name":"mdi-clock-outline"},null,8,["text"]),(0,s.Wm)((0,a.SU)(Wt),{text:e.caloricity+"kCal","icon-name":"mdi-fire"},null,8,["text"]),(0,s.Wm)((0,a.SU)(Wt),{text:e.cuisine,"icon-name":"mdi-web"},null,8,["text"])])),_:1})])),_:1})}}};const Dt=(0,u.Z)(Mt,[["__scopeId","data-v-2a773de5"]]);var Vt=Dt;const Ft={class:"mb-3"};var At={props:{ingredient:String},setup(e){return(t,i)=>((0,s.wg)(),(0,s.iD)("li",Ft,(0,c.zw)(e.ingredient),1))}};const Tt=At;var Ot=Tt;const Bt=e=>((0,s.dD)("data-v-97120794"),e=e(),(0,s.Cn)(),e),Ht=Bt((()=>(0,s._)("h3",null,"Ingredients",-1))),Pt={class:"ps-4"};var Zt={props:{ingredients:Array},setup(e){return(t,i)=>{const n=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(n,{class:"flex-column"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{class:"ingredients-title mb-6"},{default:(0,s.w5)((()=>[Ht])),_:1}),(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s._)("ul",Pt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.ingredients,(e=>((0,s.wg)(),(0,s.j4)((0,a.SU)(Ot),{key:e,ingredient:e},null,8,["ingredient"])))),128))])])),_:1})])),_:1})}}};const Et=(0,u.Z)(Zt,[["__scopeId","data-v-97120794"]]);var Lt=Et;const zt={class:"mb-3 li-item"},Nt={class:"count-bullet"};var $t={props:{instruction:String,idx:Number},setup(e){return(t,i)=>((0,s.wg)(),(0,s.iD)("li",zt,[(0,s._)("div",Nt,(0,c.zw)(e.idx+1),1),(0,s.Uk)(" "+(0,c.zw)(e.instruction),1)]))}};const qt=(0,u.Z)($t,[["__scopeId","data-v-3ac1a964"]]);var Kt=qt;const Yt=e=>((0,s.dD)("data-v-ee5d0e66"),e=e(),(0,s.Cn)(),e),Gt=Yt((()=>(0,s._)("h3",null,"Instructions",-1)));var Jt={props:{instructions:Array},setup(e){return(t,i)=>{const n=(0,s.up)("v-row");return(0,s.wg)(),(0,s.j4)(n,{class:"flex-column"},{default:(0,s.w5)((()=>[(0,s.Wm)(n,{class:"instructions-title mb-6"},{default:(0,s.w5)((()=>[Gt])),_:1}),(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.instructions,(t=>((0,s.wg)(),(0,s.j4)((0,a.SU)(Kt),{key:t,instruction:t,idx:e.instructions.indexOf(t)},null,8,["instruction","idx"])))),128))])])),_:1})])),_:1})}}};const Xt=(0,u.Z)(Jt,[["__scopeId","data-v-ee5d0e66"]]);var Qt=Xt;const ei=["src"];var ti={props:{image:String,isActive:Boolean},setup(e){return(t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,c.C_)(["base-thumb me-2",{"active-border":e.isActive}])},[(0,s._)("img",{src:e.image},null,8,ei)],2))}};const ii=(0,u.Z)(ti,[["__scopeId","data-v-0ba3d6a8"]]);var ni=ii;const si={class:"base-carousel"},ai={class:"thumb-container"};var ci={props:{images:Array},setup(e){let t=(0,a.iH)(0);function i(e){t.value=e}return(c,r)=>{const o=(0,s.up)("v-carousel-item"),l=(0,s.up)("v-carousel");return(0,s.wg)(),(0,s.iD)("div",si,[(0,s.Wm)(l,{modelValue:(0,a.SU)(t),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,a.dq)(t)?t.value=e:t=e),class:"carousel","show-arrows":!1,"hide-delimiters":""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.images,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e,src:e,cover:""},null,8,["src"])))),128))])),_:1},8,["modelValue"]),(0,s.wy)((0,s._)("div",ai,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.images,((e,n)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(ni),{key:e,"is-active":n===(0,a.SU)(t),image:e,onClick:()=>i(n)},null,8,["is-active","image","onClick"])))),128))],512),[[n.F8,e.images.length>1]])])}}};const ri=(0,u.Z)(ci,[["__scopeId","data-v-37bf97f7"]]);var oi=ri,li={props:{recipe:Object},setup(e){return(t,i)=>{const c=(0,s.up)("v-col"),r=(0,s.up)("v-row"),o=(0,s.up)("v-container");return(0,s.wg)(),(0,s.j4)(o,{class:"pt-0 ps-16 pe-16 item-page",fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"pe-16 pb-16",fluid:""},{default:(0,s.w5)((()=>[e.recipe?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)((0,a.SU)(D),{key:0,warning:"Getting recipe..."},null,8,["warning"])),(0,s.Wm)(n.uT,{name:"item-animation"},{default:(0,s.w5)((()=>[e.recipe?((0,s.wg)(),(0,s.j4)(r,{key:0,class:"pt-8 justify-center item-container"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"info-container"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(Vt),{title:e.recipe.title,description:e.recipe.description,difficulty:e.recipe.difficulty,"cook-time":e.recipe.cookTime,caloricity:e.recipe.caloricity,cuisine:e.recipe.cuisine.title},null,8,["title","description","difficulty","cook-time","caloricity","cuisine"]),(0,s.Wm)((0,a.SU)(Lt),{ingredients:e.recipe.ingredients,class:"mt-12"},null,8,["ingredients"]),(0,s.Wm)((0,a.SU)(Qt),{instructions:e.recipe.instructions,class:"mt-12"},null,8,["instructions"])])),_:1}),(0,s.Wm)(c,{class:"carousel-container"},{default:(0,s.w5)((()=>[(0,s.Wm)((0,a.SU)(oi),{images:e.recipe.images},null,8,["images"])])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1})])),_:1})}}};const ui=(0,u.Z)(li,[["__scopeId","data-v-3128870e"]]);var di=ui,pi={setup(e){const t=(0,z.yj)(),i=(0,z.tv)();return(0,s.bv)((async()=>{try{await fe.getRecipeViewModal().fetchRecipe(t.params.id)}catch{i.push(we)}})),(0,s.Ah)((()=>{fe.getRecipeViewModal().clearRecipe()})),(e,t)=>((0,s.wg)(),(0,s.j4)((0,a.SU)(di),{recipe:e.$store.state.recipe.recipe},null,8,["recipe"]))}};const gi=pi;var hi=gi;const mi=[{path:"/:pathMatch(.*)*",component:xt},{path:"/air-recipes/:id",component:hi}];var fi=(0,z.p7)({routes:mi,history:(0,z.PO)()});const wi=(0,rt.Rd)({components:at,directives:ct,icons:{iconfont:"mdi"}});st(),(0,n.ri)(nt).use(fi).use(wi).use(he).mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,a){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],a=e[u][2];for(var r=!0,o=0;o<n.length;o++)(!1&a||c>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(r=!1,a<c&&(c=a));if(r){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,s,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var a=Object.create(null);i.r(a);var c={};e=e||[null,t({}),t([]),t(t)];for(var r=2&s&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){c[e]=function(){return n[e]}}));return c["default"]=function(){return n},i.d(a,c),a}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/webfontloader.4fcfb05b.js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="air-recipes:";i.l=function(n,s,a,c){if(e[n])e[n].push(s);else{var r,o;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){r=d;break}}r||(o=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",t+a),r.src=n),e[n]=[s];var p=function(t,i){r.onerror=r.onload=null,clearTimeout(g);var s=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(i)})),t)return t(i)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),o&&document.head.appendChild(r)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/air-recipes/"}(),function(){var e={143:0};i.f.j=function(t,n){var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(i,n){s=e[t]=[i,n]}));n.push(s[2]=a);var c=i.p+i.u(t),r=new Error,o=function(n){if(i.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",r.name="ChunkLoadError",r.type=a,r.request=c,s[1](r)}};i.l(c,o,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,c=n[0],r=n[1],o=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(o)var u=o(i)}for(t&&t(n);l<c.length;l++)a=c[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self["webpackChunkair_recipes"]=self["webpackChunkair_recipes"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7177)}));n=i.O(n)})();
//# sourceMappingURL=app.7fe729df.js.map
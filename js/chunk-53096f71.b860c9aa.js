(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53096f71"],{"07e3":function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},"0fc9":function(t,e,a){var r=a("3a38"),o=Math.max,n=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):n(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1799:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination d-flex justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._m(0)]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._m(1)])],2)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],n={props:["pages"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("emitPages",t)}}},i=n,s=(a("5649"),a("2877")),c=Object(s["a"])(i,r,o,!1,null,"1bf20037",null);e["a"]=c.exports},"1bc3":function(t,e,a){var r=a("f772");t.exports=function(t,e){if(!r(t))return t;var a,o;if(e&&"function"==typeof(a=t.toString)&&!r(o=a.call(t)))return o;if("function"==typeof(a=t.valueOf)&&!r(o=a.call(t)))return o;if(!e&&"function"==typeof(a=t.toString)&&!r(o=a.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,a){var r=a("f772"),o=a("e53d").document,n=r(o)&&r(o.createElement);t.exports=function(t){return n?o.createElement(t):{}}},"241e":function(t,e,a){var r=a("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"335c":function(t,e,a){var r=a("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,a){var r=a("d9f6"),o=a("aebd");t.exports=a("8e60")?function(t,e,a){return r.f(t,e,o(1,a))}:function(t,e,a){return t[e]=a,t}},"36c3":function(t,e,a){var r=a("335c"),o=a("25eb");t.exports=function(t){return r(o(t))}},"3a38":function(t,e){var a=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:a)(t)}},"4b93":function(t,e,a){},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},5559:function(t,e,a){var r=a("dbdb")("keys"),o=a("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},5649:function(t,e,a){"use strict";var r=a("4b93"),o=a.n(r);o.a},"584a":function(t,e){var a=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=a)},"5b4e":function(t,e,a){var r=a("36c3"),o=a("b447"),n=a("0fc9");t.exports=function(t){return function(e,a,i){var s,c=r(e),u=o(c.length),l=n(i,u);if(t&&a!=a){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===a)return t||l||0;return!t&&-1}}},"62a0":function(t,e){var a=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+r).toString(36))}},"63b6":function(t,e,a){var r=a("e53d"),o=a("584a"),n=a("d864"),i=a("35e8"),s=a("07e3"),c="prototype",u=function(t,e,a){var l,d,p,f=t&u.F,m=t&u.G,v=t&u.S,g=t&u.P,h=t&u.B,b=t&u.W,_=m?o:o[e]||(o[e]={}),P=_[c],y=m?r:v?r[e]:(r[e]||{})[c];for(l in m&&(a=e),a)d=!f&&y&&void 0!==y[l],d&&s(_,l)||(p=d?y[l]:a[l],_[l]=m&&"function"!=typeof y[l]?a[l]:h&&d?n(p,r):b&&y[l]==p?function(t){var e=function(e,a,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):g&&"function"==typeof p?n(Function.call,p):p,g&&((_.virtual||(_.virtual={}))[l]=p,t&u.R&&P&&!P[l]&&i(P,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"6b4c":function(t,e){var a={}.toString;t.exports=function(t){return a.call(t).slice(8,-1)}},"778a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[a("img",{staticStyle:{width:"50px"},attrs:{src:e.imageUrl}})]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm product_btn",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm product_btn",on:{click:function(a){return t.openDelModal(e)}}},[t._v("刪除")])])])}),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n\t\t\t\t\t\t\t\t\t"),t.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,r=e.target,o=r.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);r.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n\t\t\t\t\t是否刪除\n\t\t\t\t\t"),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n\t\t\t\t")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品圖片")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"80"}},[t._v("是否啟用")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=a("5176"),i=a.n(n),s=a("1157"),c=a.n(s),u=a("1799"),l={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,fileUploading:!1}},components:{Pagination:u["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/admin/products?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then(function(t){console.log(t.data),t.data.success&&(a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination)})},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=i()({},e),this.isNew=!1),c()("#productModal").modal("show")},updateProduct:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/admin/product"),a="post";t.isNew||(e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/admin/product/").concat(t.tempProduct.id),a="put"),this.$http[a](e,{data:t.tempProduct}).then(function(e){console.log(e.data),e.data.success?(c()("#productModal").modal("hide"),t.getProducts()):(c()("#productModal").modal("hide"),t.getProducts(),console.log("新增失敗"))})},openDelModal:function(t){c()("#delProductModal").modal("show"),this.tempProduct=i()({},t)},delProduct:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/admin/product/").concat(t.tempProduct.id);this.$http.delete(e).then(function(e){console.log(e.data),c()("#delProductModal").modal("hide"),t.getProducts()})},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,r=new FormData;r.append("file-to-upload",e);var o="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/admin/upload");a.fileUploading=!0,this.$http.post(o,r,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),a.fileUploading=!1,e.data.success?(console.log(a.tempProduct),a.$set(a.tempProduct,"imageUrl",e.data.imageUrl)):t.$bus.$emit("messsage:push","response.data.message","danger")})}},created:function(){this.getProducts()}},d=l,p=a("2877"),f=Object(p["a"])(d,r,o,!1,null,null,null);e["default"]=f.exports},"794b":function(t,e,a){t.exports=!a("8e60")&&!a("294c")(function(){return 7!=Object.defineProperty(a("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"8e60":function(t,e,a){t.exports=!a("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9306:function(t,e,a){"use strict";var r=a("c3a1"),o=a("9aa9"),n=a("355d"),i=a("241e"),s=a("335c"),c=Object.assign;t.exports=!c||a("294c")(function(){var t={},e={},a=Symbol(),r="abcdefghijklmnopqrst";return t[a]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=r})?function(t,e){var a=i(t),c=arguments.length,u=1,l=o.f,d=n.f;while(c>u){var p,f=s(arguments[u++]),m=l?r(f).concat(l(f)):r(f),v=m.length,g=0;while(v>g)d.call(f,p=m[g++])&&(a[p]=f[p])}return a}:c},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var r=a("63b6");r(r.S+r.F,"Object",{assign:a("9306")})},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,a){var r=a("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c3a1:function(t,e,a){var r=a("e6f3"),o=a("1691");t.exports=Object.keys||function(t){return r(t,o)}},d864:function(t,e,a){var r=a("79aa");t.exports=function(t,e,a){if(r(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,r){return t.call(e,a,r)};case 3:return function(a,r,o){return t.call(e,a,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,a){var r=a("e4ae"),o=a("794b"),n=a("1bc3"),i=Object.defineProperty;e.f=a("8e60")?Object.defineProperty:function(t,e,a){if(r(t),e=n(e,!0),r(a),o)try{return i(t,e,a)}catch(s){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},dbdb:function(t,e,a){var r=a("584a"),o=a("e53d"),n="__core-js_shared__",i=o[n]||(o[n]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:a("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,a){var r=a("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},e6f3:function(t,e,a){var r=a("07e3"),o=a("36c3"),n=a("5b4e")(!1),i=a("5559")("IE_PROTO");t.exports=function(t,e){var a,s=o(t),c=0,u=[];for(a in s)a!=i&&r(s,a)&&u.push(a);while(e.length>c)r(s,a=e[c++])&&(~n(u,a)||u.push(a));return u}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-53096f71.b860c9aa.js.map
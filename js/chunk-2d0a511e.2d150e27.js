(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a511e"],{"08aa":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container detail_all"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"detail_content"},[s("div",{staticClass:"d-flex top_btn_all"},[s("button",{staticClass:"top_btn",on:{click:t.backPage}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v("   上一頁\n\t\t\t")]),s("button",{staticClass:"top_btn",on:{click:function(a){return t.reloadPage()}}},[s("i",{staticClass:"fas fa-redo-alt"}),t._v("  重新整理\n\t\t\t")])]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-7 pd_img_all"},[s("img",{staticClass:"pd_img",attrs:{src:t.product.imageUrl,alt:""}})]),s("div",{staticClass:"col-md-5 pd_info"},[s("p",{staticClass:"badge badge-secondary"},[t._v(t._s(t.product.category))]),s("h1",{staticClass:"h2 pd_title"},[t._v(t._s(t.product.title))]),s("hr"),s("p",{staticClass:"pd_content"},[t._v(t._s(t.product.content))]),s("p",{staticClass:"pd_description"},[t._v(t._s(t.product.description))]),s("div",{staticClass:"my-3"},[s("del",{staticClass:"text-muted"},[t._v("NT$"+t._s(t.product.origin_price))]),s("strong",{staticClass:"h3 mb-0 ml-1 pd_price"},[t._v("NT$"+t._s(t.product.price))])]),s("hr"),s("div",{staticClass:"mt-3"},[s("div",[t._v("\n\t\t\t\t\t\t數量： \n\t\t\t\t\t\t"),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"select_num",attrs:{name:"select_num",placeholder:"請選擇數量"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.product,"num",a.target.multiple?s:s[0])}}},t._l(10,function(a){return s("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])}),0)]),s("div",{staticClass:"addcart_tooltip mt-3"},[s("a",{staticClass:"btn btn_addcart",attrs:{href:"#","data-toggle":"tooltip","data-placement":"right",title:"已加入購物車"},on:{click:[function(a){return a.preventDefault(),t.addtoCart(t.product.id,t.product.num)},t.addtoCartAlert]}},[t.product.id===t.status.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):s("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t\t加入購物車\n\t\t\t\t\t\t")])])])])])])],1)},o=[],c=s("1157"),e=s.n(c),n={data:function(){return{product:{},pdId:"",isLoading:!1,status:{loadingItem:""},cart:{}}},created:function(){this.pdId=this.$route.params.product_id,this.getProduct(this.pdId),console.log(this.pdId)},methods:{getProduct:function(t){var a=this,s="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/product/").concat(t);a.isLoading=!0,this.$http.get(s).then(function(t){console.log(t),a.product=t.data.product,a.product.num=1,a.isLoading=!1})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,i="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart");s.status.loadingItem=t;var o={product_id:t,qty:a};this.$http.post(i,{data:o}).then(function(t){t.data.success&&(console.log(t),s.status.loadingItem="",s.getCart(),s.addtoCartAlert())}),this.$bus.$emit("regetCart")},addtoCartAlert:function(){var t=e()('[data-toggle="tooltip"]');t.tooltip({trigger:"click"}),setTimeout(function(){t.tooltip("hide")},1200)},getCart:function(){var t=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("ying","/cart");this.$http.get(a).then(function(a){console.log(a),t.cart=a.data.data})},backPage:function(){this.$router.back()},reloadPage:function(){window.location.reload()}}},r=n,d=s("2877"),l=Object(d["a"])(r,i,o,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0a511e.2d150e27.js.map
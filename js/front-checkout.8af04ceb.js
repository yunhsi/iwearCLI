(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["front-checkout"],{"1b85":function(e,t,c){"use strict";c("a8e1")},"21f5":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a={"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"400","data-aos-delay":"500"},o={style:{"padding-top":"73px","min-height":"calc(100vh - 104px)"}},n={class:"container pt-4 pb-5"},s={class:"row pt-4"},l={class:"col-md-7"},d={class:"col-md-5"};function i(e,t,c,i,u,b){var m=Object(r["resolveComponent"])("Navbar"),p=Object(r["resolveComponent"])("CheckoutSteps"),O=Object(r["resolveComponent"])("OrderInfo"),j=Object(r["resolveComponent"])("PaymentInfo"),f=Object(r["resolveComponent"])("Footer"),v=Object(r["resolveComponent"])("GoTop");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(m,{rootClass:"page-navbar"}),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("main",o,[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(p,{step4Class:"active"}),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(O,{title:"訂單明細",order:u.order},null,8,["order"])]),Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(j,{id:b.id,order:u.order},null,8,["id","order"])])])])]),Object(r["createVNode"])(f)]),Object(r["createVNode"])(v)],64)}var u=c("1da1"),b=(c("96cf"),c("5378")),m=c("5c27"),p=c("99e9"),O=c("6639"),j=c("ab44"),f=c("3bd5"),v=c("f8b7"),V={components:{Navbar:b["a"],CheckoutSteps:m["a"],OrderInfo:p["a"],PaymentInfo:O["a"],Footer:j["a"],GoTop:f["a"]},data:function(){return{order:{}}},computed:{id:function(){return this.$route.params.orderId}},mounted:function(){this.requestOrder()},methods:{requestOrder:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(v["a"])(e.id);case 3:c=t.sent,c.data.success&&(e.order=c.data.order),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$swal({icon:"error",title:"".concat(t.t0)});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},N=c("6b0d"),g=c.n(N);const h=g()(V,[["render",i]]);t["default"]=h},"2bf3":function(e,t,c){},"5c27":function(e,t,c){"use strict";var r=c("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-4d94d99c"),e=e(),Object(r["popScopeId"])(),e},o={class:"row g-0 pt-5 pb-md-5 pb-4 mt-2 small progress-wrap"},n={class:"col-3 text-center text-danger"},s=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-num"},"1",-1)})),l=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-text"},"確認品項",-1)})),d={class:"progress mt-2",style:{height:"2px"}},i={class:"col-3 text-center text-danger"},u=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-num"},"2",-1)})),b=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-text"},"建立訂單",-1)})),m={class:"progress mt-2",style:{height:"2px"}},p={class:"col-3 text-center text-danger"},O=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-num"},"3",-1)})),j=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-text"},"確認付款",-1)})),f={class:"progress mt-2",style:{height:"2px"}},v={class:"col-3 text-center text-danger"},V=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-num"},"4",-1)})),N=a((function(){return Object(r["createElementVNode"])("span",{class:"progress-text"},"完成訂單",-1)})),g={class:"progress mt-2",style:{height:"2px"}};function h(e,t,c,a,h,E){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",n,[s,l,Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["progress-bar",c.step1Class]),role:"progressbar"},null,2)])]),Object(r["createElementVNode"])("div",i,[u,b,Object(r["createElementVNode"])("div",m,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["progress-bar",c.step2Class]),role:"progressbar"},null,2)])]),Object(r["createElementVNode"])("div",p,[O,j,Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["progress-bar",c.step3Class]),role:"progressbar"},null,2)])]),Object(r["createElementVNode"])("div",v,[V,N,Object(r["createElementVNode"])("div",g,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["progress-bar",c.step4Class]),role:"progressbar"},null,2)])])])}var E={props:["step1Class","step2Class","step3Class","step4Class"]},x=(c("c419"),c("6b0d")),y=c.n(x);const k=y()(E,[["render",h],["__scopeId","data-v-4d94d99c"]]);t["a"]=k},"5fc5":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),a={"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"400","data-aos-delay":"500"},o={style:{"padding-top":"73px","min-height":"calc(100vh - 104px)"}},n={class:"container pt-4 pb-5"},s={class:"row flex-row-reverse justify-content-center pt-4"},l={class:"col-lg-5 col-md-6"},d={class:"col-lg-7 col-md-6"},i={class:"col-md-6"},u=Object(r["createElementVNode"])("label",{for:"name",class:"form-label"},[Object(r["createTextVNode"])(" 收件人姓名 "),Object(r["createElementVNode"])("span",{class:"text-danger"},"*")],-1),b={class:"col-md-6"},m=Object(r["createElementVNode"])("label",{for:"tel",class:"form-label"},[Object(r["createTextVNode"])(" 收件人電話 "),Object(r["createElementVNode"])("span",{class:"text-danger"},"*")],-1),p={class:"col-12"},O=Object(r["createElementVNode"])("label",{for:"address",class:"form-label"},[Object(r["createTextVNode"])(" 收件人地址 "),Object(r["createElementVNode"])("span",{class:"text-danger"},"*")],-1),j={class:"col-12"},f=Object(r["createElementVNode"])("label",{for:"Email",class:"form-label"},[Object(r["createTextVNode"])(" Email (請填寫常用信箱以追蹤出貨狀態) "),Object(r["createElementVNode"])("span",{class:"text-danger"},"*")],-1),v={class:"col-12"},V=Object(r["createElementVNode"])("label",{for:"payment",class:"form-label"},[Object(r["createTextVNode"])(" 付款方式 "),Object(r["createElementVNode"])("span",{class:"text-danger"},"*")],-1),N=Object(r["createElementVNode"])("option",{value:"",selected:"",disabled:""},"選擇付款方式",-1),g=Object(r["createElementVNode"])("option",{value:"信用卡"},"信用卡",-1),h=Object(r["createElementVNode"])("option",{value:"貨到付款"},"貨到付款",-1),E=Object(r["createElementVNode"])("option",{value:"ATM 匯款"},"ATM 匯款",-1),x={class:"col-12 d-flex justify-content-between align-items-center"},y=Object(r["createElementVNode"])("i",{class:"fas fa-chevron-left me-2"},null,-1),k=Object(r["createTextVNode"])("返回購物車 "),C=Object(r["createElementVNode"])("button",{type:"submit",class:"btn btn-danger px-3"}," 建立訂單 ",-1);function w(e,t,c,w,B,S){var D=Object(r["resolveComponent"])("loading"),$=Object(r["resolveComponent"])("Navbar"),_=Object(r["resolveComponent"])("CheckoutSteps"),L=Object(r["resolveComponent"])("OrderInfo"),T=Object(r["resolveComponent"])("Field"),I=Object(r["resolveComponent"])("ErrorMessage"),q=Object(r["resolveComponent"])("router-link"),R=Object(r["resolveComponent"])("Form"),F=Object(r["resolveComponent"])("Footer"),G=Object(r["resolveComponent"])("GoTop");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(D,{active:B.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return B.isLoading=e})},null,8,["active"]),Object(r["createVNode"])($,{rootClass:"page-navbar"}),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("main",o,[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(_,{step2Class:"active"}),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(L,{title:"訂單資訊",cart:B.cart},null,8,["cart"])]),Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(R,{class:"row g-3 pt-4 pt-md-0 small",onSubmit:S.requestPostOrder},{default:Object(r["withCtx"])((function(e){var c=e.errors;return[Object(r["createElementVNode"])("div",i,[u,Object(r["createVNode"])(T,{type:"text",name:"姓名",placeholder:"請輸入收件人姓名",id:"name",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),modelValue:B.formData.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return B.formData.user.name=e}),rules:"required"},null,8,["class","modelValue"]),Object(r["createVNode"])(I,{name:"姓名",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",b,[m,Object(r["createVNode"])(T,{type:"tel",name:"電話",placeholder:"請輸入收件人電話",id:"tel",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),modelValue:B.formData.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.formData.user.tel=e}),rules:"required|numeric|min:10"},null,8,["class","modelValue"]),Object(r["createVNode"])(I,{name:"電話",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",p,[O,Object(r["createVNode"])(T,{type:"text",name:"地址",placeholder:"請輸入收件人地址",id:"address",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),modelValue:B.formData.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return B.formData.user.address=e}),rules:"required"},null,8,["class","modelValue"]),Object(r["createVNode"])(I,{name:"地址",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",j,[f,Object(r["createVNode"])(T,{type:"email",name:"Email",placeholder:"請輸入 Email",id:"Email",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":c["Email"]}]),modelValue:B.formData.user.email,"onUpdate:modelValue":t[4]||(t[4]=function(e){return B.formData.user.email=e}),rules:"required|email"},null,8,["class","modelValue"]),Object(r["createVNode"])(I,{name:"Email",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",v,[V,Object(r["createVNode"])(T,{as:"select",name:"付款方式",placeholder:"請輸入付款方式",id:"payment",class:Object(r["normalizeClass"])(["form-select",{"is-invalid":c["付款方式"]}]),modelValue:B.formData.user.payment,"onUpdate:modelValue":t[5]||(t[5]=function(e){return B.formData.user.payment=e}),rules:"required"},{default:Object(r["withCtx"])((function(){return[N,g,h,E]})),_:2},1032,["class","modelValue"]),Object(r["createVNode"])(I,{name:"付款方式",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",x,[Object(r["createVNode"])(q,{to:"/cart",class:"text-muted"},{default:Object(r["withCtx"])((function(){return[y,k]})),_:1}),C])]})),_:1},8,["onSubmit"])])])])]),Object(r["createVNode"])(F)]),Object(r["createVNode"])(G)],64)}var B=c("1da1"),S=(c("96cf"),c("5378")),D=c("5c27"),$=c("99e9"),_=c("ab44"),L=c("3bd5"),T=c("2166"),I=c("f8b7"),q={components:{Navbar:S["a"],CheckoutSteps:D["a"],OrderInfo:$["a"],Footer:_["a"],GoTop:L["a"]},data:function(){return{isLoading:!1,cart:[],formData:{user:{name:"",tel:"",address:"",email:"",payment:""}},isGetCoupon:localStorage.getItem("isGetCoupon")}},mounted:function(){this.requestCarts()},methods:{requestPostOrder:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.formData,t.prev=1,e.isLoading=!0,t.next=5,Object(I["c"])(c);case 5:r=t.sent,r.data.success&&(e.$router.push("/order/".concat(r.data.orderId)),localStorage.setItem("isGetCoupon",!1)),e.isLoading=!1,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.$swal({icon:"error",title:"".concat(t.t0)});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},requestCarts:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,Object(T["b"])();case 4:c=t.sent,c.data.success&&(e.cart=c.data.data,e.cart.carts.length||e.$router.push("/cart")),e.isLoading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"".concat(t.t0)});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},R=c("6b0d"),F=c.n(R);const G=F()(q,[["render",w]]);t["default"]=G},6533:function(e,t,c){"use strict";c("7c15")},6639:function(e,t,c){"use strict";c("b0c0");var r=c("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-8c84dcac"),e=e(),Object(r["popScopeId"])(),e},o={class:"border border-danger p-4 rounded shadow-sm mt-4 mt-md-0"},n=a((function(){return Object(r["createElementVNode"])("h4",{class:"mb-1"},"訂購資訊",-1)})),s={class:"text-muted pb-2",style:{"font-size":"12px",display:"block"}},l={class:"table mb-4 small"},d={class:"border-bottom"},i=a((function(){return Object(r["createElementVNode"])("th",{class:"border-0 px-0 fw-normal"},"收件人姓名",-1)})),u={key:0,class:"text-end border-0 px-0"},b={key:1,class:"text-end border-0 px-0"},m={class:"border-bottom"},p=a((function(){return Object(r["createElementVNode"])("th",{class:"border-0 px-0 fw-normal"},"收件人電話",-1)})),O={key:0,class:"text-end border-0 px-0"},j={key:1,class:"text-end border-0 px-0"},f={class:"border-bottom"},v=a((function(){return Object(r["createElementVNode"])("th",{class:"border-0 px-0 fw-normal"},"收件人地址",-1)})),V={key:0,class:"text-end border-0 px-0"},N={key:1,class:"text-end border-0 px-0"},g={class:"border-bottom"},h=a((function(){return Object(r["createElementVNode"])("th",{class:"border-0 px-0 fw-normal"},"付款方式",-1)})),E={key:0,class:"text-end border-0 px-0"},x={key:1,class:"text-end border-0 px-0"},y={class:"border-bottom"},k=a((function(){return Object(r["createElementVNode"])("th",{class:"border-0 px-0 fw-normal"},"付款狀態",-1)})),C={class:"text-end border-0 px-0"},w={key:0,class:"badge rounded-pill bg-success"},B={key:1,class:"badge rounded-pill bg-secondary"},S={key:0,class:"d-grid gap-2"},D={key:1,class:"d-grid gap-2"},$=Object(r["createTextVNode"])("回到商品頁");function _(e,t,c,a,_,L){var T=Object(r["resolveComponent"])("loading"),I=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(T,{active:_.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return _.isLoading=e})},null,8,["active"]),Object(r["createElementVNode"])("div",o,[n,Object(r["createElementVNode"])("small",s," 建立時間："+Object(r["toDisplayString"])(e.$filters.date(c.order.create_at)),1),Object(r["createElementVNode"])("table",l,[Object(r["createElementVNode"])("tbody",null,[Object(r["createElementVNode"])("tr",d,[i,L.userData?(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",u,Object(r["toDisplayString"])(L.userData.name),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",b,Object(r["toDisplayString"])(_.user.name),1))]),Object(r["createElementVNode"])("tr",m,[p,L.userData?(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",O,Object(r["toDisplayString"])(L.userData.tel),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",j,Object(r["toDisplayString"])(_.user.tel),1))]),Object(r["createElementVNode"])("tr",f,[v,L.userData?(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",V,Object(r["toDisplayString"])(L.userData.address),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",N,Object(r["toDisplayString"])(_.user.address),1))]),Object(r["createElementVNode"])("tr",g,[h,L.userData?(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",E,Object(r["toDisplayString"])(L.userData.payment),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("td",x,Object(r["toDisplayString"])(_.user.payment),1))]),Object(r["createElementVNode"])("tr",y,[k,Object(r["createElementVNode"])("td",C,[c.order.is_paid?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",w,"付款完成")):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",B,"尚未付款"))])])])]),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",null,[c.order.is_paid?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",D,[Object(r["createVNode"])(I,{to:"/products",class:"btn btn-danger",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return L.goToType("")}),["prevent"]))},{default:Object(r["withCtx"])((function(){return[$]})),_:1})])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",S,[Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(){return L.checkoutConfirm&&L.checkoutConfirm.apply(L,arguments)})}," 結帳去 ")]))],512),[[r["vShow"],!c.isPaid]])])],64)}var L=c("1da1"),T=(c("96cf"),c("bc3a")),I=c.n(T),q=I.a.create({baseURL:"https://vue-course-api.hexschool.io/api/yunhsi"}),R=function(e){return q.post("/pay/".concat(e))},F={props:{id:{type:String,required:!0},order:{type:Object,default:function(){return{}}},isPaid:{type:Boolean,default:!1}},data:function(){return{isLoading:!1,user:{}}},computed:{userData:function(){return this.order.user}},watch:{order:function(){this.user=this.order.user}},methods:{checkoutConfirm:function(){var e=this;this.$swal({title:"是否確定結帳?",icon:"question",showCancelButton:!0,confirmButtonColor:"#dc3534",cancelButtonText:"取消",confirmButtonText:"是的！"}).then((function(t){t.isConfirmed&&e.checkout()}))},checkout:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,R(e.id);case 4:c=t.sent,e.isLoading=!1,e.$swal({icon:"success",title:"".concat(c.data.message),showConfirmButton:!1,timer:1500}),e.$router.push("/checkout/".concat(e.id)),e.isLoading=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$swal({icon:"error",title:"".concat(t.t0)});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},goToType:function(e){this.$store.commit("setProductType",e)}}},G=(c("1b85"),c("6b0d")),z=c.n(G);const P=z()(F,[["render",_],["__scopeId","data-v-8c84dcac"]]);t["a"]=P},"7c15":function(e,t,c){},"99e9":function(e,t,c){"use strict";var r=c("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-bc7ba9ba"),e=e(),Object(r["popScopeId"])(),e},o={class:"border border-danger p-4 rounded shadow-sm"},n={class:"mb-4"},s={class:"mb-1"},l=["src"],d={class:"w-100 d-flex justify-content-between align-items-center small"},i={class:"mb-0 pe-4"},u={class:"h6 fw-normal"},b=a((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),m={class:"pt-1 d-block small"},p={class:"mb-0"},O={class:"d-flex justify-content-between mt-4 pt-4 border-top"},j=a((function(){return Object(r["createElementVNode"])("p",{class:"h5"},"總金額",-1)})),f={class:"h5 fw-normal"};function v(e,t,c,a,v,V){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("h4",s,Object(r["toDisplayString"])(c.title),1),Object(r["withDirectives"])(Object(r["createElementVNode"])("small",{class:"text-muted",style:{"font-size":"12px",display:"block"}}," 訂單編號："+Object(r["toDisplayString"])(c.order.id),513),[[r["vShow"],"訂單明細"==c.title]])]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(v.orders,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"d-flex align-items-center my-2",key:t.id},[Object(r["createElementVNode"])("img",{src:t.product.image,alt:"",class:"me-3 rounded"},null,8,l),Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("p",i,[Object(r["createElementVNode"])("span",u,Object(r["toDisplayString"])(t.product.title),1),b,Object(r["createElementVNode"])("span",m,"數量："+Object(r["toDisplayString"])(t.qty),1)]),Object(r["createElementVNode"])("p",p,"$"+Object(r["toDisplayString"])(e.$filters.currency(t.final_total)),1)])])})),128)),Object(r["createElementVNode"])("div",O,[j,Object(r["createElementVNode"])("p",f,"$"+Object(r["toDisplayString"])(e.$filters.currency(v.total)),1)])])}var V={props:{title:{type:String,required:!0},cart:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}}},data:function(){return{orders:[],total:0}},watch:{cart:function(){this.orders=this.cart.carts,this.total=this.cart.final_total},order:function(){this.orders=this.order.products,this.total=this.order.total}}},N=(c("a4bc"),c("6b0d")),g=c.n(N);const h=g()(V,[["render",v],["__scopeId","data-v-bc7ba9ba"]]);t["a"]=h},"9aee":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-365780b4"),e=e(),Object(r["popScopeId"])(),e},o={"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"400","data-aos-delay":"500"},n={style:{"padding-top":"73px","min-height":"calc(100vh - 104px)"}},s={class:"container pt-4 pb-5"},l={class:"row pt-2"},d={class:"col-12"},i={key:0,class:"table small"},u=a((function(){return Object(r["createElementVNode"])("tr",{class:"border-bottom fw-bold"},[Object(r["createElementVNode"])("td",{scope:"col",class:"border-0"},"品名"),Object(r["createElementVNode"])("td",{scope:"col",class:"border-0 mobile-hide"}),Object(r["createElementVNode"])("td",{scope:"col",class:"border-0 text-center mobile-width"}," 數量 "),Object(r["createElementVNode"])("td",{scope:"col",class:"border-0 text-center"},"單價"),Object(r["createElementVNode"])("td",{scope:"col",class:"border-0 text-center"},"小計"),Object(r["createElementVNode"])("td",{scope:"col",class:"border-0"})],-1)})),b={scope:"row",class:"border-0 fw-normal py-3 mobile-hide"},m=["src"],p={class:"border-0 align-middle"},O={class:"border-0 align-middle text-center"},j={class:"border-0 align-middle"},f={class:"mb-0 text-end"},v={class:"border-0 align-middle"},V={class:"mb-0 text-end"},N={class:"border-0 align-middle text-center"},g=["onClick"],h=a((function(){return Object(r["createElementVNode"])("i",{class:"fas fa-times"},null,-1)})),E=[h],x={class:"py-5"},y=a((function(){return Object(r["createElementVNode"])("p",{class:"text-center",style:{"letter-spacing":"2px"}}," 購物車內沒有商品 ",-1)})),k=[y],C={class:"row py-3"},w={class:"col-md-6"},B=a((function(){return Object(r["createElementVNode"])("p",{class:"h6 text-secondary mb-2 small"}," ➤ 開店慶輸入優惠碼 happy99 即可享九折優惠 ",-1)})),S={class:"input-group input-group"},D={class:"col-md-6 text-end h5 m-0 mt-4 mt-md-0"},$=a((function(){return Object(r["createElementVNode"])("hr",null,null,-1)})),_={class:"text-end"},L=Object(r["createTextVNode"])("繼續購物");function T(e,t,c,a,h,y){var T=Object(r["resolveComponent"])("loading"),I=Object(r["resolveComponent"])("Toast"),q=Object(r["resolveComponent"])("Navbar"),R=Object(r["resolveComponent"])("CheckoutSteps"),F=Object(r["resolveComponent"])("router-link"),G=Object(r["resolveComponent"])("Footer"),z=Object(r["resolveComponent"])("GoTop");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(T,{active:h.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return h.isLoading=e})},null,8,["active"]),Object(r["createVNode"])(I,{breakpoints:{"414px":{width:"100%",right:"0",left:"0"}}}),Object(r["createVNode"])(q,{rootClass:"page-navbar"}),Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("main",n,[Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(R,{step1Class:"active"}),Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",d,[h.isReady?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Transition"],{key:0,name:"fade"},{default:Object(r["withCtx"])((function(){return[h.num?(Object(r["openBlock"])(),Object(r["createElementBlock"])("table",i,[Object(r["createElementVNode"])("tbody",null,[u,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(h.cart.carts,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{class:"border-bottom list-hover",key:t.id},[Object(r["createElementVNode"])("td",b,[Object(r["createVNode"])(F,{to:"/product/".concat(t.product_id)},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("img",{src:t.product.image,alt:"",class:"rounded"},null,8,m)]})),_:2},1032,["to"])]),Object(r["createElementVNode"])("td",p,[Object(r["createVNode"])(F,{to:"/product/".concat(t.product_id),style:{"text-transform":"capitalize"}},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.product.title),1)]})),_:2},1032,["to"])]),Object(r["createElementVNode"])("td",O,Object(r["toDisplayString"])(t.qty),1),Object(r["createElementVNode"])("td",j,[Object(r["createElementVNode"])("p",f," $"+Object(r["toDisplayString"])(e.$filters.currency(t.product.price)),1)]),Object(r["createElementVNode"])("td",v,[Object(r["createElementVNode"])("p",V," $"+Object(r["toDisplayString"])(e.$filters.currency(t.final_total)),1)]),Object(r["createElementVNode"])("td",N,[Object(r["createElementVNode"])("a",{href:"javascript:;",onClick:function(e){return y.requestDeleteCart(t.id)},class:"close"},E,8,g)])])})),128))])])):Object(r["createCommentVNode"])("",!0)]})),_:1})):Object(r["createCommentVNode"])("",!0),h.isReady?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Transition"],{key:1,name:"fade"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("div",x,k,512),[[r["vShow"],!h.num]])]})),_:1})):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("div",w,[B,Object(r["createElementVNode"])("div",S,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control text-danger fw-bold",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.coupon_code=e})},null,512),[[r["vModelText"],h.coupon_code]]),Object(r["createElementVNode"])("button",{class:"btn btn-secondary text-white",type:"button",onClick:t[2]||(t[2]=function(){return y.requestPostCoupon&&y.requestPostCoupon.apply(y,arguments)})}," 套用優惠碼 ")])]),Object(r["createElementVNode"])("div",D,[Object(r["createElementVNode"])("p",null,"總金額：$"+Object(r["toDisplayString"])(e.$filters.currency(h.cart.final_total))+" 元",1)])]),$,Object(r["createElementVNode"])("div",_,[Object(r["createVNode"])(F,{to:"/products",class:"btn btn-outline-secondary me-3 px-4"},{default:Object(r["withCtx"])((function(){return[L]})),_:1}),Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-danger px-4",onClick:t[3]||(t[3]=function(){return y.toNextStep&&y.toNextStep.apply(y,arguments)})}," 前往結帳 ")])])])])]),Object(r["createVNode"])(G)]),Object(r["createVNode"])(z)],64)}var I=c("1da1"),q=(c("96cf"),c("d3b7"),c("159b"),c("5378")),R=c("5c27"),F=c("ab44"),G=c("3bd5"),z=c("2166"),P=c("bc3a"),U=c.n(P),M=U.a.create({baseURL:"https://vue-course-api.hexschool.io/api/yunhsi"}),A=function(e){return M.post("/coupon",{data:e})},J={components:{Navbar:q["a"],CheckoutSteps:R["a"],Footer:F["a"],GoTop:G["a"]},data:function(){return{isLoading:!1,cart:[],coupon_code:"",num:0,isGetCoupon:localStorage.getItem("isGetCoupon"),isReady:!1}},mounted:function(){this.requestCarts()},methods:{requestCarts:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,Object(z["b"])();case 4:c=t.sent,c.data.success&&(e.cart=c.data.data,r=0,e.cart.carts.forEach((function(e){r+=e.qty})),e.num=r,"true"==e.isGetCoupon&&(e.coupon_code="happy99")),e.isLoading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"".concat(t.t0)});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},requestDeleteCart:function(e){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,t.isLoading=!0,c.next=4,Object(z["a"])(e);case 4:r=c.sent,r.data.success&&(t.requestCarts(),t.showSuccessMsg(r.data.message),t.$store.commit("addToCart")),t.isLoading=!1,c.next=12;break;case 9:c.prev=9,c.t0=c["catch"](0),t.$swal({icon:"error",title:"".concat(c.t0)});case 12:case"end":return c.stop()}}),c,null,[[0,9]])})))()},showSuccessMsg:function(e){this.$toast.add({severity:"success",summary:"訊息提示",detail:"".concat(e),life:1e3})},showErrorMsg:function(e){this.$toast.add({severity:"error",summary:"訊息提示",detail:"".concat(e),life:1e3})},clear:function(){this.$toast.removeAllGroups()},requestPostCoupon:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={code:e.coupon_code},t.prev=1,e.isLoading=!0,t.next=5,A({coupon:c});case 5:r=t.sent,r.data.success&&"happy99"==e.coupon_code?(localStorage.setItem("isGetCoupon",!0),e.requestCarts(),e.showSuccessMsg("已套用優惠券"),e.isLoading=!1):(e.showErrorMsg("找不到優惠券"),e.isLoading=!1),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$swal({icon:"error",title:"".concat(t.t0)});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},toNextStep:function(){this.num?this.$router.push("/order"):this.$swal({icon:"warning",title:"購物車內沒有商品",confirmButtonColor:"#636C74"})}},watch:{cart:function(){this.isReady=!0},num:function(){this.num||(localStorage.setItem("isGetCoupon",!1),this.coupon_code="")}}},H=(c("6533"),c("6b0d")),K=c.n(H);const Q=K()(J,[["render",T],["__scopeId","data-v-365780b4"]]);t["default"]=Q},a4bc:function(e,t,c){"use strict";c("e154")},a8e1:function(e,t,c){},ba5f:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a={"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-duration":"400","data-aos-delay":"500"},o={style:{"padding-top":"73px","min-height":"calc(100vh - 104px)"}},n={class:"container pt-4 pb-5"},s={class:"row pt-4"},l={class:"col-md-7"},d={class:"col-md-5"};function i(e,t,c,i,u,b){var m=Object(r["resolveComponent"])("loading"),p=Object(r["resolveComponent"])("Navbar"),O=Object(r["resolveComponent"])("CheckoutSteps"),j=Object(r["resolveComponent"])("OrderInfo"),f=Object(r["resolveComponent"])("PaymentInfo"),v=Object(r["resolveComponent"])("Footer"),V=Object(r["resolveComponent"])("GoTop");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(m,{active:u.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return u.isLoading=e})},null,8,["active"]),Object(r["createVNode"])(p,{rootClass:"page-navbar"}),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("main",o,[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(O,{step3Class:"active"}),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(j,{title:"訂單明細",order:u.order},null,8,["order"])]),Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(f,{id:b.id,order:u.order},null,8,["id","order"])])])])]),Object(r["createVNode"])(v)]),Object(r["createVNode"])(V)],64)}var u=c("1da1"),b=(c("96cf"),c("5378")),m=c("5c27"),p=c("99e9"),O=c("6639"),j=c("ab44"),f=c("3bd5"),v=c("f8b7"),V={components:{Navbar:b["a"],CheckoutSteps:m["a"],OrderInfo:p["a"],PaymentInfo:O["a"],Footer:j["a"],GoTop:f["a"]},data:function(){return{isLoading:!1,order:{}}},computed:{id:function(){return this.$route.params.orderId}},mounted:function(){this.requestOrder()},methods:{requestOrder:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,Object(v["a"])(e.id);case 4:c=t.sent,c.data.success&&(e.order=c.data.order),e.isLoading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"".concat(t.t0)});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},N=c("6b0d"),g=c.n(N);const h=g()(V,[["render",i]]);t["default"]=h},c419:function(e,t,c){"use strict";c("2bf3")},e154:function(e,t,c){}}]);
//# sourceMappingURL=front-checkout.8af04ceb.js.map
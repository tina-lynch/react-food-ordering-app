(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),s=(n(27),n(2)),r=n(1),i=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),u=n(10),j=n.n(u),m=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useContext)(d).items,u=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(r.useEffect)((function(){if(0!==i.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:u})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(16),x=n.n(O),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(18),h=n.n(f),_=function(){return Object(o.jsxs)("section",{className:h.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),N=n(12),y=n(19),g=n.n(y),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},k=n(5),w=n(20),I=n.n(w),S=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:I.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),M=n(21),F=n.n(M),P=function(e){var t=Object(r.useState)(!0),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(S,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),D=n.n(R),E=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:D.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:D.a.description,children:e.description}),Object(o.jsx)("div",{className:D.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(P,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(22),B=n.n(H),T=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(s.a)(a,2),l=i[0],d=i[1],u=Object(r.useState)(null),j=Object(s.a)(u,2),m=j[0],b=j[1],O=Object(r.useCallback)(Object(N.a)(C.a.mark((function e(){var t,n,a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),b(null),e.prev=2,e.next=5,fetch("https://react-http-f8d3b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,t.json();case 10:for(s in n=e.sent,a=[],n)a.push({id:s,name:n[s].name,description:n[s].description,price:n[s].price});c(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),b(e.t0.message);case 19:d(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);Object(r.useEffect)((function(){O()}),[O]);var x=n.map((function(e){return Object(o.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})),p=Object(o.jsx)("p",{children:"No Meals Found"});return l&&(p=Object(o.jsx)("p",{children:"Loading..."})),m&&(p=Object(o.jsx)("p",{children:m})),n.length>0&&(p=Object(o.jsx)("ul",{children:x})),Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:p})})},L=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(T,{})]})},q=n(14),z=n.n(q),J=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},U=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},V=document.getElementById("overlays"),Z=function(e){return Object(o.jsxs)(r.Fragment,{children:[a.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),V),a.a.createPortal(Object(o.jsx)(U,{children:e.children}),V)]})},Q=n(7),X=n.n(Q),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:X.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:X.a.summary,children:[Object(o.jsx)("span",{className:X.a.price,children:t}),Object(o.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(4),G=n.n($),K=n(3),W=n.n(K),ee=function(e){return""===e.trim()},te=function(e){var t=Object(r.useState)({name:!0,address:!0,city:!0,postCode:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useRef)(),u=Object(r.useRef)(),j="".concat(W.a.control," + ").concat(W.a.invalid);return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=l.current.value,s=d.current.value,r=u.current.value,o=!ee(n),j=!ee(c),m=!ee(s),b=5===r.trim().length;a({name:o,address:j,city:m,postCode:b}),m&&o&&j&&b&&e.onConfirm({name:n,address:c,city:s,postCode:r})},children:[Object(o.jsxs)("div",{className:c.name?W.a.control:j,children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(o.jsx)("p",{children:"Please enter name"})]}),Object(o.jsxs)("div",{className:c.address?W.a.control:j,children:[Object(o.jsx)("label",{children:"Address"}),Object(o.jsx)("input",{type:"text",id:"address",ref:l}),!c.address&&Object(o.jsx)("p",{children:"Please enter a valid  Address"})]}),Object(o.jsxs)("div",{className:c.postCode?W.a.control:j,children:[Object(o.jsx)("label",{children:"Postcode"}),Object(o.jsx)("input",{type:"text",id:"postcode",ref:u}),!c.postCode&&Object(o.jsx)("p",{children:"Please enter a valid Postcode (5 digits)"})]}),Object(o.jsxs)("div",{className:c.city?W.a.control:j,children:[Object(o.jsx)("label",{children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please enter a valid City"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel "}),Object(o.jsx)("button",{className:W.a.submit,disabled:!1,children:"Confirm"})]})]})},ne=function(e){var t=Object(r.useContext)(d),n=Object(r.useState)(!1),c=Object(s.a)(n,2),a=c[0],l=c[1],u=Object(r.useState)(!1),j=Object(s.a)(u,2),m=j[0],b=j[1],O=Object(r.useState)(!1),x=Object(s.a)(O,2),p=x[0],f=x[1],h="$".concat(t.totalAmount.toFixed(2)),_=t.items.length>0,v=function(e){t.removeItem(e)},y=function(e){t.addItem(e)},g=function(){var e=Object(N.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://react-http-f8d3b-default-rtdb.asia-southeast1.firebasedatabase.app/orders.js",{method:"POST",body:JSON.stringify({user:n,orderedItems:t.items})});case 3:b(!1),f(!0),t.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:G.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:y.bind(null,e)},e.id)}))}),k=Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{className:G.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:G.a.button,onClick:function(){l(!0)},children:"Order"})]}),w=Object(o.jsxs)(i.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:G.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:h})]}),!a&&k,a&&Object(o.jsx)(te,{onConfirm:g,onCancel:e.onClose})]}),I=Object(o.jsx)("p",{children:"Sending order..."}),S=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Order sent successfully!"}),Object(o.jsx)("div",{className:G.a.actions,children:Object(o.jsx)("button",{className:G.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Z,{onClose:e.onClose,children:[!m&&!p&&w,m&&I,!m&&p&&S]})},ce=n(17),ae={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),s=e.items[a];if(s){var r=Object(k.a)(Object(k.a)({},s),{},{amount:s.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=u}return{items:i,totalAmount:d}}return t.type,ae},re=function(e){var t=Object(r.useReducer)(se,ae),n=Object(s.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(d.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(re,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(p,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};a.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.1e04c034.chunk.js.map
(this.webpackJsonpsearchrecipe=this.webpackJsonpsearchrecipe||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),i=c.n(r),s=(c(12),c(5)),u=c.n(s),o=c(7),p=c(3),j=c(2),l=c.n(j),b=c(0),h=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(b.jsxs)("div",{className:l.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:l.a.image,src:n,alt:""})]})},d=(c(15),function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(p.a)(r,2),s=i[0],j=i[1],l=Object(n.useState)("salad"),d=Object(p.a)(l,2),f=d[0],m=d[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("221222af","&app_key=").concat("ce415398289a81b0f46e53a8a6c3b91d"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),j("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipe",children:c.map((function(e){return Object(b.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),f()},2:function(e,t,c){e.exports={recipe:"recipe_recipe__1SRqg",image:"recipe_image__1I7dC"}}},[[16,1,2]]]);
//# sourceMappingURL=main.a4ce3e9c.chunk.js.map
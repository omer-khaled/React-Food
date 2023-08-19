"use strict";(self.webpackChunkfood=self.webpackChunkfood||[]).push([[624],{8819:function(e,a,r){var s=r(1087),t=r(184);a.Z=function(e){var a=e.meal,r=a.strMeal,n=a.strMealThumb,c=a.idMeal;return(0,t.jsx)("div",{className:"col mb-3 ",children:(0,t.jsxs)("div",{className:"card mx-auto ",style:{width:"18rem"},children:[(0,t.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-title text-nowrap text-overflow w-100",children:r}),(0,t.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),(0,t.jsx)(s.rU,{to:"/React-Food/showmeal/".concat(c),className:"btn btn-primary",children:"More Details"})]})]})},c)}},5410:function(e,a,r){r.d(a,{Z:function(){return d}});var s=r(2791),t=r(9434),n=r(8819),c=r(184);var l=function(){var e=(0,t.v9)((function(e){return e.places})),a=e.plates;return{caseHandle:e.caseHandle,placesCards:(0,s.useMemo)((function(){return a?a.map((function(e){return(0,c.jsx)(n.Z,{meal:e},e.idMeal)})):(0,c.jsx)("div",{children:"Empty"})}),[a])}},i=r(8877),o=r(3951);var d=function(e){var a=e.url,r=e.query,n=(0,t.I0)(),d=l(),u=d.placesCards,x=d.caseHandle;return(0,s.useEffect)((function(){n((0,i.Y)({url:a,query:r}))}),[n,a,r]),(0,c.jsx)(o.Z,{loading:x,children:(0,c.jsx)("div",{className:"container mt-3",children:(0,c.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4",children:u})})})}},7624:function(e,a,r){r.r(a),r.d(a,{default:function(){return N}});var s=r(7920),t=r(5410),n=r(2791),c=r(4081),l=r(9434),i=r(1087),o=r(184);var d=function(){var e=(0,l.v9)((function(e){return e.categories})),a=e.categories,r=e.loading,s=(0,l.I0)();return(0,n.useEffect)((function(){s((0,c.C)({url:"https://www.themealdb.com/api/json/v1/1/list.php?c=list"}))}),[s]),{categoriesMap:(0,n.useMemo)((function(){return a?a.map((function(e,a){return(0,o.jsx)(i.rU,{to:"showcategories/".concat(e.strCategory),className:"carousel-item link-underlinless ".concat(!a&&"active"," mb-0"),children:(0,o.jsx)("p",{className:"text-center my-0",children:null===e||void 0===e?void 0:e.strCategory},a)},a)})):null}),[a]),loading:r}},u=r(3951);var x=function(){var e=d(),a=e.categoriesMap,r=e.loading;return(0,o.jsx)(u.Z,{loading:r,children:(0,o.jsx)("div",{className:"container my-3",children:(0,o.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide text-dark","data-bs-ride":"carousel",children:[(0,o.jsx)("div",{className:"carousel-inner",children:a}),(0,o.jsxs)("button",{className:"carousel-control-prev text-dark",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[(0,o.jsx)("span",{className:"carousel-control-prev-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Previous"})]}),(0,o.jsxs)("button",{className:"carousel-control-next text-dark",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[(0,o.jsx)("span",{className:"carousel-control-next-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Next"})]})]})})})},m=r(1060);var h=function(){var e=(0,l.v9)((function(e){return e.areas})),a=e.area,r=e.loading,s=(0,l.I0)();return(0,n.useEffect)((function(){s((0,m.a)({url:"https://www.themealdb.com/api/json/v1/1/list.php?a=list"}))}),[s]),{areasMap:(0,n.useMemo)((function(){return a?a.map((function(e,a){return(0,o.jsx)(i.rU,{to:"showArea/".concat(e.strArea),className:"carousel-item link-underlinless ".concat(!a&&"active"," mb-0"),children:(0,o.jsx)("p",{className:"text-center my-0",children:null===e||void 0===e?void 0:e.strArea},a)},a)})):null}),[a]),loading:r}};var p=function(){var e=h(),a=e.areasMap,r=e.loading;return(0,o.jsx)(u.Z,{loading:r,children:(0,o.jsx)("div",{className:"container my-3",children:(0,o.jsxs)("div",{id:"carouselExampleControls1",className:"carousel slide text-dark","data-bs-ride":"carousel",children:[(0,o.jsx)("div",{className:"carousel-inner",children:a}),(0,o.jsxs)("button",{className:"carousel-control-prev text-dark",type:"button","data-bs-target":"#carouselExampleControls1","data-bs-slide":"prev",children:[(0,o.jsx)("span",{className:"carousel-control-prev-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Previous"})]}),(0,o.jsxs)("button",{className:"carousel-control-next text-dark",type:"button","data-bs-target":"#carouselExampleControls1","data-bs-slide":"next",children:[(0,o.jsx)("span",{className:"carousel-control-next-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Next"})]})]})})})},v=r(7732);var j=function(){var e=(0,l.v9)((function(e){return e.ingradiantes})),a=e.ingradiantes,r=e.loading,s=(0,l.I0)();return(0,n.useEffect)((function(){s((0,v.X)({url:"https://www.themealdb.com/api/json/v1/1/list.php?i=list"}))}),[s]),{ingradianteMap:(0,n.useMemo)((function(){return a?a.map((function(e,a){return(0,o.jsxs)(i.rU,{to:"showingradiante/".concat(e.strIngredient),style:{width:"18rem"},className:"card p-2 mx-auto carousel-item link-underlinless ".concat(!a&&"active"," mb-0"),children:[(0,o.jsx)("h5",{className:"card-title text-center",children:null===e||void 0===e?void 0:e.strIngredient}),(0,o.jsx)("p",{className:"card-text  min-height-120",children:e.strDescription})]},null===e||void 0===e?void 0:e.idIngredient)})):null}),[a]),loading:r}};var f=function(){var e=j(),a=e.ingradianteMap,r=e.loading;return(0,o.jsx)(u.Z,{loading:r,children:(0,o.jsx)("div",{className:"container my-3",children:(0,o.jsxs)("div",{id:"carouselExampleControls2",className:"carousel slide text-dark","data-bs-ride":"carousel",children:[(0,o.jsx)("div",{className:"carousel-inner d-flex justifiy-content-center align-items-center",children:a}),(0,o.jsxs)("button",{className:"carousel-control-prev text-dark",type:"button","data-bs-target":"#carouselExampleControls2","data-bs-slide":"prev",children:[(0,o.jsx)("span",{className:"carousel-control-prev-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Previous"})]}),(0,o.jsxs)("button",{className:"carousel-control-next text-dark",type:"button","data-bs-target":"#carouselExampleControls2","data-bs-slide":"next",children:[(0,o.jsx)("span",{className:"carousel-control-next-icon text-dark","aria-hidden":"true"}),(0,o.jsx)("span",{className:"text-dark",children:"Next"})]})]})})})};var N=(0,s.Z)((function(){return(0,o.jsxs)("div",{className:"d-flex flex-column",children:[(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("p",{className:"mb-0 text-primary fs-5 ",children:"Categories"})}),(0,o.jsx)(x,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("p",{className:"mb-0 text-primary fs-5 ",children:"Areas"})}),(0,o.jsx)(p,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("hr",{})}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("p",{className:"mb-0 text-primary fs-5 ",children:"Ingradiante"})}),(0,o.jsx)(f,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("hr",{})}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("p",{className:"mb-0 text-primary fs-5",children:"Meals"})}),(0,o.jsx)(t.Z,{url:"https://www.themealdb.com/api/json/v1/1/filter.php",query:"c=Breakfast"})]})}))},3951:function(e,a,r){r.d(a,{Z:function(){return n}});var s=r(184);var t=function(){return(0,s.jsxs)("div",{className:"my-3 d-flex justifiy-content-center align-items-center flex-column",children:[(0,s.jsx)("h1",{children:"Oops!"}),(0,s.jsx)("p",{children:"Sorry, an unexpected error has occurred."}),(0,s.jsx)("p",{children:"Server Error 404"})]})};var n=function(e){var a=e.children,r=e.loading;return(0,s.jsx)(s.Fragment,{children:null!==r?r?a:(0,s.jsx)(t,{}):(0,s.jsx)("div",{className:"text-center w-100",children:"on loading"})})}},7920:function(e,a,r){r.d(a,{Z:function(){return c}});var s=r(9434),t=r(184);var n=function(){return(0,t.jsx)("div",{children:"Login..."})};var c=function(e){return function(){var a=(0,s.v9)((function(e){return e.auth})).loggin;return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(e,{}):(0,t.jsx)(n,{})})}}}}]);
//# sourceMappingURL=624.3232b6ed.chunk.js.map
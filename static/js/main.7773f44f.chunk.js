(this["webpackJsonpbuild-n-eat"]=this["webpackJsonpbuild-n-eat"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2GceD",BreadTop:"BurgerIngredient_BreadTop__1efXf",Seeds1:"BurgerIngredient_Seeds1__FOHZN",Seeds2:"BurgerIngredient_Seeds2__HR8LQ",Meat:"BurgerIngredient_Meat__2UuvB",Cheese:"BurgerIngredient_Cheese__p0yAX",Salad:"BurgerIngredient_Salad__16C7p",Bacon:"BurgerIngredient_Bacon__SCl__"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__38NE9",Open:"SideDrawer_Open__25-jN",Close:"SideDrawer_Close__3Pg3N",Logo:"SideDrawer_Logo__Bq0-g"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2tya7",Label:"BuildControl_Label__7FWmy",Less:"BuildControl_Less__3HzYN",More:"BuildControl_More__1SLzE"}},function(e,t,n){e.exports={Input:"Input_Input__2WEbV",Label:"Input_Label__2oxb2",InputElement:"Input_InputElement__1IwXx",Invalid:"Input_Invalid__2AByj"}},,,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__20T50",Logo:"Toolbar_Logo__3JWkJ",DesktopOnly:"Toolbar_DesktopOnly__1-B4W"}},function(e,t,n){e.exports={sec:"Home_sec__3QynE",inner:"Home_inner__3z31K"}},,function(e,t,n){e.exports={cont:"Burger_cont__Xsssf",Burger:"Burger_Burger__16CRR"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1k3EE",OrderButton:"BuildControls_OrderButton__3CcH7",enable:"BuildControls_enable__2Cnrn"}},function(e,t,n){e.exports={Button:"Button_Button__3SZDy",Success:"Button_Success__2h68R",Danger:"Button_Danger__1nQiH"}},function(e,t,n){e.exports={Load:"Spinner_Load__165WF",Loader:"Spinner_Loader__2jCkc",load2:"Spinner_load2__3wVVI"}},,,,function(e,t,n){e.exports={Order:"Order_Order__22Be-",OrderBg:"Order_OrderBg__2jgeS"}},function(e,t,n){e.exports={Auth:"Auth_Auth__12P50",Layot:"Auth_Layot__2y71o",Input:"Auth_Input__3fc1E"}},,,,,,,,,,,,function(e,t,n){e.exports={Modal:"Modal_Modal__2qLYi"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3CHB7"}},,function(e,t,n){e.exports=n.p+"static/media/Burger-Logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2HHb-"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3G3iW"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__y3-1O",active:"NavigationItem_active__3tzw-"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3NAyA"}},function(e,t,n){e.exports={Content:"Layout_Content__7-EKO"}},function(e,t,n){e.exports={errMsg:"BurgerBuilder_errMsg__3YISW"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummay_CheckoutSummary__26n4G",Burger:"CheckoutSummay_Burger___r5rK"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3KmE2",Input:"ContactData_Input__HLYwR"}},function(e,t,n){e.exports={orders:"Orders_orders__1ps5J"}},function(e,t,n){e.exports={Button:"Button_Button__2kWxg"}},,,function(e,t,n){e.exports=n(95)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),l=n.n(c),i=(n(69),n(1)),o=n(9),u=function(e){return e.children},d=n(63),s=n(28),m=n.n(s),g=n(11),p=n.n(g),E=function(e){var t=null;switch(e.types){case"bread-bottom":t=r.a.createElement("div",{className:p.a.BreadBottom}," ");break;case"bread-top":t=r.a.createElement("div",{className:p.a.BreadTop},r.a.createElement("div",{className:p.a.Seeds1}," "),r.a.createElement("div",{className:p.a.Seeds2}," "));break;case"meat":t=r.a.createElement("div",{className:p.a.Meat}," ");break;case"cheese":t=r.a.createElement("div",{className:p.a.Cheese}," ");break;case"salad":t=r.a.createElement("div",{className:p.a.Salad}," ");break;case"bacon":t=r.a.createElement("div",{className:p.a.Bacon}," ");break;default:t=null}return t},h=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(d.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(E,{key:t+n,types:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{className:m.a.cont},"Please start adding ingredients!")),r.a.createElement("div",{className:m.a.Burger},r.a.createElement(E,{types:"bread-top"}),t,r.a.createElement(E,{types:"bread-bottom"}))},f=n(29),b=n.n(f),_=n(19),v=n.n(_),O=function(e){return r.a.createElement("div",{className:v.a.BuildControl},r.a.createElement("div",{className:v.a.Label},e.label),r.a.createElement("button",{className:v.a.Less,onClick:e.removed,disabled:e.disable},"LESS"),r.a.createElement("button",{className:v.a.More,onClick:e.added},"MORE"))},C=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],y=function(e){return r.a.createElement("div",{className:b.a.BuildControls},r.a.createElement("p",null,"CURRENT PRICE : ",r.a.createElement("strong",null," ",e.price.toFixed(2),"$")),C.map((function(t){return r.a.createElement(O,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disable:e.disabled[t.type]})})),r.a.createElement("button",{className:b.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"PLEASE SIGNIN FIRST"))},S=n(48),I=n.n(S),j=n(49),T=n.n(j),k=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}," "):null},B=r.a.memo((function(e){return r.a.createElement(u,null,r.a.createElement(k,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:I.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),(function(e,t){return e.show===t.show&&e.children===t.childern})),N=n(30),R=n.n(N),A=function(e){return r.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:[R.a.Button,R.a[e.btnType]].join(" ")},e.children)},D=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return r.a.createElement(u,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null," Toatal Price: ",e.price.toFixed(2),"$")),r.a.createElement("p",{style:{marginBottom:0}},"Continue to checkout?"),r.a.createElement(A,{btnType:"Danger",clicked:e.purchaseCancel},"CANCEL"),r.a.createElement(A,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},L=n(24),x=n.n(L),w=x.a.create({baseURL:"https://react-burgerbuilder-55.firebaseio.com/"}),H=n(31),U=n.n(H),P=function(){return r.a.createElement("div",{className:U.a.Load},r.a.createElement("div",{className:U.a.Loader},"Loading..."))},F=function(e,t){return function(n){var c=Object(a.useState)(null),l=Object(o.a)(c,2),i=l[0],d=l[1],s=t.interceptors.request.use((function(e){return d(null),e})),m=t.interceptors.response.use((function(e){return e}),(function(e){d(e)}));Object(a.useEffect)((function(){return function(){t.interceptors.request.eject(s),t.interceptors.response.eject(m)}}),[s,m]);return r.a.createElement(u,null,r.a.createElement(B,{show:i,modalClosed:function(){d(null)}},i?i.message:null),r.a.createElement(e,n))}},G=n(3),M="AIzaSyBsMLCpC4BhrfB0KBy99RScSXjiAtu0vmk",z=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},W=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},q=function(e){return function(t){setTimeout((function(){t(W())}),1e3*e)}},V=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Y=n(25),J=n.n(Y),K=n(51),X=n.n(K),$=n(52),Q=n.n($),Z=function(e){return r.a.createElement("div",{className:Q.a.Logo},r.a.createElement("img",{src:X.a,alt:"MyBurger"}))},ee=n(53),te=n.n(ee),ne=n(54),ae=n.n(ne),re=n(13),ce=function(e){return r.a.createElement("li",{className:ae.a.NavigationItem},r.a.createElement(re.b,{to:e.link,exact:!0,activeClassName:"active"}," ",e.children))},le=function(e){return r.a.createElement("ul",{className:te.a.NavigationItems},r.a.createElement(ce,{link:"/"},"Home"),r.a.createElement(ce,{link:"/build"},"Burger Builder"),e.isAuthenticated?r.a.createElement(ce,{link:"/Orders"}," My Orders"):null,e.isAuthenticated?r.a.createElement(ce,{link:"/logout"}," LogOut"):r.a.createElement(ce,{link:"/auth"}," Authenticate"))},ie=n(55),oe=n.n(ie),ue=function(e){return r.a.createElement("div",{className:oe.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},de=function(e){return r.a.createElement("header",{className:J.a.Toolbar},r.a.createElement(ue,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:J.a.Logo},r.a.createElement(Z,null)),r.a.createElement("nav",{className:J.a.DesktopOnly},r.a.createElement(le,{isAuthenticated:e.isAuth})))},se=n(16),me=n.n(se),ge=function(e){var t=[me.a.SideDrawer,me.a.Close];return e.open&&(t=[me.a.SideDrawer,me.a.Open]),r.a.createElement(u,null,r.a.createElement(k,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("div",{className:me.a.Logo},r.a.createElement(Z,null)),r.a.createElement("nav",null,r.a.createElement(le,{isAuthenticated:e.isAuth}))))},pe=n(56),Ee=n.n(pe),he=Object(G.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement(u,null,r.a.createElement(de,{isAuth:e.isAuthenticated,drawerToggleClicked:function(){l(!c)}}),r.a.createElement(ge,{isAuth:e.isAuthenticated,open:c,closed:function(){l(!1)}}),r.a.createElement("main",{className:Ee.a.Content},e.children," "))})),fe=n(57),be=n.n(fe),_e=Object(G.b)((function(e){return{ings:e.burgerBuilder.ingredients,ttlPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuth:null!==e.auth.token}}),(function(e){return{addIngredientHandler:function(t){return e({type:"ADD_INGREDIENT",ingredient:t})},removeIngredientHandler:function(t){return e({type:"REMOVE_INGREDIENT",ingredient:t})},initIngredientsHandler:function(){return e((function(e){w.get("https://react-burgerbuilder-55.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},initPurchaseHandler:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(V(t))}}}))(F((function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],l=n[1],d=e.initIngredientsHandler;Object(a.useEffect)((function(){d()}),[d]);var s=function(){l(!1)},m=Object(i.a)({},e.ings);for(var g in m)m[g]=m[g]<=0;var p,E=e.error?r.a.createElement("div",{className:be.a.errMsg},r.a.createElement("p",null,"Sorry"," ",r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude41"),", could not load ingredients!")):r.a.createElement(P,null),f=null;return e.ings&&(E=r.a.createElement(u,null,r.a.createElement(h,{ingredients:e.ings}),r.a.createElement(y,{ingredientAdded:e.addIngredientHandler,ingredientRemoved:e.removeIngredientHandler,disabled:m,purchasable:(p=e.ings,Object.keys(p).map((function(e){return p[e]})).reduce((function(e,t){return e+t}),0)>0),ordered:function(){e.isAuth?l(!0):(e.onSetAuthRedirectPath("/checkout"),e.history.push("/auth"))},isAuth:e.isAuth,price:e.ttlPrice})),f=r.a.createElement(D,{ingredients:e.ings,price:e.ttlPrice,purchaseCancel:s,purchaseContinue:function(){e.initPurchaseHandler(),e.history.push("/checkout")}})),r.a.createElement(u,null,r.a.createElement(he,null,r.a.createElement(B,{show:c,modalClosed:s},f),E))}),w)),ve=n(58),Oe=n.n(ve),Ce=function(e){return r.a.createElement("div",{className:Oe.a.CheckoutSummary},r.a.createElement("h2",null,"We hope it tastes good!!"),r.a.createElement("div",null,r.a.createElement(h,{ingredients:e.ingredients})),r.a.createElement(A,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(A,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},ye=n(59),Se=n.n(ye),Ie=n(20),je=n.n(Ie),Te=function(e){var t=null,n=[je.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(je.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}))," ");break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:je.a.Input},r.a.createElement("label",{className:je.a.Label},e.label),t)},ke=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}return t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},Be=(n(92),Object(G.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),w.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n({type:"PURCHASE_BURGER_FAILURE",error:e})}))}}(t,n))}}}))(F((function(e){var t=Object(a.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZipCode"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your e-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"Fastest",displayValue:"Fastest"},{value:"Cheapest",displayValue:"Cheapest"}]},validation:{},valid:!0,value:"Cheapest",touched:!1}}),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(!1),d=Object(o.a)(u,2),s=d[0],m=d[1],g=[];for(var p in c)g.push({id:p,config:c[p]});var E=r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={};for(var a in c)n[a]=c[a].value;var r={ingredients:e.ings,price:e.price,orderData:n,userId:e.userId};e.onOrderBurger(r,e.token)}},r.a.createElement("h4",null,"Enter your Data"),g.map((function(e){return r.a.createElement(Te,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var n=Object(i.a)({},c),a=Object(i.a)({},n[t]);a.value=e.target.value,a.valid=ke(a.value,a.validation),a.touched=!0,n[t]=a;var r=!0;for(var o in n)r=n[o].valid&&r;l(n),m(r)}(t,e.id)}})})),r.a.createElement(A,{btnType:"Success",disabled:!s},"ORDER"));return e.loading&&(E=r.a.createElement(P,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Se.a.ContactData},E))}),w))),Ne=n(4),Re=Object(G.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))((function(e){var t=r.a.createElement(Ne.a,{to:"/build"});if(e.ings){var n=e.purchased?r.a.createElement(Ne.a,{to:"/build"}):null;t=r.a.createElement("div",null,n,r.a.createElement(Ce,{ingredients:e.ings,checkoutCancelled:function(){e.history.goBack()},checkoutContinued:function(){e.history.replace(e.match.url+"/contact-data")}}),r.a.createElement(Ne.b,{path:e.match.url+"/contact-data",component:Be}))}return r.a.createElement(he,null,t)})),Ae=n(35),De=n.n(Ae),Le=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",fontWeight:"500",margin:"3px 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name+" ","(",e.amount,")")}));return r.a.createElement("div",{className:De.a.OrderBg},r.a.createElement("div",{className:De.a.Order},r.a.createElement("p",null," INGREDIENTS : ",a),r.a.createElement("p",null,"PRICE :",r.a.createElement("strong",null," "+Number.parseFloat(e.price).toFixed(2)))))},xe=n(60),we=n.n(xe),He=F((function(e){var t=Object(G.c)(),n=Object(a.useCallback)((function(e,n){return t(function(e,t){return function(n,a){n({type:"FETCH_ORDERS_START"});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';w.get("/orders.json"+r).then((function(e){var t=[];for(var a in e.data)t.push(Object(i.a)(Object(i.a)({},e.data[a]),{},{id:a}));n(function(e){return{type:"FETCH_ORDERS_SUCCESS",orders:e}}(t))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAILURE",error:e}}(e))}))}}(e,n))}),[t]),c=Object(G.d)((function(e){return e.order.orders})),l=Object(G.d)((function(e){return e.order.loading})),o=Object(G.d)((function(e){return e.auth.token})),u=Object(G.d)((function(e){return e.auth.userId}));Object(a.useEffect)((function(){n(o,u)}),[n,o,u]);var d=r.a.createElement(P,null);return l||(d=c.map((function(e){return r.a.createElement(Le,{key:e.id,ingredients:e.ingredients,price:e.price})}))),r.a.createElement(he,null,r.a.createElement("div",{className:we.a.orders},d))}),w),Ue=n(14),Pe=n(36),Fe=n.n(Pe),Ge=Object(G.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,buildingBurger:e.burgerBuilder,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},c=" https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(M);n||(c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(M)),x.a.post(c,r).then((function(e){localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("expirationDate",t),a(z(e.data.idToken,e.data.localId)),a(q(e.data.expiresIn))})).catch((function(e){a(function(e){return{type:"AUTH_FAILED",error:e}}(e.response.data.error))}))}}(t,n,a))},onSetRedirectAuthPath:function(){return e(V("/"))}}}))((function(e){var t=Object(a.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your e-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(!0),d=Object(o.a)(u,2),s=d[0],m=d[1],g=e.buildingBurger,p=e.authRedirectPath,E=e.setAuthRedirectPath;Object(a.useEffect)((function(){g||"/"===p||E()}),[g,p,E]);var h=[];for(var f in c)h.push({id:f,config:c[f]});var b=h.map((function(e){return r.a.createElement(Te,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var n=Object(i.a)(Object(i.a)({},c),{},Object(Ue.a)({},t,Object(i.a)(Object(i.a)({},c[t]),{},{value:e.target.value,valid:ke(e.target.value,c[t].validation),touched:!0})));l(n)}(t,e.id)}})}));e.loading&&(b=r.a.createElement(P,{style:{margin:"20px auto"}}));var _=null;e.error&&(_=r.a.createElement("p",{style:{color:"red"}}," ",e.error.message));var v=null;return e.isAuth&&(v=r.a.createElement(Ne.a,{to:e.authRedirectPath})),r.a.createElement(he,null,r.a.createElement("div",{className:Fe.a.Layot},r.a.createElement("div",{className:Fe.a.Auth},v,_,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAuth(c.email.value,c.password.value,s)}},b,r.a.createElement(A,{btnType:"Success"},"SUBMIT")),r.a.createElement(A,{clicked:function(){m(!s)},btnType:"Danger"},"SWITCH TO ",s?"SIGNIN":"SIGNUP"," "))))})),Me=Object(G.b)(null,(function(e){return{logout:function(){return e(W())}}}))((function(e){var t=e.logout;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement(he,null,r.a.createElement(Ne.a,{to:"/build"}))})),ze=n(61),We=n.n(ze),qe=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:We.a.Button,onClick:e.clicked},e.children))},Ve=n(26),Ye=n.n(Ve),Je=function(e){return r.a.createElement("div",{className:Ye.a.home},r.a.createElement("section",{className:Ye.a.sec},r.a.createElement("div",{className:Ye.a.inner},r.a.createElement("h1",null,"Build N Eat ",r.a.createElement("span",null,"\ud83c\udf7d")),r.a.createElement("p",null,"Choose your favourite ingredients to make a delicious Burger!"),r.a.createElement(qe,{clicked:function(){e.history.push("/build")}},"Start Building"))))},Ke=Object(Ne.g)(Object(G.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("userId");if(t){var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(W()):(e(z(t,n)),e(q((a.getTime()-(new Date).getTime())/1e3)))}else e(W())}))}}}))((function(e){var t=e.onTryAutoSignup;Object(a.useEffect)((function(){t()}),[t]);var n=r.a.createElement(Ne.d,null,r.a.createElement(Ne.b,{path:"/",exact:!0,component:Je}),r.a.createElement(Ne.b,{path:"/auth",component:Ge}),r.a.createElement(Ne.b,{path:"/build",exact:!0,component:_e}),r.a.createElement(Ne.a,{to:"/"}));return e.isAuth&&(n=r.a.createElement(Ne.d,null,r.a.createElement(Ne.b,{path:"/checkout",component:Re}),r.a.createElement(Ne.b,{path:"/Orders",component:He}),r.a.createElement(Ne.b,{path:"/auth",component:Ge}),r.a.createElement(Ne.b,{path:"/logout",component:Me}),r.a.createElement(Ne.b,{path:"/build",exact:!0,component:_e}),r.a.createElement(Ne.b,{path:"/",exact:!0,component:Je}))),r.a.createElement("div",null,n)}))),Xe=n(62);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=n(15),Qe={ingredients:null,totalPrice:4,error:!1,building:!1},Ze={bacon:.7,salad:.5,cheese:.4,meat:1.3},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(i.a)(Object(i.a)({},e),{},{ingredients:Object(i.a)(Object(i.a)({},e.ingredients),{},Object(Ue.a)({},t.ingredient,e.ingredients[t.ingredient]+1)),totalPrice:e.totalPrice+Ze[t.ingredient],building:!0});case"REMOVE_INGREDIENT":return Object(i.a)(Object(i.a)({},e),{},{ingredients:Object(i.a)(Object(i.a)({},e.ingredients),{},Object(Ue.a)({},t.ingredient,e.ingredients[t.ingredient]-1)),totalPrice:e.totalPrice-Ze[t.ingredient],building:!0});case"SET_INGREDIENTS":return Object(i.a)(Object(i.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1});case"FETCH_INGREDIENTS_FAILED":return Object(i.a)(Object(i.a)({},e),{},{error:!0});default:return e}},tt={orders:[],loading:!1,purchased:!1},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Object(i.a)(Object(i.a)({},e),{},{purchased:!1});case"PURCHASE_BURGER_START":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Object(i.a)(Object(i.a)({},t.orderData),{},{id:t.orderId});return Object(i.a)(Object(i.a)({},e),{},{orders:e.orders.concat(n),loading:!1,purchased:!0});case"PURCHASE_BURGER_FAILURE":return Object(i.a)(Object(i.a)({},e),{},{loading:!1});case"FETCH_ORDERS_START":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(i.a)(Object(i.a)({},e),{},{loading:!1});default:return e}},at={userId:null,token:null,loading:!1,error:null,authRedirectPath:"/build"},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Object(i.a)(Object(i.a)({},e),{},{loading:!0,error:null});case"AUTH_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{userId:t.userId,token:t.idToken,loading:!1,error:null});case"AUTH_FAILED":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:t.error});case"AUTH_LOGOUT":return Object(i.a)(Object(i.a)({},e),{},{userId:null,token:null,loading:!1,error:null});case"SET_AUTH_REDIRECT_PATH":return Object(i.a)(Object(i.a)({},e),{},{authRedirectPath:t.path});default:return e}},ct=$e.d,lt=Object($e.c)({burgerBuilder:et,order:nt,auth:rt}),it=Object($e.e)(lt,ct(Object($e.a)(Xe.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G.a,{store:it},r.a.createElement(re.a,null,r.a.createElement(Ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[64,1,2]]]);
//# sourceMappingURL=main.7773f44f.chunk.js.map
(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),c=a.n(r),l=a(9),s=(a(34),a(7)),o=a(8),m=a(11),p=a(10),u=a(12),b=a(14),g=a.n(b);a(35),a(38);g.a.initializeApp({apiKey:"AIzaSyC9dJgpvpFv0OsLFlHjv-j2b9HF2c_NYQY",authDomain:"learning-249bd.firebaseapp.com",databaseURL:"https://learning-249bd.firebaseio.com",projectId:"learning-249bd",storageBucket:"learning-249bd.appspot.com",messagingSenderId:"559599719397",appId:"1:559599719397:web:2cfe39ceb6e6e04c75d50c",measurementId:"G-33FZGV4B6B"});var d=g.a.auth(),h=(g.a.firestore(),new g.a.auth.GoogleAuthProvider);h.setCustomParameters({prompt:"select_account"});var f=function(){d.signInWithPopup(h)},v=(g.a,a(40),a(6)),k=(a(41),Object(u.e)((function(e){var t=e.title,a=e.imageUrl,n=e.size,r=e.history,c=e.linkUrl,l=e.match;return i.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return r.push("".concat(l.url).concat(c))}},i.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"title"},t.toUpperCase()),i.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),E=(a(50),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:""},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:""},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:""},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:""}]},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return i.a.createElement(k,Object.assign({key:t},a))})))}}]),a}(i.a.Component)),U=(a(51),function(){return i.a.createElement("div",{className:"homepage"},i.a.createElement(E,null))}),y=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],w=(a(52),function(e){e.id;var t=e.name,a=e.price,n=e.imageUrl;return i.a.createElement("div",{className:"collection-item"},i.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),i.a.createElement("div",{className:"collection-footer"},i.a.createElement("span",{className:"name"},t),i.a.createElement("span",{className:"price"},a)))}),j=(a(53),function(e){var t=e.title,a=e.items;return i.a.createElement("div",{className:"collection-preview"},i.a.createElement("h1",{className:"title"},t.toUpperCase()),i.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return i.a.createElement(w,Object.assign({key:t},a))}))))}),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={collections:y},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.collections;return i.a.createElement("div",{className:"shop-page"},e.map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return i.a.createElement(j,Object.assign({key:t},a))})))}}]),a}(i.a.Component),N=a(28),B=(a(54),function(e){var t=e.handleChange,a=e.label,n=Object(v.a)(e,["handleChange","label"]);return i.a.createElement("div",{className:"group"},i.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?i.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),C=(a(55),function(e){var t=e.children,a=Object(v.a)(e,["children"]);return i.a.createElement("button",Object.assign({className:"custom-button"},a),t)}),S=(a(56),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,a=t.value,i=t.name;n.setState(Object(N.a)({},i,a))},n.state={email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sign-in"},i.a.createElement("h2",null,"I already have an account"),i.a.createElement("span",null,"Sign in with your email and password"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(B,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),i.a.createElement(B,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),i.a.createElement(C,{type:"submit"}," Sign in ")," ",i.a.createElement(C,{onClick:f},"Sign in With Google")))}}]),a}(i.a.Component)),J=(a(57),function(){return i.a.createElement("div",{className:"sign-in-and-sign-up"},i.a.createElement(S,null))});function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var P=i.a.createElement("title",null,"Group"),A=i.a.createElement("desc",null,"Created with Sketch."),F=i.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},i.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},i.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),i.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),i.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),i.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),i.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),x=function(e){var t=e.svgRef,a=e.title,n=W(e,["svgRef","title"]);return i.a.createElement("svg",T({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?P:a?i.a.createElement("title",null,a):null,A,F)},R=i.a.forwardRef((function(e,t){return i.a.createElement(x,T({svgRef:t},e))})),G=(a.p,a(58),function(){return i.a.createElement("div",{className:"header"},i.a.createElement(l.b,{className:"logo-container",to:"/"},i.a.createElement(R,{className:"logo"})),i.a.createElement("div",{className:"options"},i.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),i.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT")))}),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=d.onAuthStateChanged((function(t){e.setState({currentUser:t}),console.log(t)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(G,null),i.a.createElement(u.c,null,i.a.createElement(u.a,{exact:!0,path:"/",component:U}),i.a.createElement(u.a,{path:"/shop",component:O}),i.a.createElement(u.a,{path:"/signin",component:J})))}}]),a}(i.a.Component);c.a.render(i.a.createElement(l.a,null,i.a.createElement(M,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8fd20555.chunk.js.map
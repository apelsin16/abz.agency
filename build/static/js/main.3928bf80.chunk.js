(this["webpackJsonpabz.agency"]=this["webpackJsonpabz.agency"]||[]).push([[0],Array(48).concat([function(e,t,a){e.exports=a.p+"static/media/logo.10919850.svg"},function(e,t,a){e.exports=a.p+"static/media/line-menu.3b500131.svg"},function(e,t,a){e.exports=a.p+"static/media/sign-out.a9a773c4.svg"},,function(e,t,a){e.exports=a.p+"static/media/man-mobile.2afa7771.svg"},function(e,t,a){e.exports=a.p+"static/media/html.d882d855.svg"},function(e,t,a){e.exports=a.p+"static/media/css.29637879.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.cf53a810.svg"},function(e,t,a){e.exports=a.p+"static/media/man-laptop-v1.3cdf7897.svg"},function(e,t,a){e.exports=a.p+"static/media/man-laptop-v2.1097427c.svg"},,function(e,t,a){e.exports=a.p+"static/media/logo.4b806a4c.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.1b272018.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.569eb74a.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.f263dbf1.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.3e993ec3.svg"},function(e,t,a){e.exports=a.p+"static/media/pinterest.603e7eb0.svg"},,,,,function(e,t,a){e.exports=a(115)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(4),r=a.n(l),i=(a(74),a(75),a(29)),c=a(19),o=a(20),m=a(23),u=a(21),p=a(24),h=a(17),_=a.n(h),f=a(66),d=(a(93),a(94),a(48)),E=a.n(d),g=a(49),b=a.n(g),v=(a(95),function(e){var t=e.user;return s.a.createElement("div",{className:"menu menu--mobile",id:"menu"},s.a.createElement("div",{className:"user"},s.a.createElement("img",{src:t.photo,alt:"avatar",srcSet:"".concat(t.photo," 2x"),className:"user__avatar"}),s.a.createElement("p",{className:"user__name"},t.name),s.a.createElement("p",{className:"user__mail"},t.email)),s.a.createElement("nav",{className:"nav nav--top"},s.a.createElement("ul",{className:"nav__list list"},s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#acquaintance",onClick:e.handleDrawerToggle},"About me")),s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#relationship",onClick:e.handleDrawerToggle},"Relationships")),s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#requirement",onClick:e.handleDrawerToggle},"Requirements")),s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#users",onClick:e.handleDrawerToggle},"Users")),s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#registration",onClick:e.handleDrawerToggle},"Sign Up")),s.a.createElement("li",{className:"list__item"},s.a.createElement("a",{href:"#registration",onClick:e.handleDrawerToggle}," Sign Out")))))}),N=a(138),y=function(e){var t=e.type;return s.a.createElement("img",{src:t,alt:"icon"})},w=a(50),k=a.n(w),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={drawerOpen:!1,user:{}},a.handleDrawerToggle=function(){a.setState({drawerOpen:!a.state.drawerOpen})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/users/1").then((function(t){var a=t.data;200===t.status&&e.setState({user:a.user})}))}},{key:"render",value:function(){var e=this.state.user;return s.a.createElement("header",{className:"header",id:"abz"},s.a.createElement("div",{className:"header__top"},s.a.createElement("a",{href:"#abz",className:"logo-link",rel:"noopener noreferrer"},s.a.createElement("img",{src:E.a,alt:"Logo"})),s.a.createElement("button",{className:"menu-button",onClick:this.handleDrawerToggle},s.a.createElement(y,{type:b.a})),s.a.createElement("nav",{className:"header__nav nav"},s.a.createElement("ul",{className:"nav__list nav__list--top"},s.a.createElement("li",null,s.a.createElement("a",{href:"#acquaintance"},"About me")),s.a.createElement("li",null,s.a.createElement("a",{href:"#relationship"},"Relationships")),s.a.createElement("li",null,s.a.createElement("a",{href:"#requirement"},"Requirements")),s.a.createElement("li",null,s.a.createElement("a",{href:"#users"},"Users")),s.a.createElement("li",null,s.a.createElement("a",{href:"#registration"},"Sign Up")))),s.a.createElement("div",{className:"user-account"},s.a.createElement("div",null,s.a.createElement("p",{className:"user-account__name"},e.name),s.a.createElement("p",{className:"user-account__email"},e.email)),s.a.createElement("img",{src:e.photo,alt:"user",className:"user-account__photo"}),s.a.createElement("button",{className:"user-account__button"},s.a.createElement(y,{type:k.a})))),s.a.createElement(N.a,{open:this.state.drawerOpen,onClose:this.handleDrawerToggle},s.a.createElement(v,{user:e,handleDrawerToggle:this.handleDrawerToggle})))}}]),t}(s.a.Component),O=(a(100),function(){return s.a.createElement("section",{className:"banner"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",{className:"banner__title"},"Test assignment for Frontend Developer position"),s.a.createElement("p",{className:"banner__text"},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"),s.a.createElement("p",{className:"banner__text banner__text--short"},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. "),s.a.createElement("a",{href:"#registration",className:"banner__button"},"Sign Up")))}),S=(a(101),a(52)),C=a.n(S),j=function(){return s.a.createElement("section",{className:"section acquaintance",id:"acquaintance"},s.a.createElement("h2",{className:"section__title acquaintance__title"},"Let's get acquainted"),s.a.createElement("div",{className:"block"},s.a.createElement("div",{className:"block__img"},s.a.createElement("img",{src:C.a,alt:"man with mobile",className:"section__img acquaintance__img"})),s.a.createElement("div",{className:"block__info"},s.a.createElement("h3",{className:"section__subtitle acquaintance__subtitle"},"I am cool frontend developer"),s.a.createElement("p",{className:"section__text acquaintance__text"},"When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load."),s.a.createElement("p",{className:"section__text acquaintance__text"},"Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."),s.a.createElement("a",{href:"#registration",className:"section__link acquaintance__link"},"Sign Up"))))},q=(a(102),a(103),function(e){var t=e.img,a=e.title,n=e.text,l=e.altImg;return s.a.createElement("article",{className:"article"},s.a.createElement("img",{src:t,alt:l,className:"article__img section__img"}),s.a.createElement("div",null,s.a.createElement("h3",{className:"article__title section__subtitle"},a),s.a.createElement("p",{className:"article__text section__text"},n)))}),M=a(53),T=a.n(M),U=a(54),D=a.n(U),A=a(55),z=a.n(A),P=function(){return s.a.createElement("section",{className:"section relationship",id:"relationship"},s.a.createElement("h2",{className:"section__title relationship__title"},"About my relationships with web-development"),s.a.createElement("div",{className:"articles"},s.a.createElement(q,{img:T.a,title:"I'm in love with HTML",text:"Hypertext Markup Language (HTML)\r is the standard markup language for creating web pages and web applications.",altImg:"sign HTML"}),s.a.createElement(q,{img:D.a,altImg:"sign css",text:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",title:"CSS is my best friend"}),s.a.createElement(q,{img:z.a,altImg:"sign js",text:"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",title:"JavaScript is my passion"})))},I=(a(104),a(56)),L=a.n(I),R=a(57),H=a.n(R),J=function(){return s.a.createElement("section",{className:"section requirement",id:"requirement"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("h2",{className:"section__title requirement__title"},"General requirements for the test task"),s.a.createElement("div",{className:"block requirement__block"},s.a.createElement("img",{src:L.a,alt:"Man with laptop",className:"section__img requirement__img"}),s.a.createElement("img",{src:H.a,alt:"Man with laptop",className:"section__img requirement__img requirement__img--v2"}),s.a.createElement("div",null,s.a.createElement("p",{className:"section__text requirement__text"},"Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too."),s.a.createElement("p",{className:"section__text requirement__text"},"If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics."),s.a.createElement("p",{className:"section__text requirement__text"},"Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.")))))},F=(a(105),a(106),a(139)),W=(a(107),function(e){var t=e.name,a=e.photo,n=e.email,l=e.phone,r=e.position;return s.a.createElement("li",{className:"users__item"},s.a.createElement("img",{src:a,alt:"user",className:"user__img",srcSet:a}),s.a.createElement("div",null,s.a.createElement("h3",{className:"user__name"},t),s.a.createElement(F.a,{title:r},s.a.createElement("p",{className:"user__position"},r)),s.a.createElement(F.a,{title:n},s.a.createElement("p",{className:"user__email"},n)),s.a.createElement(F.a,{title:l},s.a.createElement("p",{className:"user__tel"},l))))}),G=function(e){return s.a.createElement("ul",{className:"user-list"},e.users.map((function(e){return s.a.createElement(W,Object.assign({key:e.id},e))})))},B=(a(109),function(e){var t=e.styleName,a=e.click,n=e.text;return s.a.createElement("button",{className:t,onClick:a},n)}),Y=function(e){return s.a.createElement("section",{className:"section users",id:"users"},s.a.createElement("h2",{className:"section__title users__title"},"Our cheerful users"),s.a.createElement("p",{className:"section__text users__text"},"Attention! Sorting users by registration date"),s.a.createElement(G,e),e.showMore?s.a.createElement(B,{text:"Show more",styleName:"users__button",click:e.showMoreUsers}):null)},K=(a(110),a(37));a(111);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(K.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $={image:"",position:"",name:"",tel:"",email:""},V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state=X({},$),a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(K.a)({},t,n))},a.fileInputChange=function(e){a.setState({image:e.target.files[0]})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,s=t.tel,l=t.email,r=t.position,i=t.image;a.props.onAddUser({email:l,name:n,phone:s,photo:i,position_id:r}),a.setState(X({},$))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.positions;return s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-block"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,placeholder:"Your name"})),s.a.createElement("div",{className:"input-block"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"email",name:"email",onChange:this.handleChange,placeholder:"Your email"})),s.a.createElement("div",{className:"input-block"},s.a.createElement("label",null,"Phone"),s.a.createElement("input",{type:"tel",name:"tel",onChange:this.handleChange,placeholder:"+38 (___) ___ __ __",pattern:"^[\\+]{0,1}380([0-9]{9})$"})),s.a.createElement("select",{name:"position",onChange:this.handleChange,placeholder:"+38 (___) ___ __ __"},s.a.createElement("option",{value:""},"Select your position"),e.map((function(e){return s.a.createElement("option",{key:e.id,value:e.id},e.name)}))),s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("input",{type:"file",id:"file",className:"inputfile",onChange:this.fileInputChange}),s.a.createElement("label",{htmlFor:"file"},"Upload your photo")),s.a.createElement("p",{className:"upload__text"},"File format jpg  up to 5 MB, the minimum size of 70x70px"),s.a.createElement("button",{className:"form__button",type:"submit"},"Sign Up"))}}]),t}(s.a.Component),Z=function(e){return s.a.createElement("section",{className:"section registration",id:"registration"},s.a.createElement("h2",{className:"section__title registration__title"},"Register to get a work"),s.a.createElement("p",{className:"section__text registration__text"},"Attention! After successful registration and alert, update the list of users in the block from the top"),s.a.createElement(V,e))},ee=(a(112),a(59)),te=a.n(ee),ae=(a(113),function(){return s.a.createElement("div",{className:"menu menu--mobile menu--footer",id:"menu-footer"},s.a.createElement("nav",{className:"nav nav--footer"},s.a.createElement("ul",{className:"nav__list list nav__list--bottom"},s.a.createElement("li",{className:"list__item list__item--bottom"},s.a.createElement("a",{href:"#acquaintance"},"About me")),s.a.createElement("li",{className:"list__item list__item--bottom"},s.a.createElement("a",{href:"#relationship"},"Relationships")),s.a.createElement("li",{className:"list__item list__item--bottom"},s.a.createElement("a",{href:"#requirement"},"Requirements")),s.a.createElement("li",{className:"list__item list__item--bottom"},s.a.createElement("a",{href:"#users"},"Users")),s.a.createElement("li",{className:"list__item list__item--bottom"},s.a.createElement("a",{href:"#registration"},"Sign Up")))))}),ne=(a(114),function(){return s.a.createElement("div",{className:"contacts"},s.a.createElement("p",{className:"email"},"work.of.future@gmail.com"),s.a.createElement("p",{className:"tel"},"+38 (050) 789 24 98"),s.a.createElement("p",{className:"tel tel--second"},"+38 (095) 556 08 45"))}),se=a(60),le=a.n(se),re=a(61),ie=a.n(re),ce=a(62),oe=a.n(ce),me=a(63),ue=a.n(me),pe=a(64),he=a.n(pe),_e=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"footer__top"},s.a.createElement("a",{href:"#abz"},s.a.createElement("img",{src:te.a,alt:"Logo",className:"footer__logo"})),s.a.createElement(ae,null)),s.a.createElement("div",{className:"footer__main"},s.a.createElement(ne,null),s.a.createElement("ul",{className:"footer__list"},s.a.createElement("li",null,s.a.createElement("ul",{className:"footer__sublist"},s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"News")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Blog")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Partners")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Shop")))),s.a.createElement("li",null,s.a.createElement("ul",{className:"footer__sublist"},s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Overview")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Design")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Code")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Collaborate")))),s.a.createElement("li",null,s.a.createElement("ul",{className:"footer__sublist"},s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Tutorials")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Resources")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Guides")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Examples")))),s.a.createElement("li",null,s.a.createElement("ul",{className:"footer__sublist"},s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"FAQ")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Terms")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Conditions")),s.a.createElement("li",null,s.a.createElement("a",{href:"foo"},"Help")))))),s.a.createElement("div",{className:"footer__bottom"},s.a.createElement("p",{className:"legal"},"\xa9 abz.agency specially for the test task"),s.a.createElement("ul",{className:"socials"},s.a.createElement("li",{className:"socials__item"},s.a.createElement("a",{href:"https://uk-ua.facebook.com/",className:"socials__link"},s.a.createElement(y,{type:le.a}))),s.a.createElement("li",{className:"socials__item"},s.a.createElement("a",{href:"https://www.linkedin.com/",className:"socials__link"},s.a.createElement(y,{type:ie.a}))),s.a.createElement("li",{className:"socials__item"},s.a.createElement("a",{href:"https://www.instagram.com/",className:"socials__link"},s.a.createElement(y,{type:oe.a}))),s.a.createElement("li",{className:"socials__item"},s.a.createElement("a",{href:"https://twitter.com/",className:"socials__link"},s.a.createElement(y,{type:ue.a}))),s.a.createElement("li",{className:"socials__item"},s.a.createElement("a",{href:"https://www.pinterest.com/",className:"socials__link"},s.a.createElement(y,{type:he.a}))))))},fe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={token:"",links:{},page:1,totalUsers:"",users:[],positions:[],error:!1,openModal:!1,showMore:!0},a.addUser=function(e){var t=e.email,n=e.name,s=e.phone,l=e.position_id,r=new FormData,i=document.querySelector('input[type="file"]');r.append("position_id",l),r.append("name",n),r.append("email",t),r.append("phone",s),r.append("photo",i.files[0]),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:r,headers:{Token:a.state.token}}).then((function(e){return e.json()})).then((function(e){e.success&&this.handleOpenModal()})).catch((function(e){})),a.handleOpenModal()},a.showMoreUsers=function(){var e,t=a.state,n=t.totalUsers,s=t.users;e=window.innerWidth<768?3:6,n-s.length<e&&(e=n-s.length);var l="https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(a.state.page+1,"&count=").concat(e);_.a.get(l).then((function(t){var l=t.data;200===t.status&&(n===s.length+e?a.setState({users:[].concat(Object(i.a)(a.state.users),Object(i.a)(l.users)),links:l.links,showMore:!1}):a.setState({users:[].concat(Object(i.a)(a.state.users),Object(i.a)(l.users)),page:a.state.page+1,links:l.links}))}))},a.handleOpenModal=function(){a.setState({openModal:!0})},a.handleCloseModal=function(){a.setState({openModal:!1})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.innerWidth<768?_.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3").then((function(t){var a=t.data;200===t.status&&e.setState({users:a.users,links:a.links,totalUsers:a.total_users})})):_.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6").then((function(t){var a=t.data;200===t.status&&e.setState({users:a.users,links:a.links,totalUsers:a.total_users})})),_.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(t){var a=t.data;200===t.status&&e.setState({token:a.token})})),_.a.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((function(t){var a=t.status,n=t.data;200===a&&e.setState({positions:n.positions})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.users,n=t.positions;return s.a.createElement("div",{className:"App"},s.a.createElement(x,{user:this.state.users[0]}),s.a.createElement("main",null,s.a.createElement(O,null),s.a.createElement(j,null),s.a.createElement(P,null),s.a.createElement(J,null),s.a.createElement(Y,{users:a,showMoreUsers:this.showMoreUsers,showMore:this.state.showMore}),s.a.createElement(Z,{positions:n,onAddUser:this.addUser}),s.a.createElement(f.a,{show:this.state.openModal,onHide:function(){return e.setState({openModal:!1})},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},s.a.createElement("h2",{className:"modal__title"},"Congratulations"),s.a.createElement("p",{className:"modal__text"},"You have successfully passed the registration"),s.a.createElement("button",{className:"modal__button",onClick:this.handleCloseModal},"OK"))),s.a.createElement(_e,null))}}]),t}(s.a.Component);r.a.render(s.a.createElement(fe,null),document.getElementById("root"))}]),[[69,1,2]]]);
//# sourceMappingURL=main.3928bf80.chunk.js.map
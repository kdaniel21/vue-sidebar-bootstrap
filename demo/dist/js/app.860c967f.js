(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push(["a1ec","chunk-vendors"]),n()})({a1ec:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{id:"app","navbar-class":"bg-primary",items:t.navItems,width:"250px","mobile-fullscreen":!0,shadow:""},scopedSlots:t._u([{key:"navbar-content",fn:function(){return[n("b-navbar-brand",[t._v("Vue Sidebar Bootstrap")]),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[t._v("Foo")]),n("b-nav-item",[t._v("Bar")])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"p-3"},[t._v(" Created By "),n("a",{attrs:{href:"https://danielkiss.me"}},[t._v("Daniel Kiss")]),t._v(" © ")])]},proxy:!0}])})},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.sidebarStyling,attrs:{id:"layout"}},[n("b-navbar",{class:t.navbarClass,attrs:{id:"navbar"}},[n("vsb-sidebar",t._b({on:{change:function(e){return t.sidebarOpen=e},"is-mobile":function(e){return t.isMobile=e}},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"vsb-sidebar",t.$attrs,!1)),t._t("navbar-content")],2),t._t("default",[n("b-container",{staticClass:"py-5"},[n("router-view")],1)])],2)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("toggle-icon",[n("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],staticClass:"h3 m-2 d-md-none",staticStyle:{"vertical-align":"none"},attrs:{icon:"list"}})]),n("b-sidebar",t._b({attrs:{id:"sidebar",shadow:t.shadow,"no-close-on-esc":!t.isMobile,"no-close-on-backdrop":!t.isMobile,"no-close-on-route-change":!t.isMobile,"no-header-close":!t.isMobile,backdrop:t.isMobile&&t.backdrop,width:t.isMobile&&t.mobileFullscreen?"100vh":t.width},on:{change:function(e){return t.$emit("change",e)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title",[n("div",{staticClass:"p-2"},[n("h5",[t._v("Sidebar Title")])])])]},proxy:!0},{key:"default",fn:function(){return t._l(t.sections,(function(e){return n("b-list-group",{key:e.name,staticClass:"mb-3",attrs:{flush:""}},[t._t("section-title",[n("h6",{staticClass:"ml-2"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e,o){return n("div",{key:e.text},[n("vsb-sidebar-item",{attrs:{item:e,index:o}},[t._t("dropdown-icon",[e.children?n("vsb-sidebar-item-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"nav-item-"+o,expression:"`nav-item-${index}`"}],staticStyle:{width:"0.7em"},attrs:{icon:"chevron-right"}}):t._e()],{item:e,index:o})],2),e.children?n("b-collapse",{staticClass:"pl-3",attrs:{id:"nav-item-"+o}},[n("b-list-group",{attrs:{flush:""}},t._l(e.children,(function(t){return n("vsb-sidebar-item",{key:t.text,attrs:{item:t,"text-small":!0}})})),1)],1):t._e()],1)}))],2)}))},proxy:!0},{key:"footer",fn:function(){return[t._t("footer")]},proxy:!0}],null,!0),model:{value:t.showSidebar,callback:function(e){t.showSidebar=e},expression:"showSidebar"}},"b-sidebar",t.$attrs,!1))],2)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.item.children?"nav-item-"+t.index:null,expression:"item.children ? `nav-item-${index}` : null"}],staticClass:"d-flex justify-content-between align-items-center",attrs:{to:t.item.link,"active-class":"active",exact:"",disabled:t.item.disabled}},[n("span",[n("vsb-sidebar-item-icon",{staticClass:"mr-3",attrs:{icon:t.item.icon}}),n("span",{class:{small:t.textSmall}},[t._v(t._s(t.item.text))])],1),t._t("default")],2)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.icon&&Object.keys(t.icon).length?n(t.icon.tag?t.icon.tag:"b-icon",t._b({tag:"component",attrs:{icon:t.icon.tag?t.icon.attributes.icon:t.icon}},"component",t.icon.attributes,!1)):t._e()},b=[],h={name:"VsbSidebarItemIcon",props:{icon:{type:[Object,String],default:function(){}}}},v=h,m=n("2877"),f=Object(m["a"])(v,p,b,!1,null,null,null),_=f.exports,y={name:"SidebarItem",props:{item:{type:Object,default:function(){return{}}},index:{type:Number,default:null},textSmall:{type:Boolean,default:!1}},components:{VsbSidebarItemIcon:_}},g=y,w=Object(m["a"])(g,u,d,!1,null,"51603cae",null),x=w.exports;function k(t){return O(t)||C(t)||I(t)||S()}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(t,e){if(t){if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function C(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function O(t){if(Array.isArray(t))return j(t)}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var E={name:"VsbSidebar",props:{items:{type:Array,default:function(){return[]}},width:{type:String,default:"320px"},mobileFullscreen:{type:Boolean,default:!1}},components:{VsbSidebarItem:x,VsbSidebarItemIcon:_},data:function(){return{showSidebar:!0,isMobile:!1}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){this.isMobile=window.innerWidth<=768}},watch:{isMobile:function(t){this.$emit("is-mobile",t),this.showSidebar=!t}},computed:{sections:function(){return this.items[0].name?this.items:[{name:null,children:k(this.items)}]}}},$=E,T=Object(m["a"])($,l,c,!1,null,null,null),A=T.exports,P={name:"VsbLayout",components:{VsbSidebar:A},props:{navbarClass:{type:String,default:null}},data:function(){return{sidebarOpen:!0,isMobile:!1}},computed:{sidebarStyling:function(){if(this.sidebarOpen&&!this.isMobile){var t=this.$attrs.width||"320px";return{"margin-left":t,width:"calc(100vw - ".concat(t,")")}}}}},M=P,B=Object(m["a"])(M,r,s,!1,null,null,null),V=B.exports,F={name:"App",components:{Layout:V},data:function(){return{navItems:[{name:"Introduction",children:[{text:"Get Started",icon:"file-earmark-play",children:[{text:"Introduction",link:"/introduction",icon:"cup"},{text:"Installation",link:"/install",icon:"wrench"},{text:"Basic usage",link:"/usage",icon:"command"}]},{text:"Icons",link:"/icons",icon:"bootstrap"},{text:"Layout Component",link:"/integrate",icon:"layout-sidebar"}]},{name:"API",children:[{text:"Slots",link:"/slots",icon:"layers"},{text:"Properties",link:"/props",icon:"journal-text"},{text:"Events",link:"/events",icon:"calendar3"}]},{name:"Support",children:[{text:"Contribute",link:"/contribute",icon:"bug"}]}]}}},N=F,z=Object(m["a"])(N,a,i,!1,null,null,null),U=z.exports,R=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"introduction"}},[n("h3",[t._v("Introduction")]),n("p",[t._v(" Hi! I'm happy that you're looking for a Vue Bootstrap sidebar package and found mine. I did the same but unfortunately I couldn't find a package that would have fit my needs. I really hope that you'll find what you were looking for. If you think something is missing or you could improve the package, please "),n("router-link",{attrs:{to:"/contribute"}},[t._v(" contribute ")]),t._v(" to the project and make a pull request so that the next person can have an easier time. ")],1),n("p",[t._v(" I'm also looking for some reviews and input, so in case you were somebody experienced with Vue and npm packages and you could spend a few minutes reviewing my package I'd really grateful! ")])])},H=[],q={name:"Introduction"},G=q,D=Object(m["a"])(G,L,H,!1,null,null,null),Y=D.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"install"}},[n("h3",[t._v("Installation")]),n("pre",[t._v("npm install vue-sidebar-bootstrap")]),t._v(" Then: "),n("div",{staticClass:"font-weight-bold"},[t._v("main.js")]),n("pre",[t._v("    import VueSidebarBootstrap from 'vue-sidebar-bootstrap'\n    ...\n    Vue.use(VueSidebarBootstrap)\n  ")]),t._v(" After these steps you can use all the components (vsb-sidebar, vsb-layout) application-wide. ")])}],W={name:"Install"},Q=W,X=Object(m["a"])(Q,J,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"usage"}},[n("h3",[t._v("Usage")]),n("p",[t._v(" To use the module you only need to install it, then import and register it in the component where you would like to use it. ")]),t._m(0),n("p",[t._v("Then add it to your template where you would like to place it.")]),n("pre",{pre:!0},[t._v('<vsb-sidebar :items="navItems" />')]),t._m(1),n("pre",{pre:!0},[t._v("    navItems: [\n            {\n              name: 'Introduction',\n              children: [\n                {\n                  text: 'Get Started',\n                  icon: 'person-fill',\n                  children: [\n                    { text: 'Introduction', link: '/introduction', icon: 'alarm' },\n                    ...\n                  ]\n                }\n              ]\n            },\n            {\n              name: 'API',\n              children: [\n                { text: 'Slots', link: '/slots', icon: 'alarm' },\n                ...\n              ]\n            }\n          ]\n    ")]),t._m(2),n("pre",{pre:!0},[t._v("    navItems: [\n      {\n        text: 'People',\n        icon: 'person-fill',\n        children: [\n          { text: 'Foo', link: '/foo', icon: 'alarm' },\n          { text: 'Bar', link: '/bar', icon: 'alarm' }\n        ]\n      },\n      { text: 'Analytics', icon: 'bar-chart', link: '/analytics' }\n    ]\n  ")]),n("h5",[t._v("Further Customization")]),n("p",[t._v(" I do everything to make the component as customizable as possible. Please see the "),n("span",{staticClass:"font-weight-bold"},[t._v("API section")]),t._v(" on the sidebar to explore the customization options, such as "),n("router-link",{attrs:{to:"/slots"}},[t._v("slots")]),t._v(" or "),n("router-link",{attrs:{to:"/props"}},[t._v("properties")]),t._v(". ")],1)])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0},[t._v("    "),n("span",{pre:!0,attrs:{class:"font-weight-bold"}},[t._v("import {{ Sidebar }} from 'vue-sidebar-bootstrap'")]),t._v("\n\n    export default {\n      name: 'YourComponent',\n      "),n("span",{pre:!0,attrs:{class:"font-weight-bold"}},[t._v("components: {\n        Sidebar\n        ...\n      }")]),t._v("\n    }\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" As you've seen, the only thing you need to add is the "),n("span",{staticClass:"font-italic"},[t._v("navItems")]),t._v(" property which contains the menu items in the following form: ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(' This way you can add "sections" to the sidebar. If you don\'t need any of them, you can leave them and only pleace the menu objects (that would go inside '),n("span",{staticClass:"font-italic"},[t._v("children")]),t._v(".) ")])}],nt={name:"Usage"},ot=nt,at=Object(m["a"])(ot,tt,et,!1,null,null,null),it=at.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"icons"}},[n("h3",[t._v("Icons")]),n("p",[t._v(" Pay attention that the icons are using by default the "),n("span",{staticClass:"font-weight-bold"},[t._v("<b-icon>")]),t._v(" component provided by Bootstrap Vue. However you can use your own icons by specifying the "),n("span",{staticClass:"font-italic"},[t._v(" tag and attributes (where you can specify any HTML attribute key-value pairs) ")]),t._v(" properties. ")]),n("h5",[t._v("Basic Usage")]),n("pre",{pre:!0},[t._v("    {\n      ...\n      children: [\n            { text: 'Foo', link: '/foo', "),n("span",{pre:!0,attrs:{class:"font-weight-bold"}},[t._v("icon: 'alarm'")]),t._v(" },\n            ...\n          ]\n    }")]),n("h5",[t._v("Using other icon libraries than the Bootstrap default")]),n("pre",{pre:!0},[t._v("    {\n      ...\n      children: [\n        { text: 'Foo', link: '/foo', "),n("span",{pre:!0,attrs:{class:"font-weight-bold"}},[t._v("icon: {\n            tag: 'fa',\n            attributes: { icon: 'foobar'}\n          }")]),t._v("\n        }\n      ]\n    }\n  ")])])}],lt={name:"Icons"},ct=lt,ut=Object(m["a"])(ct,rt,st,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"integration"}},[n("h3",[t._v("Integration with a Navbar")]),n("p",[t._v(" Integrating with the navigation bar seemed to be the biggest issue for me, eventuallly this is probably the reason you're looking for something other than the default "),n("span",{staticClass:"font-weight-bold"},[t._v("<b-sidebar>")]),t._v(". ")]),n("h5",[t._v("Under the Hood")]),n("p",[t._v(" The solution is quite hacky, since it stores an "),n("span",{staticClass:"font-italic"},[t._v("isMobile")]),t._v(" and a "),n("span",{staticClass:"font-italic"},[t._v("sidebarOpen")]),t._v(" variable, those controll a CSS class which adds margin to free up some space for the sidebar. I'm eagerly looking forward to improve this solution, yet, so far I haven't discovered anything that would overcome the one the package using. ")]),n("h5",[t._v("The Layout Component")]),n("p",[t._v(" There is also a "),n("span",{staticClass:"font-weight-bold"},[t._v("<vsb-layout />")]),t._v(" component available that initializes a layout similar to what this demo site has. It creates a sidebar, a navbar (that is customizable through the "),n("span",{staticClass:"font-weight-bold"},[t._v("navbar-content")]),t._v(" slot and the "),n("span",{staticClass:"font-weight-bold"},[t._v("navbar-class")]),t._v(" prop) and a fluid "),n("span",{staticClass:"font-italic"},[t._v("b-container")]),t._v(" with a "),n("span",{staticClass:"font-italic"},[t._v("router-view")]),t._v(" (which is available through the "),n("span",{staticClass:"font-weight-bold"},[t._v("default")]),t._v(" slot). ")]),n("p",{staticClass:"font-weight-bold"},[t._v(" Of course you can pass any prop to the layout component that you would to the sidebar, they are going to be applied. ")]),n("pre",{pre:!0},[t._v('<vsb-layout navbar-class="bg-primary" :items="navItems" width="250px" shadow>\n  <template v-slot:navbar-content>\n  ...YOUR NAVBAR CONTENT...\n  </template>\n\n  <template v-slot:default>\n  ...CONTENT OF YOUR PAGE...\n  </template>\n</layout>')])])}],ht={name:"Integration"},vt=ht,mt=Object(m["a"])(vt,pt,bt,!1,null,null,null),ft=mt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"props"}},[n("h3",[t._v("Properties")]),n("h4",[t._v("<vsb-sidebar /> component")]),n("p",{staticClass:"mb-1"},[t._v(" The sidebar component extends the b-sidebar, hence it offers everything that the b-sidebar does. ")]),n("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/sidebar#comp-ref-b-sidebar",target:"_blank"}},[t._v("Bootstrap Vue b-sidebar reference ")]),n("h5",{staticClass:"mt-4"},[t._v("Additional props")]),n("b-table",{attrs:{items:t.sidebarProps}}),n("h4",[t._v("<vsb-layout /> component")]),n("p",[t._v(" All of the above mentioned properties can be passed to this component and everything will be passed down to the sidebar except the following. ")]),n("b-table",{attrs:{items:t.layoutProps}})],1)},yt=[],gt={name:"Props",data:function(){return{sidebarProps:[{property:"mobile-fullscreen",default:!1,description:"The menu is full-screen on mobile (<=768px) devices."}],layoutProps:[{property:"navbar-class",default:"null",description:"Class(es) added to the navbar (eg. bg-primary)"}]}}},wt=gt,xt=Object(m["a"])(wt,_t,yt,!1,null,null,null),kt=xt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slots"}},[n("h3",[t._v("Slots")]),n("h4",[t._v("<vsb-sidebar /> component")]),t._m(0),n("h5",[t._v("Additional Slots")]),n("b-table",{attrs:{items:t.sidebarSlots}}),n("h4",[t._v("<vsb-layout /> component")]),n("p",[t._v(" Every above mentioned slot can be passed here and they will get passed to the sidebar. ")]),n("b-table",{attrs:{items:t.layoutSlots}})],1)},It=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Every slot provided by the default b-sidebar component is available. "),n("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/sidebar#comp-ref-b-sidebar-slots"}},[t._v("The original docs.")])])}],Ct={name:"Slots",data:function(){return{sidebarSlots:[{name:"toggle-icon",description:"Toggle icon. Defaults to hamburger menu provided by Bootstrap (list icon). v-b-toggle.sidebar needs to be added to toggle the sidebar"},{name:"section-title",description:"Title of the sections."},{name:"dropdown-icon",description:"The icon of the dropdown on the right side of the menu item."},{name:"footer",description:"Footer on the bottom of the sidebar. No default value."}],layoutSlots:[{name:"default",description:"The content of the page. Defaults to a fluid b-container with a router-view inside."},{name:"navbar-content",description:"Complete content of the navbar."}]}}},Ot=Ct,jt=Object(m["a"])(Ot,St,It,!1,null,null,null),Et=jt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"events"}},[n("h3",[t._v("Events")]),n("h4",[t._v("<vsb-sidebar /> component")]),n("b-table",{attrs:{items:t.sidebarEvents}})],1)},Tt=[],At={name:"Events",data:function(){return{sidebarEvents:[{name:"change",description:"Fired every time the sidebar is toggled."},{name:"is-mobile",description:"Fired once the mobile mode is toggled."}]}}},Pt=At,Mt=Object(m["a"])(Pt,$t,Tt,!1,null,null,null),Bt=Mt.exports,Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contribute"}},[n("h3",[t._v("Contribute")]),n("a",{staticClass:"h5",attrs:{href:"https://github.com/kdaniel21/vue-bootstrap-sidebar"}},[t._v(" GitHub Repository ")]),n("p",{staticClass:"mt-3"},[t._v(" I am looking forward to every contribution to the package. Even if you see a typo or something isn't grammatically correct, feel free to open a pull request and I'll accept it as soon as possible. ")]),n("p",[t._v(" If you miss a feature or could improve the code in any way, please don't hesitate to fix it so that everyone will have an easier time next time. ")]),n("p",[t._v(" In case you have a question or just want to have a chat, feel free to visit my "),n("a",{attrs:{href:"https://danielkiss.me"}},[t._v("portfolio site")]),t._v(" or "),n("a",{attrs:{href:"https://danielkiss.me/contact"}},[t._v(" get in touch with me ")]),t._v(". ")])])}],Nt={name:"Contribute"},zt=Nt,Ut=Object(m["a"])(zt,Vt,Ft,!1,null,null,null),Rt=Ut.exports,Lt=[{path:"/",redirect:"/introduction"},{path:"/introduction",component:Y},{path:"/install",component:Z},{path:"/usage",component:it},{path:"/icons",component:dt},{path:"/integrate",component:ft},{path:"/props",component:kt},{path:"/slots",component:Et},{path:"/events",component:Bt},{path:"/contribute",component:Rt}],Ht=n("5f5b"),qt=n("b1e0");n("f9e3"),n("2dd8");o["default"].config.productionTip=!1,o["default"].use(R["a"]),o["default"].use(Ht["a"]),o["default"].use(qt["a"]);var Gt=new R["a"]({mode:"history",routes:Lt});new o["default"]({el:"#app",router:Gt,render:function(t){return t(U)}}).$mount("#app")}});
//# sourceMappingURL=app.860c967f.js.map
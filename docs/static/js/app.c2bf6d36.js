(function(t){function e(e){for(var i,n,o=e[0],l=e[1],u=e[2],c=0,m=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",[a("span",[t._v("IIIF Viewers")])])],1),a("v-content",[a("v-container",[a("v-row",{staticClass:"my-5"},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("iframe",{directives:[{name:"show",rawName:"v-show",value:t.manifest,expression:"manifest"}],attrs:{src:"http://universalviewer.io/examples/uv/uv.html#?manifest="+t.manifest,width:"100%",height:"600",allowfullscreen:"",frameborder:"0"}})])],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.manifest,expression:"manifest"}],staticClass:"my-5"},[a("v-col",{attrs:{cols:"12",sm:"7"}},[a("v-card",{attrs:{tile:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.metadata,"items-per-page":10}})],1),a("v-card",{staticClass:"my-5",attrs:{tile:""}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[null!=t.properties.attribution?a("tr",[a("td",{staticClass:"py-2"},[t._v("Attribution")]),a("td",{staticClass:"py-2"},[t._v(t._s(t.properties.attribution))])]):t._e(),null!=t.properties.license?a("tr",[a("td",{staticClass:"py-2"},[t._v("License")]),a("td",{staticClass:"py-2"},[t._v(t._s(t.properties.license))])]):t._e(),null!=t.properties.related?a("tr",[a("td",{staticClass:"py-2"},[t._v("Related")]),a("td",{staticClass:"py-2"},[t._v(t._s(t.properties.related))])]):t._e(),null!=t.properties.within?a("tr",[a("td",{staticClass:"py-2"},[t._v("Within")]),a("td",{staticClass:"py-2"},[t._v(t._s(t.properties.within))])]):t._e()])]},proxy:!0}])})],1)],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{shaped:""}},[a("v-subheader",[t._v("Manifest URI icon & IIIF viewers")]),a("v-list-item-group",[a("v-list-item",{attrs:{href:t.manifest,target:"_blank"}},[a("v-list-item-icon",[a("img",{attrs:{src:"https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH_400x400.png",height:"30px"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Manifest")])],1)],1),t._l(t.items,(function(e,i){return 0!=e.flg?a("v-list-item",{key:i,attrs:{href:e.url+t.manifest,target:"_blank"}},[a("v-list-item-icon",[a("img",{attrs:{src:e.image,height:"30px"}})]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1):t._e()}))],2)],1)],1)],1)],1),a("p",{directives:[{name:"show",rawName:"v-show",value:null!=t.updated_manifest,expression:"updated_manifest != null"}],staticClass:"my-5"},[t._v("\n        画像が表示されない場合は\n        "),a("a",{attrs:{href:"./?manifest="+t.updated_manifest}},[t._v("こちら")]),t._v("をお試しください。\n      ")])],1)],1),a("v-footer",{staticClass:"py-5"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("a",{attrs:{href:"https://researchmap.jp/nakamura.satoru/?lang=english"}},[t._v("Satoru Nakamura")])])],1)],1)},r=[],n=a("bc3a"),o=a.n(n),l="https://w3id.org/dhj/i3c/",u={data:function(){return{manifest:null,updated_manifest:null,properties:{description:null,attribution:null,license:null,related:null,within:null},items:[],headers:[{text:"Field",value:"field"},{text:"Value",value:"value"}],status:[],metadata:[]}},mounted:function(){var t=this,e=this.$route.query.manifest;this.manifest=e,-1==this.manifest.indexOf(l)&&(this.updated_manifest=l+this.manifest),this.items.push({text:"Mirador",image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png",url:"http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest="}),this.items.push({text:"Universal Viewer",image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png",url:"http://universalviewer.io/examples/uv/uv.html#?manifest="}),this.items.push({text:"Image Annotator",image:"https://www.kanzaki.com/parts/me128b.png",url:"http://www.kanzaki.com/works/2016/pub/image-annotator?u="}),this.items.push({text:"IIIF Curation Viewer",image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png",url:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="}),this.items.push({text:"KuroNetくずし字認識ビューア",image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png",url:"http://codh.rois.ac.jp/kuronet/iiif-curation-viewer/?manifest="}),this.items.push({text:"TIFY",image:"https://avatars2.githubusercontent.com/u/31309906",url:"http://tify.sub.uni-goettingen.de/demo.html?manifest="}),this.items.push({text:"Leaflet",image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/leaflet.png",url:"http://da.dl.itc.u-tokyo.ac.jp/leaflet/?manifest="}),o.a.get(this.manifest).then((function(e){var a=e.data;t.main(a)})).catch((function(t){console.log("E1\t"+t)}))},methods:{main:function(t){if("sc:Manifest"==t["@type"]){for(var e=t["metadata"],a=0;a<e.length;a++){var i=e[a];""!=i.value&&null!=i.value&&this.metadata.push({field:i.label,value:i.value})}for(var s in this.properties)t[s]&&(this.properties[s]=t[s])}}}},p=u,c=a("2877"),m=a("6544"),f=a.n(m),d=a("7496"),h=a("40dc"),v=a("b0af"),g=a("62ad"),b=a("a523"),w=a("a75b"),y=a("8fea"),_=a("553a"),x=a("8860"),k=a("da13"),C=a("5d23"),V=a("1baa"),j=a("34c3"),I=a("0fd9"),O=a("1f4f"),P=a("e0c7"),S=a("2a7f"),T=Object(c["a"])(p,s,r,!1,null,null,null),L=T.exports;f()(T,{VApp:d["a"],VAppBar:h["a"],VCard:v["a"],VCol:g["a"],VContainer:b["a"],VContent:w["a"],VDataTable:y["a"],VFooter:_["a"],VList:x["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemGroup:V["a"],VListItemIcon:j["a"],VListItemTitle:C["b"],VRow:I["a"],VSimpleTable:O["a"],VSubheader:P["a"],VToolbarTitle:S["a"]});var M=a("8c4f");i["a"].use(M["a"]);var F=new M["a"]({mode:"history",base:"",routes:[{path:"/"}]}),N=a("f309");i["a"].use(N["a"]);var A=new N["a"]({icons:{iconfont:"mdi"}});i["a"].config.productionTip=!1,new i["a"]({router:F,vuetify:A,render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.c2bf6d36.js.map
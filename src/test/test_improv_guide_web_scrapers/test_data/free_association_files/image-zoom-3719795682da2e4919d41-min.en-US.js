(function(i){var r={};function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:false,exports:{}};i[e].call(t.exports,t,t.exports,n);t.l=true;return t.exports}n.m=i;n.c=r;n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:i})};n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})};n.t=function(t,e){1&e&&(t=n(t));if(8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);n.r(i);Object.defineProperty(i,"default",{enumerable:true,value:t});if(2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="https://assets.squarespace.com/universal/scripts-compressed/";return n(n.s="./src/main/webapp/universal/scripts-v6/rollups/image-zoom.manifest.js")})({"./src/main/webapp/universal/node_modules/@babel/runtime/helpers/arrayWithHoles.js":function(e,t){function i(e){if(Array.isArray(e))return e}e.exports=i},"./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,t){function i(e){return e&&e.__esModule?e:{default:e}}e.exports=i},"./src/main/webapp/universal/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":function(e,t){function i(e,t){var i=[];var r=true;var n=false;var o=void 0;try{for(var s=e[Symbol.iterator](),a;!(r=(a=s.next()).done);r=true){i.push(a.value);if(t&&i.length===t)break}}catch(e){n=true;o=e}finally{try{r||null==s["return"]||s["return"]()}finally{if(n)throw o}}return i}e.exports=i},"./src/main/webapp/universal/node_modules/@babel/runtime/helpers/nonIterableRest.js":function(e,t){function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}e.exports=i},"./src/main/webapp/universal/node_modules/@babel/runtime/helpers/slicedToArray.js":function(e,t,i){var r=i("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/arrayWithHoles.js");var n=i("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var o=i("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/nonIterableRest.js");function s(e,t){return r(e)||n(e,t)||o()}e.exports=s},"./src/main/webapp/universal/scripts-v6/image-zoom.js":function(e,t,i){var r=i("./src/main/webapp/universal/src/shared/utils/rendering.js");YUI.add("squarespace-image-zoom",function(o){o.namespace("Squarespace");var s=o.Squarespace.ImageZoom=o.Base.create("image-zoom",o.Base,[],{initializer:function(){if(!this._shouldInitialize())return;if(!this.get("host")){false;return}this._initializeZoom()},destructor:function(){if(!this._shouldInitialize())return;var e=this.get("zoomedNode");e&&e.remove(true);this.get("host").removeClass(s.CSS_PREFIX).removeClass(s.CSS_PREFIX+"--behavior-"+this.get("behavior"));this.get("dropzone").setStyle("position","").removeClass(s.CSS_PREFIX+"-dropzone");this._zoomTriggerEvent&&this._zoomTriggerEvent.detach();this._mouseMoveEvent&&this._mouseMoveEvent.detach();this._mouseOutEvent&&this._mouseOutEvent.detach();this._resizeEvent&&this._resizeEvent.detach();this._zoomTriggerEvent=null;this._mouseMoveEvent=null;this._mouseOutEvent=null;this._resizeEvent=null},_bindUI:function(){var e=this.get("host");this._zoomTriggerEvent=e.on(this.get("behavior"),this._toggleZoom,this);this._mouseMoveEvent=e.on("mousemove",this._trackMovement,this);this._mouseOutEvent=e.on("mouseout",this._zoomOut,this);this._resizeEvent=o.one(window).on("resize",this._refresh,this)},_shouldInitialize:function(){return!o.UA.mobile&&window.Modernizr.csstransforms},_initializeZoom:function(){var e=this.get("host");var t=e.one("img");var i=this.get("dropzone");e.addClass(s.CSS_PREFIX);e.addClass(s.CSS_PREFIX+"--behavior-"+this.get("behavior"));i.addClass(s.CSS_PREFIX+"-dropzone");"static"===i.getStyle("position")&&i.setStyle("position","relative");if(t.getAttribute("src")){this._appendZoomedNode();this._bindUI()}else t.once("load",function(){this._appendZoomedNode();this._bindUI()},this)},_appendZoomedNode:function(){var e=this.get("host").one("img");var t=e.getAttribute("data-src");if(!t){false;return null}var i=e.getAttribute("data-image-dimensions");i=i||e.get("clientWidth")+"x"+e.get("clientHeight");var r=e.getAttribute("data-image-focal-point");r=r||"0.5,0.5";var n=o.Node.create('<div class="'+s.CSS_PREFIX+'-duplicate"><img src="'+t+"?format="+this._getSquarespaceSizeForWidth()+'" data-image-dimensions="'+i+'" data-image-focal-point="'+r+'"></div>');n.setStyle("transform","scale("+this.get("zoom")+")");n.one("img").plug(o.Squarespace.Loader2,{load:true,mode:"fill"});this.set("zoomedNode",n);this.get("dropzone").append(n)},_refresh:function(){var e=this.get("host").one("img").getAttribute("data-src");var t=this.get("zoomedNode").one("img");t.setAttribute("src",e+"?format="+this._getSquarespaceSizeForWidth());t.fire("refresh")},_toggleZoom:function(e){this.get("_isZoomedIn")?this._zoomOut():this._zoomIn(e);e.stopPropagation()},_zoomIn:function(e){this.get("host").addClass("is-zoomed");this.set("_isZoomedIn",true);this._trackMovement(e)},_zoomOut:function(){this.get("host").removeClass("is-zoomed");this.set("_isZoomedIn",false)},_trackMovement:function(e){if(!this.get("_isZoomedIn"))return;var t=Math.max((e.pageX-this.get("host").getX())/this.get("host").get("clientWidth")*100,0);var i=Math.max((e.pageY-this.get("host").getY())/this.get("host").get("clientHeight")*100,0);this.get("zoomedNode").setStyle("transformOrigin",t+"% "+i+"%")},_getSquarespaceSizeForWidth:function(){var e=this.get("host").one("img").get("clientWidth");return r.getSquarespaceSizeForWidth(e*this.get("zoom"))}},{CSS_PREFIX:"sqs-image-zoom",ATTRS:{host:{value:null,validator:function(e){var t=o.one(e);return o.instanceOf(t,o.Node)&&t.one("img")&&t.all("img").size()<2},writeOnce:true},dropzone:{valueFn:function(){return this.get("host")},validator:function(e){return o.instanceOf(o.one(e),o.Node)},writeOnce:true},behavior:{value:"hover",validator:function(e){if("hover"!==e&&"click"!==e){false;return false}return true},writeOnce:true},zoom:{value:1.5,validator:function(e){("number"!==typeof e||e<=1||e>5)&&false;return true},writeOnce:true},_isZoomedIn:{value:false}}})},"1.0",{requires:["base","event","node","squarespace-image-loader","yui-base"]})},"./src/main/webapp/universal/scripts-v6/rollups/image-zoom.manifest.js":function(e,t,i){i("./src/main/webapp/universal/scripts-v6/image-zoom.js")},"./src/main/webapp/universal/src/shared/utils/rendering.js":function(e,t,i){"use strict";var r=i("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getWidthForHeight=n;t.getHeightForWidth=o;t.getDimensionsFromNode=a;t.getSquarespaceSizeForWidth=u;t.getIconUrl=l;var s=r(i("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/slicedToArray.js"));function n(e,t,i){return e/t*i}function o(e,t,i){return t/e*i}function a(e){var t=e.getAttribute("data-image-dimensions");if("string"===typeof t){var i=t.split("x").map(function(e){return Number(e)}),r=(0,s.default)(i,2),n=r[0],o=r[1];return{width:n,height:o}}return{width:null,height:null}}function u(e){window.devicePixelRatio&&(e*=window.devicePixelRatio);if(e>1500)return"2500w";if(e>1e3)return"1500w";if(e>750)return"1000w";if(e>500)return"750w";if(e>300)return"500w";if(e>100)return"300w";return"100w"}function l(e,t,i){return"/universal/images-v6/icons/icon-".concat(e,"-").concat(t,"-").concat(i,".png")}}});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/image-zoom-db121c29974825bb1e679-min.en-US.js.map
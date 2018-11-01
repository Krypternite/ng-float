!function(i){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=i,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e){t.exports=angular},function(t,e){t.exports=_},function(t,e,i){},function(t,e){t.exports=$.ui.draggable},function(t,e){t.exports=$.ui.resizable},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),a=i(1);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function n(t,e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.top=e,(this.items=t).forEach(function(t){return t.row=i})}var t,e,i;return t=n,(e=[{key:"addItem",value:function(t){this.items.push(t),t.row=this}},{key:"removeItem",value:function(t){var e=this.items.indexOf(t);t.row=null,this.items.splice(e,1)}},{key:"setTop",value:function(t){var e=this;this.top=t,this.items.forEach(function(t){return t.top=e.top})}},{key:"getHeight",value:function(){return this.items.reduce(function(t,e){return Math.max(t,e.height)},0)}},{key:"getOverlap",value:function(e,i){var n=0;return this.items.forEach(function(t){t.doesOverlap(e)&&(n=i?Math.max(n,e.top+e.height-t.top):Math.max(n,t.top+t.height-e.top))}),n}}])&&r(t.prototype,e),i&&r(t,i),n}();function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];for(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);t.sort(function(t,e){return 1e4*(t.top-e.top)+t.left-e.left}),this.positionItems(t););this.rows=this.itemsToRows(t)}var t,i,n;return t=e,(i=[{key:"positionItems",value:function(t){for(var e=!1,i=0;i<t.length;i++)for(var n=i+1;n<t.length;n++)t[i].doesOverlap(t[n])&&(t[i].top<=t[n].top?t[n].top=t[i].top+t[i].height:t[i].top>t[n].top&&(t[i].top=t[n].top+t[n].height),e=!0,console.warn(t[i],"".concat(i," overlaps ").concat(n),t[n]));return e}},{key:"itemsToRows",value:function(t){var o=this,e={};return t.forEach(function(t){t.top in e?e[t.top].push(t):e[t.top]=[t]}),Object.entries(e).map(function(t){var e=l(t,2),i=e[0],n=e[1];return new s(n,Number(i),o)}).sort(function(t,e){return t.top-e.top})}},{key:"addItem",value:function(t){var e,i;for(e=0;e<this.rows.length;e++){if(!(this.rows[e].top<t.top)){this.rows[e].top===t.top&&(i=this.rows[e]);break}t.top+=this.rows[e].getOverlap(t,!1)}i&&!i.getOverlap(t,!0)?i.addItem(t):this.rows.splice(e,0,new s([t],t.top,this));for(var n=e+1;n<this.rows.length;n++)this.shiftRows(this.rows.slice(n),this.rows[n].getOverlap(t,!0))}},{key:"editItem",value:function(t,e){this.removeItem(t),this.addItem(Object.assign(t,e))}},{key:"removeItem",value:function(t){var e=t.row;e.removeItem(t),0===e.items.length&&this.rows.splice(this.rows.indexOf(e),1)}},{key:"shiftRows",value:function(t,e){t.forEach(function(t){return t.setTop(t.top+e)})}},{key:"removeGaps",value:function(){if(0!==this.rows.length){0!==this.rows[0].top&&this.shiftRows(this.rows,-this.rows[0].top);for(var t=0,e=1;e<this.rows.length;e++){t=Math.max(t,this.rows[e-1].top+this.rows[e-1].getHeight());var i=this.rows[e].top-t;0<i&&this.shiftRows(this.rows.slice(e),-i)}}}},{key:"getMaxHeight",value:function(){return this.rows.reduce(function(t,e){return Math.max.apply(void 0,[t].concat(e.items.map(function(t){return t.top+t.height})))},0)}},{key:"getClosestTop",value:function(t){if(0===this.rows.length)t.top=0;else for(var e=this.rows.length-1;0<=e;e--)if(this.rows[e].top<t.top){t.top=this.rows[e].top,t.top+=this.rows[e].getOverlap(t,!1);break}return t}},{key:"getWidthAtPos",value:function(t){var e=t.left,i=t.top,n=0,o=1/0;return this.rows.forEach(function(t){if(t.top>=i)return!1;t.items.forEach(function(t){t.top+t.height>i&&(t.left<e?n=Math.max(n,t.left+t.width):o=Math.min(o,t.left))})}),{left:n,width:o-n}}}])&&u(t.prototype,i),n&&u(t,n),e}();function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i(3),i(4);function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function o(t,e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.left=t,this.top=e,this.width=i,this.height=n,this.row=null}var t,e,i;return t=o,(e=[{key:"doesOverlap",value:function(t){return!(this.left+this.width<=t.left||t.left+t.width<=this.left||this.top+this.height<=t.top||t.top+t.height<=this.top)}}])&&c(t.prototype,e),i&&c(t,i),o}();i(5),i(6);function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}!function(){var t=new Error("Cannot find module 'jquery-ui/themes/base/draggable.css'");throw t.code="MODULE_NOT_FOUND",t}(),function(){var t=new Error("Cannot find module 'jquery-ui/themes/base/resizable.css'");throw t.code="MODULE_NOT_FOUND",t}();function v(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function p(t){var e=t.width,i=void 0===e?768:e,n=t.rowHeight,o=void 0===n?15:n,r=t.numColumns,s=void 0===r?60:r,a=t.buffer,l=void 0===a?4:a,u=t.minHeight,h=void 0===u?4:u,f=t.minWidth,c=void 0===f?10:f;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),this.width=i,this.numColumns=s,this.buffer=l,this.rowHeight=o,this.minHeight=h,this.minWidth=c,this.colWidth=(i-(s-1)*l)/s+l}var t,e,i;return t=p,(e=[{key:"px2layout",value:function(t){var e=t.left,i=t.top,n=t.width,o=t.height,r=this.px2pos({left:e,top:i}),s=Math.ceil((this.left2px(r.left)+n)/this.colWidth),a=Math.ceil((this.top2px(r.top)+o+this.buffer)/this.rowHeight);return{left:r.left,top:r.top,width:s-r.left,height:a-r.top}}},{key:"layout2px",value:function(t){var e=t.left,i=t.top,n=t.width,o=t.height;return{left:this.left2px(e),top:this.top2px(i),width:this.width2px(n),height:this.height2px(o)}}},{key:"px2pos",value:function(t){var e=t.left,i=t.top;return{left:this._closestMultiple(e,this.colWidth),top:this._closestMultiple(i,this.rowHeight)}}},{key:"left2px",value:function(t){return t*this.colWidth}},{key:"top2px",value:function(t){return t*this.rowHeight}},{key:"width2px",value:function(t){return t*this.colWidth-this.buffer}},{key:"height2px",value:function(t){return t*this.rowHeight-this.buffer}},{key:"getClosestPosition",value:function(t){return this.checkPositionConstraints(this.px2layout(t))}},{key:"getClosestSize",value:function(t,e){return this.checkSizeConstraints(this.px2layout(t),e)}},{key:"checkPositionConstraints",value:function(t){var e=t.width,i=t.height,n=t.left,o=t.top;return n+e>this.numColumns&&(n=this.numColumns-e),n<0&&(n=0),o<0&&(o=0),{left:n,top:o,width:e,height:i}}},{key:"checkSizeConstraints",value:function(t,e){var i=t.width,n=t.height,o=t.left,r=t.top;(o+i>this.numColumns&&(i=this.numColumns-o),o<0)&&(i=o+i-(o=0));return i<this.minWidth&&(e&&(o-=this.minWidth-i),i=this.minWidth),n<this.minHeight&&(n=this.minHeight),{left:o,top:r,width:i,height:n}}},{key:"_closestMultiple",value:function(t,e){var i=t/e,n=Math.floor(i),o=Math.ceil(i);return o-i<i-n?o:n}}])&&v(t.prototype,e),i&&v(t,i),p}();i(2),e.default=o.a.module("float",[]).directive("flContainer",function(){return{restrict:"A",bindToController:{options:"=flContainer",isEditable:"=flEditable",createElementsAtPosition:"&flCreateElementsAtPosition"},controllerAs:"flContainer",controller:["Mapper","$element","$document","$scope","$timeout",function(){function r(t,e,i,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.flItems=[],this.Mapper=t,this.$element=e,this.$document=i,this.$scope=n,this.$timeout=o}var t,e;return f((t=r).prototype,[{key:"$onInit",value:function(){var t=this;this.mapper=new this.Mapper(this.options),this.$element.css("width",this.mapper.width),this.isEditable&&(this.setupDropListeners(),this.setupVisitListeners(this.$document,this.$scope)),this.$timeout(function(){t.container||0!==t.flItems.length||(t.container=new h,t.render())},500)}},{key:"initItem",value:function(t){var e=this;this.flItems.push(t),this.container?(this.container.addItem(t.item),this.render()):t.lastRepeat&&(this.container=new h(this.flItems.map(function(t){return t.item})),this.$timeout(function(){e.render()}))}},{key:"render",value:function(){var e=this;this.container.removeGaps(),this.$element.css("height",this.mapper.height2px(this.container.getMaxHeight())+(this.isEditable?100:0)),this.flItems.forEach(function(t){return t.render(e.mapper.layout2px(t.item),{left:t.item.left,top:t.item.top,width:t.item.width,height:t.item.height})})}},{key:"onItemEditStart",value:function(){this.$element.addClass("fl-container-editing"),this.$element.css("height",this.$element.height()+1e3)}},{key:"onItemEditEnd",value:function(t,e){this.$element.removeClass("fl-container-editing"),this.container.editItem(t,e),this.render()}},{key:"onItemRemove",value:function(e){this.flItems=this.flItems.filter(function(t){return t!==e}),this.container.removeItem(e.item),this.render()}},{key:"getNewItemDimensions",value:function(t){return this.container.getClosestTop(this.mapper.getClosestPosition(t))}},{key:"setupDropListeners",value:function(){var o=this;function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1e4,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1e4,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;n.css({marginLeft:t,marginTop:e,width:i})}var n=angular.element("<div>").addClass("fl-drop-indicator").appendTo(this.$element);r();var s=Object(a.throttle)(function(t){if(angular.element(t.target).is(o.$element)){var e=o.mapper.px2pos({left:t.offsetX,top:t.offsetY}),i=Object.assign(e,o.container.getWidthAtPos(e));if(i.height=o.mapper.minHeight,i.width=Math.min(i.width,o.mapper.numColumns-i.left),i.width<o.mapper.minWidth)r();else{var n=o.mapper.layout2px(o.mapper.checkPositionConstraints(i));r(n.left,n.top,n.width)}}else r()},50);this.$element.on("dragover",function(t){t.preventDefault(),t.stopPropagation(),s(t)}),this.$element.on("dragleave",function(t){t.preventDefault(),t.stopPropagation(),s.cancel(),r()}),this.$element.on("drop",function(t){if(t.preventDefault(),t.stopPropagation(),s.cancel(),r(),angular.element(t.target).is(o.$element)){var e=o.mapper.px2pos({left:t.offsetX,top:t.offsetY}),i=Object.assign(e,o.container.getWidthAtPos(e));if(i.height=o.mapper.minHeight,i.width>=o.mapper.minWidth){i.width=Math.min(i.width,o.mapper.numColumns-i.left);var n=o.mapper.checkPositionConstraints(i);o.createElementsAtPosition({event:t,dimensions:n})}}})}},{key:"setupVisitListeners",value:function(t,e){function i(t){var e=angular.element(t.target).closest("[fl-item]").eq(0);e&&e.addClass("fl-item-selected"),angular.element("[fl-item]").not(e).removeClass("fl-item-selected")}t.on("click",i),e.$on("$destroy",function(){t.off("click",i)})}}]),e&&f(t,e),r}()]}}).directive("flItem",function(){return{restrict:"A",require:["^flContainer","flItem"],bindToController:{layout:"=flItem",resizable:"=flResizable",getHeight:"=flGetHeight",lastRepeat:"=flLastRepeat",isEditable:"=flEditable"},controllerAs:"flItem",controller:["$element",function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$element=t}var t,i;return d((t=e).prototype,[{key:"$onInit",value:function(){this.item=new p(this.layout.left,this.layout.top,this.layout.width,this.layout.height)}},{key:"render",value:function(t,e){this.$element.css(t),Object.assign(this.layout,e)}}]),i&&d(t,i),e}()],link:function(r,s,t,e){var i=m(e,2),a=i[0],l=i[1],o=l.resizable;function u(){s.resizable("option","handles",1===o?"e, w":"e, se, s, sw, w")}function h(t,e){if(l.getHeight){var i=a.mapper.layout2px(t),n=l.getHeight(s,i.width,e);if(0<n&&(o<2||n>i.height))return i.height=n,a.mapper.px2layout(i)}return t}a.initItem(l),s.addClass("fl-item"),a.isEditable&&(s.addClass("fl-edit"),r.$on("$destroy",function(){a.onItemRemove(l)}),l.isEditable&&(function(){var n=angular.element("<"+s[0].nodeName.toLowerCase()+">").addClass("fl-drag-indicator fl-item"),e=angular.element("<div>").addClass("fl-drag-clone");e.append(n);var o={};s.draggable({cursor:"move",cancel:"[fl-drag-cancel]",helper:function(){return e},start:function(t){o.width=s.outerWidth(),o.height=s.outerHeight(),e.css(a.mapper.layout2px(l.item)),n.css(a.mapper.layout2px(l.item)),s.children().clone().appendTo(n),a.onItemEditStart(),r.$broadcast("flDragStart",t)},drag:function(t,e){var i=a.mapper.layout2px(a.mapper.getClosestPosition(Object.assign(o,e.position)));n.css({left:i.left-e.position.left,top:i.top-e.position.top})},stop:function(t,e){n.empty(),a.onItemEditEnd(l.item,a.mapper.getClosestPosition(Object.assign(o,e.position))),r.$broadcast("flDragStop",t)}})}(),function(){var i;o&&(s.resizable({classes:{"ui-resizable-handle":"fl-resizable","ui-resizable-se":""},start:function(t){(i=angular.element("<div>").addClass("fl-resize-indicator fl-item")).css(a.mapper.layout2px(l.item)),i.appendTo("[fl-container]"),a.onItemEditStart(),r.$broadcast("flResizeStart",t)},resize:function(t,e){i.css(a.mapper.layout2px(n(e)))},stop:function(t,e){i.remove(),a.onItemEditEnd(l.item,n(e)),r.$broadcast("flResizeStop",t)}}),u());function n(t){var e=a.mapper.getClosestSize(Object.assign(t.position,t.size),s.data("ui-resizable").axis.includes("w"));return h(e,!0)}}(),r.$on("flItemChanged",function(){var t=h(l.item,!1);t.height!==l.item.height&&a.onItemEditEnd(l.item,t)}),r.$on("flResizeChanged",function(t,e){o=e,u()})))}}}).factory("Mapper",function(){return g})}]);
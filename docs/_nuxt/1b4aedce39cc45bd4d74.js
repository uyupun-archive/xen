(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{246:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{timer:null,count:10}},mounted:function(){this.countDown()},beforeDestroy:function(){this.clearTimer()},methods:{countDown:function(){var t=this;this.timer=setInterval(function(){t.count-=1,t.count<=0&&(t.$router.push("/measure"),t.count=10)},1e3)},clearTimer:function(){clearInterval(this.timer)}}},o=e(40),component=Object(o.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("h3",[this._v("ダミー")]),this._v(" "),n("div",{staticClass:"text-center"},[this._v(this._s(this.count))]),this._v(" "),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"btn btn-danger mt-3",attrs:{type:"button"}},[this._v("やめる")])])],1)},[],!1,null,null,null);n.default=component.exports}}]);
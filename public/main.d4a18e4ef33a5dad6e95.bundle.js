(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(429),module.exports=__webpack_require__(430)},345:function(module,exports){},430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_svelte__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(276);module._StorybookPreserveDecorators=!0,Object(_storybook_svelte__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(621)],module)}.call(this,__webpack_require__(431)(module))},621:function(module,exports,__webpack_require__){var map={"./index.stories.js":634};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=621},634:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var dist=__webpack_require__(170),internal=__webpack_require__(3),svelte=__webpack_require__(277);function create_fragment(ctx){let button,t,mounted,dispose;return{c(){button=Object(internal.element)("button"),t=Object(internal.text)(ctx[0]),Object(internal.attr)(button,"class","button svelte-e4yj59")},m(target,anchor){Object(internal.insert)(target,button,anchor),Object(internal.append)(button,t),mounted||(dispose=Object(internal.listen)(button,"click",ctx[1]),mounted=!0)},p(ctx,[dirty]){1&dirty&&Object(internal.set_data)(t,ctx[0])},i:internal.noop,o:internal.noop,d(detaching){detaching&&Object(internal.detach)(button),mounted=!1,dispose()}}}function instance($$self,$$props,$$invalidate){let{text:text=""}=$$props;const dispatch=Object(svelte.a)();return $$self.$set=$$props=>{"text"in $$props&&$$invalidate(0,text=$$props.text)},[text,function onClick(event){dispatch("click",event)}]}class button_svelte_Button extends internal.SvelteComponent{constructor(options){super(),document.getElementById("svelte-e4yj59-style")||function add_css(){var style=Object(internal.element)("style");style.id="svelte-e4yj59-style",style.textContent=".button.svelte-e4yj59{border:1px solid #eee;border-radius:3px;background-color:#FFFFFF;cursor:pointer;font-size:15px;padding:3px 10px;margin:10px}",Object(internal.append)(document.head,style)}(),Object(internal.init)(this,options,instance,create_fragment,internal.safe_not_equal,{text:0})}}var button_svelte=button_svelte_Button,Text=(__webpack_exports__.default={title:"Button",component:button_svelte},function(){return{Component:button_svelte,props:{text:"Hello Button"},on:{click:Object(dist.action)("clicked")}}}),Emoji=function(){return{Component:button_svelte,props:{text:"😀 😎 👍 💯"},on:{click:Object(dist.action)("clicked")}}}}},[[278,1,2]]]);
//# sourceMappingURL=main.d4a18e4ef33a5dad6e95.bundle.js.map
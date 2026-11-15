"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=o(function(p,s){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-zxsy/dist').ndarray;function x(i){var r,e;return r=i[0],e=i[1],m(d(r,0),v(r),t(r,0),u(r),v(e),t(e,0),u(e)),e}s.exports=x
});var f=require("path").join,y=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=n(),a,q=y(f(__dirname,"./native.js"));c(q)?a=g:a=q;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

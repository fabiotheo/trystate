"use strict";var c=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var g=(n,t)=>{for(var r in t)c(n,r,{get:t[r],enumerable:!0})},x=(n,t,r,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of k(t))!f.call(n,o)&&o!==r&&c(n,o,{get:()=>t[o],enumerable:!(e=T(t,o))||e.enumerable});return n};var D=n=>x(c({},"__esModule",{value:!0}),n);var P={};g(P,{default:()=>E,tryState:()=>l});module.exports=D(P);var l=async(n,t,r)=>{let e=Date.now(),o=new Date().toISOString();try{let s=await n(),a=Date.now()-e;return[s,null,{executionTimeMs:a,timestamp:o}]}catch(s){let a=Date.now()-e,i=s.stack||"",m=i.split(`
`)[1]?.trim()||"Localiza\xE7\xE3o n\xE3o encontrada",u=m.match(/at (\S+)/),p=u?u[1]:"unknown",w={message:s.message,stack:i,function:p,location:m,...r};return[t,w,{executionTimeMs:a,timestamp:o}]}},E=l;0&&(module.exports={tryState});
//# sourceMappingURL=index.cjs.map
var p=async(c,i,m)=>{let o=Date.now(),r=new Date().toISOString();try{let t=await c(),n=Date.now()-o;return[t,null,{executionTimeMs:n,timestamp:r}]}catch(t){let n=Date.now()-o,e=t.stack||"",s=e.split(`
`)[1]?.trim()||"Localiza\xE7\xE3o n\xE3o encontrada",a=s.match(/at (\S+)/),u=a?a[1]:"unknown",l={message:t.message,stack:e,function:u,location:s,...m};return[i,l,{executionTimeMs:n,timestamp:r}]}},T=p;export{T as default,p as tryState};
//# sourceMappingURL=index.js.map

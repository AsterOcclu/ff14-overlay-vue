import{d as h,v as i,o as z,b as g,I as c,u as p}from"./vendor-8ebccccd.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";var _=(e=>(e[""]="①",e[""]="②",e[""]="③",e[""]="④",e[""]="⑤",e[""]="⑥",e[""]="⑦",e[""]="⑧",e[""]="⑨",e))(_||{});const y=h({__name:"instancedAreaInfo",setup(e){var r;addOverlayListener("LogLine",u),startOverlayEvents();let n=i(""),t=i("");const f=((r=d(location.href))==null?void 0:r.simple)==="true";function d(a){const o=a.split("?").pop().split("&"),l={};return o.forEach(m=>{let s=m.split("=");l[s[0]]=s[1]}),l}function u(a){if(a.line[0]==="00"&&a.line[2]==="0039"){const o=a.line[4].match(/当前所在副本区为“(?<zoneName>[^”]+)(?<zoneInstanced>[])”/)??a.line[4].match(/You are now in the instanced area (?<zoneName>.+?)(?<zoneInstanced>[])”/)??a.line[4].match(/インスタンスエリア「(?<zoneName>.+?)(?<zoneInstanced>[])」/);o&&(n.value=o.groups.zoneName,t.value=_[o.groups.zoneInstanced])}else a.line[0]==="01"&&(n.value=a.line[3],t.value="")}return(a,o)=>(z(),g("h5",null,c(f?"":p(n))+c(p(t)),1))}});const x=v(y,[["__scopeId","data-v-e8329c5e"]]);export{x as default};

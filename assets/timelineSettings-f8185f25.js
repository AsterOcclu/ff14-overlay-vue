import{d as be,s as N,v as he,o as T,b as D,a as n,w as o,u as i,a0 as de,F as g,t as U,f as y,C as G,D as X,G as O,H as M,ag as f,ah as se,K as ve,ai as De,L as Oe,M as Fe,aj as Ue,ae as Te,af as Ce,ad as xe,a1 as Se,ak as Pe,c as B,ac as Ie,_ as we,al as je,y as ge,Y as Re,a5 as Z,U as ze,am as _e,g as Je,an as qe,a4 as Le,ao as Me,ap as We,h as Ke,e as Qe,p as Ye,i as He,J as Ze,aq as Ge}from"./vendor-5deaef20.js";import{u as Xe,p as et,_ as tt}from"./timelineShow-c95dde35.js";import{U as P}from"./util-6278c68e.js";import{g as nt}from"./actionChinese-2ac1aba3.js";import{_ as Ve}from"./index-cfd16e90.js";import{Z as re}from"./zoneInfo-3b24bf2b.js";import"./xivapi-8535252a.js";import"./queryParams-77a1fad5.js";const s=new Map;s.set(26155,{type:"cast",window:[999,999]});s.set(28027,{type:"cast",window:[999,999]});s.set(26340,{type:"cast",window:[999,999]});s.set(25533,{type:"begincast",window:[60,60]});s.set(26376,{type:"cast",window:[999,999]});s.set(26814,{type:"begincast",window:[999,999]});s.set(25313,{type:"begincast",window:[200,200]});s.set(27526,{type:"begincast",window:[999,999]});s.set(26215,{type:"cast",window:[500,30]});s.set(29050,{type:"begincast",window:[200,30]});s.set(29156,{type:"cast",window:[20,20]});s.set(27973,{type:"cast",window:[20,20]});s.set(27937,{type:"begincast",window:[20,20]});s.set(28059,{type:"begincast",window:[20,20]});s.set(28060,{type:"begincast",window:[20,20]});s.set(28061,{type:"begincast",window:[20,20]});s.set(27956,{type:"begincast",window:[20,20]});s.set(27957,{type:"begincast",window:[20,20]});s.set(27952,{type:"begincast",window:[30,30]});s.set(27969,{type:"begincast",window:[20,20]});s.set(27971,{type:"begincast",window:[20,20]});s.set(27939,{type:"begincast",window:[20,20]});s.set(27966,{type:"begincast",window:[20,20]});s.set(25316,{type:"begincast",window:[999,999]});s.set(25544,{type:"begincast",window:[10,10]});s.set(26379,{type:"begincast",window:[10,10]});s.set(31552,{type:"begincast",window:[30,30]});s.set(31573,{type:"begincast",window:[30,30]});s.set(31573,{type:"begincast",window:[30,30]});s.set(31617,{type:"begincast",window:[8,8]});s.set(31624,{type:"begincast",window:[30,30]});s.set(31649,{type:"begincast",window:[30,30]});s.set(18516,{type:"cast",window:[250,60]});s.set(18522,{type:"begincast",window:[500,500]});s.set(18552,{type:"begincast",window:[500,500]});s.set(19083,{type:"cast",window:[500,0]});function it(V){const v=new Map;V.filter(l=>l.type==="begincast").map(l=>v.set(l.actionId,(v.get(l.actionId)??0)+1));for(const l of V){v.get(l.actionId)===1&&l.type==="begincast"&&(l.window=[12,12]);const h=s.get(l.actionId);(h==null?void 0:h.type)===l.type&&(l.window=h==null?void 0:h.window)}return V}const lt={class:"fflogs-query-result-friendlies"},ot=["src","onerror"],at=be({__name:"fflogsImport",props:{settings:{},filters:{}},emits:["newTimeline","showFFlogsToggle","clearCurrentlyTimeline"],setup(V,{emit:v}){const l=V,h=v,W=new RegExp("(?<=^|\\/)(?<code>[\\d\\w]{16,})\\/?#fight=(?<fight>\\d+|last)"),j={begincast:"14",cast:"1[56]"};let C=N("查询"),$=N("");const m=N(!1),e=he({code:"",fightIndex:0,start:0,end:0,friendlies:[],abilityFilterEvents:[],abilityFilterCandidate:[],abilityFilterSelected:[],abilityFilterEventsAfterFilterRawTimeline:"",player:{},zoneID:0,bossIDs:[]});J();function R(r){f.fire({text:"正在解析数据 (步骤1/3)",showConfirmButton:!1}),J(),C.value="正在请求";let d=r.match(W);l.settings.api?d?d?(e.code=d.groups.code,se.get(`https://cn.fflogs.com/v1/report/fights/${e.code}?api_key=${l.settings.api}`).then(_=>{e.bossIDs=_.data.enemies.filter(S=>S.type==="Boss").map(S=>S.id),e.fightIndex=(d.groups.fight==="last"?_.data.fights.length:parseInt(d.groups.fight))-1;const b=_.data.fights[e.fightIndex];e.zoneID=b.zoneID,e.start=b.start_time,e.end=b.end_time,e.friendlies=_.data.friendlies.filter(S=>S.icon!=="LimitBreak"&&S.fights.find(F=>F.id===e.fightIndex+1)),C.value="查询",e.abilityFilterEvents.length=0,e.abilityFilterCandidate.length=0,f.fire("在列表中选择一名玩家")}).catch(_=>{f.fire({icon:"error",title:"Oops...(步骤1)",text:_}),C.value="查询"})):(f.fire({icon:"error",title:"url链接格式错误",footer:`验证规则：${W.toString().replaceAll(/\?\<\w+\>/g,"")}`}),C.value="查询"):(f.fire({icon:"error",title:"FF logs 战斗记录链接 未填写",footer:"例如：aaAAAAaAAAaAaa11#fight=18"}),C.value="查询"):(f.fire({icon:"error",title:"FF logs API Key 未填写",footer:'<a href="https://cn.fflogs.com/profile">点击这里，在最下方起名，然后获得你的V1 Client Key</a>'}),C.value="查询")}async function z(r){e.player=r,await ee().then(()=>{e.abilityFilterCandidate=e.abilityFilterEvents.reduce((d,_)=>(_.sourceIsFriendly&&!d.find(b=>b.actionId===_.actionId)&&d.push(_),d),[])}).catch(d=>{f.fire({icon:"error",title:"Oops...(步骤2)",text:d})})}async function ee(){f.fire({text:"正在解析数据，请耐心等待。(步骤2/3)",showConfirmButton:!1});let r=[];e.abilityFilterEvents.length=0;async function d(F){await se.get(`https://cn.fflogs.com/v1/report/events/casts/${e.code}?start=${F}&end=${e.end}&hostility=0&sourceid=${e.player.id}&api_key=${l.settings.api}`).then(async c=>{r.push(...c.data.events),c.data.nextPageTimestamp&&c.data.nextPageTimestamp>0&&c.data.nextPageTimestamp<e.end&&await d(c.data.nextPageTimestamp)}).catch(c=>{f.fire({icon:"error",title:"Oops...(步骤3.1)",text:c})})}async function _(F,c){c>=0&&await se.get(`https://cn.fflogs.com/v1/report/events/casts/${e.code}?start=${F}&end=${e.end}&hostility=1&sourceid=${e.bossIDs[c]}&api_key=${l.settings.api}`).then(async x=>{r.push(...x.data.events),x.data.nextPageTimestamp&&x.data.nextPageTimestamp>0&&x.data.nextPageTimestamp<e.end&&await _(x.data.nextPageTimestamp,c),c<e.bossIDs.length-1&&await _(F,c+1)}).catch(x=>{f.fire({icon:"error",title:"Oops...(步骤3.2)",text:x})})}let b=await d(e.start),S=await _(e.start,0);await Promise.all([b,S]).then(()=>{var F;for(const c of r)c.type==="begincast"&&c.sourceIsFriendly||e.abilityFilterEvents.push({time:Number(((c.timestamp-e.start)/1e3).toFixed(1)),type:c.type,actionName:nt(c.ability.guid)??c.ability.name,actionId:c.ability.guid,sourceIsFriendly:c.sourceIsFriendly,url:((F=c==null?void 0:c.ability)==null?void 0:F.abilityIcon.replace("-","/").replace(".png",""))??"000000/000405",window:void 0});e.player.icon&&l.filters[e.player.icon]&&(e.abilityFilterSelected=l.filters[e.player.icon]),f.fire("请在技能过滤器中选择需要的技能")})}function te(){f.fire({text:"正在解析数据 (步骤3/3)",showConfirmButton:!1}),e.player.icon&&(l.filters[e.player.icon]=JSON.parse(JSON.stringify(e.abilityFilterSelected))),e.abilityFilterEvents=e.abilityFilterEvents.filter(r=>r.sourceIsFriendly&&e.abilityFilterSelected.includes(r.actionId)||!r.sourceIsFriendly).sort((r,d)=>r.time-d.time),e.abilityFilterEvents=it(e.abilityFilterEvents),e.abilityFilterEventsAfterFilterRawTimeline=e.abilityFilterEvents.map(r=>r.sourceIsFriendly?`${r.time} "<${r.actionName}>~"${m.value?` tts "${r.actionName}"`:""}`:/^(?:攻击|attack|攻撃)$|^unknown/i.test(r.actionName)||r.type==="cast"&&r.window===void 0?`# ${r.time} "${r.actionName}"`:`${r.time} "${r.actionName}" sync /^.{14} \\w+ ${j[r.type]}:4.{7}:[^:]+:${r.actionId.toString(16).toUpperCase()}:/${r.window?` window ${r.window.join(",")}`:""}`).join(`
`),h("newTimeline",`导入${e.player.name}`,{zoneId:e.zoneID.toString(),job:e.player.icon??"NONE"},e.abilityFilterEventsAfterFilterRawTimeline,`${e.code}#fight=${e.fightIndex+1}`),J(),h("showFFlogsToggle"),f.fire({position:"top-end",icon:"success",title:"已生成新时间轴",showConfirmButton:!1,timer:1500})}function J(){e.code="",e.fightIndex=0,e.start=0,e.end=0,e.friendlies=[],e.abilityFilterEvents=[],e.abilityFilterCandidate=[],e.abilityFilterSelected=[],e.abilityFilterEventsAfterFilterRawTimeline="",e.player={},e.zoneID=0,e.bossIDs=[]}return(r,d)=>{const _=ve,b=De,S=Oe,F=Fe,c=Ue,x=Te,ne=Ce,q=xe,ie=Ie,le=Se,K=Pe;return T(),D(O,null,[n(c,{inline:!0,class:"fflogs-query"},{default:o(()=>[n(b,{label:"FF logs 战斗",style:{width:"450px"}},{default:o(()=>[n(_,{modelValue:i($),"onUpdate:modelValue":d[0]||(d[0]=p=>de($)?$.value=p:$=p),placeholder:"reports/AAAaAaAAaa1aA1aA#fight=3",autocomplete:"on"},null,8,["modelValue"])]),_:1}),n(b,{label:"FF logs V1 Key",style:{width:"450px"}},{default:o(()=>[n(_,{modelValue:l.settings.api,"onUpdate:modelValue":d[1]||(d[1]=p=>l.settings.api=p)},null,8,["modelValue"])]),_:1}),n(b,{label:"添加TTS",style:{width:"100px"}},{default:o(()=>[n(S,{modelValue:i(m),"onUpdate:modelValue":d[2]||(d[2]=p=>de(m)?m.value=p:null)},null,8,["modelValue"])]),_:1}),n(b,null,{default:o(()=>[n(F,{disabled:i(C)==="正在请求",type:"primary",onClick:d[3]||(d[3]=p=>R(i($)))},{default:o(()=>[g(U(i(C)),1)]),_:1},8,["disabled"])]),_:1})]),_:1}),y("div",lt,[n(q,null,{default:o(()=>[G(n(ne,{data:i(e).friendlies.filter(p=>p.icon!=="NPC"),stripe:"",border:"",class:"fflogs-query-result-friendlies-list"},{default:o(()=>[n(x,{prop:"name",label:"玩家名称","min-width":"60px"}),n(x,{prop:"server",label:"服务器","min-width":"60px"}),n(x,{label:"职业","min-width":"60px"},{default:o(({row:p})=>[g(U(i(P).nameToFullName(i(P).jobEnumToJob(i(P).iconToJobEnum(p.icon))).cn),1)]),_:1}),n(x,{label:"选定","min-width":"20px"},{default:o(p=>[n(F,{type:"primary",size:"small",onClick:ce=>z(p.row)},{default:o(()=>[g("选择")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),[[X,i(e).abilityFilterEvents.length===0]])]),_:1}),G(n(q,{class:"fflogs-query-result-friendlies-ability-filter-select"},{default:o(()=>[n(K,{span:20},{default:o(()=>[n(le,{modelValue:i(e).abilityFilterSelected,"onUpdate:modelValue":d[4]||(d[4]=p=>i(e).abilityFilterSelected=p),multiple:"",placeholder:"技能过滤器","fit-input-width":!0},{default:o(()=>[(T(!0),D(O,null,M(i(e).abilityFilterCandidate,p=>(T(),B(ie,{class:"ability-filter-li",key:p.actionId,value:p.actionId,label:p.actionName},{default:o(()=>[y("img",{src:`https://cafemaker.wakingsands.com/i/${p.url}.png`,class:"ability-filter-li-icon",title:"",loading:"auto",onerror:`javascript:this.src='https://xivapi.com/i/${p.url}.png';this.onerror=null;`},null,8,ot),g(U(p.actionName),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(K,{span:4},{default:o(()=>[n(F,{type:"success",onClick:d[5]||(d[5]=p=>te())},{default:o(()=>[g("选择好了")]),_:1})]),_:1})]),_:1},512),[[X,i(e).abilityFilterEvents.length>0]])])],64)}}});const st=Ve(at,[["__scopeId","data-v-cdf9e8a3"]]),rt=`# 新建之后先限制一个职业
00:00.0 "--同步化--" sync /^.{14} \\w+ 1[56]:[^:]*:[^:]+:7947:/ window 40,0
00:07.1 "创世真炎" sync /^.{14} \\w+ 14:4.{7}:[^:]+:7944:/ window 50,20
# 00:12.2 判定 "创世真炎"
# 00:15.3 读条 "八分核爆之念"
# 00:18.3 判定 "八分核爆之念"
# 00:21.5 读条 "灼炎创火"
# 00:24.5 判定 "灼炎创火"
# 00:32.9 读条 "创兽炎舞"
# 00:39.9 判定 "创兽炎舞"
# 00:43.1 读条 "炎蛇炮"
# 00:48.2 判定 "炎蛇炮"
# 00:51.4 判定 "炎蛇炮"

# 蛇轴（时间统一加1分钟或60秒）
01:00.9 "变异创身" sync /^.{14} \\w+ 14:4.{7}:[^:]+:794C:/ window 100,100 jump 120.9
# 02:03.9 判定 "变异创身"
# 02:11.2 判定 "回旋蛇踢"
# 02:14.4 读条 "戈尔贡的诅咒"
# 02:17.3 判定 "戈尔贡的诅咒"
# 02:20.5 读条 "潜入阴影"
# 02:23.5 判定 "潜入阴影"
# 02:56.7 读条 "爆热波动"
# 03:01.7 判定 "爆热波动"
# 03:17.2 读条 "创造幻影"
# 03:20.2 判定 "创造幻影"
# 03:23.3 读条 "创造命令"
# 03:26.3 判定 "创造命令"
# 03:29.5 读条 "多重灼炎"
# 03:34.5 判定 "多重灼炎"
# 03:38.6 判定 "多重灼炎"
# 03:41.7 读条 "四分核爆"
# 03:46.7 判定 "四分核爆"
# 03:58.9 读条 "创世真炎"
# 04:03.9 判定 "创世真炎"
# 04:13.4 读条 "变异创身"
# 04:16.4 判定 "变异创身"
# 04:23.8 读条 "双足狂怒"
# 04:28.8 判定 "双足狂怒"
# 04:30.9 判定 "双足狂怒"
# 04:33.0 判定 "双足狂怒"
# 04:35.1 判定 "双足狂怒"
# 04:37.3 读条 "致命践踏"
# 04:42.3 判定 "致命践踏"
# 04:42.5 判定 "致命践踏"
# 04:44.8 判定 "致命践踏"
# 04:47.1 判定 "致命践踏"
# 04:49.4 判定 "致命践踏"
# 05:03.7 读条 "八分核爆之念"
# 05:06.7 判定 "八分核爆之念"
# 05:09.9 读条 "四重火炎风暴"
# 05:12.9 判定 "四重火炎风暴"
# 05:19.1 读条 "喷炎升蛇"
# 05:22.1 判定 "喷炎升蛇"
# 05:32.3 读条 "四分核爆"
# 05:37.3 判定 "四分核爆"
# 05:43.8 读条 "创兽炎舞"
# 05:50.8 判定 "创兽炎舞"
# 05:53.9 读条 "炎蛇炮"
# 05:59.0 判定 "炎蛇炮"
# 06:02.3 判定 "炎蛇炮"
# 06:11.7 读条 "变异创身"
# 06:14.7 判定 "变异创身"
# 06:22.0 判定 "回旋蛇踢"
# 06:25.1 读条 "戈尔贡的诅咒"
# 06:28.1 判定 "戈尔贡的诅咒"
# 06:31.3 读条 "潜入阴影"
# 06:34.3 判定 "潜入阴影"
# 06:53.5 读条 "创造幻影"
# 06:56.5 判定 "创造幻影"
# 07:16.0 读条 "炎蛇炮"
# 07:21.0 判定 "炎蛇炮"
# 07:24.2 判定 "炎蛇炮"
# 07:33.6 读条 "变异创身"
# 07:36.6 判定 "变异创身"
# 07:44.4 读条 "践踏冲击"
# 07:49.4 判定 "践踏冲击"
# 07:52.9 读条 "二分核爆之念"
# 07:55.9 判定 "二分核爆之念"
# 07:59.1 读条 "炽热践踏"
# 08:11.1 判定 "炽热践踏"
# 08:15.8 判定 "践踏冲击"
# 08:19.7 判定 "踏火寻迹"
# 08:22.4 判定 "践踏碎击"
# 08:35.1 读条 "创世真炎"
# 08:40.1 判定 "创世真炎"

# 兽轴（时间统一加10分钟或600秒）
01:00.8 "变异创身" sync /^.{14} \\w+ 14:4.{7}:[^:]+:794B:/ window 100,100 jump 660.8
# 11:03.8 判定 "变异创身"
# 11:11.3 读条 "双足狂怒"
# 11:16.2 判定 "双足狂怒"
# 11:18.4 判定 "双足狂怒"
# 11:20.5 判定 "双足狂怒"
# 11:22.6 判定 "双足狂怒"
# 11:24.8 读条 "致命践踏"
# 11:29.7 判定 "致命践踏"
# 11:30.0 判定 "致命践踏"
# 11:32.3 判定 "致命践踏"
# 11:34.6 判定 "致命践踏"
# 11:36.8 判定 "致命践踏"
# 11:51.2 读条 "创造幻影"
# 11:54.2 判定 "创造幻影"
# 11:57.4 读条 "创造命令"
# 12:00.4 判定 "创造命令"
# 12:03.5 读条 "多重灼炎"
# 12:08.5 判定 "多重灼炎"
# 12:12.7 判定 "多重灼炎"
# 12:15.8 读条 "四分核爆"
# 12:20.8 判定 "四分核爆"
# 12:33.0 读条 "创世真炎"
# 12:38.0 判定 "创世真炎"
# 12:47.5 读条 "变异创身"
# 12:50.4 判定 "变异创身"
# 12:57.7 判定 "回旋蛇踢"
# 13:00.9 读条 "戈尔贡的诅咒"
# 13:03.9 判定 "戈尔贡的诅咒"
# 13:07.0 读条 "潜入阴影"
# 13:10.0 判定 "潜入阴影"
# 13:43.3 读条 "爆热波动"
# 13:48.3 判定 "爆热波动"
# 14:03.7 读条 "八分核爆之念"
# 14:06.7 判定 "八分核爆之念"
# 14:09.9 读条 "四重火炎风暴"
# 14:12.9 判定 "四重火炎风暴"
# 14:19.1 读条 "喷炎升蛇"
# 14:22.1 判定 "喷炎升蛇"
# 14:32.3 读条 "八分核爆"
# 14:37.3 判定 "八分核爆"
# 14:43.8 读条 "创兽炎舞"
# 14:50.8 判定 "创兽炎舞"
# 14:54.0 读条 "炎蛇炮"
# 14:59.1 判定 "炎蛇炮"
# 15:02.3 判定 "炎蛇炮"
# 15:11.7 读条 "变异创身"
# 15:14.7 判定 "变异创身"
# 15:22.5 读条 "践踏冲击"
# 15:27.4 判定 "践踏冲击"
# 15:31.0 读条 "二分核爆之念"
# 15:34.0 判定 "二分核爆之念"
# 15:37.2 读条 "炽热践踏"
# 15:49.2 判定 "炽热践踏"
# 15:53.9 判定 "践踏碎击"
# 15:57.7 判定 "踏火寻迹"
# 16:00.4 判定 "践踏冲击"
# 16:13.2 读条 "炎蛇炮"
# 16:18.2 判定 "炎蛇炮"
# 16:21.4 判定 "炎蛇炮"
# 16:30.8 读条 "变异创身"
# 16:33.8 判定 "变异创身"
# 16:41.1 判定 "回旋蛇踢"
# 16:44.3 读条 "戈尔贡的诅咒"
# 16:47.3 判定 "戈尔贡的诅咒"
# 16:50.4 读条 "潜入阴影"
# 16:53.4 判定 "潜入阴影"
# 17:12.7 读条 "创造幻影"
# 17:15.7 判定 "创造幻影"
# 17:35.1 读条 "创世真炎"
# 17:40.1 判定 "创世真炎"
`,E=V=>(Ye("data-v-26771d01"),V=V(),He(),V),dt=E(()=>y("br",null,null,-1)),ct=E(()=>y("br",null,null,-1)),ut={class:"slider-demo-block"},mt=E(()=>y("span",null,"模拟时间：",-1)),pt={class:"timeline-info-config"},ft=E(()=>y("span",null,"名称：",-1)),yt={class:"timeline-info-config"},wt=E(()=>y("span",null,"地图：",-1)),gt={class:"timeline-info-config"},_t=E(()=>y("span",null,"职业：",-1)),bt={class:"timeline-info-config"},ht=E(()=>y("span",null,"来源：",-1)),vt={class:"timeline-info-config"},Ft=E(()=>y("span",null,"创建：",-1)),Tt={style:{flex:"1"}},Ct={style:{"max-height":"353px"}},xt={class:"timeline-timeline-view"},St=E(()=>y("br",null,null,-1)),It=E(()=>y("br",null,null,-1)),Vt=be({__name:"timelineSettings",setup(V){const v=N(0),l=Xe(),h=we(l,"allTimelines"),W=we(l,"filters"),j=[{id:"0",name:"任意"}],C=N(!1),$=N(!1);let m=he({timeline:{name:"空",condition:{zoneId:"0",job:"NONE"},timeline:"空",codeFight:"空",create:"空"}});const e=location.href.includes("OVERLAY_WS="),R=N([]);b();async function z(){R.value=[{time:0,action:"正在加载...",show:!0,windowBefore:0,windowAfter:0,alertAlready:!0}],R.value=await et(m.timeline.timeline)}const ee=je(ge(()=>P.getBattleJobs2()),500,{maxWait:5e3});te();function te(){var u,t,w;for(const A in re)if(Object.prototype.hasOwnProperty.call(re,A)){const k=re[A];switch(k.contentType){case 4:case 5:case 28:j.push({id:A,name:((u=k.name)==null?void 0:u.cn)??((t=k.name)==null?void 0:t.ja)??((w=k.name)==null?void 0:w.ja)??A})}}x(),l.sortTimelines(),ne()}function J(){callOverlayHandler({call:"broadcast",source:"soumuaTimelineSetting",msg:{store:l.$state}})}function r(){var u;(u=d({url:location.href}))!=null&&u.OVERLAY_WS?(J(),f.fire({title:"已尝试进行通信,请检查ACT悬浮窗是否接收",text:"若无法通信，可将本页面直接添加到ACT悬浮窗进行编辑，设置将会自动保存。（编辑后刷新一下时间轴网页）"})):f.fire({icon:"error",title:"目前与ACT断开了连接。",text:'请启用ACT OverlayPlugin WSServer，并使本页面url参数中的端口号与其保持一致：OVERLAY_WS=ws://127.0.0.1:端口号/ws"'})}function d({url:u}){const t=u.split("?").pop().split("&"),w={};return t.forEach(A=>{let k=A.split("=");w[k[0]]=k[1]}),w}function _(){C.value=!C.value,b()}function b(){v.value=-30,m.timeline={name:"空",condition:{zoneId:"0",job:"NONE"},timeline:"空",codeFight:"空",create:"空"}}function S(){m.timeline=l.allTimelines[l.newTimeline()],z()}function F(u){window.scrollTo({top:0,behavior:"smooth"}),m.timeline=u,z()}function c(u){f.fire({title:`确定要删除${u.name}吗？`,text:"这将无法撤回！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"确认删除",cancelButtonText:"取消"}).then(t=>{t.isConfirmed&&(b(),h.value.splice(h.value.findIndex(w=>w===u),1))})}function x(){l.loadTimelineSettings(),Reflect.deleteProperty(l.configValues,"refreshRateMs")}function ne(){Re(()=>{l.saveTimelineSettings()},{flush:"post"})}function q(u){let t=new ze(".export",{text:()=>JSON.stringify(u)});t.on("success",()=>{f.fire({position:"top-end",icon:"success",title:"复制成功，已写入剪切板。",showConfirmButton:!1,timer:1500}),t.destroy()}),t.on("error",()=>{f.fire("复制失败，请手动复制！",JSON.stringify([u])),t.destroy()})}function ie(){f.fire({title:"输入导出的字符串",input:"text",returnInputValueOnDeny:!0,showDenyButton:!0,denyButtonText:"覆盖",showConfirmButton:!0,confirmButtonText:"追加",showCancelButton:!0,cancelButtonText:"放弃"}).then(u=>{if(u.isConfirmed||u.isDenied)try{u.isDenied?f.fire({title:"这将丢失目前拥有的所有数据，你确定要覆盖吗？",showConfirmButton:!1,showDenyButton:!0,denyButtonText:"确定覆盖",showCancelButton:!0,cancelButtonText:"取消"}).then(t=>{t.isDenied&&(l.allTimelines.length=0,l.allTimelines.push(...JSON.parse(u.value)),l.sortTimelines())}):(l.allTimelines.push(...JSON.parse(u.value)),l.sortTimelines())}catch(t){f.fire({icon:"error",title:"Oops...",text:t})}})}function le(){m.timeline=l.allTimelines[l.newTimeline("门神模板",{zoneId:"1088",job:"NONE"},rt,"P8S门神模板V6")]}const K=ge(()=>(v.value<0?"-":"")+(Array(2).join("0")+(Math.floor(v.value/60)+(v.value<0?1:0))).slice(-2)+":"+(Array(2).join("0")+Math.floor(v.value%60)).slice(-2));function p(){m.timeline.timeline=m.timeline.timeline.replaceAll(new RegExp("(?<=^|^#\\s*)(?<time>[:：\\d.]+)","gm"),(u,t)=>/^\d+[::]\d+(?:\.\d{1,2})?$/.test(u.toString())?_e.duration("00:"+u.toString()).as("seconds").toString():_e.utc(parseFloat(u.toString())*1e3).format("mm:ss.S"))}function ce(){f.fire({title:"确定删除相关LocalStorage吗？",text:"仅有当图片/技能缓存需要强制刷新时你才需要这样做。",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"gray",confirmButtonText:"确定",cancelButtonText:"取消"}).then(u=>{u.isConfirmed&&(localStorage.removeItem("souma-img-cache"),localStorage.removeItem("souma-action-cache"),f.fire({position:"top-end",icon:"success",title:"已清理",showConfirmButton:!1,timer:1500}))})}return(u,t)=>{const w=Fe,A=Je,k=st,ue=Ze,me=Ge,pe=qe,Q=Le,Ee=Me,Y=ve,fe=Ie,ye=Se,oe=xe,$e=tt,H=Te,ke=Ce,Be=We,Ae=Ke,Ne=Qe;return T(),B(Ne,{class:"container"},{default:o(()=>[n(A,null,{default:o(()=>[n(w,{type:"primary",onClick:t[0]||(t[0]=a=>S())},{default:o(()=>[g("新建")]),_:1}),n(w,{onClick:t[1]||(t[1]=a=>_())},{default:o(()=>[g("从FFlogs导入")]),_:1}),n(w,{onClick:t[2]||(t[2]=a=>$.value=!i($)),color:"#626aef",style:{color:"white"}},{default:o(()=>[g("样式设置")]),_:1}),n(w,{onClick:t[3]||(t[3]=a=>ie())},{default:o(()=>[g("导入")]),_:1}),n(w,{class:"export",onClick:t[4]||(t[4]=a=>q(i(h)))},{default:o(()=>[g("全部导出")]),_:1}),i(e)?(T(),B(w,{key:0,type:"success",onClick:t[5]||(t[5]=a=>r())},{default:o(()=>[g("通过WS发送到悬浮窗")]),_:1})):Z("",!0),n(w,{onClick:t[6]||(t[6]=a=>le())},{default:o(()=>[g("P8S门神模板")]),_:1}),n(w,{onClick:t[7]||(t[7]=a=>ce())},{default:o(()=>[g("清理LocalStorage缓存")]),_:1})]),_:1}),n(Ae,null,{default:o(()=>[i(C)?(T(),B(k,{key:0,settings:i(l).settings,filters:i(W),onClearCurrentlyTimeline:b,onShowFFlogsToggle:t[8]||(t[8]=()=>C.value=!i(C)),onNewTimeline:i(l).newTimeline},null,8,["settings","filters","onNewTimeline"])):Z("",!0),G(n(Q,{class:"box-card"},{default:o(()=>[n(pe,{title:"时间轴参数",size:"small",border:""},{default:o(()=>[(T(!0),D(O,null,M(i(l).configValues,(a,I,L)=>(T(),B(me,{key:L,label:i(l).configTranslate[I],"label-align":"right",width:"16em"},{default:o(()=>[n(ue,{min:0,step:.1,modelValue:i(l).configValues[I],"onUpdate:modelValue":ae=>i(l).configValues[I]=ae},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1}),dt,n(pe,{size:"small",title:"时间轴样式",border:""},{default:o(()=>[(T(!0),D(O,null,M(i(l).showStyle,(a,I,L)=>(T(),B(me,{key:L,label:i(l).showStyleTranslate[I],"label-align":"right",width:"16em"},{default:o(()=>[n(ue,{min:0,step:.01,modelValue:i(l).showStyle[I],"onUpdate:modelValue":ae=>i(l).showStyle[I]=ae},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1})]),_:1},512),[[X,i($)]]),ct,G(n(Q,null,{default:o(()=>[y("div",ut,[mt,n(Ee,{modelValue:i(v),"onUpdate:modelValue":t[9]||(t[9]=a=>de(v)?v.value=a:null),min:-30,max:1500,step:.1,"show-input":""},null,8,["modelValue"]),y("div",null,U(i(K)),1)]),n(oe,{class:"timeline-info"},{default:o(()=>[y("div",null,[y("p",pt,[ft,n(Y,{modelValue:i(m).timeline.name,"onUpdate:modelValue":t[10]||(t[10]=a=>i(m).timeline.name=a),class:"timeline-info-name"},null,8,["modelValue"])]),y("p",yt,[wt,n(ye,{modelValue:i(m).timeline.condition.zoneId,"onUpdate:modelValue":t[11]||(t[11]=a=>i(m).timeline.condition.zoneId=a),filterable:""},{default:o(()=>[(T(),D(O,null,M(j,a=>n(fe,{key:a.id,label:a.name,value:a.id},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),y("p",gt,[_t,n(ye,{modelValue:i(m).timeline.condition.job,"onUpdate:modelValue":t[12]||(t[12]=a=>i(m).timeline.condition.job=a),required:"",placeholder:"职业"},{default:o(()=>[(T(!0),D(O,null,M(i(ee),a=>(T(),B(fe,{key:a,label:i(P).nameToFullName(a).cn,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),y("p",bt,[ht,n(Y,{modelValue:i(m).timeline.codeFight,"onUpdate:modelValue":t[13]||(t[13]=a=>i(m).timeline.codeFight=a),disabled:""},null,8,["modelValue"])]),y("p",vt,[Ft,n(Y,{modelValue:i(m).timeline.create,"onUpdate:modelValue":t[14]||(t[14]=a=>i(m).timeline.create=a),disabled:""},null,8,["modelValue"])]),n(oe,{"m-b-10px":""},{default:o(()=>[n(w,{span:12,class:"export",onClick:t[15]||(t[15]=a=>q([i(m).timeline]))},{default:o(()=>[g("单独导出")]),_:1}),n(w,{type:"primary",span:12,onClick:t[16]||(t[16]=a=>p())},{default:o(()=>[g("切换时间")]),_:1})]),_:1}),n(oe,null,{default:o(()=>[n(w,{span:12,type:"danger",onClick:t[17]||(t[17]=a=>c(i(m).timeline))},{default:o(()=>[g("删除")]),_:1}),n(w,{span:12,onClick:t[18]||(t[18]=a=>b())},{default:o(()=>[g("隐藏编辑界面")]),_:1})]),_:1})]),y("div",Tt,[n(Y,{class:"timeline-timeline-raw",modelValue:i(m).timeline.timeline,"onUpdate:modelValue":t[19]||(t[19]=a=>i(m).timeline.timeline=a),type:"textarea",rows:12,wrap:"off",placeholder:"请键入时间轴文本",style:{"max-width":"569px"},onChange:t[20]||(t[20]=a=>z())},null,8,["modelValue"])]),y("div",Ct,[y("div",xt,[n($e,{config:i(l).configValues,lines:i(R),runtime:i(v),"show-style":i(l).showStyle},null,8,["config","lines","runtime","show-style"])])])]),_:1}),St]),_:1},512),[[X,i(m).timeline.create!=="空"]]),It,i(h).length>0?(T(),B(Q,{key:1},{default:o(()=>[n(ke,{data:i(h),style:{width:"100%"},stripe:""},{default:o(()=>[n(H,{prop:"name",label:"名称"}),n(H,{prop:"conditon",label:"地图",sortable:""},{default:o(a=>{var I;return[g(U((I=j.find(L=>L.id===a.row.condition.zoneId))==null?void 0:I.name),1)]}),_:1}),n(H,{prop:"conditon",label:"职业"},{default:o(a=>[g(U(i(P).nameToFullName(a.row.condition.job).cn),1)]),_:1}),n(H,{fixed:"right",label:"操作",width:"100"},{default:o(a=>[n(w,{onClick:I=>F(a.row),type:"primary",size:"small"},{default:o(()=>[g("编辑")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})):Z("",!0),i(h).length===0?(T(),B(Q,{key:2},{default:o(()=>[n(Be,{description:"点击上方新建或导入一个时间轴吧~"})]),_:1})):Z("",!0)]),_:1})]),_:1})}}});const Ut=Ve(Vt,[["__scopeId","data-v-26771d01"]]);export{Ut as default};

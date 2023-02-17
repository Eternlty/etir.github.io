import{g as D,h as N,d as C,i as L,c as P,ad as A,v as R,o as _,a as y,n as v,b as i,j as E,f as S,t as b,k as x,l as w,m as G,_ as H,p as J,ai as K,q as V,S as Q,P as W,E as X,s as e,w as t,F as Y,r as Z,e as B,aj as ee,U as ae,ak as te}from"./index-b2be74c4.js";import{E as le,a as ne,b as se,c as oe,d as ie,e as re,v as ue}from"./el-col-df1a7cee.js";import{r as F,E as pe,a as I}from"./request-cf29cfe4.js";import{E as de}from"./el-card-f418d079.js";const ce=D({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:N([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:N([String,Object,Array])}}),_e=C({name:"ElStatistic"}),fe=C({..._e,props:ce,setup(m,{expose:r}){const f=m,l=L("statistic"),d=P(()=>{const{value:a,formatter:g,precision:h,decimalSeparator:n,groupSeparator:u}=f;if(A(g))return g(a);if(!R(a))return a;let[o,s=""]=String(a).split(".");return s=s.padEnd(h,"0").slice(0,h>0?h:0),o=o.replace(/\B(?=(\d{3})+(?!\d))/g,u),[o,s].join(s?n:"")});return r({displayValue:d}),(a,g)=>(_(),y("div",{class:v(i(l).b())},[a.$slots.title||a.title?(_(),y("div",{key:0,class:v(i(l).e("head"))},[E(a.$slots,"title",{},()=>[S(b(a.title),1)])],2)):x("v-if",!0),w("div",{class:v(i(l).e("content"))},[a.$slots.prefix||a.prefix?(_(),y("div",{key:0,class:v(i(l).e("prefix"))},[E(a.$slots,"prefix",{},()=>[w("span",null,b(a.prefix),1)])],2)):x("v-if",!0),w("span",{class:v(i(l).e("number")),style:G(a.valueStyle)},b(i(d)),7),a.$slots.suffix||a.suffix?(_(),y("div",{key:1,class:v(i(l).e("suffix"))},[E(a.$slots,"suffix",{},()=>[w("span",null,b(a.suffix),1)])],2)):x("v-if",!0)],2)],2))}});var me=H(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/statistic/src/statistic.vue"]]);const ve=J(me);const ye={3:"胜点",4:"家财",5:"洞穴",6:"王者",8:"斗神",16:"圣物",17:"高级精华",25:"特级精华"};function ge(m){return F({cmd:"shop",shoptype:m})}function he(m,r,f,l){return F({cmd:"shop",subtype:m,num:f,id:r,price:l})}const be=C({__name:"index",setup(m){const r=K({shopType:"12"}),f=V(!1),l=V({commodity_info:[],winpoint:0,servant_cash:0,cave_point:0,king_medal:0,doushen_medal:0,internal_force:0,doudou:0,gzwulin_score:0,fragment:0,shen_bing_coin:0,jewel_num:0,king_jingpo_num:0,chrono_card_num:0,honor:"",skin_point:0}),d=V(""),a=async()=>{f.value=!0;const{data:n}=await ge(r.shopType);l.value=n,f.value=!1},g=async n=>{const{data:u}=await he(n.goods_type,n.id,n.remain,n.remain*n.prime_price);u.result===0?(I("购买["+n.name+"*"+n.remain+"]成功"),a()):I({message:u.msg,type:"error"})};Q(()=>{a()}),W(r,()=>{a()});const h=P(()=>l.value.commodity_info.filter(n=>!d.value||n.name.includes(d.value)));return(n,u)=>{const o=ve,s=le,j=ne,T=de,z=se,M=oe,O=pe,c=ie,$=X,U=re,q=ue;return _(),y("div",null,[e(T,{shadow:"never"},{default:t(()=>[e(j,null,{default:t(()=>[e(s,{span:3},{default:t(()=>[e(o,{title:"斗豆",value:l.value.doudou},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"胜点",value:l.value.winpoint},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"洞穴",value:l.value.cave_point},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"斗神",value:l.value.doushen_medal},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"家财",value:l.value.servant_cash},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"王者",value:l.value.king_medal},null,8,["value"])]),_:1}),e(s,{span:3},{default:t(()=>[e(o,{title:"king_jingpo_num",value:l.value.king_jingpo_num},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(T,{shadow:"never",style:{"margin-top":"24px"}},{default:t(()=>[e(j,null,{default:t(()=>[e(s,{span:4},{default:t(()=>[e(M,{modelValue:r.shopType,"onUpdate:modelValue":u[0]||(u[0]=p=>r.shopType=p)},{default:t(()=>[(_(!0),y(Y,null,Z(i(ye),(p,k)=>(_(),B(z,{key:k,label:p,value:k},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,{span:4},{default:t(()=>[e(O,{placeholder:"搜索",modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=p=>d.value=p),"suffix-icon":i(ee)},null,8,["modelValue","suffix-icon"])]),_:1})]),_:1}),ae((_(),B(U,{data:i(h),style:{width:"100%","margin-top":"24px"}},{default:t(()=>[e(c,{type:"index",width:"50"}),e(c,{prop:"goods_id",label:"编码",width:"100"}),e(c,{prop:"name",label:"名称",width:"200"}),e(c,{label:"限制",width:"100"},{default:t(p=>[S(" VIP"+b(p.row.vip_level),1)]),_:1}),e(c,{prop:"price",label:"价格",width:"100"}),e(c,{prop:"remain",label:"库存",width:"100"}),e(c,{prop:"goods_effect",label:"详情"}),e(c,{label:"操作",width:"150"},{default:t(p=>[e($,{link:"",type:"primary",onClick:k=>g(p.row)},{default:t(()=>[S("购买")]),_:2},1032,["onClick"]),e($,{link:"",type:"primary"},{default:t(()=>[S("添加")]),_:1})]),_:1})]),_:1},8,["data"])),[[q,f.value]])]),_:1})])}}});const xe=te(be,[["__scopeId","data-v-eec49e5d"]]);export{xe as default};
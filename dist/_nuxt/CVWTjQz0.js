import{_ as u}from"./CL0M6pVV.js";import{e as v,N as w,r as _,O as y,f as b,q as k,o,c as n,a as t,b as r,w as l,F as q,g as B,d as j,h as z,t as p,_ as C}from"./Hc-DYcqC.js";import{u as F}from"./fcYnjvVG.js";const N={class:"text-white rtl min-h-screen"},M={class:"sticky top-0 z-50 transition-all duration-300"},T={class:"flex justify-between items-center mb-1 p-3 bg-header"},A={class:"flex"},H={key:0,class:"grid grid-cols-2 w-full p-5 gap-3"},L={class:"w-full absolute -mt-8 flex justify-center"},S=["src"],V={class:"box bg-gray-800 flex flex-col h-18 pt-12 min-h-40 items-center rounded-3xl z-10"},Z={class:"justify-center text-2xl px-2 text-center -bottom-1 py-2"},I={class:"justify-center text-green-500 pb-3 text-[13px] font-normal",style:{direction:"rtl"}},R={key:1,class:"text-center mt-16 text-xl"},D=v({__name:"result",setup(E){const c=w(),x=_(c.query.query||""),a=_([]),f=F(),i=()=>{a.value=f.searchFood(x.value)};y(()=>c.query.query,i),b(i);const h=()=>{window.history.back()};return(O,e)=>{const d=u,m=u,g=k("spanp");return o(),n("div",N,[t("div",M,[t("div",T,[e[2]||(e[2]=t("div",{class:"text-center"},[t("h1",{class:"text-2xl rtl text-orange-300 font-bold text-[28px] text-center transition-all"},"نتایج جستجو")],-1)),t("div",A,[r(d,{to:"/orders",class:"pl-8"},{default:l(()=>e[0]||(e[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-8 transition-transform duration-300"},[t("path",{d:"M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"})],-1)])),_:1}),r(m,{onClick:h},{default:l(()=>e[1]||(e[1]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 24 24"},[t("path",{fill:"white",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1)])),_:1})])])]),a.value.length>0?(o(),n("div",H,[(o(!0),n(q,null,B(a.value,s=>(o(),z(d,{to:`/food/${s.id}`,key:s.id,class:"relative mt-10 col-span-1"},{default:l(()=>[t("div",L,[t("img",{src:s.image,alt:"Food Image",class:"z-5000 w-20 flex h-20 object-contain"},null,8,S)]),t("div",V,[t("span",Z,p(s.title),1),t("span",I,p(s.price)+" هزار تومان ",1)])]),_:2},1032,["to"]))),128))])):(o(),n("div",R,[r(g,null,{default:l(()=>e[3]||(e[3]=[j("نتیجه‌ای پیدا نشد")])),_:1})]))])}}}),K=C(D,[["__scopeId","data-v-e2f3bdbd"]]);export{K as default};
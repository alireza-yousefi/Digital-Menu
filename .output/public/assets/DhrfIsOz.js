import{_ as Q}from"./wbi71qOC.js";import{e as M,r as l,f as J,o as n,c as i,F as B,g as z,h as W,i as s,I as X,_ as $,j as Y,k as Z,a as t,b as w,w as T,t as u,l as tt,m as V,v as L,n as et,d as _,p as N}from"./DMlruM79.js";import{u as st}from"./Dv0yem5J.js";const ot={class:"ratingBar"},lt=M({__name:"rating",props:{value:{type:Number,default:0,required:!1},count:{type:Number,default:5,required:!1},icon:{type:String,default:"solar:star-bold-duotone",required:!1},colorDisable:{type:String,default:"#bdbdbd",required:!1},colorActive:{type:String,default:"#ff7800",required:!1},size:{type:Number,default:30,required:!1},readOnly:{type:Boolean,default:!1,required:!1}},emits:["change"],setup(h,{emit:k}){const C=k,r=h,c=l(3),g=m=>m+1<=c.value?r.colorActive:r.colorDisable,x=m=>{r.readOnly||(c.value=m+1,C("change",c.value))};return J(async()=>{c.value=r.value}),(m,j)=>(n(),i("div",ot,[(n(!0),i(B,null,z(r.count,(q,p)=>(n(),W(s(X),{icon:r.icon,color:g(p),width:h.size,onClick:S=>x(p)},null,8,["icon","color","width","onClick"]))),256))]))}}),nt=$(lt,[["__scopeId","data-v-f2235a1a"]]),at={key:0,class:"content-center text-center bg-gray-500 h-screen w-screen"},it={key:1,class:"bg-cover flex flex-col text-white min-h-screen pb-24"},rt={class:"flex flex-row mt-1 items-center justify-between px-4 py-4"},dt={class:"text-2xl w-full font-bold text-center flex-grow"},ut={class:"flex justify-center mt-2 cursor-pointer"},ct=["src"],mt={style:{direction:"rtl"},class:"grid grid-cols-2 flex-row flex-col-2 mt-5 p-4"},ft={class:"flex flex-col-1 items-center justify-self-end ml-12 justify-center w-10 h-10 bg-orange-500"},xt={class:"text-[23px] text-center"},pt={style:{direction:"rtl"},class:"Estedad_FD_Light text-justify leading-7 min-h-40 mx-7"},vt={class:"gap-2 px-2 mb-4"},gt={class:"bg-gray-800 px-2 py-4 text-center rounded-3xl flex rtl justify-between items-center"},bt={class:"px-2 flex flex-col items-center justify-center text-center w-1/4"},yt={class:"font-bold text-20px mt-1"},wt={class:"px-2 flex flex-col border-r items-center justify-center text-center w-1/4"},_t={id:"totalCalories",class:"font-bold text-20px mt-1"},ht={class:"px-2 flex flex-col border-r items-center justify-center text-center w-1/4"},kt={class:"font-bold text-20px mt-1"},Ct={class:"w-full max-w-sm mx-auto rounded-lg shadow-md rtl px-8"},jt={class:"divide-y divide-gray-200"},qt={class:""},St={class:""},It={class:"p-4 mt-6 text-white rounded-lg rtl"},Nt={key:0,class:"mt-2 text-sm text-red-600"},Bt={class:"mt-4 justify-self-center w-full item"},zt={key:0,class:"mt-2 text-sm text-red-600"},Dt={class:"mt-4"},Ot={key:0,class:"mt-8"},Ft={class:"mt-4 space-y-4"},Tt={class:"flex justify-between"},Vt={class:"text-m"},Lt={class:"text-m flex items-center flex-col"},Mt={key:0,class:"text-sm text-yellow-500 mt-2"},Jt={key:1,class:"mt-8 text-gray-500"},$t={style:{background:"#f97316"},class:"flex bottom-2 left-[2.5vw] items-center rounded-full w-[95vw] justify-between px-4 py-4 fixed bottom-0"},Et={class:"text-lg font-semibold"},Rt={class:"text-[25px] ml-1"},At=M({__name:"[code]",setup(h){const k=Y(),C=st(),r=l(1),c=l(""),g=l(""),x=l(0),m=l(0),j=l(),q=l(""),p=l(""),S=l([]),b=l([]),I=l(null),D=l(!0),v=l([]),d=l({name:"",message:"",rating:0}),O=Z(()=>`comments_${I.value}`),f=l({name:!1,rating:!1}),E=()=>{r.value++},R=()=>{r.value>1&&r.value--},A=()=>{let o=C.getFoodByID(I.value);console.log(o),c.value=o.title,g.value=o.descriptions.long,x.value=o.price,q.value=o.image,p.value=o.category,j.value=o.time,S.value=o.Combinations,m.value=o.Combinations.reduce((e,y)=>e+y.calorie,0),D.value=!1},H=()=>{const o=b.value.find(e=>e.title===c.value);o?o.quantity+=r.value:(b.value.push({id:c.value,title:c.value,price:x.value,quantity:r.value}),alert("سفارش شما ثبت شد")),localStorage.setItem("cart",JSON.stringify(b.value))},U=()=>{const o=localStorage.getItem(O.value);v.value=o?JSON.parse(o):[]},K=()=>{localStorage.setItem(O.value,JSON.stringify(v.value))},G=()=>{f.value.name=!d.value.name.trim(),f.value.rating=d.value.rating<=0,!f.value.name&&!f.value.rating&&(v.value.push({...d.value}),K(),d.value.name="",d.value.rating=0,d.value.message="")};return J(async()=>{const o=localStorage.getItem("cart");o&&(b.value=JSON.parse(o)),I.value=parseInt(k.params.code),A(),U()}),(o,e)=>{const y=Q,F=nt;return n(),i("div",null,[s(D)?(n(),i("div",at,e[3]||(e[3]=[t("div",{class:"lds-roller"},null,-1)]))):(n(),i("div",it,[t("div",rt,[w(y,{to:"/menu"},{default:T(()=>e[4]||(e[4]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24"},[t("path",{fill:"white",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1)])),_:1}),t("span",dt,u(s(c)),1),e[5]||(e[5]=t("div",{class:"w-10 h-10"},null,-1))]),t("div",ut,[t("img",{src:s(q),alt:"",style:{"object-fit":"cover"},class:"h-72"},null,8,ct)]),t("div",mt,[e[8]||(e[8]=t("div",{class:"text-orange-500 flex-col-1 text-2xl font-semibold mb-2 mr-3"},"توضیحات",-1)),t("div",ft,[t("button",{onClick:R,class:"bg-orange-500 text-white h-10 px-3 py-1 rounded-r-3xl"},e[6]||(e[6]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14"})],-1)])),t("div",xt,u(s(r)),1),t("button",{onClick:E,class:"bg-orange-500 text-white h-10 px-3 py-1 rounded-l-3xl"},e[7]||(e[7]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 24"},[t("path",{fill:"white",d:"M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"})],-1)]))])]),t("div",pt,u(s(g)),1),t("div",vt,[t("div",gt,[t("div",bt,[e[9]||(e[9]=t("span",{class:"text-orange-500 text-16px"}," نوع ",-1)),t("span",yt,u(s(p)),1)]),t("div",wt,[e[10]||(e[10]=t("span",{class:"text-orange-500 text-16px"}," کالری",-1)),t("span",_t,u(s(m)),1)]),e[12]||(e[12]=t("div",{class:"px-2 flex flex-col border-r items-center justify-center text-center w-1/4"},[t("span",{class:"text-orange-500 text-16px"}," امتیاز"),t("span",{class:"font-bold text-20px mt-1"},"3.5")],-1)),t("div",ht,[e[11]||(e[11]=t("span",{class:"text-orange-500 text-16px"}," تحویل",-1)),t("span",kt,u(s(j))+" دقیقه",1)])])]),t("div",Ct,[e[13]||(e[13]=t("div",{class:"text-white font-bold text-lg px-4 py-2 flex justify-between"},[t("span",null,"ترکیب"),t("span",null,"کالری")],-1)),t("div",jt,[(n(!0),i(B,null,z(s(S),a=>(n(),i("div",{key:a.title,class:"flex justify-between items-center px-4 py-2 text-sm text-white"},[t("span",qt,u(a.title),1),t("span",St,u(a.calorie),1)]))),128))])]),t("div",It,[e[23]||(e[23]=t("h2",{class:"text-lg font-bold"},"ثبت نظر",-1)),t("form",{onSubmit:tt(G,["prevent"]),class:"mt-4"},[t("div",null,[e[15]||(e[15]=t("label",{for:"name",class:"block mb-2 text-sm font-medium"},"نام شما",-1)),V(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>s(d).name=a),class:et([s(f).name?"bg-red-50 border-red-500 text-red-900":"dark border ","block w-full rounded-lg focus:ring focus:border focus:ring-red-500 focus:border-red-500 p-2.5 text-sm"]),placeholder:"نام خود را وارد کنید"},null,2),[[L,s(d).name]]),s(f).name?(n(),i("p",Nt,e[14]||(e[14]=[t("span",{class:"font-medium"},"خطا:",-1),_(" نام الزامی است. ")]))):N("",!0)]),t("div",Bt,[e[17]||(e[17]=t("label",{class:"block mb-2 text-m font-medium"},"امتیاز",-1)),w(F,{size:45,value:s(d).rating,onChange:e[1]||(e[1]=a=>s(d).rating=a)},null,8,["value"]),s(f).rating?(n(),i("p",zt,e[16]||(e[16]=[t("span",{class:"font-medium justify-self-start"},"خطا:",-1),_(" امتیاز الزامی است. ")]))):N("",!0)]),t("div",Dt,[e[18]||(e[18]=t("label",{for:"message",class:"block mb-2 text-sm font-medium"},"پیام (اختیاری)",-1)),V(t("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=a=>s(d).message=a),class:"dark border block w-full rounded-lg focus:ring focus:border focus:ring-gray-500 focus:border-gray-500 p-2.5 text-sm",placeholder:"پیام خود را وارد کنید (اختیاری)"},null,512),[[L,s(d).message]])]),e[19]||(e[19]=t("div",{class:"w-full",style:{direction:"ltr"}},[t("button",{type:"submit",class:"mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"}," ارسال نظر ")],-1))],32),s(v).length?(n(),i("div",Ot,[e[22]||(e[22]=t("h2",{class:"text-lg font-bold"},"نظرات کاربران",-1)),t("div",Ft,[(n(!0),i(B,null,z(s(v),(a,P)=>(n(),i("div",{key:P,class:"p-4 dark border-b justify-between flex-col"},[t("div",Tt,[t("p",Vt,[e[20]||(e[20]=t("strong",null,"نام:",-1)),_(" "+u(a.name),1)]),t("div",Lt,[e[21]||(e[21]=t("strong",null,"امتیاز",-1)),w(F,{readOnly:!0,size:14,value:a.rating,class:"mt-1"},null,8,["value"])])]),a.message?(n(),i("p",Mt,u(a.message),1)):N("",!0)]))),128))])])):(n(),i("p",Jt,"هنوز نظری ثبت نشده است."))]),t("div",$t,[t("div",Et,[e[24]||(e[24]=t("span",{class:"Estedad_FD_Light float-left font-light text-black"},"هزار تومان",-1)),t("span",Rt,u(s(x)),1)]),w(y,{to:"/menu",class:"bg-black text-white px-6 py-2 rounded-full",onClick:H},{default:T(()=>e[25]||(e[25]=[_(" افزودن به سبد سفارش ")])),_:1})])]))])}}}),Gt=$(At,[["__scopeId","data-v-fc9cbda5"]]);export{Gt as default};
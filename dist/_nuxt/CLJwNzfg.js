import{_ as j}from"./Ci5-Epeu.js";import{e as q,r as s,f as m,g as C,o as N,c as B,a as e,b as f,w,t as i,d}from"./DIqESOuu.js";const S={class:"bg-gradient-to-b from-slate-700 to-black bg-cover flex flex-col text-white min-h-screen"},T={class:"flex flex-row mt-1 items-center justify-between px-4 py-4"},I={class:"text-2xl w-full font-bold text-center flex-grow"},L={class:"flex justify-center mt-2 cursor-pointer"},D=["src"],E={style:{direction:"rtl"},class:"grid grid-cols-2 flex-row flex-col-2 mt-5 p-4"},J={class:"flex flex-col-1 items-center justify-self-end ml-12 justify-center w-10 h-10 bg-orange-500"},M={class:"text-[23px] text-center"},O={style:{direction:"rtl"},class:"Estedad_FD_Light text-justify leading-7 min-h-40 mx-7"},V={class:"grid grid-cols-3 gap-2 px-4 mb-4"},z={class:"bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"},F={class:"font-bold text-20px"},H={class:"bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"},R={class:"font-bold text-20px rtl"},A={class:"bg-gray-800 col-span-1 p-6 text-center rounded-3xl flex flex-col space-y-2"},G={style:{background:"#f97316"},class:"flex mb-3 items-center rounded-full mx-3 justify-between px-4 py-4"},K={class:"text-lg font-semibold"},P={class:"text-[25px] ml-1"},X=q({__name:"[code]",setup(Q){const l=s(1),a=s(""),p=s(""),c=s(0),x=s(),g=s(""),u=s(""),v=s(0),h=s([{id:1,title:"چیـز کـیـک",description:"چیز کیک  با  ترکیبی از پنیر خامه‌ای ممتاز و بیسکویت‌های ترد تهیه شده و طعمی بی‌نظیر و دلپذیر دارد. این دسر نرم و سبک، برای هر جشن و مناسبت خاصی مناسب بوده و با میوه‌های تازه و سس شکلات تزئین شده است.!",price:86,time:5,image:"/img/pexels-elifgokce787-16871293-removebg-preview.png",type:"کیک",conposition:5},{id:2,title:"کاپـوچـینـو",description:"کاپوچینو  از ترکیب قهوه اسپرسو، شیر بخار داده شده و کف شیر نرم تهیه می‌شود. این گزینه شیک و دلپذیر، احساس گرما و آرامش را به هر لحظه‌ی شما اضافه می‌کند!",price:73,time:15,image:"/img/pexels-orlovamaria-4916561-removebg-preview.png",type:"قهوه",conposition:5},{id:3,title:"آیـس لـته",description:"آیس لته , نوشیدنی خنکی که از ترکیب قهوه اسپرسو، شیر سرد و یخ تهیه می‌شود. این ترکیب خامه‌ای و خوش‌طعم، انتخابی ایده‌آل برای روزهای گرم تابستانی است و تازه‌ترین طراوت را به شما هدیه می‌دهد!",price:76,time:10,image:"/img/ice-latte2.png",type:"قهوه",conposition:5},{id:4,title:"شـیـک تـوت فـرنگـی",description:"شیک توت فرنگی یک دسر خنک و میوه‌ای است که از ترکیب توت فرنگی تازه، بستنی و شیر تهیه می‌شود. این نوشیدنی خوشمزه و خامه‌ای، طعمی ملس و لذیذ دارد که هر کسی را به یک تجربه تابستانی شگفت‌انگیز می‌برد!",price:90,time:15,image:"/img/shake-toot.png",type:"شیک",conposition:5},{id:5,title:"سیب‌زمینی سرخ‌کرده",description:"سیب‌زمینی سرخ‌کرده تُرد و طلایی با طعمی نمکی و دلچسب که همیشه انتخاب مناسبی برای میان‌وعده است!",price:98,time:10,image:"/img/frise.png",type:"میان‌وعده",conposition:3}]),y=()=>{l.value++},b=()=>{l.value>1&&l.value--},_=o=>{let t=h.value.find(r=>r.id==o);a.value=t.title,p.value=t.description,c.value=t.price,g.value=t.image,u.value=t.type,x.value=t.time,v.value=t.conposition},n=s([]);m(()=>{const o=localStorage.getItem("cart");o&&(n.value=JSON.parse(o))});const k=()=>{const o=n.value.find(t=>t.title===a.value);o?o.quantity+=l.value:n.value.push({id:a.value,title:a.value,price:c.value,quantity:l.value}),localStorage.setItem("cart",JSON.stringify(n.value))};return console.log("Cart:",n.value),console.log("Cart:",JSON.stringify(n.value)),m(async()=>{const t=C().params.code;_(t),console.log("code : ",t)}),(o,t)=>{const r=j;return N(),B("div",S,[e("div",T,[f(r,{to:"/menu"},{default:w(()=>t[0]||(t[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"})],-1)])),_:1}),e("span",I,i(a.value),1),t[1]||(t[1]=e("div",{class:"w-10 h-10"},null,-1))]),e("div",L,[e("img",{src:g.value,alt:"",style:{"object-fit":"cover"},class:"h-72"},null,8,D)]),e("div",E,[t[4]||(t[4]=e("div",{class:"text-orange-500 flex-col-1 text-2xl font-semibold mb-2 mr-3"},"توضیحات",-1)),e("div",J,[e("button",{onClick:b,class:"bg-orange-500 text-white h-10 px-3 py-1 rounded-r-3xl"},t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14"})],-1)])),e("div",M,i(l.value),1),e("button",{onClick:y,class:"bg-orange-500 text-white h-10 px-3 py-1 rounded-l-3xl"},t[3]||(t[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 24"},[e("path",{fill:"white",d:"M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"})],-1)]))])]),e("div",O,i(p.value),1),e("div",V,[e("div",z,[t[5]||(t[5]=e("span",{class:"text-orange-500 text-16px"}," نوع ",-1)),e("span",F,i(u.value),1)]),e("div",H,[t[6]||(t[6]=e("span",{class:"text-orange-500 text-16px"}," تحویل",-1)),t[7]||(t[7]=d()),e("span",R,i(x.value)+" دقیقه",1)]),e("div",A,[t[8]||(t[8]=e("span",{class:"text-orange-500 text-16px"}," ترکیب",-1)),t[9]||(t[9]=d()),t[10]||(t[10]=e("span",{class:"font-bold text-20px"},null,-1)),d(" "+i(v.value),1)])]),e("div",G,[e("div",K,[t[11]||(t[11]=e("span",{class:"Estedad_FD_Light float-left font-light text-black"},"هزار تومان",-1)),e("span",P,i(c.value),1)]),f(r,{to:"/menu",class:"bg-black text-white px-6 py-2 rounded-full",onClick:k},{default:w(()=>t[12]||(t[12]=[d(" افزودن به سبد سفارش")])),_:1})])])}}});export{X as default};
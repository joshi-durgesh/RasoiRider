function e(e,t,s,a){Object.defineProperty(e,t,{get:s,set:a,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire5f7c,s=t.register;s("ha2ya",function(s,a){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),e(s.exports,"default",()=>o);var r=t("ayMG0"),l=t("H4q4C"),i=t("aphAM"),d=t("aRoPK"),n=t("i8U95"),c=t("acw62"),o=()=>{let{resId:e}=(0,i.useParams)(),t=(0,l.default)(e),[s,a]=(0,c.useState)(1);if(null===t)return;let o=t?.data?.cards?.filter(e=>void 0!==e.groupedCard),x=o?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(e=>e?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");return(0,r.jsxs)("section",{className:"max-w-3xl mx-auto ",children:[(0,r.jsx)(d.default,{menuData:t}),(0,r.jsx)("div",{className:"py-4 pb-10",children:x?.map((e,t)=>r.jsx(n.default,{list:e,showItem:t===s,setShowIndex:()=>a(t===s?null:t)},e?.card?.card?.title))})]})}}),s("H4q4C",function(s,a){e(s.exports,"default",()=>i);var r=t("acw62"),l=t("9nLNU"),i=e=>{let[t,s]=(0,r.useState)(null);(0,r.useEffect)(()=>{a()},[]);let a=async()=>{let t=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(l.default+e)}`);s(await t.json())};return t}}),s("aRoPK",function(s,a){e(s.exports,"default",()=>l);var r=t("ayMG0"),l=({menuData:e})=>{let t=e?.data?.cards?.filter(e=>e?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"),{name:s,cuisines:a,areaName:l,sla:i,avgRating:d,totalRatingsString:n}=t?.[0]?.card?.card?.info,{lastMileTravelString:c}=i;return(0,r.jsxs)("div",{className:"flex justify-between pb-5 border-b-[1px] border-b-[#ffb545] border-dashed mt-9",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"font-bold text-lg mb-2 text-[#ffb545]",children:s}),(0,r.jsx)("p",{className:"text-[13px] text-white",children:a.join(",")}),(0,r.jsxs)("p",{className:"text-[13px] text-white",children:[l,",",c]})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center border-[1px] border-[#ffb545] items-center rounded-xl p-3",children:[(0,r.jsxs)("span",{className:"bi bi-star-fill pb-1 text-[#ffb545] font-bold",children:[" ",d]}),(0,r.jsx)("span",{className:"pt-1 text-[#ffb545] border-t-[1px] border-[#ffb545] font-semibold",children:n})]})]})}}),s("i8U95",function(s,a){e(s.exports,"default",()=>i);var r=t("ayMG0"),l=t("lhWdw"),i=({list:e,showItem:t,setShowIndex:s})=>{let{itemCards:a,title:i}=e?.card?.card;return(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsxs)("div",{className:"flex justify-between shadow-sm cursor-pointer bg-[#155e75] text-[#ffb545] py-2 ps-5",onClick:()=>{s()},children:[(0,r.jsx)("h1",{className:"text-lg font-bold ",children:i}),(0,r.jsx)("span",{className:"bi bi-caret-down-fill mr-5"})]}),(0,r.jsx)("div",{className:"",children:t&&(0,r.jsx)(l.default,{itemCards:a})})]},i)}}),s("lhWdw",function(s,a){e(s.exports,"default",()=>i);var r=t("ayMG0"),l=t("1eCNX"),i=({itemCards:e})=>{let t=(0,l.bestSellerCuisine)(l.default);return(0,r.jsx)("ul",{children:e.map(e=>{let{info:s}=e?.card,{id:a,ribbon:i}=s;return(0,r.jsx)("li",{children:i?.text?(0,r.jsx)(t,{items:s,bestseller:i?.text},a):(0,r.jsx)(l.default,{items:s},a)},a)})})}}),s("1eCNX",function(s,a){e(s.exports,"bestSellerCuisine",()=>c),e(s.exports,"default",()=>o);var r=t("ayMG0"),l=t("7jD0c"),i=t("awx58"),d=t("9nLNU"),n=t("3COFj");let c=e=>t=>{let{bestseller:s}=t;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("label",{className:"text-orange-400 absolute top-4 left-9",children:[(0,r.jsx)("i",{className:"bi bi-star-fill"})," ",s]}),(0,r.jsx)(e,{...t})]})};var o=({items:e})=>{let{name:t,price:s,description:a,id:c,imageId:o,isVeg:x,defaultPrice:f,ribbon:u}=e,m=o?d.CDN_URL+o:n&&n.__esModule?n.default:n,b=(0,l.useDispatch)(),p=e=>{b((0,i.addItems)(e))};return(0,r.jsx)("div",{className:" pb-5 border-b-[1px] items-center  border-b-[#ffb545]",children:(0,r.jsxs)("div",{className:"flex mx-3 pt-4",children:[(0,r.jsxs)("div",{className:" basis-10/12",children:[(0,r.jsx)("div",{children:x?(0,r.jsx)("i",{className:"bi bi-caret-down-square text-green-700"}):(0,r.jsx)("i",{className:"bi bi-caret-up-square text-orange-700"})}),(0,r.jsx)("div",{className:"font-semibold mt-3 text-[#ffb545]",children:t}),(0,r.jsx)("div",{className:"mb-4 text-[#e5e5e5]",children:parseInt(s?s/100:f/100).toLocaleString("en-in",{style:"currency",currency:"INR"})}),(0,r.jsx)("div",{className:"text-[13px] text-neutral-400",children:a})]}),(0,r.jsxs)("div",{className:" basis-2/12 flex items-center relative",children:[(0,r.jsx)("button",{className:"absolute bottom-[-4px] left-4 px-7  py-1 bg-[#155e75] text-[#ffb545] font-bold rounded-md shadow-md shadow-[#ffb545] ",onClick:()=>p(e),children:"ADD"}),(0,r.jsx)("div",{className:"w-28 h-24  m-2 rounded-lg overflow-hidden ",children:(0,r.jsx)("img",{src:m,className:"object-fill w-28 h-24"})})]})]})})}}),s("3COFj",function(e,t){e.exports=new URL("no-img.3d79358f.png",import.meta.url).toString()});
//# sourceMappingURL=RestaurantMenu.dd887366.js.map

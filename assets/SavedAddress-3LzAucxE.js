import{O as k,u as y,r as p,c as l,h as x,f as e,i as d,m as u,F as m,q as g,y as w,z as C,b as c,j as o,A as N,B as f}from"./index-jvsXQBcr.js";const B={key:0,class:"loader"},D=e("span",null,null,-1),R=e("span",null,null,-1),V=[D,R],z={class:"back-links"},A=e("i",{class:"iconly-Arrow-Left icli"},null,-1),E=e("div",{class:"content"},[e("h2",null,"saved address")],-1),L={class:"top-space px-15 pt-0"},$={class:"delivery-option-section"},F={class:"check-box"},P={class:"form-check d-flex ps-0"},S=["id"],j=["for"],q={class:"name"},I={class:"addess"},M=e("h6",{class:"label"},"Location",-1),O={class:"buttons mt-3 l-15"},T=["onClick"],G=e("section",{class:"panel-space"},null,-1),W={__name:"SavedAddress",setup(H){const v=w();k(),y().params;const{$axios:_,$uploads:K}=v.appContext.config.globalProperties,i=p([]),a=p(!0),h=async()=>{try{const s=await _.get("address");i.value=s.data.data,a.value=!1,console.log(i.value)}catch(s){console.error("Error fetching address data:",s),a.value=!1}},b=async s=>{try{const n=await _.delete("address/"+s);h(),a.value=!1,console.log(n)}catch(n){console.error("Error deleting address data:",n),a.value=!1}};return h(),(s,n)=>{const r=C("router-link");return c(),l(m,null,[a.value?(c(),l("div",B,V)):x("",!0),e("header",null,[e("div",z,[d(r,{to:{name:"profile"}},{default:u(()=>[A,E]),_:1})])]),e("section",L,[e("div",$,[e("ul",null,[(c(!0),l(m,null,g(i.value,t=>(c(),l("li",{key:t.id},[e("div",F,[e("div",P,[e("input",{class:"radio_animated",type:"radio",name:"flexRadioDefault",id:t.id},null,8,S),e("label",{class:"form-check-label",for:t.id},null,8,j),e("div",null,[e("h4",q,o(t.name),1),e("div",I,[e("h4",null,o(t.country),1),e("h4",null,o(t.state),1),e("h4",null,o(t.city),1),e("h4",null,o("("+t.zip+")"+t.address),1)]),e("h4",null,"Phone No: "+o(t.phone),1),M])])]),e("div",O,[e("button",{onClick:N(Q=>b(t.id),["prevent"]),class:"btn"},"Remove",8,T),d(r,{class:"btn mx-3 mt-1",to:{name:"edit-address",params:{id:t.id}}},{default:u(()=>[f("edit")]),_:2},1032,["to"])])]))),128))]),d(r,{to:{name:"new-address"},class:"btn btn-outline text-capitalize w-100 mt-3"},{default:u(()=>[f("add New address")]),_:1})])]),G],64)}}};export{W as default};
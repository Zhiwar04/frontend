import{r as l,c,f as e,i as a,m as r,e as i,M as d,F as _,z as u,b as m,B as p}from"./index-jvsXQBcr.js";import{_ as f}from"./help-FYC8ULMY.js";const h={class:"bg-transparent"},k={class:"back-links"},v=e("i",{class:"iconly-Arrow-Left icli"},null,-1),g=e("div",{class:"content"},[e("h2",null,"Order Details")],-1),b={class:"px-15 top-space pt-0"},x={class:"mt-5"},O=e("img",{src:f,class:"img-fluid rounded-1 w-100",alt:""},null,-1),T=e("h2",{class:"page-title mt-5 pb-2"},"Track Your Order",-1),w={class:"form-floating"},B=e("label",{for:"one"},"Order ID",-1),D={class:"form-floating mt-3"},C={__name:"TrackYourOrderPage",setup(V){const t=l();return(y,s)=>{const o=u("router-link");return m(),c(_,null,[e("header",h,[e("div",k,[a(o,{to:{name:"orders"}},{default:r(()=>[v,g]),_:1})])]),e("section",b,[e("div",x,[O,T,e("div",w,[i(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),class:"form-control",id:"one",placeholder:"Order ID"},null,512),[[d,t.value]]),B]),e("div",D,[a(o,{to:{name:"product-traking",query:{tracker:t.value}},class:"btn btn-dark"},{default:r(()=>[p("Track")]),_:1},8,["to"])])])])],64)}}};export{C as default};

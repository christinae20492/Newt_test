let shop=document.getElementById("shop");
const items=[{id:1, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:2, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:3, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:4, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:5, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:6, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:7, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"},
{id:8, img:"",name:"Shirt",type:"female",price:44,desc:"Lorem ipsum"}];

const generateItems=()=>{
return (shop.innerHTML=(items.map((x)=>{
let x={id,img,name,type,price,desc}
return `
<div class="item" id="product-${id}>
<div><img src="${img} alt=""></div>
</div
`
}))

)
};
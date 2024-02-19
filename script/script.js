const cards=document.querySelectorAll(".card");
let titlecount = 1;
let totalcount = 0;

for(let i=0; i<cards.length; i++){
    const card = cards[i];
   card.addEventListener('click',function(){
 
    // get the title
    const title = card.querySelector("h2").innerText;
   
    const price =parseFloat( card.querySelector("p").innerText.split(' ')[1]);
    
    const titlecontainer =document.getElementById('title-container');
    
    const p=document.createElement("p");
    p.innerText = titlecount + ".  "+ title;
    titlecontainer.appendChild(p);
    titlecount++;


//    calculate price
  
totalcount +=price;
document.getElementById('total-price').innerText= totalcount.toFixed(2);

   });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){

// get the value from input
const couponElement  = document.getElementById("input-field").value;

const couponCude  = couponElement.split(' ').join('').toUpperCase;
console.log(couponCude);
if(totalcount>= 200){
    if(couponCude==="SALE200"){

        const discountEmlement = document.getElementById('discountPrice');
        const discountAmount = totalcount * 0.2;
        discountEmlement.innerText = discountAmount.toFixed(2);
    }
    else{
        alert('INVALID COUPONE');
    }
}
else{
    alert("please order more");
}

})
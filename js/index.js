const seats = document.querySelectorAll('.kbd');
let bookingSeat= 0;
let totalPrice = 0;

for (let seat of seats) {
    seat.addEventListener("click", function () {
        if( bookingSeat >= 4){
            alert("booking seat compalet")
            return;
        }
    /**---------seat background-------------**/
        seat.classList.add("bg-green-500");
        seat.classList.remove('hov')
        const seatName = seat.innerText;
        const price = parseInt(document.querySelector("#ticket-price").innerText);
        totalPrice = totalPrice + price;
        document.getElementById("Total-Aumont").innerText = totalPrice;
        
    const ticketTitleContainer = document.getElementById("seat-title-container");
    const grandTotal = document.getElementById('Grand-Total');
    const seatCount = document.getElementById('seat-count');
    const availableSet = document.getElementById('available-set');

        grandTotal.innerText = totalPrice;
        const addToCardContent = document.createElement('div');
        addToCardContent.classList.add("text-xl", "roboto", "mt-8", "flex", "justify-between", "mx-8", "mb-4");
     
        const h3 = document.createElement('h3');
        h3.innerText = seatName;
        h3.classList.add("text-xl");
        addToCardContent.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = 'Economy';
        p.classList.add("text-xl");
        addToCardContent.appendChild(p);  
        const h2 = document.createElement('h2');
        h2.innerText = price;
        h2.classList.add('text-2xl');
        addToCardContent.appendChild(h2);
        ticketTitleContainer.appendChild(addToCardContent);
        bookingSeat++;
        seatCount.innerText = parseInt(bookingSeat);
        const currentAvailableSet = parseInt(availableSet.innerText);
        const newAvailableSet = currentAvailableSet - 1;
        availableSet.innerText = newAvailableSet;
        
    });
    

};

const couponBtn = document.getElementById('coupon-apply');
    couponBtn.addEventListener("click",function(){
        
        const couponInput = document.getElementById('coupon-input').value;
        console.log(couponInput)
        const couponCod = couponInput.split(" ").join("").toUpperCase();
        console.log(couponCod);
        if(couponCod === 'COUPLE20'){
            const discount = totalPrice*0.2;
            const discountAmount = document.getElementById("discount-amount");
           const h3 = document.createElement("h3");
           h3.innerText = "discount"; 
           h3.classList.add("text-xl")
           discountAmount.appendChild(h3);

           const h4 = document.createElement("h4");
           h4.innerText = "BTD"+" "+discount; 
           h4.classList.add("text-xl");
           discountAmount.appendChild(h4);
           const discountSection = document.getElementById("discount-section");
           discountSection.classList.add('hidden');
           const grandTotal = document.getElementById('Grand-Total');
           grandTotal.innerText -= discount;
        }else if (couponCod ==='NEW15'){
        const discount = totalPrice*0.15;
        const discountAmount = document.getElementById("discount-amount");
       const h3 = document.createElement("h3");
       h3.innerText = "discount"; 
       h3.classList.add("text-xl")
       discountAmount.appendChild(h3);
       const h4 = document.createElement("h4");
       h4.innerText = "BTD"+" "+discount; 
       h4.classList.add("text-xl");
       discountAmount.appendChild(h4);
       const discountSection = document.getElementById("discount-section");
       discountSection.classList.add('hidden');
       const grandTotal = document.getElementById('Grand-Total');
       grandTotal.innerText -= discount;
    }
    else{
     alert('invalid coupon')
   }
   
    
   
   
   
});




        





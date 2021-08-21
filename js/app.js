const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const getBestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
let totalBig = document.getElementById('total-big');

//function for calculating total price 
function calculateTotal(){
    const bestPrice = parseInt(getBestPrice.innerText);
    const costForExtraMemory = parseInt(extraMemoryCost.innerText);
    const costForExtraStorage = parseInt(extraStorageCost.innerText);
    const deliveryCost = parseInt(deliveryCharge.innerText);

    const grandTotal = bestPrice + costForExtraMemory + costForExtraStorage + deliveryCost;
    totalPrice.innerText = grandTotal;
    totalBig.innerText = grandTotal;
}

//function for the bottom total
function calculateTotalBig(){
    totalBig = parseInt(totalPrice.innerText);
}

//handling memory buttons
const memory8Gb = document.getElementById('memory-8gb').addEventListener('click', function(){
     extraMemoryCost.innerText = "0";
     calculateTotal();
})
const memory16Gb = document.getElementById('memory-16gb').addEventListener('click', function(){
     extraMemoryCost.innerText = "180";
     calculateTotal();    
})

//handling storage buttons
const storage256gb = document.getElementById('storage-256gb').addEventListener('click', function(){
    extraStorageCost.innerText = "0";
    calculateTotal();
})
const storage512gb = document.getElementById('storage-512gb').addEventListener('click', function(){
    extraStorageCost.innerText = "100";
    calculateTotal();
})
const storage1tb = document.getElementById('storage-1tb').addEventListener('click', function(){
    extraStorageCost.innerText = "180";
    calculateTotal();
})

//handling delivery buttons
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCharge.innerText = "0";
    calculateTotal();
})
const chargedDelivery = document.getElementById('charged-delivery').addEventListener('click', function(){
    deliveryCharge.innerText = "20";
    calculateTotal();
})

// calculation for promo code
const applyButton = document.getElementById('apply-promo-code').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-code-input');

    if(promoCodeInput.value == 'stevekaku'){
        totalBig.innerText = totalBig.innerText - (totalBig.innerText*(20/100));
    }
    else{
        promoCodeInput.value ='';
    }
    promoCodeInput.value ='';
})




 
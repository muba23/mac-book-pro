//handling memory buttons
const memory8Gb = document.getElementById('memory-8gb').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('extra-memory-cost');
     extraMemoryCost.innerText = "$0";
     const memory8GbPrice = extraMemoryCost.innerText;
     console.log(memory8GbPrice);
})
const memory16Gb = document.getElementById('memory-16gb').addEventListener('click', function(){
    // memory16Gb.innerText = "$180";
    const extraMemoryCost = document.getElementById('extra-memory-cost');
     extraMemoryCost.innerText = "$180";
     const memory16GbPrice = extraMemoryCost.innerText;
     console.log(memory16GbPrice);
})

//handling storage buttons
const storage256gb = document.getElementById('storage-256gb').addEventListener('click', function(){
    //storage256gb.innerText = "$0";
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = "$0";
    const storage256GbPrice = extraStorageCost.innerText;
    console.log(storage256GbPrice);
})
const storage512gb = document.getElementById('storage-512gb').addEventListener('click', function(){
    //storage512gb.innerText = "$100";
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = "$100";
    const storage512GbPrice = extraStorageCost.innerText;
    console.log(storage512GbPrice);
})
const storage1tb = document.getElementById('storage-1tb').addEventListener('click', function(){
    // storage1tb.innerText = "$180";
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = "$180";
    const storage1TbPrice = extraStorageCost.innerText;
    console.log(storage1TbPrice);
})

//handling delivery buttons
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function(){
    // freeDelivery.innerText = "$0";
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = "$0";
    const freeDeliveryCharge = deliveryCharge.innerText;
    console.log(freeDeliveryCharge);
})
const chargedDelivery = document.getElementById('charged-delivery').addEventListener('click', function(){
    // chargedDelivery.innerText = "$20";
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = "$20";
    const chargedDeliveryCharge = deliveryCharge.innerText;
    console.log(chargedDeliveryCharge);
})

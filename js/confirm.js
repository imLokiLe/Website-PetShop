import { getArrCart, removeDuplicatesBetweenArrays} from '../js/data_cart.js';
import { getArrPayment, resetPayment} from '../js/data_payment.js';
import { getDataDelivery, resetDelivery} from '../js/data_delivery.js';

let arrCart = getArrCart();
let arrPayment = getArrPayment();
let delivery = getDataDelivery();
function renderPaymentProduct (products){
    const paymentProduct = document.getElementById("all-product-order");
    const list = [...new Set(products)];
    paymentProduct.innerHTML = list.map((item) =>{
        const { image, name, quantity} = item;
        return (
            `<div class="order">
                <img src="${image}" alt="image-product" class="image-order"> 
                <div class="order-name">
                    <p>${name}</p>
                    <p>SL: x<span>${quantity}<span></p>
                </div>
            </div>`
        );
    }).join('');
};
renderPaymentProduct(arrPayment)


function renderDeliveryPayment(delivery){
    const list = [...new Set(delivery)];
    list.map((item) =>{
        const { delivery, totalPayment} = item;
        console.log(`${delivery}`);
        console.log(`${totalPayment}`);
        if (`${delivery}` == 'cod'){
            document.querySelector('.paymemt-delivery').innerHTML = `Thanh toán tiền mặt`
        } else if (`${delivery}` == 'momo'){
            document.querySelector('.paymemt-delivery').innerHTML = `Thanh toán bằng ví MoMo`
        } else if (`${delivery}` == 'momo'){
            document.querySelector('.paymemt-delivery').innerHTML = `Thanh toán bằng ví ZaloPay`
        } else if (`${delivery}` == 'momo'){
            document.querySelector('.paymemt-delivery').innerHTML = `Thanh toán bằng Internet Banking`
        }
        document.querySelector('.payment-number p span:first-child').innerHTML = `${totalPayment}`;
    });
}
renderDeliveryPayment(delivery);




console.log(document.querySelector('.return-home'));
document.querySelector('.return-home').addEventListener('click', function() {
    removeDuplicatesBetweenArrays(arrCart, arrPayment);
    resetPayment();
    resetDelivery();
    window.location.href = '../Home1.html';
});
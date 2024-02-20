document.addEventListener('DOMContentLoaded', function () {

    const allSubscriptions = document.querySelectorAll('.subscriptions');

    allSubscriptions.forEach(subscription => {

        const priceColumn = subscription.parentElement;
        const priceRow = priceColumn.querySelector('.price-btn-row');
        const rawPrice = priceRow.querySelector('.plat-price').textContent;
        const flatPrice = Number(priceRow.querySelector('.plat-price').textContent.split('$').pop());
        const initPrice = rawPrice;
        const oldPrice = priceRow.querySelector(".old-price") ? priceRow.querySelector(".old-price") : null;
        console.log('Old price is:', oldPrice)

        const variantId = subscription.querySelector('input[name="id"]').value;
        const qty = subscription.querySelector('input[name="quantity"]').value;
        const sellingPlanId = subscription.querySelector('form').getAttribute('data-selling-plan') ? subscription.querySelector('form').getAttribute('data-selling-plan') : null;

        const atcButton = subscription.querySelector('.atc-button');
        const addSubscriptionBtn = subscription.querySelector('.subscription-btn-endrock');
        const labels = subscription.querySelectorAll('label');
        const subscriptionInput = subscription.querySelector('[data-subscription-input]');

        const badge = document.createElement('div');
        badge.textContent = '';
        badge.classList.add('endrock-badge');
        priceRow.appendChild(badge)

        

        function formatNumber(number) {
            let formattedNumber = parseFloat(number).toFixed(2);
            
            if (formattedNumber.indexOf('.') === formattedNumber.length - 2) {
                formattedNumber += '0';
            }
            
            return `$${formattedNumber}`;
        }
        
        labels.forEach(label => {

            label.isClicked = false


            label.addEventListener('click', () => {
                const input = label.querySelector('input[name="subscription-type"]');
                input.click();

                console.log('isClick State:', label.isClicked)
            });
        });
    
        labels.forEach((label, index) => {
            const input = label.querySelector('input[name="subscription-type"]');

            input.addEventListener('click', (e) => {
                console.log("label:", label)

                labels.forEach(otherLabel => {
                    otherLabel.classList.remove('selected-label');
                    otherLabel.style.backgroundColor = '';
                });
    
                
                if(!label.isClicked){
                    label.style.backgroundColor = '#C2DCCB';
                    label.classList.add('selected-label');
                    

                    label.isClicked = true
                } else {     
                    priceRow.querySelector('.plat-price').textContent = initPrice;
                    oldPrice.textContent = '';
                    label.classList.remove('selected-label');
                    label.style.backgroundColor = '';
                    input.checked = false;
                    badge.style.display = 'none'
                    
                    
                    label.isClicked = false
                }
                
                    
                if (input.hasAttribute('data-subscription-input')) {
                    
        
                    const productPriceAdjustments = product.price_adjustments[0];
                    badge.textContent = ''
                    
                  
                    if (label.isClicked) {
                        const updatedPrice = flatPrice - (flatPrice * (productPriceAdjustments.value / 100));
                        const formatedUpdatedPrice = formatNumber(updatedPrice);
                        oldPrice.textContent = rawPrice;
                        priceRow.querySelector('.plat-price').textContent = `${formatedUpdatedPrice}`;
                        badge.textContent = 'SAVE 10%'
                        badge.style.display = 'block'
                    }
                } else {
                    priceRow.querySelector('.plat-price').textContent = initPrice;
                    oldPrice.textContent = '';
                }
            });
        
            if (index === 1) {
                input.click();
            }
            
        });
        
        
        const addSubscriptionToCart = () => {
            console.log('variant id:', variantId);
            console.log('quantity:', qty);
            console.log('selling plan id:', sellingPlanId);
        
            let formData = {
                'items': [{
                    "id": variantId,
                    "quantity": qty,
                    "selling_plan": sellingPlanId
                }]
            };
        
            fetch('/cart/add.js', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Item added to the cart:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        };
        


        if (sellingPlanId) {
            addSubscriptionBtn.addEventListener('click', () => {
                addSubscriptionToCart();
            });
        
            atcButton.addEventListener('click', (e) => {
                let isSubscription = subscriptionInput.checked;
        
                if (isSubscription) {
                    e.preventDefault();
                    addSubscriptionBtn.click();
                }
            });
        } else {
            console.log('No selling plan has been selected');
        }
        
    });

});




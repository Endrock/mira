document.addEventListener('DOMContentLoaded', function () {

    var allSubscriptions = document.querySelectorAll('.subscriptions');

    allSubscriptions.forEach(subscription => {

        var priceColumn = subscription.parentElement;
        var priceRow = priceColumn.querySelector('.price-btn-row');
        var rawPrice = priceRow.querySelector('.plat-price').textContent;
        var flatPrice = Number(priceRow.querySelector('.plat-price').textContent.split('$').pop());
        var initPrice = rawPrice;
        var oldPrice = priceRow.querySelector(".old-price") ? priceRow.querySelector(".old-price") : null;
        console.log('Old price is:', oldPrice)

        var variantId = subscription.querySelector('input[name="id"]').value;
        var qty = subscription.querySelector('input[name="quantity"]').value;
        var sellingPlanId = subscription.querySelector('form').getAttribute('data-selling-plan') ? subscription.querySelector('form').getAttribute('data-selling-plan') : null;

        var atcButton = subscription.querySelector('.atc-button');
        var addSubscriptionBtn = subscription.querySelector('.subscription-btn-endrock');
        var labels = subscription.querySelectorAll('label');
        var subscriptionInput = subscription.querySelector('[data-subscription-input]');

        var badge = document.createElement('div');
        badge.textContent = '';
        badge.classList.add('endrock-badge');
        badge.classList.add('hide');
        priceRow.appendChild(badge)

        

        function formatNumber(number) {
            var formattedNumber = parseFloat(number).toFixed(2);
            
            if (formattedNumber.indexOf('.') === formattedNumber.length - 2) {
                formattedNumber += '0';
            }
            
            return `$${formattedNumber}`;
        }
        
        labels.forEach(label => {

            label.isClicked = false


            label.addEventListener('click', () => {

                var input = label.querySelector('input[name="subscription-type"]');
                
                    input.click();
                    label.classList.add('selected-label');
                    input.checked = true;
                    
                    
                    label.isClicked = true
                

            });
        });
    
        labels.forEach((label, index) => {
            var input = label.querySelector('input[name="subscription-type"]');

            input.addEventListener('click', (e) => {
                console.log("label:", label)

                labels.forEach(otherLabel => {
                    otherLabel.classList.remove('selected-label');
                    input.checked = false;
                });
    
                
          
                
                    
                if (input.hasAttribute('data-subscription-input')) {
                    
                    var productPriceAdjustments = product.price_adjustments[0];
                    badge.textContent = ''
                    
                    var updatedPrice = flatPrice - (flatPrice * (productPriceAdjustments.value / 100));
                    var formatedUpdatedPrice = formatNumber(updatedPrice);
                    oldPrice.textContent = rawPrice;
                    priceRow.querySelector('.plat-price').textContent = `${formatedUpdatedPrice}`;
                    badge.textContent = 'SAVE 10%'
                    
                    if(badge.classList.contains('hide')) {
                        badge.classList.remove('hide');
                        badge.classList.add('show');
                    }
                    
                } else {
                    priceRow.querySelector('.plat-price').textContent = initPrice;
                    if(oldPrice != null) {
                        oldPrice.textContent = '';
                        if(badge.classList.contains('show')) {
                            badge.classList.remove('show');
                            badge.classList.add('hide');
                        }
                    }
                }
            });
        
            if (index === 1) {
                input.click();
            }
            
        });
        
        
        var addSubscriptionToCart = () => {
            console.log('variant id:', variantId);
            console.log('quantity:', qty);
            console.log('selling plan id:', sellingPlanId);
        
            var formData = {
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
                var isSubscription = subscriptionInput.checked;
        
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




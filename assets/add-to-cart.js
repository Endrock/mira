document.addEventListener('DOMContentLoaded', function () {

    // var subscriptionElement = {
    //     subscription: 'data-subscription-input',
    //     oneTimePurchase: 'data-one-time-input',
    //     subscribed: 1,
    //     isSubscribed: false,
    // };

    function setSubscription(input, otherInput) {
        const label = input.parentElement;
        label.classList.add('selected-label');

        
        const otherLabel = otherInput.parentElement;
        otherLabel.classList.remove('selected-label');
    }

    function unsubscribe(input, otherInput) {
        const label = input.parentElement;
        label.classList.remove('selected-label');
        input.checked = false;

        console.log(otherInput);
        otherInput.click()
    }

    function showDiscount(subscription, subscriptionElement) {
        var productPriceAdjustments = product.selling_plans.find(plan => plan.name === "Every 1 month").price_adjustments[0].value / 100;
        const pricesDiv = subscription.parentElement.querySelector('.price-btn-row');

        const platPrice = pricesDiv.querySelector('.plat-price');
        const oldPrice = pricesDiv.querySelector('.old-price');

        subscriptionElement.platPrice = platPrice.textContent;
        subscriptionElement.oldPrice = oldPrice.textContent;

        const badge = pricesDiv.querySelector('.endrock-badge ');
        badge.textContent = `SAVE ${productPriceAdjustments * 100}%`;

        oldPrice.textContent = platPrice.textContent;
        const calc = Number(platPrice.textContent.split('$')[1]) - Number(platPrice.textContent.split('$')[1]) * Number(productPriceAdjustments);
        const discount = `$${calc.toFixed(2)}`;
        platPrice.textContent = discount;

        if (badge.classList.contains('hide')) {
            badge.classList.remove('hide');
            badge.classList.add('show');
        }
    }

    function hideDiscount(subscription, subscriptionElement) {
        const pricesDiv = subscription.parentElement.querySelector('.price-btn-row');

        const platPrice = pricesDiv.querySelector('.plat-price');
        const oldPrice = pricesDiv.querySelector('.old-price');

        const badge = pricesDiv.querySelector('.endrock-badge ');

        platPrice.textContent = subscriptionElement.platPrice;
        oldPrice.textContent = '';

        if (badge.classList.contains('show')) {
            badge.classList.remove('show');
            badge.classList.add('hide');
        }
    }

    var addSubscriptionToCart = (variantId, qty, sellingPlanId) => {
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

    var allSubscriptions = document.querySelectorAll('.subscriptions');

    allSubscriptions.forEach(subscription => {

        const pricesDiv = subscription.parentElement.querySelector('.price-btn-row');

        var subscriptionElement = {
            subscription: 'data-subscription-input',
            oneTimePurchase: 'data-one-time-input',
            subscribed: 1,
            isSubscribed: false,
            platPrice: pricesDiv.querySelector('.plat-price').textContent,
            oldPrice: pricesDiv.querySelector('.old-price')
        };

        // const prices = {
        //     platPrice: pricesDiv.querySelector('.plat-price').textContent,
        //     oldPrice: pricesDiv.querySelector('.old-price')
        // }

        const variantId = subscription.querySelector('input[name="id"]').value;
        const qty = subscription.querySelector('input[name="quantity"]').value;
        const sellingPlanId = subscription.querySelector('form').getAttribute('data-selling-plan') ? subscription.querySelector('form').getAttribute('data-selling-plan') : null;

        var atcButton = subscription.querySelector('.atc-button');
        var addSubscriptionBtn = subscription.querySelector('.subscription-btn-endrock');
        
        const inputs = subscription.querySelectorAll('input');

        var badge = document.createElement('div');
        badge.textContent = '';
        badge.classList.add('endrock-badge');
        badge.classList.add('hide');
        pricesDiv.appendChild(badge)
        
        inputs.forEach(input => {

            const isSubscriptionInput = input.hasAttribute(subscriptionElement.subscription);
            const isOneTimePurchaseInput =  input.hasAttribute(subscriptionElement.oneTimePurchase);

            if(isOneTimePurchaseInput) {
                input.parentElement.classList.add('selected-label');
                input.click();
            }
            
            input.addEventListener('click', () => {

                const otherInput = isSubscriptionInput ? subscription.querySelector('[data-one-time-input]') : subscription.querySelector('[data-subscription-input]')
                
                if (isSubscriptionInput && subscriptionElement.subscribed === 1) {
                    console.log('clicking subscription !');
                    setSubscription(input, otherInput);
                    showDiscount(subscription, subscriptionElement);
                    subscriptionElement.subscribed++;
                    subscriptionElement.isSubscribed = true;
                } else if (isSubscriptionInput && subscriptionElement.subscribed === 2) {

                    console.log('clicking subscription for second time !');
                    //subscriptionElement.subscribed = false;
                    
                    unsubscribe(input, otherInput);
                    hideDiscount(subscription, subscriptionElement);
                    subscriptionElement.subscribed = 1;
                    subscriptionElement.isSubscribed = false;
                } else if (isOneTimePurchaseInput) {
                    console.log('clicking one time purchase !');
                    console.log('other input:', otherInput)
                    setSubscription(input, otherInput);
                    hideDiscount(subscription, subscriptionElement);
                    subscriptionElement.subscribed = 1
                    subscriptionElement.isSubscribed = false;
                }

            });
        });

        if (sellingPlanId) {
            addSubscriptionBtn.addEventListener('click', () => {
                addSubscriptionToCart(variantId, qty, sellingPlanId);
            });
        
            atcButton.addEventListener('click', (e) => {
                
                if (subscriptionElement.isSubscribed) {
                    e.preventDefault();
                    addSubscriptionBtn.click();
                }
            });
        } else {
            console.log('No selling plan has been selected');
        }

    });
});
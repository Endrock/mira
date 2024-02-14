document.addEventListener('DOMContentLoaded', function () {

    const allSubscriptions = document.querySelectorAll('.subscriptions');

    allSubscriptions.forEach(subscription => {

        const variantId = subscription.querySelector('input[name="id"]').value;
        const qty = subscription.querySelector('input[name="quantity"]').value;
        const sellingPlanId = subscription.querySelector('form').getAttribute('data-selling-plan') ? subscription.querySelector('form').getAttribute('data-selling-plan') : null;

        const atcButton = subscription.querySelector('.atc-button');
        const addSubscriptionBtn = subscription.querySelector('.subscription-btn-endrock');
        const labels = subscription.querySelectorAll('label');
        const subscriptionInput = subscription.querySelector('[data-subscription-input]');
    
        labels.forEach(label => {
            label.addEventListener('click', () => {
                const input = label.querySelector('input[name="subscription-type"]');
                input.click();
            });
        });
    
        labels.forEach((label, index) => {
            const input = label.querySelector('input[name="subscription-type"]');
    
            input.addEventListener('click', (e) => {
                labels.forEach(otherLabel => {
                    otherLabel.classList.remove('selected-label');
                    otherLabel.style.backgroundColor = '';
                });
    
                label.classList.add('selected-label');
                label.style.backgroundColor = '#C2DCCB';
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



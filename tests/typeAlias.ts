type paymentMethod = 'creditCard' | 'paypal' | 'bankTransfer';

function processPayment(method: paymentMethod) {
    switch (method) {
        case 'creditCard':
            console.log('Processing credit card payment...');
            break;
        case 'paypal':
            console.log('Processing PayPal payment...');
            break;
        case 'bankTransfer':
            console.log('Processing bank transfer payment...');
            break;
        default:
            const exhaustiveCheck: never = method;
            throw new Error(`Unhandled payment method: ${exhaustiveCheck}`);
    }
}

// Example usage:
processPayment('creditCard'); // Output: Processing credit card payment...
processPayment('paypal');     // Output: Processing PayPal payment...
processPayment('bankTransfer'); // Output: Processing bank transfer payment...
//processPayment('bitcoin'); // This will cause a TypeScript error since 'bitcoin' is not a valid paymentMethod
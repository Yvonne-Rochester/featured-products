function redirectToProduct(productId) {
    console.log('Redirecting to:', productId);  // Log product ID for testing
    const productLinks = {
        'product1': 'https://amzn.to/3ZP9a7B',
        'product2': 'https://amzn.to/41sqL6J',
        'product3': 'https://amzn.to/4gu5XQs',
        'product4': 'https://amzn.to/4gcBbvy',
    };

    if (productLinks[productId]) {
        window.location.href = productLinks[productId];
    } else {
        console.error("Product link not found!");
    }
}


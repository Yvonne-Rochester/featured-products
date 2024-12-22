function redirectToProduct(productId) {
    console.log('Redirecting to:', productId); // Log product ID for testing

    const productLinks = {
        'product1': 'https://amzn.to/3ZP9a7B', // Amazon Kindle PaperWhite
        'product2': 'https://amzn.to/41sqL6J', // Ring Video Doorbell Pro
        'product3': 'https://amzn.to/4gu5XQs', // Apple AirPods Pro 2
        'product4': 'https://amzn.to/4gcBbvy', // Echo Dot (5th Gen) with Alexa
    };

    if (productLinks[productId]) {
        // Open the product link in a new tab
        window.open(productLinks[productId], '_blank');
    } else {
        console.error("Product link not found for:", productId);
    }
}

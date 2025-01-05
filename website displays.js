function redirectToProduct(productId) {
    console.log('Redirecting to:', productId); // Log product ID for testing

    const productLinks = {
        'product1': 'https://amzn.to/3ZP9a7B', // Amazon Kindle PaperWhite
        'product2': 'https://amzn.to/41sqL6J', // Ring Video Doorbell Pro
        'product3': 'https://amzn.to/4gu5XQs', // Apple AirPods Pro 2
        'product4': 'https://amzn.to/4gcBbvy', // Echo Dot (5th Gen) with Alexa
        'product5': 'https://amzn.to/406PcV3', // Amazon Beats Studio Pro
        'product6': 'https://amzn.to/3DIZMtG', // Bose QuietComfort Bluetooth Headphones
        'product7': 'https://amzn.to/3W5xtMv', // USB Wall Charger, Surge Protector
        'product8': 'https://amzn.to/4001fmZ', // JBL Go 3 Portable Mini Bluetooth Speaker
    };

    if (productLinks[productId]) {
        // Open the product link in a new tab
        window.open(productLinks[productId], '_blank');
    } else {
        console.error("Product link not found for:", productId);
    }
}

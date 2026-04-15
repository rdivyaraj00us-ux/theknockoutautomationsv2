let shopifyClient: any = null;
let shopifyUI: any = null;

export async function initShopifyBuy() {
  if (shopifyUI) return shopifyUI;

  const waitForSDK = () =>
    new Promise<void>((resolve) => {
      if ((window as any).ShopifyBuy) return resolve();
      const interval = setInterval(() => {
        if ((window as any).ShopifyBuy) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });

  await waitForSDK();
  const ShopifyBuy = (window as any).ShopifyBuy;
  shopifyClient = ShopifyBuy.buildClient({
    domain: 'lovable-project-f6ew7.myshopify.com',
    storefrontAccessToken: '36bddb7d2e43dc7bad75a75e577d0434',
  });
  shopifyUI = await ShopifyBuy.UI.onReady(shopifyClient);
  return shopifyUI;
}

export async function openCheckout(discountCode?: string) {
  const ui = await initShopifyBuy();

  let container = document.getElementById('shopify-buy-hidden');
  if (!container) {
    container = document.createElement('div');
    container.id = 'shopify-buy-hidden';
    container.style.display = 'none';
    document.body.appendChild(container);
  }

  ui.createComponent('product', {
    id: '10364963881271',
    node: container,
    moneyFormat: '${{amount}}',
    options: {
      product: {
        buttonDestination: 'checkout',
        styles: { product: { display: 'none' } },
      },
    },
  });

  const checkoutUrl = `https://checkout.dodopayments.com/buy/pdt_0NcjrfHtQQbPxzvoM7Iif?quantity=1`;
  window.location.href = checkoutUrl;
}

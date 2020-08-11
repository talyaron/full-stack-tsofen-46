(async () => {
    const shopData = await getShopItemsPromise();
    renderContent(shopData)
})()
function buy(item, price) {
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify({item:item, price:price}));
        alert(`Вы выбрали ${item} за ${price} руб`);
    } else {
        alert("Эта функция работает только внутри Telegram");
    }
}
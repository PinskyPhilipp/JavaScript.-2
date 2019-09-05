class GoodsItem {
  constructor(title = 'No name', price = 'No price') {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб</p></div>`;
  }
}

class GoodsList {
  constructor(container = '.container') {
    this.container = container;
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [{
        title: 'Shirt',
        price: 150
      },
      {
        title: 'Socks',
        price: 50
      },
      {
        title: 'Jacket',
        price: 350
      },
      {
        title: 'Shoes',
        price: 250
      },
      {
        price: 150
      }
    ];
  }
  render() {
    document.querySelector(this.container).innerHTML = this.goods.reduce((acc, item) => {
      const good = new GoodsItem(item.title, item.price);
      return acc += good.render();
    }, '');
  }
  calcAllGoods() {
    const totalPrice = document.querySelector('.goods-total span');
    let sum = 0;
    this.goods.forEach((elem) => {
      sum += elem.price;
    });
    totalPrice.textContent = sum;
  }
}


class RemoveItem {}  // Удалить товар
class AddItem {}     // Добавить товар
class Checkout {}    // Для оформления заказа



const list = new GoodsList('.goods-list');
list.fetchGoods();
list.render();
list.calcAllGoods();
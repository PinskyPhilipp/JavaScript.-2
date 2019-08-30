const goods = [
    {
      title: 'Shirt', price: 150
    },
    {
      title: 'Socks', price: 50
    },
    {
      title: 'Jacket', price: 350
    },
    {
      title: 'Shoes', price: 250
    }
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  };
  
  //С помощью метода join Вы можете объединить все элементы массива в строку.
  //Элементы массива в полученной строке будут отделены друг от друга разделителем. Разделителем по умолчанию является запятая (,).

  document.addEventListener('DOMContentLoaded', () => {
    renderGoodsList(goods);
  });
  
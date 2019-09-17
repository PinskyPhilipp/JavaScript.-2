const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


Vue.component('goods-item', {
  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
      <button>Добавить в корзину</button>
    </div>
  `
});

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="good in goods" :good="good" :key="good.product_id"></goods-item>
    </div>
  `
});

Vue.component('basket', {
  template: `
      <div class="basket">
        <h2>Корзина</h2>
      </div>
  `
});

Vue.component('search',{
  props: ['goods'],
template: `
      <div class="search">
        
          <input type="text" class="goods-search" v-model.trim="searchLine"  @submit.prevent/>
         
      </div>
`
});
const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    searchLine: '',
    isVisibleCart: false ,
  },
  computed: {
    filteredGoods () {
      const regexp = new RegExp(this.searchLine, 'i');
      return this.goods.filter((good) => {
        return regexp.test(good.product_name);
      });
    }
  },
  mounted() {
    this.makeGETRequest(`${BASE_URL}/catalogData.json`).then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
      console.log(goods);
    }).catch(err => console.error(err));
  },
  methods: {
    makeGETRequest(url) {
      return new Promise((resolve, reject) => {
        const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status !== 200) reject(response);
            resolve(response);
          }
        };

        xhr.onerror = function (e) {
          reject(e);
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },
  }
});
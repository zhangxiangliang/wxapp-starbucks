var icon = require('../../data/icon.js'),
    data = require('../../data/detail.js')

Page({
    data: {
        comment: [],
        details: [],
        activeImageIndex: 0,
        imagesBaseUrl: "../../images/detail_photo",
        shops:[],
        hasList:false,
        totalPrice:0,
        totalNum:0,
        icon: icon,
        shops: data.shops
    },
    onReady() {
    },
    addCount(event) {
        var index = event.currentTarget.dataset.index;
        let shops = this.data.shops;
        let num = shops[index].num;
        num = num + 1;
        shops[index].num = num;
        this.getTotalPrice();
        this.getTotalNum();
    },
    getTotalPrice(){
        let shops = this.data.shops;
        let total = 0;
        for(let i =0 ;i<shops.length;i++){
          if(shops[i].selected){
            total += shops[i].num * shops[i].price;
          }
        }
        this.setData({
          shops:shops,
          totalPrice:total.toFixed(2)
        });
      },
    getTotalNum(){
        let shops = this.data.shops;
        let total = 0;
        for(let i =0 ;i<shops.length;i++){
            if(shops[i].selected){
                total += shops[i].num
            }
        }
        this.setData({ shops:shops, totalNum:total });
    },
    minusCount(e) {
        const index = e.currentTarget.dataset.index;
        let shops = this.data.shops;
        let num = shops[index].num;
        if(num <= 0) return false;
        num = num - 1;
        shops[index].num = num;
        this.setData({ shops: shops });
        this.getTotalPrice();
        this.getTotalNum();
    },
})

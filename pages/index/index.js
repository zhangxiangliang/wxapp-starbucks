var data = require('../../data/index.js'),
    icon = require('../../data/icon.js'),
    utils = require('../../utils/utils.js')

Page({
    data: {
        cardLists: [
            {text: '请朋友们喝咖啡', lists: data.shareCardList},
            {text: '星礼卡表心意', lists: data.starCardList},
        ],
        poster: data.poster,
        icon: icon,
    },
    clickNavigateTo: utils.clickNavigateTo
})

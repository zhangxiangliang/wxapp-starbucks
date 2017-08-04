module.exports = {
    clickNavigateTo (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.url
        })
    }
};

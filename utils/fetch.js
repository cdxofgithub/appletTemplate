import { baseUrl } from './env.js';
export default (url = '', data = {}, type = '') => {
  console.log('进来了')
  type = type.toUpperCase();
  url = baseUrl + url;
  console.log(url)
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        resolve(res)
      },
      fail: function(res) {
        console.log(res)
        wx.stopPullDownRefresh()
        wx.showToast({
          title: '网络超时',
          icon: 'none',
          duration: 2000
        })
        wx.hideLoading()
        resolve(res)
      }
    })
  })
} 
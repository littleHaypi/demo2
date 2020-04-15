// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
/**
 * 视频详情
 */
videoInfo:null,
//推荐视频
othersList:null,
//评论
commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
  getCurrentVideo(videoId){
    let that=this;
   wx.request({
     url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videoDetail?id='+videoId,
     success(res){
      if(res.data.code===0){
        that.setData({
          videoInfo:res.data.data.videoInfo
        })
      }
       //console.log(res);
     }
})
  },
  getOthersList(videoId) {
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id=' + videoId,
      success(res) {
        if(res.data.code===0){
          that.setData({
            othersList: res.data.data.othersList
          })
       
        }
      //  console.log(res);

      }
    })
  },
  getCommentList(videoId){
   let that=this;
wx.request({
  url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id='+videoId,
  success(res){
    if(res.data.code===0){
      that.setData({
        commentData:res.data.data.commentData
      })
 
  }
}
})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
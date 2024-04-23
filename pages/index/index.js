Page({
  onLoad() {
    const app = getApp();
    app.broadcast.on('demo-event', res => {
      console.log(1234)
    })
  }
});
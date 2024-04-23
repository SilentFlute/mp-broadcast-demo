const broadcast = require('./utils/broadcast');

App({
  broadcast,
  onLaunch() {
    broadcast.fire('demo-event', { a: 1 })
  },
})

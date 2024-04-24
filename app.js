import broadcast from './utils/broadcast';
import getData from './api/getData';

App({
  broadcast,
  async onLaunch() {
    const res = await getData();
    broadcast.fire('demo-event', res)
  },
})

import Observer from './model/Observer';

const componentObserver = new Observer();
const propObserver = new Observer();
const funcObserver = new Observer();
const settingObserver = new Observer();

export { componentObserver, propObserver, funcObserver, settingObserver };

import Observer from './model/Observer';

const blockObserver = new Observer();
const componentObserver = new Observer();
const propObserver = new Observer();
const funcObserver = new Observer();
const settingObserver = new Observer();

export { blockObserver, componentObserver, propObserver, funcObserver, settingObserver };

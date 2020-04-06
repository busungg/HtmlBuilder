import Observer from './model/Observer';

const blockObserver = new Observer();
const componentObserver = new Observer();
const propObserver = new Observer();
const componentUtilsObserver = new Observer();
const settingObserver = new Observer();

export {
  blockObserver, componentObserver, propObserver, componentUtilsObserver, settingObserver
};

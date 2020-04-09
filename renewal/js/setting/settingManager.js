import './css/setting.css';

import configs from './config/config';

import SettingExport from './model/SettingExport';
import SEttingImport from './model/SettingImport';
import SettingPreview from './model/SettingPreview';
import SettingResolution from './model/SettingResolution';

const SettingType = {
  SettingExport,
  SEttingImport,
  SettingPreview,
  SettingResolution
};

const settingManager = {
  settings: [],

  init(target) {
    configs.forEach((config) => {
      const setting = new SettingType[config.class](config, target);
      this.settings.push(setting);
    });
  },

  render(parent) {
    this.settings.forEach((setting) => {
      parent.appendChild(setting.render());
    });
  }
};

export default settingManager;

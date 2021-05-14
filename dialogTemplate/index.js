const { objToPsOptions } = require('../uitls');
const winTemplate = require('./winTemplate');

const TYPE = {
  OPEN_FILE: 'openFile',
  SAVE_FILE: 'saveFile',
  SELECT_FOLDER: 'selectFolder',
}

const templateType = {
  [TYPE.OPEN_FILE]: 'OpenFileDialog',
  [TYPE.SAVE_FILE]: 'SaveFileDialog',
  [TYPE.SELECT_FOLDER]: 'FolderBrowserDialog',
}

const defaultOptions = {
  [TYPE.OPEN_FILE]: {
    initialDirectory: '[Environment]::GetFolderPath("Desktop")',
    multiselect: '$false',
    filter: 'All files (*.*)| *.*',
    restoreDirectory: '$true',
  },
  [TYPE.SAVE_FILE]: {
    initialDirectory: '[Environment]::GetFolderPath("Desktop")',
    filter: 'All files (*.*)| *.*',
    restoreDirectory: '$true',
  },
  [TYPE.SELECT_FOLDER]: {
    description: 'Select folder',
  },
}

const getTemplate = (type = TYPE.OPEN_FILE, options = {}) => {
  const psOptions = objToPsOptions({ ...defaultOptions[type], ...options })
  return winTemplate(templateType[type], psOptions);
}

module.exports = {
  TYPE,
  getTemplate,
}
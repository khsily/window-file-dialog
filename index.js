const { getTemplate, TYPE } = require('./dialogTemplate');

class FileDialog {
  constructor() {
    this.spawn = require('child_process').spawn;
  }

  /**
   * options:
   * https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.openfiledialog?view=net-5.0#properties
   */
  openFile(options) {
    const child = this.spawn("powershell.exe", [getTemplate(TYPE.OPEN_FILE, options)]);
    return this._handleEvents(child);
  }

  /**
   * options:
   * https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.savefiledialog?view=net-5.0#properties
   */
  saveFile(options) {
    const child = this.spawn("powershell.exe", [getTemplate(TYPE.SAVE_FILE, options)]);
    return this._handleEvents(child);
  }

  /**
   * options:
   * https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.folderbrowserdialog?view=net-5.0#properties
   */
  selectFolder(options) {
    const child = this.spawn("powershell.exe", [getTemplate(TYPE.SELECT_FOLDER, options)]);
    return this._handleEvents(child);
  }
  
  _handleEvents(child) {
    return new Promise((resolve, reject) => {
      child.stdout.on("data", function (data) {
        const dataObj = JSON.parse(data.toString());
        resolve(dataObj);
      });

      child.stderr.on("data", function (data) {
        reject(data.toString());
      });

      child.stdin.end();
    });
  }
}

module.exports = FileDialog;
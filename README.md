# Window File Dialog

A simple nodejs project to open file dialog. (windows only / linux,mac not supported)

Powered by PowerShell.

![example](./capture.PNG)

You can find options here:
- openFile: https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.openfiledialog?view=net-5.0#properties
- saveFile: https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.savefiledialog?view=net-5.0#properties
- selectFolder: https://docs.microsoft.com/ko-kr/dotnet/api/system.windows.forms.folderbrowserdialog?view=net-5.0#properties

## Example
#### openFile
```javascript
const dialog = new FileDialog();
dialog.openFile({ title: 'test' }).then((res) => {
  console.log(res);
});
```
#### saveFile
```javascript
const dialog = new FileDialog();
dialog.saveFile({ title: 'test' }).then((res) => {
  console.log(res);
});
```
#### selectFolder
```javascript
const dialog = new FileDialog();
dialog.selectFolder({ description: 'test' }).then((res) => {
  console.log(res);
});
```
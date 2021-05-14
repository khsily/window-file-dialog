const FileDialog = require("..");

const dialog = new FileDialog();
dialog.openFile({ title: 'test!!' }).then((res) => {
  console.log(res);
});
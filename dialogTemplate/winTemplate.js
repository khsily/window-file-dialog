module.exports = (type, options) => `
Add-Type -AssemblyName System.Windows.Forms
$FileBrowser = New-Object System.Windows.Forms.${type} -Property @{ \
  ${options}
}
$null = $FileBrowser.ShowDialog()
echo $FileBrowser | ConvertTo-Json
`;
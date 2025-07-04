// bootstrap with platform specific styles
if (typeof process !== 'undefined') {
  switch (process.platform) {
    case 'darwin':
      document.body.classList.add('platform-mac')
      break
    case 'win32':
      document.body.classList.add('platform-windows')
      break
    case 'linux':
      document.body.classList.add('platform-linux')
      break
  }
} else {
  const { platform } = window.navigator
  if (/Mac/.test(platform)) {
    document.body.classList.add('platform-mac')
  } else if (/Win/.test(platform)) {
    document.body.classList.add('platform-windows')
  } else if (/Linux/.test(platform)) {
    document.body.classList.add('platform-linux')
  }
}

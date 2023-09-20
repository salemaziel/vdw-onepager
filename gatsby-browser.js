import './src/styles/global.css'
//import './src/styles/main-tw.css'
//import './src/styles/main.css'
//import './src/styles/ie9.css'
//import './src/styles/noscript.css'

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
}
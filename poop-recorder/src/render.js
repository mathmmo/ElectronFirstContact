// const { desktopCapturer, remote } = require('electron');
// const { Menu } = remote


// const videoElement = document.querySelector('video')
// const startBtn = document.getElementById('startBtn')
// const stopBtn = document.getElementById('stopBtn')
// const videoSelectBtn = document.getElementById('videoSelectBtn')
// videoSelectBtn.onclick = getVideoSources()

// async function getVideoSources(){
//     const inputSources = await desktopCapturer.getVideoSources({
//         types: ['window', 'screen']
//     })

//     const videoOptionsMenu = Menu.buildFromTemplate(
//         inputSources.map(source => {
//             return {
//                 label: source.name,
//                 click: () => selectSource(source)
//             }
//         })
//     )

//     videoOptionsMenu.popup()
// }
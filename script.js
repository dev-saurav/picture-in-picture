const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');

//this creates a prompt to select the video stream
async function selectVideo() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("error in selecting video", error);
    }
}

btn.addEventListener('click', async () => {
    //disable the btn
    btn.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset the btn
    btn.disabled = false;
});

//onload
selectVideo();
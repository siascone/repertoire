export const resizeBackground = () => {
    const splashBackground = document.getElementById('splash-background');
    if (!splashBackground) return null;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = splashBackground.width;
    const imageHeight = splashBackground.height;
    if (windowHeight > imageHeight) {
        splashBackground.style.height = `100vh`;
        splashBackground.style.width = `auto`;
        return null;
    }
    if (windowWidth > imageWidth) {
        splashBackground.style.width = `100vw`;
        splashBackground.style.height = `auto`;
        return null;
    }
};

export const formatImagesToSquareContainer = () => {
    setInterval(() => {
        let pics = document.getElementsByClassName('not-resized');
        for (let i = 0; i < pics.length; i++) {
            if (pics[i].offsetHeight > pics[i].offsetWidth) {
                pics[i].style.width = '100%';
                pics[i].style.height = 'auto';
            } else {
                pics[i].style.height = '100%';
                pics[i].style.width = 'auto';
            }
        }
    }, 200);
}
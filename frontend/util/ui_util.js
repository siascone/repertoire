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
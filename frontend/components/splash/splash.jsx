import React from 'react';

class Splash extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div className="splash-page-container">
            <img id="splash-background" src="/assets/splash-background.jpg" alt=""/>
        </div>
        );
    }
}

const resizeBackground = () => {
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
setTimeout(() => resizeBackground(), 100)

window.addEventListener('resize', () => resizeBackground());
window.addEventListener('DOMContentLoaded', () => resizeBackground());

export default Splash;
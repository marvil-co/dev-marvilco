document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    hero.style.perspective = '1500px';

    let lastRotateX = 0;
    let lastRotateY = 0;
    let lastScale = 1;
    let lastTranslateX = 0;
    let lastTranslateY = 0;

    const trackingMultiplier = 1;

    // Attach this event listener to the hero div instead of document
    hero.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { clientWidth, clientHeight } = hero; // Use hero's dimensions
        
        const centerX = clientWidth / 2;
        const centerY = clientHeight / 2;
        
        const deltaX = offsetX - centerX;
        const deltaY = offsetY - centerY;
        
        const rotateY = (deltaX / centerX) * 10 * trackingMultiplier;
        const rotateX = (-deltaY / centerY) * 10 * trackingMultiplier;
        const scaleValue = 1 + (deltaX * deltaY) / (centerX * centerY) * 0.01 * trackingMultiplier;
        const translateX = deltaX / centerX * 20 * trackingMultiplier;
        const translateY = deltaY / centerY * 20 * trackingMultiplier;
        
        lastRotateX = rotateX;
        lastRotateY = rotateY;
        lastScale = scaleValue;
        lastTranslateX = translateX;
        lastTranslateY = translateY;

        heroImage.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleValue}, ${scaleValue}, ${scaleValue})`;
    });

    hero.addEventListener('mouseleave', () => {
        // Reset transform to prevent jumping, but only if the mouse is not over the hero image
        console.log('mouseleave');
        heroImage.style.transform = `translateX(0px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

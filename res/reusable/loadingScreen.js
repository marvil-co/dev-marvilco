let loadingScreenDuration = 500; // Duration of the loading screen in milliseconds

window.onload = () => {
    const logo = document.querySelector('.loadingScreen-hexagon');
    
    // Hint to the browser that these properties will change
    logo.style.willChange = 'transform, opacity';
    const loadingScreen = document.querySelector('.loadingScreen');
    loadingScreen.style.willChange = 'top';

    // Stop the current CSS animation and get the current scale
    const currentScale = getCurrentScale(logo);
    logo.style.animation = 'none'; // Stop the CSS animation to capture the current state

    // Custom animation sequence for logo adjustment and fade out
    const adjustAndFadeLogo = () => {
        const animation = logo.animate([
            { transform: `scale(${currentScale})`, opacity: 1, offset: 0 }, // Start from current scale
            { transform: 'scale(1.05)', opacity: 1, offset: 0.35, easing: 'ease-in-out' }, // 2% bigger
            { transform: 'scale(0.90)', opacity: 1, offset: 0.75, easing: 'ease-in' }, // 5% smaller
            { transform: 'scale(1.35)', opacity: 0, offset: 1, easing: 'ease-out' } // 20% bigger, fade out
        ], {
            duration: loadingScreenDuration,
            fill: 'forwards'
        });

        animation.finished.then(() => {
            loadingScreen.style.transition = 'top 0.5s cubic-bezier(0.77, 0, 0.175, 1)';
            loadingScreen.style.top = '-100%';

            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        });
    };
    
    setTimeout(adjustAndFadeLogo, 100); // Start adjusting and fading the logo after a brief moment
};

// Function to extract the current scale of an element
function getCurrentScale(elem) {
    const style = window.getComputedStyle(elem);
    const transform = style.transform || style.webkitTransform || style.mozTransform;
    const mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? Math.sqrt(mat[1].split(', ')[0] * mat[1].split(', ')[0] + mat[1].split(', ')[1] * mat[1].split(', ')[1]) : 1;
}
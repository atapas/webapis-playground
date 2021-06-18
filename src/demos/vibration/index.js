function manageVibration(type) {
    if (navigator.vibrate) {
        type === 'start' 
            ? navigator.vibrate(2000) : navigator.vibrate(0)
    } else {
        console.log(`The Vibration API is not supported`);
    }
    
}
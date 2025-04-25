function spinRoulette(options) {
    if (!Array.isArray(options) || options.length === 0) {
        throw new Error("Please provide a non-empty array of food options.");
    }

    let spinCount = 10; // Number of spins
    let currentIndex = 0;

    const interval = setInterval(() => {
        currentIndex = Math.floor(Math.random() * options.length);
        console.log("Spinning... Current option: " + options[currentIndex]);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Recommended food item: " + options[currentIndex]);
    }, spinCount * 100);
}

// Export the function for use in app.js
export { spinRoulette };
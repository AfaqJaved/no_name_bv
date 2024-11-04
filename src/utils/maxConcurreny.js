
// Function to get the maximum concurrency based on the time of day
function getConcurrencyMax() {
    const currentHour = new Date().getHours();
    return (currentHour >= 9 && currentHour < 17) ? 10 : 150; // Between 9 AM and 5 PM, max 10 tasks; otherwise, 150
}


module.exports = getConcurrencyMax;
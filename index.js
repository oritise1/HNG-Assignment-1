document.addEventListener("DOMContentLoaded", function () {
    const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
    const slackEmail = document.querySelector('[data-testid="slackEmail"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]');
    const hngLink = document.querySelector('[data-testid="hngLink"]');
    const keywordLink = document.querySelector('[data-testid="keywordLink"]');
    const scrapeanywebLink = document.querySelector('[data-testid="scrapeanywebLink"]');

    slackDisplayName.textContent = "Oritse";
    slackEmail.textContent = "ikareemabiodun730@gmail.com";
    hngLink.textContent = "HNG Learn";
    keywordLink.textContent = "KeyWord Search Tool";
    scrapeanywebLink.textContent = "Web Scraping Tool"

    function updateTime() {
        const now = new Date();
        const hour = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        const currentDate = now.getUTCDate();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayName = days[currentDate];
        const utcTime = `${hour}:${minutes}:${seconds}`
        currentDay.textContent = dayName;
        currentTimeUTC.textContent = utcTime;

    }
    updateTime();
    setInterval(updateTime, 1000);
});
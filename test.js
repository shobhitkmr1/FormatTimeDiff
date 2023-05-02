function FormatTimeDiff(postPublishedTime) {
    let now = new Date();
    let diff = (now - postPublishedTime) / 1000; // Convert difference to seconds

    if (diff < 60) {
        let seconds = Math.floor(diff);
        return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    } else if (diff < 3600) {
        let minutes = Math.floor(diff / 60);
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else if (diff < 86400) {
        let hours = Math.floor(diff / 3600);
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (diff < 604800) {
        let days = Math.floor(diff / 86400);
        return `${days} day${days === 1 ? "" : "s"} ago`;
    } else {
        return postPublishedTime.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
    }
}
let postPublishedTime = new Date("2022-04-30T10:00:00"); // Set the post publish time to April 30, 2022, 10:00 AM
let formattedTimeDiff = FormatTimeDiff(postPublishedTime); // Call the function and pass the post publish time as a parameter
console.log(formattedTimeDiff); // Output the formatted time difference to the console

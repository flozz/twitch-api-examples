const NOTIFICATION_INTERVAL = 5
const NOTIFICATION_DURATION = 10

const divNotificationBlog = document.getElementById("notification-blog");

function showNotification() {
    divNotificationBlog.classList.add("visible");
    setTimeout(hideNotification, NOTIFICATION_DURATION * 1000);
}

function hideNotification() {
    divNotificationBlog.classList.remove("visible");
    setTimeout(showNotification, NOTIFICATION_INTERVAL * 1000);
}

showNotification();

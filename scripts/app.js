const markAsReadBtn = document.getElementById("mark-all-as-read-btn");

markAsReadBtn?.addEventListener("click", markAllAsRead);

const unreadMessagesCountContainer = document.getElementById("unread-notifications-count");

function markAllAsRead() {
    const unreadNotifications = document.querySelectorAll(".list-of-notifications li .active-status[data-read='false']");

    unreadNotifications.forEach((statusIndicator) => {
        statusIndicator.removeAttribute("data-read");
    });

    if (unreadMessagesCountContainer) {
        unreadMessagesCountContainer.textContent = "0";
    }
}

function setUnreadMessages() {
    const unreadNotifications = document.querySelectorAll(".list-of-notifications li .active-status[data-read='false']");

    if (unreadMessagesCountContainer) {
        unreadMessagesCountContainer.textContent = unreadNotifications.length;
    }
}

setUnreadMessages();

function getStatusIndicator(btn) {
    const controlId = btn.getAttribute("data-controls");
    const statusIndicator = document.querySelector(`[data-id="${controlId}"] .active-status`);

    return statusIndicator;
}

const unreadNotificationBtns = document.querySelectorAll("[data-mark-notification-as-unread]");
const markNotificationsAsReadBtns = document.querySelectorAll("[data-mark-notification-as-read]");

unreadNotificationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const statusIndicator = getStatusIndicator(btn);

        if (statusIndicator) {
            statusIndicator.setAttribute("data-read", "false");
        }

        setUnreadMessages();
    });
});

markNotificationsAsReadBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const statusIndicator = getStatusIndicator(btn);

        if (statusIndicator) {
            statusIndicator.removeAttribute("data-read", "false");
        }

        setUnreadMessages();
    });
});

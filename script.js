// ================================
// STUDYFLOW — INTERACTIONS
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-active");
    });
});


// Add a small scroll effect to the navbar
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// CTA button interaction
const ctaButton = document.querySelector(".cta-button");

ctaButton.addEventListener("click", () => {
    alert("Your StudyFlow journey starts now! 🚀");
});


// Start Studying button
const startButton = document.querySelector(".nav-button");

startButton.addEventListener("click", () => {
    document.querySelector("#features").scrollIntoView({
        behavior: "smooth"
    });
});
// ================================
// FOCUS TIMER
// ================================

let timeLeft = 25 * 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const resetTimer = document.getElementById("resetTimer");


function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        " : " +
        String(seconds).padStart(2, "0");
}


startTimer.addEventListener("click", () => {

    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(() => {

        if (timeLeft > 0) {

            timeLeft--;
            updateTimer();

        } else {

            clearInterval(timerInterval);
            timerInterval = null;

            alert("Focus session complete! Take a short break. 🎉");
        }

    }, 1000);

});


pauseTimer.addEventListener("click", () => {

    clearInterval(timerInterval);
    timerInterval = null;

});


resetTimer.addEventListener("click", () => {

    clearInterval(timerInterval);
    timerInterval = null;

    timeLeft = 25 * 60;

    updateTimer();

});


updateTimer();
// ================================
// SMART TASKS
// ================================

const taskItems = document.querySelectorAll(".task-item");

taskItems.forEach((task) => {

    const checkButton = task.querySelector(".task-check");

    checkButton.addEventListener("click", () => {

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {
            checkButton.textContent = "✓";
        } else {
            checkButton.textContent = "";
        }

        updateProgress();

    });

});


function updateProgress() {

    const completedTasks =
        document.querySelectorAll(".task-item.completed").length;

    const totalTasks = taskItems.length;

    const percentage =
        Math.round((completedTasks / totalTasks) * 100);

    // Update progress bar
    document.querySelector(".progress-fill").style.width =
        percentage + "%";

    // Update percentage
    document.querySelector(".progress-info strong").textContent =
        percentage + "%";

    // Update weekly progress card
    document.querySelector("#weeklyProgress").textContent =
        percentage + "% complete";
}
// ================================
// FEATURE CARD POPUPS
// ================================

const featureMessages = {
    "Focus Sessions":
        "Start a distraction-free session and give one task your full attention.",

    "Smart Tasks":
        "Break your study plan into simple tasks and track them as you complete them.",

    "Progress Pulse":
        "See your daily progress change as you complete your study tasks.",

    "Study Streaks":
        "Build consistency by showing up for your studies every day."
};

document.querySelectorAll(".feature-action").forEach((button) => {

    button.addEventListener("click", function () {

        const card = this.closest(".feature-card");
        const featureName = card.querySelector("h3").textContent.trim();

        alert(featureMessages[featureName]);

    });

});
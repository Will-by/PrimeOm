document.addEventListener("DOMContentLoaded", () => {
    let xp = parseInt(localStorage.getItem("xp") || "0");
    const xpDisplay = document.getElementById("xp");
    const xpProgress = document.getElementById("xp-progress");
    const taskContainer = document.querySelector(".tasks-container");
    const rewardsContainer = document.querySelector(".rewards-container");
    const resetXPButton = document.getElementById("reset-xp");

    // ✅ Update XP Display
    function updateXP() {
        console.log("XP Updated:", xp); // Debugging
        xpDisplay.innerText = xp;
        xpProgress.style.width = `${(xp / 1000000) * 100}%`; // Progress bar update
        localStorage.setItem("xp", xp);

        // ✅ Refresh rewards dynamically
        if (rewardsContainer) {
            rewardsContainer.innerHTML = ""; // Clear previous rewards
            rewards.forEach(reward => {
                const card = document.createElement("div");
                card.classList.add("reward-card");
                if (xp >= reward.xpRequired) card.classList.add("unlocked");
                card.innerHTML = `<h2>${reward.icon} ${reward.title}</h2><p>Unlock at ${reward.xpRequired} XP</p>`;
                rewardsContainer.appendChild(card);
            });
        }
    }

    // ✅ XP Reset Function
    if (resetXPButton) {
        resetXPButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset your XP?")) {
                xp = 0;
                updateXP();
            }
        });
    }

    // 🔥 20 Prime Tasks
    const tasks = [
        { name: " ⏰ Wake up at 5 AM", xp: 500 },
        { name: " 📖 Read for 30 minutes", xp: 300 },
        { name: " 🏋️️ Exercise for 1 hour", xp: 700 },
        { name: " 💻 Work on Softorel", xp: 1000 },
        { name: " 🤝 Network with 2 new people", xp: 800 },
        { name: " 📝 Write a daily journal", xp: 400 },
        { name: " 🚫 Avoid social media distractions", xp: 600 },
        { name: " ⚡ Practice deep work for 2 hours", xp: 1000 },
        { name: " 🧘 Meditate for 15 minutes", xp: 500 },
        { name: " 🧠 Learn a new skill for 1 hour", xp: 900 },
        { name: " 💡 Develop a new Softorel feature", xp: 1500 },
        { name: " 🔍 Analyze 3 competitors", xp: 1000 },
        { name: " ✍️ Write a blog post on business", xp: 800 },
        { name: " 🎧 Listen to a business podcast", xp: 600 },
        { name: " 📧 Cold email 5 potential mentors", xp: 1200 },
        { name: " 💭 Brainstorm 5 new startup ideas", xp: 1300 },
        { name: " 📢 Improve your personal branding", xp: 1100 },
        { name: " 💰 Make an important financial decision", xp: 1400 },
        { name: " 🎤 Practice public speaking", xp: 1300 },
        { name: " 🏆 Create a long-term strategic plan", xp: 2000 }
    ];

    // ✅ Load Tasks Dynamically
    if (taskContainer) {
        taskContainer.innerHTML = ""; // Clear old tasks
        tasks.forEach(task => {
            const card = document.createElement("div");
            card.classList.add("task-card");
            card.innerHTML = `<h3>${task.name}</h3><p>+${task.xp} XP</p>`;
            card.addEventListener("click", () => {
                xp += task.xp;
                updateXP();
                alert(`You earned ${task.xp} XP!`);
            });
            taskContainer.appendChild(card);
        });
    }

    // 🔥 30 Ultimate Rewards
    const rewards = [
        { title: "Novice Explorer", xpRequired: 1000, icon: "🚀" },
        { title: "Speed Learner", xpRequired: 5000, icon: "⚡" },
        { title: "Financial Genius", xpRequired: 10000, icon: "💰" },
        { title: "Productivity Master", xpRequired: 15000, icon: "🎯" },
        { title: "Marketing Beast", xpRequired: 20000, icon: "📈" },
        { title: "Discipline King", xpRequired: 30000, icon: "👑" },
        { title: "Networking Pro", xpRequired: 40000, icon: "🤝" },
        { title: "Time Management Expert", xpRequired: 50000, icon: "⏳" },
        { title: "Superhuman Focus", xpRequired: 60000, icon: "🧠" },
        { title: "Wealth Builder", xpRequired: 75000, icon: "🏦" },
        { title: "Health Freak", xpRequired: 90000, icon: "💪" },
        { title: "Leadership Icon", xpRequired: 110000, icon: "🚀" },
        { title: "Business Shark", xpRequired: 130000, icon: "🦈" },
        { title: "Risk Taker", xpRequired: 150000, icon: "🎲" },
        { title: "Visionary", xpRequired: 180000, icon: "🔮" },
        { title: "Growth Machine", xpRequired: 220000, icon: "📊" },
        { title: "Investor Mindset", xpRequired: 260000, icon: "🏛️" },
        { title: "Ultimate Hustler", xpRequired: 300000, icon: "🔥" },
        { title: "Public Speaking Master", xpRequired: 350000, icon: "🎤" },
        { title: "Fearless Warrior", xpRequired: 400000, icon: "⚔️" },
        { title: "Elite Performer", xpRequired: 500000, icon: "🎭" },
        { title: "Tech Innovator", xpRequired: 600000, icon: "🖥️" },
        { title: "Millionaire Mindset", xpRequired: 700000, icon: "💎" },
        { title: "World-Class Speaker", xpRequired: 800000, icon: "📢" },
        { title: "Legacy Creator", xpRequired: 900000, icon: "🏆" },
        { title: "World Dominator", xpRequired: 1000000, icon: "🌍" }
    ];

    // ✅ Load Rewards Dynamically
    if (rewardsContainer) {
        rewards.forEach(reward => {
            const card = document.createElement("div");
            card.classList.add("reward-card");
            if (xp >= reward.xpRequired) card.classList.add("unlocked");
            card.innerHTML = `<h2>${reward.icon} ${reward.title}</h2><p>Unlock at ${reward.xpRequired} XP</p>`;
            rewardsContainer.appendChild(card);
        });
    }

    // ✅ Keyboard Shortcut for Rewards
    document.addEventListener("keydown", event => {
        if (event.key.toLowerCase() === "r") {
            window.location.href = "rewards.html";
        }
    });

    // Initial XP Update
    updateXP();
});

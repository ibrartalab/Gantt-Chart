// Store this data for furthur use in Gantt Chart UI app.
// Use local storage to store the data.
const companyData = {
    companyId: `C${Math.floor(Math.random() * 1000)}`,
    companyName: "Tech Innovators Inc.",
    projectName: "NextGen Web Application Development",
    projectDescription: "A cutting-edge web application project aimed at revolutionizing user experience with advanced features and seamless performance.",
    projectStartDate: "2026-09-01",
    projectEndDate: "2026-09-30",
    projectManager: {
        id: `PM${Math.floor(Math.random() * 1000)}`,
        name: "Sana Ali",
        email: "sana.ali@://example.com",
    },
    team: {
        teamId: `TEAM${Math.floor(Math.random() * 1000)}`,
        teamName: "Core Development & Design",
        // Max 8 team members added with distinct roles for task assignment
        teamMembers: [
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Amina Khan",
                role: "Lead Backend Developer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Zain Ahmed",
                role: "Senior Frontend Developer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Sarah Jenkins",
                role: "UI/UX Designer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Ali Raza",
                role: "DevOps Engineer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Elena Rostova",
                role: "QA Automation Engineer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Tariq Mahmood",
                role: "Fullstack Developer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "Fatima Noor",
                role: "Backend Developer",
                avatar: "https://dicebear.com"
            },
            {
                id: `TM${Math.floor(Math.random() * 1000)}`,
                name: "David Kim",
                role: "Frontend Developer",
                avatar: "https://dicebear.com"
            }
        ]
    }
};

// Save company data to local storage
// On first load, check if company data already exists in local storage
window.addEventListener("DOMContentLoaded",() => {
    if(!localStoreage.getItem("companyData")){
        localStorage.setItem("companyData", JSON.stringify(companyData));
    }
})

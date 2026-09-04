// Store this data for furthur use in Gantt Chart UI app.
// Use local storage to store the data.
const companyData = [{
    companyId: `C${Math.floor(Math.random() * 1000)}`,
    companyName: "Tech Innovators Inc.",
    projectName: "NextGen Web Application Development",
    projectDescription: "A cutting-edge web application project aimed at revolutionizing user experience with advanced features and seamless performance.",
    projectStartDate: "2026-09-01",
    projectEndDate: "2026-09-30",
    projectManager: {
        id: `PM${Math.floor(Math.random() * 1000)}`,
        name: "Sana Ali",
        email: "sana.ali@example.com",
    },
    // Modified to an array to hold multiple teams for your Gantt chart structure
    teams: [
        {
            teamId: `TEAM${Math.floor(Math.random() * 1000)}`,
            teamName: "Core Development & Design",
            teamMembers: [
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Amina Khan",
                    role: "Lead Backend Developer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Zain Ahmed",
                    role: "Senior Frontend Developer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Sarah Jenkins",
                    role: "UI/UX Designer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Ali Raza",
                    role: "DevOps Engineer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Elena Rostova",
                    role: "QA Automation Engineer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Tariq Mahmood",
                    role: "Fullstack Developer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Fatima Noor",
                    role: "Backend Developer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "David Kim",
                    role: "Frontend Developer",
                    avatar: `https://ui-avatars.com`
                }
            ]
        },
        {
            teamId: `TEAM${Math.floor(Math.random() * 1000)}`,
            teamName: "Data Engineering & Analytics",
            teamMembers: [
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Omar Farooq",
                    role: "Principal Data Engineer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Chloe Dubois",
                    role: "Data Scientist",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Bilal Siddiqui",
                    role: "Database Administrator",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Anya Petrova",
                    role: "BI Analyst",
                    avatar: `https://ui-avatars.com`
                }
            ]
        },
        {
            teamId: `TEAM${Math.floor(Math.random() * 1000)}`,
            teamName: "Product Management & Marketing",
            teamMembers: [
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Liam O'Connor",
                    role: "Product Owner",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Sofia Mendez",
                    role: "Scrum Master",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Marcus Vance",
                    role: "Growth Marketer",
                    avatar: `https://ui-avatars.com`
                },
                {
                    id: `TM${Math.floor(Math.random() * 1000)}`,
                    name: "Yuki Tanaka",
                    role: "Technical Writer",
                    avatar: `https://ui-avatars.com`
                }
            ]
        }
    ]
}];


// Save company data to local storage
// On first load, check if company data already exists in local storage
if (typeof (Storage) !== "undefined") {
    if (!localStorage.getItem("companyData")) {
        localStorage.setItem("companyData", JSON.stringify(companyData));
    }
}



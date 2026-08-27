/* This is the data file for the Gantt chart. It contains an array of task objects, each representing a task in the project. Each task object has the following properties:

id: A unique identifier for the task.
taskName: The name of the task.
startDate: The start date of the task in YYYY-MM-DD format.
endDate: The end date of the task in YYYY-MM-DD format.
duration: The duration of the task in days.
dependencies: An array of task IDs that this task depends on. If the task has no dependencies, this array is empty.
milestones: A boolean indicating whether the task is a milestone (true) or a regular task (false).
progress: A number representing the percentage of completion of the task (0-100).
resources: An object containing information about the team and assignee responsible for the task, including:
team: The name of the team responsible for the task.
assignee: The name of the person assigned to the task.
avatar: A URL to an image representing the assignee (e.g., a profile picture).
notes: Additional notes or comments about the task.
note: This data is used to render the Gantt chart in the UI, showing the timeline, dependencies, and progress of each task in the project.
*/

[
    {
        "id": "T001",
        "taskName": "Database Schema Design & ERD Setup",
        "startDate": "2026-09-01",
        "endDate": "2026-09-04",
        "duration": "3 Days",
        "dependencies": [],
        "milestones": false,
        "progress": 100,
        "resources": {
            "team": "Backend Core",
            "assignee": "Amina Khan",
            "avatar": "https://unsplash.com"
        },
        "notes": "PostgreSQL layout finalized. Indexed user_id and project_id tables."
    },
    {
        "id": "T002",
        "taskName": "Spring Boot REST API Boilerplate Architecture",
        "startDate": "2026-09-04",
        "endDate": "2026-09-08",
        "duration": "4 Days",
        "dependencies": ["T001"],
        "milestones": false,
        "progress": 85,
        "resources": {
            "team": "Backend Core",
            "assignee": "Zain Ahmed",
            "avatar": "https://unsplash.com"
        },
        "notes": "Configured Spring Security and global exception handling wrappers."
    },
    {
        "id": "M001",
        "taskName": "Milestone: Backend Architecture Sign-Off",
        "startDate": "2026-09-08",
        "endDate": "2026-09-08",
        "duration": "0 Days",
        "dependencies": ["T001", "T002"],
        "milestones": true,
        "progress": 100,
        "resources": {
            "team": "Management",
            "assignee": "Sana Ali",
            "avatar": "https://unsplash.com"
        },
        "notes": "Core code review approved. Repository structure frozen for feature additions."
    },
    {
        "id": "T003",
        "taskName": "Dynamic Gantt UI CSS Grid Implementation",
        "startDate": "2026-09-09",
        "endDate": "2026-09-14",
        "duration": "5 Days",
        "dependencies": [],
        "milestones": false,
        "progress": 40,
        "resources": {
            "team": "Frontend UI",
            "assignee": "Bilal Siddiqui",
            "avatar": "https://unsplash.com"
        },
        "notes": "Building layout using CSS Grid fractional columns for time slots."
    },
    {
        "id": "T004",
        "taskName": "API Integration & Fetch Payload Mapping",
        "startDate": "2026-09-14",
        "endDate": "2026-09-18",
        "duration": "4 Days",
        "dependencies": ["T002", "T003"],
        "milestones": false,
        "progress": 0,
        "resources": {
            "team": "Fullstack Integration",
            "assignee": "Zain Ahmed",
            "avatar": "https://unsplash.com"
        },
        "notes": "Will map JS date objects to calculate column spans dynamically."
    },
    {
        "id": "M002",
        "taskName": "Milestone: Production Beta Launch",
        "startDate": "2026-09-20",
        "endDate": "2026-09-20",
        "duration": "0 Days",
        "dependencies": ["T004"],
        "milestones": true,
        "progress": 0,
        "resources": {
            "team": "DevOps",
            "assignee": "Sana Ali",
            "avatar": "https://unsplash.com"
        },
        "notes": "Deploying frontend to Vercel/Netlify and Backend container to AWS."
    }
]

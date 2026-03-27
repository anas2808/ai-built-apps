const projects = [
    {
        id: 1,
        title: "QuickTrade Marketplace",
        description: "OLX-like marketplace where users can buy and sell products. Features include user authentication, product search and filters, chat system, advertisement auto-expiry, profile management, and ad editing. Custom admin panel and fully mobile-responsive design.",
        technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
        link: "https://github.com/anas2808anas/QuickTrade"
    },
    {
        id: 2,
        title: "MobHub - Mobile Phone Store",
        description: "E-commerce platform for purchasing mobile phones. Product listing, category-based browsing, and user authentication.",
        technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
        link: "https://github.com/anas2808anas/MobHub"
    },
    {
        id: 3,
        title: "Wrist Gem - Watch Selling Website",
        description: "Online watch store with login/logout and checkout system. Admin-side product and order management.",
        technologies: ["Laravel", "PHP", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "https://github.com/anas2808anas/WristGem"
    },
    {
        id: 4,
        title: "Save for Later - Bookmark Android App",
        description: "Android app to save and manage bookmarks. Automatically identifies tags from pasted links. Categorizes bookmarks intelligently for better organization.",
        technologies: ["Android Studio", "Kotlin", "Firebase"],
        link: "https://github.com/anas2808anas/SaveForLater"
    },
    {
        id: 5,
        title: "Automation Projects",
        description: "Built an n8n automation that analyzes job posts received on Telegram and automatically applies for jobs via email or WhatsApp. Developed an automation to manage GitHub repositories by committing a small daily task automatically to maintain consistency.",
        technologies: ["n8n", "Telegram", "GitHub Actions"],
        link: "#"
    }
];

const skills = [
    { id: 1, skill_name: "Python" },
    { id: 2, skill_name: "Java" },
    { id: 3, skill_name: "C" },
    { id: 4, skill_name: "PHP" },
    { id: 5, skill_name: "JavaScript" },
    { id: 6, skill_name: "Kotlin" },
    { id: 7, skill_name: "Django" },
    { id: 8, skill_name: "Laravel" },
    { id: 9, skill_name: "React" },
    { id: 10, skill_name: "React Native" },
    { id: 11, skill_name: "MERN Stack" },
    { id: 12, skill_name: "HTML" },
    { id: 13, skill_name: "CSS" },
    { id: 14, skill_name: "Bootstrap" },
    { id: 15, skill_name: "MySQL" },
    { id: 16, skill_name: "SQLite" },
    { id: 17, skill_name: "MongoDB" },
    { id: 18, skill_name: "WordPress" },
    { id: 19, skill_name: "Android Studio" },
    { id: 20, skill_name: "Git" },
    { id: 21, skill_name: "GitHub" },
    { id: 22, skill_name: "Jira" },
    { id: 23, skill_name: "n8n Automation" },
    { id: 24, skill_name: "Figma" },
    { id: 25, skill_name: "UI/UX Design" },
    { id: 26, skill_name: "Web Scraping" },
    { id: 27, skill_name: "API Integration" },
    { id: 28, skill_name: "Automation Workflows" },
    { id: 29, skill_name: "AI/ML Basics" }
];

const experience = [
    {
        id: 1,
        role: "WordPress Developer",
        company: "Aspiration Softech",
        duration: "6 Months",
        details: "Developed responsive and SEO-optimized WordPress websites. Customized themes and plugins to meet client requirements. Implemented custom UI designs and learned LMS and e-commerce systems. Gained hands-on experience with real client projects."
    },
    {
        id: 2,
        role: "Python Developer Intern",
        company: "Cognifyz Technologies",
        duration: "1 Month",
        details: "Completed multiple Python-based tasks and mini projects. Developed a small game using Python. Learned and implemented basic web scraping techniques. Gained exposure to practical software development workflows."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const projectSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const experienceSection = document.getElementById('experience');

    // Populate Projects
    if (projectSection) {
        const projectsHtml = projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">GitHub</a>
            </div>
        `).join('');
        projectSection.innerHTML += projectsHtml;
    }

    // Populate Skills
    if (skillsSection) {
        const skillsHtml = skills.map(skill => `
            <div class="skill-item">
                <h4>${skill.skill_name}</h4>
            </div>
        `).join('');
        skillsSection.innerHTML += skillsHtml;
    }

    // Populate Experience
    if (experienceSection) {
        const experienceHtml = experience.map(exp => `
            <div class="experience-card">
                <h3>${exp.role}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.duration}</p>
                <p>${exp.details}</p>
            </div>
        `).join('');
        experienceSection.innerHTML += experienceHtml;
    }

    // Retro typewriter effect for introduction
    const introElement = document.querySelector('.intro-text');
    if (introElement) {
        const text = introElement.textContent;
        introElement.textContent = '';
        let i = 0;
        const typewriter = setInterval(() => {
            if (i < text.length) {
                introElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typewriter);
            }
        }, 100);
    }

    // Simple parallax effect for background image
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollOffset = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrollOffset * 0.5}px`;
        });
    }
});

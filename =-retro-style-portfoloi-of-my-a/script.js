<script>
document.addEventListener('DOMContentLoaded', function() {
    // Retro typewriter effect for the main title
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        const speed = 80;
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    // Scroll animations for different sections
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Interactive hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 8px 15px rgba(74, 144, 226, 0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Fetch and display projects (assuming a backend endpoint exists)
    async function fetchProjects() {
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const projects = await response.json();
            const projectsContainer = document.getElementById('projects-list');
            if (!projectsContainer) return;

            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project-card');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.split(', ').map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        } catch (error) {
            console.error("Could not fetch projects:", error);
            const projectsContainer = document.getElementById('projects-list');
            if (projectsContainer) {
                projectsContainer.innerHTML = '<p class="error-message">Failed to load projects. Please try again later.</p>';
            }
        }
    }

    // Fetch and display skills (assuming a backend endpoint exists)
    async function fetchSkills() {
        try {
            const response = await fetch('/api/skills');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const skills = await response.json();
            const skillsContainer = document.getElementById('skills-list');
            if (!skillsContainer) return;

            const skillGroups = {};
            skills.forEach(skill => {
                // Simple categorization by keyword - could be improved with a dedicated category field
                if (skill.skill_name.toLowerCase().includes('python') || skill.skill_name.toLowerCase().includes('java') || skill.skill_name.toLowerCase().includes('c') || skill.skill_name.toLowerCase().includes('php') || skill.skill_name.toLowerCase().includes('javascript') || skill.skill_name.toLowerCase().includes('kotlin')) {
                    if (!skillGroups['Programming Languages']) skillGroups['Programming Languages'] = [];
                    skillGroups['Programming Languages'].push(skill.skill_name);
                } else if (skill.skill_name.toLowerCase().includes('django') || skill.skill_name.toLowerCase().includes('laravel') || skill.skill_name.toLowerCase().includes('react') || skill.skill_name.toLowerCase().includes('mern')) {
                    if (!skillGroups['Frameworks & Libraries']) skillGroups['Frameworks & Libraries'] = [];
                    skillGroups['Frameworks & Libraries'].push(skill.skill_name);
                } else if (skill.skill_name.toLowerCase().includes('html') || skill.skill_name.toLowerCase().includes('css') || skill.skill_name.toLowerCase().includes('bootstrap')) {
                    if (!skillGroups['Frontend Technologies']) skillGroups['Frontend Technologies'] = [];
                    skillGroups['Frontend Technologies'].push(skill.skill_name);
                } else if (skill.skill_name.toLowerCase().includes('mysql') || skill.skill_name.toLowerCase().includes('sqlite') || skill.skill_name.toLowerCase().includes('mongodb')) {
                    if (!skillGroups['Databases']) skillGroups['Databases'] = [];
                    skillGroups['Databases'].push(skill.skill_name);
                } else if (skill.skill_name.toLowerCase().includes('wordpress') || skill.skill_name.toLowerCase().includes('android') || skill.skill_name.toLowerCase().includes('git') || skill.skill_name.toLowerCase().includes('jira') || skill.skill_name.toLowerCase().includes('n8n') || skill.skill_name.toLowerCase().includes('figma')) {
                    if (!skillGroups['Tools & Platforms']) skillGroups['Tools & Platforms'] = [];
                    skillGroups['Tools & Platforms'].push(skill.skill_name);
                } else {
                    if (!skillGroups['Other']) skillGroups['Other'] = [];
                    skillGroups['Other'].push(skill.skill_name);
                }
            });

            for (const group in skillGroups) {
                const groupElement = document.createElement('div');
                groupElement.classList.add('skill-group');
                groupElement.innerHTML = `<h3>${group}</h3><ul>${skillGroups[group].map(skill => `<li>${skill}</li>`).join('')}</ul>`;
                skillsContainer.appendChild(groupElement);
            }
        } catch (error) {
            console.error("Could not fetch skills:", error);
            const skillsContainer = document.getElementById('skills-list');
            if (skillsContainer) {
                skillsContainer.innerHTML = '<p class="error-message">Failed to load skills. Please try again later.</p>';
            }
        }
    }

    // Fetch and display experience (assuming a backend endpoint exists)
    async function fetchExperience() {
        try {
            const response = await fetch('/api/experience');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const experiences = await response.json();
            const experienceContainer = document.getElementById('experience-list');
            if (!experienceContainer) return;

            experiences.forEach(exp => {
                const experienceElement = document.createElement('div');
                experienceElement.classList.add('experience-item');
                experienceElement.innerHTML = `
                    <h3>${exp.role}</h3>
                    <p class="company-name">${exp.company}</p>
                    <p class="duration">${exp.duration}</p>
                    <ul class="details-list">
                        ${exp.details.split('|').map(detail => `<li>${detail.trim()}</li>`).join('')}
                    </ul>
                `;
                experienceContainer.appendChild(experienceElement);
            });
        } catch (error) {
            console.error("Could not fetch experience:", error);
            const experienceContainer = document.getElementById('experience-list');
            if (experienceContainer) {
                experienceContainer.innerHTML = '<p class="error-message">Failed to load experience. Please try again later.</p>';
            }
        }
    }

    // Call fetch functions if their respective containers exist
    if (document.getElementById('projects-list')) fetchProjects();
    if (document.getElementById('skills-list')) fetchSkills();
    if (document.getElementById('experience-list')) fetchExperience();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');

hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburgerIcon.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    loadSkills();
    loadExperience();
});

async function loadProjects() {
    const projectList = document.getElementById('project-list');
    if (!projectList) return;

    try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();

        projectList.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    <span>Technologies:</span> ${project.technologies.join(', ')}
                </div>
            `;
            projectList.appendChild(projectCard);
        });
    } catch (error) {
        console.error("Could not load projects:", error);
        projectList.innerHTML = '<p class="error-message">Failed to load projects. Please try again later.</p>';
    }
}


async function loadSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    try {
        const response = await fetch('/api/skills');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const skills = await response.json();

        const skillsGrid = document.createElement('div');
        skillsGrid.classList.add('skills-grid');

        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill-item');
            skillElement.textContent = skill.skill_name;
            skillsGrid.appendChild(skillElement);
        });
        skillsList.innerHTML = '';
        skillsList.appendChild(skillsGrid);

    } catch (error) {
        console.error("Could not load skills:", error);
        skillsList.innerHTML = '<p class="error-message">Failed to load skills. Please try again later.</p>';
    }
}


async function loadExperience() {
    const experienceList = document.getElementById('experience-list');
    if (!experienceList) return;

    try {
        const response = await fetch('/api/experience');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const experienceData = await response.json();

        experienceList.innerHTML = '';

        experienceData.forEach(exp => {
            const expCard = document.createElement('div');
            expCard.classList.add('experience-card');
            expCard.innerHTML = `
                <h3>${exp.job_title}</h3>
                <p>${exp.company}</p>
                <p>${exp.duration}</p>
            `;
            experienceList.appendChild(expCard);
        });
    } catch (error) {
        console.error("Could not load experience:", error);
        experienceList.innerHTML = '<p class="error-message">Failed to load experience. Please try again later.</p>';
    }
}



const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessageContainer = document.getElementById('form-message');

        formMessageContainer.textContent = '';
        formMessageContainer.classList.remove('success', 'error');

        if (!name || !email || !message) {
            formMessageContainer.textContent = 'Please fill in all fields.';
            formMessageContainer.classList.add('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessageContainer.textContent = 'Please enter a valid email address.';
            formMessageContainer.classList.add('error');
            return;
        }

        const formData = { name, email, message };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                 const errorData = await response.json();
                 throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            formMessageContainer.textContent = 'Message sent successfully!';
            formMessageContainer.classList.add('success');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            formMessageContainer.textContent = `Failed to send message: ${error.message}`;
            formMessageContainer.classList.add('error');
        }
    });
}

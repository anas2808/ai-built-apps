const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        navLinks.forEach(nav => nav.classList.remove("current"));
        this.classList.add("current");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navContainer = document.querySelector(".navbar ul");

    if (!navContainer) {
        console.error("Navbar container not found.");
        return;
    }

    const navItems = navContainer.querySelectorAll("li a");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sections.forEach(section => section.classList.remove("active"));
                entry.target.classList.add("active");

                navItems.forEach(navItem => {
                    navItem.classList.remove("current");
                    if (navItem.getAttribute("href") === `#${entry.target.id}`) {
                        navItem.classList.add("current");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Fetch projects and display them
    fetch('/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(projects => {
            const projectsContainer = document.getElementById('projects-list');
            if (!projectsContainer) return;

            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project-item');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.split(', ').map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="cta-button">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            const projectsContainer = document.getElementById('projects-list');
            if (projectsContainer) {
                projectsContainer.innerHTML = '<p style="color: var(--secondary-color);">Failed to load projects. Please try again later.</p>';
            }
        });

    // Fetch skills and display them
    fetch('/api/skills')
        .then(response => response.json())
        .then(skills => {
            const skillsContainer = document.getElementById('skills-list');
            if (!skillsContainer) return;

            skills.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.classList.add('skill-item');
                skillElement.innerHTML = `
                    <h4>${skill.skill_name}</h4>
                    <div class="skill-bar-container">
                        <div class="skill-bar" style="width: ${skill.proficiency}%;"></div>
                    </div>
                    <span class="proficiency-label">${skill.proficiency}%</span>
                `;
                skillsContainer.appendChild(skillElement);
            });
        })
        .catch(error => {
            console.error('Error fetching skills:', error);
            const skillsContainer = document.getElementById('skills-list');
            if (skillsContainer) {
                skillsContainer.innerHTML = '<p style="color: var(--secondary-color);">Failed to load skills. Please try again later.</p>';
            }
        });

    // Handle form submission for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('.cta-button');
            const formMessage = document.getElementById('form-message');

            submitButton.disabled = true;
            formMessage.textContent = 'Sending...';
            formMessage.style.color = 'var(--dark-gray)';

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            })
            .then(result => {
                formMessage.textContent = result.message || 'Message sent successfully!';
                formMessage.style.color = '#28a745'; // Green for success
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error sending message:', error);
                formMessage.textContent = error.message || 'Failed to send message. Please try again.';
                formMessage.style.color = 'var(--secondary-color)'; // Red for error
            })
            .finally(() => {
                submitButton.disabled = false;
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            });
        });
    }
});

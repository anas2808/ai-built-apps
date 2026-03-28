```markdown
# Anas Mansuri - Full Stack Developer Portfolio

This repository contains the code for my personal portfolio website. It showcases my skills, projects, and experience as a motivated MCA student and aspiring software developer. The portfolio is designed with a modern retro aesthetic, emphasizing clean code practices and a user-friendly experience.

## Features

-   **Modern Retro Design:** A visually appealing and nostalgic design that stands out.
-   **Responsive Layout:** Fully accessible and looks great on all devices, from mobile phones to desktops.
-   **Project Showcase:** Detailed descriptions and technologies used for each project.
-   **Skills Highlight:** Comprehensive list of technical skills and proficiencies.
-   **Experience & Education:** Overview of professional experience and academic background.
-   **Contact Information:** Easy ways to get in touch and connect on professional platforms.

## Tech Stack

-   **Frontend:** HTML, CSS, JavaScript, Bootstrap (used for rapid development across pages)
-   **Backend:** Python (Django/Laravel for projects, though not explicitly served in this static portfolio build)
-   **Database:** MySQL, SQLite, MongoDB (as indicated in project descriptions)
-   **Tools:** Git, GitHub, Figma

## Project Structure

The project is divided into frontend components that are linked together to form the complete portfolio.

-   `frontend/`
    -   `index.html`: Homepage
    -   `projects.html`: Projects page
    -   `skills.html`: Skills page
    -   `experience.html`: Experience page
    -   `contact.html`: Contact page
    -   `style.css`: Global styles for the portfolio

## Getting Started

To run this portfolio locally:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/anas-mansuri-portfolio.git
    ```
2.  Navigate to the `frontend` directory:
    ```bash
    cd anas-mansuri-portfolio/frontend
    ```
3.  Open any of the HTML files (e.g., `index.html`) in your web browser.

## Personal Information

-   **Name:** Anas Mansuri
-   **Location:** Ahmedabad, Gujarat, India
-   **Phone:** 7990238770
-   **Email:** anas2808anas@gmail.com
-   **LinkedIn:** [Link to LinkedIn Profile] (Replace with actual link)
-   **GitHub:** [Link to GitHub Profile] (Replace with actual link)

## Education

-   **Master of Computer Applications (MCA)**: L.J. Institute of Computer Application | Expected 2025 - 2027
-   **Bachelor of Computer Applications (BCA)**: L.J. Institute of Computer Application | 2022 - 2025 | CGPA: 7.08
-   **Higher Secondary (XII)**: Ankur High School (GSEB) | 2022 | Percentage: 55.6%
-   **Secondary (X)**: Model English School | 2020 | Percentage: 51.67%

## Technical Skills

-   **Programming Languages:** Python, Java, C, PHP, JavaScript, Kotlin
-   **Frameworks & Libraries:** Django, Laravel, React, React Native, MERN Stack
-   **Frontend Technologies:** HTML, CSS, Bootstrap
-   **Databases:** MySQL, SQLite, MongoDB
-   **Tools & Platforms:** WordPress, Android Studio, Git, GitHub, Jira, n8n Automation, Figma
-   **Other Skills:** UI/UX Design, Web Scraping, API Integration, Automation Workflows, AI/ML Basics

## Professional Experience

-   **WordPress Developer** | Aspiration Softech | 6 Months
    -   Developed responsive and SEO-optimized WordPress websites.
    -   Customized themes and plugins to meet client requirements.
    -   Implemented custom UI designs and learned LMS and e-commerce systems.
    -   Gained hands-on experience with real client projects.
-   **Python Developer Intern** | Cognifyz Technologies | 1 Month
    -   Completed multiple Python-based tasks and mini-projects.
    -   Developed a small game using Python.
    -   Learned and implemented basic web scraping techniques.
    -   Gained exposure to practical software development workflows.

## Projects

-   **QuickTrade Marketplace:** An OLX-like marketplace for buying and selling products.
    -   *Technologies:* Python, Django, HTML, CSS, JavaScript, Bootstrap, SQL
    -   *Features:* User authentication, product search/filters, chat system, auto-expiry ads, profile management.
    -   *GitHub:* [Link to QuickTrade Repository] (Replace with actual link)
-   **MobHub - Mobile Phone Store:** An e-commerce platform for purchasing mobile phones.
    -   *Technologies:* Python, Django, HTML, CSS, JavaScript, Bootstrap, SQL
    -   *Features:* Product listing, category browsing, user authentication.
    -   *GitHub:* [Link to MobHub Repository] (Replace with actual link)
-   **Wrist Gem - Watch Selling Website:** An online watch store with full e-commerce functionality.
    -   *Technologies:* Laravel, PHP, SQL, HTML, CSS, JavaScript, Bootstrap
    -   *Features:* User login/logout, checkout system, admin-side product and order management.
    -   *GitHub:* [Link to Wrist Gem Repository] (Replace with actual link)
-   **Save for Later - Bookmark Android App:** An Android app for saving and managing bookmarks.
    -   *Technologies:* Android Studio, Kotlin, Firebase
    -   *Features:* Automatic tag identification, intelligent categorization.
    -   *GitHub:* [Link to Save for Later Repository] (Replace with actual link)
-   **Automation Projects:**
    -   n8n automation for analyzing job posts and applying via email/WhatsApp.
    -   Automation for managing GitHub repositories by committing daily tasks.

## Certifications

-   **Google UX Design Professional Certificate:** Google (Coursera) | November 2024
-   **Automate Tasks and Processes with Jira:** Coursera Project Network | 2025 | Grade: 100%
-   **Fake News Detection with Machine Learning:** Coursera Project Network | 2025 | Grade: 83%

## Languages

-   English
-   Hindi
-   Gujarati

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anas Mansuri - Projects</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-logo">Anas Mansuri</div>
            <ul class="nav-links">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item active"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="skills.html" class="nav-link">Skills</a></li>
                <li class="nav-item"><a href="experience.html" class="nav-link">Experience</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="section container">
        <h1 class="section-title">My Projects</h1>
        <div id="projects-grid" class="projects-grid">
            <!-- Project cards will be loaded here by JavaScript -->
            <div class="project-card">
                <h3 class="project-title">QuickTrade Marketplace</h3>
                <p class="project-description">An OLX-like marketplace where users can buy and sell products. Features include user authentication, product search and filters, chat system, advertisement auto-expiry, profile management, and ad editing. Custom admin panel and fully mobile-responsive design.</p>
                <div class="technologies">
                    <strong>Technologies:</strong> Python, Django, HTML, CSS, JavaScript, Bootstrap, SQL
                </div>
                <div class="project-links">
                    <a href="https://github.com/anas2808/QuickTrade" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">MobHub - Mobile Phone Store</h3>
                <p class="project-description">An e-commerce platform for purchasing mobile phones. Includes product listing, category-based browsing, and user authentication.</p>
                <div class="technologies">
                    <strong>Technologies:</strong> Python, Django, HTML, CSS, JavaScript, Bootstrap, SQL
                </div>
                <div class="project-links">
                    <a href="https://github.com/anas2808/MobHub" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Wrist Gem - Watch Selling Website</h3>
                <p class="project-description">An online watch store with login/logout and checkout system. Features admin-side product and order management.</p>
                <div class="technologies">
                    <strong>Technologies:</strong> Laravel, PHP, SQL, HTML, CSS, JavaScript, Bootstrap
                </div>
                <div class="project-links">
                    <a href="https://github.com/anas2808/WristGem" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Save for Later - Bookmark Android App</h3>
                <p class="project-description">An Android app to save and manage bookmarks. Automatically identifies tags from pasted links and categorizes bookmarks intelligently.</p>
                <div class="technologies">
                    <strong>Technologies:</strong> Android Studio, Kotlin, Firebase
                </div>
                <div class="project-links">
                    <a href="https://github.com/anas2808/SaveForLater" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Automation Projects</h3>
                <p class="project-description">Developed an n8n automation that analyzes job posts received on Telegram and automatically applies for jobs via email or WhatsApp. Developed an automation to manage GitHub repositories by committing a small daily task automatically to maintain consistency.</p>
                <div class="technologies">
                    <strong>Technologies:</strong> n8n, Python, GitHub Actions
                </div>
                <div class="project-links">
                     <span class="info-text">Specific implementations may not be public due to client confidentiality.</span>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
```css
:root {
    --primary-color: #ff6f61;
    --secondary-color: #6a5acd;
    --background-color: #f0f0f0;
    --text-color: #333333;
    --light-gray: #e0e0e0;
    --dark-gray: #555555;
    --white: #ffffff;
    --font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.navbar {
    background-color: var(--white);
    padding: 15px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.8em;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-item {
    margin-left: 25px;
}

.nav-link {
    color: var(--dark-gray);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-item.active .nav-link {
    color: var(--primary-color);
    font-weight: 700;
}

.hero-section {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 100px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    opacity: 0.7;
    z-index: 0;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3.5em;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
}

.hero-subtitle {
    font-size: 1.5em;
    margin-bottom: 30px;
    font-weight: 400;
}

.hero-cta .btn {
    margin: 0 10px;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--secondary-color);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #5345a0;
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--white);
}

.btn-secondary:hover {
    background-color: transparent;
    color: var(--white);
    border-color: var(--white);
    transform: translateY(-2px);
}

.section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.8em;
    margin-bottom: 50px;
    font-weight: 700;
    position: relative;
    padding-bottom: 10px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 2px;
}

.card {
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.contact-info {
    text-align: center;
    max-width: 600px;
    margin: 40px auto;
}

.contact-item {
    margin-bottom: 20px;
    font-size: 1.1em;
}

.contact-item p {
    margin: 0;
    color: var(--dark-gray);
}

.contact-item strong {
    color: var(--text-color);
    font-size: 1.3em;
    display: block;
    margin-bottom: 5px;
}

.social-links {
    text-align: center;
    margin-top: 25px;
}

.social-links a {
    margin: 0 15px;
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 1.5em;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.project-card {
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-title {
    font-size: 1.8em;
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--primary-color);
}

.project-description {
    font-size: 1em;
    margin-bottom: 20px;
    color: var(--dark-gray);
    flex-grow: 1; /* Allows description to take available space */
}

.technologies {
    font-size: 0.9em;
    margin-bottom: 20px;
    color: var(--text-color);
}

.technologies strong {
    display: block;
    margin-bottom: 8px;
    color: var(--dark-gray);
}

.project-links {
    margin-top: auto; /* Pushes links to the bottom */
}

.project-links .btn {
    margin-right: 10px;
}

.info-text{
    font-size: 0.8em;
    color: var(--dark-gray);
    font-style: italic;
}

.skills-list {
    list-style: none;
    padding: 0;
}

.skills-category {
    margin-bottom: 30px;
}

.skills-category h3 {
    font-size: 1.8em;
    color: var(--primary-color);
    border-bottom: 2px solid var(--light-gray);
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.skills-category ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skills-category li {
    background-color: var(--white);
    color: var(--secondary-color);
    padding: 8px 15px;
    border-radius: 20px;
    border: 1px solid var(--secondary-color);
    font-weight: 500;
    font-size: 0.95em;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.skills-category li:hover {
    background-color: var(--secondary-color);
    color: var(--white);
}

.experience-section, .education-section {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.experience-item, .education-item {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--light-gray);
}

.experience-item:last-child, .education-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.company, .institution {
    font-size: 1.6em;
    color: var(--primary-color);
    margin-bottom: 5px;
    font-weight: 700;
}

.position, .degree {
    font-size: 1.3em;
    color: var(--secondary-color);
    font-weight: 500;
    margin-bottom: 8px;
    display: block;
}

.duration, .years, .cgpa {
    font-size: 0.95em;
    color: var(--dark-gray);
    font-style: italic;
}

.description {
    font-size: 1em;
    color: var(--text-color);
    margin-top: 10px;
    padding-left: 15px;
    border-left: 3px solid var(--light-gray);
}

.footer {
    background-color: var(--dark-gray);
    color: var(--light-gray);
    text-align: center;
    padding: 25px 0;
    margin-top: 50px;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer p {
    margin: 0;
    font-size: 0.9em;
}

.footer .social-links a {
    color: var(--light-gray);
    font-size: 1.2em;
}

.footer .social-links a:hover {
    color: var(--primary-color);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
    }

    .nav-links {
        margin-top: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-item {
        margin: 5px 15px;
    }

    .hero-title {
        font-size: 2.5em;
    }

    .hero-subtitle {
        font-size: 1.2em;
    }

    .hero-cta .btn {
        display: block;
        margin: 10px auto;
        width: fit-content;
    }

    .section-title {
        font-size: 2.2em;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card {
        padding: 25px;
    }

    .company, .institution {
        font-size: 1.3em;
    }

    .position, .degree {
        font-size: 1.1em;
    }
    
    .footer .container {
        flex-direction: column;
    }

    .footer p {
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2em;
    }

    .hero-subtitle {
        font-size: 1em;
    }

    .section-title {
        font-size: 1.8em;
    }

    .nav-logo {
        font-size: 1.5em;
    }

    .nav-item {
        margin: 5px 10px;
    }

    .nav-link {
        font-size: 0.9em;
    }

    .card, .project-card, .experience-section, .education-section {
        padding: 20px;
    }
    
    .footer {
        padding: 15px 0;
    }
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anas Mansuri - Contact</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-logo">Anas Mansuri</div>
            <ul class="nav-links">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="skills.html" class="nav-link">Skills</a></li>
                <li class="nav-item"><a href="experience.html" class="nav-link">Experience</a></li>
                <li class="nav-item active"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="section container">
        <h1 class="section-title">Get In Touch</h1>
        <div class="contact-info">
            <div class="contact-item">
                <strong>Email</strong>
                <p>anas2808anas@gmail.com</p>
            </div>
            <div class="contact-item">
                <strong>Phone</strong>
                <p>+91 7990238770</p>
            </div>
            <div class="contact-item">
                <strong>Location</strong>
                <p>Ahmedabad, Gujarat, India</p>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
                <a href="https://leetcode.com/user_404/" target="_blank" class="social-icon">LeetCode</a>
            </div>
        </div>
        
         <p class="info-text text-center" style="margin-top: 30px;">You can also find me on platforms like LeetCode for coding challenges.</p>


    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
                <a href="https://leetcode.com/user_404/" target="_blank" class="social-icon">LeetCode</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anas Mansuri - Home</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-logo">Anas Mansuri</div>
            <ul class="nav-links">
                <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="skills.html" class="nav-link">Skills</a></li>
                <li class="nav-item"><a href="experience.html" class="nav-link">Experience</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <header class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Anas Mansuri</h1>
                <p class="hero-subtitle">Motivated MCA student & Aspiring Software Developer | Building innovative solutions with code.</p>
                <div class="hero-cta">
                    <a href="projects.html" class="btn btn-primary">View My Work</a>
                    <a href="contact.html" class="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </div>
    </header>

    <section class="section container">
        <h2 class="section-title">About Me</h2>
        <div class="card">
            <p>I am a highly motivated Master of Computer Applications (MCA) student with a strong foundation in Computer Applications (BCA). My passion lies in transforming complex problems into elegant, efficient software solutions. I am actively seeking an entry-level opportunity where I can leverage my skills in web development, automation, and problem-solving to contribute to real-world projects while continuously learning and growing.</p>
            <p>With experience in diverse technologies ranging from Python and Django to React and MERN stack, I am adept at building both front-end and back-end components. My internship experience as a WordPress Developer and Python Developer has provided me with practical insights into client-focused development and software development workflows.</p>
            <p>I am also certified in UX Design from Google, which enables me to create user-centric and intuitive interfaces. My goal is to blend technical expertise with a strong understanding of user experience to deliver impactful digital products.</p>
        </div>
    </section>

     <section class="section container">
        <h2 class="section-title">Key Skills</h2>
        <div class="skills-list-home">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Django</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">UI/UX Design</span>
            <span class="skill-tag">Automation</span>
            <span class="skill-tag">API Integration</span>
        </div>
        <div class="cta-skills">
             <a href="skills.html" class="btn btn-secondary">View All Skills</a>
        </div>
    </section>


    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
                 <a href="https://leetcode.com/user_404/" target="_blank" class="social-icon">LeetCode</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anas Mansuri - Experience</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-logo">Anas Mansuri</div>
            <ul class="nav-links">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="skills.html" class="nav-link">Skills</a></li>
                <li class="nav-item active"><a href="experience.html" class="nav-link">Experience</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="section container">
        <h1 class="section-title">Professional Experience</h1>
        <div class="experience-section">
            <div class="experience-item">
                <div class="company">Aspiration Softech</div>
                <div class="position">WordPress Developer</div>
                <div class="duration">6 Months</div>
                <ul class="description">
                    <li>Developed responsive and SEO-optimized WordPress websites.</li>
                    <li>Customized themes and plugins to meet client requirements.</li>
                    <li>Implemented custom UI designs and learned LMS and e-commerce systems.</li>
                    <li>Gained hands-on experience with real client projects.</li>
                </ul>
            </div>
            <div class="experience-item">
                <div class="company">Cognifyz Technologies</div>
                <div class="position">Python Developer Intern</div>
                <div class="duration">1 Month</div>
                <ul class="description">
                    <li>Completed multiple Python-based tasks and mini-projects.</li>
                    <li>Developed a small game using Python.</li>
                    <li>Learned and implemented basic web scraping techniques.</li>
                    <li>Gained exposure to practical software development workflows.</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="section container">
        <h1 class="section-title">Education</h1>
        <div class="education-section">
            <div class="education-item">
                <div class="institution">L.J. Institute of Computer Application</div>
                <div class="degree">Master of Computer Applications (MCA)</div>
                <div class="years">2025 - 2027</div>
                <div class="cgpa">Expected</div>
            </div>
            <div class="education-item">
                <div class="institution">L.J. Institute of Computer Application</div>
                <div class="degree">Bachelor of Computer Applications (BCA)</div>
                <div class="years">2022 - 2025</div>
                <div class="cgpa">CGPA: 7.08</div>
            </div>
            <div class="education-item">
                <div class="institution">Ankur High School (GSEB)</div>
                <div class="degree">Higher Secondary (XII)</div>
                <div class="years">2022</div>
                <div class="cgpa">Percentage: 55.6%</div>
            </div>
            <div class="education-item">
                <div class="institution">Model English School</div>
                <div class="degree">Secondary (X)</div>
                <div class="years">2020</div>
                <div class="cgpa">Percentage: 51.67%</div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
                <a href="https://leetcode.com/user_404/" target="_blank" class="social-icon">LeetCode</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
```json
{
  "appName": "Anas Mansuri Portfolio",
  "colorScheme": {
    "primary": "#ff6f61",
    "secondary": "#6a5acd",
    "background": "#f0f0f0",
    "text": "#333333"
  },
  "fontFamily": "Roboto",
  "navbar": [
    "Home",
    "Projects",
    "Skills",
    "Experience",
    "Contact"
  ],
  "apiEndpoints": [
    {
      "method": "GET",
      "path": "/api/projects",
      "description": "Fetches the list of projects"
    },
    {
      "method": "GET",
      "path": "/api/skills",
      "description": "Fetches the list of technical skills"
    }
  ],
  "databaseTables": [
    {
      "name": "projects",
      "columns": [
        "id",
        "title",
        "description",
        "technologies",
        "link"
      ]
    },
    {
      "name": "skills",
      "columns": [
        "id",
        "skill",
        "category"
      ]
    }
  ],
  "techStack": {
    "frontend": "React",
    "backend": "Python",
    "database": "MySQL"
  },
  "sharedComponents": {
    "navbar": "<nav>\n    <div class=\"container\">\n        <div class=\"nav-logo\">Anas Mansuri</div>\n        <ul class=\"nav-links\">\n            <li class=\"nav-item\"><a href=\"index.html\" class=\"nav-link\">Home</a></li>\n            <li class=\"nav-item\"><a href=\"projects.html\" class=\"nav-link\">Projects</a></li>\n            <li class=\"nav-item\"><a href=\"skills.html\" class=\"nav-link\">Skills</a></li>\n            <li class=\"nav-item\"><a href=\"experience.html\" class=\"nav-link\">Experience</a></li>\n            <li class=\"nav-item\"><a href=\"contact.html\" class=\"nav-link\">Contact</a></li>\n        </ul>\n    </div>\n</nav>",
    "footer": "<footer>\n    <div class=\"container\">\n        <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>\n        <div class=\"social-links\">\n            <a href=\"https://www.linkedin.com/in/anas-mansuri-959859271/\" target=\"_blank\" class=\"social-icon\">LinkedIn</a>\n            <a href=\"https://github.com/anas2808\" target=\"_blank\" class=\"social-icon\">GitHub</a>\n        </div>\n    </div>\n</footer>"
  }
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anas Mansuri - Skills</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-logo">Anas Mansuri</div>
            <ul class="nav-links">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item active"><a href="skills.html" class="nav-link">Skills</a></li>
                <li class="nav-item"><a href="experience.html" class="nav-link">Experience</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="section container">
        <h1 class="section-title">Technical Skills</h1>
        <div class="skills-container">
            <div class="skills-category">
                <h3>Programming Languages</h3>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>Kotlin</li>
                </ul>
            </div>
            <div class="skills-category">
                <h3>Frameworks & Libraries</h3>
                <ul>
                    <li>Django</li>
                    <li>Laravel</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>MERN Stack</li>
                </ul>
            </div>
            <div class="skills-category">
                <h3>Frontend Technologies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div class="skills-category">
                <h3>Databases</h3>
                <ul>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div class="skills-category">
                <h3>Tools & Platforms</h3>
                <ul>
                    <li>WordPress</li>
                    <li>Android Studio</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Jira</li>
                    <li>n8n Automation</li>
                    <li>Figma</li>
                </ul>
            </div>
            <div class="skills-category">
                <h3>Other Skills</h3>
                <ul>
                    <li>UI/UX Design</li>
                    <li>Web Scraping</li>
                    <li>API Integration</li>
                    <li>Automation Workflows</li>
                    <li>AI/ML Basics</li>
                </ul>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Anas Mansuri. All Rights Reserved.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/anas-mansuri-959859271/" target="_blank" class="social-icon">LinkedIn</a>
                <a href="https://github.com/anas2808" target="_blank" class="social-icon">GitHub</a>
                 <a href="https://leetcode.com/user_404/" target="_blank" class="social-icon">LeetCode</a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
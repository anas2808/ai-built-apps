const TYPING_DELAY = 50;
const NEWLINE_DELAY = 150;
const COMMAND_EXECUTION_DELAY = 300;

document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.querySelector('.terminal-body');
    if (!terminalBody) return;

    const commands = {
        'help': () => {
            printLine('Available commands:');
            printLine('&nbsp;&nbsp;help - Displays this help message.');
            printLine('&nbsp;&nbsp;about - Shows my career objective and education.');
            printLine('&nbsp;&nbsp;projects - Lists my key projects.');
            printLine('&nbsp;&nbsp;skills - Displays my technical skills.');
            printLine('&nbsp;&nbsp;experience - Shows my professional experience.');
            printLine('&nbsp;&nbsp;contact - Provides contact information and a form.');
            printLine('&nbsp;&nbsp;clear - Clears the terminal screen.');
        },
        'about': () => {
            fetch('/frontend/about.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const aboutContent = doc.querySelector('.about-content').innerHTML;
                    printHtml(aboutContent);
                })
                .catch(error => {
                    printLine(`Error loading about page: ${error}`);
                });
        },
        'projects': () => {
            fetch('/api/projects')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        printLine('No projects found.');
                        return;
                    }
                    printLine('<h2>Projects:</h2>');
                    data.forEach(project => {
                        printLine(`<h3>${project.title}</h3>`);
                        printLine(`<p>${project.description}</p>`);
                        if (project.url) {
                            printLine(`<p>Link: <a href="${project.url}" target="_blank">${project.url}</a></p>`);
                        }
                        printLine('<hr>');
                    });
                })
                .catch(error => {
                    printLine(`Error fetching projects: ${error}`);
                });
        },
        'skills': () => {
            fetch('/api/skills')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        printLine('No skills found.');
                        return;
                    }
                    printLine('<h2>Technical Skills:</h2>');
                    printLine('<ul>');
                    data.forEach(skill => {
                        printLine(`<li>${skill.skill_name}</li>`);
                    });
                    printLine('</ul>');
                })
                .catch(error => {
                    printLine(`Error fetching skills: ${error}`);
                });
        },
        'experience': () => {
            fetch('/api/experience')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        printLine('No experience found.');
                        return;
                    }
                    printLine('<h2>Professional Experience:</h2>');
                    data.forEach(exp => {
                        printLine(`<h3>${exp.role} at ${exp.company}</h3>`);
                        printLine(`<p>${exp.duration}</p>`);
                        printLine('<hr>');
                    });
                })
                .catch(error => {
                    printLine(`Error fetching experience: ${error}`);
                });
        },
        'contact': () => {
            fetch('/frontend/contact.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const contactContent = doc.querySelector('.contact-content').innerHTML;
                    printHtml(contactContent);
                })
                .catch(error => {
                    printLine(`Error loading contact page: ${error}`);
                });
        },
        'clear': () => {
            terminalBody.innerHTML = '';
        }
    };

    const input = document.getElementById('terminal-input');
    const prompt = document.querySelector('.prompt span');

    // Function to print a line of text with typing effect
    const printLine = (text) => {
        return new Promise((resolve) => {
            const line = document.createElement('p');
            line.style.color = 'var(--text-color)';
            line.style.whiteSpace = 'pre-wrap';
            line.innerHTML = '';
            terminalBody.appendChild(line);

            let i = 0;
            const type = () => {
                if (i < text.length) {
                    line.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, TYPING_DELAY);
                } else {
                    resolve();
                }
            };
            type();
        });
    };

    // Function to print HTML content
    const printHtml = (htmlContent) => {
        const div = document.createElement('div');
        div.style.color = 'var(--text-color)';
        div.innerHTML = htmlContent;
        terminalBody.appendChild(div);
        // Scroll to bottom after adding content
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    // Function to execute a command
    const executeCommand = async (commandLine) => {
        const commandParts = commandLine.trim().split(' ');
        const command = commandParts[0].toLowerCase();
        const args = commandParts.slice(1);

        // Hide the input line
        const inputLine = input.parentElement;
        inputLine.style.display = 'none';

        // Display the command that was entered
        await printLine(`${prompt.textContent}${commandLine}`);

        if (commands[command]) {
            await commands[command](...args); // Pass arguments if any
        } else if (command === '') {
            // Do nothing for empty command
        } else {
            printLine(`Command not found: ${command}. Type 'help' for a list of commands.`);
        }

        // Add a new input line after a delay
        setTimeout(() => {
            inputLine.style.display = 'flex';
            input.value = '';
            input.focus();
            // Scroll to bottom after adding new input line
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, NEWLINE_DELAY);
    };

    // Handle input submission
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault();
            const commandLine = input.value;
            executeCommand(commandLine);
        }
    });

    // Initial greeting and prompt setup
    const displayInitialGreeting = async () => {
        await printLine(`Welcome to Anas Mansuri's Retro Portfolio.`);
        await printLine(`Type 'help' to see available commands.`);
        await new Promise(resolve => setTimeout(resolve, NEWLINE_DELAY)); // Wait before showing the first prompt line
        const inputLine = input.parentElement;
        inputLine.style.display = 'flex';
        input.focus();
    };

    displayInitialGreeting();
});
;
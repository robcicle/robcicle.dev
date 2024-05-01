// When the DOM content is loaded, set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

// Function to set up event listeners
function setupEventListeners() {
    // Function to update the server number periodically
    const updateServerNumber = () => {
        // Generate a random number between 0 and 999
        const randomNumber = Math.floor(Math.random() * 1000);
        // Update the server number display
        document.getElementById('server-number').textContent = `- Server ${randomNumber.toString().padStart(3, '0')} -`;
    };

    // Function to generate a random terminal number and display it
    const randomTerminalNumber = () => {
        // Generate a random number between 0 and 99999
        const randomNumber = Math.floor(Math.random() * 100000);
        // Update the terminal number display
        document.getElementById('terminal-number').innerHTML = 
        `Remote Terminal Access (#${randomNumber.toString().padStart(5, '0')}) <br>
        M->X's Operative Data Exchange (MODE)`;
    };

    // Call the updateServerNumber function every 100 milliseconds (0.1 seconds)
    setInterval(updateServerNumber, 100);
    // Call the randomTerminalNumber function to initialize the terminal number display
    randomTerminalNumber();

    // Event listener for handling command input
    const commandInput = document.getElementById('command-input');
    commandInput.addEventListener('keydown', function(event) {
        // Listen for the Enter key press
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key behavior
            let command = commandInput.value.trim(); // Get the trimmed command input
            commandInput.value = ''; // Clear the command input field
            executeCommand(command); // Execute the entered command
        }
    });
}

function typeEffect(element, text, delay = 100, callback = () => {}) {
    let cursorPosition = 0;
    let output = ""; // This holds all text including HTML to be displayed.
    let char = ""; // To hold the current character
    let htmlTag = false; // Indicates if the current characters are inside HTML tag
    let tagBuffer = ""; // Buffer to hold text within the HTML tags

    element.innerHTML = ""; // Clear the element before starting

    const typeChar = () => {
        if (cursorPosition < text.length) {
            char = text.charAt(cursorPosition);

            // Check if current character is a part of an HTML tag
            if (char === "<" || htmlTag) {
                htmlTag = true;
                tagBuffer += char;
                if (char === ">") {
                    htmlTag = false;
                    output += tagBuffer;
                    element.innerHTML = output; // Update the element with tag included
                    tagBuffer = "";
                }
            } else {
                output += char; // Add normal characters to output
                element.innerHTML = output; // Display current output including HTML
            }

            cursorPosition++;
            setTimeout(typeChar, delay); // Schedule the next character
        } else {
            if (callback) callback(); // Call the completion callback
        }
    };

    typeChar(); // Start typing
}

// Function to execute different commands based on user input
function executeCommand(command) {
    const outputArea = document.getElementById('output-area');

    // Remove existing animation class if any
    outputArea.classList.remove('dynamic-content');

    // Use setTimeout to ensure the class is applied after removing it for re-triggering the animation
    setTimeout(() => outputArea.classList.add('dynamic-content'), 10);

    switch (command.toLowerCase()) {
        case 'home':
            outputArea.innerHTML = `
            <ul>
                <!-- Commands -->
                <li><a href="javascript:void(0);" onclick="executeCommand('commands');" title="">Commands</a></li>
				<p></p><br>
                <!-- Projects -->
                <li><a href="javascript:void(0);" onclick="executeCommand('projects');" title="">Projects</a></li>
				<p></p><br>
            </ul>
            `
            break;
        case 'clear':
            // Clear the output area
            outputArea.innerHTML = ``;
            break;
        case 'help':
        case 'command':
        case 'commands':
            // Display available commands
            outputArea.innerHTML = `AVAILABLE COMMANDS: <br>
            clear, help, projects`;
            break;
        case 'status':
            // Display system status
            outputArea.innerHTML = `SYSTEM IS RUNNING`;
            break;
        case 'project':
        case 'projects':
            // Display available projects with a clickable link
            outputArea.innerHTML = `
            <ul>
                <li><a href="javascript:void(0);" onclick="executeCommand('project-blackwall');" title="">PROJECT BLACKWALL</a></li>
            </ul>`;
            break;
        case 'project-blackwall':
            // Start typing "Loading Project Blackwall"
            typeEffect(outputArea, 'Loading Project Blackwall', 30, () => {
                let dots = '';
                // Declare interval here so it can be accessed later for clearing
                let interval = setInterval(() => {
                    if (dots.length < 3) {
                        dots += '.'; // Add a dot if less than three
                    } else {
                        dots = ''; // Reset to no dots after three
                    }
                    outputArea.innerHTML = `Loading Project Blackwall${dots}`;
                }, 500); // Update every 500 milliseconds

                // Set a timeout to stop the animation and display the final message
                setTimeout(() => {
                    clearInterval(interval); // Stop the interval
                    outputArea.innerHTML = ''; // Clear before typing the loaded message
                    typeEffect(outputArea, 'Project Blackwall successfully loaded.', 30, () => {
                        // Display the final content after a short delay
                        setTimeout(() => {
                            typeEffect(outputArea, `
                            <h1>Project Blackwall</h1>
                            <p>This document was written by b1nary.</p><br>

                        <p>OOC: For all intents and purposes, all information on this document is considered “IC” information unless otherwise specified.</p><br>
                        <p>OOC: ANY time you partake in the SNIFFA hacks, if you’re streaming, chat is to be in Emote-Only mode</p><br>

                        <h2>Project Hierarchy</h2>
                        <p>Executive Overseer: "Yappster"</p>
                        <p>Overseer: "DRAKESMEAT"</p>
                        <p>Overseer: "The King"</p>
                        <p>Overseer: "Habibi"</p><br>

                        <p>Project Lead 1: "b1nary"</p>
                        <p>Project Lead 2: "M->X"</p><br>

                        <p>Participant 1: "FP" (NEED DARK WEB NAME)</p>
                        <p>Participant 2: "YappsterJr"</p>
                        <p>Participant 3: "SD" (NEED DARK WEB NAME)</p>
                        <p>Participant 4: "DR" (NEED DARK WEB NAME)</p><br>

                        <h2>Overview</h2>
                        <p>Project BlackWall aims to create digital chaos in the city, specifically on days when network traffic is high. The plan is to hack into any and all non-allied computer systems and attempt to steal as much BUTC as possible, while simultaneously creating pandemonium and chaos.</p><br>

                        <p>The next time network traffic will be high is roughly estimated to be on March 6th and/or March 7th when Ammu-nation contracts become available.</p><br>

                        <p>All participants of Project Blackwell will be given the exact date and time to be around by Mickey, likely 30-60 minutes before the Project commences. We will be initiating the digital attacks approximately 10 minutes before the contracts go live.</p><br>

                        <p>The location for this is the Company HQ. A netrunner outfit is required.</p><br>

                        <h2>Plan of Action</h2>
                        <p>The overall goal is to cause digital chaos and pandemonium in SECRET. Nobody is to know that we’re launching these attacks. “We want to hack people until they don’t wake up.” NO MERCY on these attacks. NONE.</p><br>
                
                        <p>To start, each hacker will be given an allotment of 15 BUTC (3 hacks), as each SNIFFA hack costs 5 BUTC of processing power. It is OKAY if this project operates at a loss to start. Beyond BlackWall, the plan is to cause this digital chaos whenever Los Santos network traffic will be high.</p><br>

                        <p>Between each session of hacking, all participants are to meet in the company HQ offices to discuss ideas, thoughts, questions, concerns regarding how everyone is doing as well as exchange any ideas anyone may have to help everyone improve.</p><br>

                        <p>Eventually, the goal of Project BlackWall is to evolve this into a profitable endeavor if possible. Theoretically, we should be able to do this if all participants become good enough. Each participant can and will be individually and regularly assessed by project leads to make sure they’re up to snuff on current cyber security techniques.</p><br>

                        `, 15);
                        }, 2000); // Adjust timing as needed
                    });
                }, 3000); // Stop after 3 seconds
            });
            break;
        case ``:
            break;
        default:
            // Display an error message for invalid commands
            outputArea.innerHTML = `INVALID COMMAND: ${command}`;
    }
}

// Expose the executeCommand function to the global scope
window.executeCommand = executeCommand;
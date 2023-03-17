// import dotenv from 'dotenv';

// dotenv.config();

// TODO: NEED TO HANDLE THIS STUFF ON THE BACKEND
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Say this is a test",
//     temperature: 0,
//     max_tokens: 7,
// });

console.log("new changes v6"); // testing

// Get all the text areas and content editable divs on the page that the user can see
const divsAndTextAreas = document.querySelectorAll('textarea:not([style*="display:none"]):not([style*="display: none"]), [contenteditable="true"]:not([style*="display:none"]):not([style*="display: none"])');

// Loop through each textarea and div
divsAndTextAreas.forEach(elmnt => {
    // Create a new button element
    const button = document.createElement('button');
    button.textContent = 'Generate';
    button.setAttribute('type', 'button'); // prevent default: type=submit

    // Style the button as needed
    button.style.position = 'absolute';
    button.style.bottom = '5px';
    button.style.right = '5px';

    // Insert the button inside the elmnt
    elmnt.parentNode.style.position = 'relative';
    elmnt.parentNode.appendChild(button);

    // Add an event listener to the button to log the content of the elmnt
    button.addEventListener('click', () => {

        // TODO: handle prompt generation
        // const label = document.querySelector(`label[for="${textarea.id}"]`);

        // // there is an associated label
        // if (label != null) {

        // }
        // // no associated label
        // else {

        // }

        const test_api_return = "This is a test return from our api";

        if (elmnt.tagName === 'TEXTAREA') {
            elmnt.value = test_api_return;

        } else if (elmnt.tagName === 'DIV') {
            elmnt.innerHTML = test_api_return;
        }

        console.log(elmnt.tagName); // for testing
    });
});
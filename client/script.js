import bot from './assets/bot.svg';
import user from './assets/user.svg';

// target element
const form = document.querySelector('form'); // form is targeted by the tag because there is only one form in the page
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

//Loader function
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    // Update the load indicator
    element.textContent += '.';

    // Reset the load indicator when it reaches 3 dots
    if (element.textContent.length > 3) {
      element.textContent = '';
    }
  }, 300);
}


//Typing function
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}


// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;

}

// Chat stripe
function chatStripe(isAi, value, uniqueId) {
  return (

    `
    <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
            <div class="profile">
                <img 
                  src=${isAi ? bot : user} 
                  alt="${isAi ? 'bot' : 'user'}" 
                />
            </div>
            <div class="message" id=${uniqueId}>${value}</div>
        </div>
    </div>
`
  )
}


// --- DOM ელემენტები ---
const header = document.getElementById('main-header');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const textInput = document.getElementById('text-input');
const wordOutput = document.getElementById('word-output');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const wpmInput = document.getElementById('wpm');
const fetchBtn = document.getElementById('fetch-text-btn');


// --- Global Variables ---
let words = [];
let currentIndex = 0;
let intervalId = null;
let isReading = false;

// --- 1. Sticky Header Logic ---
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

// --- 2. "ბურგერ მენიუ" ---
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// --- 3. Fetch API Logic (ინგლისურენოვანი ტესქტი) ---
fetchBtn.addEventListener('click', async () => {
    try {
        fetchBtn.innerText = "Generating English text...";
        textInput.value = "Fetching data...";

        // NEW API: DummyJSON აბრუნებს ინგლისურენოვან ტექსტს
        const response = await fetch('https://dummyjson.com/posts?limit=3');
        const data = await response.json();
        

        // რადგან API აბრუნებს ობიექტს { posts: [...] }, ჩვენ map-ს ვაკეთებთ data.posts-ზე.
        const longText = data.posts.map(post => post.body).join(' ');
        
        textInput.value = longText;
        fetchBtn.innerText = "Load Long Sample";
    } catch (error) {
        console.error('Error:', error);
        textInput.value = "Error loading text. Please check connection.";
        fetchBtn.innerText = "Try Again";
    }
});

// --- 4. Focal Point Logic (Middle Letter) ---
function formatWord(word) {
    if (!word) return "";
    
    // Find middle index
    const centerIndex = Math.floor((word.length - 1) / 2);

    const start = word.slice(0, centerIndex);
    const letter = word.slice(centerIndex, centerIndex + 1); 
    const end = word.slice(centerIndex + 1);

    return `${start}<span class="highlight">${letter}</span>${end}`;
}

// --- 5. RSVP Player Logic ---
function startReading() {
    const text = textInput.value.trim();
    if (!text) {
        alert("Please enter text first.");
        return;
    }

    words = text.split(/\s+/);
    currentIndex = 0;
    
    const wpm = parseInt(wpmInput.value) || 300;
    const delay = 60000 / wpm; 

    isReading = true;
    updateUIState(true);

    if(intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        if (currentIndex >= words.length) {
            stopReading();
            return;
        }
        wordOutput.innerHTML = formatWord(words[currentIndex]);
        currentIndex++;
    }, delay);
}

function stopReading() {
    clearInterval(intervalId);
    intervalId = null;
    isReading = false;
    updateUIState(false);
    wordOutput.innerHTML = "Done";
}

function updateUIState(active) {
    startBtn.disabled = active;
    stopBtn.disabled = !active;
    textInput.disabled = active;
    wpmInput.disabled = active;
}


// Event Listeners
startBtn.addEventListener('click', startReading);
stopBtn.addEventListener('click', stopReading);
textInput.addEventListener('input', () => { if(isReading) stopReading(); });
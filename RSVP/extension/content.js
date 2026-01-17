// content.js

console.log("FocusRead Extension: Loaded and starting...");

function applyFocusReading() {
    // გულისხმობს მხოლოდ, პარაგრაფებს, სათაურებსა და სიების ელემენტებს
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, li');

    if (textElements.length === 0) {
        console.log("FocusRead: No text elements found on this page.");
        return;
    }

    textElements.forEach(element => {
        // აიგნორებს ელემენტებს, რომელთა ტესტიც დამალულია ან არის პატარა
        if (element.innerText.trim().length === 0) return;

        
        
        const words = element.innerText.split(' ');

        const newHTML = words.map(word => {
            // აიგნორებს ერთ სიმბოლიან სიტყვებს მაგალითად: "I", "a" და ა.შ.
            if (word.length < 1) return word;
            
            // 1. ფორმულა რომელიც არკვევს შუა ასოს პოზიციას
            // Formula: (Length - 1) / 2, rounded down
            const centerIndex = Math.floor((word.length - 1) / 2);

            // 2. სიტყვის გაყოფა სამ ნაწილად
            const start = word.slice(0, centerIndex);
            const letter = word.slice(centerIndex, centerIndex + 1); // The specific letter
            const end = word.slice(centerIndex + 1);

            // 3. წითელი ფერით გამოყოფა შუა ასოს
            // inline style გამოყენებულია რათა არ მოხდეს CSS-ის შეჯახება
            return `${start}<span style="color: red !important; font-weight: bold !important;">${letter}</span>${end}`;
        }).join(' ');

        element.innerHTML = newHTML;
    });

    console.log("FocusRead: Text highlighted successfully!");
}

// Run
applyFocusReading();

// 2 წამის შემდეგ გაშვება რათა გვერდის ელემენტები ბოლომდე ჩაიტვირთოს
setTimeout(applyFocusReading, 2000);
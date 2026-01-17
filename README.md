# FocusRead | Speed Reading Trainer

**FocusRead** is a web application designed to train users in speed reading using the **RSVP (Rapid Serial Visual Presentation)** method. By eliminating the need for eye movement, users can significantly increase their reading speed and retention.

## 🚀 How It Works

The application creates a "Stream" of text where words appear one by one in the exact same position.

### What are "Focal Points"?
The core technology behind this project is the highlighting of the **Optical Optimal Recognition Point (OORP)**.

*   **The Problem:** In normal reading, your eyes perform small jerky movements called "saccades" to find the focus point of each word. This wastes time and fatigues the eyes.
*   **The Solution:** This app calculates the mathematical center of every word and highlights it in **Red**. By staring at this specific "Focal Point," the brain recognizes the word instantly without the eye needing to move left or right.

## ✨ Features

*   **RSVP Player:** Renders text word-by-word with the red focal point highlighted.
*   **Adjustable Speed:** Users can set their own Words Per Minute (WPM).
*   **Fetch API Integration:** Fetches real English articles dynamically to practice with.
*   **Responsive Design:** Fully functional on Desktop (1440px) and Mobile (420px).
*   **Sticky Header & Burger Menu:** Smooth navigation experience.
*   **Chrome Extension:** Includes a downloadable extension prototype to apply this logic to any website.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure.
*   **CSS3:** Custom variables, Flexbox/Grid, Keyframe animations.
*   **JavaScript (ES6):** DOM manipulation, Async/Await (Fetch API), Math logic for string slicing.

---
*Created for the Final Exam Project (2026).*

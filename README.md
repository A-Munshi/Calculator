# Calculator Web App

A fully functional, browser-based calculator built with HTML5, CSS3, and JavaScript. Designed to replicate the look and feel of a physical calculator — complete with a plastic-textured body, digital display font, solar panel graphic, and smooth button animations. Deployed on GitHub Pages.

🔗 **Live Demo:** [a-munshi.github.io/Calculator](https://a-munshi.github.io/Calculator/)

---

## Preview

<img width="2879" height="1554" alt="Screenshot 2024-07-12 132452" src="https://github.com/user-attachments/assets/d57f9aa3-122c-4d58-910e-e4cf29832fbd" />

---

## Features

### Functionality
- **Arithmetic operations:** Addition, Subtraction, Multiplication, Division
- **Extra operations:** Square root (√), Percentage (%), Toggle positive/negative (±)
- **Decimal support** with single-decimal-per-number guard
- **Chained calculations** — performing a new operation before pressing `=` correctly chains results
- **Error handling** — division by zero and square root of a negative number display `Error` rather than `Infinity` or `NaN`
- **Keyboard input** — full keyboard support: digits, `+`, `-`, `*`, `/`, `.`, `%`, `Enter` (equals), `Backspace` (clear)

### Design & Animation
- **Sequential load animation** — logo slides in first, then buttons animate in row-by-row with staggered delays
- **Operator highlight** — the active operator button stays visually highlighted during a calculation
- **Button press feedback** — buttons animate downward on click/keypress for a tactile feel
- **Digital display font** — custom `digital-7` font loaded via `@font-face` for an authentic LCD look
- **Plastic texture** — CSS `background-image` on the calculator body replicates physical material
- **Solar panel graphic** — decorative element matching real calculator aesthetics

### Accessibility
- `role="application"` and `aria-label` on the calculator container
- `aria-live="polite"` and `aria-atomic="true"` on the display — screen readers announce results after each calculation
- `aria-label` on every button, including icon-only buttons (operators, decimal, equals) — no button announces as just "button"
- `aria-hidden="true"` on all decorative Font Awesome icons to prevent duplicate announcements
- Descriptive `aria-label` updates on the display for error states

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Grid, custom font, texture background) |
| Behaviour | Vanilla JavaScript (ES6+, event-driven state machine) |
| Icons | Font Awesome 6 |
| Hosting | GitHub Pages |

---

## Project Structure

```
Calculator/
├── index.html                # Calculator markup with full ARIA attributes
├── styles.css                # Layout (CSS Grid), animations, button styles
├── script.js                 # State machine: digits, operators, chaining, error handling
├── Digital7-rg1mL.ttf        # LCD display font
└── images/
    ├── Logo2.png             # Personal logo (top-left of calculator)
    ├── Plastic Texture.jpg   # Body background texture
    └── Solar Panel.jpg       # Decorative solar panel graphic
```

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `0`–`9` | Digit input |
| `+` `-` `*` `/` | Arithmetic operators |
| `%` | Percentage |
| `.` | Decimal point |
| `Enter` | Equals (calculate result) |
| `Backspace` | All Clear |

---

## Running Locally

No build tools required.

```bash
git clone https://github.com/A-Munshi/Calculator.git
cd Calculator
# Open index.html in any browser
open index.html
```

---

## Author

**Anuvab Munshi**
[LinkedIn](https://linkedin.com/in/anuvab-munshi) · [GitHub](https://github.com/A-Munshi)

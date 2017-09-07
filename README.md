# Interactive UI Components

## Context
In order to become a competent front-end developer, it is a good idea to build common U.I. components. For this lab, you will build two components:
1) user interface tabs that reveal content
2) simple form validation for a simple job application.  

---

## Objectives
- Create the following interactive U.I. Components. You must create both the styles

### Learning Objectives
After completing this assignment you should be able to
- Use javascript to respond to 'click' events and form 'submit' events.
- Use javascript to manipulate elements on the DOM.
- Use programming logic inside your event-handlers to give accurate user feedback.

### Performance Objectives
- Reasonably good design.
- You should use SCSS.
- You should use vanilla javascript for all event listeners and DOM manipulations


### Deliverables
- an `index.html` file with links to 2 pages:
  - `01-ui-tabs.html`
  - `02-form-validation.html`
- your `01-ui-tabs.html` should link to `ui-tabs.js` in a `<script>` tag
- your `02-form-validation.html` should link to a `form-validation.js` in a `<script>` tag
- a `main.scss` file in a `scss` directory with your styles that compiles to a `style.css` file inside a `css` directory



---

## Mockups

### UI Tabs
![ui tabs](mockups/lab-ui-tabs-demo.gif)


### Job Form Validation
![form validation](mockups/lab-job-application-form-validation.png)

---

## Additional Instructions

#### Setup
1. Use the `gen-scss-project` script to create the files and folders for the project.
  ```bash
  cd ~/muktek/labs
  gen-scss-project interactive-components-lab
  ```
2. `cd` into `interactive-components-lab`
3. Use the `watch-scss` command in the project's root directory to compile the scss to 'watch' for changes in your `.scss` files and update your `style.css` file.
4. Ensure you the relevant files:
```
- index.html
- 01-ui-tabs.html
     (links to ./js/ui-tabs.js)
- 02-form-validation.html
     (links to ./js/form-validation.js)


+ scss
  - main.scss

+ css
  - styles.css

+ js
  - ui-tabs.js
  - form-validation.js

```

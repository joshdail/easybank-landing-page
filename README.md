# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

A site with this many components required a good amount of testing to make sure it displays correctly at different screen sizes. I had to adjust the flex and grid layouts incrementally at several points to make sure the app scales properly as the screen width scales down.

One of the most difficult parts of the layout was handling the background images in the first section after the header. Even after many attempts I wasn't able to get the pictures to display exactly as they appear in the screenshot. The main issue seems to be that the graphics (if not modified) flow off the page. Relative positioning would throw off the containing div, but absolute positioning would cause horizontal scrolling issues even if scrolling was turned off. I finally came across a solution to completely prevent horizontal scrolling:

/* Disable horizontal scrolling */

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

/* Disable horizontal scrolling on mobile */

body {
  position: relative;
}

The overflow-x will get rid of the horizontal scroll bar on desktops but does not stop horizontal scrolling on mobile. Setting the body to position: relative gets rid of all horizontal scrolling.

### Continued development

Continuing to get a better handle on page layout, such as with background images and CSS Grid. Also, learning how to integrate CSS and page design with a framework like React or Vue where the page state is being updated, or where data is being fetched from a server to be displayed on screen. For example, if the data for the blog posts in this project had come from a server rather than being hard-coded values.

### Useful resources

- [A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/) - I used this, with a few modifications of my own, to unset the default browser styling. Resetting the CSS makes it much easier to avoid unknowns interfering with my CSS rules
- [CSS Tricks](https://css-tricks.com/) - I constantly consult this site for Flexbox, Grid, and other CSS topics.
- [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp) - I used this codepen tool to create CSS filters for the SVG hover states.

## Author

- Github - [joshdail](https://github.com/joshdail)
- Frontend Mentor - [@joshdail](https://www.frontendmentor.io/profile/joshdail)

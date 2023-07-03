
# Frontend Mentor - Interactive rating component solution
# ratingcardd

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot9.png)


### Links

- Solution URL: [solution URL](https://github.com/lamba01/ratingcardd)
- Live Site URL: [ live site URL](https://myratingcard.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript



### What I learned


```js
function rating(sender) {
        let x = sender.value;
    localStorage.setItem("value", x)
}
let y = document.getElementById("selection");
y.innerText = localStorage.getItem("value");
```


### Continued development

I will get to use local storage to oass data more in the future.

### Useful resources


## Author

- Frontend Mentor - [@lamba01](https://www.frontendmentor.io/profile/lamba01)
- Twitter - [@lambacodes](https://www.twitter.com/lambacodes)



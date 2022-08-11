# DrumKit

![Drum Kit][P]

Drum kit allows you to play basic drums and cymbals sounds either by clicking on virtual keys or pressing the keys on the keyboard

The goal of this project is to explore more about responsiveness, event listeners (adding & handling multiple event listeners on single element), audio integration, animations, color gradients & SEO meta tags

#### In this project following things are used
* ```getElementById``` and ```querySelector``` to select and manipulate DOM elements
* ```background-image``` & ```linear-gradient``` to create gradient background
* ```Audio``` webAPI for playing audio
* Custom font [Arvo](https://fonts.google.com/specimen/Arvo)
* Primary ```meta``` tags such as ```author```, ```title``` & ```description```
* Facebook's ```meta``` tags such as```og:type```, ```og:url```, ```og:title```, ```og:description``` & ```og:image```
* Twitter's ```meta``` tags such as ```twitter:url```, ```twitter:title```, ```twitter:description``` & ```twitter:image```

### Challenges Faced
Unable to play audio despite using correct API from documentation

### Solutions To Challenges
Understanding browswer security and modifying code accordingly to fulfill browser's requirements

### Key Takeaway
* To target alphabet keys use ```keypress``` rather than ```keydown``` 
* Browser security & updates play a crucial role in the development, when things just don't work and error messages don't make any sense, read broswer update logs



[P]: /assets/Drum%20Kit.png
 # x-ray

A simple HTML debugger, executable by bookmark! X-ray, a sub project of [ghost.css](https://gist.github.com/wernull/e9456b7aba5a3f9f91a6#file-ghost-css), enables you to see the space taken up by each individual element. This is extremely useful to visually see the HTML structure of a website and identify the rogue element that is causing unexpected rendering. 

## Demonstration:
![alt text](http://i.imgur.com/ZycRj7m.gif "x-ray demonstration")

The project makes use of the styles from ghost.css, which is what enables you to quickly scan the page for unexpected styling. X-Ray takes Ghost and makes it toggleable by bookmark. There is no longer need to refresh the page (or manually remove the style). 

## Usage: 
*__Note:__ this is the only page where the toggle will __not function as expected__, as the string matcher will match the code below, causing elements to be incorrectly removed! Try it on all your other tabs, and you shouldn't experience any problems!*

Grab the code below (```x-ray.js```):
```javascript
javascript: ( function () { const xray = document.createElement('style'); xray.innerHTML = "*{background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;}"; const xraysInPage = [...document.body.getElementsByTagName("style")].filter(style => style.innerHTML === xray.innerHTML); if(xraysInPage.length > 0) { xraysInPage.forEach(style => document.body.removeChild(style)); } else { document.body.appendChild(xray) } } )();
``` 

Now drag it onto your bookmarks, or create a bookmark and paste the code in the URL/location field. Enjoy!

![alt text](http://i.imgur.com/o9dhThH.gif "x-ray configuration")

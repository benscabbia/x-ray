 # x-ray

A simple HTML debugger, executable by bookmark! X-ray, a sub project of [ghost.css](https://gist.github.com/wernull/e9456b7aba5a3f9f91a6#file-ghost-css), enables you to see the space taken up by each individual element. This is extremely useful to visually see the HTML structure of a website and identify the rogue element that is causing unexpected rendering. 

For a live demo, head over to [my blog](https://www.benjaminscabbia.co.uk/blog/programming/x-ray/). 

The project makes use of the styles from ghost.css, which is what enables you to quickly scan the page for unexpected styling. X-Ray takes Ghost and makes it toggleable by bookmark. There is no longer need to refresh the page (or manually remove the style). 

## Usage: 

Copy the style below:
```javascript
javascript: ( function () { var style = "<style>*{background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;}</style>"; var elements = document.body.getElementsByTagName("*"); var items = []; for (var i = 0; i < elements.length; i++) { if (elements[i].innerHTML.indexOf("background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;") != -1) { items.push(elements[i]); } } if (items.length > 0) { for (var i = 0; i < items.length; i++) { items[i].innerHTML = ""; } } else { document.body.innerHTML += style; } } )();
``` 

Now create a bookmark, and paste the code in the URL/location field. Enjoy!

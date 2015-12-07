# 2DV607
RIA-development with JavaScript

```
git clone https://github.com/mn22nw/2DV607.git
npm install
npm start
open http://localhost:3000
```
**Description**  
This the beginning of my favovid app.    [VIEW DEMO](http://mn22nw.github.io/2DV607/dist/)  
It's a bit messy at the moment, with some code and modules that wont be there later, but I thought I could put it up anyways...

**Whats up next:**  

* Fix navigation (the current menu-link should not be clickable)
* I'm planning on connecting to firebase and get youtubeIds from there instead of json
* Implement log in 
* Use the youtube api instead of just adding iframes. 
* Figure out how to make use of Redux in a good way.

**Problems**  
I don't know how to do with the index.html file when building ...the path to bundle.js becomes wrong if I copy the index file to the dist folder...and if I keep the index file where it is, the images gets the wrong path etc. Any help/suggestions would be appreciated. 

built on top of the [https://github.com/gaearon/react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)



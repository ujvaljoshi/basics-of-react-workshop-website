---
path: "/parcel"
title: "Parcel"
section: "React Setup & JSX"
description: "The second page"
order: "4B"
icon: "book"
---

[Parcel][parcel] is a relatively new bundler for JavaScript projects. Webpack is a fantastic piece of technology and you should definitely consider using it for your large applications; it's been around a long time and has a lot of support.

That being said, Parcel is an amazing tool with zero-config. It works with everything we want to do out of the box. Since this is a class on React and not build processes, this allows us to focus more on React. Let's go see what it can do for us.

Parcel is going to accept an entry point, crawl through all of its dependencies, and output a single, complete file with all of our code in it. This means we can have large applications with many files and many dependencies. It would be an unmanageable mess. Already our React app has two components in one file: App and Match. It'd be better if these were in separate files so it'd be easier to keep track of what was where. This is where Parcel can help us.

Install Parcel by doing `npm install -D parcel`.

Now inside of your `package.json` put:

```json
"scripts" {
  "dev": "parcel src/index.html"
}
```

Now open http://localhost:1234. You should see your site come up. The difference here is now it's being run through Parcel which means we can leverage all the features that Parcel allows us which we will explore shortly.

So how does it work? We gave the entry point, which is index.html. It then reads that index.html file and finds its dependencies, which are the two React files and the one App.js file that we linked to. It's smart enough to detect that those two React files are remote so it doesn't do anything with those, but it sees that App.js is local and so it reads it and compiles its dependencies. Right now it has no dependencies so let's fix that.

First let's fix the React and ReactDOM dependencies. Right now these are coming from unpkg.com. Unpkg isn't meant to serve production traffic, nor do we want the burden of loading _all_ of our future dependencies this way. Believe me, it would get messy quickly and we'd have to make a million requests to get all of them by the end (we'll install more later as we go.) Instead, it'd be better if we could pull our dependencies down from npm and include it in our bundle. Let's do that now.

Run `npm install react react-dom`. This will pull React and ReactDOM down from npm and put it in your node_modules directory. Now instead of loading them from unpkg, we can tell Parcel to include them in your main bundle. Let's do that now.

Delete the two unpkg script tags in index.html

Add to the top of `App.js`.

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

Refresh the page and it still works! Now our React and ReactDOM is loading directly from our bundle instead of separate JavaScript files! Let's take this a step further. Create a new file called `Match.js` and put this in there:

```javascript
import React from "react";

const Match = props => {
  return React.createElement("div", {}, [
    React.createElement("p", {}, props.time),
    React.createElement("p", {}, props.home),
    React.createElement("p", {}, props.away),
    React.createElement("p", {}, props.win),
    React.createElement("p", {}, props.draw),
    React.createElement("p", {}, props.loss)
  ]);
};

export default Match;
```

Go to App.js

```javascript
// at the top, under React imports
import Match from "./Match";
```

Load the page again. Still works! Now we can separate components into separate files. Parcel does more than just this but we'll get to that in future sections.

&nbsp;

## Alternatives

- [Webpack][webpack]
- [Browserify][browserify]

[browserify]: http://browserify.org/
[webpack]: https://webpack.js.org/
[parcel]: https://parceljs.org/

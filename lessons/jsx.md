---
path: "/jsx"
title: "JSX"
section: "React Setup & JSX"
description: "The second page"
order: "5A"
icon: "book"
---

So far we've been writing React without JSX, something that I don't know anyone that actually does in production. _Everyone_ uses JSX. I show you this way so what JSX is actually doing is demystified to you. It doesn't do hardly anything. It just makes your code a bit more readable.

If I write `React.createElement("h1", { id: "main-title" }, "My Website");`, what am I actually trying to have rendered out? `<h1 id="main-title">My Website</h1>`, right? What JSX tries to do is to shortcut this translation layer in your brain so you can just write what you mean. Let's convert Match.js to using JSX. It will look like this:

```javascript
import React from "react";

const Match = props => {
  return (
    <div className="match">
      <div className="time">
        <p>{props.time}</p>
      </div>

      <div className="teams">
        <p>{props.home}</p>
        <p>{props.away}</p>
      </div>

      <div className="odds">
        <p>{props.win}</p>
        <p>{props.draw}</p>
        <p>{props.loss}</p>
      </div>
    </div>
  );
};

export default Match;
```

I don't know about you, but I find this far more readable. And if it feels uncomfortable to you to introduce HTML into your JavaScript, I invite you to give it a shot until the end of the workshop. By then it should feel a bit more comfortable. And you can always go back to the old way.

However, now you know _what_ JSX is doing for you. It's just translating those HTML tags into `React.createElement` calls. _That's it._ Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

Notice the strange `{props.home}` syntax: this is how you output JavaScript expressions in JSX. An expression is anything that can be the right side of an assignment operator in JavaScript, e.g. `const x = <anything that can go here>`. If you take away the `{}` it will literally output `props.home` to the DOM.

ESLint is currently failing. We'll fix it at the end.

Notice you still have to import React despite React not being explicitly used. Remember that JSX is compiled to `React.createElement` calls. Anywhere you use JSX, you need to import React.

So now JSX is demystified a bit, let's go convert App.js.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Match from "./Match";

const App = () => {
  return (
    <div>
      <h1>React Workshop!</h1>
      <div className="container">
        <div className="matchlist">
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

Notice we have Match as a component. Notice that the `M` in `Match` is capitalized. It _must_ be. If you make it lowercase, it will try to have `Match` as a web component and not a React component.

We now pass props down as we add attributes to an HTML tag. Pretty cool.

## ESLint + React

We need to give ESLint a hand to get it to recognize React and not yell about React not being used. Right now it thinks we're importing React and not using because it doesn't know what to do with React. Let's help it.

Run this: `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

Update your .eslintrc.json to:

```javascript
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

This is a little more complicated config but this is what I use in my personal projects and what I'd recommend to you.

This particular configuration has a lot of rules to help you quickly catch common bugs but otherwise leaves you to write code how you want.

- The import plugin helps ESLint catch commons bugs around imports, exports, and modules in general
- jsx-a11y catches many bugs around accessibility that can accidentally arise using React, like not having an `alt` attribute on an `img` tag.
- react is mostly common React things, like making sure you import React anywhere you use React.
- babel-lint allows ESLint to use the same transpiling library, Babel, that Parcel uses under the hood. Without it, ESLint can't understand JSX.
- `eslint-plugin-react` now requires you to inform of it what version of React you're using. We're telling it here to look at the package.json to figure it out.

&nbsp;

&nbsp;

## 🌳 `6446b0693ad01dc3ac4cb8dfb766af6b0992a67d`

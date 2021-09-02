---
path: "/class-components"
title: "Class Components"
section: "Components, Hooks & Effects"
description: "The second page"
order: "6A"
icon: "book"
---

Now its time to refactor application. Lets create new file called `MatchList.js` and add this from `App.js`. `MatchList.js` should Looks like this.

```js
import React from "react";
import Match from "./Match";
import matches from "./../matches.json";

class MatchList extends React.Component {
  render() {
    const matchList = matches.data.map((match, id) => {
      return (
        <li key={id}>
          <Match
            time={match.time}
            home={match.home}
            away={match.away}
            win={match.odds.win}
            loss={match.odds.loss}
            draw={match.odds.draw}
          />
        </li>
      );
    });
    return (
      <div className="matchlist">
        <ul>
          <h3>Match List</h3>
          {matchList}
        </ul>
      </div>
    );
  }
}

export default MatchList;
```

We have used `class` keyword to create a component for first time. There are two ways to create react components.

- Functional Components
- Class Components

A functional component is basically a JavaScript function which returns a React element. Its accepts props as argument and returns valid JSX

Class Components are more complex than functional components including constructors, life-cycle methods, render() function and state (data) management. Class components are ES6 classes.

There are multiple lifecyle methods in react.

You can find more information [here](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

After removing code from `App.js`, it looks much cleaner. And it should looks like this.

```js
import React from "react";
import ReactDOM from "react-dom";
import MatchList from "./MatchList";

const App = () => {
  return (
    <div>
      <h1>React Workshop!</h1>
      <div className="container">
        <MatchList />
      </div>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

### Refactoring

Now for `Match` component, we would need those odds values as button so we can convert those `p` tags into `button` and add relevent class.

```js
<div className="odds">
  <button className="win">{props.win}</button>
  <button className="draw">{props.draw}</button>
  <button className="loss">{props.loss}</button>
</div>
```

## 🌳 `d7787a0733b808f08b0f0c98cfb017a743a3895b`

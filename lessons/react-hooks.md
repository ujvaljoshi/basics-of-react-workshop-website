---
path: "/hooks"
title: "React Hooks"
section: "Components, Hooks & Effects"
description: "The second page"
order: "7A"
icon: "book"
---

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Before understanding hooks lets do a example where we are using `state` in class components. Then we will convert class component into function component.

Create a new file called `BetSlip.js`. And add following code.

```js
import React from "react";

class BetSlip extends React.Component {
  constructor() {
    super();
    this.state = { amount: 0 };
  }

  handleAmount(value) {
    this.setState({
      amount: value
    });
  }

  render() {
    return (
      <div className="betslip">
        <h3>BetSlip</h3>
        <div className="slip">
          <form>
            <label htmlFor="amount">
              <input
                id="amount"
                placeholder="amount"
                value={this.state.amount}
                onChange={e => this.handleAmount(e.target.value)}
              />
            </label>
            <p>{this.state.amount}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default BetSlip;
```

Now import `BetSlip` component into `App.js`.

```js
import BetSlip from "./BetSlip";

<div className="container">
  <MatchList />
  <BetSlip />
</div>;
```

Lets convert `BetSlip` component into functional component so we can use React Hooks. Now it should looks like this.

```js
import React, { useState } from "react";

const BetSlip = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="betslip">
      <h3>BetSlip</h3>
      <div className="slip">
        <form>
          <label htmlFor="amount">
            <input
              id="amount"
              placeholder="amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </label>
          <p>{amount}</p>
        </form>
      </div>
    </div>
  );
};

export default BetSlip;
```

- Here `amount` works as state and `setAmount` works as functions which changes value of that state.
- `useState()` is hook which allows this functionality and we pass initial value as parameter into it.

Now we have all components on screen but we still need to connect these odds buttons to `BetSlip` component.

To achieve it we will create global state into `App.js` and pass those values into `Match` and `BetSlip` components.

Add this line to `App.js` to create global state for application.

```js
import React, { useState } from "react";

const [bet, setBet] = useState(0);
```

Now we will pass these values as props into `MatchList` and `BetSlip` component.

```js
<MatchList setBet={setBet} />
<BetSlip betValue={bet} />
```

Lets handle this props in `MatchList` and `Match` components. So whenever we click any odds it would update global state in the Application. Which we can pass into `BetSlip` component.

First start with `MatchList` component. Here we are passing `setBet` function as prop so we will need to handle that function into `MatchList` and then pass `setBet` function into `Match` component.

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
            setBet={this.props.setBet}
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

Next step would be to add eventhandler for buttons into `Match` component.

```js
<div className="odds">
  <button className="win" onClick={() => props.setBet(props.win)}>
    {props.win}
  </button>
  <button className="draw" onClick={() => props.setBet(props.draw)}>
    {props.draw}
  </button>
  <button className="loss" onClick={() => props.setBet(props.loss)}>
    {props.loss}
  </button>
</div>
```

Lets check if its working or not using console in `App` component.

## 🌳 `95da20aa0e8793115e3650116a78a12913b092b7`

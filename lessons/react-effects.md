---
path: "/effects"
title: "React Effects"
section: "Components, Hooks & Effects"
description: "The second page"
order: "8A"
icon: "book"
---

Lets update `BetSlip.js` to handle bet from `App` component.

```js
import React, { useState, useEffect } from "react";

const BetSlip = props => {
  const [win, setWin] = useState(win * amount);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setWin(Number(props.betValue) * Number(amount));
  }, [props.betValue, amount]);

  return (
    <div className="betslip">
      <h3>BetSlip</h3>
      <div className="slip">
        <p>Odds @{props.betValue}</p>
        <form>
          <label htmlFor="amount">
            <input
              id="amount"
              placeholder="amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </label>
        </form>
        <p>Expeted winning @{parseInt(win)}</p>
      </div>
    </div>
  );
};

export default BetSlip;
```

- Here first we are adding this code `const [win, setWin] = useState(win * amount);` which will determine what would be winning amount for user.

- Then We are adding markup for odds and winning, which would display to user.

```js
useEffect(() => {
  setWin(Number(props.betValue) * Number(amount));
}, [props.betValue, amount]);
```

- `useEffect()` will take two parameters. Its hook for updating values based on some preconditions. Here it will update `win` based on betValue and amount. Whenever user update those value `win` value will also update.

## 🌳 `2a178a2289cac4348eb59e1a981d567787b581c3`

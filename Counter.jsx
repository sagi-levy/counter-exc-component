import { useState } from "react";

export function Counter() {
  // const min = Number.MIN_SAFE_INTEGER;
  // const max = Number.MAX_SAFE_INTEGER;
  const max = 10;
  const min = -10;
  const [startingNumber, setCounter] = useState(0);

  const reset = () => setCounter((startingNumber) => (startingNumber = 0));
  // setCounter((startingNumberPlus) => (startingNumberPlus = 0));
  const plus1 = () => setCounter((startingNumber) => startingNumber + 1);
  const minus1 = () => setCounter((startingNumber) => startingNumber - 1);

  return (
    <div>
      <p>
        2. create a component called "counter" 2.1 counter should receive the
        following props - min = Number.MIN_SAFE_INTEGER - max =
        Number.MAX_SAFE_INTEGER - initial = 0 - steps = 1 2.3 the + button will
        add steps to current counter's state and will be disabled at max 2.4 the
        - button will substract steps from current counter's state and will be
        disabled at min BONUS includes new stuff - create a component with
        inputs for min, max, initial, steps and a button which with each click
        will add a new counter based on the configurations - receive array of
        objects
      </p>
      <div id="counter-div">
        <button
          disabled={startingNumber > max}
          className="btn btn-primary"
          onClick={plus1}
        >
          +
        </button>
        <button
          disabled={startingNumber < min}
          className="btn btn-danger"
          onClick={minus1}
        >
          -
        </button>
        <h3>{startingNumber}</h3>
        <button onClick={reset} className="btn btn-dark">
          reset number
        </button>
      </div>
    </div>
  );
}

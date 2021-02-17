import React, { useEffect, memo, useRef, useState } from 'react';
import './App.css';

const Repetitions = memo((props) => {
  const countRef = useRef();
  const { times, count } = props;

  useEffect(() => {
    if (!times) {
      countRef.current.style.color = 'red';
    } else {
      countRef.current.style.color = '';
    }
  },[times])

  return (
    <div className="repetitions">
      <div ref={countRef}>Count: {count}</div>
      {times === 0 && <div>Reset!</div>}
    </div>
  )
})

const initialState = {
  times: 0,
  count: 0
};
const App = function() {
  const [state, setState] = useState(initialState);

  function updateData() {
    const { times, count } = state;
    let nextState = {};
    if( times >= 5 ) {
      nextState = {
        count: count + 1,
        times: 0
      }
    } else {
      nextState = {
        count,
        times: times + 1
      }
    }
    setState(nextState);
  }

  useEffect(() => {
    const interval = setInterval(() => updateData(), 1000);
    return () => clearTimeout(interval);
  })

  console.log('t', state);
  return (
    <div className="App">
      <Repetitions {...state} />
    </div>
  );
}

export default App;

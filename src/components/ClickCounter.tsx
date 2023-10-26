
import HOC from "./HOC";

interface Iprops {
  counter: number;
  incrementCounter: () => void;
  info:string
}

const ClickCounter = ({ counter, incrementCounter,info }: Iprops) => {
  return (
    <div>
      <p>{info}</p>
      <h2>Count : {counter}</h2>
      <button onClick={incrementCounter}>Click</button>
    </div>
  );
};

export default HOC(ClickCounter);

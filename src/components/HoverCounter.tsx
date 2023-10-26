
import HOC from "./HOC";

interface Iprops {
  counter: number;
  incrementCounter: () => void;
  info:string
}

const HoverCounter = ({ counter, incrementCounter,info }: Iprops) => {
  return (
    <div>
      <p>{info}</p>
      <h2>Count : {counter}</h2>

      <button onMouseOver={incrementCounter}>Over</button>
    </div>
  );
};

export default HOC(HoverCounter);

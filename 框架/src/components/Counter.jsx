import useStore from '../store/useStore';

export default function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
import Counter from './components/Counter';
import useStore from './store/useStore';

function App() {
  const { setUser } = useStore();

  return (
    <div>
      <h1>Zustand Framework</h1>
      <Counter />
      <button onClick={() => setUser({ name: 'User', id: 1 })}>
        Set User
      </button>
    </div>
  );
}

export default App;
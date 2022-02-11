import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="app">
      <h2>Dual Component</h2>
      {false && <SimpleInput />}
      <hr />
      <h2>Three Data</h2>
      <BasicForm></BasicForm>
    </div>
  );
}

export default App;

import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import ContextProvider from "./components/context-storage/context-provider";
function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;

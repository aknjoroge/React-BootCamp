import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import ContextProvider from "./components/context-storage/context-provider";
import AdminPage from "./components/admin/admin";
function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Meals />
      </main>
      <section>
        <AdminPage></AdminPage>
      </section>
    </ContextProvider>
  );
}

export default App;

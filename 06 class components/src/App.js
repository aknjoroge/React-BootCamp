import UserFinder from "./components/UserFinder";
import AppContext from "./store/content";
import ErrorBound from "./components/errorBound";
const DUMMY_USERS = [
  { id: "u9", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
function App() {
  return (
    <div>
      <ErrorBound>
        <AppContext.Provider value={{ users: DUMMY_USERS, name: "aq" }}>
          <UserFinder />
        </AppContext.Provider>
      </ErrorBound>
    </div>
  );
}

export default App;

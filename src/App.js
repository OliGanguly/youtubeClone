import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchVideo />
      }
    ]
  }
])

function App() {
  return (
    // provide store to app
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* here components will change according to appRouter */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}


export default App;
/**
 * Head
 * Body
 *   Sidebar
 *     MenuContainer
 *   MainContainer
 *     ButtonList
 *     VideoContainer
 *       VideoCard
 */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ColorPicker from "./components/ColorPicker"
import ToDoList from "./components/ToDoList";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/ColorPicker",
    element: <ColorPicker/>
  },
  {
    path: "/ToDoList",
    element: <ToDoList/>
  }
]);
const App = () => {
  return <RouterProvider router={router}/>
}

export default App
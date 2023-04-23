import "./App.css";

import Firstpart from "./Component/Task/firstpart";
import { useRoutes } from "react-router-dom";
import Summary from "./Component/summary";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Firstpart />,
    },
    { path: "summary", element: <Summary /> },
  ]);
  return <>{element}</>;
}

export default App;

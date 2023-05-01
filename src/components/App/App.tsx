import { useContext } from "react";
import router from "../../routes/routes";
import { RouterProvider } from "react-router-dom";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { onClickToggleButtonTags } from "../../utilities/helper";

function App() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <div onClick={() => onClickToggleButtonTags(dispatch)}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

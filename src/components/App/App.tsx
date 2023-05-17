import { useContext } from "react";
import router from "../../routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { onClickToggleButtonTags } from "../../utilities/helper";

function App() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <div onClick={() => onClickToggleButtonTags(dispatch)}>
      <ToastContainer className="my-2" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

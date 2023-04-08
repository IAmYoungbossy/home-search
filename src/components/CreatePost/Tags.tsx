import { useContext } from "react";
import { StyledTag } from "./StyledCreatePost";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { showTags } from "../../utilities/helper";

export default function Tags() {
  const { state } = useContext(AppContext) as contextProps;
  const {
    tagButton,
    showBudget,
    showLocation,
    showApartment,
    buttonTagsToggle,
  } = showTags(state);

  return (
    <StyledTag>
      {!buttonTagsToggle.dealStatus &&
        state.post.postAsAgent && <div>Deal Open</div>}
      {showBudget && <div>${tagButton.Budget}</div>}
      {showLocation && <div>{tagButton.Location}</div>}
      {showApartment && <div>{tagButton["Apartment Size"]}</div>}
    </StyledTag>
  );
}

import {
  StyledProgressBar,
  StyledUplaodImage,
} from "./StyledCreatePost";
import { useContext } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { uploadFileToStorage } from "../../firebaseCRUD";

export default function UploadImage() {
  const { dispatch } = useContext(
    AppContext
  ) as contextProps;
  const fileTypes = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/jpeg",
  ];

  const uploadImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let file = e.target.files?.item(0);
    if (file && fileTypes.includes(file.type)) {
      uploadFileToStorage({ file, dispatch });
    }
  };
  return (
    <StyledUplaodImage>
      <div>
        <label htmlFor="image">
          <BsFillCameraFill /> <p>Click to upload image</p>
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={uploadImage}
        />
      </div>
      <ProgressBar />
    </StyledUplaodImage>
  );
}

function ProgressBar() {
  const { state } = useContext(AppContext) as contextProps;
  return <StyledProgressBar width={state.uploadProgress} />;
}
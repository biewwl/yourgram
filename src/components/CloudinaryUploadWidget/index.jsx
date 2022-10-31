import { Icon } from "@iconify/react";
import { useEffect } from "react";
import "./styles/CloudinaryUploadWidget.css";

function CloudinaryUploadWidget({ type, setHeader, setAvatar }) {
  const className =
    type === "header"
      ? "_edit_profile_header_button_edit"
      : "_edit_profile_avatar_button_edit";

  useEffect(() => {
    const setup = () => {
      const cloudName = "dr6iruws8"; // replace with your own cloud name
      const uploadPreset = "x9log7ou"; // replace with your own upload preset
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log(
              "Done! Here is the image info: ",
              result.info.secure_url
            );
            if (type === "header") setHeader(result.info.secure_url);
            if (type === "avatar") setAvatar(result.info.secure_url);
            document
              .getElementById("uploadedimage")
              .setAttribute("src", result.info.secure_url);
          }
        }
      );
      const elementWidget =
        type === "header" ? "upload_widget_header" : "upload_widget_avatar";
      document.getElementById(elementWidget).addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    };
    setup();
  }, [setAvatar, setHeader, type]);

  return (
    <button
      id={type === "header" ? "upload_widget_header" : "upload_widget_avatar"}
      className={className}
    >
      <Icon icon="fluent:camera-edit-20-filled" />
    </button>
  );
}

export default CloudinaryUploadWidget;

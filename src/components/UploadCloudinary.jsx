import { Button } from "react-bootstrap";

const UploadCloudinary = ({ onUpload }) => {
  const cloudName = "dzkg4bqdw";
  const uploadPreset = "upload_studiobook";

  const openWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url", "camera"],
        cropping: true, // Enable cropping
        multiple: false, // Tidak mengizinkan multiple upload
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            sourceBg: "#F4F4F5",
            windowBorder: "#90A0B3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555A5F",
            menuIcons: "#555A5F",
            link: "#0078FF",
            action: "#FF620C",
            inProgress: "#0078FF",
            complete: "#20B832",
            error: "#E50914",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        },
      },
      (error, result) => {
        if (error) {
          console.error("Upload Widget Error:", error);
        } else if (result.event === "success") {
          onUpload(result.info.secure_url);
        }
      }
    );
  };

  return (
    <Button size="sm" onClick={openWidget}>
      <i class="fa fa-upload" aria-hidden="true"></i>
      <span>Upload Files</span>
    </Button>
  );
};

export default UploadCloudinary;

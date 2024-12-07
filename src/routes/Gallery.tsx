import { ChangeEvent, useState } from "react";
import { useDropzone } from "react-dropzone";

function ImagePicker() {
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      "image/svg": [".svg"],
      "image/webp": [".webp"],
    },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setSelectedImages((prevImages: any) => [
        ...prevImages,
        ...acceptedFiles.map((file) => URL.createObjectURL(file)),
      ]);
    },
  });

  const handleCapture = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImages([...selectedImages, imageUrl]);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-lg font-semibold">Gallery</h1>
      <div className="flex gap-4 items-center">
        {/* Dropzone for uploading images */}
        <div
          {...getRootProps()}
          className="bg-black w-max p-3 rounded-full text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <img src="icons/multi-image.svg" alt="multi-image" />
          {/* <p>Drag 'n' drop some images here, or click to select</p> */}
        </div>

        {/* Camera capture button */}
        <div className="p-3 rounded-full bg-[#F5F5F5]">
          <label htmlFor="cameraInput">
            <img src="icons/camera.svg" alt="camera" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="cameraInput"
            capture
            onChange={handleCapture}
            style={{ display: "none" }}
          />
        </div>
      </div>
      {/* Display selected images */}
      <div className="flex flex-wrap gap-2">
        {selectedImages.map((imageSrc: any, index: any) => (
          <div key={index} style={imageContainerStyle}>
            <img
              src={imageSrc}
              alt={`Selected ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const imageContainerStyle = {
  width: "150px",
  height: "150px",
  overflow: "hidden",
};

export default ImagePicker;

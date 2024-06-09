import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XMarkIcon, DocumentArrowUpIcon } from "@heroicons/react/24/solid";

function AvatarUploader({ className }) {
  const [image, setImage] = useState(localStorage.getItem("avatar"));

  const onDrop = useCallback((acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataURL = reader.result;
      setImage(imageDataURL);
      localStorage.setItem("avatar", imageDataURL);
    };

    reader.readAsDataURL(imageFile);
  }, []);

  const removeImage = () => {
    setImage(null);
    localStorage.removeItem("avatar");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="text-midnight-black dark:text-pale-yellow">
      {!image ? (
        <div {...getRootProps()} className="">
          <input {...getInputProps()} />
          <p>
            <DocumentArrowUpIcon className="h-8 xxl:h-12 " />
          </p>
        </div>
      ) : (
        <div className="flex items-center">
          <button
            className="text-red-500 mr-2"
            onClick={removeImage}
            title="Remove"
          >
            <XMarkIcon className="h-8 xxl:h-12" />
          </button>
          <img src={image} alt="Uploaded" className={className} />
        </div>
      )}
    </div>
  );
}

export default AvatarUploader;

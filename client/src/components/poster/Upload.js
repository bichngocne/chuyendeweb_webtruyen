import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

const Upload = (props) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  useEffect(() => {
    props.onChange(images);
  }, [images]);
  return (
    <>
      <ImageUploading
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "svg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="block w-full h-auto">
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              aria-describedby="file_input_help"
              id={props.text}
              type="file"
              {...(props.text !== "imgmain" ? {} : { multiple: "multiple" })}
              {...dragProps}
              accept=".jpg, .png, .svg"
              onChange={(event) => {
                setImages(event.target.files);
              }}
            />
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">
              SVG, PNG, JPG (MAX. 800x400px).
            </p>
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default Upload;

import React, { useEffect, useState } from "react";

const Upload = (props) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  useEffect(() => {
    props.onChange(images);
    // console.log(images);
  }, [images]);
  return (
    <>
      <div className="block w-full h-auto">
        <input
          className="block w-full leading-8 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          aria-describedby="file_input_help"
          id={props.text}
          type="file"
          {...(props.text === "imgmain" ? {} : { multiple: "multiple" })}
          accept=".jpg, .png, .svg"
          onChange={(event) => {
            const selectedFiles = Array.from(event.target.files);
            setImages(selectedFiles);
          }}
        />
        <p className="mt-1 text-sm text-gray-500" id="file_input_help">
          SVG, PNG, JPG (MAX. 800x400px).
        </p>
      </div>
    </>
  );
};

export default Upload;

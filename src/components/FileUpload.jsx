import React from "react";
import Dropzone from "react-dropzone";

export default function FileUpload({}) {
  return (
    <div>
      {" "}
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {(
          { getRootProps, getInputProps } //Dropzone 에서 가져온 인자들
        ) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>📷</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

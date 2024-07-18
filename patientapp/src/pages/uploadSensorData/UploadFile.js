// FileUpload.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadFile.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>
          Drag & drop files here, or <span className="browseLink">Browse</span> 
        </p>
      </div>
      <div className="filesContainer">
        {files.map(file => (
          <div key={file.name} className="fileItem">
            <span>{file.name}</span>
            <button className="removeButton" onClick={() => removeFile(file.name)}>X</button>
          </div>
        ))}
      </div>

      <div className="upload-button-container">
        <button className="uploadButton" onClick={() => alert('Files are getting uploaded')}>
        UPLOAD FILES
        </button>
      </div>

      <div className="upload-bottom-bar"></div>
      
    </div>
  );
};

export default FileUpload;

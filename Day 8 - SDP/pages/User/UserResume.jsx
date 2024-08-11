import React, { useState } from 'react';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const handleFileUpload = () => {
    if (file) {
      // Logic to upload the file
      setUploadSuccess(true);
      console.log('File uploaded:', file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Upload Your Resume</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} className='mb-4' />
      <button
        onClick={handleFileUpload}
        className='px-4 py-2 bg-green-500 text-white rounded'
      >
        Upload
      </button>
      {uploadSuccess && (
        <div className='p-4 mt-4 text-sm text-green-700 bg-green-100 rounded'>
          Resume successfully uploaded!
        </div>
      )}
    </div>
  );
};

export default UploadResume;

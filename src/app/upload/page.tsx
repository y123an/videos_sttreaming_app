'use client'

import React, { useState } from "react";
import Axios from "axios";
import { Progress } from "reactstrap";

const page = () => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [showProgressBar, setProgressBarVisibility] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setProgressBarVisibility(true);
    const demo = document.getElementById("demo");
    const bodyFormData = new FormData(demo);
    Axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: bodyFormData,
      baseURL: "http://localhost:4000/upload", 
      onUploadProgress : Progress =>{
        const { total, loaded } = Progress;
        const totalSizeInMB = total / 1000000;
        const loadedSizeInMB = loaded / 1000000;
        const uploadPercentage = (loadedSizeInMB / totalSizeInMB) * 100;
        setUploadPercentage(Number(uploadPercentage.toFixed(2)));
        console.log("total size in MB ==> ", totalSizeInMB);
        console.log("uploaded size in MB ==> ", loadedSizeInMB);
      }
    });
  };

  const handleFormClick = () => {
    setProgressBarVisibility(false);
    setUploadPercentage(0);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} id="demo" className="flex flex-col w-[30%]">
       <label htmlFor="videoTitle">Video Title</label> 
        <input type="text" name="videotitle" />
        <label htmlFor="tambnail">The Tambnail</label>
        <input type="file" name="tambnail"  accept="image/*" id="avatar" />
        <label htmlFor="video">Video</label>
        <input type="file" name="video" id="avatar" />
        <input type="submit" value="Submit" />
      </form>
      {showProgressBar ? (
        <>
          <div className="text-center">
            {(uploadPercentage) !== 100
              ? `Upload percentage - ${uploadPercentage}`
              : "File successfully uploaded"}
          </div>
          <Progress
            animated={(uploadPercentage) !== 100}
            color="success"
            value={uploadPercentage}
          />
        </>
      ) : null}
    </div>
  );
};

export default page;

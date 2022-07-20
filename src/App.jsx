import React from "react";
import { useState } from "react";
import useFileDownloader from "../src/useFileDownloader";
import Card from "./Card";

const files = [
  {
    id: 1,
    name: "Photo 1",
    thumb:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
    file:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
      Math.random(),
    filename: "photo-1.jpg",
    checkedState: false
  },
  {
    id: 2,
    name: "Photo 2",
    thumb:
      "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80 401w",
    file:
      "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=" +
      Math.random(),
    filename: "photo-2.jpg",
    checkedState: false
  },
  {
    id: 3,
    name: "Photo 3",
    thumb:
      "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w",
    file:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
       filename: "video-3.mp4",
    checkedState: true
  },
];

const FileDownloader = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  const [videoArr, setVideoArr] = useState([]);

  const download = (file) => downloadFile(file);

  const downloadAll = (obj) => {
    for(let i=0; i< Object.keys(obj).length;i++){
      obj[i].checkedState&&download(obj[i])}
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>File Downloader with progress bar in react</h2>
          <div className="row mt-3">
            <button onClick={() => downloadAll(files)}>awdsawds</button>
            {files.map((file, idx) => (
              <Card 
                key={idx} 
                id={file.id} 
                file={file}
                videoArr={videoArr}
                setVideoArr={setVideoArr}>
                
              </Card>
              
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;
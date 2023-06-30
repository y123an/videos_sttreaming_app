"use client";

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Image from "next/image";
import Card from '@/components/Card'
import SideNavbar from '@/components/SideNavbar'


const page = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await Axios.get("http://localhost:4000/api/atr");
    setData(JSON.parse(res.data));
    console.log(JSON.parse(res.data));
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="flex mt-5">
      <SideNavbar/>
    <div className="flex gap-10 p-5 flex-wrap">
      {data.map((item) => {
        return (
          <Card
            key={item._id}
            videoTitle={item.videoTitle}
            videoFileName={item.videoFileName}
            tambnailFileName={item.tambnailFileName}
          />
        );
      })}
    </div>
    </div>
  );
};

export default page;

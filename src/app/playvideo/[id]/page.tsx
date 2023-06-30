import VideoPlayer from "@/components/VideoPlayer";

import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <VideoPlayer id={id} />;
};

export default page;

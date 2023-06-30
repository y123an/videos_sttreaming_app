import Axios from "axios";
const VideoPlayer = async ({ id }: { id: string }) => {

  return (
    <video
      src={`http://localhost:4000/api/videos?videoId=${id}`}
      width={800}
      height="auto"
      controls
      autoPlay
      id="video-player"
    />
  );
};

export default VideoPlayer;

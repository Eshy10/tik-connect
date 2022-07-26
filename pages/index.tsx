import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import { BASE_URL } from '../utils';
import VideoCard from "../components/VideoCard";
import NoResult from "../components/NoResult";

interface IProps {
  videos: Video[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video) => <VideoCard key={video._id} post={video} />)
      ) : (
        <NoResult text="No videos found" />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);
  return { props: { videos: data } };
};

export default Home;

import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import { BASE_URL } from "../utils";
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

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  console.log(BASE_URL)

  return {
    props: { videos: response.data },
  };
};

export default Home;

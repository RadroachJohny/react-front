import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from './LoadingDotsIcon';
import Post from './Post';

export default function ProfilePosts() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, {cancelToken: ourRequest.token});
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem. Posts");
      }
    }
    fetchPosts();

    return () => {
      ourRequest.cancel();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon/>;
  return (
    <div className="list-group">
      {posts.map((post) => {
        return <Post noAuthor={true} post={post} key={post._id}/>
      })}
    </div>
  );
}

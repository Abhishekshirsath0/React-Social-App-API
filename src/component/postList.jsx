import Post from "./post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Lodding from "./Lodding";

const PostList = () => {
  const { postList, addPostserver } = useContext(PostListData);
  const [fetching , setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostserver(data.posts);
         setfetching(false);

         
        
      });
       return () => {
        console.log("cleaning of useEffect Hook")
       }
  }, []);

  return (
    <>
    { fetching===true && <Lodding/>}
      { fetching !==true && postList.length === 0&& <WelcomeMessage></WelcomeMessage>}

      <div className="post">
        { fetching !==true && postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;

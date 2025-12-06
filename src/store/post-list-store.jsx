import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPostserver: () => {},
});

const PostListReducer = (currentpostList, action) => {
  let Newpostlist = currentpostList;
  if (action.type === "DELETE_POST") {
    Newpostlist = currentpostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD _SERVER_POSTS_LIST_ITEMS") {
    Newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST_LIST_ITEMS") {
    Newpostlist = [action.payload, ...currentpostList];
  }
  return Newpostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, Title, postbody, tags) => {
    dispatchPostList({
      type: "ADD_POST_LIST_ITEMS",
      payload: {
        id: Date.now().toString(),
        userId: userId,
        title: Title,
        body: postbody,
        tags: tags,
        like: likes,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  const addPostserver = (posts) => {
    dispatchPostList({
      type: "ADD _SERVER_POSTS_LIST_ITEMS",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addPostserver, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

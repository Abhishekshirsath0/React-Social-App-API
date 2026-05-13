import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body position-relative">
         
        <button
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn border-0"
          onClick={() => deletePost(post.id) }
           
        >
          <MdDeleteForever size={15} style={{ paddingRight: "3px" }} />
          <span className="visually-hidden">Delete post</span>
        </button>

        
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {/* Tags */}
        {post.tags?.map((tags, index) => (
          <span className="btn btn-primary post-tags" key={index}>
            {tags}
          </span>
        ))}

         
        <div className="alert alert-success like-element mt-3" role="alert">
          This post has been liked by {post.views} people!!!
        </div>
      </div>
    </div>
    
  );
};

export default Post;

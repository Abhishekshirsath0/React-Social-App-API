import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const Forms = () => {
  const { addPost } = useContext(PostList);

  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const tags = tagsRef.current.value.split(" ");

    

    addPost(userId, title, body, tags);

    // Clear inputs
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label texts-inputs">
          User-ID
        </label>
        <input
          ref={userIdRef}
          type="text"
          className="form-control input"
          id="userId"
          placeholder="Enter user ID"
        />

        <label htmlFor="title" className="form-label texts-inputs">
          Title
        </label>
        <input
          ref={titleRef}
          type="text"
          className="form-control input"
          id="title"
          placeholder="Enter post title"
        />

        <label htmlFor="body" className="form-label texts-inputs">
          Write Your Post Here
        </label>
        <textarea
          ref={bodyRef}
          className="form-control input post-input"
          id="body"
          placeholder="Write something..."
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label texts-inputs">
          Tags
        </label>
        <input
          ref={tagsRef}
          type="text"
          className="form-control input"
          id="tags"
          placeholder="Enter tags separated by spaces"
        />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary submit-button">
        Submit
      </button>
    </form>
  );
};

export default Forms;

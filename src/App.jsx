import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headercomp from "./component/header";
import Slidbar from "./component/sidebar";
import Footer from "./component/footer";
import Forms from "./component/forms";
import PostList from "./component/postList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="main-container">
        <Slidbar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className="content-container">
          <Headercomp />
          {selectedTab === "Home" ? <PostList /> : <Forms />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
 
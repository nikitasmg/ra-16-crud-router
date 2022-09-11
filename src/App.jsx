import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NewPost from "./pages/NewPost.jsx";
import PostDetail from "./pages/PostDetail.jsx";

function App() {

  return (
    <div className="App">
      <Routes>
            <Route path={'/'} exact element={<HomePage/>}/>
            <Route path={'/posts/new'} element={<NewPost/>}/>
            <Route path={'/posts/:id'} element={<PostDetail/>}/>
      </Routes>
    </div>
  )
}

export default App

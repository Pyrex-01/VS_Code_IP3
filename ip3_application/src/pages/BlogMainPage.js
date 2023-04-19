import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../App.css'

function MainPage() {

  const [postList, setPostList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      console.log(data)
      setPostList(data.data)
    });
  }, [])

  const LikePost = (id) => {
    Axios.post(`http://localhost:3001/api/like/${id}`).then((response) => {
      alert("you liked a post")
    })
  }

  return (
    <div>
      <div className="MainPage">
        <br />
        <br />
        <br />
        <h1>Blog Page</h1>
        <div className="PostContainer">
          {postList.length > 0 &&
          postList.map((val, key) => {
            return (
              <div className="Post" >
                <h1 className="post-title" onClick={() => (navigate(`/post/${val.idPosts}`))}>{val.postTitle}</h1>
                <p>{val.postBody.length > 300 ? val.post_text.substring(0, 300) + " ..." : val.postBody}</p>
                <h4>{val.user_name}</h4>
                <button className="like_btn" onClick={(() => LikePost(val.idPosts))}>Like</button>

                <h5>Likes: {val.postLikes}</h5>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainPage

import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Blog.css';
import mainNews from './images/mainNews.png'
import chart from './images/chart.png'
import news from './images/news.png'

function MainPage() {

  const [postList, setPostList] = useState([]);

  let naviagte = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data)
    });
  }, [])

  const LikePost = (id) => {
    Axios.post(`http://localhost:3001/api/like/${id}`).then((response) => {
      alert("you liked a post")
    })
  }
  return (
    <div className="MainPage">
      <div className="PostContainer">
        {postList.map((val, key) => {
          return (
            <div className="Post" >
              <h1 className="post-title" onClick={() => (naviagte(`/post/${val.id}`))}>{val.postTitle}</h1>
              <p>{val.post_text.length > 300 ? val.post_text.substring(0, 300) + " ..." : val.postBody}</p>
              <h4>{val.user_name}</h4>
              <button className="like_btn" onClick={(() => LikePost(val.id))}>Like</button>

              <h5>Likes: {val.likes}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage

import React,{useEffect,useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import Axios from 'axios'
import '../App.css'

export default function Post() {

let {postId} = useParams();
const [post,setPost] = useState({})
let navigate = useNavigate();

useEffect(()=>{
Axios.get(`http://localhost:3001/api/getFromId/${postId}`).then((data)=>{
    console.log(data)
setPost({
        title: data.data[0].postTitle,
         postText: data.data[0].postBody,
         userName: data.data[0].idUser,
         id:data.data[0].idPosts
        });
 });

},[postId]);

const deletePost = (id) => {
    Axios.post(`http://localhost:3001/api/delete/${postId}`, {id: postId}).then(()=>{
        navigate(`/blog`)
    })
}


    return (
        <div className="Post individual">

            <br />
            <br />
            <br />
            <h1 className="post-title">{post.title}</h1>
            <p>{post.postText}</p>
            <button onClick={(() => deletePost(post.id))}>Delete Post</button>
          
      </div>
    )
}

import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import Axios from 'axios'
import '../App.css'

export default function Post() {

let {postId} = useParams();
const [post,setPost] = useState({})

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
    Axios.delete(`http://localhost:3001/api/delete/${postId}`).then((response)=>{
        alert("you deleted a post")
    })
}


    return (
        <div className="Post individual">
        <h1 className="post-title">{post.title}</h1>
          <p>{post.postText}</p>
          <h4>{post.userName}</h4>
          <button onClick={(() => deletePost(post.id))}>X</button>
          
      </div>
    )
}

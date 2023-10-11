import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const getPostMethod = async () => {
    if (slug) {
     await appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }

  useEffect(() => {
    getPostMethod()
  }, [slug, navigate]);

  const deletePost = async () => {
   await appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };



  return(
    <div className="">
       <div className="relative w-full text-center pb-20 bg-secondary ">
     {
      post ? (
        <Container>
        <div className="relative flex flex-wrap pt-[136px] h-full">

          <div className="w-full flex flex-col justify-center items-center mb-4 rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            width={800}
            className="rounded-xl shadow-3xl"
          />
          
            {isAuthor && (
            <div className=" right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="m-3 active:bg-green-300 hover:bg-green-400">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
          
          
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
        </div>
        
      </Container>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <h1 className="font-palanquin text-3xl font-extrabold">Loading....</h1>
        </div>
      )
     } 
    </div>
    </div>
   
  ) 
}

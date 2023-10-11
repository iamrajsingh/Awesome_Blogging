import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const gettingPost = async () => {
   await appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }

  useEffect(() => {
    gettingPost()
  }, []);

  return (
    <div className="w-full text-center bg-secondary h-screen ">
      <Container>
        <div className="flex flex-wrap pt-[136px] h-full">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 max-sm:w-full max-md:w-1/2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;

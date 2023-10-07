import React from "react";
import { Container, PostForm } from "../components";

const AddPost = () => {
  return (
    <div className=" w-full text-center bg-secondary h-[1000px] pt-[136px] ">
      <Container>
        <div className=" ">
          <PostForm />
        </div>
        
      </Container>
    </div>
  );
};

export default AddPost;

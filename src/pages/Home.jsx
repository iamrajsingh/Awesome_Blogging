import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button, Container} from "../components";
import homeImage from "../assets/home_image.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const post = async () => {
    await appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  };

  useEffect(() => {
    post();
  }, []);

  return (
    <div className="relative w-full h-screen py-8 mt-50 text-center bg-bg-color overflow-hidden">
      <Container>
        <div className="mb-40 flex flex-1 h-screen items-center justify-between flex-wrap">
          <div className="flex w-[450px]  justify-end items-start p-2 flex-col">
            <p className="text-sm font-bold text-black-400 mb-2 font-palanquin text-white-400">
              Exploring the Extraordinary in Everyday Life
            </p>
            <h1 className="text-4xl text-left font-bold text-white font-montserrat leading-[45px]">
              Awesome Blog <br />
              <span className="text-bold text-slate-300">
                {" "}
                Where Inspiration Meets
              </span>
            </h1>
            {posts.length > 0 ? (
              <Button className="bg-brown mt-4 hover:bg-brown-light hover:shadow-md">
                <Link to="/all-posts">Explore posts</Link>{" "}
              </Button>
            ) : (
              <Button className="bg-brown mt-4 hover:bg-brown-light hover:shadow-md">
                <Link to="/signup">Signup now</Link>{" "}
              </Button>
            )}
          </div>
          <div className="absolute right-0 flex justify-end items-center h-full max-lg:">
            <img
              className=" img_style relative right-[-90px] max-lg:hidden"
              src={homeImage}
              alt="Home image"
              height={300}
              width={700}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

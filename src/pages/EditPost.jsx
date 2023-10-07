import React, {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {

    const [post, setPosts] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if (slug) {
            appwriteService.getPost(slug)
            .then((post)=> {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className=' w-full text-center bg-secondary h-[1000px] pt-[136px]  '>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) :(
    <div className="h-screen flex justify-center items-center bg-secondary">
      <h1 className="font-palanquin text-3xl font-extrabold">Loading....</h1>
    </div>
  )
}

export default EditPost
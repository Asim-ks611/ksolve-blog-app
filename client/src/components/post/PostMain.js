import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { getPostDetail } from '../../services/services';
import AuthorSection from './AuthorSection';
import CommentSection from "./CommentSection";
import CommentsForm from './CommentForm';
import PostSection from "./PostSection"
import CategorySection from './CategorySection';



const PostMain = () => {
  const [detailedPost,setDetailedPost] = useState({})
  let location = useLocation()
  let slug =location?.pathname?.split('/')[2]

  useEffect(() => {
     getPostDetail(slug)
    .then(result=>setDetailedPost(result))
  }, [slug])
  return (
    <>
          <PostSection post={detailedPost}/>
          <AuthorSection author={detailedPost.author}/>
          <CommentsForm post={detailedPost?._id}/>
          <CommentSection comments={detailedPost?.comments}/>
    </>
  )
}

export default PostMain;
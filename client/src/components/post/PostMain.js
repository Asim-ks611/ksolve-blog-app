import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { getPostDetail } from '../../services/services';
import AuthorSection from './AuthorSection';
import CommentSection from "./CommentSection";
import CommentsForm from './CommentForm';
import PostSection from "./PostSection"
import AdjacentPostSection from './AdjacentPostSection';



const PostMain = () => {
  const [detailedPost,setDetailedPost] = useState({})
  const [postId,setPostId] = useState("")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  let location = useLocation()
  let slug =location?.pathname?.split('/')[2]

  useEffect(() => {
     getPostDetail(slug)
    .then(result=>{
      setDetailedPost(result)
      setPostId(result?._id)
    })
  }, [slug,showSuccessMessage])


  return (
    <>
          <PostSection post={detailedPost}/>
          <AuthorSection author={detailedPost.author}/>
          {/* <AdjacentPostSection post={detailedPost}/> */}
          <CommentsForm post={postId}
          showSuccessMessage={showSuccessMessage}
          setShowSuccessMessage={setShowSuccessMessage}
          />
          <CommentSection comments={detailedPost.comments}/>
    </>
  )
}

export default PostMain;
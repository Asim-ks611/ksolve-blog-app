import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import moment from 'moment';
import { getSimilarPosts,getRecentPosts } from '../../services/services';

const PostWidget = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(()=>{
        if(slug){
            getSimilarPosts(categories,slug)
            .then(result=>setRelatedPosts(result))
            .catch(err=>err.message)
        }else{
            getRecentPosts().then(data=>setRelatedPosts(data))
        }
    },[slug,categories])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, i) => (
        <div key={i} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.image}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link to={`/posts/${post.slug}`} className="text-md" key={i}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
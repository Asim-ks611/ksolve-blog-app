import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {getCategories} from "../../services/services"


const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories().then(result=>setCategories(result))
  },[])

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="md:float-left block text-center">
          <Link to="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog App
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, i) => (
            <Link key={i} to={`/categories/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

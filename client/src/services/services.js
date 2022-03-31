const URL = "http://localhost:3005";

/// -------- POST SERVICES ---------/////

export const getPosts = async () => {
  let posts = await fetch(`${URL}/posts`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res.json());
  return posts;
};

export const getFullPosts = async () => {
  let posts = await fetch(`${URL}/posts/full`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => res.json());
  return posts;
};

export const getRecentPosts = async () => {
  let recentPosts = await fetch(`${URL}/posts/recent`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res=>res.json())
  return recentPosts;
};

export const getSimilarPosts = async (categories, slug) => {
  let posts = await fetch(
    `${URL}/posts/similar?categories=${categories}&slug=${slug}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(res=>res.json())
  return posts;
};

export const getPostDetail = async (slug) => {
  let posts = await fetch(`${URL}/posts/detailed/${slug}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type":"multipart/form-data",
    },
  }).then((res) => res.json());
  return posts;
};

///// -------- COMMENT SERVICES ---------/////
export const getComments = async (slug) => {
  let comments = await fetch(`${URL}/comments/${slug}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  },
  ).then((res) => res.json());
  return comments;
};

export const submitComment = async (commentObj)=>{
   let submit = await fetch(`${URL}/comments`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentObj)
  })
  return submit.json()
}

///// -------- CATEGORIES SERVICES ---------/////
export const getCategories = async () => {
  let categories = await fetch(`${URL}/categories`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res.json());
  return categories;
};

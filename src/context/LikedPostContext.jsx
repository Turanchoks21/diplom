import React, { createContext, useState, useContext, useEffect } from 'react';

const LikedPostContext = createContext();

export const LikedPostProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const storedLikedPosts = localStorage.getItem('likedPosts');
    if (storedLikedPosts) {
      setLikedPosts(JSON.parse(storedLikedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  }, [likedPosts]);

  const addLike = (post) => {
    setLikedPosts((prevPosts) => {
      if (prevPosts.some(p => p.id === post.id)) {
        return prevPosts;
      }
      return [...prevPosts, post];
    });
  };

  const removeLike = (postId) => {
    setLikedPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
  };

  return (
    <LikedPostContext.Provider value={{ likedPosts, addLike, removeLike }}>
      {children}
    </LikedPostContext.Provider>
  );
};

export const useLikedPost = () => useContext(LikedPostContext);

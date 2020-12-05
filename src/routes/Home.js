import React, { useEffect } from 'react';
import Footer from '../components/footer';

function Home() {
  const URL = "http://heyitschun.com";

  useEffect(() => {
    window.location.href = URL;
  })

  return (
    <></>
  );
};

export default Home;

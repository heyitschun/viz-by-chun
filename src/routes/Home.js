import React, { useEffect } from 'react';

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

import React from 'react';
import Footer from '../components/footer';

function Avocado() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">avocado</div>
      <Footer bgColor="bg-black" textColor="text-white" className="flex-shrink" />
    </div>
  );
};

export default Avocado;

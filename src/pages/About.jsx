// import React from 'react';

import { Link } from 'react-router-dom';
import listing from './Listing';
import Contact from '../components/Contact';

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Jakir Apriyan</h1>
      <p className="mb-4 text-slate-700">Jakir Apriyan is a 17 year old student who loves the world of IT and dreams of becoming a web developer, this is where his struggle begins.</p>
      <p className="mb-4 text-slate-700">A gem cannot be polished without friction, and one cannot be successful without challenges.</p>
      <p className="mb-4 text-slate-700">A winner is a dreamer who never gives up.</p>
      <button className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 gap-4 flex flex-col items-center">
        <a href="mailto:jakirapriyan@gmail.com" className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95">
          Contact Me
        </a>
        {/* {contact && <Contact listing={listing} />} */}
      </button>
      {/* <Link href={`mailto:jakirapriyan@gmail.com?subject=Regarding ${listing.name}&body=${message}`} className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95">
        Contact Me
      </Link> */}
    </div>
  );
}

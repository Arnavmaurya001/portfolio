import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import content from '../content';

export default function Projects() {
    return (
        <div id="projects">
        <div 
        style={{
           
        }}
         className="min-h-screen flex flex-col items-center justify-center font-dosis"
      >
            <h1 className="text-5xl font-dosis font-bold">Projects</h1>
            <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
           <div className="">
               <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-3 p-5 font-dosis">

                   {
                       content.projects.project.map((p,id)=>{
                           return (
                               <div key={id} className={`${id % 2 === 0 ? "animate-float": "animate-refloat"} 
                                p-2 m-1 shadow-lg transform scale-100 hover:scale-110 `}>
                               <div className="p-2 bg-cover">
                               <LazyLoadImage
                               className="rounded"
                               src={p.src} />
                               </div>
                               <div className="justify-center">
                               <h1 className="text-1xl font-bold mx-4 px-4">{p.title}</h1>
                               <p className="text- font-thin px-4 mx-4">Description : {p.desc} </p>
                               </div>    
                               <div className="flex items-center"> 
                                <a href={p.btnurl} className="border-0">
                               <button  className=" border-none rounded-full p-1 mx-4 px-6 m-2 transition duration-500 ease-in-out bg-blue-600 hover:bg-orange-600 transform hover:-translate-y-1 hover:scale-110 ...">
                                Vist Website
                                </button>
                                </a>
                               </div>
           
                               </div>
                           )
                       })
                   }
               </div>
           </div>
        </div>
        </div>
    )
}

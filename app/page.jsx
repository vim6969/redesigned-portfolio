"use client";

// icons imports
import icon1 from "./assets/alien.svg";
import icon2 from "./assets/artist-palette.svg";
import icon3 from "./assets/crystal-ball-2.svg";
import icon4 from "./assets/growing-heart.svg";
import icon5 from "./assets/moai.svg";
import icon6 from "./assets/right-anger-bubble.svg";
import linkedin from "./assets/linkedin.svg";
import insta from "./assets/insta-icon.svg";
import { useState,useMediaQuery } from "react";
import Image from "next/image";


//component imports


//css imports
import "./animate.css";


export default function Home() {

  // functions
  const [iconSelected, setIconSelected] = useState("");
  const [atBottom, setAtBottom] = useState(false);
  
  const [showFullCard, setShowFullCard] = useState(false);
  const [isMobile,setIsMobile] = useState(true)
  const [iconClicked,setIconClicked] = useState(false)

  const handleCardToogle = (e) => {
    
    if(window.innerWidth>767){
      setIsMobile(false) 
    }
    console.log(isMobile)

    setAtBottom(!atBottom);
    console.log(e.target.className.split(" ")[0]);
    

    setIconSelected(e.target.className.split(" ")[0]);
    setShowFullCard(false)
    setIconClicked(!iconClicked)
    console.log('icon clicked',iconClicked)
    
    
    
  };
  const handleCardSwipe = (e) => {
    setShowFullCard(!showFullCard);
  };
 


  return (
    <div className="">
      
      {/* icons and cards display */}
      <div className={`${isMobile?'grid grid-cols-2':''} md:flex h-screen justify-center items-center `}>
          {/* audio componenet */}
          {iconClicked ? (
                    <audio autoPlay>
                      <source src="/sounds/click.wav" type="audio/wav" />
                    </audio>
                  ) : (
                    ""
                  )}
          {!iconClicked ? (
                        <audio autoPlay>
                          <source src="/sounds/close.wav" type="audio/wav" />
                        </audio>
                      ) : (
                        ""
                      )}
          
          {/* 1st icon */}
          <div className="first-icon">
            <div className="">
                <div className="m-8 relative ">
                  <Image
                    src={icon1}
                    width={200}
                    className={`Alien-about-me SVG floatingSVG
                      ${atBottom? "focusedSVG" : ""} 
                      ${
                        iconSelected ==='Alien-about-me' ||
                        iconSelected === '' ||
                        !iconClicked
                          ? ""
                          : "hidden"
                      }
                      
                      `}
                    onClick={handleCardToogle}
                    alt="icon"
                  />
                  
                </div>
                {/* ------------card display logic--------------- */}
              
                <div
                  className={
                    // what to display card or side card
                  `${iconSelected==='Alien-about-me'?`${isMobile?'card':'side-card'}`:`hidden`} 
                  ${isMobile && showFullCard?'full-card':''}
                  ${iconSelected==='' || iconClicked===false? `hidden` : '' } 
                `}
                  onClick={handleCardSwipe}
                >
                  {/* ------------card display logic ends--------------- */}
                  
                  {/*--------------- content for the card -----------------------------------------------------*/}
                  
                  <div className={`md:p-8`}>
                    <div className="flex justify-center items-center ">
                      <p className="text-3xl scale-x-150 text-white">-</p>
                    </div>
                    <div className="flex justify-center items-center  font-light">
                      <p className="text-white md:text-4xl text-3xl ">About me</p>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl md:mt-12 text-white mx-4 mt-2 font-light leading-loose ">
                    Hey there! I'm Vimanshu, a passionate full-stack software developer with a knack for crafting stunning user interfaces. My expertise revolves around React and Next.js, where I delve into creating sleek, minimalistic frontend designs that captivate and simplify user experiences.
                    </p>
                    <div className="md:mt-28">
                      {/* info with a border at bottom */}
                    <div className="flex justify-between text-white font-thin md:font-light md:text-lg mx-8">
                      <p>My Socials</p>
                      <div className="flex justify-between">
                        <Image src={insta} width={25} height={25} className="mr-3" alt="icon"/>
                        <Image src={linkedin} width={25} height={25} alt="icon"/>
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    {/* info with a border at bottom */}
                    <div className="flex justify-between text-white font-thin mt-12 mx-8 md:font-light md:text-lg">
                      <p>Email</p>
                      <div className="flex justify-between">
                        <p>vimanshuchandra@icloud.com</p>
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    </div>
                    
                  </div>
                  {/*--------------- content for the card ends-----------------------------------------------------*/}
                </div>
            </div>
          </div>

          {/* 2nd Icon */}
          <div className="second-icon">
            <div className="">
                <div className="m-8 relative ">
                  <Image
                    src={icon2}
                    width={200}
                    className={`paint-projects SVG floatingSVG
                      ${atBottom? "focusedSVG" : ""} 
                      ${
                        iconSelected ==='paint-projects' ||
                        iconSelected === '' ||
                        !iconClicked
                          ? ""
                          : "hidden"
                      }`}
                    onClick={handleCardToogle}
                    alt="icon"
                  />
                  
                </div>
                {/* ------------card display logic--------------- */}
              
                <div
                  className={
                    // what to display card or side card
                  `${iconSelected==='paint-projects'?`${isMobile?'card':'side-card'}`:`hidden`} 
                  ${isMobile && showFullCard?'full-card':''}
                  ${iconSelected==='' || iconClicked===false? `hidden` : '' } 
                `}
                  onClick={handleCardSwipe}
                >
                  {/* ------------card display logic ends--------------- */}
                  
                  {/*--------------- content for the card -----------------------------------------------------*/}
                  
                  <div className={`md:p-8`}>
                    <div className="flex justify-center items-center ">
                      <p className="text-3xl scale-x-150 text-white">-</p>
                    </div>
                    <div className="flex justify-center items-center  font-light">
                      <p className="text-white md:text-4xl text-3xl ">Projects</p>
                    </div>
                    <p className="text-xl md:text-3xl md:mt-12 text-white mx-4 mt-2 font-light leading-loose ">
                    Here is a list of projects I have completed.
                    </p>
                    <div className="md:mt-28">
                      {/* info with a border at bottom */}
                    <div className="flex justify-between text-white font-thin md:font-light md:text-lg mx-8">
                      <p>Instagram Reels Downloader</p>
                      <div className="flex justify-between">
                        <a href="https://download-insta-reels.vercel.app/" target="_blank">
                          <Image src={insta} width={25} height={25} className="mr-3" alt="icon"/>
                        </a>
                        </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    </div>
                    
                  </div>
                  {/*--------------- content for the card ends-----------------------------------------------------*/}
                </div>
            </div>
          </div>
          
          {/* 3rd Icon */}
          <div className="third-icon">
            <div className="">
                <div className="m-8 relative ">
                  <Image
                    src={icon3}
                    width={200}
                    className={`crystal-ball-skills SVG floatingSVG
                      ${atBottom? "focusedSVG" : ""} 
                      ${
                        iconSelected ==='crystal-ball-skills' ||
                        iconSelected === '' ||
                        !iconClicked
                          ? ""
                          : "hidden"
                      }`}
                    onClick={handleCardToogle}
                  />
                  
                </div>
                {/* ------------card display logic--------------- */}
              
                <div
                  className={
                    // what to display card or side card
                  `${iconSelected==='crystal-ball-skills'?`${isMobile?'card':'side-card'}`:`hidden`} 
                  ${isMobile && showFullCard?'full-card':''}
                  ${iconSelected==='' || iconClicked===false? `hidden` : '' } 
                `}
                  onClick={handleCardSwipe}
                >
                  {/* ------------card display logic ends--------------- */}
                  
                  {/*--------------- content for the card -----------------------------------------------------*/}
                  
                  <div className="p-8">
                    <div className="flex justify-center items-center ">
                      <p className="text-3xl scale-x-150 text-white">-</p>
                    </div>
                    <div className="flex justify-center items-center  font-light">
                      <p className="text-white text-4xl">My Skills</p>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white mx-4 mt-2 font-light leading-loose md:mt-12">
                    I excel in crafting dynamic web applications with proficiency in React.js and Next.js, ensuring seamless user experiences through sleek interfaces.
                    </p>
                  <div className="md:mt-28">
                    {/* info with a border at bottom */}
                      <div className="flex justify-between text-white font-thin md:font-light md:text-lg mx-8">
                      <p>Frontend</p>
                      <div className="flex justify-center gap-1 flex-wrap">
                        <p>React.js</p>
                        <p>Next.js</p>
                        <p>HTML/CSS</p>
                        <p>Javascript</p>
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    {/* info with a border at bottom */}
                    <div className="flex justify-between text-white font-thin md:font-light md:text-lg mt-12 mx-8">
                      <p>UI frameworks</p>
                      <div className="flex justify-between gap-1">
                        <p>Tailwind</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    {/* info with a border at bottom */}
                    <div className="flex justify-between text-white font-thin md:font-light md:text-lg mt-12 mx-8">
                      <p>Backend</p>
                      <div className="flex justify-between">
                        <p>Node.js</p>
                        
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                  </div>
                    
                  </div>
                  {/*--------------- content for the card ends-----------------------------------------------------*/}
                </div>
            </div>
          </div>
          {/* 4th Icon */}
          <div className="fourth-icon">
            <div className="">
                <div className="m-8 relative ">
                  <Image
                    src={icon4}
                    width={200}
                    className={`heart-hobbies SVG floatingSVG
                      ${atBottom? "focusedSVG" : ""} 
                      ${
                        iconSelected ==='heart-hobbies' ||
                        iconSelected === '' ||
                        !iconClicked
                          ? ""
                          : "hidden"
                      }`}
                    onClick={handleCardToogle}
                    alt="icon"
                  />
                  
                </div>
                {/* ------------card display logic--------------- */}
              
                <div
                  className={
                    // what to display card or side card
                  `${iconSelected==='heart-hobbies'?`${isMobile?'card':'side-card'}`:`hidden`} 
                  ${isMobile && showFullCard?'full-card':''}
                  ${iconSelected==='' || iconClicked===false? `hidden` : '' } 
                `}
                  onClick={handleCardSwipe}
                >
                  {/* ------------card display logic ends--------------- */}
                  
                  {/*--------------- content for the card -----------------------------------------------------*/}
                  
                  <div className="p-8">
                    <div className="flex justify-center items-center ">
                      <p className="text-3xl scale-x-150 text-white">-</p>
                    </div>
                    <div className="flex justify-center items-center  font-light">
                      <p className="text-white text-4xl">My Hobbies</p>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white mx-4 mt-2 font-light leading-loose md:mt-24">
                    Besides coding, I love kicking back with FIFA – scoring goals is my thing! When I'm not gaming, you'll find me pumping iron at the gym, keeping that energy high. And music? It's my daily vibe. Whether I'm exploring new tunes or chilling with favorites, music keeps me company through it all.
                    </p>
                  
                    
                  </div>
                  {/*--------------- content for the card ends-----------------------------------------------------*/}
                </div>
            </div>
          </div>
          {/* 5th Icon */}
          <div className="fifth-icon">
            <div className="">
                <div className="m-8 relative ">
                  <Image
                    src={icon5}
                    width={200}
                    className={`stone-face-experience SVG floatingSVG
                      ${atBottom? "focusedSVG" : ""} 
                      ${
                        iconSelected ==='stone-face-experience' ||
                        iconSelected === '' ||
                        !iconClicked
                          ? ""
                          : "hidden"
                      }`}
                    onClick={handleCardToogle}
                    alt="icon"
                  />
                  
                </div>
                {/* ------------card display logic--------------- */}
              
                <div
                  className={
                    // what to display card or side card
                  `${iconSelected==='stone-face-experience'?`${isMobile?'card':'side-card'}`:`hidden`} 
                  ${isMobile && showFullCard?'full-card':''}
                  ${iconSelected==='' || iconClicked===false? `hidden` : '' } 
                `}
                  onClick={handleCardSwipe}
                >
                  {/* ------------card display logic ends--------------- */}
                  
                  {/*--------------- content for the card -----------------------------------------------------*/}
                  
                  <div className="p-8">
                    <div className="flex justify-center items-center ">
                      <p className="text-3xl scale-x-150 text-white">-</p>
                    </div>
                    <div className="flex justify-center items-center  font-light">
                      <p className="text-white text-3xl md:text-4xl">My Experience</p>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white mx-4 mt-2 font-light leading-loose md:mt-12">
                    At EY, I teamed up with the Frontend and AI folks, lending my skills as a Software Engineer. My role focused on sprucing up UI components for a cool project. It was a blast learning how to blend sleek interfaces with smart AI features. This gig not only boosted my tech skills but also showed me the power of teamwork and innovation.
                    </p>
                  <div className="md:mt-28">
                    {/* info with a border at bottom */}
                      <div className="flex justify-between text-white font-thin md:font-light md:text-lg mx-8">
                      <p>Ernst and Young - ASE</p>
                      <div className="flex justify-between gap-1">
                        <p>2022</p>
                        <p>-</p>
                        <p>2023</p>
                      </div>
                    </div>
                    {/* border sample */}
                    <div className="border-b mx-4 mt-2 opacity-50"></div>
                    
                  </div>
                    
                  </div>
                  {/*--------------- content for the card ends-----------------------------------------------------*/}
                </div>
            </div>
          </div>

      </div>
       
       {/*footer*/}
       <div className="flex justify-center items-end">
        <p className="text-lg md:text-3xl font-thin text-gray-300 absolute bottom-8">Vimanshu</p>
        <p className="text-sm md:text-base font-thin text-gray-300 absolute bottom-4">cv</p>
       </div>
       
       
       
       
       
    </div>
    
  )
}

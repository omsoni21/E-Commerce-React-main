import React from 'react';
import './Hero.css';
import arrow_icon from "../Assets/arrow.png";
import hand_icon from '../Assets/hand_icon.png';
import hero_img from '../Assets/hero_image.png';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <motion.div className="hero" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.7,ease:'easeOut'}}>
        <motion.div className="hero-left" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <motion.a className="hero-cta" href="#" whileHover={{scale:1.03}} whileTap={{scale:0.98}} transition={{type:'spring',stiffness:300}}>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </motion.a>
        </motion.div>

        <motion.div className="hero-right" initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.8}}>
            <motion.img src={hero_img} alt="" initial={{y:6}} animate={{y:[6,-6,6]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}} />
        </motion.div>
    </motion.div>
  )
}

import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function Item(props) {
  return (
    <motion.div className='item' initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} whileHover={{scale:1.03,boxShadow:'0 10px 30px rgba(11,18,32,0.06)'}}>
      <Link to={`/product/${props.id}`} ><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}
            </div>
        </div>
    </motion.div>
  )
}

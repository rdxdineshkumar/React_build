import React,{useState} from 'react'
import './Scroll.css'
function Scroll({changeImage,images}) {
  const[imgactive,setImgactive]=useState(1);
  const {img1,img2,img3,img4,img5,img6}=images;
  return (    
  <div className='container'>
        <div className='vertical-scroll'>
           <a href="#" className={(imgactive===1)?'img_active':null} onClick={()=>{setImgactive(1);changeImage(img1)}}><img  src={img1}></img></a>
           <a href="#" className={(imgactive===2)?'img_active':null} onClick={()=>{setImgactive(2);changeImage(img2)}}><img  src={img2}></img></a>
           <a href="#" className={(imgactive===3)?'img_active':null} onClick={()=>{setImgactive(3);changeImage(img3)}}><img  src={img3}></img></a>
           <a href="#" className={(imgactive===4)?'img_active':null} onClick={()=>{setImgactive(4);changeImage(img4)}}><img  src={img4}></img></a>
           <a href="#" className={(imgactive===5)?'img_active':null} onClick={()=>{setImgactive(5);changeImage(img5)}}><img  src={img5}></img></a>
           <a href="#" className={(imgactive===6)?'img_active':null} onClick={()=>{setImgactive(6);changeImage(img6)}}><img  src={img6}></img></a>
        </div>
    </div>
  )
}

export default Scroll

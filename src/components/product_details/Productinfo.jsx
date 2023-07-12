import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Scroll from '../../components/product_details/detailed_images/Scroll'
import Wishlist from './wishlist/Wishlist'
import Counts from './counts/Counts'
import './Productinfo.css'
import {useQuery} from '@apollo/client'
import CartButton from './cart_buttons/CartButton'
import ProductHeader from './product_header/ProductHeader'
import Rating from './rating/Rating'
import Price from './price/Price'
import Offers from './offers/Offers'
import Available from './availability/Available'
import ColorVariants from './variants/color_variants/ColorVariants'
import StorageVariants from './variants/storage_variants/StorageVariants'
import Description from './description/Description'
import PaymentOptions from './payment_details/PaymentOptions'
import { filteredData } from '../../graphql/queries/graphql.queries'
function Productinfo({states}) {  
      const [product,setProduct]=useState({});
      const [count,setCount]=useState(1);
      const [image, setImage] = useState('');
      const [imageDetails,setImageDetails]=useState({});
      const [stars,setStars]=useState(0);
      const [available,setAvailable]=useState(0);
      const { value } = useParams();
      const{ data,error,loading }=useQuery(filteredData,{variables:{Number:value}});
      useEffect(()=>{
           if(data){
            setProduct(data.productData);
            setImage(data.productData.image);
            const { detailed_images,rating:{rate,count}}=data.productData;
            setImageDetails(detailed_images)
            setStars(rate);
            setAvailable(count);
         
           }
      },[data])
      if (loading) return 'loading...';
      if (error) return `Error! ${error.message}`;
      return (
            <div className='productinfo'>
                  <div className='productinfo-container'>
                        <div className='image_container_sticky'>
                              <div className='productinfo_images'>
                                    <Scroll changeImage={setImage} images={imageDetails}/>
                                    <div><img className='productinfo_mainImage' src={image} alt={product.title}></img></div>
                                    <div className='productinfo_count'>
                                         <Wishlist/>
                                         <Counts count={count} setCount={setCount}/> 
                                    </div>
                              </div>
                              <CartButton infoToAdd={product} count={count} states={states}/>
                        </div>
                  </div>
                  <div className='productinfo_des'>
                        <ProductHeader header={product.title}/>
                        <Rating starRating={stars}/>
                        <p className='product_off'> Extra $$$$ off</p>
                        <Price price={product.price}/>
                        <p className='packaging_fee'>+0.25$ Secure Packaging Fee </p>
                        <Offers/>
                        <Available count={available}/>
                        <div className='variants'>
                              <ColorVariants variants={product.category} changeImage={setImage} MainImage={product.image}/>
                              <StorageVariants categories={product.category}/>
                        </div>
                       <div className='highlights_payment'>
                              <Description/>
                              <PaymentOptions/>
                        </div> 
                   </div>
            </div>
      )
}
export default Productinfo

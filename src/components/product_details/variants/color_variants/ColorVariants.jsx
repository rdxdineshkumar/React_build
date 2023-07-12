import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GetVariants } from '../../../../graphql/queries/graphql.queries';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function ColorVariants({variants,changeImage,MainImage }) {
    const[categoryName,setCategoryName]=useState("");
    const [info, setInfo] = useState([]);
    const { data } = useQuery(GetVariants, {variables:{categoryType:categoryName}});
    useEffect(() => {
        if (data) {
            setInfo(data.GetVariants);
        }
    }, [data]);
    useEffect(()=>{
        if(variants){
            setCategoryName(variants)
        }
    },[variants])
    return (
        <div>
            <div className='color_variants_container'>
                <p>Similar Products:</p>
                <div className='color_variants'>
                    {
                        info.map((data) => {
                            const { id, image } = data;
                            return (
                                <Link to={`/productDetails/${id}`}  onMouseEnter={() => changeImage(image)} onMouseLeave={()=>changeImage(MainImage)} key={id}><img src={image} alt={id}></img></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ColorVariants

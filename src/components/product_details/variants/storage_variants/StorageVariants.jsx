import { useState,useEffect } from 'react'

function StorageVariants({categories}) {
    const [storage,setStorage]=useState(1);
    const [category,setCategory]=useState("");
    useEffect(()=>{
        if(categories){
            setCategory(categories)
        }
    },[categories])
    
    return (
        <div>
            <div className='storage_variants_container' style={(category.toLowerCase() == 'laptop' || category.toLowerCase() == 'phone') ? { opacity: '1' } : { opacity: '0' }}>
                <p>Storage:</p>
                <div className='storage_variants'>
                    <div className={storage == 1 ? 'storage_active' : null} onClick={() => setStorage(1)}><a href='#'>32GB</a></div>
                    <div className={storage == 2 ? 'storage_active' : null} onClick={() => setStorage(2)}><a href='#'>64GB</a></div>
                    <div className={storage == 3 ? 'storage_active' : null} onClick={() => setStorage(3)}><a href='#'>128GB</a></div>
                    <div className={storage == 4 ? 'storage_active' : null} onClick={() => setStorage(4)}><a href='#'>256GB</a></div>
                </div>
            </div>
        </div>
    )
}

export default StorageVariants

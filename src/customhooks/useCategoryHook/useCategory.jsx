import { useEffect,useState } from 'react'
import { useQuery } from '@apollo/client'
import { GetItemsByCategory } from '../../graphql/queries/graphql.queries';

function useCategory(categoryName) {
    const [items,setItems]=useState([]);
    const {data}=useQuery(GetItemsByCategory,{variables:{category:categoryName}});
    useEffect(()=>{
        if(data){
            setItems(data.GetCategory);
        }
    },[categoryName,data])
  return items;
}

export default useCategory

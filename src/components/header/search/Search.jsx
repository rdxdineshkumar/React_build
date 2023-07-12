import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import {useMutation} from '@apollo/client'
import { getData } from '../../../graphql/mutations/graphql.mutations';
import { SearchedData } from '../../../graphql/queries/graphql.queries';

function Search({className}) {
  
const [putData]=useMutation(getData,{refetchQueries:[{query:SearchedData}]})
const onChangeHandler=(e)=>{
    putData({variables:{
      searchedData:e.target.value.trim()
    }
    })
}
const navigate=useHistory();
return (
    <div>
       <div className={className}>
          <input className='header_search_box' type='text' placeholder='Search here' onChange={onChangeHandler} onClick={()=>navigate.push('/search')}></input>
          <Link to='/search' className='header_search_button'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div> 
    </div>
  )
}

export default Search

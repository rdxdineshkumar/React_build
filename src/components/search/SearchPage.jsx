import React from 'react'
import Card from '../home/cards/Card'
import { useQuery } from '@apollo/client'
import { SearchedData } from '../../graphql/queries/graphql.queries'
import { useState, useEffect } from 'react';
import No_results from '../../Images/No_results.png'
import './SearchPage.css'
function SearchPage() {
    const { data } = useQuery(SearchedData);
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        if (data) {
            setSearchedData(data.FilteredData);
        }
    }, [data])
    return (
        <div>
            {
                searchedData.length > 0 ? (
                    <div style={{ 'backgroundColor': "rgba(0,0,0,0.05)" }}>
                        <Card data={searchedData} classtitle="product allproducts" />
                    </div>
                ) : (
                    <div className='No_results'>
                        <img src={No_results} alt='No_results' />
                    </div>
                )
            }
        </div>

    )
}

export default SearchPage

import { gql } from "@apollo/client";

//Query for get user details
export const  usersDATA = gql`
query{
  users{
    id
    username
    email
    password
  }
}
`;

//Query for get all products
export const Collections=gql`
query{
  productsData{
   id
   title
   price
   description
   image
   category
   detailed_images{
     img1
     img2
     img3
     img4
     img5
     img6
     img7
     img8
   }
   rating{
     rate
     count
   }
 }
 }
`

//Query for get Product Details based on id
export const filteredData=gql`
query data($Number:ID!){
      productData(id:$Number){
        id
        title
        image
        price
        category
        detailed_images{
          img1
          img2
          img3
          img4
          img5
          img6
          img7
          img8
        }
        rating{
          rate
          count
        }
      }
    }`;

//Query for Cart items
export const CART_ITEMS = gql`
query GetItems{
  CartItems{
    id
    image
    title
    price
    noOfItems
  }
}
`

//Query for get searched Datas
export const SearchedData=gql`
query searchData{
  FilteredData{
    id,
    title,
    image,
    price,
    
  }
}`;

//Query for get Items by category
export const GetItemsByCategory=gql`query GetItemsByCategory($category:String!)
{
  GetCategory(category:$category){
    id
    title
    price
    image
    category
  }
}`

//Query for get Variants
export const GetVariants=gql`
query GetVariants($categoryType:String!){
  GetVariants(categoryType:$categoryType){
    id
    image
  }
}`

//Query for All Products
export const AllProducts=gql`query AllProducts{
  AllProducts{
     id,
    title,
    image,
    price, 
    category
  }
}`

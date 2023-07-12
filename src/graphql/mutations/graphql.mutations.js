import {gql} from '@apollo/client'

//Mutation for add users
export const create_user = gql`
  mutation userinfo($username:String,$email:String,$password:String){
    createUser(username:$username,email:$email,password:$password){
    username
    email
    password
    }
  }`
// Mutation for add items to the cart
export const addToCart=gql`
    mutation cart($id:ID,$title:String,$image:String,$price:Int,$noOfItems:Int){
          addCartItems(input:{
          id:$id
          title:$title
          image:$image
          price:$price
          noOfItems:$noOfItems
          }){
          id
          }
    }`;

//Mutation for update CartItems
export const updateItem = gql`
mutation updateItem($id:ID,$Item:String){
    updateCartItems(id:$id,Item:$Item){
      id
    }
  }`

//Mutation for delete an item from the cart
export const removedata=gql`
mutation deleteItem($id:ID){
    deleteItem(id:$id){
      id
      title
    }
  }`

// Mutation for SearchData
export const getData=gql`mutation($searchedData:String){
  searchData(searchedData:$searchedData){
    title
  }
}`;

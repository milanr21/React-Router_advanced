1. What is route/url parameter ?
   => A route paramter is a dynamic value embedded within the Url of webpage or application. It's used to pass specific data or information to a route handler or component in order to customize tjhe content or behavior of that route.

In a url route parameters are usually denoted by a colon followed by a paramter name. For example, in the URl `/users/:id`, `:id` is a route parameter that represents to a specific user's ID.

2. Add a route parameter called 'productId' to the route path below:

<Route path="/products/:productId" element={<ProductDetails />} />

3. Add whatever you need to add for the component below to display the route paramter in the <h1>

import {useParams} from "react-router-dom";

function ProductDetauls(){
const {productId} = useParams()
return <h1>Product Id is {productId}</h1>
}

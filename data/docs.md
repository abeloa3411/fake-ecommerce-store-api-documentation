---
title: "Docs"
date: "Dec 24, 2022"
---

### Usage

You can fetch datausing any methods you know ie fetch, axios etc. The api gives json
data containing furnitures. You can use it in your projects and enjoy it

### get all products

```js
fetch("https://fakeecommerceapi.onrender.com/api/v1/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### get a single product

```js
fetch("https://fakeecommerceapi.onrender.com/api/v1/products/:id")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Upload a product

```js
fetch("https://fakeecommerceapi.onrender.com/api/v1/products/:id", {
  method: "POST",
  body: JSON.stringify({
    name: "new product",
    price: 10,
    description: "product desription",
    image: "img url",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{
    "price": 25,
    "name": "accent chair",
    "image": "img url",
    "description": "Comfy chair for you living room",
    "category": "electronics",
}
*/
```

### delete a product

```js
fetch("https://fakeecommerceapi.onrender.com/api/v1/products/:id", {
  method: "DELETE",
});

/*
the response

{
    "price": 25,
    "name": "accent chair",
    "image": "img url",
    "description": "deleted product description",
    "category": "home"
}

*/
```

### update a product

```js
fetch("https://fakeecommerceapi.onrender.com/api/v1/products/:id", {
  method: "PUT",
  body: JSON.stringify({
    title: "updated product",
    price: 30,
    description: "updated product description",
    image: "img url",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{

    "price": 30,
    "name": "updated product",
    "image": "img url",
    "description": "updated product description",
    "category": "electrinics",

}

Note: The update will not occur on the database
*/
```

#### This are the available routes

#### Products

```js
//request body

{
  price: Number,
  name:String,
  image: String,
  description: String,
  category: String
  }

```

GET

/products (get all products)

/products/:id (get a single product)

/products/category/home (sort products using category)

POST

/products

PUT

/products/:id

DELETE

/products/:id

#### User

currently un available

```js

{

  id:Number,
  full_name: String,
  email: String,
  password: String,
  telephone: Number,

}

```

GET

/user (get all users)
/user/:id (get a single user)

POST

/user

DELETE

/user/:id (remove a user)

PATCH

/user/:id (update a user)

#### Auth

```js
//login fields
{
  email: String;
  password: String;
}
```

POST

/auth/login

```js
//sign in fields
{
  full_name: String,
  email: String,
  password: String,
  telephone: Number,

}
```

/auth/signup

Enjoy and feel free to contribute.

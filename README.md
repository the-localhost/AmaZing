# AmaZing
AmaZing is an attempt to create a full-stack web app resembling Amazon.com e-commerce app.

## Directory structure
```bash
.
├── BE
│   ├── addtocart
│   │   ├── mvnw
│   │   ├── mvnw.cmd
│   │   ├── pom.xml
│   │   ├── src
│   │   │   ├── main
│   │   │   │   ├── java
│   │   │   │   │   └── com
│   │   │   │   │       └── amazon
│   │   │   │   │           └── addtocart
│   │   │   │   │               ├── AddtocartApplication.java
│   │   │   │   │               ├── controller
│   │   │   │   │               │   └── AddToCartController.java
│   │   │   │   │               ├── entity
│   │   │   │   │               │   ├── Cart.java
│   │   │   │   │               │   ├── CartDetails.java
│   │   │   │   │               │   ├── CartProduct.java
│   │   │   │   │               │   └── Product.java
│   │   │   │   │               ├── repository
│   │   │   │   │               │   └── AddToCartRepository.java
│   │   │   │   │               └── service
│   │   │   │   │                   ├── AddToCartService.java
│   │   │   │   │                   └── ProductDetailsProxy.java
│   │   │   │   └── resources
│   │   │   │       └── application.properties
│   │   │   └── test
│   │   │       └── java
│   │   │           └── com
│   │   │               └── amazon
│   │   │                   └── addtocart
│   │   │                       └── AddtocartApplicationTests.java
│   │   └── target
│   │       ├── classes
│   │       │   ├── application.properties
│   │       │   └── com
│   │       │       └── amazon
│   │       │           └── addtocart
│   │       │               ├── AddtocartApplication.class
│   │       │               ├── controller
│   │       │               │   └── AddToCartController.class
│   │       │               ├── entity
│   │       │               │   ├── Cart.class
│   │       │               │   ├── CartDetails.class
│   │       │               │   ├── CartProduct.class
│   │       │               │   └── Product.class
│   │       │               ├── repository
│   │       │               │   └── AddToCartRepository.class
│   │       │               └── service
│   │       │                   ├── AddToCartService.class
│   │       │                   └── ProductDetailsProxy.class
│   │       ├── generated-sources
│   │       │   └── annotations
│   │       ├── generated-test-sources
│   │       │   └── test-annotations
│   │       └── test-classes
│   │           └── com
│   │               └── amazon
│   │                   └── addtocart
│   │                       └── AddtocartApplicationTests.class
│   ├── productdetailsservice
│   │   ├── mvnw
│   │   ├── mvnw.cmd
│   │   ├── pom.xml
│   │   ├── src
│   │   │   ├── main
│   │   │   │   ├── java
│   │   │   │   │   └── com
│   │   │   │   │       └── amazon
│   │   │   │   │           └── productdetailsservice
│   │   │   │   │               ├── ProductdetailsserviceApplication.java
│   │   │   │   │               ├── controller
│   │   │   │   │               │   └── ProductController.java
│   │   │   │   │               ├── entity
│   │   │   │   │               │   └── Product.java
│   │   │   │   │               ├── repository
│   │   │   │   │               │   └── ProductRepository.java
│   │   │   │   │               └── service
│   │   │   │   │                   └── ProductService.java
│   │   │   │   └── resources
│   │   │   │       └── application.properties
│   │   │   └── test
│   │   │       └── java
│   │   │           └── com
│   │   │               └── amazon
│   │   │                   └── productdetailsservice
│   │   │                       └── ProductdetailsserviceApplicationTests.java
│   │   └── target
│   │       ├── classes
│   │       │   ├── application.properties
│   │       │   └── com
│   │       │       └── amazon
│   │       │           └── productdetailsservice
│   │       │               ├── ProductdetailsserviceApplication.class
│   │       │               ├── controller
│   │       │               │   └── ProductController.class
│   │       │               ├── entity
│   │       │               │   └── Product.class
│   │       │               ├── repository
│   │       │               │   └── ProductRepository.class
│   │       │               └── service
│   │       │                   └── ProductService.class
│   │       └── test-classes
│   │           └── com
│   │               └── amazon
│   │                   └── productdetailsservice
│   │                       └── ProductdetailsserviceApplicationTests.class
│   └── usermetadata
│       ├── mvnw
│       ├── mvnw.cmd
│       ├── pom.xml
│       ├── src
│       │   ├── main
│       │   │   ├── java
│       │   │   │   └── com
│       │   │   │       └── amazon
│       │   │   │           └── usermetadata
│       │   │   │               ├── UsermetadataApplication.java
│       │   │   │               ├── controller
│       │   │   │               │   └── UserController.java
│       │   │   │               ├── entity
│       │   │   │               │   └── UserMetaData.java
│       │   │   │               ├── repository
│       │   │   │               │   └── UserMetaDataRepository.java
│       │   │   │               └── service
│       │   │   │                   └── UserService.java
│       │   │   └── resources
│       │   │       └── application.properties
│       │   └── test
│       │       └── java
│       │           └── com
│       │               └── amazon
│       │                   └── usermetadata
│       │                       └── UsermetadataApplicationTests.java
│       └── target
│           ├── classes
│           │   ├── application.properties
│           │   └── com
│           │       └── amazon
│           │           └── usermetadata
│           │               ├── UsermetadataApplication.class
│           │               ├── controller
│           │               │   └── UserController.class
│           │               ├── entity
│           │               │   └── UserMetaData.class
│           │               ├── repository
│           │               │   └── UserMetaDataRepository.class
│           │               └── service
│           │                   └── UserService.class
│           └── test-classes
│               └── com
│                   └── amazon
│                       └── usermetadata
│                           └── UsermetadataApplicationTests.class
└── FE
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        │   ├── CartContext.js
        │   ├── Checkout
        │   │   ├── Checkout.css
        │   │   ├── Checkout.js
        │   │   └── CheckoutItem
        │   │       ├── CheckoutItem.css
        │   │       └── CheckoutItem.js
        │   ├── DisplayContent
        │   │   ├── DisplayContent.css
        │   │   ├── DisplayContent.js
        │   │   ├── LeftPanel
        │   │   │   ├── LeftPanel.css
        │   │   │   └── LeftPanel.js
        │   │   └── RightPanel
        │   │       ├── Product
        │   │       │   ├── Product.css
        │   │       │   └── Product.js
        │   │       ├── RightPanel.css
        │   │       └── RightPanel.js
        │   ├── MainPage
        │   │   ├── AdvertisementFour
        │   │   │   ├── AdvertisementFour.css
        │   │   │   └── AdvertisementFour.js
        │   │   ├── AdvertisementOne
        │   │   │   ├── AdvertisementOne.css
        │   │   │   └── AdvertisementOne.js
        │   │   ├── MainPage.css
        │   │   └── MainPage.js
        │   ├── NavBar
        │   │   ├── Navigation.css
        │   │   └── Navigation.js
        │   └── PlaceOrder
        │       ├── PlaceOrder.css
        │       └── PlaceOrder.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```

**BE**:&nbsp;&nbsp;&nbsp;&nbsp;The backend of the project, created using SpringBoot microservices.  
**FE**:&nbsp;&nbsp;&nbsp;&nbsp;The front end of the project, created using ReactJS.  
**BE/addtocart**:&nbsp;&nbsp;&nbsp;&nbsp;microservice to handle CRUD requests for products in the cart, uses MySQL.  
**BE/productdetailsservice**:&nbsp;&nbsp;&nbsp;&nbsp;microservice to handle CRUD requests for product inventory details, uses MongoDB.  
**BE/usermetadata**:&nbsp;&nbsp;&nbsp;&nbsp;microservice to store user details, uses MySQL.  
**FE/src/components**:&nbsp;&nbsp;&nbsp;&nbsp;React components.  
**FE/src/components/CartContext.js**:&nbsp;&nbsp;&nbsp;&nbsp;ContextAPI implementation to store and retrieve variable value.  


## Requirements for setting up the project
**Backend**:  
Backend uses Spring Boot v3.1, which requires Java 17 or above.  
If using Eclipse IDE, the code was noticed to break in Eclipse Edition other than 2022-06.  
  
**Frontend**:  
package.json has all the requirements.

## PRs/Issues
Please create an **issue** if you find any bug or incompatibility in any part of the code.  
Any suggestion for a new feature is also welcome.
  
If you want to contribute to this project, please raise a **Pull Request** and I'll review it.

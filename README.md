
# AV-Enterprises

Welcome to the AV Enterprises E-commerce website project! This project aims to bring my father's enterprise business online and provide a platform for customers to browse, book, and buy products from Eureka Forbes Ltd., specifically Aquaguard water purifiers and vacuum cleaners. The website also includes a comprehensive admin panel for managing products, orders, users, and sales statistics by the business owner.


## Features

1. **Client Side**:
- Browse products: Customers can view the available Aquaguard water purifiers and vacuum cleaners.
- Product details: Customers can access detailed information about each product, including specifications, features, and pricing.
- Book products: Customers can book products they are interested in and provide their contact information.
- Request demo: Customers can request a demo session for any product.
- Contact business owner: Customers can get in touch with the business owner directly through the website.

2. **Admin Panel**:
- Add new products: The business owner can add new products to the website, including images, descriptions, and pricing.
- Update existing products: The business owner can modify product information, such as specifications, features, and pricing.
- Delete products: The business owner can remove products from the website.
- Manage orders: The business owner can track and manage customer orders, including order status and fulfillment.
- User management: The business owner can view all registered users of the website and their contact information.
- Sales statistics: The admin panel provides sales statistics and insights to help monitor business performance.


## Technologies Used

The following technologies and frameworks were used in the development of this project:

- Front-end:
    - HTML5, CSS3, JavaScript
    - React.js (or any other front-end library/framework of your choice)

- Back-end:
    - Node.js
    - Express.js (or any other back-end framework of your choice)
    - MongoDB (or any other database management system of your choice)

- Authentication and Authorization:
    - JSON Web Tokens (JWT) for user authentication and authorization

- Additional libraries and tools:
    - Axios (for API communication)
    - Redux
    - Material UI
    - React Router (for client-side routing)

- Payment Integration:
    - Stripe API for secure payment processing
## Installation

1. Clone the repository:

```bash
  git clone https://github.com/VaibhavSr007/AV-Enterprises.github.io.git
```

  
2. Navigate to the project directory:

```bash
  cd av-enterprises
```


3. Install the dependencies for the client-side, server-side and admin side:
```bash
  cd client
  npm install
  cd ../api
  npm install
  cd ../admin
  npm install
```


 4. Configure the environment variables:
- Create a .env file in the server directory.
- Set the following environment variables:

 ```bash
    PORT=3001
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
 ```

- Replace <your-mongodb-connection-string> with your MongoDB connection string.
- Replace <your-jwt-secret-key> with a secret key of your choice. 
- Replace <your-stripe-secret-key> with your Stripe secret key.


5. Populate the database:
- Run the database migration script (if required) to create necessary tables and seed initial data.


6. Start the development server:
- In the server directory, run:
```bash
  cd api
  npm start
```
- In the client directory, run:
```bash
  cd client
  npm start
```
And when you need to switch from client side to admin side, stop the client side and start start development server in the admin side:
```bash
  cd ../admin
  npm start
```

7. pen your browser and visit http://localhost:3000 to access AV Enterprises Website.
## Usage

- As a customer, you can browse the products, view product details, book products, request demos, make payments, and contact the business owner using the respective sections of the website.
- As the business owner, you can access the admin panel by logging in with your credentials. From the admin panel, you can manage products, orders, users, view sales statistics, and process customer payments securely.

## Admin Panel

To access the admin panel, follow these steps:

1. Navigate to the admin login page by clicking on the "Admin Login" link.
2. Enter your admin credentials (username and password) and click "Login."
3. Once logged in, you will have access to the admin dashboard, where you can manage products, orders, users, view sales statistics, and process customer payments securely.
  
  
## Screenshots




## Demo

Demo Video Link

https://youtu.be/tdYITPnwLfY


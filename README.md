# Backend Intern Technical Assessment

Backend for wishlist management feature

## Setup Instructions locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Testing

To run tests, execute: `npm test` It's recommended to thoroughly test each API endpoint using tools like Postman.

## Locally

## Authentication

- **POST /auth/register**: Signup 
- **POST /auth/login**: Login
## Wishlists

- **POST /api/wishlists/**: Create Whitlists Item
- **GET /api/wishlists/**: Retrive Whitlists Item
- **Delete /api/wishlists/:id**: Delete Whitlists Item


## Folder Structure

wishlist-managment/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── wishlistController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│   └── WishlistItem.js
│
├── routes/
│   └── wishlistRoutes.js
│
├── tests/
│   └── wishlistController.test.js
│   └── wishlistService.test.js
│   └── wishlistRepository.test.js
│
├── index.js
├── package.json
└── README.md




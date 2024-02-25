// wishlistController.test.js
const request = require('supertest');
const app = require('../index'); // Assuming your Express app is exported from index.js
const mongoose = require('mongoose');
const WishlistItem = require('../models/WishlistItem');

// beforeAll(async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log('db connection success');
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// afterEach(async () => {
//   // Clean up the database after each test
//   await WishlistItem.deleteMany({});
// });

// afterAll(async () => {
//   // Disconnect from MongoDB after all tests are done
//   await mongoose.disconnect();
// });

test('should return wishlist items', async () => {
  // Add a test wishlist item to the database
  await WishlistItem.create({ name: 'Test Item', description: 'Test Description', price: 10.99 });

  // Send a GET request to fetch wishlist items
  const response = await request(app).get('/api/wishlists');

  // Assert that the response status is 200
  expect(response.status).toBe(200);
  
  // Assert that the response body is an array
  expect(Array.isArray(response.body)).toBe(true);

  // Assert that the response contains the test wishlist item
  expect(response.body.length).toBe(1);
  expect(response.body[0].name).toBe('Test Item');
  expect(response.body[0].description).toBe('Test Description');
  expect(response.body[0].price).toBe(10.99);
});

test('should create a new wishlist item', async () => {
  // Send a POST request to create a new wishlist item
  const response = await request(app)
    .post('/api/wishlists')
    .send({ name: 'New Item', description: 'New Description', price: 15.99 });

  // Assert that the response status is 201
  expect(response.status).toBe(201);

  // Assert that the response contains the newly created wishlist item
  expect(response.body.name).toBe('New Item');
  expect(response.body.description).toBe('New Description');
  expect(response.body.price).toBe(15.99);
});

test('should delete a wishlist item', async () => {
  // Add a test wishlist item to the database
  const newItem = await WishlistItem.create({ name: 'Item to Delete', description: 'Description to Delete', price: 20.99 });

  // Send a DELETE request to delete the test wishlist item
  const response = await request(app).delete(`/api/wishlists/${newItem._id}`);

  // Assert that the response status is 200
  expect(response.status).toBe(200);

  // Assert that the response body contains the success message
  expect(response.body.message).toBe('Wishlist item deleted successfully');

  // Assert that the wishlist item has been deleted from the database
  const deletedItem = await WishlistItem.findById(newItem._id);
  expect(deletedItem).toBeNull();
});

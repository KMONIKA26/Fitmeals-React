# FitMeals-React 🍽️

![Logo](https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png)

FitMeals is a full stack web application designed to help users find healthy meal plans and recipes. The application offers a wide variety of meal options tailored to different dietary needs and preferences. Users can browse, save, and customize meal plans to achieve their fitness goals.

## Features

- 📖 **Browse Recipes**: Discover a variety of healthy recipes based on different dietary needs.
- 💾 **Save Favorites**: Save your favorite recipes for easy access.
- 📅 **Meal Plans**: Create and customize meal plans to fit your dietary goals.
- 🛒 **Shopping List**: Generate a shopping list based on your selected recipes.
- 🔍 **Search**: Easily search for recipes by ingredients, diet type, or meal category.
- 👤 **User Authentication**: Register and login to access personalized features.

## Tech Stack

- **Front-end**: ReactJS
- **Back-end**: Node.js, Express
- **Database**: MongoDB

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/fitmeals.git
   cd fitmeals
   ```

2. **Install dependencies**:
   - For the server:
     ```bash
     cd server
     npm install
     ```

   - For the client:
     ```bash
     cd client
     npm install
     ```

3. **Set up environment variables**:
   - Create a `.env` file in the `server` directory with the following:
     ```plaintext
     PORT=5000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the application**:
   - For the server:
     ```bash
     cd server
     npm start
     ```

   - For the client:
     ```bash
     cd client
     npm start
     ```

## Usage

- Open your browser and go to `http://localhost:3000` to access the FitMeals application.
- Register or log in to start browsing recipes and creating meal plans.

## Contributing

We welcome contributions to FitMeals! If you have suggestions for new features, bug fixes, or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Enjoy your journey to a healthier lifestyle with FitMeals! 🍏🥗

Thank You.

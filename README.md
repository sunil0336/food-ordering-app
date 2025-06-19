# 🍔 Swiggy Clone - Food Ordering App

A Swiggy-inspired food ordering app built with React 18 and Parcel as the bundler, designed for fast performance and a seamless user experience.

🚀 Features

✅ Built with React 18 – Leverages concurrent rendering for better performance.

✅ Super-fast bundling with Parcel – Zero-config, lightning-fast builds.

✅ Swiggy-like UI & UX – Clean, intuitive, and user-friendly interface.

✅ Dynamic Restaurant Listings – Fetch and display real-time restaurant data.

✅ Smooth Cart Experience – Add, update, and remove items seamlessly.

✅ Optimized Performance – Efficient state management and component rendering.

🛠️ Tech Stack

    Frontend: React 18, React Hooks
    Bundler: Parcel
    State Management: Redux Toolkit 
    Routing: React Router
    Styling: CSS 
    Toast Notifications
    Font Awesome Icons

# 🔧 Installation & Setup

- Clone the repository

```sh
git clone https://github.com/sunil0336/food-ordering-app
cd food-ordering-app
```

- Install dependencies

```sh
 npm install
```

- Setup API

```sh
json-server --watch src/data/db.json --port 3001 (run the endpoint separetly)

http://localhost:3001/restaurants - API can be accessed here
```
- Run the development server

```sh
npm start
```

# Parcel Features
- Dev Build
- Local Server
- HMR
- File Watching Algo
- Caching - Builder faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- Also allows to host in HTTPs
- Tree Shaking
- Different Dev & Prod bundles

# Json server settings
- npm install -g json-server
- create db.json file
- json-server --watch src/data/db.json --port 3001 (run the endpoint separetly)
- http://localhost:3001/restaurants - can be accessed here

# Parcel clean
- rm -rf .parcel-cache

# Batch-8 Routing
- npm i react-router-dom . Use version 6+. 7+ is unstable at the time of recording.

# Redux
- Clicking on Add button will dispatch an action and call reducer.
- Which updates the slice of redux store.
- Cart component is subscribed to the store using a selector.
- Since the component is subscribed to store using a selector, cart will automoatically updated.

# Steps
- Install @redux/toolkit & react-redux
- Build our store
- Connect our atore to our app
- Slice (CartSlice)
- dispatch an action
- selector
- npm install redux-persist
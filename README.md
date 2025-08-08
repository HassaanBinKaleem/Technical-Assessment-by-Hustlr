## Run Locally

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

AI Feature Chosen:
I chose Option C – Recommendation System.
This feature suggests 3–5 products that are similar to the one the user is currently viewing.
It works by checking:

-The same product category
-A similar price range



Tools/Libraries Used:
-React.js – For building the user interface
-Bootstrap – For clean and responsive styling
-React Material UI Carousel – For displaying product images in a slider
-JavaScript (ES6) – For writing the app logic
-JSON – For storing the sample product data


Notable Assumptions:
-The product list is stored locally in a products.json file
-The recommendation logic is rule-based, not powered by a trained AI model
-Products are considered "similar" if they share the same category and their price is within ±20% of the selected product’s price.
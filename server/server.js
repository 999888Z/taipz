import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import connectDB from "./config/db.js";
import routes from './routes/index.js'


// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);





// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/upload", uploadRoutes);





if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}



const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${PORT}`
  )
);

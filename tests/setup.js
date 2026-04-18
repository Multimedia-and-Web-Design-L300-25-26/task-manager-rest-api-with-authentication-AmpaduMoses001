import { jest } from "@jest/globals";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../src/config/db.js";

jest.setTimeout(20000);

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
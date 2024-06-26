import mongoose, { Schema } from "mongoose";
import timestamp from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    collections: "users",
  },
);

UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongoose.model("User", UserSchema);
export const UserTC = composeWithMongoose(User);

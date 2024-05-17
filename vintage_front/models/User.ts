import mongoose from "mongoose";

// User interface to define the shape of a User document.
export interface IUser {
  name: string;
  email: string;
  image?: string;
  emailVerified?: Date;
}

// Mongoose schema definition for the User model.
const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: false,
    },
    emailVerified: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

// Model creation or retrieval if it already exists.
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

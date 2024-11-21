import { Schema, model } from 'mongoose';

//Never store unencrypted password. This is an exception cuz its my hackathon project and i dont have much time

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = model('User', userSchema);

export default User;
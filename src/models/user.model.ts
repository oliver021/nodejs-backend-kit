import { Document, Model, model, Schema } from 'mongoose'

// create a new mongoose schema for our user model
export interface IUserInfo{
  nickname: string
  username: string,
  stutusMsg?: string,
  avatarUrl?: string,
}

// create a interface for our user model
export interface IUser extends Document {
  nickname: string
  created?: Date,
  username: string,
  password: string,
  stutusMsg?: string,
  avatarUrl?: string,
  status?: string,
  contacts?: string[]
}

// create schema for our user model
// specify the properties of our user model
export let UserSchema: Schema = new Schema({
  nickname: {
    type: Schema.Types.String,
    required: true,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatarUrl: {
    type: Schema.Types.String,
    default: "/img/default.png"
  },
  status:{
    type: "string",
    enum: ["online", "bussy", "offline"],
    default: "offline"
  },
  created: {
    type: Schema.Types.String,
    default: Date.now(),
  }
})

export const User: Model<IUser> = model<IUser>(
  'User',
  UserSchema,
)

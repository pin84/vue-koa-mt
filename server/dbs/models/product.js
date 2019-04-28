import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Product = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  add: {
    type: String,
    require: true
  },
  wifi: {
    type: Boolean,
    require: true
  },
  parking: {
    type: Boolean,
    require: true
  },
  openTime: {
    type: String,
    require: true
  },
  showImg: {
    type: Array,
    require: true
  },
  tel: {
    type: Number,
    require: true
  },
  rate: {
    type: Number,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
})

export default mongoose.model('Product', Product)

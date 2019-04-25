import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Abc = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: String,
    require: true
  }

})

export default mongoose.model('categroy', Abc)

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  toJSON: {
    virtuals: true,
  },
});

// campo que não existe no banco. Ele é computado pelo javascript quando algo é solicitado
SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
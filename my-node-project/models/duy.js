const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Sửa kiểu từ 'number' thành 'Number'
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);

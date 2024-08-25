const express = require('express');
const router = express.Router();
const Duy = require('../models/duy'); // Đảm bảo import đúng mô-đun

// GET tất cả tài liệu
router.get('/', async (req, res) => {
    try {
        const books = await Duy.find(); // Thay thế Book bằng Duy
        res.json(books);
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

// GET tài liệu theo ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Duy.findById(req.params.id); // Thay thế Book bằng Duy
        
        if (!book) {
            return res.status(404).send('Tài liệu không tìm thấy');
        }
        
        res.json(book);
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

// POST tạo tài liệu mới
router.post('/', async (req, res) => {
    const book = new Duy({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    });

    try {
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

// PATCH cập nhật một phần tài liệu
router.patch('/:id', async (req, res) => {
    try {
        const book = await Duy.findById(req.params.id); // Thay thế Book bằng Duy

        if (!book) {
            return res.status(404).send('Tài liệu không tìm thấy');
        }

        if (req.body.sub) {
            book.sub = req.body.sub;
        }

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

// PUT cập nhật toàn bộ tài liệu
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Duy.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Thay thế Book bằng Duy

        if (!updatedBook) {
            return res.status(404).send('Tài liệu không tìm thấy');
        }

        res.json(updatedBook);
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

// DELETE xóa tài liệu theo ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await Duy.findByIdAndDelete(req.params.id); // Thay thế Book bằng Duy

        if (!result) {
            return res.status(404).send('Tài liệu không tìm thấy');
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).send('Lỗi: ' + err.message);
    }
});

module.exports = router;

import mongoose from "mongoose";
const mongoose_delete = require('mongoose-delete');

const productSchema = new mongoose.Schema({
    IDstock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
    IDSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    IDCategory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    type: { type: String, required: true, length: 20 },
    nameProduct: { type: String, required: true, length: 20 },
    pictureLinks: [{ type: String }],
    description: { type: String, required: true },
    color: [{ type: String, required: true, length: 20 }],
    size: [{ type: String, required: true, length: 20 }],
    price: { type: String, required: true },
}, { timestamps: true });

productSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Product = mongoose.model('Product', productSchema);
export default Product;
    
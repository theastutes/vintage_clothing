import Product from "../models/products.js"

export const addProd = async (req, res) => {
    try {
        const { title, details, images, mrp, sp, category, sizes } = req.body;

        if (!title || !details || !images || !mrp || !sp || !category || !sizes) {
            res.status(500).json("field should not be empty!");
        }
        else {
            const newProduct = new Product({
                title, details, images, mrp, sp, category, sizes
            });
            await newProduct.save();
            res.status(201).json(newProduct);
        }
    }
    catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}



export const updateprod = async (req, res) => {

    const prod = req.body;
    console.log(prod);
    if (!prod.title || !prod.details || !prod.images || !prod.mrp || !prod.sp || !prod.category || !prod.sizes) {
        res.status(500).json("field should not be empty!");
    }
    const product = await Product.findOneAndUpdate({ _id: prod._id }, prod)
    //const productUpdated = await Product.updateOne(prod);
    res.status(201).json("Update Successfull!!");
}

export const delProd = async (req, res) => {
    const { id } = req.body;
    try {
        const delpro = await Product.findByIdAndDelete(id);
        res.status(201).json(delpro);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getProdById = async (req, res) => {
    try {

        const { id } = req.body;
        //console.log(`ID      : ${id}`);
        const product = await Product.findById(id);
        //console.log("product : ", product);
        if (!product) {
            return res.status(404).json({ error: "Product don't exist" })
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}


export const getProd = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(201).json(products);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const searchProd = async (req, res) => {
    try {
        
        const prod = req.body;
        const compData = prod.data;
        const products = await Product.find({title:{$regex:compData,$options:'i'}});
        console.log(products);
        return res.status(201).json(products);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


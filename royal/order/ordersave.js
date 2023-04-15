import order from './orderSchima.js';
export const createorder = async (req, res) => {
    const neworder = new order(req.body);

    try{
        const savedorder = await neworder.save();

        res.status(200).json({
            success: true,
            message: 'successfully created',
            data: savedorder,
        })
    } catch (err) {
        res
        .status(500)
        .json({success: false, message:'failed to create.try again'});
    }
};
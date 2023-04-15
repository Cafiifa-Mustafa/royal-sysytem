import order from './orderSchima.js';
export const deleteorder = async (req, res) => {
    const id = req.params.id;
    try{
        await order.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'seccessfully deleted',
        });
    }catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to delete',
        });
    }
};
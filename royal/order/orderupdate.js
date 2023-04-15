import order from './orderSchima.js';
export const updateorder = async (req, res) => {
const id = req.params.id;
try{
const updateorder = await order.findByIdAndUpdate(
    id,
    {
        $set: req.body,
    },
    {new: true}
);
res.status(200).json({
    success: true,
    message: 'successfully updated',
    data: updateorder,
});
} catch (err) {
    res.status(500).json({
        success: false,
        message: 'failed to update',
    });
}
};
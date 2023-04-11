import User from './Userschima.js';
export const updateUser = async (req, res) => {
const id = req.params.id;
try{
const updateUser = await User.findByIdAndUpdate(
    id,
    {
        $set: req.body,
    },
    {new: true}
);
res.status(200).json({
    success: true,
    message: 'successfully updated',
    data: updatedUser,
});
} catch (err) {
    res.status(500).json({
        success: false,
        message: 'failed to update',
    });
}
};
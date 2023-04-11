import User from './orderschima.js';
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: 'successfully created',
            data: savedUser,
        })
    } catch (err) {
        res
        .status(500)
        .json({success: false, message:'failed to create.try again'});
    }
};
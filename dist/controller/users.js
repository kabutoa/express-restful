import { deleteUserById, getUserById, getUsers } from "models/user.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserById(id);
        return res.json(deletedUser);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const updateUser = async (req, res) => {
    try {
        const { username } = req.body;
        const { id } = req.params;
        if (!username) {
            return res.sendStatus(400);
        }
        const user = await getUserById(id);
        user.username = username;
        await user.save();
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
//# sourceMappingURL=users.js.map
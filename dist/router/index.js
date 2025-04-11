import express from "express";
import auth from "./auth.js";
import users from "./users.js";
const router = express.Router();
export default () => {
    auth(router);
    users(router);
    return router;
};
//# sourceMappingURL=index.js.map
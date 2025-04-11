import { login, register } from "../controller/auth.js";
export default (router) => {
    router.post("/auth/register", register);
    router.post("/auth/login", login);
};
//# sourceMappingURL=auth.js.map
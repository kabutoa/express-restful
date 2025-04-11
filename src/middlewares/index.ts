import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "models/user.js";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["express_restful_auth_session"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }
    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) {
      return res.sendStatus(403);
    }
    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    console.log(req);
    const currentUserId = get(req, "identity._id") as string;
    if (!currentUserId) {
      console.log(11);
      return res.sendStatus(403);
    }
    if (currentUserId.toString() !== id) {
      console.log(22);
      return res.sendStatus(403);
    }
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

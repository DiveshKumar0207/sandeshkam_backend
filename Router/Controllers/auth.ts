import { Request, Response } from "express";

const authController = {
  //*Route-1 route post "/api/login"
  login: async (req: Request, res: Response) => {
    try {
      res.json({ message: "succeess" });
    } catch (error) {
      res.send(error);
    }
  },

  signup: async (req: Request, res: Response) => {
    res.send("signup api");
  },
};

export default authController;

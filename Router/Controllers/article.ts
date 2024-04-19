import { Response, Request } from "express";

const article = {
  postArticle: async (req: Request, res: Response) => {
    res.send("post articl");
  },

  updateArticle: async (req: Request, res: Response) => {
    res.send("updateArticle");
  },
};

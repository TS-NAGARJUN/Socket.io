import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatsController {
  static async index(req: Request, res: Response) {
    const { groupId } = req.params;
    const chats = await prisma.groupUsers.findMany({
      where: {
        group_id: groupId,
      },
    });
    return res.json({ data: chats });
  }
}

export default ChatsController;
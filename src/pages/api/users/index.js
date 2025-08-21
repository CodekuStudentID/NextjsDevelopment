import prisma from "../../../../lib/prisma";

export default async function handler (req, res) {
    if (req.method === "GET") {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    }
}
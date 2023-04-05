import { prisma } from "../../../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const dbResponse = await prisma.encounter.findMany();
      const encounters = dbResponse.map((encounter) => {
        return {
          type: encounter.type,
          infomation: encounter.information,
        };
      });

      res.status(201).json(encounters);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

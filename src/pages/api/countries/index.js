import { prisma } from "../../../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const dbResponse = await prisma.country.findMany();

      const countries = dbResponse.map((country) => {
        return {
          country: country.country,
          code: country.code,
        };
      });
      res.status(201).json(countries);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

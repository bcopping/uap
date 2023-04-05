import { prisma } from "../../../../server/db/client";

export default async function handler({ query: { id } }, res) {
  const result = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (res.status(200)) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `article with the id of ${id} not found` });
  }
}

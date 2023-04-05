import { prisma } from "../../../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      const posts = await prisma.post.findMany();
      res.status(201).json(posts);
      break;
    case "POST":
      // get the title and content from the request body
      const { title, strapline, body, author } = req.body;
      // use prisma to create a new post using that data
      const post = await prisma.post.create({
        data: {
          title,
          strapline,
          body,
          author,
        },
      });
      // send the post object back to the client
      res.status(201).json(post);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

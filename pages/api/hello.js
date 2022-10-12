// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await resp.json()
    res.status(200).send(posts)
  }
  res.end()
}

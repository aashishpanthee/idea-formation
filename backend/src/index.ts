import express from "express";
const expressApp = express();

  const ideas = [
    {
      id: 1,
      title: 'Idea 1',
      description: 'Idea 1 description',
    },
    {
      id: 2,
      title: 'Idea 2',
      description: 'Idea 2 description',
    },
    {
      id: 3,
      title: 'Idea 3',
      description: 'Idea 3 description',
    },
  ]

expressApp.get("/ping", (req, res) => {
  res.send('pong')
})

expressApp.get('/ideas', (req, res) => {
  res.send(ideas)
})

expressApp.listen(3000, () => {
  console.info("Server is listening on port 3000")
})
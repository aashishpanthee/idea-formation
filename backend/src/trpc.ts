import { initTRPC } from '@trpc/server'

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

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter

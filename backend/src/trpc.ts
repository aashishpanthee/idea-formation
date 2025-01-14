import { initTRPC } from '@trpc/server'
import _ from 'lodash'

const ideas = _.times(50, (i) => ({
  id: `${i}`,
  title: `Idea ${i}`,
  description: `Idea ${i} description`,
  text: _.times(50, (j) => `Idea ${i} text ${j}`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ['id', 'title', 'description'])) }
  }),
})

export type TrpcRouter = typeof trpcRouter

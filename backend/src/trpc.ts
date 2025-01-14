import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const ideas = _.times(50, (i) => ({
  id: `${i}`,
  title: `Idea ${i}`,
  description: `Idea ${i} description`,
  text: _.times(50, (j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join('\n'),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ['id', 'title', 'description'])) }
  }),
  getIdea: trpc.procedure
    .input(
      z.object({
        ideaId: z.string(),
      })
    )
    .query(({ input }) => {
      const idea = ideas.find((idea) => idea.id === input.ideaId)
      return { idea: idea || null }
    }),
})

export type TrpcRouter = typeof trpcRouter

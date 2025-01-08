import { createTRPCReact } from '@trpc/react-query';
import type {TrpcRouter} from "@ideaformation/backend/src/trpc"
const trpc = createTRPCReact<TrpcRouter>();

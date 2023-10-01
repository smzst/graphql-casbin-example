import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { can } from "./authorizer";

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      return {
        userRole: req.headers["user-role"],
        can,
      };
    },
  });
  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
`);
};

startApolloServer();

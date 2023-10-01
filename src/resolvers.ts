import type { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    getSomethingForAdmin: async (_parent, _args, ctx) => {
      const permitted = await ctx.can(ctx.userRole, "data", "read");
      if (!permitted) {
        throw new Error("Permission denied");
      }

      return "Hello, world!";
    },
  },
};

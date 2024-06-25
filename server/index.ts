import { publicProcedure, router, createCallerFactory } from "./trpc";

interface Article {
  id: string;
  title: string;
  name: string;
}

export const appRouter = router({
  articles: router({
    list: publicProcedure.query(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return [
        {
          id: "id1",
          title:
            "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
          name: "sh-okada",
        },
        {
          id: "id2",
          title:
            "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
          name: "sh-okada",
        },
        {
          id: "id3",
          title:
            "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
          name: "sh-okada",
        },
        {
          id: "id4",
          title:
            "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
          name: "sh-okada",
        },
        {
          id: "id5",
          title:
            "記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル",
          name: "sh-okada",
        },
      ] as Article[];
    }),
  }),
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

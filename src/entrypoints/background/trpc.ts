import { initTRPC } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import mitt from "mitt";
import z from "zod";

type Events = Record<string, unknown> & {
  greeting: string;
  updateTimestamp: number;
};

const ee = mitt<Events>();

const t = initTRPC.create({
  allowOutsideOfServer: true,
  isServer: false,
});

export const router = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() })).query((req) => {
    const { input } = req;
    ee.emit("greeting", `Greeted ${input.name}`);

    return `Hello ${input.name}` as const;
  }),
  onGreeting: t.procedure.subscription(() => {
    return observable((emit) => {
      function onGreet(hello: string) {
        emit.next(hello);
      }

      ee.on("greeting", onGreet);

      return () => {
        ee.off("greeting", onGreet);
      };
    });
  }),
});

export type AppRouter = typeof router;

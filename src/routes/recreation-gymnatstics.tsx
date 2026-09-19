import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/recreation-gymnatstics")({
  beforeLoad: () => {
    throw redirect({ to: "/recreational-gymnastics", replace: true });
  },
});

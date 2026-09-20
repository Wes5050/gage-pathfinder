import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tumbling-and-trampoline")({
  beforeLoad: () => {
    throw redirect({ to: "/tumbling", replace: true });
  },
});

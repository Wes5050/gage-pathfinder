import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/book-a-trial_/confirmation")({
  head: () => ({ meta: [{ title: "Registration Moved | GAGE Center" }, { name: "description", content: "GAGE trial registration is now completed through the live class portal." }, { property: "og:title", content: "Registration Moved | GAGE Center" }, { property: "og:description", content: "Continue to the live GAGE class portal." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "robots", content: "noindex" }] }),
  component: () => <Navigate to="/book-a-trial" replace />,
});
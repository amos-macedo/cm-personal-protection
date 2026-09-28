import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// Tela em branco — ponto de partida do projeto.
function Index() {
  return <div className="min-h-screen bg-background" />;
}

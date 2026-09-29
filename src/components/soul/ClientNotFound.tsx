import { Link } from "@tanstack/react-router";
import { clients } from "@/data/clients";

export function ClientNotFound() {
  const availableClients = Object.values(clients);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand px-6 py-20 text-center selection:bg-petrol selection:text-bone">
      <div className="mx-auto max-w-lg rounded-2xl border border-ink/10 bg-bone p-10 shadow-lg">
        <span className="eyebrow text-sage-deep">Erro 404</span>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Clínica não encontrada
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-graphite">
          O endereço acessado não corresponde a nenhuma clínica cadastrada na plataforma.
          Verifique o link ou escolha uma das clínicas disponíveis abaixo:
        </p>

        <div className="mt-8 space-y-2.5">
          <p className="text-xs uppercase tracking-wider text-graphite/70 font-semibold mb-3">
            Clínicas Disponíveis:
          </p>
          <div className="flex flex-col gap-2">
            {availableClients.map((c) => (
              <Link
                key={c.slug}
                to="/$slug"
                params={{ slug: c.slug }}
                className="flex items-center justify-between rounded-xl border border-ink/8 bg-sand px-4 py-3 text-left transition-colors hover:border-petrol/30 hover:bg-sand/80"
              >
                <div>
                  <p className="font-display text-lg text-ink font-medium leading-tight">
                    {c.name}
                  </p>
                  <p className="text-xs text-graphite">{c.address.cityState}</p>
                </div>
                <span className="text-xs font-medium text-petrol tracking-wider uppercase">
                  Acessar →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-petrol px-6 py-2.5 text-xs font-semibold tracking-wider text-bone uppercase transition-colors hover:bg-petrol/90"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}

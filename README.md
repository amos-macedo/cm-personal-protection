# CM Personal Protection

Site institucional da **CM Personal Protection®** — segurança pessoal e privada para grandes empresas, personalidades, artistas e grandes eventos.

Página única (TanStack Start + React + Tailwind v4), sem lógica multi-cliente: todo o conteúdo é fixo e vem da apresentação oficial da marca (`docs/brand/cm-personal-protection-apresentacao.pdf`, fora do site publicado).

## Onde editar

- **Textos, serviços, FAQ, clientes e imagens:** `src/content/site.ts`
- **Canais de contato (WhatsApp, telefone, e-mail, Instagram):** objeto `contact` em `src/content/site.ts`. Canais vazios não aparecem; com `whatsapp` preenchido, os CTAs passam a abrir o WhatsApp e o botão flutuante é exibido.
- **Cores e tipografia:** `src/styles.css`
- **Seções:** `src/components/site/`

## Desenvolvimento

```sh
npm i
npm run dev
```

Este projeto está conectado ao [Lovable](https://lovable.dev/projects/be7617c6-6ec5-4222-af4c-d933136596e2): commits enviados à branch conectada sincronizam com o editor.

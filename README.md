# C&C Turismo — Páginas Legais

Site estático com os documentos legais da **C&C Turismo**, construído com
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Páginas

| Rota | Conteúdo |
| :--- | :--- |
| `/` | Central de documentos legais |
| `/termos-de-uso/` | Termos de Uso |
| `/privacidade/` | Política de Privacidade (LGPD) |
| `/cookies/` | Política de Cookies |

O conteúdo fica em `src/content/docs/`, um arquivo Markdown por página. O título
exibido na navbar e os itens do menu lateral são configurados em
`astro.config.mjs`.

## Pendências de preenchimento

Os textos contêm marcadores entre colchetes que precisam ser substituídos pelos
dados oficiais da empresa antes da publicação:

- `[endereço a preencher]`
- `[nome do encarregado a preencher]`

## Comandos

| Comando | Ação |
| :--- | :--- |
| `npm install` | Instala as dependências |
| `npm run dev` | Sobe o servidor local em `localhost:4321` |
| `npm run build` | Gera o site em `./dist/` |
| `npm run preview` | Pré-visualiza o build localmente |

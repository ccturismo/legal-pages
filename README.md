# C&C Turismo

Site institucional e documentos legais da **C&C Turismo**, em
[Astro](https://astro.build). Publicado em
[ccturismo.sjc.br](https://ccturismo.sjc.br) via GitHub Pages.

## Páginas

| Rota | Conteúdo |
| :--- | :--- |
| `/` | Home institucional |
| `/termos-de-uso/` | Termos de Uso |
| `/privacidade/` | Política de Privacidade (LGPD) |
| `/cookies/` | Política de Cookies |

## Estrutura

```
src/
├── layouts/
│   ├── Base.astro      # casca comum: head, cabeçalho, rodapé
│   └── Legal.astro     # layout dos documentos legais
├── pages/
│   ├── index.astro     # home
│   ├── termos-de-uso.md
│   ├── privacidade.md
│   └── cookies.md
└── styles/
    └── global.css      # estilos e variáveis da marca
```

Os documentos legais são Markdown comum, com `layout: ../layouts/Legal.astro`
no frontmatter. O nome do arquivo define a URL.

## Identidade visual

O site segue o **Design System v1** da C&C Turismo
(`brand/CC-Turismo-Design-System.pdf`). Os tokens de cor estão em
`src/styles/global.css`, no bloco `:root`, com o tema escuro logo abaixo —
ambos transcritos da tabela de tokens do documento.

As cinco cores oficiais: azul `#186AB4`, verde `#01A54F`, azul claro `#9FC5DA`,
branco `#FFFFFF` e texto escuro `#12324A`. Regras aplicadas:

- proporção branco 60% / azul 25% / verde 10% — por isso o hero é claro
- verde nunca em texto corrido sobre branco (3,2:1); texto verde usa
  `--verde-texto` `#00723A`
- azul claro é decorativo, nunca cor de texto
- logo com no mínimo 120px de largura, só sobre fundo claro

### Fontes

Montserrat (títulos) e Nunito Sans (texto), conforme o design system, mas
**auto-hospedadas via `@fontsource`** em vez do `<link>` do Google Fonts que
consta no PDF. O motivo: o `<link>` faz o navegador do visitante requisitar
`fonts.googleapis.com`, o que enviaria o IP dele a um terceiro e teria de ser
declarado na Política de Cookies. Num site cujo conteúdo é justamente a
política de privacidade, não compensa. O resultado visual é o mesmo e o site
não faz nenhuma requisição externa.

### Logo

`src/assets/cc-turismo-logo.png` — versão de fundo branco, já aparada e
otimizada pelo Astro (519 KB no fonte, ~6 KB entregues em WebP). Os originais
recebidos ficam em `brand/`.

Como o arquivo tem fundo branco, o logo só aparece sobre superfícies claras. No
tema escuro ele recebe padding e cantos arredondados, virando a "placa branca"
que o design system exige sobre fundos escuros.

## Pendências de preenchimento

- Versão vetorial (SVG) e monocromática do logo — o próprio design system as
  lista como pendentes junto ao fornecedor
- Marca quadrada para favicon: hoje é o logo horizontal encaixado num quadrado,
  o que fica apertado em 32px
- Endereço completo da sede (hoje consta apenas "São José dos Campos/SP")
- `[nome do encarregado a preencher]` em `src/pages/privacidade.md`
- Telefone de atendimento, se for divulgado no site

## Publicação

O deploy é automático: todo push na `main` dispara
`.github/workflows/deploy.yml`, que builda e publica no GitHub Pages. O domínio
é fixado por `public/CNAME`.

## Comandos

| Comando | Ação |
| :--- | :--- |
| `npm install` | Instala as dependências |
| `npm run dev` | Sobe o servidor local em `localhost:4321` |
| `npm run build` | Gera o site em `./dist/` |
| `npm run preview` | Pré-visualiza o build localmente |

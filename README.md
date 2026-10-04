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

As cores da marca estão centralizadas no bloco `:root` de
`src/styles/global.css`. Para aplicar a paleta oficial, troque os valores
daquele bloco — o restante do projeto usa as variáveis. **Os valores atuais são
provisórios**, à espera do material da marca.

Para incluir o logo: coloque o arquivo em `public/` e troque o texto dentro de
`<a class="marca">` em `src/layouts/Base.astro` por uma `<img>`. O CSS de
`.marca img` já cuida do dimensionamento.

## Pendências de preenchimento

- Logo e paleta oficial da marca
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

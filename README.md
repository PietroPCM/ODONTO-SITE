# Aline Sanfelice — Odontopediatria Avançada

Site da Dra. Aline Sanfelice, odontopediatra em Cascavel, PR.
HTML, CSS e JavaScript puros: sem framework, sem build, sem dependências.

## Rodar localmente

```bash
python3 -m http.server 5500
```

Acesse `http://localhost:5500`. Os módulos JS (`type="module"`) exigem servidor; abrir o arquivo direto no navegador não funciona.

## Publicação

Vercel (o `vercel.json` já define cache para imagens, fontes, CSS e JS), Netlify, GitHub Pages ou qualquer hospedagem estática.

## Antes de publicar

- [ ] **Domínio:** hoje é `site-dra-aline.vercel.app`. Ao trocar, atualize canonical, `og:url`, `og:image`, JSON-LD (`index.html`), `sitemap.xml` e `robots.txt`.
- [ ] **Avaliações:** nota e número (5,0 · 38) foram conferidos no Google Maps em 16/10/2026. Atualize os dois pontos em `index.html` (hero e seção "Famílias") quando mudarem.
- [ ] **Logo oficial em vetor:** a marca no cabeçalho e as cores foram reconstruídas a partir de fotos do letreiro. Com o arquivo original, ajuste os HEX em `css/tokens.css` e o SVG da marca.
- [ ] **Equipe:** confirmar nomes completos e áreas dos colegas (seção "No mesmo consultório").

## Onde editar

| O quê | Onde |
|---|---|
| Textos, avaliações, endereço, horário | `index.html` (todo o conteúdo está no HTML, legível por buscadores) |
| WhatsApp | links `https://wa.me/5545984333443?text=…` em `index.html`; cada seção tem uma mensagem pré-preenchida própria |
| Cores, fontes, espaçamentos | `css/tokens.css` |
| Layout das seções | `css/sections.css` |
| Componentes base (botões, links, foco) | `css/base.css` |

## Estrutura

```
index.html
css/
  tokens.css      paleta medida da marca, escala tipográfica, espaços
  base.css        reset, tipografia, botões, links, estados do navegador
  sections.css    seções (mobile first; 600px e 960px)
js/
  main.js         inicialização
  menu.js         menu do celular, cabeçalho, seção ativa
  journey.js      arco-íris que se completa nas 5 etapas da consulta
  concerns.js     dúvidas dos pais (acordeão no celular, painel no desktop)
  dock.js         barra fixa de WhatsApp no celular
  map.js          mapa do Google carregado só sob demanda
assets/
  fonts/          Young Serif e Figtree (woff2, latin), servidas localmente
  photos/         fotos otimizadas (procedência embutida em cada arquivo)
  og/             imagem de compartilhamento 1200×630
favicon/
PRODUCT.md        verdade do produto (público, provas, o que não pode ser inventado)
```

## Paleta

| Papel | HEX | Origem |
|---|---|---|
| Fundo | `#F9F8FB` | parede branca do letreiro |
| Azul Aline (assinatura) | `#0F4E70` | tipografia dos posts do Instagram |
| Grafite (texto) | `#2B2D3A` | faixa da fachada |
| Lilás (detalhes) | `#C3BDE3` | letras "Aline Sanfelice" do letreiro |
| Arco-íris (só acentos finos) | `#F2BFB3` `#EFDCAE` `#A8D5BF` `#ACD5DC` | faixas do logo |

## Aviso

Conteúdo informativo; não substitui avaliação odontológica individual.
CRO-PR 22438 · Responsável técnica: Dra. Aline Sanfelice.

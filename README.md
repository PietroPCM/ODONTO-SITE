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
- [ ] **Logo em vetor (SVG/PDF):** o logo oficial está em PNG (477px). Com o vetor, troque `assets/brand/logo-aline-sanfelice.png` por uma versão nítida em qualquer tamanho.
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
| Azul Aline (cor forte: títulos, botões) | `#0F4E70` | tipografia dos posts do Instagram |
| Texto | `#1F2A37` | |
| Rosa · Amarelo · Verde · Azul · Lilás | `#FBB5B7` `#FEF4AE` `#A9D3B7` `#ADD8ED` `#E6CBFC` | faixas do logo oficial (`assets/brand/logo-aline-sanfelice.png`) |
| Dente | `#FDD6E2` | logo oficial |
| Campos claros | `#FFF1F1` `#FFFBE8` `#EDF7F0` `#EEF7FC` `#F7F0FE` | versões claras das faixas, usadas como fundo de cartões e seções |

Fontes: Bricolage Grotesque (títulos) e Figtree (texto), servidas de `assets/fonts`.

## Aviso

Conteúdo informativo; não substitui avaliação odontológica individual.
CRO-PR 22438 · Responsável técnica: Dra. Aline Sanfelice.

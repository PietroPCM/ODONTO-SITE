# Aline Sanfelice — Odontopediatria Avançada

Site institucional demonstrativo da Dra. Aline Sanfelice, especialista em odontopediatria em Cascavel — PR.

Construído em HTML5, CSS3 e JavaScript puro (sem frameworks, sem build).

---

## Como rodar localmente

A partir da pasta do projeto, abra um servidor estático simples:

```bash
python -m http.server 5500
```

ou:

```bash
npx serve .
```

Acesse `http://localhost:5500` (ou a porta indicada).

> Os módulos JavaScript (`import`/`export`) exigem servidor — abrir o `index.html` diretamente pelo navegador não funciona.

---

## Publicação

- **Vercel / Netlify**: arraste a pasta no painel ou conecte o repositório. O `vercel.json` já está configurado.
- **GitHub Pages**: publique o branch `main` na raiz.
- **Hospedagem tradicional**: envie todos os arquivos para a raiz pública (`public_html` ou similar) via FTP.

---

## Como personalizar

Toda informação variável fica centralizada em **dois arquivos**:

| Arquivo | O que contém |
|---|---|
| `js/config.js` | WhatsApp, telefone, e-mail, endereço, horários, redes sociais, domínio. |
| `js/data.js` | Equipe, especialidades, etapas do atendimento, FAQ, dúvidas dos pais. |

### 1. WhatsApp e telefone

Em `js/config.js`, preencha:

```js
whatsapp: "5545984333443",       // somente dígitos com DDI 55 + DDD
phone:    "(45) 98433-3443",
```

Enquanto `whatsapp` estiver vazio, o botão flutuante e o formulário ficam desabilitados — nenhum link quebrado é exibido.

### 2. E-mail, endereço e horários

Em `js/config.js`:

```js
email: "contato@exemplo.com.br",
address: "R. Fortaleza, 1850 - Centro, Cascavel - PR",
googleMapsUrl: "https://maps.google.com/...",
openingHours: "Seg a Sex • 08h às 18h",
```

Campos vazios são automaticamente ocultados na página de contato e no rodapé.

### 3. Trocar imagens

Substitua os arquivos em `assets/images/` mantendo os mesmos nomes:

| Nome | Onde aparece | Sugestão |
|---|---|---|
| `aline-perfil.svg` | Hero principal | foto de meio corpo da Dra. Aline |
| `aline-clinica.svg` | Seção "Sobre" | foto da Dra. em atendimento |
| `aline-brinquedos.svg` | Seção "Ambiente" | foto com brinquedos odontológicos |
| `clinica-fachada.svg` | Seção "Ambiente" | foto da fachada |

Para imagens reais, prefira **WebP ou JPG otimizado** (até ~250 KB). Se trocar a extensão, atualize a referência em:
- `index.html` (tags `<img>` e meta tags Open Graph)
- `js/data.js` (campo `image` da equipe)

### 4. Adicionar profissional à equipe

Em `js/data.js`, adicione um objeto em `teamMembers`:

```js
{
  name: "Dra. Nome Sobrenome",
  role: "Área de atuação",
  description: "Texto curto descritivo.",
  image: "assets/images/foto-profissional.webp" // ou "" para usar as iniciais
}
```

### 5. Editar especialidades e FAQ

Em `js/data.js`, os arrays `specialties`, `faqItems` e `parentConcerns` aceitam quantos itens forem necessários.

### 6. Cores e tipografia

Tudo controlado por variáveis CSS em `css/variables.css`. Para trocar a paleta inteira, basta alterar os tokens `--color-*`.

### 7. Domínio e SEO

Em `sitemap.xml`, substitua `SEU-DOMINIO-AQUI` pela URL final. Em `js/config.js`, preencha `domain`.

---

## Dados necessários antes da publicação

- [ ] WhatsApp (formato: `5545XXXXXXXXX`)
- [ ] Telefone fixo (se houver)
- [ ] Endereço completo
- [ ] Link do Google Maps
- [ ] E-mail
- [ ] Horários de atendimento
- [ ] Nome oficial da clínica (razão social, se aplicável)
- [ ] Domínio definitivo
- [ ] Fotografias individuais dos demais profissionais
- [ ] Nomes completos dos demais profissionais
- [ ] CRO dos demais profissionais
- [ ] Confirmação das especialidades por profissional
- [ ] Política de privacidade (texto)
- [ ] Logo em alta resolução (PNG ou SVG, fundo transparente)

---

## Estrutura

```
.
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
├── js/
│   ├── config.js     ← informações de contato
│   ├── data.js       ← equipe, FAQ, especialidades
│   ├── menu.js
│   ├── animations.js
│   ├── faq.js
│   ├── contact.js
│   └── main.js
├── assets/images/
├── favicon/
├── robots.txt
├── sitemap.xml
└── vercel.json
```

---

## Tecnologia

- HTML5 semântico
- CSS3 com Custom Properties, Grid e Flexbox
- JavaScript ES Modules (sem dependências externas)
- Tipografia Google Fonts (Cormorant Garamond + Manrope)
- Acessibilidade: skip link, ARIA, navegação por teclado, `prefers-reduced-motion`
- Responsivo de 320 px a 1920 px+

---

## Aviso

Conteúdo de caráter informativo. As recomendações apresentadas não substituem avaliação odontológica individual realizada por profissional habilitado.

CRO-PR 22438 • Responsável técnica: Dra. Aline Sanfelice

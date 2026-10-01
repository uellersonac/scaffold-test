# Design System — Ollama-inspired Minimal UI

## 1. Visão geral

Este Design System define uma linguagem visual minimalista inspirada na interface do Ollama, caracterizada por:

* Minimalismo funcional
* Predominância de preto, branco e tons neutros
* Ausência quase total de cores decorativas
* Hierarquia construída principalmente com tipografia
* Bordas sutis em vez de sombras pesadas
* Cantos levemente arredondados
* Espaçamento generoso
* Componentes compactos
* Links e ações predominantemente tipográficos
* Alto contraste para ações primárias
* Interfaces com aparência de produto técnico/profissional
* Responsividade baseada em composição simples, não em layouts excessivamente ornamentados

O objetivo não é copiar uma página específica, mas reproduzir seus princípios visuais.

---

# 2. Princípios de design

## 2.1 Minimalismo estrutural

A interface deve utilizar o mínimo necessário de elementos visuais.

Preferências:

1. Tipografia antes de decoração
2. Espaçamento antes de divisórias
3. Bordas antes de sombras
4. Preto/branco antes de cores
5. Ícones simples antes de ilustrações
6. Texto e alinhamento para criar hierarquia

Evitar:

* Gradientes decorativos
* Sombras grandes
* Cards excessivamente destacados
* Backgrounds coloridos
* Muitos elementos simultaneamente enfatizados
* Ícones grandes sem função
* Bordas excessivamente fortes

---

## 2.2 Monocromia como identidade

A paleta é essencialmente monocromática.

O sistema trabalha com:

```text
Black
White
Neutral-50
Neutral-100
Neutral-200
Neutral-300
Neutral-400
Neutral-500
Neutral-600
Neutral-700
Neutral-800
Neutral-900
Neutral-950
```

A cor não é utilizada para criar personalidade visual por meio de múltiplos tons de destaque.

A personalidade vem de:

* contraste
* tipografia
* espaçamento
* proporção
* composição

---

# 3. Paleta de cores

## 3.1 Base

| Token         | Valor aproximado | Uso                              |
| ------------- | ---------------: | -------------------------------- |
| `color.black` |        `#000000` | Ações primárias, texto principal |
| `color.white` |        `#FFFFFF` | Background principal             |
| `neutral-50`  |        `#FAFAFA` | Background extremamente sutil    |
| `neutral-100` |        `#F5F5F5` | Backgrounds secundários          |
| `neutral-200` |        `#E5E5E5` | Borders                          |
| `neutral-300` |        `#D4D4D4` | Borders/interações               |
| `neutral-400` |        `#A3A3A3` | Ícones/elementos secundários     |
| `neutral-500` |        `#737373` | Texto secundário                 |
| `neutral-600` |        `#525252` | Texto secundário forte           |
| `neutral-700` |        `#404040` | Texto intermediário              |
| `neutral-800` |        `#262626` | Texto escuro                     |
| `neutral-900` |        `#171717` | Texto principal                  |
| `neutral-950` |        `#0A0A0A` | Elementos de alto contraste      |

Os valores seguem a escala Tailwind Neutral observada no código.

---

# 4. Semântica das cores

## Primary

```css
--color-primary: #000000;
--color-primary-hover: #262626;
--color-primary-foreground: #FFFFFF;
```

Uso:

* CTA principal
* botão de confirmação
* elementos selecionados
* progress bars
* ações de alta prioridade

---

## Surface

```css
--color-background: #FFFFFF;
--color-surface: #FFFFFF;
--color-surface-subtle: #FAFAFA;
--color-surface-muted: #F5F5F5;
```

---

## Border

```css
--color-border-subtle: #F5F5F5;
--color-border: #E5E5E5;
--color-border-strong: #D4D4D4;
```

---

## Text

```css
--color-text-primary: #171717;
--color-text-secondary: #525252;
--color-text-muted: #737373;
--color-text-placeholder: #737373;
--color-text-disabled: #A3A3A3;
```

---

# 5. Tipografia

## 5.1 Família

O HTML não declara explicitamente uma família tipográfica própria. A interface utiliza a stack padrão do Tailwind/browser.

Portanto, o princípio deve ser:

> utilizar uma sans-serif moderna, neutra e altamente legível.

Para implementação própria:

```css
font-family:
  ui-sans-serif,
  system-ui,
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji";
```

Não é necessário introduzir uma fonte proprietária para reproduzir o conceito.

---

# 6. Escala tipográfica

A interface utiliza uma escala extremamente compacta.

| Token       | Tamanho | Uso                                      |
| ----------- | ------: | ---------------------------------------- |
| `text-xs`   |    12px | metadata, labels, informações auxiliares |
| `text-sm`   |    14px | corpo, descrição, navegação secundária   |
| `text-base` |    16px | navegação, títulos pequenos              |
| `text-lg`   |    18px | elementos de destaque                    |
| `text-xl`   |    20px | headings de seção                        |
| `text-2xl`  |    24px | modal titles / headings maiores          |
| `text-3xl`  |    30px | navegação mobile                         |

A interface evita headings gigantes.

---

# 7. Peso tipográfico

A hierarquia é construída com poucos pesos.

```text
400 — Regular
500 — Medium
600 — Semibold
```

Preferência:

```text
body        → 400
secondary   → 400
label       → 500
heading     → 500
strong CTA  → 500/600
```

O `font-medium` aparece com frequência.

O peso 700/bold não é usado como mecanismo dominante de hierarquia.

---

# 8. Line height

O sistema privilegia textos compactos, mas com boa legibilidade.

Referências observadas:

```text
text-xs       → ~1.2–1.25
text-sm       → ~1.4–1.5
text-base     → ~1.5
text-xl       → ~1.4
```

Exemplo:

```css
.body {
  font-size: 14px;
  line-height: 1.5;
}

.label {
  font-size: 14px;
  line-height: 1.4;
}

.caption {
  font-size: 12px;
  line-height: 1.25;
}
```

---

# 9. Espaçamento

A interface segue uma escala próxima à escala Tailwind.

## Base

```text
4px
8px
12px
16px
20px
24px
28px
32px
40px
48px
56px
64px
```

Principais padrões observados:

```text
gap-1   → 4px
gap-2   → 8px
gap-3   → 12px
gap-4   → 16px
gap-5   → 20px
gap-6   → 24px
gap-7   → 28px
```

---

# 10. Princípio de espaçamento

A interface utiliza bastante espaço negativo.

Regra:

> quando houver dúvida entre adicionar uma borda, sombra ou elemento visual, primeiro aumentar o espaço.

Exemplo:

```text
Heading
↓ 8px
Description
↓ 20–24px
Action
```

Em vez de:

```text
Heading
────────────
Description
────────────
Action
```

---

# 11. Border radius

O sistema utiliza radius pequeno a médio.

## Tokens

```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-full: 9999px;
```

Uso:

| Radius | Uso                              |
| ------ | -------------------------------- |
| 4px    | links/botões pequenos            |
| 6–8px  | inputs                           |
| 12px   | cards                            |
| 16px   | modais                           |
| full   | avatar, pills, botões principais |

O `rounded-xl` aparece nos cards.

O `rounded-2xl` aparece em dialogs.

O `rounded-full` aparece em:

* avatar
* search
* toggle
* CTA principal

---

# 12. Bordas

Bordas são extremamente importantes.

Padrão principal:

```css
border: 1px solid #E5E5E5;
```

Exemplo:

```css
.card {
  border: 1px solid #E5E5E5;
  border-radius: 12px;
}
```

A borda deve ser percebida apenas como uma separação sutil.

Evitar:

```css
border: 2px solid black;
```

exceto para estados específicos.

---

# 13. Shadows

O sistema utiliza sombras de maneira extremamente econômica.

## Shadow tokens

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,.05);

--shadow-md:
  0 4px 6px -1px rgba(0,0,0,.1),
  0 2px 4px -2px rgba(0,0,0,.1);

--shadow-xl:
  0 20px 25px -5px rgba(0,0,0,.10),
  0 8px 10px -6px rgba(0,0,0,.10);
```

Mas a regra fundamental é:

> Shadow não deve definir a existência do componente.

Cards normais:

```text
border
NO shadow
```

Dropdowns/modais:

```text
border
+
shadow
```

O próprio código utiliza:

```text
shadow-sm
shadow-xl
shadow-black/5
```

---

# 14. Cards

O card típico possui:

```text
background: white
border: neutral-200
radius: 12px
padding: 20px
shadow: none
```

Exemplo conceitual:

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 20px;
}
```

O card não precisa parecer "flutuante".

Ele funciona principalmente como um agrupador estrutural.

---

# 15. Botões

## Primary

```css
background: #000000;
color: #FFFFFF;
border-radius: 9999px;
padding: 8px 16px;
font-size: 14px;
font-weight: 500;
```

Hover:

```css
background: #262626;
```

Características:

* pill shape
* alto contraste
* compacto
* sem gradiente

---

## Secondary

```css
background: #FFFFFF;
color: #171717;
border: 1px solid #E5E5E5;
border-radius: 9999px;
```

Hover:

```css
background: #FAFAFA;
```

---

# 16. Links

Um dos elementos mais importantes do sistema.

A interface utiliza **links como ações** em vez de transformar tudo em botão.

Padrão:

```css
color: #000000;
text-decoration: none;
```

Hover:

```css
text-decoration: underline;
```

Com:

```css
text-underline-offset: 4px;
```

Isso produz uma estética muito simples.

### Regra

> Se uma ação é navegação, prefira link.
> Se uma ação modifica estado ou executa uma operação, prefira botão.

---

# 17. Inputs

Inputs seguem uma estética extremamente limpa.

```css
.input {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 16px;
}
```

Focus:

```css
border-color: #000000;
outline: none;
box-shadow: 0 0 0 1px #000000;
```

Não utilizar glow colorido.

---

# 18. Search

O campo de busca é um componente especial.

Características:

```text
background: black/5
border: neutral-100
radius: full
```

Visual:

```text
╭────────────────────────────╮
│  🔍   Search models        │
╰────────────────────────────╯
```

A busca tem:

* formato pill
* baixo contraste
* ícone pequeno
* placeholder cinza
* ausência de sombra

---

# 19. Navigation

Navbar:

```text
background: white
```

Padding horizontal:

```text
24px
```

Padding vertical aproximado:

```text
9px
```

Links:

```text
font-size: 18px
```

Estados:

```text
normal → black
hover → underline
focus → underline
```

Não há:

* background colorido no item ativo
* pill navigation
* ícones desnecessários
* separadores verticais

---

# 20. Avatar

Avatar:

```css
width: 40px;
height: 40px;
border-radius: 9999px;
object-fit: cover;
border: 1.5px solid #F5F5F5;
```

Hover:

```text
border → black
```

O avatar pode conter um pequeno indicador/controle sobreposto.

---

# 21. Modais

Modal:

```css
background: #FFFFFF;
border: 1px solid #E5E5E5;
border-radius: 16px;
box-shadow: var(--shadow-xl);
```

Overlay:

```css
background: rgba(0,0,0,.4);
```

Padding:

```text
24px
```

Desktop:

```text
32px
```

O modal não utiliza cores de destaque.

---

# 22. Dialog hierarchy

Estrutura:

```text
TITLE
↓
Description
↓
Form/content
↓
Actions
```

Exemplo:

```text
Add usage credits

Choose an amount to add...

[ $5 ] [ $20 ] [ $100 ] [ $500 ]

                         [Cancel] [Continue]
```

A interface evita excesso de divisores.

---

# 23. Status / Badge

Badges são pequenos e discretos.

Exemplo:

```css
.badge {
  background: #F5F5F5;
  color: #525252;
  border-radius: 9999px;
  padding: 2px 8px;
  font-size: 12px;
}
```

Não utilizar cores fortes para estados comuns.

---

# 24. Progress / Meter

Progress bar:

```text
height: 12px
background: neutral-200
radius: full
```

Filled:

```text
background: neutral-950
```

Portanto:

```text
████████████████░░░░░░░
```

em vez de utilizar azul, verde etc.

---

# 25. Ícones

Estilo:

* outline
* stroke
* simples
* pequenos
* sem preenchimentos decorativos

Stroke observado:

```text
1.5px
```

Tamanhos comuns:

```text
14px
16px
20px
24px
32px
```

Ícones devem acompanhar o texto, não competir com ele.

---

# 26. Estados de interação

## Hover

Principal mecanismo:

```text
underline
```

ou:

```text
background → neutral-50
```

ou:

```text
black → neutral-800
```

Não utilizar animações exageradas.

---

## Focus

Focus deve ser claramente perceptível.

Padrão:

```css
outline: 2px solid #000000;
outline-offset: 2px;
```

---

## Disabled

```text
background: neutral-200
border: neutral-200
text: neutral-400
opacity reduzida
```

---

# 27. Motion

O sistema utiliza animações mínimas.

Princípio:

> motion deve comunicar mudança de estado, não decorar a interface.

Exemplo observado:

```css
transition: opacity 200ms ease-in;
```

E:

```css
transition: transform 200ms;
transition: colors 200ms;
```

Evitar:

* parallax
* bounce
* spring excessivo
* entrance animations longas
* hover transforms agressivos

---

# 28. Layout

Container principal:

```text
max-width ≈ 800px
```

No código:

```text
max-w-[50rem]
```

ou:

```text
800px
```

Padding:

```text
mobile → 24px
desktop → 32px
```

Estrutura:

```text
┌─────────────────────────────────────┐
│ Navbar                              │
├─────────────────────────────────────┤
│                                     │
│        ┌────────────────────┐       │
│        │                    │       │
│        │ Main Content       │       │
│        │                    │       │
│        └────────────────────┘       │
│                                     │
├─────────────────────────────────────┤
│ Footer                              │
└─────────────────────────────────────┘
```

---

# 29. Grid

Cards utilizam grid simples.

Desktop:

```text
┌──────────────┐ ┌──────────────┐
│              │ │              │
│    Card      │ │    Card      │
│              │ │              │
└──────────────┘ └──────────────┘
```

Mobile:

```text
┌─────────────────────────┐
│ Card                    │
└─────────────────────────┘

┌─────────────────────────┐
│ Card                    │
└─────────────────────────┘
```

Breakpoints devem alterar a composição, não simplesmente reduzir tudo.

---

# 30. Responsividade

O sistema segue abordagem mobile-first.

Breakpoints observados:

```text
sm
md
lg
xl
```

Comportamento:

### Mobile

* menu fullscreen
* navegação vertical
* cards empilhados
* padding reduzido
* typography ainda legível

### Desktop

* navbar horizontal
* sidebar
* grids
* maior aproveitamento horizontal

---

# 31. Sidebar

Sidebar desktop:

```text
width ≈ 224px
```

Navegação:

```text
font-size: 16px
line-height: 24px
```

Layout:

```text
┌──────────────┬─────────────────────────┐
│ Usage        │                         │
│ Keys         │     Content             │
│ Billing      │                         │
│ Profile      │                         │
└──────────────┴─────────────────────────┘
```

A sidebar não utiliza:

* background cinza
* cards
* ícones para cada item
* indicadores coloridos

---

# 32. Hierarquia visual

A hierarquia deve seguir aproximadamente:

```text
LEVEL 1
Black + font-medium
20–24px

LEVEL 2
Black + font-medium
16–18px

LEVEL 3
Neutral-600
14px

LEVEL 4
Neutral-500
12–14px

LEVEL 5
Neutral-400
metadata / hints
```

O contraste tipográfico substitui elementos decorativos.

---

# 33. Design tokens — versão consolidada

```css
:root {

  /* =========================
     COLORS
     ========================= */

  --color-black: #000000;
  --color-white: #FFFFFF;

  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-300: #D4D4D4;
  --color-neutral-400: #A3A3A3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0A0A0A;


  /* =========================
     TEXT
     ========================= */

  --text-primary: #171717;
  --text-secondary: #525252;
  --text-muted: #737373;
  --text-disabled: #A3A3A3;


  /* =========================
     SURFACES
     ========================= */

  --surface-primary: #FFFFFF;
  --surface-subtle: #FAFAFA;
  --surface-muted: #F5F5F5;


  /* =========================
     BORDER
     ========================= */

  --border-subtle: #F5F5F5;
  --border-default: #E5E5E5;
  --border-strong: #D4D4D4;


  /* =========================
     RADIUS
     ========================= */

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;


  /* =========================
     SHADOW
     ========================= */

  --shadow-sm:
    0 1px 2px rgba(0, 0, 0, 0.05);

  --shadow-md:
    0 4px 6px -1px rgba(0, 0, 0, 0.10),
    0 2px 4px -2px rgba(0, 0, 0, 0.10);

  --shadow-xl:
    0 20px 25px -5px rgba(0, 0, 0, 0.10),
    0 8px 10px -6px rgba(0, 0, 0, 0.10);


  /* =========================
     SPACING
     ========================= */

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;


  /* =========================
     TYPOGRAPHY
     ========================= */

  --font-family-sans:
    ui-sans-serif,
    system-ui,
    sans-serif;

  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 30px;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;


  /* =========================
     MOTION
     ========================= */

  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  --ease-standard: ease;
  --ease-in: ease-in;
  --ease-out: ease-out;
}
```

---

# 34. Component recipe

## Card

```text
background: white
border: 1px neutral-200
radius: 12px
padding: 20px
shadow: none
```

## Primary Button

```text
background: black
color: white
radius: full
padding: 8px 16px
font: 14px / 500
```

## Secondary Button

```text
background: white
border: neutral-200
color: neutral-900
radius: full
```

## Input

```text
background: white
border: neutral-200
radius: 8px
padding: 10px 12px
```

## Link

```text
color: black
underline: on hover
underline-offset: 4px
```

## Badge

```text
background: neutral-100
color: neutral-600
radius: full
font: 12px
padding: 2px 8px
```

## Modal

```text
background: white
border: neutral-200
radius: 16px
shadow: xl
padding: 24–32px
```

---

# 35. Regras de composição

### Regra 1 — Um elemento dominante por região

Não colocar:

```text
Título grande
+
botão colorido
+
card colorido
+
badge colorido
```

simultaneamente.

Preferir:

```text
Título
Descrição
Ação
```

---

### Regra 2 — Preto é reservado para importância

Black significa:

```text
primary
action
important
interactive
```

Cinza significa:

```text
secondary
metadata
description
disabled
```

---

### Regra 3 — Bordas substituem sombras

Preferir:

```text
border
```

a:

```text
shadow
```

Shadow é principalmente para:

* dropdown
* modal
* popover
* elementos flutuantes

---

### Regra 4 — Links devem parecer links

Não transformar toda interação em:

```text
[ BUTTON ]
```

Usar:

```text
Create API key →
```

quando a ação é navegação.

---

### Regra 5 — Não decorar

Não adicionar:

* gradiente
* glow
* glassmorphism
* background pattern
* blobs
* ilustrações
* sombras exageradas

sem uma necessidade funcional.

---

# 36. Design philosophy

O sistema pode ser resumido em:

```text
LESS UI
MORE CONTENT
```

ou:

```text
CONTENT
    ↓
TYPOGRAPHY
    ↓
SPACING
    ↓
BORDER
    ↓
COLOR
    ↓
SHADOW
```

A prioridade visual é aproximadamente:

1. Conteúdo
2. Hierarquia tipográfica
3. Espaçamento
4. Alinhamento
5. Contraste
6. Bordas
7. Cor
8. Sombra
9. Animação

Isso cria uma interface com aparência:

```text
technical
professional
calm
minimal
developer-oriented
content-first
```

---

# 37. Diretriz para implementação em React

Ao implementar esse sistema, os componentes devem consumir tokens em vez de valores arbitrários.

Evitar:

```tsx
<div className="bg-[#171717] rounded-[13px] p-[19px]">
```

Preferir:

```tsx
<Card>
```

com o componente utilizando os tokens do Design System.

Estrutura recomendada:

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   └── Progress.tsx
│   │
│   └── layout/
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── typography.css
│
└── design-system/
    ├── principles.md
    ├── components.md
    └── tokens.md
```

---

# 38. Prompt de implementação para IA

Ao gerar novas telas, a IA deve seguir estas regras:

> Use o Design System minimalista definido neste documento.
>
> Priorize conteúdo, tipografia, espaçamento e alinhamento antes de elementos decorativos.
>
> Utilize uma paleta predominantemente monocromática baseada em preto, branco e Neutral.
>
> Não introduza cores de destaque sem necessidade funcional.
>
> Utilize `border: 1px solid neutral-200` para cards e containers.
>
> Evite sombras em cards. Utilize sombras somente em elementos flutuantes como modais, dropdowns e popovers.
>
> Utilize border-radius entre 8px e 16px para containers e `9999px` para elementos pill.
>
> Utilize `font-weight: 500` como principal peso de destaque.
>
> Utilize links tipográficos com underline no hover para navegação.
>
> Utilize botões pretos com texto branco para ações primárias.
>
> Utilize botões brancos com borda neutra para ações secundárias.
>
> Mantenha a densidade visual baixa e o whitespace generoso.
>
> Evite gradientes, glassmorphism, neon, sombras fortes, excesso de ícones e elementos puramente decorativos.
>
> Toda nova tela deve parecer pertencer ao mesmo produto mesmo quando novos componentes forem criados.

---

# 39. Essência visual

Se fosse necessário reduzir todo o sistema a cinco regras:

```text
01. BLACK + WHITE + NEUTRALS

02. TYPOGRAPHY CREATES HIERARCHY

03. SPACING CREATES STRUCTURE

04. BORDERS > SHADOWS

05. FUNCTION > DECORATION
```

O resultado é uma interface que transmite **produto técnico, moderno, confiável e extremamente enxuto**, sem depender de uma identidade visual baseada em cores ou ornamentação.

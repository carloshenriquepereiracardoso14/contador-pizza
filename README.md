
# 🍕 Slice Hero

Um projeto divertido e interativo para monitorar quantas fatias de pizza você já comeu, com sistema de pontuação, barra de progresso, som e salvamento no navegador!

---

## 🚀 Funcionalidades

- ✅ Contador de fatias de pizza.
- 🎯 Defina uma **meta de consumo** (quantidade de fatias desejadas).
- 📈 Barra de progresso interativa que cresce conforme você consome fatias.
- 💾 Dados persistem via `localStorage` (mesmo após atualizar a página).
- 🗑️ Botão para **zerar** o contador.
- 🍕 Botão para restaurar o valor salvo.
- 🏆 Sistema de pontuação: **1 ponto a cada 3 fatias**.
- 🎉 Animação e som de vitória ao atingir a meta.
- 📄 Botão de impressão da tela.
- 📋 Modal com **regras de uso**.
- 🔊 Efeitos sonoros personalizados.

---

## 🧪 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com responsividade e animações)
- **JavaScript puro (Vanilla JS)**
- Google Fonts (`Poppins`)
- Ícones do Google Material Symbols

---

## 🗂️ Estrutura de Pastas

```
contador-pizza/
│
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── js.js
│   │   └── pontos.js
│   ├── img/
│   │   ├── Pizza_Steve.png
│   │   ├── vitoria.gif
│   │   ├── deletar.png
│   │   └── pizza.webp
│   └── sound/
│       ├── cartoon_bite_sound_effect.mp3
│       └── you-win-sequence-1-183948.mp3
└── README.md
```

---

## 📦 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/contador-pizza.git
   ```

2. **Abra o arquivo `index.html`** em qualquer navegador moderno.

---

## 💡 Como Funciona?

- **Botão "+"**: adiciona uma fatia e atualiza o progresso.
- **Campo de meta**: define o número total de fatias que você deseja atingir.
- **Barra verde**: aumenta proporcionalmente até atingir a meta.
- **Pontuação**: é calculada automaticamente com base nas fatias consumidas.
- **Som de mordida**: é tocado a cada fatia registrada.
- **Som de vitória + animação**: aparece ao atingir a meta.
- **Zerar**: remove tudo do navegador e reinicia a contagem.

---

## 📱 Responsividade

Totalmente adaptado para diferentes tamanhos de tela — desde celulares até desktops.

---

## ⚠️ Observações

- Os dados são salvos apenas localmente no seu navegador, usando `localStorage`.
- Certifique-se de inserir um número válido no campo de meta antes de começar.

---

## 📃 Licença

Este projeto é de uso livre para fins educacionais ou pessoais. Para usos comerciais, favor entrar em contato com o autor.

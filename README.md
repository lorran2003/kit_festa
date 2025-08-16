# 🎉 Felicita Festas Rio - Kit de Festas

Uma aplicação web moderna para a confeitaria **Felicita Festas Rio**, permitindo aos clientes montar kits de festa personalizados de forma intuitiva e visualmente atrativa.

## ✨ Características

- **🎨 Design Moderno**: Interface elegante com gradientes, animações suaves e paleta de cores harmoniosa
- **📱 Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **🛒 Carrinho Inteligente**: Sistema de carrinho com persistência de dados e notificações
- **🎂 Personalização**: Seleção de tortas, salgadinhos e docinhos para cada kit
- **💬 Integração WhatsApp**: Finalização de pedidos direto para o WhatsApp
- **⚡ Performance**: Lazy loading, otimizações de renderização e carregamento rápido
- **♿ Acessível**: Navegação por teclado, ARIA labels e contraste adequado

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utilitária
- **Radix UI** - Componentes acessíveis
- **Keen Slider** - Carrossel de imagens
- **React Toastify** - Notificações
- **FontAwesome** - Ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/kit_festa.git
cd kit_festa
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── modalCart/      # Modais do carrinho
│   ├── modalOptionsFlavor/ # Seleção de sabores
│   └── ...
├── hooks/              # Hooks customizados
├── const/              # Dados estáticos
├── assets/             # Imagens e recursos
├── func/               # Funções utilitárias
└── ...
```

## 🎯 Funcionalidades Principais

### 1. **Cardápio de Kits**
- 4 kits diferentes (Festa na caixa, Pequeno, Médio, Grande)
- Informações detalhadas sobre quantidade de pessoas, salgadinhos, docinhos e tortas
- Preços transparentes e destaque para o kit mais pedido

### 2. **Personalização de Pedidos**
- Seleção de tortas (normais e candy)
- Escolha de salgadinhos (até 3 tipos)
- Seleção de docinhos (até 3 tipos)
- Validação em tempo real

### 3. **Carrinho de Compras**
- Adição/remoção de itens
- Cálculo automático do total
- Persistência de dados no sessionStorage
- Opção de adicionar tortas extras

### 4. **Finalização de Pedido**
- Formulário de dados do cliente
- Geração automática de mensagem para WhatsApp
- Integração direta com a API do WhatsApp

## 🎨 Design System

### Cores
- **Primária**: Rosa (#ec4899) e Roxo (#8b5cf6)
- **Secundária**: Dourado (#f59e0b)
- **Neutras**: Tons de cinza para texto e fundos

### Tipografia
- **Fonte**: Inter (sistema)
- **Hierarquia**: Títulos grandes e negritos, texto legível

### Animações
- **Fade In Up**: Entrada suave dos elementos
- **Bounce In**: Modais e notificações
- **Hover Effects**: Interações nos botões e cards

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botões e interações adequadas para toque

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 🌟 Melhorias Implementadas

### Visuais
- ✅ Design moderno com gradientes e sombras
- ✅ Animações suaves e micro-interações
- ✅ Paleta de cores harmoniosa
- ✅ Tipografia melhorada
- ✅ Layout responsivo otimizado

### Técnicas
- ✅ Lazy loading para melhor performance
- ✅ Componentes reutilizáveis
- ✅ Hooks customizados otimizados
- ✅ Validação de formulários
- ✅ Tratamento de erros
- ✅ Acessibilidade melhorada

### UX/UI
- ✅ Feedback visual para ações
- ✅ Estados de loading
- ✅ Notificações informativas
- ✅ Navegação intuitiva
- ✅ Carrinho flutuante com contador

## 📞 Contato

- **Instagram**: [@felicitafestasrio](https://www.instagram.com/felicitafestasrio)
- **WhatsApp**: [(21) 98131-5814](https://wa.me/5521981315814)

## 📄 Licença

Este projeto é privado e desenvolvido especificamente para a Felicita Festas Rio.

---

**Desenvolvido com ❤️ para celebrar momentos especiais!**
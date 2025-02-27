# API Agenda Kairos

## 📌 Sobre o Projeto

API para gerenciamento de agendamentos, permitindo que usuários criem e gerenciem compromissos de diferentes tipos.

---

## 🚀 Configuração do Ambiente

### 1️⃣ Clonar o Repositório

```sh
git clone git@github.com:kairos-team/api-agenda-kairos.git
cd api-timely
```

### 2️⃣ Verificar a Versão do Node.js

```sh
node -v
```

Este projeto requer **Node.js 22.14.0**. Se a versão for diferente, siga as instruções abaixo para instalar a versão correta.

### 3️⃣ Instalar o Node.js com NVM

Caso ainda não tenha o **NVM (Node Version Manager)** instalado:

- **Windows**: [Baixe e instale o NVM para Windows](https://github.com/coreybutler/nvm-windows/releases)
- **Mac/Linux**:

```sh
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Agora, instale e use a versão correta do Node.js:

```sh
nvm install 22.14.0
nvm use 22.14.0
```

### 4️⃣ Instalar as Dependências

```sh
npm install
```

### 5️⃣ Configurar Variáveis de Ambiente

```sh
cp .env.example .env
```

Edite o arquivo `.env` conforme necessário.

### 6️⃣ Rodar o Servidor

```sh
npm run dev
```

Se quiser rodar a versão compilada do projeto:

```sh
npm run build
npm start
```

---

## 🛠️ Comandos Úteis

```sh
node -v              # Verifica a versão do Node.js instalada
nvm list-remote      # Lista todas as versões do Node disponíveis no NVM
nvm use <versão>     # Alterna para uma versão específica do Node
npm install          # Instala todas as dependências do projeto
npm run dev          # Inicia o servidor em modo de desenvolvimento
npm run build        # Compila o código TypeScript para JavaScript
npm start           # Inicia o servidor usando a versão compilada
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

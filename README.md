<h1 align="center">Portfolio: Schutzverse ⚛️</h1>

This project is a showcase of my work and professional profile, putting into practice a refined design with modern technologies. Developed with **[Next.js](https://nextjs.org/)** and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Access the project running in production by clicking [here](https://portfolio-schutzverse.vercel.app/).

## 🚀 Technical Features
- Internal REST endpoints creation with **[Next API](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)**
- Database managing with **[Prisma](https://www.prisma.io/)**
- GitHub authentication with **[NextAuth](https://next-auth.js.org/)**
- Styling with typescript files using **[Styled Components](https://styled-components.com/)**
- Animated transitions with **[Framer Motion](https://motion.dev/)**
- Centralized global states with **[Context API](https://react.dev/reference/react/createContext)**

## 🛠️ Installation and Setup

Follow the steps below to set up the project locally:

### 1. Prerequisites
Before starting, make sure you have the following installed/created:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

To use ToDo List showcase:
- [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps) credentials
- A postgres DB instance URL

### 2. Clone the repository
Clone this repository to your local machine using:

```bash
git clone https://github.com/schutz-luca/portfolio-schutzverse.git
```

### 3. Navigate to the project folder
Move into the project's directory:

```bash
cd portfolio-schutzverse
```

### 4. Install dependencies
Install all required dependencies for the project.

```bash
npm install
```

or

```bash
yarn
```

### 5. Create environment file
Create a `.env` file in the root directory of the project and configure the required variables. Use the provided `.env.example` file as a reference:

```bash
cp .env.example .env
```

### 6. Start the Development Server
Run the development server to start the application.

```bash
npm run dev
```

or

```bash
yarn dev
```

## 📄 License

The MIT License (MIT)
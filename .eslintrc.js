module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Agrega Prettier al flujo de ESLint
      'plugin:tailwindcss/recommended', // Agrega soporte para Tailwind CSS
    ],
    plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
      'tailwindcss/no-custom-classname': 'off', // Desactiva la restricción de nombres de clases personalizadas
      'react/react-in-jsx-scope': 'off', // Next.js ya soporta JSX sin importar React
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
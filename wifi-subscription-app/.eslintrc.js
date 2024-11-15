module.exports = {
    root: true,
    env: {
      node: true,
      es6: true // Ensures that ESLint recognizes ES6 syntax, including `import`
    },
    extends: [
      'plugin:vue/vue3-essential', // Use Vue essentials configuration
      'eslint:recommended'         // Use recommended ESLint rules
    ],
    parserOptions: {
      parser: 'babel-eslint'       // Use babel-eslint as the parser
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  };
  
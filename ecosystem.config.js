module.exports = {
  apps: [
    {
      name: 'REMILAK API',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}

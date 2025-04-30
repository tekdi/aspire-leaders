module.exports = {
  apps: [
    {
      name: 'admin-app',
      script: 'node_modules/.bin/next',
      args: 'start -p 3002',
      cwd: 'apps/admin-app',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'forget-password',
      script: 'node_modules/.bin/next',
      args: 'start -p 4109',
      cwd: 'mfes/forget-password',
      env: {
        NODE_ENV: 'production',
      },
    },
    // {
    //   name: 'players',
    //   script: 'node_modules/.bin/next',
    //   args: 'start -p 4106',
    //   cwd: 'mfes/players',
    //   env: {
    //     NODE_ENV: 'production',
    //   },
    // },
  ],
};

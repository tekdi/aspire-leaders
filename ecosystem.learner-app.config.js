module.exports = {
  apps: [
    {
      name: 'learner-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      cwd: '/workspace/dist/apps/learner-app',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/var/log/learner-app.err.log',
      out_file: '/var/log/learner-app.out.log',
    },
    {
      name: 'authentication',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4101',
      cwd: '/workspace/mfes/authentication',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/var/log/authentication.err.log',
      out_file: '/var/log/authentication.out.log',
    },
    {
      name: 'forget-password',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4109',
      cwd: '/workspace/mfes/forget-password',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/var/log/forget-password.err.log',
      out_file: '/var/log/forget-password.out.log',
    },
  ],
};

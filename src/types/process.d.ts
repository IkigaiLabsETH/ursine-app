// This file adds minimal process type definitions to fix TypeScript errors

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    [key: string]: string | undefined;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
  browser: boolean;
  [key: string]: any;
}; 
module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@nativescript/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      // @nativescript/sqlite
      sqlite: {
        build: {
          script: 'nx run sqlite:build.all',
          description: '@nativescript/sqlite: Build',
        },
      },
      // @nativescript/sqlite-sqlcipher
      'sqlite-sqlcipher': {
        build: {
          script: 'nx run sqlite-sqlcipher:build.all',
          description: '@nativescript/sqlite-sqlcipher: Build',
        },
      },
      // @nativescript/sqlite-requery
      'sqlite-requery': {
        build: {
          script: 'nx run sqlite-requery:build.all',
          description: '@nativescript/sqlite-requery: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      sqlite: {
        script: 'nx run sqlite:focus',
        description: 'Focus on @nativescript/sqlite',
      },
      'sqlite-sqlcipher': {
        script: 'nx run sqlite-sqlcipher:focus',
        description: 'Focus on @nativescript/sqlite-sqlcipher',
      },
      'sqlite-requery': {
        script: 'nx run sqlite-requery:focus',
        description: 'Focus on @nativescript/sqlite-requery',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};

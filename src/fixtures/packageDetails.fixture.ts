import { PackageObj } from '../typings/npm-registry';

const mockPackageObj: PackageObj = {
  '_id': 'react',
  '_rev': '4345-f0af90b335d6d83dc24334e12d59800a',
  'name': 'react',
  'dist-tags': {
    latest: '19.0.0',
  },
  'versions': {
    '19.0.0': {
      name: 'react',
      version: '19.0.0',
      keywords: [
        'react',
      ],
      license: 'MIT',
      _id: 'react@19.0.0',
      maintainers: [
        {
          name: 'gnoff',
          email: 'jcs.gnoff@gmail.com',
        },
        {
          name: 'fb',
          email: 'opensource+npm@fb.com',
        },
        {
          name: 'sophiebits',
          email: 'npm@sophiebits.com',
        },
        {
          name: 'react-bot',
          email: 'react-core@meta.com',
        },
      ],
      homepage: 'https://react.dev/',
      bugs: {
        url: 'https://github.com/facebook/react/issues',
      },
      dist: {
        shasum: '6e1969251b9f108870aa4bff37a0ce9ddfaaabdd',
        tarball: 'https://registry.npmjs.org/react/-/react-19.0.0.tgz',
        fileCount: 27,
        integrity: 'sha512-V8AVnmPIICiWpGfm6GLzCR/W5FXLchHop40W4nXBmdlEceh16rCN8O8LNWm5bh5XUX91fh7KpA+W0TgMKmgTpQ==',
        signatures: [
          {
            sig: 'MEUCIQD6MgQp7aoIJifs55bSi1ltm8adajf82MUSHQnuhdKnoAIgBon/T6FHtXQHG33bRopiZQcqVdQwZW1+KDGJhWKlF/U=',
            keyid: 'SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA',
          },
        ],
        unpackedSize: 237477,
      },
      main: 'index.js',
      engines: {
        node: '>=0.10.0',
      },
      exports: {
        '.': {
          'default': './index.js',
          'react-server': './react.react-server.js',
        },
        './jsx-runtime': {
          'default': './jsx-runtime.js',
          'react-server': './jsx-runtime.react-server.js',
        },
        './package.json': './package.json',
        './jsx-dev-runtime': {
          'default': './jsx-dev-runtime.js',
          'react-server': './jsx-dev-runtime.react-server.js',
        },
        './compiler-runtime': {
          'default': './compiler-runtime.js',
          'react-server': './compiler-runtime.js',
        },
      },
      gitHead: '63cde684f5340b1ca73f6244501aac1c3d2c92a8',
      _npmUser: {
        name: 'react-bot',
        email: 'react-core@meta.com',
      },
      repository: {
        url: 'git+https://github.com/facebook/react.git',
        type: 'git',
        directory: 'packages/react',
      },
      _npmVersion: '10.5.0',
      description: 'React is a JavaScript library for building user interfaces.',
      directories: {},
      _nodeVersion: '18.20.1',
      _hasShrinkwrap: false,
    },
  },
  'time': {
    'created': '2011-10-26T17:46:21.942Z',
    'modified': '2025-03-14T16:20:32.224Z',
    '19.0.0': '2024-12-05T18:10:21.804Z',
  },
  'bugs': {
    url: 'https://github.com/facebook/react/issues',
  },
  'license': 'MIT',
  'homepage': 'https://react.dev/',
  'keywords': [
    'react',
  ],
  'repository': {
    url: 'git+https://github.com/facebook/react.git',
    type: 'git',
    directory: 'packages/react',
  },
  'description': 'React is a JavaScript library for building user interfaces.',
  'author': { name: 'Test Author' },
  'maintainers': [
    {
      name: 'gnoff',
      email: 'jcs.gnoff@gmail.com',
    },
    {
      name: 'fb',
      email: 'opensource+npm@fb.com',
    },
    {
      name: 'sophiebits',
      email: 'npm@sophiebits.com',
    },
    {
      name: 'react-bot',
      email: 'react-core@meta.com',
    },
  ],
  'readme': '# Test README',
  'readmeFilename': '',
  'users': {},
};

export {
  mockPackageObj,
};

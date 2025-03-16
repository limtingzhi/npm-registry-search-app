import { SearchPackageObj, SearchPackagesResponse } from '../typings/npm-registry';

const mockSearchPackageObjs: SearchPackageObj[] = [
  {
    downloads: {
      monthly: 128618462,
      weekly: 27213104,
    },
    dependents: 245541,
    updated: '2025-03-16T02:37:58.809Z',
    searchScore: 2067.6953,
    package: {
      name: 'react',
      keywords: ['react'],
      version: '19.0.0',
      description: 'React is a JavaScript library for building user interfaces.',
      sanitized_name: 'react',
      publisher: {
        email: 'react-core@meta.com',
        username: 'react-bot',
      },
      maintainers: [
        {
          email: 'jcs.gnoff@gmail.com',
          username: 'gnoff',
        },
        {
          email: 'opensource+npm@fb.com',
          username: 'fb',
        },
        {
          email: 'npm@sophiebits.com',
          username: 'sophiebits',
        },
        {
          email: 'react-core@meta.com',
          username: 'react-bot',
        },
      ],
      license: 'MIT',
      date: '2024-12-05T18:10:21.804Z',
      links: {
        homepage: 'https://react.dev/',
        repository: 'git+https://github.com/facebook/react.git',
        bugs: 'https://github.com/facebook/react/issues',
        npm: 'https://www.npmjs.com/package/react',
      },
    },
    score: {
      final: 2067.6953,
      detail: {
        popularity: 1,
        quality: 1,
        maintenance: 1,
      },
    },
    flags: {
      insecure: 0,
    },
  },
  {
    downloads: {
      monthly: 51108276,
      weekly: 10650948,
    },
    dependents: 8691,
    updated: '2025-03-16T02:39:00.788Z',
    searchScore: 223.42856,
    package: {
      name: 'react-router',
      keywords: ['react', 'router', 'route', 'routing', 'history', 'link'],
      version: '7.3.0',
      description: 'Declarative routing for React',
      sanitized_name: 'react-router',
      publisher: {
        email: 'mjijackson+npm@gmail.com',
        username: 'mjackson',
      },
      maintainers: [
        {
          email: 'matt@brophy.org',
          username: 'brophdawg11',
        },
        {
          email: 'timdorr@timdorr.com',
          username: 'timdorr',
        },
        {
          email: 'mjijackson+npm@gmail.com',
          username: 'mjackson',
        },
        {
          email: 'hi@chance.dev',
          username: 'chancestrickland',
        },
      ],
      license: 'MIT',
      date: '2025-03-06T20:45:45.890Z',
      links: {
        homepage: 'https://github.com/remix-run/react-router#readme',
        repository: 'git+https://github.com/remix-run/react-router.git',
        bugs: 'https://github.com/remix-run/react-router/issues',
        npm: 'https://www.npmjs.com/package/react-router',
      },
    },
    score: {
      final: 223.42856,
      detail: {
        popularity: 1,
        quality: 1,
        maintenance: 1,
      },
    },
    flags: {
      insecure: 0,
    },
  },
];

const mockSearchPackagesResponse: SearchPackagesResponse = {
  objects: mockSearchPackageObjs,
  time: '2025-03-16T14:07:48.837Z',
  total: 2,
};

export {
  mockSearchPackageObjs,
  mockSearchPackagesResponse,
};

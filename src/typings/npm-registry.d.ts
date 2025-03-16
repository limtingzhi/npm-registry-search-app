interface Maintainers {
  email: string;
  username: string;
}

interface SearchPackageObj {
  dependents: number;
  downloads: {
    monthly: number;
    weekly: number;
  };
  flags: {
    insecure: number;
  };
  package: {
    date: string;
    description: string;
    keywords: string[];
    license: string;
    links: {
      bugs: string;
      homepage: string;
      npm: string;
      repository: string;
    };
    maintainers: Maintainers[];
    name: string;
    publisher: {
      email: string;
      username: string;
    };
    sanitized_name: string;
    version: string;
  };
  score: {
    detail: {
      maintenance: number;
      popularity: number;
      quality: number;
    };
    final: number;
  };
  searchScore: number;
  updated: string;
}

interface SearchPackagesResponse {
  objects: SearchPackageObj[];
  time: string;
  total: number;
}

interface Author {
  email?: string;
  name: string;
  url?: string;
}

interface Repository {
  directory?: string;
  interface?: string;
  type?: string;
  url: string;
}

interface DistTags {
  latest: string;
  [key: string]: string;
}

interface Version {
  _hasShrinkwrap?: boolean;
  _id: string;
  _nodeVersion?: string;
  _npmUser: Author;
  _npmVersion: string;
  author?: Author;
  bugs?: Record<string, string>;
  dependencies?: Record<string, string>;
  description?: string;
  devDependencies?: Record<string, string>;
  directories?: Record<string, unknown>;
  dist: {
    'fileCount'?: number;
    'integrity'?: string;
    'npm-signature'?: string;
    'shasum': string;
    'signatures'?: {
      keyid: string;
      sig: string;
    }[];
    'tarball': string;
    'unpackedSize'?: number;
  };
  engines?: Record<string, string>;
  exports?: Record<string, Record<string>>;
  gitHead?: string;
  homepage?: string;
  keywords?: string[];
  license?: string;
  main?: string;
  maintainers: Author[];
  name: string;
  readme?: string;
  readmeFilename?: string;
  repository?: Repository;
  scripts?: Record<string, string>;
  version: string;
}

interface PackageObj {
  '_attachments'?: Record<string, unknown>;
  '_id': string;
  '_rev'?: string;
  'author'?: Author;
  'bugs'?: Record<string, string>;
  'description'?: string;
  'dist-tags'?: DistTags;
  'homepage'?: string;
  'keywords'?: string[];
  'license'?: string;
  'maintainers'?: Author[];
  'name': string;
  'readme'?: string;
  'readmeFilename'?: string;
  'repository'?: Repository;
  'time'?: {
    created: string;
    modified: string;
    [key: string]: string;
  };
  'users'?: Record<string, boolean>;
  'versions'?: Record<string, Version>;
}

export {
  SearchPackageObj,
  SearchPackagesResponse,
  PackageObj,
};

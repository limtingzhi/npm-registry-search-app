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
    updated: string;
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
  interface: string;
  url: string;
}

interface DistTags {
  latest: string;
  [key: string]: string;
}

interface Version {
  _id: string;
  _npmUser: Author;
  _npmVersion: string;
  author?: Author;
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
  homepage?: string;
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
  '_rev': string;
  'author'?: Author;
  'description'?: string;
  'dist-tags': DistTags;
  'license'?: string;
  'name': string;
  'readme'?: string;
  'repository'?: Repository;
  'time'?: {
    created: string;
    modified: string;
    [key: string]: string;
  };
  'versions': Record<string, Version>;
}

export {
  SearchPackageObj,
  SearchPackagesResponse,
  PackageObj,
};

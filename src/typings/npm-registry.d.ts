interface Maintainers {
  email: string;
  username: string;
}

interface SearchPackageObj {
  downloads: {
    monthly: number;
    weekly: number;
  };
  dependents: number;
  updated: string;
  searchScore: number;
  package: {
    name: string;
    keywords: string[];
    version: string;
    description: string;
    sanitized_name: string;
    publisher: {
      email: string;
      username: string;
    };
    maintainers: Maintainers[];
    license: string;
    date: string;
    links: {
      homepage: string;
      repository: string;
      bugs: string;
      npm: string;
    };
  };
  score: {
    final: number;
    detail: {
      popularity: number;
      quality: number;
      maintenance: number;
    };
  };
  flags: {
    insecure: number;
  };
}

interface SearchPackagesResponse {
  objects: SearchPackageObj[];
  time: string;
  total: number;
}

export {
  SearchPackageObj,
  SearchPackagesResponse,
};

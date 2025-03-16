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

export {
  SearchPackageObj,
  SearchPackagesResponse,
};

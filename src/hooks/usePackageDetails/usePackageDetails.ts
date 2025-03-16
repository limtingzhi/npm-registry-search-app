import { useCallback, useEffect, useState } from 'react';
import { getPackageDetails } from '../../api/npmRegistry';
import { PackageObj } from '../../typings/npm-registry';

interface Props {
  packageName: string | null | undefined;
}

interface UsePackageDetails {
  errorMsg: string | null;
  isLoading: boolean;
  packageDetails: PackageObj | null;
}

function usePackageDetails(props: Props): UsePackageDetails {
  const { packageName } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [packageDetails, setPackageDetails] = useState<PackageObj | null>(null);

  const fetchPackageDetails = useCallback(async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      if (packageName == null) {
        setErrorMsg('Package name is missing.');
        return;
      }

      const result = await getPackageDetails(packageName);

      setPackageDetails(result);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [packageName]);

  useEffect(() => {
    fetchPackageDetails();
  }, [fetchPackageDetails]);

  return {
    errorMsg,
    isLoading,
    packageDetails,
  };
}

export default usePackageDetails;

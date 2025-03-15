import { useParams } from 'react-router';

function PackageDetails() {
  const { name } = useParams<{ name: string; }>();

  return (
    <div>{`Package Details: ${name}`}</div>
  );
}

export default PackageDetails;

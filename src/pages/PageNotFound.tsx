import { NavLink } from 'react-router';

function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}

export default PageNotFound;

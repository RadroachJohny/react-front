import Page from "./Page";
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <Page title="Not found">
      <div className="text-center">
        <h2>Whoops, we cannot find that page</h2>
        <p className="lead text-muted">
          You can always visit <Link to="/">start page</Link>
        </p>
      </div>
    </Page>
  );
}

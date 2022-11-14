import React from "react";
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Topics() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>topics</h2>
      <ul>
        <li>
          <Link to={`${path}/watermelon`}>watermelon</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${path}/banana`,
              state: { color: "yellow" },
              search: "?price=2",
            }}
          >
            banana
          </Link>
        </li>
        <li>
          <Link to={`${path}/apple`}>apple</Link>
        </li>
      </ul>
      <Route path={`${path}/:name`} component={Topic}></Route>
    </div>
  );
}
function Topic() {
  const params = useParams();
  console.log(`params: `, params);
  const location = useLocation();
  console.log("location: ", location);
  const history = useHistory();
  console.log("history: ", history);
  const stu = "zeng";

  return (
    <>
      <h4>{params.title}</h4>
      <h3>{stu.name?.firstName}</h3>
    </>
  );
}
export default Topics;

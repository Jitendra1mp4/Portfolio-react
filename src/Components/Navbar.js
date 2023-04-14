function Navbar(props) {
  return (
    <nav className>
      <span class="brand clr-light ta-left">{props.appName}</span>
      <ul className="list-no-bullet">
        {props.navPills.map((e) => {
          return (
            <li className="list-item-inline nav-pills">
              <a className="link link-text-dec-none" href={`${e}`}>
                {e}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

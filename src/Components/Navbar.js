function Navbar(props) {
  return (
    <>
      <nav>
        <span className="brand clr-light">{props.appName}</span>
        <ul className="list-no-bullet">
          {props.navPills.map((navPillItem, index) => {
            return (
              <li
                key={index}
                className={`list-item-inline nav-pills 
              ${navPillItem.active ? "link-active" : ""}`}
                onClick={() => props.updatePage(navPillItem.link, index)}
              >
                <span
                  className="link link-text-dec-none"
                  // href={`${navPillItem.link}`}
                >
                  {navPillItem.value}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

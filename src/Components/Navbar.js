function Navbar(props) {
  const updatePage =(link)=>{
    props.setLink(link) ;
    props.setNewHeaderImage(link) ;
  }
  return (
    <nav>
      <span className="brand clr-light ta-left">{props.appName}</span>
      <ul className="list-no-bullet">
        {props.navPills.map((navPillItem, index) => {
          return (
            <li
              key={index}
              className={`list-item-inline nav-pills 
              ${navPillItem.active ? "link-active" : ""}`}
              onClick={() => updatePage(navPillItem.link)}
            >
              <a
                className="link link-text-dec-none"
                href={`${navPillItem.link}`}
              >
              </a>
                {navPillItem.value}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

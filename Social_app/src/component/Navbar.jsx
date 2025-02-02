import { Link } from "react-router-dom"

export default function Navbardata(props) {
  console.log(props)
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-dark text-bg-white" data-bs-theme="dark">
  <div className="container navgat">
    <a className="navbar-brand border p-2 rounded" href="#">Social_media</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          {/* <Link to={} className="nav-link active " href="#"></Link> */}
        </li>

        <li className="nav-item">
          {/* <Link to={} className="nav-link active" aria-current="page" href="#">Home</Link> */}
        </li>
        <li className="nav-item">
          <Link to={props.pathi} className="nav-link active">Post</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="#">Create Post</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

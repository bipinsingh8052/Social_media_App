import { Link } from "react-router-dom"

export default function Navbardata(props) {
  console.log(props)
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-dark text-bg-white" data-bs-theme="dark">
  <div className="container navgat">
    <Link className="navbar-brand border p-2 rounded" href="#">Social_media</Link>
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
          <Link to={props.sendpost} className="nav-link active">Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to={props.sendcreate}>Create Post</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
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

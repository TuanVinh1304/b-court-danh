<div>
  <meta charSet="utf-8" />
  <title>bcourt - Vegetable Website Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content name="keywords" />
  <meta content name="description" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" />
  {/* Icon Font Stylesheet */}
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Libraries Stylesheet */}
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* new search andd icon */}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  {/* back to top */}
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="main.css" />
  {/* Spinner Start */}
  <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" role="status" />
  </div>
  {/* Spinner End */}
  {/* Navbar start */}
  <div className="container-fluid fixed-top">
    <div className="container topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <div className="top-info ps-2">
          <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
          <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
        </div>
        <div className="top-link pe-2">
          <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
          <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
          <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
        </div>
      </div>
    </div>
    <div className="container px-0">
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
        <a href="index.html" className="navbar-brand"> <img src="img/bad3.png" className="img-fluid w-100 rounded" style={{width: 270, height: 200, top: 0, left: 0, paddingLeft: 50}} alt /> </a>
        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars text-primary" />
        </button>
        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="index.html" className="nav-item nav-link ">Home</a>
            <a href="shop.html" className="nav-item nav-link">Shop</a>
            <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="cart.html" className="dropdown-item">Cart</a>
                <a href="checkout.html" className="dropdown-item">Checkout</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <div className="d-flex m-3 me-0">
            <a href="#" className="position-relative me-4 my-auto">
              <div className="search">
                <span className="search-icon material-symbols-outlined">search</span>
                <input className="search-input" type="search" placeholder="search" />
              </div>
            </a><a href="#" className="position-relative me-4 my-auto">
              <i className="fa fa-shopping-cart fa-2x" />
              <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: 15, height: 20, minWidth: 20}}>3</span>
            </a>
            <div id="homeScreen" className="container d-flex justify-content-center align-items-center" style={{height: 36, paddingTop: 13}}>
              <button id="signInButton" className="btn btn-primary border-0 border-secondary text-white">
                <a href="Sign in vu.html" style={{color: 'white', textDecoration: 'none'}}>Sign In</a>
              </button>
              <div className="nav-item dropdown" id="userDropdown" style={{display: 'none'}}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fas fa-user fa-2x" />
                </a>
                <div className="dropdown-menu dropdown-menu-right p-3">
                  <div className="user-info d-flex align-items-center">
                    <img src="img/vu.jpg" className="user-avatar rounded-circle" alt="User Avatar" />
                    <h2 className="ml-3 mb-0">Tran The Vu</h2>
                  </div>
                  <hr />
                  <a href="#" className="dropdown-item sub-menu-link">
                    <span className="material-symbols-outlined">account_circle</span>
                    <p className="mb-0">Edit Profile</p>
                  </a>
                  <a href="#" className="dropdown-item sub-menu-link">
                    <span className="material-symbols-outlined">settings</span>
                    <p className="mb-0">Settings &amp; Privacy</p>
                  </a>
                  <a href="#" className="dropdown-item sub-menu-link">
                    <span className="material-symbols-outlined">help</span>
                    <p className="mb-0">Help &amp; Support</p>
                  </a>
                  <a href="#" id="logoutButton" className="dropdown-item sub-menu-link">
                    <span className="material-symbols-outlined">logout</span>
                    <p className="mb-0">Logout</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Modal Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Shop</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item"><a href="#">Home</a></li>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-white">Shop</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Fruits Shop Start*/}
  <div className="container-fluid fruite py-5">
    <div className="container py-5">
      <h1 className="mb-4">Sân Cầu Lông</h1>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="row g-4">
            <div className="col-xl-3">
              <div className="input-group w-100 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
              </div>
            </div>
            <div className="col-6" />
            <div className="col-xl-3">
              <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                <label htmlFor="fruits">Default Sorting:</label>
                <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                  <option value="volvo">Nothing</option>
                  <option value="saab">Popularity</option>
                  <option value="opel">Organic</option>
                  <option value="audi">Fantastic</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h4>Vị Trí</h4>
                    <ul className="list-unstyled fruite-categorie">
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#"><i className="fas fa-apple-alt me-2" />Quận Tân Bình</a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#"><i className="fas fa-apple-alt me-2" />Thành Phố Thủ
                            Đức</a>
                          <span>(5)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#"><i className="fas fa-apple-alt me-2" />Quận 1</a>
                          <span>(2)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#"><i className="fas fa-apple-alt me-2" />Quận 3</a>
                          <span>(8)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#"><i className="fas fa-apple-alt me-2" />Quận 2</a>
                          <span>(5)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h4 className="mb-2">Giá</h4>
                    <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
                    <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">0</output>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h4>Bổ Sung</h4>
                    <div className="mb-2">
                      <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
                      <label htmlFor="Categories-1"> Organic</label>
                    </div>
                    <div className="mb-2">
                      <input type="radio" className="me-2" id="Categories-2" name="Categories-1" defaultValue="Beverages" />
                      <label htmlFor="Categories-2"> Fresh</label>
                    </div>
                    <div className="mb-2">
                      <input type="radio" className="me-2" id="Categories-3" name="Categories-1" defaultValue="Beverages" />
                      <label htmlFor="Categories-3"> Sales</label>
                    </div>
                    <div className="mb-2">
                      <input type="radio" className="me-2" id="Categories-4" name="Categories-1" defaultValue="Beverages" />
                      <label htmlFor="Categories-4"> Discount</label>
                    </div>
                    <div className="mb-2">
                      <input type="radio" className="me-2" id="Categories-5" name="Categories-1" defaultValue="Beverages" />
                      <label htmlFor="Categories-5"> Expired</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h4 className="mb-3">Featured products</h4>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="rounded me-4" style={{width: 100, height: 100}}>
                      <img src="img/featur-1.jpg" className="img-fluid rounded" alt />
                    </div>
                    <div>
                      <h6 className="mb-2">Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2">2.99 $</h5>
                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="rounded me-4" style={{width: 100, height: 100}}>
                      <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
                    </div>
                    <div>
                      <h6 className="mb-2">Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2">2.99 $</h5>
                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="rounded me-4" style={{width: 100, height: 100}}>
                      <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
                    </div>
                    <div>
                      <h6 className="mb-2">Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2">2.99 $</h5>
                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-4">
                    <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew
                      More</a>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative">
                    <img src="img/banner.png" className="img-fluid w-100 rounded" alt />
                    <div className="position-absolute" style={{top: '50%', right: 10, transform: 'translateY(-50%)'}}>
                      <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/tuonganh2.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Tan Truong</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">70.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/quankhu7.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Quan Khu 7</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">40.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/TADA.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San TADA</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">70.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/tanbinhtanson.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Tan Binh Tan Son</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">70.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/binhthanh2.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>CLB Binh Thanh</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">50.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/victory.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Victory</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">80.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/daiphat2.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Dai Phat</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">60.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/sgb3.png" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San Cau Long Galaxy</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">50.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/san-cau-long-duc-kim-1-1716425030.webp" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>SAN</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>San cau long Duc Kim</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                        incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">40.000đ/1h</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                          cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pagination d-flex justify-content-center mt-5">
                    <a href="shop.html" className="rounded">«</a>
                    <a href="#" className="active rounded">1</a>
                    <a href="#" className="rounded">2</a>
                    <a href="#" className="rounded">3</a>
                    <a href="#" className="rounded">4</a>
                    <a href="#" className="rounded">5</a>
                    <a href="#" className="rounded">6</a>
                    <a href="#" className="rounded">»</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fruits Shop End*/}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div className="container py-5">
      <div className="pb-4 mb-4" style={{borderBottom: '1px solid rgba(226, 175, 24, 0.5)'}}>
        <div className="row g-4">
          <div className="col-lg-3">
            <a href="#">
              <h1 className="text-primary mb-0">Bcourt</h1>
              <p className="text-secondary mb-0">Start Playing Today</p>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mx-auto">
              <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
              <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Subscribe Now</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end pt-3">
              <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-youtube" /></a>
              <a className="btn btn-outline-secondary btn-md-square rounded-circle" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-light mb-3">Why People Like us!</h4>
            <p className="mb-4">typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
            <a href className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Shop Info</h4>
            <a className="btn-link" href>About Us</a>
            <a className="btn-link" href>Contact Us</a>
            <a className="btn-link" href>Privacy Policy</a>
            <a className="btn-link" href>Terms &amp; Condition</a>
            <a className="btn-link" href>Return Policy</a>
            <a className="btn-link" href>FAQs &amp; Help</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex flex-column text-start footer-item">
            <h4 className="text-light mb-3">Account</h4>
            <a className="btn-link" href>My Account</a>
            <a className="btn-link" href>Shop details</a>
            <a className="btn-link" href>Shopping Cart</a>
            <a className="btn-link" href>Wishlist</a>
            <a className="btn-link" href>Order History</a>
            <a className="btn-link" href>International Orders</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-light mb-3">Contact</h4>
            <p>Address: 1429 Netus Rd, NY 48247</p>
            <p>Email: Example@gmail.com</p>
            <p>Phone: +0123 4567 8910</p>
            <p>Payment Accepted</p>
            <img src="img/payment.png" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright bg-dark py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2" />Your Site
              Name</a>, All right reserved.</span>
        </div>
        <div className="col-md-6 my-auto text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up" /></a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</div>

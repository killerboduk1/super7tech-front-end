<template>
  <div id="header">

    <div id="header_button">
     <div class="py-2 pt-3">
      <div id="header_left">
        <h2 class="white p-0 m-0">KONGSI</h2>
        <img src="../assets/ole777-white.png" id="header_logo"/>
      </div>
      <div id="header_right" class="mobile-hide">
        <button class="btn btn-warning" id="login-btn">Login</button>
        <button class="btn btn-secondary">Daftar sekarang</button>
      </div>
     </div>
    </div>

    <div id="header_nav">
      <nav class="navbar navbar-expand-md mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Tetang OLE777</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#">komisi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Peraturan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pertanyann & Jawaban</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="ole-officail-btn">OLE777 Official</a>
              </li>
              <li class="nav-item" id="desktop-hide">
                <a class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item" id="desktop-hide">
                <a class="nav-link" href="#">Daftar sekarang</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  </div>
</template>
<style scoped>
#header {
  background: #0a1e5a;
}
#header_button {
  max-width: 1440px;
  margin: 0px auto;  
  min-height: 70px;
}
.white {
  color:white;
}
img#header_logo {
  padding-left: 20px;
  height: 36px;
}
div#header_left {
  display: flex;
  align-items: center;
  float: left;
}
div#header_right {
  float: right;
}
nav.navbar {
  clear: both;
  max-width: 1440px !important;
  margin: 0px auto;
  padding: 0;
  margin-bottom: 0 !important;
}
ul.navbar-nav {
  display: table;
}
ul.navbar-nav li{
  display: table-cell;
}
div#header_nav {
  background: #143c83;
}
div#header_nav a {
  color: white;
}
button#login-btn {
  background: #fb7d01;
  border: none;
  color: white;
  margin: 0 10px;
}
a#ole-officail-btn {
  background: #faa41f;
  padding: 3px;
  margin-top: 5px;
  margin-left: 100px;
  color:black !important;
  font-weight: bold;
  border-radius: 3px;
}
li.nav-item {
  width: 250px;
  text-align: center;
}
@media only screen and (min-width: 768px){
  #desktop-hide {
    display: none;
  }
}
@media only screen and (max-width: 768px){
    .mobile-hide {
      display: none;
    }
    ul.navbar-nav {
      display: flex;
    }
    ul.navbar-nav li{
      text-align: left;
      border-bottom: 1px solid #585858;
      width: 100%;
    }
    a#ole-officail-btn {
      margin: 0 !important;
      background: none !important;
      color: white !important;
  }
  .container-fluid {
      padding: 0;
  }
  a.navbar-brand {
      padding-left: 10px;
  }
  a.nav-link {
      padding-left: 10px;
  }
  a#ole-officail-btn {
    padding-left: 10px !important;
  }
  img#header_logo {
      width: 150px;
  }


}
</style>
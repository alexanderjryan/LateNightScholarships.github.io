<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-fixed-top navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle uarr collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-uarr"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" :to="{ name: 'home' }">
              <div class="d-flex">
                <img
                  src="@/assets/images/grad.svg"
                  class="navbar-logo-img"
                  alt=""
                />
                <div class="navbar-title">LNS</div>
              </div>
            </router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
            <ul class="nav navbar-nav navbar-right">
              <li><router-link :to="{ name: 'home' }">Home</router-link></li>
              <li><router-link :to="{ name: 'alumni-network' }">Alumni Network</router-link></li>
              <li><router-link :to="{ name: 'about' }">About</router-link></li>
              <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
              <li>
                <p>
                  <router-link
                    :to="{ name: 'donate' }"
                    class="btn btn-primary navbar-btn lns-nav-btn"
                    >Donate</router-link
                  >
                </p>
              </li>
              <li>
                <p>
                  <router-link
                    :to="{ name: 'apply' }"
                    class="btn btn-danger navbar-btn lns-nav-btn lns-apply-btn"
                    >Apply</router-link
                  >
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <router-view />

    <footer>
      <div class="section-container footer-container">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4>About us</h4>
              <p>
                For more information, please reach out through the "Contact"
                page.
              </p>
            </div>

            <div class="col-md-4">
              <h4>
                Share the Late Night Scholarships Page on your favorite Social
                Media Platforms.
              </h4>
              <p>
                <a
                  href="https://facebook.com/"
                  class="social-round-icon white-round-icon fa-icon"
                  title=""
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  class="social-round-icon white-round-icon fa-icon"
                  title=""
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  class="social-round-icon white-round-icon fa-icon"
                  title=""
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </p>
              <p>
                <small
                  >Late Night Scholarships | Like us on
                  <a
                    href="https://www.facebook.com/LateNightScholarships"
                    class="link-like-text"
                    title="Late Night Scholarship Facebook page"
                  >
                    Facebook</a
                  ></small
                >
              </p>
            </div>

            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  created() {
    if (window.location.search[1] === '/' ) {
      var decoded = window.location.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          window.location.pathname.slice(0, -1) + decoded + window.location.hash
      );
    }
  }
};
</script>

<style>
.lns-hero {
  background-color: rgba(0,0,0,.6);
  padding: 15px;
}

.lns-hero h1 {
  margin-top: 0px;
}

.lns-nav-btn {
  width: 75px;
}

.lns-action-btn {
  width: 100px;
}

.lns-apply-btn {
  margin-left: 10px;
}

.lns-required {
  color: red;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-default {
  border-color: #ddd;
}

.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}

.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}

.panel-body {
  padding: 15px;
}

.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
}

.school-select-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.school-logo {
  height: 100px;
}

.d-flex {
  display: flex;
}

.navbar-title {
  margin-left: 10px;
  font-size: 25px;
}

.trophy-icon {
  margin-top: 5px;
}

.winner-photo {
  display: flex;
  justify-content: center;
}

.winner-photo img {
  max-width: 200px;
}

.winner {
  margin-top: 10px;
  min-height: 150px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div>
    <div class="white-text-container background-image-container phs-hero">
      <div class="opacity"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 lns-hero">
            <h1>Welcome to the Late Night Scholarships Site</h1>
            <p>
              Late Night Scholarships was formed to provide Perry alumni with
              the opportunity to give back to the community and support
              college-bound Perry students.
            </p>
            <router-link
              :to="{ name: 'donate' }"
              class="btn btn-lg btn-primary lns-action-btn"
              >Donate</router-link
            >
            <router-link
              :to="{ name: 'apply' }"
              class="btn btn-lg btn-danger lns-action-btn lns-apply-btn"
              >Apply</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="section-container border-section-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 section-container-spacer">
            <div class="text-center">
              <h2>Perry Class of 2024 Winners</h2>
              <p>
                The Late Night Scholarships fund awarded 3 scholarships to
                graduating seniors in the Perry Class of 2024. The winners
                include Aleca Lautenschleger, Jocelyn Wright, and Marlee Pireu.
                Congratulations to our winners!
              </p>
            </div>
          </div>
        </div>
        <div class="row winner">
          <div class="col-md-4">
            <div class="winner-photo">
              <img src="@/assets/images/winners/lautenschleger.jpg"/>
            </div>
            <div class="text-center">
              <h3>Aleca Lautenschleger</h3>
            </div>
          </div>
          <div class="col-md-8">
            <p>
              Aleca Lautenschleger will be majoring in Psychology at the University of Chicago.
            </p>
          </div>
        </div>
        <div class="row winner">
          <div class="col-md-4">
            <div class="winner-photo">
              <img src="@/assets/images/winners/pireu.jpg"/>
            </div>
            <div class="text-center">
              <h3>Marlee Pireu</h3>
            </div>
          </div>
          <div class="col-md-8">
            <p>
              Marlee Pireu will be attending Malone University.
            </p>
          </div>
        </div>
        <div class="row winner">
          <div class="col-md-4">
            <div class="winner-photo">
              <img src="@/assets/images/winners/wright.jpg"/>
            </div>
            <div class="text-center">
              <h3>Jocelyn Wright</h3>
            </div>
          </div>
          <div class="col-md-8">
            <p>
              Jocelyn Wright will be attending The University of Findlay to major in Pharmacy.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section-container background-color-container white-text-container"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-center">
              <h2>Donate to the Scholarship Fund</h2>
              <p>
                The Late Night Scolarships fund is accepting donations for the
                Class of 2025 scholarships. Last year, we collected over $4,500
                from over 35+ donors. 100% of donations go towards the
                scholarships. All donors have the option to review the
                anonymized applications and vote for which applicants should
                receive the scholarships.
              </p>
              <router-link
                :to="{ name: 'donate' }"
                class="btn btn-primary btn-lg"
                >Donate</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <img
              class="img-responsive"
              src="@/assets/images/img-06.png"
              alt="lns logo"
            />
          </div>

          <div class="col-md-5">
            <ul class="features">
              <li>
                <h3>Contribute to a Noble Cause</h3>
                <p>
                  Enable Perry students to attend college with reduced financial
                  obstacles.
                </p>
              </li>
              <li>
                <h3>Maintain Transparency into the Scholarship Process</h3>
                <p>
                  Help the fund review scholarship applications and vote for
                  which applicants should receive the awards.
                </p>
              </li>
              <li>
                <h3>Build an Alumni Base</h3>
                <p>
                  Reach out to fellow alumni to raise awareness and show our
                  support for the next generation of Perry professionals.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.phs-hero {
  background-image: url("~@/assets/images/img-home.jpg");
}
</style>
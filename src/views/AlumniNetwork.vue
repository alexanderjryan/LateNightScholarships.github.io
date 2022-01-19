<template>
  <div>
    <div class="container">
      <div class="row mb-2">
        <div class="col-xs-12">
          <h2>Alumni Network</h2>
          <div>The Perry Alumni Network is...</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div
            v-for="alum in alumni"
            :key="alum.firstName + alum.lastName"
            class="panel panel-default"
          >
            <div class="panel-heading title">{{ alum.firstName }} {{ alum.lastName }}</div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Education </span>
                      <school-icon :size="30"/>
                    </div>
                    <div>
                      <span class="subtitle-2">Year Graduated from Perry: </span><span>{{ alum.yearGraduated }}</span>
                    </div>
                    <div class="subtitle-2">College Attended and Major:</div>
                    <div>{{ alum.collegeAndMajor }}</div>
                  </div>

                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Career </span>
                      <city-icon :size="30"/>
                    </div>
                    <div>
                      <span class="subtitle-2">Current Job &amp; Title: </span><span>{{ alum.currentJob }}</span>
                    </div>
                    <div class="subtitle-2">Description of Current Role:</div>
                    <div class="pb">{{ alum.jobDescription }}</div>
                    <div class="subtitle-2">Prior Roles:</div>
                    <div>{{ alum.priorRoles }}</div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">About </span>
                      <information-icon :size="30"/>
                    </div>
                    <div>
                      <span class="subtitle-2">Current City: </span><span>{{ alum.currentCity }}</span>
                    </div>
                    <img :src="generateMapUrl(alum.currentCity)" class="city-map mb"/>
                    <div class="subtitle-2">Interests (Personal or Professional):</div>
                    <div>{{ alum.interests }}</div>
                  </div>

                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Contact Information </span>
                      <account-box-icon :size="30"/>
                    </div>
                    <div v-if="alum.contact.phone">
                      <span class="subtitle-2">Phone: </span><span>{{ alum.contact.phone }}</span>
                    </div>
                    <div v-if="alum.contact.email">
                      <span class="subtitle-2">Email: </span><span>{{ alum.contact.email }}</span>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Can Offer Advice On</span>
                      <certificate-icon :size="30"/>
                    </div>
                    <div>{{ alum.canOfferAdviceOn }}</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SchoolIcon from 'vue-material-design-icons/School.vue';
import CityIcon from 'vue-material-design-icons/City.vue';
import AccountBoxIcon from 'vue-material-design-icons/AccountBox.vue';
import InformationIcon from 'vue-material-design-icons/Information.vue';
import CertificateIcon from 'vue-material-design-icons/Certificate.vue';

export default {
  components: {
    SchoolIcon,
    CityIcon,
    AccountBoxIcon,
    InformationIcon,
    CertificateIcon,
  },
  data: () => ({
    alumni: [
      {
        firstName: "Calvin",
        lastName: "Curtin",
        contact: {
          phone: null,
          email: "calvinecurtin@gmail.com",
        },
        yearGraduated: "2013",
        currentCity: "Breaksville Ohio",
        collegeAndMajor: "The Ohio State University, BA Political Science, BA International Studies",
        currentJob: "Substitute Teacher",
        jobDescription: "Floating substitute for a number of school districts in/around the Brecksville area. Currently in preparation to get my Alternative Teaching License through OAE testing as well as getting a certification through Ohio State.",
        priorRoles: `
          Transportation/Logistics Officer for the US Army. 
          Executive Officer for 2-2 CAB at K16 Airbase in Seoul South Korea. Provided admin management and logistical convoy planning. 
          Platoon Leader for 1SFG(A) at JBLM in Tacoma, Washington. Provided logistical support for ammunition, water, and fuel.`,
        interests: "Dungeons and Dragons, Trekkie, golf, fan of Blue Jackets, Orioles, Patriots, and Ohio State",
        canOfferAdviceOn: "Military Planning. Personally, I was a 4-year AROTC scholarship winner at Ohio State. Can offer advice concerning joining the military whether a prospective servicemember is interested in enlisting or commissioning. Strongly recommend students consult both recruiters and veterans, like myself, to get the full scope of what they're committing to.",
      },
    ],
  }),
  methods: {
    generateMapUrl(city) {
      const params = new URLSearchParams()
      params.append('center', city)
      params.append('markers', city)
      params.append('zoom', '8')
      params.append('size', '400x300')
      params.append('scale', '2')
      params.append('key', process.env.VUE_APP_GOOGLE_API_KEY)
      return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`
    }
  }
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 20px;
}

.subtitle {
  font-weight: 700;
  font-size: 20px;
}

.subtitle-2 {
  font-weight: 600;
}

.d-flex {
  display: flex;
}

.pr {
  padding-right: 5px;
}

.pb {
  padding-bottom: 5px;
}

.mb {
  margin-bottom: 5px;
}

.mb-2 {
  margin-bottom: 15px;
}

.mentor-section {
  padding-bottom: 15px;
}

.city-map {
  max-width: 100%;
  max-height: 300px;
}
</style>

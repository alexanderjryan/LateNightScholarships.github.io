<template>
  <div>
    <div class="container">
      <div class="row mb-2">
        <div class="col-xs-12">
          <h2>Alumni Network</h2>
          <div>The MAssillon Perry Alumni Network is...</div>
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
                    <span class="subtitle-2">Current City: </span><span>{{ alum.currentCity }}</span>
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
      },{
        firstName: "Jaret",
        lastName: "Hughes",
        contact: {
          phone: null,
          email: "jaret.hughes13@gmail.com",
        },
        yearGraduated: "2016",
        currentCity: "Washington, D.C.",
        collegeAndMajor: "Xavier University – Political Science & Economy",
        currentJob: "Record Examiner/Analyst, Federal Contractor",
        jobDescription: "Supporting the Government in records keeping/compliance with civil rights regulations",
        priorRoles: `
          Legislative Intern in U.S. Senator Sherrod Brown’s Office  
        interests: "Board Games, Economics, Political Theory",
        canOfferAdviceOn: "Moving to a new city",
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
      params.append('key', 'AIzaSyCbn_XwkKv3gWQs70ENa6TiXJUw9WADjso')
      return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`
    }
  }
};
</script>




      



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
        firstName: "Elizabeth",
        lastName: "Kahler",
        contact: {
          phone: null,
          email: "ekahler14@mail.bw.edu",
        },
        yearGraduated: "2014",
        currentCity: "Little Rock, Arkansas",
        collegeAndMajor: "Baldwin Wallace University - Music Therapy/Psychology ",
        currentJob: "Board-Certified Music Therapist at Arkansas Children’s Hospital",
        jobDescription: "I’m a board-certified music therapist working in pediatrics. I’m currently working on developing the NICU music therapy program at Arkansas Children’s Hospital and am working to expand the music therapy program in the Infant/Toddler Unit. I am responsible for addressing the developmental, social, emotional, cognitive, and motor needs of patients. Additionally, I work with families as part of the bereavement team, assist with training interns, and collaborate with other members of the child life team at ACH..",
        priorRoles: `
          Music Therapist at Beyond Words Music & Dance Center in North Royalton: focused in special needs and education-based music therapy 
        interests: "I love dancing, reading, traveling, baking, and spending time with my friends.",
        canOfferAdviceOn: "-Anything music therapy related - I’ve worked in medical & with special needs! 
        -Auditioning/applying for music school",
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
      params.append('key', 'AIzaSyCbn_XwkKv3gWQs70ENa6TiXJUw9WADjso')
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

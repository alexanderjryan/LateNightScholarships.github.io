<template>
  <div>
    <div class="container">
      <div class="row mb-2">
        <div class="col-xs-12">
          <h2>Alumni Network</h2>
          <div>
            The Perry Alumni Network consists of Perry graduates who have
            offered to answer questions and provide mentorship to other students
            and alumni. Our aim is to represent a large variety of backgrounds
            and careers. You may reach out to anyone at your convenience using
            the provided contact information. If you would like to join the
            Alumni Network, please
            <router-link :to="{ name: 'contact' }">contact us</router-link>
            for a copy of the questionnaire.
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div
            v-for="alum in alumni"
            :key="alum.firstName + alum.lastName"
            class="panel panel-default"
          >
            <div class="panel-heading title">
              {{ alum.firstName }} {{ alum.lastName }}
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Education </span>
                      <school-icon :size="30" />
                    </div>
                    <div>
                      <span class="subtitle-2">Year Graduated from Perry: </span
                      ><span>{{ alum.yearGraduated }}</span>
                    </div>
                    <div class="subtitle-2">College Attended and Major:</div>
                    <div>{{ alum.collegeAndMajor }}</div>
                  </div>

                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Career </span>
                      <city-icon :size="30" />
                    </div>
                    <div>
                      <span class="subtitle-2">Current Job &amp; Title: </span
                      ><span>{{ alum.currentJob }}</span>
                    </div>
                    <div class="subtitle-2">Description of Current Role:</div>
                    <div v-if="Array.isArray(alum.jobDescription)" class="pb">
                      <ul>
                        <li v-for="role in alum.jobDescription" :key="role">
                          {{ role }}
                        </li>
                      </ul>
                    </div>
                    <div v-else-if="typeof alum.jobDescription === 'object'">
                      {{ alum.jobDescription.summary }}
                      <ul>
                        <li
                          v-for="role in alum.jobDescription.roles"
                          :key="role"
                        >
                          {{ role }}
                        </li>
                      </ul>
                    </div>
                    <div v-else>{{ alum.jobDescription }}</div>
                    <div v-if="alum.priorRoles" class="subtitle-2">
                      Prior Roles:
                    </div>
                    <div>{{ alum.priorRoles }}</div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">About </span>
                      <information-icon :size="30" />
                    </div>
                    <div>
                      <span class="subtitle-2">Current City: </span
                      ><span>{{ alum.currentCity }}</span>
                    </div>
                    <img
                      :src="generateMapUrl(alum.currentCity)"
                      class="city-map mb"
                    />
                    <div class="subtitle-2">
                      Interests (Personal or Professional):
                    </div>
                    <div>{{ alum.interests }}</div>
                  </div>

                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Contact Information </span>
                      <account-box-icon :size="30" />
                    </div>
                    <div v-if="alum.contact.phone">
                      <span class="subtitle-2">Phone: </span
                      ><span>{{ alum.contact.phone }}</span>
                    </div>
                    <div v-if="alum.contact.email">
                      <span class="subtitle-2">Email: </span
                      ><span>{{ alum.contact.email }}</span>
                    </div>
                    <div v-if="alum.contact.facebook">
                      <span class="subtitle-2">FaceBook: </span
                      ><span>{{ alum.contact.facebook }}</span>
                    </div>
                     <div v-if="alum.contact.twitter">
                      <span class="subtitle-2">Twitter: </span
                      ><span>{{ alum.contact.twitter }}</span>
                    </div>
                     <div v-if="alum.contact.instagram">
                      <span class="subtitle-2">Instagram: </span
                      ><span>{{ alum.contact.instagram }}</span>
                    </div>
                     <div v-if="alum.contact.linkedin">
                      <span class="subtitle-2">LinkedIn: </span
                      ><span>{{ alum.contact.linkedin }}</span>
                    </div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="mentor-section">
                    <div class="subtitle d-flex">
                      <span class="pr">Can Offer Advice On</span>
                      <certificate-icon :size="30" />
                    </div>
                    <div v-if="Array.isArray(alum.canOfferAdviceOn)">
                      <ul>
                        <li
                          v-for="advice in alum.canOfferAdviceOn"
                          :key="advice"
                        >
                          {{ advice }}
                        </li>
                      </ul>
                    </div>
                    <div v-else>{{ alum.canOfferAdviceOn }}</div>
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
import SchoolIcon from "vue-material-design-icons/School.vue";
import CityIcon from "vue-material-design-icons/City.vue";
import AccountBoxIcon from "vue-material-design-icons/AccountBox.vue";
import InformationIcon from "vue-material-design-icons/Information.vue";
import CertificateIcon from "vue-material-design-icons/Certificate.vue";

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
          facebook: "https://www.facebook.com/calvin.e.curtin/",
          twitter: null,
          instagram: "https://www.instagram.com/curtincalvin/",
          linkedin: "https://www.linkedin.com/in/calvincurtin/"},
        yearGraduated: "2013",
        currentCity: "Brecksville, Ohio",
        collegeAndMajor:
          "The Ohio State University, BA Political Science, BA International Studies",
        currentJob: "Substitute Teacher",
        jobDescription:
          "Floating substitute for a number of school districts in/around the Brecksville area. Currently in preparation to get my Alternative Teaching License through OAE testing as well as getting a certification through Ohio State.",
        priorRoles: `
          Transportation/Logistics Officer for the US Army. 
          Executive Officer for 2-2 CAB at K16 Airbase in Seoul South Korea. Provided admin management and logistical convoy planning. 
          Platoon Leader for 1SFG(A) at JBLM in Tacoma, Washington. Provided logistical support for ammunition, water, and fuel.`,
        interests:
          "Dungeons and Dragons, Trekkie, golf, fan of Blue Jackets, Orioles, Patriots, and Ohio State",
        canOfferAdviceOn:
          "Military Planning. Personally, I was a 4-year AROTC scholarship winner at Ohio State. Can offer advice concerning joining the military whether a prospective servicemember is interested in enlisting or commissioning. Strongly recommend students consult both recruiters and veterans, like myself, to get the full scope of what they're committing to.",
      },
      {
        firstName: "Jaret",
        lastName: "Hughes",
        contact: {
          phone: null,
          email: " jaret.hughes13@gmail.com ",
          facebook: "https://www.facebook.com/jaret.hughes.7/",
          twitter: "https://mobile.twitter.com/dumbnoodlebrain/",
          instagram: "https://www.instagram.com/j_hughes601/",
          linkedin: "https://www.linkedin.com/in/jaret-hughes-556242127/"

        },
        yearGraduated: "2016",
        currentCity: "Washington, D.C.",
        collegeAndMajor: "Xavier University – Political Science & Economy",
        currentJob: "Record Examiner/Analyst, Federal Contractor",
        jobDescription:
          "Supporting the Government in records keeping/compliance with civil rights regulations.",
        priorRoles: "Legislative Intern in U.S. Senator Sherrod Brown’s Office",
        interests: "Board Games, Economics, Political Theory.",
        canOfferAdviceOn: "Moving to a new city",
      },
      {
        firstName: "Elizabeth",
        lastName: "Kahler",
        contact: {
          phone: null,
          email: "ekahler14@mail.bw.edu",
          facebook: "https://www.facebook.com/ekahler1/",
          twitter: null,
          instagram: null,
          linkedin: "https://www.linkedin.com/in/elizabeth-kahler/"
        },
        yearGraduated: "2014",
        currentCity: "Little Rock, Arkansas",
        collegeAndMajor:
          "Baldwin Wallace University - Music Therapy/Psychology ",
        currentJob:
          "Board-Certified Music Therapist at Arkansas Children’s Hospital",
        jobDescription:
          "I’m a board-certified music therapist working in pediatrics. I’m currently working on developing the NICU music therapy program at Arkansas Children’s Hospital and am working to expand the music therapy program in the Infant/Toddler Unit. I am responsible for addressing the developmental, social, emotional, cognitive, and motor needs of patients. Additionally, I work with families as part of the bereavement team, assist with training interns, and collaborate with other members of the child life team at ACH..",
        priorRoles:
          "Music Therapist at Beyond Words Music & Dance Center in North Royalton: focused in special needs and education-based music therapy",
        interests:
          "I love dancing, reading, traveling, baking, and spending time with my friends.",
        canOfferAdviceOn: [
          "Anything music therapy related",
          "I’ve worked in medical & with special needs!",
          "Auditioning/applying for music school",
        ],
      },

      {
        firstName: "Sam",
        lastName: "Lechner",
        contact: {
          phone: null,
          email: "samanthalechner234@gmail.com",
          facebook: "https://www.facebook.com/sam.lechner1/",
          twitter: null,
          instagram: null,
          linkedin: "https://www.linkedin.com/in/samanthalechner/"
        },
        yearGraduated: "2014",
        currentCity: "Columbus, Ohio",
        collegeAndMajor: `
	The Ohio State University
	Majors: Public Management, Leadership & Policy and Strategic Communication
	Minor: Leadership Development`,
        currentJob:
          "Education Coordinator for After-School All-Stars (nonprofit)",
        jobDescription: [
          "Develop enrichment curriculum for programming",
          "Evaluate staff to make sure they implement curriculum effectively",
          "Evaluate students to collect data on social-emotional and academic growth for grant funding and to help steer direction of curriculum during the school year",
        ],
        priorRoles: "Teach for America Corps Member (New Mexico)",
        interests: "Education reform, Social Justice, Survivor",
        canOfferAdviceOn: [
          "Finding your place at college/involvement",
          "Not knowing what you want to do going into college or after college",
          "Working in nonprofit",
        ],
      },
      {
        firstName: "Anna",
        lastName: "Liebler, MSCJ, LCDC III",
        contact: {
          phone: "330-806-0779",
          email: "annamayliebler@gmail.com ",
          facebook: "https://www.facebook.com/anna.liebler.3/",
          twitter: null,
          instagram: "https://www.instagram.com/anna.may628/",
          linkedin: null
        },
        yearGraduated: "2012",
        currentCity: "Canton, Ohio",
        collegeAndMajor: `
	Kent Stark – BA Psychology
	Tiffin University – MS Criminal Justice w/ concentration in forensic psychology`,
        currentJob: "Licensed Chemical Dependency Counselor; Group Clinician",
        jobDescription:
          "Trauma- informed group counseling sessions, substance use assessments and diagnoses; individual psychotherapy, treatment planning, and case management services",
        priorRoles:
          "Group-clinician-in-training; chemical dependency counseling assistant (CDCA)",
        interests: "Social justice, harm reduction, food justice",
        canOfferAdviceOn:
          "Becoming licensed for chemical dependency treatment in Ohio, trauma-informed materials",
      },
      {
        firstName: "Curstynn",
        lastName: "Marks",
        contact: {
          phone: null,
          email: " curstynn.marks@gmail.com ",
          facebook: "https://www.facebook.com/curstynn/",
          instagram: null,
          twitter: null,
          linkedin: "https://www.linkedin.com/in/curstynn-marks-ab7479160/"
        },
        yearGraduated: "2017",
        currentCity: "Canton, Ohio",
        collegeAndMajor: "Emory University  – Economics",
        currentJob: "Enterprise Payments Analyst at KeyBank",
        jobDescription:
          "Data analytics and strategy to support the product development of financial services and technology",
        interests: "Big Data, labor market research, health economics, Queer in Canton",
        canOfferAdviceOn: "College admissions, Questbridge (low-income scholar program), getting into coding, community involvement, LGBT life",
      },
      {
        firstName: "Jesse",
        lastName: "Nodo",
        contact: {
          phone: null,
          email: "nodojm@gmail.com",
          facebook: "https://www.facebook.com/Jessaahhh/",
          twitter: "https://mobile.twitter.com/jodoooo",
          instagram:"https://www.instagram.com/jodooo_/",
          linkedin: "https://www.linkedin.com/in/jessicanodo/"
        },
        yearGraduated: "2016",
        currentCity: "Stow, Ohio",
        collegeAndMajor: "American University – International Relations",
        currentJob: "Donation and Volunteer Coordinator at ACCESS",
        jobDescription: {
          summary:
            "I am a Donation and Volunteer Coordinator on the Advancement team at ACCESS. ACCESS is a shelter for women and children experiencing homelessness in Summit County. The agency encouraged the development of self-esteem and the attainment of self-sufficiency through its commitment of providing a holistic, safe, and supportive environment through its programs of housing, advocacy, and empowerment. Through my role, I perform the following tasks",
          roles: [
            "Recruit, train, and supervise volunteers to help with fundraisers, administrative tasks, general shelter operation, child programming, meal assistance, and any other needs.",
            "Solicit, collect, inventory, and manage all in-kind (item) donations given to the agency",
            "Record, track, and recognize all in-kind and monetary donations",
          ],
        },
        priorRoles: "AmeriCorps VISTA at Stark Fresh",
        interests:
          "I enjoy spending time with family and friends, playing with my dogs, cooking and trying new recipes, and traveling.",
        canOfferAdviceOn: [
          "Going to an out of state school",
          "Working in a nonprofit",
          "Struggling to figure out what to do with your degree",
        ],
      },
      {
        firstName: "Caitlyn",
        lastName: "Pruett",
        contact: {
          phone: null,
          email: "caitlyn.pruett@pepsico.com",
          facebook: "https://www.facebook.com/caitlyn.pruett/",
          twitter:"https://mobile.twitter.com/caitlyn_pruett/",
          instagram: null,
          linkedin: "https://www.linkedin.com/in/caitlyn-pruett-9a9772129/"
        },
        yearGraduated: "2015",
        currentCity: "Cincinnati, Ohio",
        collegeAndMajor:
          "The Ohio State University – BS Mechanical Engineering",
        currentJob: "PepsiCo – Production Supervisor ",
        jobDescription:
          "Supervise 15 employees in production facility to ensure production lines are running efficiently. Also, has worked as raw material coordinator (purchase all materials need for production, bottles, caps, labels, etc.) and warehouse inventory manager (ensure accuracy of all inbound and outbound loads and maintain accurate inventory numbers). ",
        priorRoles: null,
        interests:
          "Professional: Next goal is to be site production planner. Personal: Enjoy travel, hiking, wheel ceramics.",
        canOfferAdviceOn:
          "OSU student organizations and programs, including the Scholars program, STEP, and Greek life",
      },
      {
        firstName: "Alex",
        lastName: "Ryan",
        contact: {
          phone: null,
          email: "alexryan2015@gmail.com",
          facebook: "https://www.facebook.com/alexryan2015/",
          instagram: null,
          twitter: null,
          linkedin: "https://www.facebook.com/alexryan2015/"
        },
        yearGraduated: "2015",
        currentCity: "Columbus, OH",
        collegeAndMajor: "John Carroll University – Finance and Economic",
        currentJob: "PhD Student in Environmental Economics at the Ohio State University",
        jobDescription: "I am a graduate assistant in the Economics Department at Ohio State University researching applied environmental economics.",
        priorRoles: "Senior Economic & Valuations Associate @ KPMG, Statistics and Analysis Associate @ the Federal Reserve Bank of Cleveland",
        interests:
          "Biking and playing volleyball, frequenting local coffee shops, operating the Late Night Scholarships fund, writing and researching, listening to records",
        canOfferAdviceOn: [
          "Students interested in majoring in finance or economics",
          "Students hoping to intern at top economic consulting institutions or the Federal Reserve",
          "Deciding whether to enter the job market or apply for masters/PhD programs",
          "Curating undergraduate schedule to prepare for masters/PhD applications"
        ],
      },
      {
        firstName: "Adam",
        lastName: "Tyler",
        contact: {
          phone: null,
          email: "adamtyler07@gmail.com",
          facebook: "https://www.facebook.com/profile.php?id=100011882679423/",
          twitter: null,
          instagram: null,
          linkedin: "https://www.linkedin.com/in/adam-tyler-389236107/"
        },
        yearGraduated: "2013",
        currentCity: "Charlotte, North Carolina",
        collegeAndMajor: "Ohio State University – Computer Science",
        currentJob: "Sr. Systems Engineer @ Ally Bank",
        jobDescription: {
          summary:
            "I am on the Cloud Enablement team at Ally. We work with application teams to deploy their apps on Amazon Web Services. This can be broken down into 2 major areas of focus:",
          roles: [
            "Training and onboarding teams, helping architect their applications, write and deploy infrastructure as code, and providing day to day support",
            "Building internal tools to automate deployment, reporting, training, and onboarding tasks",
          ],
        },
        priorRoles: "Salesforce Developer @ Acumen Solutions",
        interests:
          "Running, making and eating ice cream, maintaining the Late Night Scholarships website, losing to my siblings in every video game except Mario Kart",
        canOfferAdviceOn: "Majoring in computer science",
      },
      {
        firstName: "Tim",
        lastName: "Watkins",
        contact: {
          phone: null,
          email: "taw46@case.edu",
          facebook: "https://www.facebook.com/KiloWatt17/",
          twitter: "https://mobile.twitter.com/TimothyAWatkins/",
          instagram: null,
          linkedin: "https://www.linkedin.com/in/timothy-watkins-93735273/"
        },
        yearGraduated: "2013",
        currentCity: "New Haven, CT",
        collegeAndMajor: "Case Western Reserve University – Biochemistry",
        currentJob: "Ph.D. Student in Immunobiology at Yale University",
        jobDescription: `
	I am a graduate student researcher working in the
	laboratory of Dr. Ellen Foxman. I work on research
	projects focused on characterizing the immune
	responses to human respiratory viruses (such as
	rhinovirus, SARS-CoV-2, and influenza), how age may influence these responses, and how differences may
	predict clinical severity. Our lab conducts these
	studies using models of human airway cells grown in
	culture as well as analysis of clinical samples.`,
        priorRoles: null,
        interests:
          "Running, juggling, hiking/taking pictures of fungi and other cool things I spot on trails",
        canOfferAdviceOn:
          "Applying to PhD programs or students wanting to discuss entering med school ",
      },
      {
        firstName: "Josh",
        lastName: "White",
        contact: {
          phone: null,
          email: "josh.white9611@gmail.com",
          facebook: null,
          instagram: null,
          twitter: null,
          linkedin: "https://www.linkedin.com/in/joshua-white-b418a010a/"
        },
        yearGraduated: "2015",
        currentCity: "Canton, OH",
        collegeAndMajor:
          "Kent State University – Economics, Minor in Data Analytics",
        currentJob: "",
        jobDescription: "I am a financial analyst on the Financial Analysis and Planning (FP&A) team at Timken.",
        priorRoles: "Data Analyst @ Ohio Gratings, Inc",
        interests:
          "Fishing and spending time outdoors, trying out every brew method for coffee, playing guitar, continued education.",
        canOfferAdviceOn: [
          "Deciding whether to attend college for students who would be first-generation college students",
          "Students interested in data science",
        ],
      },
      {
        firstName: "Nick",
        lastName: "Gardner",
        contact: {
          phone: null,
          email: "nicholasgardner2015@gmail.com",
          facebook: null,
          instagram: null,
          twitter: "https://twitter.com/nickgardner19/",
          linkedin: null
        },
        yearGraduated: "2015",
        currentCity: "Los Angelas, CA",
        collegeAndMajor: "Beverly Hills Playhouse",
        currentJob: "Actor",
        jobDescription: "Currently going on auditions for principal speaking roles. Previously cast as background on Blackish, American Horror Story, as well as 17 other shows. Member of the Screen Actors Guild.",
        priorRoles: "Landscaper @ Blue Max Nursery, Waitor @ The Hummus Republic, Delivery Driver @ Amazon, Camera and Equipment Staff at Tavros Productions",
        interests:
          "Boxing, playing guitar, surfing, reading, and writing",
        canOfferAdviceOn: [
          "Students deciding whether to attend college",
          "Individuals interested in acting and what that entails both on the skill and administrative sides of acting, as well as the daily life and challenges of 'chasing the dream'",
        ],
      },
      {
        firstName: "Shannon",
        lastName: "Howley",
        contact: {
          phone: null,
          email: "shannon.howley97@gmail.com ",
          facebook: "https://www.facebook.com/shannon.howley.3/",
          instagram: "https://www.instagram.com/shannon.howley16/",
          twitter: null,
          linkedin: "https://www.linkedin.com/in/shannon-howley-2382b612b/"
        },
        yearGraduated: "2016",
        currentCity: "Newport, RI",
        collegeAndMajor: "George Mason University – Government and International Politics (undergraduate); Wake Forest University - Master's Degree in Communication",
        currentJob: "Ph.D. Student in Marine Affairs at University of Rhode Island",
        jobDescription: "I am a research assistant supporting departmental research into offshore windturbines along the eastern coast. Our research focuses on issues of environmental justice and communication strategies related to Indigenous populations in the Northeast. My contributions to the project include supporting conducting interviews and surveys, performing literature reviews of relevant research, and supporting reseearch design efforts.",
        priorRoles: "Graduate Assistant and Assistant Debate Coach @ Wake Forest University, Communications Fellow @ Greenlight Fund, and Research Intern @ Fahe, Professional Services Council, and Sherrod Brown's Congressional Office",
        interests:
          "Hiking, reading, playing board games, and coaching debate",
        canOfferAdviceOn: [
          "Students interested in collegiate-level speech and debate",
          "Students interested in working for policy-oriented nonprofits or going into academia",
          "Applying to  masters/PhD programs"
        ],
      },
      {
        firstName: "Shane",
        lastName: "Stockall",
        contact: {
          phone: null,
          email: "shanestockall@gmail.com",
          facebook: "https://www.facebook.com/shane.stockall/",
          instagram: "https://www.instagram.com/shanestockall/",
          twitter: null,
          linkedin: "https://www.linkedin.com/in/shanestockall/"
        },
        yearGraduated: "2013",
        currentCity: "Santa Monica, CA",
        collegeAndMajor: "Northwestern University - Computer Science",
        currentJob: "Software Engineer at Riot Games",
        jobDescription: "I'm a software engineer on League of Legends - previously, I was on the Merchant Guild team, which mostly handles the UI and services for store, loot, missions, collections, and many of the 'around-game' interactions with LoL that players have. At the moment, I'm transitioning to a more gameplay focused role on the Modes team, where I will be working with technical artists, game designers, and product to maintain existing game modes, build tools to help us work sustainably, and develop new and exciting experiences for our players.",
        priorRoles: "Software Engineer at Tiger Pistol, Engineer at Publicis Sapient",
        interests:
          "Computer science education & accessibility, photography, game development, UX & accessible design, social justice ",
        canOfferAdviceOn: 
        [
          "Computer science",
          "Software engineering",
          "Game development",
          "Resume building, applying to jobs & internships",
        ],
      },
      {
        firstName: "Andrew",
        lastName: "Koehler, P.S.",
        contact: {
          phone: "330-224-2262",
          email: "Andrewpkoehler@hotmail.com",
          facebook: "https://www.facebook.com/andrew.koehler.984/",
          instagram: "https://www.instagram.com/throw.away.your.televisionz/",
          twitter: null,
          linkedin: "https://www.linkedin.com/in/andrew-koehler-p-s-77791999/"
        },
        yearGraduated: "2006",
        currentCity: "Streetsboro, OH",
        collegeAndMajor:
          "The University of Akron, B.S. in Surveying and Mapping",
        currentJob: "Cleveland Metroparks: Surveyor Manager & The University of Akron: Adjunct Faculty in Surveying and Mapping",
        jobDescription: {
          summary:
            "I currently manage all in house surveying services for the 18 reservations, 8 golf courses, and Zoo in the 24,000 + Acre Cleveland Metroparks system. Working in the Planning and Design department, My role closely integrates with Civil Engineers, Architects, Landscape Architects, Planners, Project Managers, and GIS team. This includes field to finish roles in:",
          roles: [
            "Preparing boundary surveys and legal descriptions of existing and newly acquired properties, leases, and easements.",
            "Providing topographic surveys, base mapping, and construction layout for capital improvement projects.",
            "Coastal bathymetric (underwater) mapping and monitoring surveys",
            "Title review for new property acquisitions",
            "Creating deliverables in AutoCAD CIVIL3D for all of the above",
          ],
        },
        priorRoles: "Stark County Engineers Office: Survey Co-op and Surveyor",
        interests:
          "Running, Biking, Skiing, Live Music, Guitar",
        canOfferAdviceOn: [
          "Careers and education in Surveying, Civil Engineering, and Constructing Management.",
          "Attaining state licensure as a Professional Surveyor.",
        ],
      },
    ],
  }),
  created() {
    this.alumni.sort((a, b) =>
      a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
    );
  },
  methods: {
    generateMapUrl(city) {
      const params = new URLSearchParams();
      let zoomLevel = "8";
      if (
        !city.toLowerCase().endsWith("oh") &&
        !city.toLowerCase().endsWith("ohio")
      ) {
        zoomLevel = "6";
      }
      params.append("center", city);
      params.append("markers", city);
      params.append("zoom", zoomLevel);
      params.append("size", "400x300");
      params.append("scale", "2");
      params.append("key", atob('QUl6YVN5RFBmdXdsRHFHbmdhWn' + 'RLT3hpcXR5NGs0N0FvSTY5bjFn'));
      return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
    },
  },
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

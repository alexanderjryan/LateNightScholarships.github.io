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
      {{
        firstName: "Calvin",
        lastName: "Curtin",
        contact: {
          phone: null,
          email: "calvinecurtin@gmail.com",
        },
        yearGraduated: "2013",
        currentCity: "Brecksville, Ohio",
        collegeAndMajor: "The Ohio State University, BA Political Science, BA International Studies",
        currentJob: "Substitute Teacher",
        jobDescription: "Floating substitute for a number of school districts in/around the Brecksville area. Currently in preparation to get my Alternative Teaching License through OAE testing as well as getting a certification through Ohio State.",
        priorRoles: `
          Transportation/Logistics Officer for the US Army. 
          Executive Officer for 2-2 CAB at K16 Airbase in Seoul South Korea. Provided admin management and logistical convoy planning. 
          Platoon Leader for 1SFG(A) at JBLM in Tacoma, Washington. Provided logistical support for ammunition, water, and fuel.`,
        interests: "Dungeons and Dragons, Trekkie, golf, fan of Blue Jackets, Orioles, Patriots, and Ohio State",
        canOfferAdviceOn: "Military Planning. Personally, I was a 4-year AROTC scholarship winner at Ohio State. Can offer advice concerning joining the military whether a prospective servicemember is interested in enlisting or commissioning. Strongly recommend students consult both recruiters and veterans, like myself, to get the full scope of what they're committing to.",
      }},{ {
        firstName: "Jaret",
        lastName: "Hughes",
        contact: {
          phone: null,
          email: " jaret.hughes13@gmail.com ",
        },
        yearGraduated: "2016",
        currentCity: "Washington, D.C.",
        collegeAndMajor: "Xavier University – Political Science & Economy",
        currentJob: "Record Examiner/Analyst, Federal Contractor",
        jobDescription: "Supporting the Government in records keeping/compliance with civil rights regulations.",
        priorRoles: 
          Legislative Intern in U.S. Senator Sherrod Brown’s Office 
        interests: "Board Games, Economics, Political Theory.",
        canOfferAdviceOn: "Moving to a new city",
      }},


  {{
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
      }},
    
{{	
	firstName: "Sam",
	lastName: "Lechner",
	contact: {
	phone: null,
	email: "samanthalechner234@gmail.com",
	},
	yearGraduated: "2014",
	currentCity: "Columbus, Ohio",
	collegeAndMajor: "
	The Ohio State University
	Majors: Public Management, Leadership & Policy and Strategic Communication
	Minor: Leadership Development
	",
	currentJob: "Education Coordinator for After-School All-Stars (nonprofit)",
	jobDescription: "
	• Develop enrichment curriculum for programming
	• Evaluate staff to make sure they implement curriculum effectively
	• Evaluate students to collect data on social-emotional and academic growth for grant funding and to help steer direction of curriculum during the school year
	",
	priorRoles: `
	Teach for America Corps Member (New Mexico)
	interests: "
	• Education reform
	• Social Justice
	• Survivor
	",
	canOfferAdviceOn: "
	• Finding your place at college/involvement
	• Not knowing what you want to do going into college or after college
	• Working in nonprofit
	",
	}},
{{	
	firstName: "Anna",
	lastName: "Liebler, MSCJ, LCDC III",
	contact: {
	phone: "330-806-0779",
	email: "annamayliebler@gmail.com ",
	},
	yearGraduated: "2012",
	currentCity: "Canton, Ohio",
	collegeAndMajor: "
	Kent Stark – BA Psychology
	Tiffin University – MS Criminal Justice w/ concentration in forensic psychology
	",
	currentJob: "Licensed Chemical Dependency Counselor; Group Clinician",
	jobDescription: "
	Trauma- informed group counseling sessions, substance use assessments and diagnoses; individual psychotherapy, treatment planning, and case management services",
	priorRoles: 
	"Group-clinician-in-training; chemical dependency counseling assistant (CDCA)"
	interests: "
	Social justice, harm reduction, food justice",
	canOfferAdviceOn: "
	Becoming licensed for chemical dependency treatment in Ohio, trauma-informed materials",
	}},
{{	
	firstName: "Jesse",
	lastName: "Nodo",
	contact: {
	phone: null,
	email: "nodojm@gmail.com",
	},
	yearGraduated: "2016",
	currentCity: "Stow, Ohio",
	collegeAndMajor: "
	American University – International Relations",
	currentJob: "Donation and Volunteer Coordinator at ACCESS",
	jobDescription: "
	I am a Donation and Volunteer Coordinator on the Advancement team at ACCESS. ACCESS is a shelter for women and children experiencing homelessness in Summit County. The agency encouraged the development of self-esteem and the attainment of self-sufficiency through its commitment of providing a holistic, safe, and supportive environment through its programs of housing, advocacy, and empowerment. 
	Through my role, I perform the following tasks:
	        • Recruit, train, and supervise volunteers to help with fundraisers, administrative tasks, general shelter operation, child programming, meal assistance, and any other needs. 
	        • Solicit, collect, inventory, and manage all in-kind (item) donations given to the agency. 
	Record, track, and recognize all in-kind and monetary donations. 
	",
	priorRoles: 
	"AmeriCorps VISTA at Stark Fresh"
	interests: "
	I enjoy spending time with family and friends, playing with my dogs, cooking and trying new recipes, and traveling. ",
	canOfferAdviceOn: "
	• Going to an out of state school
	• Working in a nonprofit
	• Struggling to figure out what to do with your degree 
	",
	}},
{{	
	firstName: "Caitlyn",
	lastName: "Pruett",
	contact: {
	phone: null,
	email: "caitlyn.pruett@pepsico.com",
	},
	yearGraduated: "2015",
	currentCity: "Cincinnati, Ohio",
	collegeAndMajor: "
	The Ohio State University – BS Mechanical Engineering",
	currentJob: "PepsiCo – Production Supervisor ",
	jobDescription: "
	Supervise 15 employees in production facility to ensure production lines are running efficiently. Also, has worked as raw material coordinator (purchase all materials need for production, bottles, caps, labels, etc.) and warehouse inventory manager (ensure accuracy of all inbound and outbound loads and maintain accurate inventory numbers). ",
	priorRoles: 
	"AmeriCorps VISTA at Stark Fresh"
	interests: "
	Professional: Next goal is to be site production planner. 
	
	Personal: Enjoy travel, hiking, wheel ceramics.
	",
	canOfferAdviceOn: "
	OSU student organizations and programs, including the Scholars program, STEP, and Greek life",
	}},
{{	
	firstName: "Alex",
	lastName: "Ryan",
	contact: {
	phone: null,
	email: "alexryan2015@gmail.com",
	},
	yearGraduated: "2015",
	currentCity: "Chicago, IL",
	collegeAndMajor: "
	John Carroll University – Finance and Economic",
	currentJob: "Senior Economic & Valuations Associate @ KPMG",
	jobDescription: "
	I am a senior associate on the Economics & Valuation Services team at KPMG in the Chicago office. My team is comprised of PhD economists, lawyers, and accountants from across the world who collaborate to provide economic and financial consulting services to multinational corporations. Through my role, I perform the following tasks:
	        • Work with economists and vice presidents at large firms to optimize operations and create financial models
	        • Build Python and excel programs / tools to automate the analysis of client data
	        • Design and implement financial policies for companies
	 ",
	priorRoles: 
	"Statistics and Analysis Associate @ the Federal Reserve Bank of Cleveland"
	interests: "
	Biking and playing volleyball, frequenting local coffee shops, operating the Late Night Scholarships fund, writing and researching, listening to records",
	canOfferAdviceOn: "
	• Students interested in majoring in finance or economics
	• Students hoping to intern at top economic consulting institutions or the Federal Reserve
	",
	}},
{{	
	firstName: "Adam",
	lastName: "Tyler",
	contact: {
	phone: null,
	email: "adamtyler07@gmail.com",
	},
	yearGraduated: "2013",
	currentCity: "Charlotte, North Carolina",
	collegeAndMajor: "
	Ohio State University – Computer Science",
	currentJob: "Sr. Systems Engineer @ Ally Bank",
	jobDescription: "
	I am on the Cloud Enablement team at Ally. We work with application teams to deploy their apps on Amazon Web Services. This can be broken down into 3 major areas of focus:
	        • Training and onboarding teams, helping architect their applications, write and deploy infrastructure as code, and providing day to day support
	        • Building internal tools to automate deployment, reporting, training, and onboarding tasks
	        • Standing up a chaos testing strategy to help build and test more resilient applications
	 ",
	priorRoles: 
	null
	interests: "
	Running, making and eating ice cream, maintaining the Late Night Scholarships website, losing to my siblings in every video game except Mario Kart",
	canOfferAdviceOn: "
	• Students interested in majoring in computer science
	",
	}},
{{	
	firstName: "Tim",
	lastName: "Watkins",
	contact: {
	phone: null,
	email: "taw46@case.edu",
	},
	yearGraduated: "2013",
	currentCity: "New Haven, CT",
	collegeAndMajor: "
	Case Western Reserve University – Biochemistry",
	currentJob: "Ph.D. Student in Immunobiology at Yale University",
	jobDescription: "
	I am a graduate student researcher working in the
	laboratory of Dr. Ellen Foxman. I work on research
	projects focused on characterizing the immune
	responses to human respiratory viruses (such as
	rhinovirus, SARS-CoV-2, and influenza), how age may influence these responses, and how differences may
	predict clinical severity. Our lab conducts these
	studies using models of human airway cells grown in
	culture as well as analysis of clinical samples.
	 ",
	priorRoles: 
	null
	interests: "
	Running, juggling, hiking/taking pictures of fungi and other cool things I spot on trails",
	canOfferAdviceOn: "
	Applying to PhD programs or students wanting to discuss entering med school 
	",
	}},

{{	
	firstName: "Josh",
	lastName: "White",
	contact: {
	phone: null,
	email: "josh.white9611@gmail.com",
	},
	yearGraduated: "2015",
	currentCity: "Canton, OH",
	collegeAndMajor: "
	Kent State University – Economics, Minor in Data Analytics",
	currentJob: "Data Analyst @ Ohio Gratings, Inc",
	jobDescription: "
	I am a data analyst on the ERP team at Ohio Gratings. My team works on development and implementation of our ERP system and its integration into other businesses systems. Typical tasks in my role are:
	        • Building and maintaining an ETL layer to combine multiple cloud data sources into one localized reporting database.
	        • Creating visual analytics with tools like PowerBI and Tableau.
	        • Design and implement new processes and applications in our ERP system.
	 ",
	priorRoles: 
	null
	interests: "
	Fishing and spending time outdoors, trying out every brew method for coffee, playing guitar, continued education.",
	canOfferAdviceOn: "
	• Deciding whether to attend college for students who would be first-generation college students
	• Students interested in data science 
	",
	}},
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

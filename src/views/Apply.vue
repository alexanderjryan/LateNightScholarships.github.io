<template>
  <form class="reveal-content application-form" @submit.prevent>
    <div class="section-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="text-center">
              <h2>Late Night Scholarships Application</h2>
            </div>
            <p>
              <!-- 2024 Results will be announced in May. -->
              <br/><br/>
              <!-- Check back in January for the class of 2025 application. -->
              The Late Night Scholarship Fund was created to enable recent Perry graduates to give back to the Perry community and help three Perry students reduce the financial burden of furthering their education. The Late Night Scholarship Fund is offering three $1,500 scholarships to graduating Perry students in the class of 2024. To apply for a scholarship, please fill out the following application form in its entirety. The deadline for completing the scholarship application will be April 1, 2024. The winner of the scholarship will be announced in May 2024. 
              <br> <br> 
              Please fill out the following application form in its entirety. You will need an electronic copy of your transcript to attach to the application. It's recommended you type out your essay responses externally then copy and paste them here.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Basic Information</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="name">Full Name<span class="lns-required">*</span></label>
                    <input v-model="application.name" type="text" class="form-control" id="name" placeholder="Name">
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="email">Email Address<span class="lns-required">*</span></label>
                    <input v-model="application.email" type="email" class="form-control" id="email" placeholder="Email">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <label for="zip">Home Zip Code</label>
                    <input v-model="application.zipCode" type="text" class="form-control" id="zip" placeholder="Zip Code">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="citizen">Are you a first generation US citizen?<span class="lns-required">*</span></label>
                    <div class="radio">
                      <label>
                        <input v-model="application.firstGenCitizen" type="radio" name="citizen" id="first-gen-citizen-yes" value="true">
                        Yes, I am a first generation citizen
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input v-model="application.firstGenCitizen" type="radio" name="citizen" id="first-gen-citizen-no" value="false" checked>
                        No, I am not a first generation citizen
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="ethnicity">Select the ethnicity you identify as (Select all that apply)<span class="lns-required">*</span></label>
                    <div
                      v-for="ethnicity in ethnicities"
                      :key="ethnicity"
                      class="checkbox"
                    >
                      <label>
                        <input v-model="application.ethnicity" type="checkbox" name="ethnicity" :value="ethnicity">
                        {{ ethnicity }}
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input v-model="application.ethnicity" type="checkbox" name="ethnicity" value="Other">
                        <input v-model="otherEthnicity" type="text" class="form-control" id="ethnicity-other" name="eth-text" placeholder="Other">
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="disabilities">Please list any diagnosed disabilites (physical or mental) you feel comfortable disclosing</label>
                    <textarea v-model="application.disabilities" class="form-control" rows="2" name="disabilities" placeholder="Disabilities (Optional)" id="disabilities"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Academics & Extracurriculars</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-6">
                    <label for="graduationAttestation">Please confirm you are on track to graduate in May 2024<span class="lns-required">*</span></label>
                    <div class="radio">
                      <label>
                        <input v-model="application.graduationAttestation" type="radio" name="graduationAttestation" id="graduationYes" value="true">
                        I confirm that I will graduate in May 2024
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input v-model="application.graduationAttestation" type="radio" name="graduationAttestation" id="graduationNo" value="false">
                        I cannot confirm that I will graduate in May 2024
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="gpa">What is your unweighted GPA?<span class="lns-required">*</span></label>
                    <div
                      v-for="gpa in gpaOptions"
                      :key="gpa"
                      class="radio"
                    >
                      <label>
                        <input v-model="application.unweightedGPA" type="radio" name="gpa" id="gpa-4" :value="gpa">
                        {{ gpa }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="dual-credit-courses">How many dual credit courses have you taken (including currently enrolled)?<span class="lns-required">*</span></label>
                    <div
                      v-for="count in dcapOptions"
                      :key="count"
                      class="radio"
                    >
                      <label>
                        <input v-model="application.numberOfDualCreditCourses" type="radio" name="dual-credit-courses" id="ap-5" :value="count">
                        {{ count }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="ap-courses">How many AP courses have you taken (including currently enrolled)?<span class="lns-required">*</span></label>
                    <div
                      v-for="count in dcapOptions"
                      :key="count"
                      class="radio"
                    >
                      <label>
                        <input v-model="application.numberOfAPCourses" type="radio" name="ap-courses" id="ap-5" :value="count">
                        {{ count }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="transcript" accept=".pdf">Please attach an electronic copy of your transcript that reflects your final grades from the start of high school up until the second 9 weeks of your senior year (.pdf or .docx)<span class="lns-required">*</span></label>
                    <input type="file" accept=".pdf,.doc,.docx" id="transcript" ref="transcript">
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="perry-extracurriculars">Please list your involvement in Perry High School-affiliated extra curricular activities</label>
                    <textarea v-model="application.perryExtracurriculars" class="form-control" rows="2" name="perry-extracurriculars" id="perry-extracurriculars"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="other-extracurriculars">Please list your involvement in other extra curricular activities</label>
                    <textarea v-model="application.otherExtracurriculars" class="form-control" rows="2" name="other-extracurriculars" id="other-extracurriculars"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="university-accepted">If you have been accepted by a college or university that you plan to attend, please provide the name of the institution. If not, please answer "N/A"<span class="lns-required">*</span></label>
                    <input v-model="application.plannedUniversity" type="text" class="form-control" id="university-accepted" placeholder="College/University">
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="university-applied">If you answered "N/A" to the previous question, please list the college(s) you have applied to and the current status of your application (e.g. Accepted, Wait-listed, Denied, Waiting for Response)</label>
                    <input v-model="application.appliedUniversity" type="text" class="form-control" id="university-applied" placeholder="College(s)">
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="intended-major">What is your intended major? If you have not identified a major, which area of study are you most seriously considering (STEM, Business, Humanities, Arts, etc.)?<span class="lns-required">*</span></label>
                    <input v-model="application.majorInterest" type="text" class="form-control" id="intended-major" placeholder="Major/Interest">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Essay Section 1 (Select <strong>one</strong> of the two topics)</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      Please select <strong>one</strong> of the following topics and write a thoughtful, unique, and creative response. Displays of critical thinking will be more impactful than impressive syntax and superfluous responses.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-1-prompt-1">Throughout history, key public figures have contributed to the development of philosophical thought within a generation. While individuals such as Aristotle and Plato are often referenced as leading philosophers of their time, dozens of pop culture icons, business tycoons, and philanthropic billionaires have expressed ideas that define the thoughts of generations. Please write an essay that identifies a non-political individual that you believe is serving as a modern day philosopher for young generations and explain the philosopher's ideology/contribution to society. Alternatively, identify a modern day philosopher that you would choose to teach a freshman seminar course at your university and explain why you would want to take his/her class.</label>
                    <textarea v-model="application.essaySection1Prompt1" class="form-control" rows="4" name="essay-1-prompt-1" id="essay-1-prompt-1"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-1-prompt-2">Over 50 donors have contributed to the Late Night Scholarship fund to support the education of a high-achieving graduating senior from Perry High School. Prior to making the donation, each donor considered the best way to invest/spend this money. Rather than investing the money in a high-yield investment account or purchasing a subscription to an additional streaming service, each donor decided the best use of his/her money was to donate to a scholarship fund. Please briefly explain why you are the best investment for the donors of the Late Night Scholarship fund.</label>
                    <textarea v-model="application.essaySection1Prompt2" class="form-control" rows="4" name="essay-1-prompt-2" id="essay-1-prompt-2"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Essay Section 2 (Select <strong>one</strong> of the four topics)</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      Please select <strong>one</strong> of the following topics and write a thoughtful, unique, and creative response. Displays of critical thinking will be more impactful than impressive syntax and superfluous responses.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-1">After graduating college, you will begin your dream job and use your education to develop your career. Additionally, you will have the opportunity to apply your strengths/talent/interests to contribute to your community. As an established professional, explain how you would use your personal strengths/talents/interests to give back to the community or provide beneficial services to those in need. In your explanation, please identify the gap or weakness you have identified in your community and provide an example of what "success" looks like from your contribution/service. Creative responses to prominent issues in your community are preferred.</label>
                    <textarea v-model="application.essaySection2Prompt1" class="form-control" rows="4" name="essay-2-prompt-1" id="essay-2-prompt-1"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-2">As you begin taking new and exciting courses in college, most of the material will likely be completely new to you. This is why college is such a formidable time for so many people - they learn about new things and can develop their own perspectives in their field. However, you will also hear new perspectives on familiar topics, and the best students will be willing to update their understanding based on new information and even change their perspectives when necessary. Reflecting on your journey over the past few years, describe the last time someone changed your mind on something that you believe is really important.</label>
                    <textarea v-model="application.essaySection2Prompt2" class="form-control" rows="4" name="essay-2-prompt-2" id="essay-2-prompt-2"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-3">"Enjoy the journey" describes the feeling that people should relish in their present day experiences instead of prioritizing only their destination. What journey have you enjoyed? What destination have you enjoyed more than the journey?</label>
                    <textarea v-model="application.essaySection2Prompt3" class="form-control" rows="4" name="essay-2-prompt-3" id="essay-2-prompt-3"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-4">Musicians often construct an album to present a single overarching theme / concept to the listener. Similarly, fans can create playlists that incorporate songs from different genres, decades, and cultures to contribute to an overarching theme. Provide a self-curated playlist (5 song minimum) that expresses a specific theme and include a complimentary essay on how that theme guides you in your day to day life.</label>
                    <textarea v-model="application.essaySection2Prompt4" class="form-control" rows="4" name="essay-2-prompt-4" id="essay-2-prompt-4"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Optional Section</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      Your response in this section has no bearning on your application and will not be shared with the application reviewers.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="mentorshipInterest">Mentorship Opportunity</label>
                    <div class="checkbox">
                      <label>
                        <input v-model="application.mentorshipInterest" type="checkbox" name="mentorshipInterest" value="yes">
                        LNS donors come from a wide variety of career backgrounds. To support Perry students, 20+ donors have offered to connect and answer any questions Perry students have about attending college, applying for internships, or working in a specific field. If you are interested in receiving the contact information for specific donors, please check the box. Checking the box does not obligate you to contacting a mentor.
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="joinEmailList">Join our Email List?</label>
                    <div class="checkbox">
                      <label>
                        <input v-model="application.joinEmailList" type="checkbox" name="joinEmailList" value="yes">
                        Are you interested in joining our email list to be included in communications about donating and voting in future years?
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <button @click="submitForm" type="submit" id="submit-form" class="btn btn-primary btn-lg">
              <div style="display:flex; justify-content:center; width:165px;">
                <div v-show="!loading" id="submit-button-text">Submit Application</div>
                <div v-show="loading" id="submit-button-loader" class="loader"></div>
              </div>
            </button>
            <div v-show="submitted" id="sent-message">Your application was submitted successfully.</div>
            <div v-show="submissionError" id="submissions-error" style="color:red">There was an error submitting your application. Please try again or contact LNS.</div>
            <div v-show="validationErrors.length > 0" id="validation-message" style="color:red">
              Please fix the following errors:
              <ul id="validation-errors">
                <li v-for="error in validationErrors" :key="error">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import httpClient from '@/api/api';

export default {
  data: () => ({
    ethnicities: [
      'Asian',
      'Black/African',
      'Caucasian',
      'Hispanic/Latino',
      'Middle Eastern',
      'Native American',
      'Pacific Islander',
      'Prefer Not to Answer',
    ],
    gpaOptions: [
      '4.0',
      '3.75 - 3.99',
      '3.5 - 3.74',
      '3.25 - 3.49',
      '3.0 - 3.24',
      '< 3.0',
      'I don\'t know',
    ],
    dcapOptions: [
      '5+',
      '4',
      '3',
      '2',
      '1',
      '0',
    ],
    application: {
      name: '',
      email: '',
      zipCode: '',
      firstGenCitizen: false,
      ethnicity: [],
      disabilities: '',
      graduationAttestation: null,
      unweightedGPA: '',
      numberOfDualCreditCourses: '',
      numberOfAPCourses: '',
      perryExtracurriculars: '',
      otherExtracurriculars: '',
      plannedUniversity: '',
      appliedUniversity: '',
      majorInterest: '',
      essaySection1Prompt1: '',
      essaySection1Prompt2: '',
      essaySection2Prompt1: '',
      essaySection2Prompt2: '',
      essaySection2Prompt3: '',
      essaySection2Prompt4: '',
      mentorshipInterest: false,
      joinEmailList: false,
    },
    otherEthnicity: '',
    validationErrors: [],
    submitted: false,
    submissionError: false,
    loading: false,
  }),
  methods: {
    submitForm() {
      this.submissionError = false;
      if (!this.isFormValid()) {
        return;
      }
      this.loading = true;
      const fileReader = new FileReader();
      fileReader.onload = this.post;
      fileReader.onerror = (() => {
        this.loading = false;
        this.submissionError = true;
      });
      fileReader.readAsDataURL(this.$refs.transcript.files[0]);
    },
    post(file) {
      const data = {...this.application}
      data.ethnicity = this.getEthnicities();
      // graduationAttestation is given a string value by vue since we don't set a default
      data.graduationAttestation = data.graduationAttestation === 'true'
      data.transcript = {
        data: file.target.result.replace(/^.*,/, ''),
        mimetype: file.target.result.match(/^.*(?=;)/)[0],
        filename: `${data.name}_${this.$refs.transcript.files[0].name}`
      }

      httpClient.request({
        method: 'POST',
        url: 'apply',
        data,
      }).then(() => {
        this.submitted = true;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
        this.submissionError = true;
      });
    },
    isFormValid() {
      this.validationErrors = [];

      if (this.application.name.length === 0) {
        this.validationErrors.push('Name is required');
      }

      if (this.application.email.length === 0) {
        this.validationErrors.push('Email address is required');
      }

      if (this.getEthnicities().length === 0) {
        this.validationErrors.push('Ethnicity is required');
      }

      if (!this.application.graduationAttestation) {
        this.validationErrors.push('Graduation Attestation is required');
      }

      if (!this.application.unweightedGPA) {
        this.validationErrors.push('GPA is required');
      }

      if (!this.application.numberOfDualCreditCourses) {
        this.validationErrors.push('Number of dual credit courses is required');
      }

      if (!this.application.numberOfAPCourses) {
        this.validationErrors.push('Number of AP courses is required');
      }

      if (this.$refs.transcript.files.length !== 1) {
        this.validationErrors.push('Transcript is required');
      }
      
      if (this.application.plannedUniversity.length === 0) {
        this.validationErrors.push('College/University is required. If you have not been accepted or decided, put "N/A"');
      }

      if (this.application.majorInterest.length === 0) {
        this.validationErrors.push('Major/Area of interest is required');
      }

      return this.validationErrors.length === 0;
    },
    getEthnicities() {
      const ethnicities = [...this.application.ethnicity];
      if (ethnicities.includes('Other') && this.otherEthnicity.length > 0) {
        ethnicities.push(this.otherEthnicity);
      }
      return ethnicities.join(', ');
    }
  },
};
</script>

<style scoped>
.panel-body > .row {
  margin-bottom: 15px;
}

.panel-body > .row:last-child {
  margin-bottom: 0px;
}
</style>

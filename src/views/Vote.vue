<template>
  <div>
    <div v-if="!unauthenticated && !user">Loading...</div>
    <div v-if="unauthenticated" class="get-out text-center">
      You must receive an invite to access this page
    </div>
    <div
      v-if="user"
      class="section-container no-padding"
      style="margin-top: 15px"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h4>Hello {{ user.firstName }},</h4>
            <p>
              Thank you for donating to the LNS scholarship fund. The time has
              come to vote on this year's winners. Please review the
              applications using the dropdown or previous/next buttons below and
              decide on your top 3 candidates. When you
              are ready to cast your vote, click the "Vote My Top 3" button.
            </p>
            <div class="d-flex justify-between align-end">
              <div class="dropdown">
                <button
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Select Application
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li
                    v-for="(application, index) in applications"
                    :key="application.id"
                    @click="showApplication(index)"
                  >
                    <a href="#">Applicant {{ index + 1 }}</a>
                  </li>
                </ul>
              </div>
              <div style="max-width: 140px">
                Finished Reviewing?
                <button class="btn btn-primary vote-button" @click="voteClicked">Vote My Top 3</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedApplicationId !== null" class="row">
          <div class="col-xs-12">
            <h4>Applicant {{ selectedApplicationId + 1 }}</h4>
          </div>
          <div class="col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Basic Information</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-6">
                  <label for="citizen"
                    >Are you a first generation US citizen?
                  </label>
                  <div class="radio">
                    <label>
                      <input
                        v-model="selectedApplication.firstGenCitizen"
                        type="radio"
                        name="citizen"
                        id="first-gen-citizen-yes"
                        value="true"
                        disabled
                      />
                      Yes, I am a first generation citizen
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input
                        v-model="selectedApplication.firstGenCitizen"
                        type="radio"
                        name="citizen"
                        id="first-gen-citizen-no"
                        value="false"
                        checked
                        disabled
                      />
                      No, I am not a first generation citizen
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="ethnicity"
                    >Enter the ethnicity you identify as</label
                  >
                  <input
                    v-model="selectedApplication.ethnicity"
                    type="text"
                    class="form-control"
                    id="eithnicity"
                    disabled
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <label for="disabilities"
                    >Please list any diagnosed disabilites (physical or mental)
                    you feel comfortable disclosing</label
                  >
                  <textarea
                    v-model="selectedApplication.disabilities"
                    class="form-control"
                    rows="2"
                    name="disabilities"
                    id="disabilities"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Academics &amp; Extracurriculars</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-6">
                    <label for="graduationAttestation"
                      >Please confirm you are on track to graduate in May
                      2026</label
                    >
                    <div class="radio">
                      <label>
                        <input
                          v-model="selectedApplication.graduationAttestation"
                          type="radio"
                          name="graduationAttestation"
                          id="graduationYes"
                          value="true"
                          disabled
                        />
                        I confirm that I will graduate in May 2026
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input
                          v-model="selectedApplication.graduationAttestation"
                          type="radio"
                          name="graduationAttestation"
                          id="graduationNo"
                          value="false"
                          disabled
                        />
                        I cannot confirm that I will graduate in May 2026
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="gpa"
                      >What is your unweighted GPA?</label
                    >
                    <div v-for="gpa in gpaOptions" :key="gpa" class="radio">
                      <label>
                        <input
                          v-model="selectedApplication.unweightedGPA"
                          type="radio"
                          name="gpa"
                          id="gpa-4"
                          :value="gpa"
                          disabled
                        />
                        {{ gpa }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="dual-credit-courses"
                      >How many dual credit courses have you taken (including
                      currently enrolled)?
                      </label
                    >
                    <div
                      v-for="count in dcapOptions"
                      :key="count"
                      class="radio"
                    >
                      <label>
                        <input
                          v-model="
                            selectedApplication.numberOfDualCreditCourses
                          "
                          type="radio"
                          name="dual-credit-courses"
                          id="ap-5"
                          :value="count"
                          disabled
                        />
                        {{ count }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="ap-courses"
                      >How many AP courses have you taken (including currently
                      enrolled)?</label
                    >
                    <div
                      v-for="count in dcapOptions"
                      :key="count"
                      class="radio"
                    >
                      <label>
                        <input
                          v-model="selectedApplication.numberOfAPCourses"
                          type="radio"
                          name="ap-courses"
                          id="ap-5"
                          :value="count"
                          disabled
                        />
                        {{ count }}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="perry-extracurriculars"
                      >Please list your involvement in Perry High
                      School-affiliated extra curricular activities</label
                    >
                    <textarea
                      v-model="selectedApplication.perryExtracurriculars"
                      class="form-control"
                      rows="2"
                      name="perry-extracurriculars"
                      id="perry-extracurriculars"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label for="other-extracurriculars"
                      >Please list your involvement in other extra curricular
                      activities including employment</label
                    >
                    <textarea
                      v-model="selectedApplication.otherExtracurriculars"
                      class="form-control"
                      rows="2"
                      name="other-extracurriculars"
                      id="other-extracurriculars"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="university-accepted"
                      >If you have been accepted into a college, university, trade school, apprenticeship, or other post-secondary program you plan to attend, please provide the name of the institution or program. If not yet accepted, please answer "N/A"</label
                    >
                    <textarea
                      v-model="selectedApplication.plannedUniversity"
                      rows="2"
                      class="form-control"
                      id="university-accepted"
                      disabled
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="university-applied"
                      >If you answered "N/A" to the previous question, please list any colleges, universities, trade schools, apprenticeships, or other post-secondary programs you have applied to, along with the current status of each application (e.g., Accepted, Waitlisted, Denied, Pending)</label
                    >
                    <textarea
                      v-model="selectedApplication.appliedUniversity"
                      rows="2"
                      class="form-control"
                      id="university-applied"
                      disabled
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <label for="intended-major"
                      >What is your intended field of study, trade, or area of training? If you have not yet identified one, please describe the area you are most seriously considering (e.g., STEM, Business, Skilled Trades, Healthcare, Arts, Public Service, etc.)</label
                    >
                    <textarea
                      v-model="selectedApplication.majorInterest"
                      rows="2"
                      class="form-control"
                      id="intended-major"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Essay Section 1
                </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      Please select <strong>one</strong> of the following topics
                      and write a thoughtful, unique, and creative response.
                      Displays of critical thinking will be more impactful than
                      impressive syntax and superfluous responses.
                    </p>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection1Prompt1" class="row">
                  <div class="col-xs-12">
                    <label for="essay-1-prompt-1"
                      >Throughout history, key public figures have contributed
                      to the development of philosophical thought within a
                      generation. While individuals such as Aristotle and Plato
                      are often referenced as leading philosophers of their
                      time, dozens of pop culture icons, business tycoons, and
                      philanthropic billionaires have expressed ideas that
                      define the thoughts of generations. Please write an essay
                      that identifies a non-political individual that you
                      believe is serving as a modern day philosopher for young
                      generations and explain the philosopher's
                      ideology/contribution to society. Alternatively, identify
                      a modern day philosopher that you would choose to teach a
                      freshman seminar course at your university and explain why
                      you would want to take his/her class.</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection1Prompt1"
                      class="form-control"
                      rows="8"
                      name="essay-1-prompt-1"
                      id="essay-1-prompt-1"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection1Prompt2" class="row">
                  <div class="col-xs-12">
                    <label for="essay-1-prompt-2"
                      >Over 20 donors have contributed to the Late Night
                      Scholarship fund to support the education of a
                      high-achieving graduating senior from Perry High School.
                      Prior to making the donation, each donor considered the
                      best way to invest/spend this money. Rather than investing
                      the money in a high-yield investment account or purchasing
                      a subscription to an additional streaming service, each
                      donor decided the best use of his/her money was to donate
                      to a scholarship fund. Please briefly explain why you are
                      the best investment for the donors of the Late Night
                      Scholarship fund.</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection1Prompt2"
                      class="form-control"
                      rows="8"
                      name="essay-1-prompt-2"
                      id="essay-1-prompt-2"
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Essay Section 2
                </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    <p>
                      Please select <strong>one</strong> of the following topics
                      and write a thoughtful, unique, and creative response.
                      Displays of critical thinking will be more impactful than
                      impressive syntax and superfluous responses.
                    </p>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection2Prompt1" class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-1"
                      >After graduating, you will begin your dream job
                      and use your education to develop your career.
                      Additionally, you will have the opportunity to apply your
                      strengths/talent/interests to contribute to your
                      community. As an established professional, explain how you
                      would use your personal strengths/talents/interests to
                      give back to the community or provide beneficial services
                      to those in need. In your explanation, please identify the
                      gap or weakness you have identified in your community and
                      provide an example of what "success" looks like from your
                      contribution/service. Creative responses to prominent
                      issues in your community are preferred.</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection2Prompt1"
                      class="form-control"
                      rows="8"
                      name="essay-2-prompt-1"
                      id="essay-2-prompt-1"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection2Prompt2" class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-2"
                      >While most songs are written as stand-alone compositions
                      to present an artist's message, two songs can be "mashed"
                      together to communicate an interesting perspective /
                      message. Please list two songs that you would use to
                      create a mash-up and describe how the mash-up communicates
                      an interesting perspective / message.</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection2Prompt2"
                      class="form-control"
                      rows="8"
                      name="essay-2-prompt-2"
                      id="essay-2-prompt-2"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection2Prompt3" class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-3"
                      >"Enjoy the journey" describes the feeling that people
                      should relish in their present day experiences instead of
                      prioritizing only their destination. What journey have you
                      enjoyed?</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection2Prompt3"
                      class="form-control"
                      rows="8"
                      name="essay-2-prompt-3"
                      id="essay-2-prompt-3"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div v-if="selectedApplication.essaySection2Prompt4" class="row">
                  <div class="col-xs-12">
                    <label for="essay-2-prompt-4"
                      >Musicians often construct an album to present a single
                      overarching theme / concept to the listener. Similarly,
                      fans can create playlists that incorporate songs from
                      different genres, decades, and cultures to contribute to
                      an overarching theme. Provide a self-curated playlist (5
                      song minimum) that expresses a specific theme and include
                      a complimentary essay on how that theme guides you in your
                      day to day life.</label
                    >
                    <textarea
                      v-model="selectedApplication.essaySection2Prompt4"
                      class="form-control"
                      rows="8"
                      name="essay-2-prompt-4"
                      id="essay-2-prompt-4"
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Transcript
                </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-12">
                    If the transcript does not display properly,
                    <a target="_blank" :href="`https://lns-application-public-transcripts.s3.amazonaws.com/${selectedApplication.transcript}`">click here</a>
                    to open it in a new tab.
                    <embed
                      :src="`https://lns-application-public-transcripts.s3.amazonaws.com/${selectedApplication.transcript}`"
                      :key="selectedApplication.transcript"
                      width="100%"
                      height="500"
                      type="application/pdf"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 d-flex" style="justify-content: space-between">
            <button :disabled="selectedApplicationId == 0" @click="showApplication(selectedApplicationId - 1)">Previous</button>
            <button :disabled="selectedApplicationId == applications.length - 1" @click="showApplication(selectedApplicationId + 1)">Next</button>
          </div>
        </div>
        <div v-if="showVotePanel" class="row">
          <div class="col-xs-12">
            <h4>Select your top 3 applicants</h4>
            <form class="reveal-content application-form" @submit.prevent>
              <label for="vote1">Vote 1</label>
              <select v-model="vote1" name="vote1" class="form-control">
                <option></option>
                <option v-for="(application, index) in applications" :key="application.id" :value="application.id">Applicant {{ index + 1 }}</option>
              </select>
              <label for="vote2">Vote 2</label>
              <select v-model="vote2" name="vote2" class="form-control">
                <option></option>
                <option v-for="(application, index) in applications" :key="application.id" :value="application.id">Applicant {{ index + 1 }}</option>
              </select>
              <label for="vote3">Vote 3</label>
              <select v-model="vote3" name="vote3" class="form-control">
                <option></option>
                <option v-for="(application, index) in applications" :key="application.id" :value="application.id">Applicant {{ index + 1 }}</option>
              </select>
            </form>
            <button @click="submitForm" type="submit" id="submit-form" class="btn btn-primary btn-lg" style="margin-top: 10px">
              <div style="display:flex; justify-content:center; width:165px;">
                <div v-show="!loading" id="submit-button-text">Submit</div>
                <div v-show="loading" id="submit-button-loader" class="loader"></div>
              </div>
            </button>
            <div v-show="submitted" id="sent-message">Thank you! Your vote has been recorded.</div>
            <div v-show="submissionError" id="submissions-error" style="color:red">There was an error submitting your vote. Please try again or contact LNS.</div>
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
        <div v-show="submitted" id="sent-message"><h3>Thank you! Your vote has been recorded.</h3></div>
      </div>
    </div>
  </div>
</template>

<script>
import httpClient from "@/api/api.js";

export default {
  data: () => ({
    applications: [],
    unauthenticated: false,
    token: null,
    user: null,
    selectedApplicationId: null,
    selectedApplication: null,
    showVotePanel: false,
    ethnicities: [
      "Asian",
      "Black/African",
      "Caucasian",
      "Hispanic/Latino",
      "Middle Eastern",
      "Native American",
      "Pacific Islander",
      "Prefer Not to Answer",
    ],
    gpaOptions: [
      "4.0",
      "3.75 - 3.99",
      "3.5 - 3.74",
      "3.25 - 3.49",
      "3.0 - 3.24",
      "< 3.0",
      "I don't know",
    ],
    dcapOptions: ["5+", "4", "3", "2", "1", "0"],
    vote1: null,
    vote2: null,
    vote3: null,
    loading: false,
    validationErrors: [],
    submitted: false,
    submissionError: false,
  }),
  created() {
    this.token = this.$route.query.voteToken;
    if (!this.token) {
      this.unauthenticated = true;
    } else {
      httpClient
        .request({
          method: "GET",
          url: "vote/user",
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          this.user = response.data;
          this.loadApplications();
        })
        .catch(() => {
          this.unauthenticated = true;
        });
    }
  },
  methods: {
    async loadApplications() {
      this.applications = (
        await httpClient.request({
          method: "GET",
          url: "vote/applications",
          headers: {
            Authorization: this.token,
          },
        })
      ).data;
      this.applications.sort(this.compare);
    },
    compare(a, b) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    },
    showApplication(index) {
      this.showVotePanel = false;
      this.selectedApplicationId = index;
      this.selectedApplication = this.applications[index];
      scroll(0,0);

      this.$nextTick(() => {
        [...document.querySelectorAll('textarea')].forEach(textarea => {
          this.resizeTextarea({ target: textarea });
        });
      });
    },
    voteClicked() {
      this.selectedApplicationId = null;
      this.selectedApplication = null;
      this.showVotePanel = true;
    },
    submitForm() {
      this.submissionError = false;
      if (!this.isFormValid()) {
        return;
      }
      this.loading = true;
      httpClient.request({
        method: 'PUT',
        url: 'vote',
        data: {
          vote1: this.vote1,
          vote2: this.vote2,
          vote3: this.vote3,
        },
        headers: {
          Authorization: this.token,
        },
      }).then(() => {
        this.submitted = true;
        this.loading = false;
        this.showVotePanel = false;
      }).catch(() => {
        this.loading = false;
        this.submissionError = true;
      });
    },
    isFormValid() {
      this.validationErrors = [];

      if (!this.vote1) {
        this.validationErrors.push('Vote 1 is required');
      }

      if (!this.vote2) {
        this.validationErrors.push('Vote 2 is required');
      }

      if (!this.vote3) {
        this.validationErrors.push('Vote 3 is required');
      }
      return this.validationErrors.length === 0
    },
    resizeTextarea(e) {
      let area = e.target;
      area.style.height = 0;
      area.style.height = area.scrollHeight + 5 + 'px';
    },
  },
};
</script>

<style scoped>
.get-out {
  margin-top: 20px;
  margin-bottom: 20px;
}

.vote-button {
  margin-left: 10px;
}

input:disabled,
textarea:disabled {
  color: #141414;
}

.justify-between {
  justify-content: space-between;
}

.align-end {
  align-items: end;
}
</style>
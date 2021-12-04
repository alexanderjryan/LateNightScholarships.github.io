<template>
  <div>
    <div class="section-container no-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form class="reveal-content contact-form" @submit.prevent>
              <div class="form-group">
                <input
                  v-model="fullName"
                  type="text"
                  class="form-control"
                  name="Full Name"
                  id="name"
                  placeholder="Full name"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  name="Email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="subject"
                  type="text"
                  class="form-control"
                  name="Subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <textarea
                  v-model="message"
                  class="form-control"
                  rows="3"
                  name="Message"
                  placeholder="Enter your message"
                  id="message"
                ></textarea>
              </div>
              <div v-if="errorMessage" class="error-message">{{ errorMessage}}</div>
              <div v-if="submitted" id="sent-message">
                Your message has been sent.
              </div>
              <button
                @click="submitForm"
                id="submit-form"
                class="btn btn-primary btn-lg"
                :disabled="submitted"
              >
                Send
              </button>
            </form>
          </div>
          <div class="col-md-5 col-md-offset-1">
            <h3>Contact Us</h3>
            <div>
              <p>email: LateNightScholarshipsInc@gmail.com</p>
            </div>
            <div>
              <p>phone: 330 413 3836</p>
            </div>
            <div>
              <p>facebook: @LateNightScholarships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    errorMessage: null,
  }),
  methods: {
    submitForm() {
      if (!this.isValid()) {
        this.errorMessage = 'All fields are required';
        return
      }
      this.errorMessage = null;
      const params = {
        "Full Name": this.fullName,
        "Email": this.email,
        "Subject": this.subject,
        "Message": this.message,
      };
      axios({
        url: 'https://script.google.com/macros/s/AKfycbyHkvCo8A-Uye_CFlPPVjQUO1eTFTpfxRQRMR2zhQiCgsjdj7Nu/exec?' + new URLSearchParams(params).toString(),
        method: "GET",
      }).then(() => {
        this.submitted = true;
        this.fullName = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      })
    },
    isValid() {
      return this.fullName.length > 0 && this.email.length > 0 && this.subject.length > 0 && this.message.length > 0;
    }
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
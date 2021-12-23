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
                :disabled="submitted || loading"
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
import httpClient from '@/api/api';

export default {
  data: () => ({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false,
    errorMessage: null,
  }),
  methods: {
    submitForm() {
      if (!this.validate()) {
        return
      }
      this.errorMessage = null;
      this.loading = true;
      httpClient.request({
        method: 'POST',
        url: 'contact',
        data: {
          name: this.fullName,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }
      }).then(() => {
        this.submitted = true;
        this.loading = false;
        this.fullName = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      }).catch(() => {
        this.loading = false
        this.errorMessage = 'Failed to submit. Please try again'
      })
    },
    validate() {
      if (!(this.fullName.length > 0 && this.email.length > 0 && this.subject.length > 0 && this.message.length > 0)) {
        this.errorMessage = 'All fields are required';
        return false;
      }
      if (this.fullName.length > 100) {
        this.errorMessage = 'Name must be 100 or fewer characters'
        return false;
      }
      if (this.email.length > 100) {
        this.errorMessage = 'Email must be 100 or fewer characters'
        return false;
      }
      if (this.subject.length > 5000) {
        this.errorMessage = 'Subject must be 5000 or fewer characters'
        return false;
      }
      if (this.message.length > 5000) {
        this.errorMessage = 'Message must be 5000 or fewer characters'
        return false;
      }
      return true;
    }
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
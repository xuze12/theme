<template>
  <div>
    <Header />
    <section class="pwd-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <h2>{{title}}</h2>
            <form class="theme-form" @submit="checkForm" method="post">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
              </div>
              <div class="form-row">
                <div class="col-md-12">
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="输入你的电子邮箱"
                    name="email" required />
                </div>
                <input type="submit" class="btn btn-solid" value="提交" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import Header from '../../../components/header/header'
  import Footer from '../../../components/footer/footer'
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        title: '忘记密码',
        errors: [],
        email: null
      }
    },
    methods: {
      checkForm: function (e) {
        this.errors = []
        if (!this.email) {
          this.errors.push('Email required.')
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.')
        }
        if (!this.errors.length) return true
        e.preventDefault()
      },
      validEmail: function (email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      }
    }
  }
</script>
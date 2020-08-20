<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page" v-if='this.$route.query.item'>
          <div class="checkout-img">
              <img :src="'http://shop-qiniu.redbellnet.com/'+ this.$route.query.item.pic" alt />
          </div>
          <h4 class="checkout-prodName"> {{ this.$route.query.item.prodName }}</h4>
          <h3 class="checkout-h3">购买成功</h3>
        </div>
        <div class="checkout-page" v-else>
          <h3 class="checkout-h3">购买成功</h3>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    ValidationProvider,
    ValidationObserver
  } from 'vee-validate/dist/vee-validate.full.esm'
  import {
    mapGetters
  } from 'vuex'
  import Header from '../../../components/header/header'
  import Footer from '../../../components/footer/footer'
  export default {
    components: {
      Header,
      Footer,
      ValidationProvider,
      ValidationObserver
    },
    computed: {
      ...mapGetters({
        cart: 'cart/cartItems',
        cartTotal: 'cart/cartTotalAmount',
        curr: 'products/changeCurrency'
      })
    },
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          pincode: ''
        },
        isLogin: false,
        paypal: {
          sandbox: 'Your Sandbox ID'
        },
        payment: false,
        environment: 'sandbox',
        button_style: {
          label: 'checkout',
          size: 'medium', // small | medium | large | responsive
          shape: 'pill', // pill | rect
          color: 'blue' // gold | blue | silver | black
        },
        amtchar: ''
      }
    },
    computed: {
      
    },
    methods: {
      order() {
        this.isLogin = localStorage.getItem('userlogin')
        if (this.isLogin) {
          this.payWithStripe()
        } else {
          this.$router.replace('/page/account/login-firebase')
        }
      },
      payWithStripe() {
        const handler = (window).StripeCheckout.configure({
          key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY' publishble key
          locale: 'auto',
          closed: function () {
            handler.close()
          },
          token: (token) => {
            this.$store.dispatch('products/createOrder', {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.cartTotal
            })
            this.$router.push('/page/order-success')
          }
        })
        handler.open({
          name: 'Multikart ',
          description: 'Reach to your Dream',
          amount: this.cartTotal * 100
        })
      },
      getamt() {
        return this.cartTotal.toString()
      },
      onPaymentComplete: function (data) {
        this.$store.dispatch('products/createOrder', {
          product: this.cart,
          userDetail: this.user,
          token: data.orderID,
          amt: this.cartTotal
        })
        this.$router.push('/page/order-success')
      },
      onCancelled() {
        console.log('You cancelled a window')
      },
      onSubmit() {
        console.log('Form has been submitted!')
      }
    }
  }
</script>
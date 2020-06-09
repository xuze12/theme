<template>
  <div>
    <Header />
    <Breadcrumbs title="Checkout" />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <h3 style="width:100%;text-align:center">购买成功</h3>
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
  import Breadcrumbs from '../../../components/widgets/breadcrumbs'
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
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
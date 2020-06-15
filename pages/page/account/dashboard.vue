<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical>
              <b-tab title="帐户信息" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>我的账户</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>你好, MARK JECNO !</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>

                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>地址簿</h3>
                              <nuxt-link :to="{ path: '/page/account/address' }">
                                <a>管理地址</a>
                              </nuxt-link>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>默认账单地址</h6>
                                <address>
                                  您尚未设置默认的帐单邮寄地址。
                                  <br />
                                  <a href="#">编辑地址</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>默认送货地址</h6>
                                <address>
                                  您尚未设置默认的送货地址。
                                  <br />
                                  <a href="#">编辑地址</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="地址簿">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>地址簿</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>从地址簿中，您可以更改或编辑送货和帐单地址。</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>地址信息</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>地址簿</h3>
                              <a href="#">管理地址</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>默认账单地址</h6>
                                <address>
                                  您尚未设置默认的帐单邮寄地址。
                                  <br />
                                  <a href="#">编辑地址</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>默认送货地址</h6>
                                <address>
                                  您尚未设置默认的送货地址。
                                  <br />
                                  <a href="#">编辑地址</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="我的订单">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>我的订单</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>从您的订单中，您可以查看所有订单和订单状态。</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>订单信息</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>订单清单</h3>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>订货号：2105</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>订货号：1032</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box mt-2">
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>订货号：2105</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>订货号：1032</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="更改密码">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>更改密码</h2>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <a href="#">更改密码</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import Header from '../../../components/header/header'
  import Footer from '../../../components/footer/footer'
  import Breadcrumbs from '../../../components/widgets/breadcrumbs'
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs
    }
  }
</script>
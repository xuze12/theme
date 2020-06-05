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
                        <p>
                          从“我的帐户”仪表板中，您可以查看最近帐户的快照
                          活动并更新您的帐户信息。选择下面的链接以查看或编辑信息。
                        </p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>联系信息</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">更改密码</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>时事通讯</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <p>您目前尚未订阅任何新闻通讯。</p>
                              </div>
                            </div>
                          </div>
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
                              <p>Lorem Ipsum只是印刷和排版行业的伪文本。自1500年代以来，Lorem Ipsum一直是业界的标准伪文本,</p>
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
              <b-tab title="通讯">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>通讯</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>您将所有这些谴责享乐和赞美痛苦的错误观念是如何产生的，我将为您提供有关系统的完整说明，并阐述实际的教导。</p>
                        <p>但是，要向您解释所有这些错误的想法，即谴责快乐和赞美痛苦</p>
                        <p>
                          另一方面，我们义愤填and，不喜欢那些被当下享乐的魅力所迷惑和士气低落，被欲望蒙蔽的人，以致他们无法预见必然会带来的痛苦和麻烦。平等责任属于那些因意志薄弱而无法履行职责的人，这与因劳苦而痛苦而缩水的说法相同。这些情况非常简单，易于区分。在一个空闲的小时中，当我们的选择权受到限制，并且没有任何事情妨碍我们能够做到自己最喜欢的事情时，每一种快乐都将受到欢迎，而每一次痛苦都将得到避免。但是在某些情况下，由于要求履行职责或承担商业义务，经常​​会发生这样的情况，必须放弃享乐并接受烦恼。因此，智者在这些问题上始终坚持选择的原则：他拒绝享乐以获取其他更大的享乐，否则他忍受痛苦以避免更糟的痛苦。
                        </p>
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
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>您将所有这些谴责享乐和赞美痛苦的错误观念是如何产生的，我将为您提供有关系统的完整说明，并阐述实际的教导。</p>
                        <p>S但是，要向您解释所有这些错误的想法，即谴责快乐和赞美痛苦</p>
                        <p>
                          另一方面，我们义愤填and，不喜欢那些被当下享乐的魅力所迷惑和士气低落，被欲望蒙蔽的人，以致他们无法预见必然会带来的痛苦和麻烦。平等责任属于那些因意志薄弱而无法履行职责的人，这与因劳苦而痛苦而缩水的说法相同。这些情况非常简单，易于区分。在一个空闲的小时中，当我们的选择权受到限制，并且没有任何事情妨碍我们能够做到自己最喜欢的事情时，每一种快乐都将受到欢迎，而每一次痛苦都将得到避免。但是在某些情况下，由于要求履行职责或承担商业义务，经常​​会发生这样的情况，必须放弃享乐并接受烦恼。因此，智者在这些问题上始终坚持选择的原则：他拒绝享乐以获取其他更大的享乐，否则他忍受痛苦以避免更糟的痛苦。
                        </p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>联系信息</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">更改密码</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>时事通讯</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <p>您目前尚未订阅任何新闻通讯。</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="登录">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>登录</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>从您的帐户仪表板注销。选择下面的链接以查看或编辑信息。</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>联系信息</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">更改密码
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>时事通讯</h3>
                                <a href="#">编辑</a>
                              </div>
                              <div class="box-content">
                                <p>您目前尚未订阅任何新闻通讯。</p>
                              </div>
                            </div>
                          </div>
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
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import Header from '../../../components/header/xz_header1'
  import Footer from '../../../components/footer/hlh_footer1'
  import Breadcrumbs from '../../../components/widgets/breadcrumbs'
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs
    }
  }
</script>
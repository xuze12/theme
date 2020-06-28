const url = "http://119.23.227.173:9901";
// const url = '/api'
export const api = {
  email_login: url + "/mail/login",

  index_imgs: url + "/indexImgs", // 轮播图
  prod_tag_list: url + "/prod/tag/prodTagList", // 商品分类标签
  category_list: url + "/category/categoryInfo", // 商品分类列表
  page_prod_list: url + "/prod/pageProd", // 加载分类列表
  home_tag_prod_list: url + "/prod/tagProdList", // 首页所有标签商品接口
  prod_Info: url + "/prod/prodInfo", //商品详情
  prod_comm: url + "/prodComm/prodCommPageByProd", //评论
  lasted_prod_page: url + "/prod/lastedProdPage", //新品推荐
  more_buy_prod_list: url + "/prod/moreBuyProdList", //每日疯抢
  shop_cart: url + "/p/shopCart/info", //购物车信息
  change_item: url + "/p/shopCart/changeItem", //添加、修改用户购物车物品
  prod_list_by_tagId: url + "/prod/prodListByTagId", //通过分组标签获取商品列表
  delete_item: url + "/p/shopCart/deleteItem", //删除用户购物车物品
  collection: url + "/p/user/collection/prods", //获取用户收藏商品列表
  add_orCancel: url + "/p/user/collection/addOrCancel", //添加、取消收藏
  top_noticeList: url + "/shop/notice/topNoticeList", //置顶公告列表信息.
  notice_info: url + "/shop/notice/info", //公告详情
  search_goods: url + "/search/searchProdPage", // 搜索商品
  add_addr: url + "/p/address/addAddr", // 新增用户地址
  add_addr_list: url + "/p/address/list", // 用户地址列表
  delete_addr: url + "/p/address/deleteAddr", // 删除订单用户地址
  update_addr: url + "/p/address/updateAddr", //修改订单用户地址
  default_addr: url + "/p/address/defaultAddr", //设置默认地址
};

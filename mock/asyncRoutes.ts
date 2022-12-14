// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 99
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};

// 订单
const order = {
  path: "/order",
  redirect: "/order/orderList",
  meta: {
    icon: "emojione:astonished-face",
    title: "订单",
    rank: 10
  },
  children: [
    {
      path: "/order/orderList",
      name: "orderList",
      component: "order/orderList/index",
      meta: {
        title: "订单列表",
        showParent: true
      }
    },
    {
      path: "/order/orderList/:id",
      name: "orderDetail",
      component: "order/orderList/detail",
      meta: {
        showLink: false,
        title: "订单详情"
      }
    },
    {
      path: "/order/orderStatistics",
      name: "orderStatistics",
      component: "order/orderStatistics/index",
      meta: {
        title: "订单统计"
      }
    }
  ]
};

// 用户
const user = {
  path: "/user",
  redirect: "/user/list",
  meta: {
    icon: "ep:user",
    title: "用户",
    rank: 11
  },
  children: [
    {
      path: "/user/userList",
      name: "userList",
      component: "user/userList/index",
      meta: {
        title: "用户列表",
        showParent: true
      }
    },
    {
      path: "/user/userList/:id",
      name: "userDetail",
      component: "user/userList/detail",
      meta: {
        showLink: false,
        title: "用户详情"
      }
    },
    {
      path: "/user/userStatistics",
      name: "userStatistics",
      component: "user/userStatistics/index",
      meta: {
        title: "用户统计"
      }
    },
    {
      path: "/user/feedback",
      name: "feedback",
      component: "user/feedback/index",
      meta: {
        title: "用户反馈"
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [order, user, permissionRouter]
      };
    }
  }
] as MockMethod[];

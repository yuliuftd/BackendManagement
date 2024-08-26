import PageNotFound from '../pages/PageNotFound'
import Login from "../pages/login"
import Index from "../pages/admin/dashboard/Index"
import Edit from "../pages/admin/products/Edit";
import List from '../pages/admin/products/List';

export const mainRoutes = [{
    path:'/login',
    component: Login
},{
    path: '/404',
    component: PageNotFound
}];

export const adminRoutes = [
{
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: '看板',
    icon: "area-chart"
}, {
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: "商品管理",
    icon: "shop"
},{
    path: '/admin/products/edit/:id',
    component: Edit,
    isShow: false
}];
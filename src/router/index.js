import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../views/Home/Home.vue');
const Category = () =>
    import ('../views/Category.vue');
const Shopcar = () =>
    import ('../views/Shopcar.vue');
const Profile = () =>
    import ('../views/Profile.vue');


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/shopcar',
            component: Shopcar
        },
        {
            path: '/profile',
            component: Profile
        }
    ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
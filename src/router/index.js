import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainpage'
import Skeleton1 from '@/components/skeleton1'
import Skeleton2 from '@/components/skeleton2'
import Skeleton3 from '@/components/skeleton3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },{
      name:'Menu1',
      path:'/menu1',
      component:Skeleton1
    },{
      name:'Menu2',
      path:'/menu2',
      component:Skeleton2
    },{
      name:'Menu3',
      path:'/menu3',
      component:Skeleton3
    }
  ]
})

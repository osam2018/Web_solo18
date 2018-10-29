import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/DashBoard.vue'
import About from './views/About.vue'
import Network from './views/NetWork.vue'
import Works from './views/Works.vue'
import ToDo from "./views/Works/Todo.vue";
import Complete from "./views/Works/Complete.vue";
import Entry from "./views/Network/Entry.vue"
import Eps1 from "./views/Network/Entry/Eps.vue"
import ServerRoom from "./views/Network/Entry/Serverroom.vue"
import Firewall from "./views/Network/Firewall.vue"
import Room from "./views/Network/Room.vue"
import A from "./views/Network/Room/A.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },{
          path: '/Dashboard',
          name: 'Dashboard',
          component: Dashboard
      },
    {
      path: '/about',
      name: 'about',
      component: About
    },
      {
          path: '/Works',
          name: 'Works',
          component: Works,
          children: [
              {
                  path: '/',
                  component: ToDo
              },
              {
                  path: 'ToDo',
                  component: ToDo
              },
              {
                  path: 'Complete',
                  component: Complete
              }
          ]
      },
   {
          path: '/Network',
          name: 'Network',
          component: Network,
          children: [
              {
                  path: '/',
                  component: A
              },
              {
                  path: 'Entry',
                  component: Entry,
                  children: [
                      {
                          path: 'Eps1',
                          component: Eps1
                      },
                      {
                          path: 'ServerRoom',
                          component: ServerRoom
                      }
                  ]
              },
              {
                  path: 'Firewall',
                  component: Firewall
              },
              {
                  path: 'Room',
                  component: Room,
                  children: [
                      {
                          path: 'A',
                          component: A
                      }
                  ]
              }
          ]
      }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CreateUserApp from '../views/users/CreateUserApp.vue'
import IndexUserApp from '../views/users/IndexUserApp.vue'
import EditUserApp from '../views/users/EditUserApp.vue'
import CreateProductoApp from '../views/productos/CreateProductoApp.vue'
import IndexProductoApp from '../views/productos/IndexProductoApp.vue'
import EditProductoApp from '../views/productos/EditProductoApp.vue'
import GaleriaProductoApp from '../views/productos/GaleriaProductoApp.vue'
import IndexCategoriaApp from '../views/categorias/IndexCategoriaApp.vue'
import CreateIngresoApp from '../views/ingreso/CreateIngresoApp.vue'
import IndexIngresoApp from '../views/ingreso/IndexIngresoApp.vue'
import DetalleIngresoApp from '../views/ingreso/DetalleIngresoApp.vue'
import VentasIndexApp from '../views/ventas/VentasDetalleApp.vue'
import VentasDetalleApp from '../views/ventas/VentasIndexApp.vue'
import currency_formatter  from 'currency-formatter'

Vue.use(VueRouter)

const routes = [
  {path: '/dashboard',name: 'dashboard',component: HomeView},
  {path: '/',name: 'login',component: LoginView},
  {path: '/usuarios/index',name: 'usuario-index',component: IndexUserApp},
  {path: '/usuarios/create',name: 'usuario-create',component: CreateUserApp},
  {path: '/usuarios/edit/:id',name: 'usuario-edit',component: EditUserApp},


  {path: '/producto',name: 'producto-index',component: IndexProductoApp},
  {path: '/producto/create',name: 'producto-create',component: CreateProductoApp},
  {path: '/producto/edit/:id',name: 'producto-edit',component: EditProductoApp},
  {path: '/producto/galeria/:id',name: 'producto-galeria',component: GaleriaProductoApp},

  {path: '/ingreso/create',name: 'ingreso-create',component: CreateIngresoApp},
  {path: '/ingreso',name: 'ingreso-index',component: IndexIngresoApp},
  {path: '/ingreso/:id',name: 'ingreso-detalle',component: DetalleIngresoApp},
  
  {path: '/ventas',name: 'ventas-index',component: VentasIndexApp},
  {path: '/ventas/:id',name: 'ventas-detalle',component: VentasDetalleApp},

  
  {path: '/categorias',name: 'categorias',component: IndexCategoriaApp},
  
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

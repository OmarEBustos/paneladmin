<template>
  <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <AsideApp />
        <div class="flex-lg-1 h-screen overflow-y-lg-auto">

            <TopApp />

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                <div class="col">

                                    <!-- Pretitle -->
                                    <h6 class="header-pretitle">
                                    Products
                                    </h6>

                                    <!-- Title -->
                                    <h1 class="header-title">
                                    Edit product
                                    </h1>

                                </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                <div class="col">

                                    <!-- Nav -->
                                    <ul class="nav nav-tabs nav-overflow header-tabs">
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/producto">All the Products</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active">Edit product</a>
                         
                                        
                                    </li>
                                    
                                    </ul>

                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-7">

                            <div class="row justify-content-between align-items-center">
                                <div class="col">
                                <div class="row align-items-center">
                                    <div class="col-auto">

                                    <!-- Avatar 
                                    <div class="avatar">
                                        <img class="avatar-img rounded-circle" src="/assets/default.jpg" alt="...">
                                    </div>-->
                                    <div class="avatar">
                                        <img class="avatar-img rounded-circle" :src="str_image" alt="...">
                                    </div>


                                    </div>
                                    <div class="col ms-n2">

                                    <!-- Heading -->
                                    <h4 class="mb-1">
                                        <b>Front page</b>
                                    </h4>

                                    <!-- Text -->
                                    <small class="text-muted">
                                        PNG or JPG no bigger than 1000px wide and tall.
                                    </small>

                                    </div>
                                </div> <!-- / .row -->
                                </div>
                                <div class="col-auto">

                                <!-- Button -->
                                
                                <label for="file-upload" class="btn btn-sm btn-primary">
                                    Upload
                                </label>
                                <input style="display:none" id="file-upload" type="file" v-on:change="uploadImage($event)"/>

                                </div>
                            </div> <!-- / .row -->

                            <!-- Divider -->
                            <hr class="my-5">

                            <div class="row">
                                <div class="col-12 col-md-12">

                                <!-- Email address -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="mb-1">
                                    Product Title
                                    </label>

                                    <!-- Form text -->
                                    <small class="form-text text-muted">
                                    This contact will be shown to others publicly, so choose it carefully.
                                    </small>

                                    <!-- Input -->
                                    <input type="text" class="form-control" placeholder="Título del producto" v-model="producto.titulo">

                                </div>

                                </div>

                                <div class="col-12 col-md-6">

<!-- First name -->
<div class="form-group">

    <!-- Label -->
    <label class="form-label">
    Category
    </label>

    <small class="form-text text-muted">
    This contact will be shown to others publicly, so choose it carefully.
    </small>

    <!-- Input -->
    <select name="" class="form-select" v-model="producto.categoria" v-on:change="getsubcategorias($event)">
        <option value="" disabled selected>Select</option>
        <option :value="item.categoria.titulo" v-for="item in categorias">{{item.categoria.titulo}}</option>
        
    </select>

</div>

</div>

<div class="col-12 col-md-6">

<!-- First name -->
<div class="form-group">

<!-- Label -->
<label class="form-label">
Subcategory
</label>

<small class="form-text text-muted">
This contact will be shown to others publicly, so choose it carefully.
</small>

<!-- Input -->
<select name="" class="form-select" v-model="producto.subcategoria">
    <option value="" disabled selected>Select</option>
    <option :value="item.titulo" v-for="item in subcategorias">{{item.titulo}}</option>
        
</select>

</div>

</div>

                                <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                    Variety
                                    </label>

                                    <!-- Input -->
                                    <input type="text" class="form-control" placeholder="Variety title" v-model="producto.str_variedad">

                                </div>

                                </div>

                                <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                    Price
                                    </label>

                                    <!-- Input <input type="number" readonly class="form-control" placeholder="Precio" v-model="producto.precio">
                                    -->
                                    <input type="number" class="form-control mb-3" placeholder="0.00" v-model="producto.precio">

                                </div>

                                </div>
                                
                                <div class="col-12 col-md-12">

                                <!-- Phone -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                    Description
                                    </label>

                                    <!-- Input -->
                                    <textarea class="form-control" id=""  rows="3" placeholder="Description" v-model="producto.extracto"></textarea>

                                </div>

                                </div>
                                
                            </div> <!-- / .row -->

                            

                            <div class="row">
                                <div class="col-12 col-md-6">

                                <!-- Public profile -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="mb-1">
                                    Published Product
                                    </label>

                                    <!-- Form text -->
                                    <small class="form-text text-muted">
                                    Making your profile public means that anyone on the Dashkit network will be able to find you.
                                    </small>

                                    <div class="row">
                                    <div class="col-auto">

                                        <!-- Switch -->
                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="switchOne" v-model="producto.estado" />
                                        <label class="form-check-label" for="switchOne"></label>
                                        </div>

                                    </div>
                                    <div class="col ms-n2">

                                        <!-- Help text -->
                                        <small class="text-muted">
                                        Draft Activated
                                        </small>

                                    </div>
                                    </div> <!-- / .row -->
                                </div>

                                </div>
                                <!-- <div class="col-12 col-md-6">

                                Allow for additional Bookings 
                                <div class="form-group">

                                    
                                    <label class="mb-1">
                                    En descuento
                                    </label>


                                    <small class="form-text text-muted">
                                    If you are available for hire outside of the current situation, you can encourage others to hire you.
                                    </small>

                                    <div class="row">
                                    <div class="col-auto">


                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="switchTwo" v-model="producto.descuento"/>
                                        <label class="form-check-label" for="switchTwo"></label>
                                        </div>

                                    </div>
                                    <div class="col ms-n2">

                                        
                                        <small class="text-muted">
                                        Descuento desactivado
                                        </small>

                                    </div>
                                    </div>  / .row
                                </div> 

                                </div>-->
                            </div> <!-- / .row -->

                            <!-- Button -->
                            <button class="btn btn-primary mt-5" v-on:click="validar()">
                             Update Product
                            </button>

                            <!-- Divider 
                            <hr class="mt-4 mb-5">

                            

                            <div class="row justify-content-between align-items-center mb-5">
                                <div class="col-12">

                                   
                                    <h2 class="mb-2">
                                        Variedades de producto
                                    </h2>

                                    
                                    <p class="text-muted mb-xl-0">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore aspernatur, beatae id quod consequuntur.
                                    </p>
                                </div>
                                
                            </div>

                            <div class="row mb-5">
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Proveedor
                                    </small>
                                    <input type="text" class="form-control" placeholder="Empresa proveedora" v-model="variedad.proveedor">
                                </div>
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Variedad
                                    </small>
                                    <input type="text" class="form-control" placeholder="Tallas, colores..."  v-model="variedad.variedad">
                                </div>
                                <div class="col">
                                        <small class="text-muted">
                                        Acción*
                                    </small> <br>
                                    <button class="btn btn-primary btn-block" style="width: 100% !important;" v-on:click="validar_variedad()">Agregar</button>
                                </div>
                            </div> 




                            <div class="card">
                                <div class="card-body" v-if="variedades.length >= 1">

                                    
                                    <div class="list-group list-group-flush my-n3">
                                   
                                    <div class="list-group-item" v-for="item in variedades">
                                        <div class="row align-i tems-center" >
                                        <div class="col">

                                            
                                            <h4 class="mb-1">
                                                {{item.variedad.toUpperCase()}}
                                            </h4>

                                           
                                            <small class="text-muted">
                                                <b>SKU:</b>  {{item.sku.toUpperCase()}}
                                            </small>

                                        </div>
                                        <div class="col">
                                             
                                            <h4 class="mb-1">
                                                {{item.stock}}
                                            </h4>

                                            
                                            <small class="text-muted">
                                                Unidades
                                            </small>
                                        </div>
                                        <div class="col-auto">

                                           
                                            <button v-if="item.stock == 0" class="btn btn-sm btn-danger" type="button" v-b-modal="'delete-'+item._id">
                                                Eliminar
                                            </button>

                                            <button v-if="item.stock >= 1" disabled class="btn btn-sm btn-danger" type="button">
                                                Eliminar
                                            </button>

                                            <b-modal centered :id="'delete-'+item._id" title="BootstrapVue" title-html="<h4 class='card-header-title'><b>Add a member</b></h4>" @ok="eliminar(item._id)">
                                                <p class="my-4">{{item._id}}</p>
                                            </b-modal>
                                        </div>
                                        </div> 
                                    </div>
                                
                                    </div>

                                </div>
                                <div class="card-body" v-if="variedades.length == 0">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <img src="/assets/media/la-cuna-de-newton.gif" alt="" style="width:80px">
                                        </div>
                                    </div>
                                </div>
                            </div> -->


                        </div>

                       

                    </div> 
                </div> <!-- / .row -->
            </div>

        </div>
        
    </div>
</template>

<script>
// @ is an alias to /src

import AsideApp from '@/components/AsideApp.vue';
import TopApp from '@/components/TopApp.vue';
import axios from 'axios';
import { BIconSkype } from 'bootstrap-vue';

export default {
  name: 'EditProductoApp',
  components: {
    AsideApp,
    TopApp
  },
  data() {
      return {
          str_image: '/assets/default.jpg',
          producto: {
              categoria: '',
              estado: false,
              descuento: false,
              portada: undefined,
          },
          portada : undefined,
          variedad: {},
          sku: '',
          variedades : [],
          categorias: [],
          subcategorias: [],
      }
  },
  methods: {
      init_data(){
          axios.get(this.$url+'/obtener_producto_admin/'+this.$route.params.id,{
              headers:{
                   'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
              }
          }).then((result)=>{
              console.log(result);
              this.producto = result.data;
              this.str_image = this.$url+'/obtener_portada_producto/'+this.producto.portada;
          });
      },
      uploadImage($event){

            var image;

            if($event.target.files.length >= 1){
                image = $event.target.files[0];
            }

            if(image.size <= 100000){
               if(image.type == 'image/jpeg'||image.type == 'image/png'||image.type == 'image/webp'||image.type == 'image/jpg'){
                   this.str_image = URL.createObjectURL(image);
                    this.portada = image;
                    this.producto.portada = this.portada;
               }else{
                   this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: 'An image must be entered.',
                        type: 'error'
                    });
                    this.portada = undefined;
               }
            }else{
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'The image size can be up to 1MB',
                    type: 'error'
                });
                this.portada = undefined;
            }
          
      },
      validar(){
            if(!this.producto.titulo){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product title',
                    type: 'error'
                });
            }else if(!this.producto.categoria){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Select the product category',
                    type: 'error'
                });
            }else if(!this.producto.subcategoria){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Select the product subcategory',
                    type: 'error'
                });
            }else if(!this.producto.precio){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product price',
                    type: 'error'
                });
            }else if(!this.producto.extracto){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product description',
                    type: 'error'
                });
            }else if(!this.producto.str_variedad){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product characteristic',
                    type: 'error'
                });
            }else if(this.producto.portada == undefined){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Select a cover image',
                    type: 'error'
                });
            }else{
                this.actualizar();
            }
          
      },

      actualizar(){
          var data;
          var content = '';
          if(this.portada != undefined){
            content = 'multipart/form-data';
            data = new FormData();
            data.append('titulo',this.producto.titulo);
            data.append('categoria',this.producto.categoria);
             data.append('subcategoria',this.producto.subcategoria);
             data.append('precio',this.producto.precio);
            data.append('extracto',this.producto.extracto);
            data.append('estado',this.producto.estado);
            data.append('str_variedad',this.producto.str_variedad);
            data.append('descuento',this.producto.descuento);
            data.append('portada',this.producto.portada); //IMAGEN
          }else{
              content = 'application/json';
              data = this.producto;
          }

          axios.put(this.$url+'/actualizar_producto_admin/'+this.$route.params.id,data,{
              headers: {
                  'Content-Type': content,
                  'Authorization' : this.$store.state.token
              }
          }).then((result)=>{
              
              if(result.data.message){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: result.data.message,
                    type: 'error'
                });
              }else{
                  this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'The product has been updated.',
                    type: 'success'
                });
              }
              
          })


      },

      validar_variedad(){
          if(!this.variedad.proveedor){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product supplier',
                    type: 'error'
                });
          }else if(!this.variedad.variedad){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Enter the product characteristic',
                    type: 'error'
                });
          }else{
              this.variedad.producto = this.$route.params.id;
              this.variedad.sku =  this.generar_sku();

              this.registro_variedad();
          }
         
      },

      registro_variedad(){
          axios.post(this.$url+'/registro_variedad_producto',this.variedad,{
              headers:{
                   'Content-Type': 'application/json',
                  'Authorization' : this.$store.state.token
              }
          }).then((result)=>{
              this.variedad = {};
              this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'The new characeristic has been added.',
                    type: 'success'
                });
                this.init_variedades();
          });
      },  
      generar_sku(){
        let sku = this.producto.titulo.substr(0,3)+''+this.producto.str_variedad.substr(0,3)+''+this.variedad.variedad.substr(0,3)+''+this.variedad.proveedor.substr(0,3);
        return sku.toUpperCase();
        //XIACOLROJREA
      },

      init_variedades(){
          axios.get(this.$url+'/obtener_variedades_producto/'+this.$route.params.id,{
              headers:{
                   'Content-Type': 'application/json',
                  'Authorization' : this.$store.state.token
              }
          }).then((result)=>{
              this.variedades = result.data;
              /* this.variedad = {};
              this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'Se agrego la nueva variedad.',
                    type: 'success'
                }); */
          });
      },
      eliminar(id){
        axios.delete(this.$url+'/eliminar_variedad_producto/'+id,{
              headers:{
                   'Content-Type': 'application/json',
                  'Authorization' : this.$store.state.token
              }
          }).then((result)=>{
            
            if(result.data.message){
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: result.data.message,
                    type: 'error'
                }); 
            }else{
                this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'The characteristic was deleted.',
                    type: 'success'
                });

                this.init_variedades();
            }
                
          });
      },

      init_categorias(){
        axios.get(this.$url+'/listar_categorias_admin',{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': this.$store.state.token,
            }
        }).then((result)=>{
            
            this.categorias = result.data;
            this.subcategorias = this.categorias.filter(item=>item.categoria.titulo == this.producto.categoria)[0].subcategorias;
        
        });
    },
    getsubcategorias(event){
      this.subcategorias = this.categorias.filter(item=>item.categoria.titulo == event.target.value)[0].subcategorias;
        }
  },
  beforeMount() {
      this.init_data();
      this.init_categorias();
      this.init_variedades();
      
  },
}
</script>

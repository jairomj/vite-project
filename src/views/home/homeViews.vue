<template>
    <HelloWorld />
  <div class="text-center flex justify-center">
    <label class="input input-bordered flex items-center gap-2">
  Name
  <input type="text" class="grow" placeholder="Daisy" id="tarea" v-model="valor" />
</label>
  <button @click="agregarTarea" class="btn btn-primary mx-4">Add task</button>
</div>
<div class="text-center flex justify-center">
  <ul>
    <li v-for="tarea in tareas" :key="tarea.id">
      {{ tarea }}
    </li>
  </ul>
  {{ $data }}
</div>
  
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelloWorld from '../../components/HelloWorld.vue';
  
  export default defineComponent({
    data(){
      return{
        tareas: [],
        valor: '',
      }
    },
    methods:{
      agregarTarea(){
        this.tareas.push(this.valor);
        this.valor = '';
      }
    },
    name: 'HomeViews',
    components: {
      HelloWorld,
    },
  });
  
  </script>
  
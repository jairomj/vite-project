<template>
    <HelloWorld />
  <div class="text-center flex justify-center">
    <label class="input input-bordered flex items-center gap-2">
  Name
  <input type="text" class="grow" placeholder="Daisy" id="tarea" v-model="valor" />
</label>
  <button @click="agregarTarea" class="btn btn-primary mx-4">Add task</button>
</div>
<input type="checkbox" value="Option 1" v-model="options"> Option 1 <br>
<input type="checkbox" value="Option 2" v-model="options"> Option 2 <br>
<input type="checkbox" value="Option 3" v-model="options"> Option 3 <br>
<input type="checkbox" value="Option 4" v-model="options"> Option 4 <br>
<p>Has seleccionado {{ options.join(', ') }}</p>
<div class="text-center flex justify-center">
  <ul>
    <li v-for="tarea in tareas" :key="tarea.id">
      {{ tarea }}
    </li>
  </ul>
  {{ $data }}
</div>

<div class="text-center flex justify-center">
  <ul>
    <li v-for="(animal, i) in animales" :key="animal.id">
      El {{ animal }} hace {{ sonidos[i] }}
    </li>
  </ul>
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
        options: [],
        animales: ['perro', 'gato', 'pajaro'],
        sonidos: ['woof', 'miow', 'tweet'],
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
  
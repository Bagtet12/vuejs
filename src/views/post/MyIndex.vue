<template>
    <div>
      <form @submit.prevent="calculate">
        <label>Jenis Kelamin:</label>
        <select v-model="form.jenis_kelamin">
          <option value="laki-laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
        <br />
        <label>Usia:</label>
        <input type="number" v-model="form.umur" />
        <br />
        <label>Perokok:</label>
        <input type="checkbox" v-model="form.perokok" />
        <br />
        <label>Nominal Investasi:</label>
        <input type="number" v-model="form.nominal_investasi" />
        <br />
        <label>Lama Investasi:</label>
        <input type="number" v-model="form.lama_investasi" />
        <br />
        <button type="submit">Hitung</button>
      </form>
      <br />
      <div v-if="message">
        Message: {{ message }}
      </div>
      <div v-if="status">
        status: {{ status }}
      </div>
      <div v-if="data">
        data: {{ data }}
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  
  export default {
    data() {
      return {
        form: {
          jenis_kelamin: 'laki-laki',
          umur: 0,
          perokok: false,
          nominal_investasi: 0,
          lama_investasi: 0,
        },
        message: null,
        status: null,
        data: null,
      };
    },
    methods: {
      async calculate() {
        try {
          const response = await axios.post('http://pateron.test/api/investasi', this.form);
          this.message = response.data.message;
          this.status = response.data.status;
          this.data = response.data.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
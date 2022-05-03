let app = new Vue({
    el: "#myApp",

    data: {
        info: null
    },
    methods: {
        
    },
    mounted () {
        axios
          .get('https://api.openweathermap.org/data/2.5/weather?lat=43&lon=5&appid=d31f06ee007a3b205abd05ca07748597')
          .then(response => (this.info = response))
      }
})


// const instance = axios.create({
//     baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d31f06ee007a3b205abd05ca07748597',
//   });



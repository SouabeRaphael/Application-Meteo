let app = new Vue({
    el: "#myApp",

    data: {
        info: null,
        
    },
    methods: {
        
        
    },
    mounted () {
        axios
          .get('https://api.openweathermap.org/data/2.5/onecall?lat=49.4929&lon=0.1134&exclude=hourly,minutely&units=metric&appid=0b714303b59b32e758cc43e063f1b1aa')
          .then(response => (this.info = response))
      }
})


// const instance = axios.create({
//     baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d31f06ee007a3b205abd05ca07748597',
//   });



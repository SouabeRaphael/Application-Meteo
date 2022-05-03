let app = new Vue({
    el: "#myApp",

    data: {
        info: null,
        request: '',
        startUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
        endUrl : '&appid=d31f06ee007a3b205abd05ca07748597',
        temp: null,
    },
    methods: {
        getWeather: function() {
            axios
            .get(this.startUrl+this.request+this.endUrl)
            .then(response => (this.temp = response.data.main.temp))
        },
        
    },
    mounted () {
        if(this.request = ' '){
            this.request = "Paris"
            getWeather()
        }
    }
    
})

// API KEY   d31f06ee007a3b205abd05ca07748597  



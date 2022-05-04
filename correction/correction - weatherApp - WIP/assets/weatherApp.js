// instance de Vue
let weatherApp = new Vue({
    el: '#app',
    data: {
        openweatherKey: '500c4b896e1fa39468f4636de884812b',
        infos: null,
        error: true,
        query: '',
        cityName: '',
        currentTemp: '',
        minTemp: '',
        maxTemp: '',
        sunrise: '',
        sunset: '',
        pressure: '',
        humidity: '',
        wind: '',
        overcast: '',
        icon: '',
        today: ''
    },
    methods: {
        getWeather() {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&APPID=${this.openweatherKey}&lang=fr`
            axios
                .get(url)
                .then(response => {
                    this.error = false;
                    this.infos = response.data;
                    this.cityName = response.data.name;
                    this.today = new Date(response.data.dt * 1000).toLocaleTimeString("fr-FR").slice(0, 4);
                    this.currentTemp = response.data.main.temp;
                    this.minTemp = response.data.main.temp_min;
                    this.maxTemp = response.data.main.temp_max;
                    this.pressure = response.data.main.pressure;
                    this.humidity = response.data.main.humidity + '%';
                    this.wind = response.data.wind.speed + 'm/s';
                    this.overcast = response.data.weather[0].description;
                    this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString("fr-FR").slice(0, 4);
                    this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString("fr-FR").slice(0, 4);
                })
                .catch(error => {
                    this.error = true
                    console.log('Erreur : ' + error)
                })
        }
    },
    beforeMount() {

        console.log('contenu :' + this.query)

        if (this.query != '') {
            this.getWeather();
        }

    }
});
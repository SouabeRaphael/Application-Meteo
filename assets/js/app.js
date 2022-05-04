let app = new Vue({
    el: "#myApp",

    data: {
        info: null,
        startUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
        endUrl : '&appid=d31f06ee007a3b205abd05ca07748597',
        cityName: '',
        temp: '',
        maxDegres: '',
        minDegres: '',
        feels: '',
        pressure: '',
        humidity: '',
        show: false,
        changeColor: false,
        
        city_regex: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
        regexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        
        verifCity: '',
        email: '',
        verifEmail: '',
        erreur: '',
        erreurCity: '',
    },
    methods: {
        getWeather: function() {
            axios
            .get(this.startUrl+this.cityName+this.endUrl)
            .then(response => {
                this.info = response.data.main;
                this.temp = parseInt(this.info.temp - 273,15);
                this.maxDegres = parseInt(this.info.temp_max - 273,15);
                this.minDegres = parseInt(this.info.temp_min - 273,15);
                this.feels = parseInt(this.info.feels_like - 273,15);
                this.pressure = parseInt(this.info.pressure);
                this.humidity = parseInt(this.info.humidity);
            })
            // console.log(this.city_regex.test(this.cityName))
        },
        partage(){
            this.show = !this.show;
        },
        checkInput(){
            this.verifEmail = this.regexEmail.test(this.email);
            // console.log(this.verifEmail);
            if(this.verifEmail == false){
                this.erreur = 'email incomplet';
            }
            else{
                this.erreur = 'email correct';
            }
        },
        is_city_valid() {
            this.verifCity = this.city_regex.test(this.cityName);
            if(this.verifCity == false){
                this.erreurCity = 'Ville incorecte';
            }
            else{
                this.erreurCity = 'Ville correct';
            }
        }
        
    },
    mounted () {
        if(this.cityName = ' '){
            this.cityName = "Le Havre";
            this.temp = '19',
            this.maxDegres = '20',
            this.minDegres = '19',
            this.feels = '19',
            this.pressure = '1020',
            this.humidity = '76'
        }
    }
    
})

// API KEY   d31f06ee007a3b205abd05ca07748597  
<template>
	<app-header></app-header>
	<div class="weather">
		<img v-bind:src.sync="data_weather.weather[0].icon">
		<div class="table-responsive">
				<table class="table table-bordered table-striped">
					<tr>
						<td>Temperature</td>
						<td>{{ data_weather.main.temp_min }} - {{ data_weather.main.temp_max }}</td>
					</tr>
					<tr>
						<td>Wind</td>
						<td>{{ data_weather.wind.speed }} m/s</td>
					</tr>
					<tr>
						<td>Cloudiness</td>
						<td>{{ data_weather.clouds.all }}</td>
					</tr>
					<tr>
						<td>Pressure</td>
						<td>{{ data_weather.main.pressure }}</td>
					</tr>
					<tr>
						<td>Humidity</td>
						<td>{{ data_weather.main.humidity}} %</td>
					</tr>
					<tr>
						<td>Sunrise</td>
						<td>{{ data_weather.sys.sunrise }}</td>
					</tr>
					<tr>
						<td>Sunset</td>
						<td>{{ data_weather.sys.sunset }}</td>
					</tr>
					<tr>
						<td>Geo Coords</td>
						<td>[{{ data_weather.coord.lon }},{{ data_weather.coord.lat }}]</td>
					</tr>
				</table>
			</div>
	</div>
	<app-footer></app-footer>
</template>

<script>
	// Use VueResource get data from api
	export default {

		data: function() {
			return {
				data_weather: {}
			}
		},
		asyncData: function(resolve, reject) {
      this.$http
      .get('http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=2de143494c0b295cca9337e1e96b00e0')
        .then(function(response) {
          for(var i = 0; i < response.data.weather.length; i++) {
            response.data.weather[i].icon = "http://openweathermap.org/img/w/" + response.data.weather[i].icon + ".png"
            console.log(response.data.weather[i].icon)
          }
          return (this.data_weather = response.data)
        })
		},
		filters: {
			img_filter: function(value) {
				if(value == undefined)
					return ""
				return value
			}
		}	    	
	}
</script>

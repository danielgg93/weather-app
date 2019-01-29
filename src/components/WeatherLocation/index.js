import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from '../WeatherLocation/WeatherData/index';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';

const cities = [ "Medellin,co", "Cali,co", "Bogota,co,", "Buenos aires,ar", "Pereira,co" ];

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const  { city } = props;
        this.state = {
            city,
            data: null,
            cities: cities,
        };
        //console.log("constructor");

    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
        //this.ChangeCity();

    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");


    }

     
 
    getCity = (event) => {


        const {value} = event.target;

        this.setState({
            city: value
        });
        
        console.log(this.state.city);


    }
  
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            //console.log(newWeather);
                this.setState({
                    data: newWeather
                })
            //console.log(data);
        })
        
    };

    render(){
        //console.log("render");
        const {city, data, cities } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?
                <WeatherData data={data}></WeatherData> : 
                <CircularProgress size={50}/>
                }
                <select id="myCity" onChange={this.getCity}> 
                {cities.map((currentCity,index) => <option key={index} value={currentCity}>{currentCity}</option>)}
                </select>
        </div>
        );
    }
    
    
};


WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
}


export default WeatherLocation;
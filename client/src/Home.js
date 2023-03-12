import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Home extends Component{
    constructor() {
        super();
        this.state = {
            videos:[]
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch('http://localhost:8000/video');
            const data = response.json();
            this.setState({videos:[...data]});
        } catch(err){
                console.log(err);
        }
    }
    render(){
        return(
            <div className="App App-header">
                <div className="container">
                      <div className="row">
                         {this.state.videos.map(video =>{
                            <div className="col-md-4" key={video.id}>
                                <Link to={`/player/${video.id}`}>
                                    <div className="card border-0">
                                        <img src={`http://localhost:8000/video${video.poster}`} alt=`${video.name}`/>
                                        <div className="card-body">
                                            <p>{video.name}</p>
                                            <p>{video.duration}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                         })}
                        </div>  
                </div>

            </div>
        ) 
    }
}
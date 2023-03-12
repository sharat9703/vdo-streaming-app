import React,{Component} from "react";

export default class Player extends Component{
    constructor(props){
        super();
        this.state={
            videoId: this.props.match.params.id,
            videoData : {}
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch(`http://localhost:8000/video/${this.state.videoId}/data`);
            const data = await response.json();
            this.setState({videoData:data});
        } catch(err) {
            console.log(err);
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <video controls muted autoPlay>
                        <source src={`http://localhost:8000/video/${this.state.videoId}`} type="video/mp4"></source>
                    </video>
                    <h1>{this.state.videoData.name}</h1>
                </header>
            </div>
        )
    }
}
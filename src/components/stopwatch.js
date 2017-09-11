import React, {Component} from 'react';

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            status:'stopped',
            start: null,
            elapsed: 0
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
    }
    render(){
        console.log('re rendering');
        const {elapsed, status} =this.state;
        return (
            <div>
                <h1>{this.state.elapsed}</h1>
                <p>{this.state.status}</p>
                <button onClick = {this.start}>Start</button>
                <button onClick = {this.stop}>Stop</button>
            </div>
        );
    }
    // start(){
    //     console.log("this is : ",this);
    //     let dateObject = new Date();
    //     let startTime = dateObject.getTime();
    //     const newState = {
    //         status: 'running',
    //         start: startTime
    //     }
    //     this.setState(newState);
    // }

    start(){
        this.setState({
            status :'running',
            start : new Date().getTime()
        });
        setTimeout(this.update,10);
    }
    stop(){
        this.setState({
            status : 'stopped',
        });

    }
    update(){
            const{status,start}=this.state;
        if(status === 'running'){
            this.setState({
                elapsed : new Date().getTime() - start
            });
            setTimeout(this.update,10)
        }
    }
}

export default Stopwatch;
import React, { Component} from 'react';
import  p5 from 'p5' 

export default class SketchPage extends Component {

    myRef = React.createRef()

    Sketch = ( p ) => {
        
        let x = 100;
        let y = 100;

        p.setup = () => {
            p.createCanvas(800, 800);
        };
        let xS = 0;
        let yS = 0;
        
        p.draw = () => {
            p.background(0);
            p.fill(255);
            p.rect(xS, yS,50,50);
            p.line(0, 0, 0, 100);
            if(xS > 800) xS = 0;
            if(yS > 800) yS = 0;
            xS ++;
            yS ++;
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }


    render() {
        return (
            <div ref={this.myRef}>
                
            </div>
        )
    }
}

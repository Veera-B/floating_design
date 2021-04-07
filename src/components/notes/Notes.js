
import React from 'react';
import {useSpring,animated} from 'react-spring';
import Card from '../../UI/Cards/Card';
import Info from '../../UI/Info/Info';

const Notes = (props) => {
    const springprops = useSpring({
        from:{
            marginTop:-100,
            opacity:0,
            zIndex:-10,
        },
        marginTop:0,
        opacity:1,
        zIndex:0,
        delay: 600
    })
    return (
        <animated.div style = {springprops}>
            <Info >
                    <span>LoreIncididunt amet 
                    <span style = {{color:'#ed5509',padding:'5px'}}> sit dolore qui magna qui proident </span>
                      anim duis ad consequat in deserunt sit.</span>
            </Info>
            <Card />
        </animated.div>
    );
};
export default Notes;
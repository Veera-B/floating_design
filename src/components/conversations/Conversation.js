import React from 'react';
import {useSpring,animated} from 'react-spring';

import Info from '../../UI/Info/Info';
import Card from '../../UI/Cards/Card';


function Conversation(props) {
    const springProps = useSpring({
        from:{
            marginTop:-100,
            opacity:0,
            zIndex:-10,
        },
        marginTop:0,
        opacity:1,
        zIndex:0,
        delay: 600
    });
    return (
        <animated.div style={springProps}>
            <Info >
                    <span>LoreIncididunt amet 
                    <span style = {{color:'#ed5509',padding:'5px'}}> sit dolore qui magna qui proident </span>
                      anim duis ad consequat in deserunt sit.</span>
                  </Info>
                  <Card >Aliqua aliquip ea non ut sunt id consequat aliqua enim mollit amet est amet.
                      <p>Officia reprehenderit exercitation anim pariatur commodo magna ea occaecat commodo enim dolor fugiat.</p>
                  </Card>
        </animated.div>
    );
}

export default Conversation;
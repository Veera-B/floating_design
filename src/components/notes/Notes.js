
import React,{useRef,useEffect, useState} from 'react';
import {useSpring,animated } from 'react-spring';
import Card from '../../UI/Cards/Card';
import Info from '../../UI/Info/Info';
import data from '../../MOCK_DATA.json';
import classes from './Notes.module.css';


const Notes = (props) => {
    const [searchKey,setSearchKey] = useState('');
    const selectedSpringProps = useSpring({
        from:{
            opacity: 0,
        },
        opacity:1,
        delay:1000
    });
    const divRef = useRef(new Array());
    let selectedUsers =[];
    const getUser = (user) =>{
        divRef.current[user.id].style.borderRight = '5px solid red';
        if(selectedUsers.length>0){
            selectedUsers.forEach((key,val)=>{
                if(key.id==user.id){ 
                   //alert('un select')
                    divRef.current[user.id].style.borderRight = 'none';
                    selectedUsers.splice(val,1);
                }
                else{
                    //alert('if not in select listselect')
                    selectedUsers.push(user);
                }
            })
        }
        else{
            //alert('if 0 select')
            selectedUsers.push(user);
            
        }
        console.log(selectedUsers)
    }    

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
            <Card>
                <div className = "row">
                    <div className = "col-8">
                    <input type = "text" name="search" 
                    style = {{
                        display:'block',
                        width:"100%",
                        padding:'5px',
                    }}
                    placeholder = "Search......" 
                    onChange = {(e)=>setSearchKey(e.target.value)}
                    value = {searchKey} /></div>
                    <div className = "col-4">
                        <button 
                        className = {classes.clearBtn}
                        onClick = {()=>setSearchKey('')}

                        >Clear</button>
                    </div>
                </div>
                
                {data.filter(key=>key.first_name.toLowerCase().includes(searchKey.toLowerCase()))
                .map(
                    (value,index)=>{
                    return <animated.div className = {` row ${classes.myRow}`}  style = {selectedSpringProps}
                            ref = {(ele)=>divRef.current[value.id]=ele} 
                            key = {value.id}  id = {value.first_name} 
                            onClick = {()=>getUser(value)}>
                                <div className = "col">{value.first_name} Amet dolore reprehenderit sunt commodo ipsum do excepteur consequat eu ipsum culpa aliquip aute do. </div>
                            </animated.div>
                })}
            </Card>
        </animated.div>
    );
};
export default Notes;
import '../style.css';

import React, { useEffect, useState }  from 'react';

import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
/* import ProgressBar from 'react-bootstrap/ProgressBar'; */
import { ThreeHorseLoading } from 'react-loadingg';
import axios from 'axios';

export const ProjectCard = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [link, setLink] = useState('#404');
    const [languages, setLanguages] = useState([]);
    const [sum, setSum] = useState(0);
    const url = 'https://api.github.com/repos/kdavid96/';
    const my_token = process.env.REACT_APP_GITHUB_TOKEN;
    var finalObj = [];

    useEffect(() => {
        var obj = [];
        axios.get(url + props.repo_name + '/languages', { 
            headers: {
                 'Accept' : 'application/vnd.github.v3+json',
                 'Authorization': `token ${my_token}`
             }})
            .then(data => {
                var langSum = 0;
                obj = Object.entries(data.data);
                obj.forEach(([_, value]) => langSum += value);
                obj.forEach(([key, value]) => finalObj.push(key) && finalObj.push(value));
                setLanguages(finalObj);
                setSum(langSum);
            })
            .catch( error => console.error(error));
    
        axios.get(url + props.repo_name, { 
            headers: {
                    'Accept' : 'application/vnd.github.v3+json',
                    'Authorization': `token ${my_token}`
                }})
            .then(data => setLink(data.data.html_url))
            .catch( error => console.error(error));
            setLoading(false);
            languages.push('JavaScript');
            languages.push(45);
            languages.push('HTML');
            languages.push(45);
            languages.push('CSS');
            languages.push(45);
        }, [])

/*     const renderSwitch = (language, precentage, sum) => {
        switch(language) {
            case 'JavaScript':
                return <ProgressBar style={{height: "400%"}} min={0} max={100} variant="danger" now={((precentage/sum)*100).toFixed(1)}/>;
            case 'TypeScript':
                return <ProgressBar style={{height: "400%"}} min={0} max={100} variant="success" now={((precentage/sum)*100).toFixed(1)}/>;
            case 'HTML':
                return <ProgressBar style={{height: "400%"}} min={0} max={100} variant="info" now={((precentage/sum)*100).toFixed(1)}/>;
            case 'SCSS':
                return <ProgressBar style={{height: "400%"}} min={0} max={100} variant="warning" now={((precentage/sum)*100).toFixed(1)}/>;
            case 'CSS':
                return <ProgressBar style={{height: "400%", backgroundColor: '#0E55FF !important'}} min={0} max={100} now={((precentage/sum)*100).toFixed(1)}/>;
            default:
                return <ProgressBar style={{height: "400%"}} min={0} max={100} variant="info" now={0}/>;
        }
    } */

    /* const notationSwitch = (language, precentage, sum) => {
        switch(language) {
            case 'JavaScript':
                return <p><span style={{backgroundColor: '#DC3545'}}></span>JavaScript {((precentage/sum)*100).toFixed(2)}%</p>;
            case 'TypeScript':
                return <p><span style={{backgroundColor: '#198754'}}></span>TypeScript {((precentage/sum)*100).toFixed(2)}%</p>;
            case 'HTML':
                return <p><span style={{backgroundColor: '#0DCAF0'}}></span>HTML {((precentage/sum)*100).toFixed(2)}%</p>;
            case 'SCSS':
                return <p><span style={{backgroundColor: '#FFC107'}}></span>SCSS {((precentage/sum)*100).toFixed(2)}%</p>;
            case 'CSS':
                return <p><span style={{backgroundColor: '#0E55FF'}}></span>CSS {((precentage/sum)*100).toFixed(2)}%</p>;
            default:
                return <p><span style={{backgroundColor: 'transparent'}}></span></p>;
        }
    } */

    if (isLoading || languages[1] === 'Infinity') {
        return( 
        <div className="project-card">
            <span className="card-link" target="_blank" key={props.id}>
                <h1 className="card-title">{props.name}</h1>
                <p className="card-desc">{props.desc}</p>
                <p className="card-techstack">{props.techstack}</p>
                <p className="card-date">{props.date}</p>
                <div className="buttons">
                    <Button href="liveversion" target="_blank">Live Version</Button>
                    <Button href={link} target="_blank">See Code</Button>
                </div>
                <div className="loader">
                    <ThreeHorseLoading size={'large'} style={{position: 'relative', left: '50%'}}/>
                </div>
            </span>
        </div>
        )}else{ if(window.innerWidth > 800){
        return (
            <div className="project-card" key={props.id} style={{backgroundColor: 'transparent'}}>
                <div className="card-header-own">
                    <Fade delay={400} left><h1 className="card-title">{props.name}</h1></Fade>
                    <Fade delay={400} right><p className="card-date" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>0{props.id}</p></Fade>
                </div>
                {languages.length > 0 ? (
                    <>
                    <Fade delay={800} bottom><div className="technology-notations">
                        {languages.map((language, index) => index % 2 === 0 ? <li className="technology-notation" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>{language}</li> : '')}
                    </div></Fade>
                    </>
                ) : (
                    <>
                        <Fade delay={800} top><p className="empty">My GitHub repository is empty ❌</p></Fade>
                    </>
                )}
                <div className="project-body">
                    <div className="image-side">
                        <Fade delay={1000} bottom><p className="card-desc" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>{props.desc}</p></Fade>
                        <Fade delay={1200} bottom><div className="button-notation-container">
                            <div className="buttons">
                                {props.live.length > 0 ?
                                    <Button className="project-button" href={props.live} target="_blank">Live Version</Button>
                                    :
                                    <br/>
                                }
                                <Button className="project-button" href={link} target="_blank">See Code</Button>
                            </div>
                        </div></Fade>
                    </div>
                    <Fade delay={600} right><div className="project-image">{
                        window.innerWidth < 800 ? (
                            <img src={props.img1} alt={props.name + 1}></img>
                        ) : (
                            <img src={props.img} alt={props.name}></img>
                        )
                    }
                    </div></Fade>
                </div>
            </div>
    
        );}else{
            return (
                <div className="project-card" key={props.id} style={{backgroundColor: 'transparent'}}>
                    <div className="card-header-own">
                        <Fade delay={400} right><h1 className="card-title">{props.name}</h1></Fade>
                        <Fade delay={400} left><p className="card-date" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>0{props.id}</p></Fade>
                    </div>
                    {languages.length > 0 ? (
                        <>
                        <Fade delay={800} bottom><div className="technology-notations">
                            {languages.map((language, index) => index % 2 === 0 ? <li className="technology-notation" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>{language}</li> : '')}
                        </div></Fade>
                        </>
                    ) : (
                        <>
                            <Fade delay={800} top><p className="empty">My GitHub repository is empty ❌</p></Fade>
                        </>
                    )}
                    <div className="project-body">
                        <div className="image-side">
                            <Fade delay={1000} bottom><p className="card-desc" style={{color: props.isDark ? props.theme.textDark : props.theme.textLight}}>{props.desc}</p></Fade>
                            <Fade delay={1200} bottom><div className="button-notation-container">
                                <div className="buttons">
                                    {props.live.length > 0 ?
                                        <Button className="project-button" href={props.live} target="_blank">Live Version</Button>
                                        :
                                        <br/>
                                    }
                                    <Button className="project-button" href={link} target="_blank">See Code</Button>
                                </div>
                            </div></Fade>
                        </div>
                        <Fade delay={1200} right><div className="project-image">{
                            window.innerWidth < 800 ? (
                                <img src={props.img1} alt={props.name + 1}></img>
                            ) : (
                                <img src={props.img} alt={props.name}></img>
                            )
                        }
                        </div></Fade>
                    </div>
                </div>
        
            );
        }
    }

}
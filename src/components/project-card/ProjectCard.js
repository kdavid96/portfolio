import '../style.css';

import React, { useEffect, useState }  from 'react';

import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ThreeHorseLoading } from 'react-loadingg';
import axios from 'axios';

export const ProjectCard = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [link, setLink] = useState('#404');
    const [languages, setLanguages] = useState([]);
    const [sum, setSum] = useState(0);
    const url = 'https://api.github.com/repos/kdavid96/';
    const my_token = process.env.REACT_APP_GITHUB_TOKEN;
    var obj = [];
    var finalObj = [];

    useEffect(() => {
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

    const renderSwitch = (language, precentage, sum) => {
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
    }

    const notationSwitch = (language, precentage, sum) => {
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
    }

    const renderProgressBar = () => {
        let bar = [];
        for(let i=0; i<languages.length; i+=2){
            bar.push(renderSwitch(languages[i], languages[i+1], sum));
        }
        return bar;
    }

    const renderNotations = () => {
        let bar = [];
        for(let i=0; i<languages.length; i+=2){
            bar.push(notationSwitch(languages[i], languages[i+1], sum));
        }
        return bar;
    }

    if (isLoading || languages[1] == 'Infinity') {
        return( 
        <div className="project-card-no-hover">
            <div className="project-card">
                <a className="card-link" target="_blank" key={props.id}>
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
                </a>
                <div className="project-card-hover">
                    <p>HOVER</p>
                </div>
            </div>
        </div>
        )}else{
        return (
            <div className="project-card-no-hover" key={props.id} style={{backgroundColor: '#04060f'}}>
                <div className="project-card" key={props.id} style={{backgroundColor: 'transparent'}}>
                    <a /*href={link} target="_blank"*/ className="card-link">
                        <h1 className="card-title">{props.name}</h1>
                        <p className="card-desc">{props.desc}</p>
                        <p className="card-techstack">{props.techstack}</p>
                        <p className="card-date">{props.date}</p>
                        <div className="button-notation-container">
                        <div className="buttons">
                            {props.live.length > 0 ?
                                <Button href={props.live} target="_blank">Live Version</Button>
                                :
                                <br/>
                            }
                            <Button href={link} target="_blank">See Code</Button>
                        </div>
                        {languages.length > 0 ? (
                            <>
                            {/*<ProgressBar min={0} max={100} className="card-progress">
                                {renderProgressBar()}
                            </ProgressBar>
                            <div className="notation">
                                {renderNotations()}
                            </div>*/}
                            <div className="technology-notations">
                                {languages.map((language, index) => index % 2 === 0 ? <span className="technology-notation">{language}</span> : '')}
                            </div>
                            </>
                        ) : (
                            <>
                                {/*<ProgressBar className="card-progress">
                                    <ProgressBar style={{height: "400%"}} min={0} max={100} variant="info" now={0} label={`${sum}%`}/>
                                </ProgressBar>*/}
                                <p className="empty">My GitHub repository is empty ❌</p>
                            </>
                        )}
                        </div>
                    </a>
                    <div className="project-card-hover">
                        <img className="card-image" alt="img" src="./img/portfolio.png"></img>
                    </div>
                </div>
            </div>
    
        );
    }

}
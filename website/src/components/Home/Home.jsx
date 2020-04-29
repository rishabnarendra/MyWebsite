import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { AiOutlineTool } from 'react-icons/ai'
import { BsCodeSlash } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { IoMdPaper } from "react-icons/io";
import MyResume from '../../components/RishabNarendra.Resume.pdf';

const style = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  };

class Home extends Component {

    openLinkedIn(){
        window.open("https://www.linkedin.com/in/rishab-narendra/");
    }
    
    openGitHub(){
        window.open("https://github.com/rishabnarendra");
    }
    
    openInstagram(){
        window.open("https://www.instagram.com/rishabnarendra/?hl=en");
    }
    
    openFacebook(){
        window.open("https://www.facebook.com/rishab.narendra.7");
    }

    openResume(){
        window.open(MyResume);
    }

    render() {
        return (
            <div>
                <img class = "background" src = "/HomeBackgroundImage.jpg" style = { style }/>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '15%', left: '5%', right: 0, bottom: 0}}>
                    <IoMdPaper onClick={() => this.openResume()} style = { { height: 50, width: 50 } } />
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '15%', left: '30%', right: 0, bottom: 0}}>
                    <AiOutlineTool style = { { height: 50, width: 50 } } />
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '15%', left: '55%', right: 0, bottom: 0}}>
                    <BsCodeSlash style = { { height: 50, width: 50 } } />
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '15%', left: '80%', right: 0, bottom: 0, color: 'black'}}>
                    <GrContact style = { { height: 50, width: 50 } } />
                </div>


                <div style={{position: 'absolute', width: '10%', height: '5%', top: '35%', left: '5%', right: 0, bottom: 0}}>
                    <SocialIcon network="linkedin" onClick={() => this.openLinkedIn()} style={{ height: 50, width: 50 }} bgColor="#0077b5"/>    
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '35%', left: '30%', right: 0, bottom: 0}}>
                    <SocialIcon network="github" onClick={() => this.openGitHub()} style={{ height: 50, width: 50 }} bgColor="rgb(5, 5, 5)"/>
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '35%', left: '55%', right: 0, bottom: 0}}>
                    <SocialIcon network="instagram" onClick={() => this.openInstagram()} style={{ height: 50, width: 50 }} bgColor="#eb3948"/>
                </div>
                <div style={{position: 'absolute', width: '10%', height: '5%', top: '35%', left: '80%', right: 0, bottom: 0}}>
                    <SocialIcon network="facebook" onClick={() => this.openFacebook()} style={{ height: 50, width: 50 }} bgColor="#0077b5   "/>
                </div>
            </div>
        );
    }
}

export default Home
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import Pdf_NV from '../../documents/NV39.pdf';
import '/styles/layout/peos.css'

import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Chip } from 'primereact/chip';
import { Skeleton } from 'primereact/skeleton';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';

const MiscDemo = () => {
    const [showDiv, setShowDiv] = useState(true);
    
    const [show, setShow] = useState(1);
    const numSlides = 10;
    const [pct, setPct] = useState(Math.round(100/numSlides));
    const [pInt, setPInt] = useState(Math.round(100/numSlides));
    //const [slides, setSlides] = useState(6);

    const [value, setValue] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleClickBack = () => {

           console.log(show);
           if(show > 1){
            setShow(show - 1);
            setPct(pct-pInt);
            window.scrollTo(0, 0);
           }
       };
    const handleClickNext = () => {

          console.log(show);
          if(show < numSlides){
            setShow(show+1);
            setPct(pct+pInt);
            window.scrollTo(0, 0);
          }
      };
      const handleRestart = () => {
        location.reload();
      };
      const YoutubeEmbed = ({ embedId }) => (
/*        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>*/
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JHregeIsjPQ?si=m8K8ahKCDY82mgzT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      );
      
      /*YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
      };*/


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
              setShowDiv(false);
            } else {
              setShowDiv(true);
            }
          };
        
        window.addEventListener("resize", handleResize);
        
        
        return () => window.removeEventListener("resize", handleResize);    

        

      /*  const interval = setInterval(() => {
            setValue((prevValue) => {
                const newVal = prevValue + Math.floor(Math.random() * 10) + 1;
                return newVal >= 100 ? 100 : newVal;
            });
        }, 2000);

        intervalRef.current = interval;

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            intervalRef.current = null;
        };*/
    }, []);

    return (

        <div className="grid" >
            <div className="col-12 peos-header" > 
                <div className="grid" >
                    {showDiv &&
                    <div className="col-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img className="peos-logo" srcSet={`/img/noimage.png 320w, /img/noimage.png 680w, /img/noimage.png 960w, /img/ArmyLogo.png 1980w`}/>
                        <img className="peos-logo" src='/img/PEOLogo-sm.png' />
                        <img className="peos-logo" src='/img/CIOLogo.png'/>
                    </div>
                    }
                    <div className="col-4" style={{margin: "auto", textAlign: "center"}}>
                        <h1>Welcome to PEO Soldier</h1>
                        <ProgressBar value={pct} />
                    </div>
                    {showDiv  &&
                    <div className="col-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img className="peos-logo" src='/img/SLLogo-sm.png'/>
                        <img className="peos-logo" src='/img/SSVLogo-sm.png' />
                        <img className="peos-logo" src='/img/APEOLogo-sm.png' />
                    </div> 
                    }
                    </div>
            </div>
            {/*<div 
                className="col-6"
                style={{
                    
                    margin:'auto',
                    marginTop: "150px"
                }}
            >
                <div className="card" >
                    <h5>Your Progress</h5>
                    <div className="grid">
                        <div className="col">
                            <ProgressBar value={pct} />
                        </div>

                    </div>
                </div>
            </div>*/}
            <div 
                className="col-12"
                style={{
                    padding: '30px',
                    marginTop: "150px"
                }}
            >
                
                <div>
                {show === 1 && (
                    <div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                        <h2>Getting Started</h2>
                        <p>The following is a series of steps meant to guide you through in-processing. Complete the steps that
                            you can, not all steps need to be completed. Some may apply to your specific situation but some may 
                            not. This system is designed to assist those individuals who do not have the necessary credentials 
                            yet to log into a NIPR connected machine just yet. </p>
                            <p>
                            With your help we can complete the remaining in-processing steps quickly and get you up and running 
                            with minimal disruptions. This system is not meant to house PII, any forms that contain PII should
                            not be stored here. If you need any assistance please contact the CIO Team.
                            </p>
                    </div>
                
                )} 
                {show === 2 && 
                (
                    <div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                        
                        <div style={{maxWidth: "fit-content", marginInline:"auto"}}><img srcSet={`/img/PEOLogo.png` } style={{width:"200px", marginLeft:"40px"}}/>
                        <h1>PEO Soldier HQ</h1></div>
                        <p style={{textAlign:"center"}}><h3>These procedures were developed to communicate and facilitate the required steps to equip you to be successful and productive.
                        </h3>
                        </p>
                            <p style={{textAlign:"center"}}>
                            <h4>We will work together to help facilitate your smooth and successful integration into our team!</h4>
                            </p>
                    </div>
                
                )
                /*(
                <div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <div className="col-12 peos-slideImg" >
                        <img srcSet={`/img/Intro.jpg 1980w`}/>
                    </div>                    
                </div>
                )*/
                
                }                         
                {show === 3 && (<div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>About PEO Soldier</h2>
                    
                    
                    <div className="col-12 peos-slideImg" >
                        <img srcSet={`/img/Orgchart.jpg 320w, /img/Orgchart.jpg 680w, /img/Orgchart.jpg  960w, /img/Orgchart.jpg 1980w`}/>
                    </div>  

                                      
                    <div style={{padding: "15px"}}>
                        <iframe style={{display: "block", margin: "auto"}}
                            width="640"
                            height="400"
                            src={`https://www.youtube.com/embed/ShhxndluX4g?si=_Q3CklDVJBveDl5T`}
                        
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        <iframe style={{display: "block", margin: "auto"}}
                        width="640" height="400" 
                            
                            src={`https://www.youtube.com/embed/YqRX95AZMok?si=2S10f40O30SzFcUu`}
                        
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"

                        />
                        
                    </div>
                    {/*<YoutubeEmbed embedId="JHregeIsjPQ"/>*/}
                </div>
                )}    
          
                {show === 4 && (
                <div  className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>In Process with PEO Soldier Security</h2>
                    <p>The PEO Soldier Security team will need some information from you before in processing can begin. The team 
                        should reach out to you once an email is provided, and will include a few documents to sign, along with a
                        request for your SSN.</p>
                    <p>If you do not hear from someone on our security team, please email the group inbox below and let them know 
                        that you will be onboarding shortly and would like to begin inprocessing with them.
                    </p>
                    
                    <p><h4>Security Team Members</h4><li>Jane Hamann</li><li>Bryan Nolan</li><li>Nolan Hills</li><li>Terry Wiemann</li><li>April Marquis</li></p>
                    <p>You can also email: usarmy.belvoir.peo-soldier.list.peo-soldier-security-office@army.mil</p>
                </div>
                )}                             
                 {show === 5 && (
                <div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>Common Access Card (CAC) Retrieval</h2>
                    {/*<div className="col-12 peos-slideImg" >
                        <img srcSet={`/img/CAC.jpg 320w, /img/CAC.jpg 680w, /img/CAC.jpg  960w, /img/CAC.jpg 1980w`}/>
                    </div>     */}
                    <p>
                        <h4>New DA Civilian Personnel: </h4>
                        PEO Soldier HQ Civilian Personnel Office will notify you when you can get your CAC 
                        once your personnel action has processed.

                        <h4>Military Members:</h4>
                        If applicable, PEO Soldier HQ Military Personnel Office will notify you 
                        when you get your CAC.

                        <h4>Contractors:</h4>
                        You will receive an e-mail to proceed to CAC issue point if your choosing once 
                        your CAC application has been processed.  

                        <h4>How to Get Your CAC:</h4>
                        <ul><li>Walk into Fort Belvoir DEERS Office (
                            <a href="https://home.army.mil/belvoir/about/Garrison/directorate-human-resources/military-personnel-division/deersid-cards" target="_blank">Link to DEERS Information</a>)
                        </li>
                        <li>
                            Schedule appointment using the 
                            <a href="https://idco.dmdc.osd.mil/idco/" target="_blank"> RAPIDS Appointment Scheduler</a>
                        </li>
                        </ul>
                        <p>If you receive a CAC with no e-mail address attached to it (you can ask the DEERS personnel if they see 
                        your e-mail address in the system and what it is), you must call AESD (866-335-2769) to ask for the e-mail 
                        address that was created an assigned to your CAC.
                        </p>
                        <h3>Two forms if ID required to get CAC!</h3>
                    </p>               
                </div>
                )}      
                {show === 6 && (
                <div  className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>IT Prerequisites</h2>
                    <p>After you have received your CAC, the PEO HQ POC (Giuliana “Lili” Doll) will
                        move, create or re-activate your Army Training & Certification Tracking System
                        (ATCTS) profile to track and store your IT Prerequisite documents.</p>
                    <p>You will receive an email with instructions on how to complete the required steps.</p>
                    <h4>IT Prerequisite Documents:</h4>
                    <p><li>Cyber Awareness Training (No CAC required)- <a href="https://public.cyber.mil/training/cyber-awareness-challenge/" target="_blank">DoD Cyber Exchange</a></li>
                    <li>Army IT User Agreement (CAC required and can be completed upon CAC retrieval)</li></p>
                    <p style={{marginTop: "15px", fontWeight: "bold"}}>Please print your certificate upon completion of the training. There should be a printer attached to this machine that you can print to.</p>
                </div>     
                )}               
                 {show === 7 && (
                <div className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>IT Equipment</h2>
                    <p><ul>
                    <li>Once steps the previous steps have been completed, the PEO HQ IT Team will contact you 
                        to coordinate a time for equipment pick up or shipment</li>
                    <li>Distro List Updates - The Linked Account in your IO Profile will be updated. </li>
                    <li>Your group membership will be updated to grant you access to online access
                            to SharePoint and relevant applications</li>
                    </ul>
                    </p>
                    <p>Typical Government Furnished Equipment (GFE) furnished:
                        <ul>
                        <li>Laptop</li>
                        <li>Monitors (for cubicle and/or teleworking)</li>
                        <li>Keyboard</li>
                        <li>Mouse</li>
                        <li>Government Cell Phone (iPhone) - if approved
                            <ul><li>All Government iPhones must be approved by the PEO HQ Entitlement
                        Manager (Mike Laiacona)</li></ul></li>
                        </ul>
                        <h4>If approved, an IT Specialist will issue your devices to you</h4>
                    </p>
                    <h4>You will be provided a DA Form 2062, Hand Receipt, for all GFE issued to you that you must sign acknowledging receipt of the equipment</h4>
                    {/*<div className="col-12 peos-slideImg" >
                        <img srcSet={`/img/Equipment.jpg 320w, /img/Equipment.jpg 680w, /img/Equipment.jpg 960w, /img/Equipment.jpg 1980w`}/>
                    </div>        */}            
                </div>
                )}                 
                {show === 8 && (
                <div  className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>Submit Night Vision Badge</h2>
                    <p>If you are working behind the night vision gate and do not have a permanent Night Vision badge, you must complete the 
                        NV39 form and submit to the night vision badging office. A copy of the form is linked below.
                    </p>
                    <div className="peos-slideImg" >
                        <img srcSet={`/img/NV.jpg 320w, /img/NV.jpg 680w, /img/NV.jpg 960w, /img/NV.jpg 1980w`}/>
                        
                    </div>  
                    <div className="peos-slideImg" style={{margin: "20px 0px"}}><Button  onClick={()=> window.open(Pdf_NV, "_blank")} label="Open NV 39 Form" rounded severity="info" /></div>
                    
                    
                </div>
                )}
                {show === 9 && (
                <div  className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>Personnel Accountability Reporting</h2>
                    
                    <ul>
                        <p><li>All Personnel who have a NIPR account and/or a 0365 License from PEO Soldier
                        MUST report their status in PAR daily NLT 0930 local time
                            <ul><li>Matrix employees who report their daily status using another system with their parent organization are exempt from using PAR</li></ul>
                        </li></p>
                        <p><li>Personnel must complete and maintain/update their profile information to include emergency contact information</li></p>
                        <p><li>Personnel can and should enter a future roll call status when they know their status for a future period will be other than at duty station or telework</li></p>
                        <p><li>If you have trouble accessing PAR, contact your supervisor or PAR Admin
                            <ul><li>PEO HQ PAR Admin is Nidhi Yadav</li></ul>
                        </li></p>               
                    </ul>

                    {/*<div className="peos-slideImg" >
                        <img srcSet={`/img/PAR.jpg 320w, /img/PAR.jpg 680w, /img/PAR.jpg  960w, /img/PAR.jpg 1980w`}/>
                        
                    </div>  */}
  
                    
                </div>
                )}
                {show === numSlides && (
                <div  className="card" style={{backgroundColor: "rgba(200,200,200,.8)"}}>
                    <h2>Done!</h2>
                    <p>You have reached the end of this guide. Hopefully you found this information useful. Remember to transfer any forms you have completed to the designated POC. 
                        Refresh this page to start over.
                    </p>
                    <div className="col-12" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button type="button" label="Restart" style={{ margin: '10px'}} onClick={handleRestart}></Button>
                    </div>
                </div>     
                )}
                </div>     
                        
            </div>   
            {show < numSlides && (<div className="col-12" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Button type="button" label="Back"  style={{ margin: '10px'}} onClick={handleClickBack}/>                            
                <Button type="button" label="Next" style={{ margin: '10px'}} onClick={handleClickNext}/>                            
                       
            </div>)}

        </div>
    );
};

export default MiscDemo;

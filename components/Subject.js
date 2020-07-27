import React from 'react'

const Carousel=()=>{
    const links=['https://drive.google.com/file/d/1XPmGw0svDPuE13DfRmrrRjpKklmTtjUc/preview',
                 'https://drive.google.com/file/d/1QkGTULe8zCT0q1nQfICI-zhWjyXx3NWP/preview',
                 'https://drive.google.com/file/d/1XPmGw0svDPuE13DfRmrrRjpKklmTtjUc/preview',
                 'https://drive.google.com/file/d/1XPmGw0svDPuE13DfRmrrRjpKklmTtjUc/preview',
                 'https://drive.google.com/file/d/1XPmGw0svDPuE13DfRmrrRjpKklmTtjUc/preview']
    return(
        <div style={{display:'flex',overflowX:'scroll'}}>
            {
                links.map((link)=> <Video dlink={link} res={{width:340,height:198}}/>)
            }
        </div>
    )
}

const Video=(props)=>{ //stand-alone component.
    const {width,height}=props.res
    return(
        <div>
            <iframe style={{border:'none'}} src={props.dlink} width={width} height={height}></iframe>
        </div>
    )
}

const Subject=(props)=>{
    const sub=props.match.params.subject
    const dlink='https://drive.google.com/file/d/1-I649IgwEaGuzB73jBVR5JYa9mO4Z-Q7/preview' //first
    return (
        <div>
            The subject is {sub} <br/>
            <div style={{display:'flex'}}>
                <Video dlink={dlink} res={{width:640,height:428}}/>
                <ul>
                    <li>
                        <p>Hello</p>
                    </li>
                    <li>
                        <p>Hello1</p>
                    </li>
                </ul>
            </div>
            <Carousel />
        </div>
    )
}


export default Subject;

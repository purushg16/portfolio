import { useEffect } from "react";


export default function ProCards(props) {

    function goTo(e) {
        window.open(e.currentTarget.ariaLabel);
    }

    return(
        <div class="uk-card uk-card-body" style={{background:'black',color:'white', borderRadius:'9px'}}>

            { (props.type && props.tag==='python') &&
                <div class="uk-card-badge uk-label" style={{textTransform:'lowercase',background:'aqua',color:'black',borderRadius:'9px'}}>{props.type}</div>
            }

            <h2 class="uk-card-title" style={{color:'white'}}>{props.title}</h2>
            <p style={{color:'#BBDEFB'}}> {props.desc}</p>

            <div id="footer-2" style={{ padding:0,textAlign:'right' }}>
                <button className="send-btn git-btn" style={{padding:'1vh',cursor:'auto'}}> View <span onClick={goTo} aria-label={props.url} data-uk-icon="icon: arrow-right"  style={{cursor:'pointer'}}/>  </button>
            </div>
        </div>
    )
    
}
import './Footer.css';


export default function Footer(props){

    function href(props) {
        window.location.hash = '';
        if(window.location.pathname !== `/${props}`) window.location.pathname = props;
    }

    return(
        <section id="footer" data-uk-scrollspy="cls: uk-animation-slide-bottom; target: > div, h2,button; delay:200">

            <h2 id='foo-h'> Let's stay in touch! </h2>
            <button className="nav-btn"> Contact <span data-uk-icon="icon: arrow-right" onClick={()=>{href('contact')}} ></span> </button>

            <hr style={{width:'80%', margin:'auto', marginTop:'5%', borderColor:'grey'}} />

            <div id='foo-cont'>
                 <h3 id='foo-h-2'>Purushothaman</h3>
                 <div>
                    <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="github"></a>
                    <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
                    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                </div>
            </div>

            <div style={{marginTop:'5%'}}>
                <h6 style={{margin:0, padding:0}}> Feel free to contact me at anytime! </h6>
                <h6 style={{marginTop:0,marginBottom:'0.1%'}}> TamilNadu, India, Earth. </h6>
            </div>

        </section>
    )

}
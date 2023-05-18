import ImageSwiper from './ImageSwiper';
import './lander.css';

export default function Lander(){

    return(
        <section id="lander">
            <div>
                <h2 style={{textAlign:'center', margin:0}}>
                    Crafting lovable
                    user experiance.
                </h2>

                <p style={{margin:0, padding:0, textAlign:'center'}} id='name'> Purushothaman G </p>

                <h5 style={{textAlign:'center', marginTop:0, width:'50%', margin:'auto'}}> 
                    I am a Web <span>Designer</span> & <span>Developer</span>.
                    Creating beautiful things using Mern stack
                    based in <span id='ind'>India.</span>
                </h5>

                <div style={{ pointerEvents:'none' }}>
                    <ImageSwiper />
                </div>

            </div>
        </section>
    )

}
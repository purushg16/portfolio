import './blog.css';

export default function Blog(props) {

    function href(tag) {
        window.location.pathname = tag; 
    }

    return(
        <section id='blog'>

            <div style={{marginBottom:'5%'}}>
                <h2 style={{margin:0}}> Blogs </h2>
                <p style={{margin:0}}> i've written </p> 
            </div>

            <div class="uk-child-width-1-3@m" data-uk-grid>

                <div>
                    <div class="uk-card uk-card-default" style={{ maxWidth: 'fit-content', height:'100%' }}>
                        <div class="uk-card-media-top">
                            <img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLo5GA0G1ac0_BHDwZG3Rc15jQSDRGxxZgQ&usqp=CAU" alt=''/>
                        </div>
                        <div class="uk-card-body" style={{ maxWidth:'340px', paddingBottom:'5%' }}>
                            <h3 class="uk-card-title blog-title" onClick={()=>{href('blog/flexbox')}}> How did I understood the CSS-Flex concepts all by myself? </h3>
                            <p className='article'>Article</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="uk-card uk-card-default uk-card-body" style={{ background:'#e3e7fd', maxHeight:'100%', height:'100%', maxWidth:'340px'}}>
                            <h1 class="blog-title" style={{fontSize:'3.2em', marginBottom:0,  color:'black', fontWeight:'600'}}> 
                                Stay Tuned! <br />
                                Lot more <br />
                                is on the way!
                            </h1>
                            <p className='article' style={{textTransform:'lowercase'}}>~purush</p>
                    </div>
                </div>
            
            </div>

        </section>
    )

}
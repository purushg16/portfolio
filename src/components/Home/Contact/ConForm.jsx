
export default function CForm(props){
    return(
        <section id="c-form">
            <form>
                <fieldset class="uk-fieldset">

                    <div class="uk-margin">
                        <input className="uk-input" type="text" placeholder="Name" aria-label="Input" />
                    </div>

                    <div class="uk-margin">
                        <textarea  style={{maxWidth:'100vh',maxHeight:'30vh'}} class="uk-textarea" rows="5" placeholder="Message" aria-label="Textarea"></textarea>
                    </div>

                    <div style={{textAlign:'end'}}>
                        <button className="send-btn"> Shoot <span data-uk-icon="icon: arrow-right"></span> </button>
                    </div>

                </fieldset>
            </form>
        </section>
    )
}
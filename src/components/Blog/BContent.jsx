import { color } from 'framer-motion';
import './blog.css';

export default function BContent(props){

    return(
        <section id="BContent">

            <article class="uk-article">

            <h1 class="uk-article-title">
                <a class="uk-link-reset" href="" style={{fontWeight:'bold'}}>
                    How did I understood the CSS-Flex concepts all by myself?
                </a>
            </h1>

            <p class="uk-article-meta">Written by <a href="/" id='author'>Purushothaman G</a> on 12 June 2023. Posted in <a style={{color:'#7b86c6'}} href=".">Blog</a></p>

            <p class="uk-text-lead" style={{fontWeight:'500'}}>
                This article defines how actually CSS-Tricks helped to understand the mecanishm of Flexbox concepts.
            </p>

            <img src='https://keenanpayne.com/images/posts/web-development/css-tricks.png' alt=''/>

            <p>
                <a className='blog-a' href='http://css-tricks.com'> CSS-Tricks </a> helps me in a really good way for the many concepts! 
                But flexbox is out of the box! 
            </p>

            <div class="uk-child-width-1-2@m" data-uk-grid>
                <img src='https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg' alt='' />
                <img src='https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg' alt='' />
            </div>

            <p>
                The graphical representation of the concepts hits me with a special thought. I have come to 
                an recognization after reading that article from css-tricks! So I thought that I would like to share that to all those need 
                to know and learn the CSS Flexbox concept. 
            </p>

            <div class="uk-child-width-1-2@m" data-uk-grid>
                <img src='https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg' alt='' />
                <img src='https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg' alt='' />
            </div>

            <p>
               Nothing had been left by them in manner of coverage of concepts in CSS-FlexBox. 
               They have managed to cover up everything by inch. Experimental examples are well
               describing the basics and functionality of concepts! 
            </p>

            <img src='https://css-tricks.com/wp-content/uploads/2018/10/order.svg' alt='' />

            <p>
                They have also included a free poster as reference guide You can 
                <a className='blog-a' href='https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png' download='flexbox'> download </a> 
                it as well! They also included the respective lines of code in the article. It was really so good and perfect!
                Keep supporting! Love you all! Will connect you with another wonderful blog next time!
            </p>

            <div style={{textAlign:'center', padding:'5%'}}>
                <a className='blog-a' href='https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png' download='flexbox'> 
                    <button> Download FlexBox Poster </button>
                </a> 
            </div>

            <div class="uk-grid-small uk-child-width-auto" data-uk-grid>
                <div>
                    <p style={{ color:'#7b86c6', textTransform:'capitalize' }}>Thank you for considering this blog!</p>
                </div>
            </div>

            </article>

        </section>
    )

}
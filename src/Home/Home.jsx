import './Home.css'
import { Menu } from '../Menu/Menu'
export function Home(){
    return(
        <>
        <header>
          <Menu></Menu>
        </header>
           <section className='banner'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis tempore mollitia quam a provident exercitationem voluptatum aperiam. Ut explicabo magnam facere tenetur accusantium rerum, officiis asperiores rem aut dignissimos.</p>
           </section>
        </>
    )

}
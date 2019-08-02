import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade_Right extends Highway.Transition{
  in({from, to, done}){

    const tl = new TimelineLite();

    tl.fromTo(to, 1.0, {height: "0vh"}, {height: "100vh", onComplete: function(){
      from.remove();
      done();
    }}
    )
    .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});
  }
  out({from, done}){
    done();
  }
}

export default Fade_Right;
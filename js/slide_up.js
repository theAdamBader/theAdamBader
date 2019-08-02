import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Slide_Up extends Highway.Transition{
  in({from, to, done}){

    const tl = new TimelineLite();

    tl.fromTo(to, 0.95, {top: "100%"}, {top: "0%", onComplete: function(){
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

export default Slide_Up;
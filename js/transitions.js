import Highway from '@dogstudio/highway';
import Fade from './fade_slide';
import Slide_Down from './slide_down';
import Slide_Up from './slide_up';

const Page = new Highway.Core({
    transitions: {
        home: Fade,
        uni: Slide_Up,  
        projects: Slide_Down,
    }
});
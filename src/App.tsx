import './framer/styles.css'
// this file imported below is generated when you run `npm run framer`
import AboutTextFramerComponent from './framer/about-text'

export default function App() {
    return (
        <div className='flex flex-col'>
            {/* use .Responsive for components with breakpoints, remove it if you want to pass a specific variant */}
            <AboutTextFramerComponent.Responsive />
        </div>
    );
};
import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <br/>
            <Image />
            <p>I am a SSR magician</p>
        </div>
    );
};

export default About;
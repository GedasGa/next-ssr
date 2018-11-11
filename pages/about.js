import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Image />
            <p>I am a SSR magician</p>
            <Link>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default About;
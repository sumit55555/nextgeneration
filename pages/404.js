import Link from 'next/Link';
import styles from "../styles/index.module.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/navbar';

const Errorpage = () => {
    const router = useRouter();
    const handleInput = () => {
        router.push("/");
    };

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)

    }, []);
    return (
        <>


            <Navbar />


            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.
                    </p>

                    <a onClick={handleInput}> GO BACK TO HOME</a>
                </div>
            </div>
        </>

    )
}

export default Errorpage;

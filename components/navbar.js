import Link from 'next/Link';
import styles from "../styles/index.module.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="menu-bar">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link href="/blog">
                        <li>Blog</li>
                    </Link>
                    <Link href="/product">
                        <li>Product</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

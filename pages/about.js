import Navbar from "../components/navbar"
import Image from "next/image"

const about = () => {
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "red" }}>About Me</h1>
                <Image src="/download.jpg" width="500" height="300" ></Image>
            </div>
        </div>
    )
}

export default about

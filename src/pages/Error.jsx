import { Section404 } from "@404pagez/react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/")
    };

    return (
        <div className="flex items-center justify-center">
            <div>
            <Section404 size={50} isButton={true} onButtonClick={handleHome} buttonLabel={"Home"} />
            </div>
        </div>
    );
};

export default Error;

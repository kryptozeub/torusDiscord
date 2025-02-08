import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard"); // Redirige vers la page About
    };

	return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <button onClick={goToDashboard}>Aller au dashboard</button>
        </div>
	)
}

export default Home

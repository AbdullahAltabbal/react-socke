import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import EingabeMaske from "./EingabeMaske";
import LeseProgrammTabelle from "./LeseProgrammTabelle";

const Home = () => {
    const [tableData, settableData] = useState([])

    const { data, isPending, error } = useFetch(
        'http://localhost:8000/leseProgramme/'
    );

    useEffect(() => {
        if (data && !error)
            settableData(data)
    }, [data]);

    const tabellenZeigen = () => {
        const eingabeMaske = document.getElementById("eingabeMaske");
        // eingabeMaske.classList.add("pull-s1")
    }

    return (
        <div className="row">
            <div className="col s1" ></div>
            <div className="col s4">
                <h4> Leseprogramme  </h4>
                <LeseProgrammTabelle
                    data={tableData}
                    pending={isPending}

                />
            </div>
            <div className="col s1" ></div>
            <div id="eingabeMaske" className="col s5">
                <EingabeMaske
                    pending={isPending}
                    settableData={settableData}
                />
            </div>
            <div className="col s1" >
                <button
                    onClick={tabellenZeigen()}
                    className="waves-effect waves-light btn"> Pull </button>
            </div>
        </div>

    );
}

export default Home;

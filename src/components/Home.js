import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import EingabeMaske from "./EingabeMaske";
import LeseProgrammTabelle from "./LeseProgrammTabelle";

const Home = () => {
    const [tableData, settableData] = useState([])

    const [selected, setSelected] = useState([])

    const { data, isPending, error } = useFetch(
        'http://localhost:8000/leseProgramme/'
    );

    useEffect(() => {
        if (data && !error)
            settableData(data)
    }, [data]);

    let showSelected = (selected) => {
        setSelected(selected)
    }

    const toggle = (e) => {
        // eingabeMaskeDiv = document.getElementById("eingabe");
    }


    return (
        <div className="row">
            <div className="col s1" ></div>
            <div className="col s4">
                <h4> Leseprogramme  </h4>
                <LeseProgrammTabelle
                    selectLp={showSelected}
                    data={tableData}
                    pending={isPending}

                />
            </div>
            <div className="col s1" ></div>
            <div id="eingabe" className="col s5">
                <EingabeMaske
                    pending={isPending}
                    settableData={settableData}
                    selectedLp={selected}
                />
            </div>
            <div className="col s1" >
                <button
                    onClick={toggle()}
                    className="waves-effect waves-light btn"> push </button>
            </div>
            {/* <div id="tabels" className="col" >
                <h1>am hier</h1>
                <h1>am hier</h1>
                <h1>am hier</h1>
                <h1>am hier</h1>
                <h1>am hier</h1>
            </div> */}
        </div>

    );
}

export default Home;

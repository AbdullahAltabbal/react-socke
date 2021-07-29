import { useState } from "react";

const EingabeMaske = (props) => {
    // const pending = props.pending;
    const [leseProgramme, setLeseprogramme] = useState({
        id: 0,
        leseprogramm_Name: '',
        kategorie: '',
        beschreibung: '',
        monitoring: false,
        sqlBedinung: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/leseProgramme/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(leseProgramme)
        }).then((
            res => {
                console.log(res);
            }
        ))
    }


    return (
        <div>
            <h4>Leseprogramme Einrichten</h4>
            <div className="row" >
                <form className="col s12">
                    <div className="row">
                        {/* Leseprogramm Id  */}
                        <div className="inpit-field col s6" >
                            <label for="first_name">Leseprogramm ID</label>
                            <input
                                type="text"
                                value={leseProgramme.id}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, id: e.target.value })}
                            />
                        </div>
                        {/* Monitoring */}
                        <div className="inpit-field col s3" >
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={leseProgramme.monitoring}
                                    value={leseProgramme.monitoring}
                                    onChange={(e) => setLeseprogramme({ ...leseProgramme, monitoring: e.target.value })
                                    }
                                />
                                <span>Monitoring</span>
                            </label>
                        </div>
                        {/* pressespiegel */}
                        <div className="inpit-field col s3" >
                            <label>
                                <input
                                    id="pressespiegel"
                                    type="checkbox"
                                    className="filled-in" />
                                <span>Pressespiegel</span>
                            </label>
                        </div>
                    </div>
                    {/* leseprogramm Name */}
                    <div className="row">
                        <div className="inpit-field col s6" >
                            <label htmlFor="leseprogramm_Name"
                            > Leseprogramm Name </label>
                            <input
                                value={leseProgramme.leseprogramm_Name}
                                type="text"
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, leseprogramm_Name: e.target.value })}
                            />
                        </div>
                        {/* Kategorie */}
                        <div className="inpit-field col s6" >
                            <label> Kategorie </label>
                            <input
                                type="text"
                                value={leseProgramme.kategorie}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, kategorie: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Beschreibung */}
                    <div class="row">
                        <form className="col s12">
                            <label>Beschreibung</label>
                            <textarea
                                value={leseProgramme.beschreibung}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, beschreibung: e.target.value })}
                                className="materialize-textarea"
                            ></textarea>
                        </form>
                    </div>

                    {/* SQL Bedinung */}
                    <div className="row">
                        <form className="col s12">
                            <label>SQL Bedinung</label>
                            <textarea
                                value={leseProgramme.sqlBedinung}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, sqlBedinung: e.target.value })}
                                className="materialize-textarea"
                            ></textarea>
                        </form>
                    </div>

                    {/* buttons : test + titel */}
                    <div className="row">
                        <form className="col s12">
                            <button
                                className="btn waves-effect blue-grey darken-1" >Test
                            </button>

                            <button
                                className="btn waves-effect blue-grey darken-1 right" >Explizite Titel
                            </button>
                        </form>
                    </div>

                    {/* checkboxen */}
                    <div className="row" >
                        <form className="col s12">
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    // checked={leseProgramme.monitoring}
                                    // value={leseProgramme.monitoring}
                                    onChange={(e) => setLeseprogramme({ ...leseProgramme, monitoring: e.target.value })
                                    }
                                />
                                <span>Schweiz Kompatibel</span>
                            </label>


                        </form>
                    </div>




                    {/* submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="btn waves-effect blue-grey darken-1" >Submit
                        <i class="material-icons right">send</i>
                    </button>

                </form>
            </div>

        </div>

    );
}

export default EingabeMaske;
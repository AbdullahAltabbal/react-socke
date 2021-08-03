import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const EingabeMaske = (props) => {
    // const pending = props.pending;
    const [leseProgramme, setLeseprogramme] = useState({
        id: 0,
        leseprogramm_Name: '',
        kategorie: '',
        beschreibung: '',
        monitoring: false,
        pressespiegel: false,
        sqlBedinung: '',
        gruppe: '',
        liefrant: '',
        schweizKompatibel: false,
        interntetInternational: false,
        web20: false,
        printmedien: false,
        na: false,
        radio: false,
        tv: false,
        azb: false,
        nachweiße: false,
    });

    let selected = props.selectedLp;

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/leseProgramme/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(leseProgramme)
        }).then(
            res => {
                fetch('http://localhost:8000/leseProgramme', {
                    method: 'GET'
                }).then(res2 => {
                    if (res2.ok) {
                        res2.json().then(data => {
                            props.settableData(data)
                        })
                    }
                })
            })
    }

    useEffect(() => {
        setLeseprogramme(selected)
    }, [selected])

    const clearLief = () => {
        let inputLiefr = document.getElementById("liefrant")
        inputLiefr = " "
    }


    return (
        <div>
            <h4>Leseprogramme Einrichten</h4>
            <div className="row" ></div>
            <div className="row" >
                <form className="col s12">
                    <div className="row">
                        {/* Leseprogramm Id  */}
                        <div className="inpit-field col s6" >
                            <label>Leseprogramm ID</label>
                            <input
                                type="text"
                                value={leseProgramme.id}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, id: e.target.value })}
                            />
                        </div>
                        {/* Monitoring */}
                        <div className="inpit-field col s3" >
                            <CheckBox titel="Monitoring"
                                onChange={(e) =>
                                    setLeseprogramme({ ...leseProgramme, monitoring: e.target.checked })}
                                checked={leseProgramme.monitoring}
                            />
                        </div>

                        {/* pressespiegel */}
                        <div className="inpit-field col s3" >
                            <CheckBox titel="Pressespiegel"
                                onChange={(e) =>
                                    setLeseprogramme({ ...leseProgramme, pressespiegel: e.target.checked })}
                                checked={leseProgramme.pressespiegel}
                            />
                        </div>
                    </div>

                    {/* leseprogramm Name */}
                    <div className="row">
                        <div className="inpit-field col s6" >
                            <label> Leseprogramm Name </label>
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
                    <div className="row">
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
                    <div className="row" ></div>

                    {/* checkboxen */}
                    <div className="row" >
                        <form>
                            <label className="col s3">
                                <CheckBox titel="Schweiz Kompatibel"
                                    onChange={(e) =>
                                        setLeseprogramme({ ...leseProgramme, schweizKompatibel: e.target.checked })}
                                    checked={leseProgramme.schweizKompatibel}
                                />
                            </label>

                            <label className="col s3">
                                <CheckBox titel="Web20"
                                    onChange={(e) =>
                                        setLeseprogramme({ ...leseProgramme, web20: e.target.checked })}
                                    checked={leseProgramme.web20}
                                />
                            </label>

                            <label className="col s3">
                                <CheckBox titel="Interntet International"
                                    onChange={(e) =>
                                        setLeseprogramme({ ...leseProgramme, interntetInternational: e.target.checked })}
                                    checked={leseProgramme.interntetInternational}
                                />
                            </label>

                            <label className="col s3">
                                <CheckBox titel="Nachweiße"
                                    onChange={(e) =>
                                        setLeseprogramme({ ...leseProgramme, nachweiße: e.target.checked })}
                                    checked={leseProgramme.nachweiße}
                                />
                            </label>
                        </form>
                        <div className="row" ></div>
                    </div>

                    {/* LeseGruppe + Liefrant       */}
                    <div className="row">
                        <div className="inpit-field col s6" >
                            <label> Leseprogramm Gruppe </label>
                            <input
                                value={leseProgramme.gruppe}
                                type="text"
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, gruppe: e.target.value })}
                            />
                        </div>

                        <div className="inpit-field col s5" >
                            <label> Liefrant </label>
                            <input
                                id="liefrant"
                                type="text"
                                value={leseProgramme.liefrant}
                                onChange={(e) => setLeseprogramme({ ...leseProgramme, liefrant: e.target.value })}
                            />
                        </div>
                        <div className="col s1">

                            <button
                                onClick={clearLief()}
                                className="btn-floating btn-small waves-effect waves-light red">
                                <i class="material-icons">delete</i>
                            </button>
                        </div>
                    </div>

                    {/* Medien */}
                    <div className="row" >
                        <div className="medien col s7">
                            <div className="row">
                                <label className="col s3 paddingForTop">
                                    <CheckBox titel="Printmedien"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, printmedien: e.target.checked })}
                                        checked={leseProgramme.printmedien}
                                    />
                                </label>

                                <label className="col s3 paddingForTop center" >
                                    <CheckBox titel="Internet"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, internet: e.target.checked })}
                                        checked={leseProgramme.internet}
                                    />
                                </label>

                                <label className="col s3 paddingForTop right">
                                    <CheckBox titel="AZB"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, azb: e.target.checked })}
                                        checked={leseProgramme.azb}
                                    />
                                </label>
                            </div>

                            <div className="row">
                                <label className="col s3">
                                    <CheckBox titel="NA"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, na: e.target.checked })}
                                        checked={leseProgramme.na}
                                    />
                                </label>

                                <label className="col s3 center">
                                    <CheckBox titel="Radio"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, radio: e.target.checked })}
                                        checked={leseProgramme.radio}
                                    />
                                </label>

                                <label className="col s3 right">
                                    <CheckBox titel="TV"
                                        onChange={(e) =>
                                            setLeseprogramme({ ...leseProgramme, tv: e.target.checked })}
                                        checked={leseProgramme.tv}
                                    />
                                </label>
                            </div>
                        </div>


                        {/* Enthaltene Mengenzuordnungen */}
                        <div className="col s5" >
                            <label className="col s5 submissions"> Enthaltene Mengenzuordnungen </label>
                            <div className="input-field col s7">
                                <input
                                    disabled
                                    value={leseProgramme.enthalteneMengenzuordnungen}
                                    type="text"
                                    onChange={(e) => setLeseprogramme({ ...leseProgramme, enthalteneMengenzuordnungen: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    <div className="row" ></div>


                    {/* submit & Verweerfen Button  */}
                    <div className="row">
                        <button
                            onClick={handleSubmit}
                            className="btn waves-effect blue-grey darken-1" >Submit
                            <i className="material-icons right">send</i>
                        </button>

                        <button
                            className="btn waves-effect red" >Verwerfen
                            <i className="material-icons right">delete</i>
                        </button>
                    </div>
                </form>
            </div>

        </div>

    );
}

export default EingabeMaske;
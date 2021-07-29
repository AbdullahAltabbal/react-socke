import { useState } from "react";
import EingabeMaske from "./EingabeMaske";
import LeseProgrammTabelle from "./LeseProgrammTabelle";

const Home = () => {
    const [pending, setPending] = useState(<div class="preloader-wrapper big active pendingCenter">
        <div class="spinner-layer spinner-blue-only ">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>)

    return (
        <div className="row">
            <div className="col s1" ></div>
            <div className="col s4">
                <h4> Leseprogramme  </h4>
                <LeseProgrammTabelle
                    pending={pending}
                />
            </div>
            <div className="col s1" ></div>
            <div className="col s5">
                <EingabeMaske
                    pending={pending}
                />
            </div>
            <div className="col s1" ></div>
        </div>

    );
}

export default Home;

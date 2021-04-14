import React, {
    useReducer,
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";
import { useTranslation } from "react-i18next";

const ContextPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">
                            {t("pages.context")} {t("pages.page")}
                        </h1>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <FirstProvider>
                                <FirstBlock />
                                <SecondBlock />
                                <ThirdBlock />
                                <FourthBlock />
                            </FirstProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FirstBlock = () => {
    const { firstState } = useContext(FirstContext);

    console.log("render in 1s block");

    return (
        <div className="col-6" style={{ marginBottom: "40px" }}>
            <h3>First Block</h3>
            <p>{firstState}</p>
        </div>
    );
};

const SecondBlock = () => {
    const { secondState } = useContext(SecondContext);

    console.log("render in 2nd block");
    return (
        <div className="col-6" style={{ marginBottom: "40px" }}>
            <h3>Second Block</h3>
            <p>{secondState}</p>
        </div>
    );
};

const ThirdBlock = () => {
    const { setFirstState } = useContext(FirstContext);

    return (
        <button
            className="btn btn-primary"
            onClick={() => setFirstState("Updated Data")}
        >
            Update state
        </button>
    );
};

const FourthBlock = () => {
    const { setSecondState } = useContext(SecondContext);

    return (
        <button
            className="btn btn-primary"
            onClick={() => setSecondState("Updated Data")}
        >
            Update state
        </button>
    );
};

const FirstContext = createContext();
const SecondContext = createContext();

const FirstProvider = ({ children }) => {
    const [firstState, setFirstState] = useState("Data 1");

    const [secondState, setSecondState] = useState("Data 2");

    return (
        <FirstContext.Provider value={{ firstState, setFirstState }}>
            <SecondContext.Provider value={{ secondState, setSecondState }}>
                {children}
            </SecondContext.Provider>
        </FirstContext.Provider>
    );
};

// const FirstProvider = ({ children }) => {
//     const [firstState, setFirstState] = useState("Data 1");

//     return (
//         <FirstContext.Provider value={{ firstState, setFirstState }}>
//             {" "}
//             {children}
//         </FirstContext.Provider>
//     );
// };

// const SecondProvider = ({ children }) => {
//     const [secondState, setSecondState] = useState("Data 2");

//     return (
//         <SecondContext.Provider value={{ secondState, setSecondState }}>
//             {children}
//         </SecondContext.Provider>
//     );
// };

export default ContextPage;

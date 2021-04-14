import React, {
    memo,
    useState,
    useEffect,
    useCallback,
    useMemo,
    useReducer,
} from "react";
import { useTranslation } from "react-i18next";

const ReactHooksPage = () => {
    const { t } = useTranslation();
    return (
        <section className="teams-page">
            <h1 className="text-center">{t("pages.hooks")}</h1>
            <div className="team-list ">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center">
                                React Hook useEffect
                            </h3>
                            <HooksSwitcher />
                        </div>
                    </div>
                </div>
                <UseCallbackComponent />
            </div>
        </section>
    );
};

const UseCallbackComponent = () => {
    const [usersState, usersDispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_USERS":
                    return { ...state, users: action.payload };
                case "SET_AUTHOR":
                    return {
                        ...state,
                        authorName: action.payload,
                    };
                default:
                    return state;
            }
        },
        {
            users: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Vova" },
            ],
        }
    );

    const [adminState, adminDispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_USERS":
                    return { ...state, users: action.payload };
                case "SET_AUTHOR":
                    return {
                        name: action.payload,
                    };
                default:
                    return state;
            }
        },
        {
            name: "Alex",
        }
    );

    // const printName = (id) => {
    //     console.log(state.users.find((user) => id === user.id).name);
    // };

    const changeAuthorName = (name) => {
        adminDispatch({ type: "SET_AUTHOR", payload: name });
    };

    console.log("Render main component");

    return (
        <div className="use-callback-wrapper">
            <div className="container">
                <Author
                    authorName={adminState.name}
                    changeAuthorName={changeAuthorName}
                />
                <Users users={usersState} />
            </div>
        </div>
    );
};

const Users = ({ users }) => {
    const printName = useCallback((id) => {
        console.log(users.users.find((user) => id === user.id).name);
    }, []);

    // const printName = (id) => {
    //     console.log(users.users.find((user) => id === user.id).name);
    // };

    return (
        <div className="row">
            {users.users.map((user) => (
                <User key={user.id} user={user} printName={printName} />
            ))}
        </div>
    );
};

// const Users = memo(({ users }) => {
//     const printName = useCallback((id) => {
//         console.log(users.users.find((user) => id === user.id).name);
//     }, []);

//     return (
//         <div className="row">
//             {users.users.map((user) => (
//                 <User key={user.id} user={user} printName={printName} />
//             ))}
//         </div>
//     );
// });

const User = memo(({ user, printName }) => {
    console.log("Render", user.name);
    return (
        <div className="user col-12 mb-3">
            <p>{user.name}</p>
            <button
                className="btn btn-success"
                onClick={() => printName(user.id)}
            >
                Log name!
            </button>
        </div>
    );
});

const Author = ({ authorName, changeAuthorName }) => {
    console.log("Render author", authorName);
    const [name, setName] = useState(authorName);
    return (
        <div className="col-12 mb-5">
            <p>Author {authorName}</p>
            <p>Change name</p>
            <input
                className="mr-3"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button
                className="btn btn-success"
                onClick={() => changeAuthorName(name)}
            >
                Save
            </button>
        </div>
    );
};

const HooksSwitcher = () => {
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="mb-3">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setCount((c) => c + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCount((c) => c - 1)}
                >
                    -
                </button>
                <button
                    type="button"
                    className={visible ? "btn btn-warning" : "btn btn-success"}
                    onClick={() => setVisible((v) => !v)}
                >
                    {visible ? "Hide" : "Show"}
                </button>
            </div>
            {visible && (
                <div>
                    <p>{count}</p>
                    <PlanetInfo id={count} />
                </div>
            )}
        </div>
    );
};

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        });
};

const useRequest = (request) => {
    const initialState = useMemo(
        () => ({
            data: null,
            loading: true,
            error: false,
        }),
        []
    );
    const [dataState, setdataState] = useState(initialState);

    useEffect(() => {
        let cancelled = false;
        setdataState(initialState);
        request()
            .then((data) => {
                if (!cancelled) {
                    setdataState({
                        data: data,
                        loading: false,
                        error: false,
                    });
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setdataState({
                        data: null,
                        loading: false,
                        error: error,
                    });
                }
            });
        return () => (cancelled = true);
    }, [request]);

    return dataState;
};

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request);
};

const PlanetInfo = ({ id }) => {
    const { data, error, loading } = usePlanetInfo(id);

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    } else if (loading) {
        return (
            <div>
                <div>{id} - Loading..</div>
            </div>
        );
    } else {
        return (
            <div>
                {id} - {data.name}
            </div>
        );
    }
};

export default ReactHooksPage;

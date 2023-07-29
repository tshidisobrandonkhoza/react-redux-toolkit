import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice"


function UserView() {
    const user = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div>
            <h1>My Users </h1>


            {user.loading && <div>Loading data</div>}
            {!user.loading && user.error ? <div>Error : {user.error.message}</div> : null}
            {!user.loading && user.users.length ?
                <ul>
                    {user.users.map(u =>
                        <li key={u.id}>{u.name}</li>
                    )}
                </ul>
                : <div>error</div>}

        </div>
    )
}

export default UserView

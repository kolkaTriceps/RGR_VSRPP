import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import CharactersTable from '../components/CharactersTable/CharactersTable';
import PostCharacter from '../components/PostCharacter/PostCharacter';
import { AuthContext } from '../context';

function Characters() {
    const { setIsAuth } = useContext(AuthContext);

    return (
        <div className="container">
            <div className="curUser">
                <div>Hello, <b>{localStorage.getItem("username")}!</b></div>
                <button onClick={() => {
                    localStorage.removeItem("auth");
                    setIsAuth(false);
                    toast.success("You are logged out!");
                }}>Log out</button>
            </div>
            <PostCharacter />
            <div className="dark-bg">
                <h3>Characters</h3>
                <hr />
                <CharactersTable />
            </div>
        </div>
    );
}

export default Characters;
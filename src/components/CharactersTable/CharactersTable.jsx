import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { removeCharacterAction } from '../../redux/actions/CharactersActions';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
            </tr>
        </thead>
    );
}

const TableBody = ({ characterData }) => {
    const dispatch = useDispatch();

    const characters = characterData.map((character) => {
        return (
            <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.firstName}</td>
                <td>{character.lastName}</td>
                <td>{character.email}</td>
                <td><button onClick={() => {
                    dispatch(removeCharacterAction(character.id));
                    toast.success("Character removed!")
                }}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{characters}</tbody>;
}

const CharactersTable = () => {
    const characterData = useSelector(state => state.characters.characters);

    return (
        <div>
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        </div>
    );
}

export default CharactersTable;
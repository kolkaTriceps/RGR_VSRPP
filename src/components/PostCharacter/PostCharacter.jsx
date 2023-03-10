import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCharacterAction } from "../../redux/actions/CharactersActions";
import "./PostCharacter.css"

const PostCharacter = () => {

    const [character, setCharacter] = useState({id: 12, firstName: "", lastName: "", email: ""});

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCharacter({...character, [name]: value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        dispatch(addCharacterAction(character));
        setCharacter({id: character.id + 1, firstName: "", lastName: "", email: ""});
        toast.success("Character added!")
    }

    return (
        <form onSubmit={onFormSubmit}>
                <div className="addForm">
                    <button type="submit">
                        Add User
                    </button>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        name="firstName" 
                        id="firstName"
                        required
                        value={character.firstName} 
                        onChange={handleChange} 
                    />

                    <input 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName" 
                        id="lastName"
                        required
                        value={character.lastName} 
                        onChange={handleChange} 
                    />

                    <input 
                        type="email" 
                        placeholder="Email"
                        name="email" 
                        id="email"
                        required
                        value={character.email} 
                        onChange={handleChange} 
                    />
                </div>
            </form>
    );
}

export default PostCharacter;
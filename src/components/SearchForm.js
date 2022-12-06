import { useState } from "react";

const SearchForm = (props) => {
    const [term, setTerm] = useState("");

    const searchHandler = (event) => {
        event.preventDefault();
        if (term === "") {
            props.setSearchParams({});
            window.alert("Please enter value in search box");
            return;
        }
        props.setSearchParams({ term, entity: "musicTrack", limit: 10 });
    }

    return (
        <div className="my-4 text-primary">
            <form className="form-inline" onSubmit={searchHandler}>
                <label className="ml-2 text-dark">Search:</label><span>&nbsp;&nbsp;</span>
                <input type="text" className="form-control" placeholder="Search Term" onChange={(e) => setTerm(e.target.value)} value={term}></input>
                <input type="submit" value="Search" className="btn btn-outline-primary mx-1"></input>

            </form>
        </div>
    )
}

export default SearchForm;
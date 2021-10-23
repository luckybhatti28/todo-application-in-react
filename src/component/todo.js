import React, { useState } from "react";
import todoIMG from "../image/download (1).png";

const Todo = () => {
    const [inputData, SetInputData] = useState('');
    const [items, SetItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else {
            SetItems([...items, inputData]);
            SetInputData('')
        }
    }

    // delete item //

    const delteItem = (id) => {
        const UpdateItems = items.filter((elem, ind) => {
            return ind != id;
        });

        SetItems(UpdateItems);
    }

    // removeall items //

    const removeAll = () => {
        SetItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img className="Todoimg" src={todoIMG} alt="todo-img" />
                        <figcaption className="Figtile">Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItem">
                        <input className="iputodo" type="text" placeholder="✍ Add Item ..."
                            value={inputData}
                            onChange={(e) => SetInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add item" onClick={addItem} ></i>
                    </div>
                    <div className="ShowItem">

                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt" title="Delete item" onClick={() => delteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* CLEAR BUTTON  */}
                    <div className="showwitem">
                        <button className="btn effect04" onClick={removeAll}>Check List</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;
import React from "react";

const Display = (props) => {
    return (
        <div className="bg-light text-end p-3 rounded fs-2">
            {props.value || "0"}
        </div>
    );
};
export default Display;

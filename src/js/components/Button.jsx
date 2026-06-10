import React from "react";

const Button = (props) => {
    return (
        <div className="col-3">
            <button className="btn btn-secondary w-100 fs-4"
             onClick={() => props.onClick(props.value)} >
                {props.value}
            </button>
        </div>
    );
};
export default Button;

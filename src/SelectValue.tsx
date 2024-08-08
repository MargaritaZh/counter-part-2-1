import React, {ChangeEvent} from "react";

type SelectValuePropsType = {
    value:number
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    type:string
    inputSettingsClassName:string
};
export const SelectValue = ({value,onChange,inputSettingsClassName,type}: SelectValuePropsType) => {

    return (
        <input
            className={`input-settings ${inputSettingsClassName}`}
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};
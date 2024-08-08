type ButtonPropsType = {
    title: string
    callback: () => void
    disabled:boolean
};

export const Button = ({title, callback,disabled}: ButtonPropsType) => {

    const onclickHandler = () => {
        callback()
    }
    return (
        <button className={`button${disabled ? ' disabledBth' : ''}`}
                onClick={onclickHandler}
                disabled={disabled}
        >{title}</button>
    );
};


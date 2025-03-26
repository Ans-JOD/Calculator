


const ButtonRaw = ({value, onClick}) =>{

    const handleClick = (val) =>{
        onClick(val);
    } 

    return(
        <div>
            {value.map((val, index)=>{
                return(
                    <button key={index} onClick={() => handleClick(val)}>
                    {val}
                    </button>
                );
            })}
        </div>
    );
}

export default ButtonRaw;
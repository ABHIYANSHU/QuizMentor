
function Quiz(props) {

    return(
        <div>
            <h2>{ props.data[0].question }</h2>
            {
                props.data[0].option.map((opt) => {
                    return <input key={0+opt} type="button" value={opt} />
                })
            } 
        </div>
    )    
}

export default Quiz;
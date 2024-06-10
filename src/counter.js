export default function Counter(props){

    function handleClickInc(){

        props.clickBtn(props.count + 1)
    }

    function handleClickDec(){

        props.clickBtn(props.count - 1)
    }

    function handleReset(){
        props.clickBtn(0)
    }

    return(
        <>
            <button onClick={handleClickInc}>Increment</button>
            <button onClick={handleClickDec}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <h1>props count is : {props.count}</h1>
        </>
    )
}


function OpenIntroduce({props,onClick}) {

    return (
        <div>
            <h1>{props.h1}</h1>
            <button onClick={onClick}>{props.nameButton}</button>
            <p>{props.p}</p>
        </div>
    )
}
export default OpenIntroduce;
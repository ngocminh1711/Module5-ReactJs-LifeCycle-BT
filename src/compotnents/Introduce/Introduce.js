
function Introduce({prop,onClick}) {

    return(
        <div>
            <h1>{prop.h1}</h1>
            <button onClick={onClick}>{prop.nameButton}</button>
            <p>{prop.p}</p>
        </div>

    )


}
export default Introduce;
function Main(props){

    console.log(props.r, props.g, props.b);

    let {r, g, b} = props;

    let css = {
        backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
    };


    return (
        <>
            <main style={css}>Detta är main</main>
            <p>R= {r}</p>
            <p>G= {g}</p>
            <p>B= {b}</p>
        </>
    );
}


export default Main;




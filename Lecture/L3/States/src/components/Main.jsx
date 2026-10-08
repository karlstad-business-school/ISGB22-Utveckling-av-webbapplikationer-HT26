
function Main(props){

    // Vanlig lokal variabel
    let number = 0;

    const increase = () => {
    number = number + 1;
    console.log(number);
 };


   
    return (
        <>
            <main>
                <h1>Detta är main</h1>
                <p>Nummer: {number}</p>
                <button onClick={increase}>Öka</button>
            </main>
        </>
    )
}


export default Main;





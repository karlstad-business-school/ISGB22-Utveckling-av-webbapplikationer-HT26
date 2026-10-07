function UIRoot(props) {

    console.log(props, props.data)
    return (
        //Här returnerar ni den kod ni vill ska finnas som en del
        //i er komponent.
        <div>Data från App: {props.data}</div>
    )
}

export default UIRoot
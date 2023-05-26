function Offer(props){

    return(
        <article>
            <h2 class="headertekst">
            {props.name}
            </h2>
            <img src="./logo192.png" alt="food">
                
            </img>
            <h3>
            {props.price}
            </h3>
            <p>
            {props.info}
            </p>
        </article>
    )
}
export default Offer;
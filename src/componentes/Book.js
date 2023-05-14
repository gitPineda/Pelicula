
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Book=()=>{


    return(

        <Card style={{ width: "18rem" }}>
        <Card.Img class="card-img-top" alt="..." height="500px" variant="top" src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9b7a0362f6c8cb0065cdfa16e2a166c12e91af83c68a04c1bba1b16af6439e06._RI_V_TTW_.jpg" />
        <Card.Body>
        <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">La vida es bella cuenta la historia de Guido Orefice, un joven italiano de origen judío que conoce en su trabajo a Dora, de quien se enamora perdidamente. Sin embargo, Dora es la prometida de un funcionario fascista local llamado Rodolfo.</p>
    
  </div>
          
        </Card.Body>
      </Card>

    )



}

export default Book;
import './styles.css';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import axios from 'axios';

type Props = {
    saleId: number;
}

function handleclick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Sucesso =>",response)
        })
}


export function NotificationButton( {saleId}: Props ) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleclick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}
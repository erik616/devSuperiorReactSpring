import './styles.css';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import axios from 'axios';
import { toast } from 'react-toastify';

type Props = {
    saleId: number;
}

function handleclick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso");
        })
}


export function NotificationButton( {saleId}: Props ) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleclick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}
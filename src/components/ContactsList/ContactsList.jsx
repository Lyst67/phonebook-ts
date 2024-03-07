import { useSelector, useDispatch } from "react-redux";
import css from './ContactsList.module.css';
import { selectIsLoading, selectError, selectFilteredContacts } from "redux/contacts/selectors";
import { useEffect} from "react";
import { deleteContact, fetchContacts } from "redux/contacts/operations";
import { useNavigate } from "react-router-dom";

export const ContactsList = () => {
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
            dispatch(fetchContacts())
    }, [dispatch]);
   
    const deleteElement = (event) => {
        dispatch(deleteContact(event.target.id))
    }; 
    
    const filter = useSelector(selectFilteredContacts);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <ul className={css.cont_list}>
                {filter.sort((a, b) => {
                    const nameA = a.name.toLowerCase(); 
                    const nameB = b.name.toLowerCase(); 
                   if (nameA < nameB) { return -1;}
                   if (nameA > nameB) { return 1; }
                   return 0; }).map(({id, name, number}) => {
                    return (
                    <li className={css.cont_item} key={id}>
                            <p>{name}: {number}</p>
                            <div className={css.cont_btns}>
                                <button type="button" className={css.cont_btn} id={id}
                                onClick={() => navigate('update', { state: {id: {id}, name: {name}, number: {number} } })}>Edit</button>
                            <button className={css.cont_btn} type="button" id={id}
                                onClick={deleteElement}>Delete</button>   
                            </div>
                            
                    </li>
                    )
                })}
            </ul>
        </div> 
    )
}
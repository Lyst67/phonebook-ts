import { useDispatch } from 'react-redux'
import css from './Filter.module.css'
import { filterContacts } from 'redux/contacts/filterSlice'
import {ImSearch} from "react-icons/im";



export const Filter = () => {
const dispatch = useDispatch()
const handleFilter = (event) => {
    const value = event.target.value
   dispatch(filterContacts(value))
    }
   
    return (
        <div className={css.filter_form}>
            <label className={css.filter_label}><ImSearch/>
                <input className={css.filter_input} type="text" name="filter" placeholder='Start typing a name...'
                     onChange={handleFilter}></input>
            </label>
        </div>
    )
}  
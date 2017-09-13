import React,{Component} from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';


class ContactList extends Component{
    constructor(props){
        super(props);
        this.state = {
        contacts: contactData,

        };

    }

    render(){
        const list = this.state.contacts.map(function(item, index){
            return <ContactCard key={index} contact={item}/>

        });

        return(
            <div className='col-8'>{list}</div>
        )
    }
}

export default ContactList;
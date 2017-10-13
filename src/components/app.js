import React from 'react';
import Table from './table';

export default() =>{
    const students = [
        {
        student:'Soy' ,
        course: 'Design' ,
        grade:97
        },
        {
        student:'Cody' ,
        course: 'Social Science' ,
        grade: 98
        },
        {
        student: 'Chris' ,
        course: 'Math' ,
        grade: 99
        }];

    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}


export default (props) => {
    return (
        <div className = "container">
            <h1 className = "text-center">Stopwatch</h1>
            <Stopwatch />
        </div>
    );
}

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            contacts: contactData
        }
        this.addContact= this.addContact.bind(this);
    }
    addContact(contact){
        console.log('App: addComponent:',contact);

        const newContacts = this.state.contacts.slice();
        newContacts.push(contact);
        this.setState({
        contacts: newContacts
        })
    }

    render() {
        return(
        <div className = 'container'>
            <h1 className = 'text-center my-3'>Address Book</h1>
            <div className ='row'>
                <div className = 'col-4'>
                    <ContactForm add={this.addContact}/>
                </div>
                    <ContactList contacts ={this.state.contacts}/>
            </div>
        </div>
        )
    }
}

export default App;
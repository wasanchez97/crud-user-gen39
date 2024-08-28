  import { useEffect, useState  } from 'react'
  import './App.css'
  import useCrud from './hooks/UseCrud'
  import FormUser from './components/FormUser'
  import UserCard from './components/UserCard'


  function App() {
    const [users, getUsers, createUser, deleteUser, updateUser] = useCrud('/users/');
    const [userSelected,setUserSelected] = useState()
    const[formIsOpen,setFormIsOpen] = useState(false)

    useEffect(() => {
      getUsers()
    }, [])

    const handleOpenForm = () => {setFormIsOpen(true)}
    

    return (
      <div className='app'>
        <header className='user_header'>
          <h1>Users Crud</h1>
          <button onClick={handleOpenForm} className='new_user_btn'>New User +</button>
        </header>
        <FormUser
          createUser={createUser} 
          userSelected={userSelected} 
          setUserSelected={setUserSelected}  
          updateUser={updateUser} 
          setFormIsOpen={setFormIsOpen} 
          formIsOpen={formIsOpen} 
         />
        <section className='user_container flex-container'>
          {users?.map((user) =>  (
              <UserCard 
                key={user.id} 
                user={user} 
                deleteUser={deleteUser} 
                setUserSelected={setUserSelected} 
                setFormIsOpen={setFormIsOpen} 
               />
            ))
          }
        </section>
      
        
        
      </div>
    )
  }

  export default App

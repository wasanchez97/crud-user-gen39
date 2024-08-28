import Swal from 'sweetalert2';
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserSelected,setFormIsOpen}) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            deleteUser(user.id);
              Swal.fire({
                title: "User Deleted!",
                text: `User ${user.first_name} ${user.last_name} has been delete`,
                icon: "success"
              });
            }
          });
       
    }
    const handleEdit = () => {
        setUserSelected(user);
        setFormIsOpen(true)
    }
  return (
    <article className="user">
        <img className="user_img" 
        src={user.image_url} 
        alt={`${user.first_name} ${user.last_name}`} />
        <h3 className="user_name">
            {user.first_name} {user.last_name}
        </h3> 
        <hr className="user_hr" />
        <ul className="user_list">
            <li className="user_item">
                <span className="user_label">Email: </span>
                <span className="user_value">{user.email}</span>
            </li>
            <li className="user_item">
                <span className="user_label">Birthday: </span>
                <span className="user_value">{user.birthday}</span>
            </li>
        </ul>
        <footer className="user_footer flex-container">
            <button onClick={handleDelete} className="user_btn user_delete">Delete</button>
            <button onClick={handleEdit} className="user_btn user_edit">Edit</button>
        </footer>
    </article>
  )
}

export default UserCard
import { useEffect } from "react";
import {useForm } from "react-hook-form";
import './styles/FormUser.css'
import Swal from "sweetalert2";

const FormUser = ({
    createUser, 
    userSelected, 
    setUserSelected, 
    updateUser,
    setFormIsOpen,
    formIsOpen }) => {

    const { 
        handleSubmit,
         register,
          reset,
        formState: {errors}
    } = useForm({mode:'onChange'})

    useEffect(() => {
    reset(userSelected)

    }, [userSelected])


    const submit = (data) =>{
        if (userSelected){
            updateUser(userSelected.id, data);
            setUserSelected();
            Swal.fire({
                title: "User Update!",
                text: `User ${userSelected.first_name} ${userSelected.last_name} has been updated!`,
                icon: "success"
              });
        } else {
            createUser(data);
            Swal.fire({
                title: "User Created!",
                text: `User ${data.first_name} ${data.last_name} has been created!`,
                icon: "success"
              });
        }
        createUser(data);
        reset(
            {
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday: '',
            image_url:'',
        });
        setFormIsOpen(false)
    }
    const handleExit= () => { 
        setFormIsOpen(false);
        reset(
            {
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday: '',
            image_url:'',
        });
        setUserSelected();
    };

    return( 
        <div 
        className= {`form_container  flex-container ${
            formIsOpen || 'form_close'
            }`}>
        <form onSubmit={handleSubmit(submit)} className="form flex-container"> 
            <span onClick={handleExit} className="form_exit flex-container"> <i class='bx bx-x-circle'></i> </span>
            <h2 className="form_tittle"> 
            {userSelected ? 'Update User Form':'Create User Form'}
             </h2>
             <div className="form_list">  
            <label className="form_field grid-container">
                <span className="form_label">Email</span>
                <input className={`form_input ${errors.email ? 'form_input--error' : ''}`} 
                    type="email" {...register('email', {maxLength:{
                    value: 50,
                    message: 'The maximum number of charcters is 50' }, 
                    required: 'This field is required'
                     })} 
                />
                     <p className="form_error"> {errors.email?.message} </p>
            </label>
            <label className="form_field grid-container">
                <span className="form_label">Password</span>
                <input className={`form_input ${errors.password ? 'form_input--error' : ''}`} 
                    type="password" {...register('password', {maxLength:{
                    value: 20,
                    message: 'The maximum number of charcters is 20' }, 
                    required: 'This field is required'
                     })} 
                />
                     <p className="form_error"> {errors.password?.message} </p>
            </label>
            <label className="form_field grid-container">
                <span className="form_label">First Name</span>
                <input className={`form_input ${errors.first_name ? 'form_input--error' : ''}`} 
                    type="text"  {...register('first_name',{maxLength:{
                    value: 15,
                    message: 'The maximum number of charcters is 15' }, 
                    required: 'This field is required'
                     })} 
                />
                     <p className="form_error"> {errors.first_name?.message} </p>
            </label>
            <label className="form_field grid-container">
            <span className="form_label">Last Name</span>
                <input  className={`form_input ${errors.last_name ? 'form_input--error' : ''}`} 
                    type="text"  {...register('last_name',{maxLength:{
                     value: 15,
                        message: 'The maximum number of charcters is 15' }, 
                        required: 'This field is required'
                         })} 
                />
                     <p className="form_error"> {errors.last_name?.message} </p>
            </label>
            <label className="form_field grid-container">
                <span className="form_label">Birthday</span>
                <input className={`form_input ${errors.birthday ? 'form_input--error' : ''}`} 
                type="date"  {...register('birthday', {maxLength:{
                    value: 10,
                    message: 'The maximum number of charcters is 10' }, 
                    required: 'This field is required'
                     })} 
                />
                     <p className="form_error"> {errors.birthday?.message} </p>
            </label>
            <label className="form_field grid-container">
                <span className="form_label">Image Url</span>
                <input className={`form_input ${errors.image_url ? 'form_input--error' : ''}`} 
                type="text"  {...register('image_url', {
                    required: 'This field is required'
                     })} 
                />
                     <p className="form_error"> {errors.image_url?.message} </p>
            </label> 
            </div>
            <button className="form_btn"> {userSelected ? 'Update':'Create'} </button>
        </form>
    </div>)

};

export default FormUser
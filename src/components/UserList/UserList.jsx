import "./UserList.css"

const UserList = ({ users, onEditUser, onDeleteUser }) => {
    if(!users.length) return (
        <div className="loader">
            <p>Without users</p>
        </div>
    )

    return (
    <ul className="user_list">
        {users.map(user =>
            <li key={user.id} className="user_card">
                    <h2 className="user_card__full_name">{`${user.first_name} ${user.last_name}`}</h2>
                    <div className="user_card__data">
                        <h3>EMAIL</h3>
                        <p>{user.email}</p>
                        <h3>BIRTHDAY</h3>
                        <p>{` ${user.birthday}`}</p>
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    <div className="user_card__buttons">
                        <button className="delete_btn" onClick={() => onDeleteUser(user.id)}>
                            <span className="material-symbols-outlined"><i className="fa-solid fa-trash-can"></i></span>
                        </button>
                        <button className="edit_btn" onClick={() => onEditUser(user)}><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
            </li>    
        )}
    </ul>
  )
}

export default UserList
import React from 'react'

interface IUser {
    name: string,
    email: string,
}

interface Props {
    user: IUser,
}

const User: React.FC<Props> = ({user}):JSX.Element => {
    return(
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User;
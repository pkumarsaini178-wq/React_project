import React from 'react'

const Navbar = (props) => {
   
   // console.log("Passed user props:", user_name, Midel_name, serName)
    return (
        <table border={1} className='navbar_table'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.user_name}</td>
                </tr>
                <tr>
                    <th>Middle Name</th>
                    <td>{props.Midel_name}</td>
                </tr>
                <tr>
                    <th>Surname</th>
                    <td>{props.serName}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Navbar
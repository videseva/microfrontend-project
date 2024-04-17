import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const UserList = () => {
    const [users, setUsers] = useState([]);

    // Array opcional de usuarios para mostrar mientras se llena el listado real
    const initialUsers = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '098-765-4321'
        },
        {
            name: 'Michael Johnson',
            email: 'michael@example.com',
            phone: '555-123-4567'
        },
        {
            name: 'Emily Davis',
            email: 'emily@example.com',
            phone: '777-888-9999'
        },
        {
            name: 'Robert Wilson',
            email: 'robert@example.com',
            phone: '444-555-6666'
        },
        {
            name: 'Olivia Martinez',
            email: 'olivia@example.com',
            phone: '222-333-4444'
        },
        {
            name: 'William Garcia',
            email: 'william@example.com',
            phone: '999-888-7777'
        },
        {
            name: 'Sophia Brown',
            email: 'sophia@example.com',
            phone: '111-222-3333'
        },
        {
            name: 'Ethan Lee',
            email: 'ethan@example.com',
            phone: '666-777-8888'
        },
        {
            name: 'Isabella Taylor',
            email: 'isabella@example.com',
            phone: '333-444-5555'
        }
    ];

    return (
        <div className="table-detail">
            <h2 className="mt-4 mb-3 title">Listado de usuarios <span class="badge text-bg-primary">Nuevos</span></h2>
            <table className="table table-striped mx-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    ) : (
                        initialUsers.map((user, index) => (
                            <tr key={index}>
                               <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
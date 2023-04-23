import React, { useState, useEffect } from 'react';

function App() {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [users5, setUsers5] = useState([]);

  useEffect(() => {
    fetch('/api/users1')
      .then(res => res.json())
      .then(data => {
        console.log({data}); // check the format of the fetched data
        setUsers1(data);
      })
      .catch(error => {
        console.error(error); // log any errors that occur during the fetch
      });

    fetch('/api/users2')
      .then(res => res.json())
      .then(data => {
        console.log(data); // check the format of the fetched data
        setUsers2(data);
      })
      .catch(error => {
        console.error(error); // log any errors that occur during the fetch
      });

    fetch('/api/users3')
      .then(res => res.json())
      .then(data => {
        console.log(data); // check the format of the fetched data
        setUsers3(data);
      })
      .catch(error => {
        console.error(error); // log any errors that occur during the fetch
      });
      
    fetch('/api/users4')
      .then(res => res.json())
      .then(data => {
        console.log(data); // check the format of the fetched data
        setUsers4(data);
      })
      .catch(error => {
        console.error(error); // log any errors that occur during the fetch
      });

    fetch('/api/users5')
      .then(res => res.json())
      .then(data => {
        console.log(data); // check the format of the fetched data
        setUsers5(data);
      })
      .catch(error => {
        console.error(error); // log any errors that occur during the fetch
      });
  }, []);

  return (
    <div>
      <h1>Users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Car Brand</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {users1.map(user => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.car}</td>
              <td>{user.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Male Users which have phone price greater than 10,000</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
      {users2.map(user => (
        <tr key={user._id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.gender}</td>
          <td>{user.phone_price}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</h1>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Quote</th>
      </tr>
    </thead>
    <tbody>
      {users3.map(user => (
        <tr key={user._id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.quote}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</h1>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Car Brand</th>
      </tr>
    </thead>
    <tbody>
      {users4.map(user => (
        <tr key={user._id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.car}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h1>Top 10 cities which have the highest number of users and their average income</h1>
  <table>
    <thead>
      <tr>
        <th>City</th>
        <th>Number of Users</th>
        <th>Average Income</th>
      </tr>
    </thead>
    <tbody>
      {users5.map(city =>(
      <tr key={city._id}>
        <td>{city.city}</td>
        <td>{city.numberOfUsers}</td>
        <td>{city.averageIncome}</td>
      </tr>
      ))}
</tbody>
</table>
</div>
);
}

export default App;

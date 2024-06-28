import { useEffect, useState } from "react";
import { Person } from "../../types";
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ActionButton } from "./action-button";

export function PersonsList() {
  const [ users, setUsers ] = useState<Person[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  // Load users from API
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    }

    loadUsers();
  }, []);

  return <>
    {
      isLoading ?
        <CircularProgress /> :
        (<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>
                    {user.username}
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.company.name}
                  </TableCell>
                  <TableCell>
                    {user.address.street}, {user.address.city}
                  </TableCell>
                  <TableCell>
                    {user.phone}
                  </TableCell>
                  <TableCell>
                    {user.website}
                  </TableCell>
                  <TableCell>
                    <ActionButton text='Edit' />
                  </TableCell>
                  <TableCell>
                    <ActionButton isDelete={true} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
    }
  </>
}

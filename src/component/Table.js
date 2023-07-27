import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Table.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchtodos } from '../Redux/slice/todo';


export default function BasicTable() {
    const dispatch = useDispatch()
    const state = useSelector((state)=> state);
    
    console.log(state)
    function createData(
        name,
        calories,
        fat,
        carbs,
        protein,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    
        useEffect(() => {
             dispatch(fetchtodos())
        }, [dispatch])

    if(state.todo.isLoading){
        return <h1>Loading....</h1>
    }


    return (
        <div className={styles.table} >
            <TableContainer component={Paper} className={styles.tableCon} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: " 1px solid rgba(224, 224, 224, 1)" }}>Id</TableCell>
                            <TableCell  sx={{ border: " 1px solid rgba(224, 224, 224, 1)" }}>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.todo.data?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  sx={{ border: " 1px solid rgba(224, 224, 224, 1)" }}>{row.id}</TableCell>
                                <TableCell  sx={{ border: " 1px solid rgba(224, 224, 224, 1)" }} component="th" scope="row">
                                    {row.title}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
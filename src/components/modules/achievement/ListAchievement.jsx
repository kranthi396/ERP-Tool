import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { deleteAchivement, getFacultyAchivement, getStudentAchivement } from '../../../services/AchievementService';


function ListAchievement(props) {

    const type = localStorage.getItem("type")
    const usn = localStorage.getItem("usn")
    const fId = localStorage.getItem("fid")
    const [achievements, setAchievements] = useState([]);



    useEffect(() => {

        if (type === "student") {
            getStudentAchivement(usn).then((res) => {
                setAchievements(res.data);
            });
        }
        else {
            getFacultyAchivement(fId).then((res) => {
                setAchievements(res.data);
            });
        }
    }, [])

    const deleteOperation = (id) => {
        deleteAchivement(id).then(res => {
            setAchievements(achievements.filter(achievements => achievements.id !== id));
        });
    }

    const addAchievement = () => {
        props.history.push('/add-achievement');
    }

    return (
        <div>
            <div class="container" >
                <h2 className="text-center">Achievement List</h2>
                <div>
                    <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={addAchievement} >Add Achievement</button>
                </div>
                <Table striped bordered hover size="sm" responsive>
                    <thead class="text-center">
                        <tr>
                            <th>Category</th>
                            <th>Certificate Name</th>
                            <th>Description</th>
                            <th>Certificate Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {achievements.length !== 0 &&
                            achievements.map(
                                achievements =>
                                    <tr key={achievements.studentUsn}>
                                        <td>{achievements.category}</td>
                                        <td>{achievements.certificateName}</td>
                                        <td>{achievements.descrption}</td>
                                        <td><a target="blank" href={achievements.link}>{achievements.link}</a></td>
                                        <td>
                                            <button className="btn btn-danger " style={{marginLeft:"5px"}} onClick={() => deleteOperation(achievements.id)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ListAchievement

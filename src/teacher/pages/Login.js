
//1. import area
import React from 'react'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import {useState ,useEffect} from 'react'




//2. definetion area
export default function Login() {

    //2.1 hooks veriable area
    //const [variablename, setvariablename] = useState(initialstate)
    const [teacher, setteacher] = useState([
                                                {
                                                  id:'1',
                                                  name:'raj',
                                                  createdAt:'2234423'
                                                }
                                            ])



    useEffect(()=>{
        fetch('http://localhost:1337/api/teachers')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data.data)
            //array.map(function(currentValue, index, arr), thisValue)
          let teacherditel =  data.data.map((currentValue,index,arr)=>{
                return  {
                            id:currentValue.id,
                            name:currentValue.attributes.name,
                            createdAt:currentValue.attributes.createdAt
                        }
            });
            setteacher(teacherditel);
            console.log(teacherditel)
        })
        .catch(()=>{});
    });



    //2.2 function veriable area




    //2.3 return statments
  return (
    <>
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">name</label>
                            <input type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp" />
                                    
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </form>
                </Col>
                <Col xs={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>createdAt</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teacher.map((currentValue,index,arr)=>{
                                    return  <tr>
                                                <td>{currentValue.id}</td>
                                                <td>{currentValue.name}</td>
                                                <td>{currentValue.createdAt}</td>
                                            
                                            </tr>
                                    
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
  )
}


/*
    {
    "id": 2,
    "attributes": {
        "name": "Amit sir",
        "createdAt": "2023-03-02T15:42:13.634Z",
        "updatedAt": "2023-03-02T15:42:15.802Z",
        "publishedAt": "2023-03-02T15:42:15.776Z"
    }
}
*/
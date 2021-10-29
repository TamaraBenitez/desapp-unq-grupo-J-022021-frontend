import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import { API_Activities } from "../services/APIActivities";

const Activities = () => {

    const [activities,setActivities] = useState([]);
    const {type} = useParams();
    const {cripto} = useParams();

    useEffect(()=>{

        getActivities();
         // eslint-disable-next-line

    },[]);

    const getActivities = () => {

        API_Activities.getActivitiesByCriptoandType(type,cripto).then((response)=>{

            setActivities(response.data)
        });
    }

    return (

        <Container disableGutters maxWidth={false} className="conteiner-color">
        <NavBar/>
        </Container>

    )

}

export default Activities;
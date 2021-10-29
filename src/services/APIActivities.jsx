import {httpClient} from './httpClient';

class APIActivities {


    httpClient;

    constructor(){ 
        this.httpClient = httpClient 
       
    }

    getActivitiesByCriptoandType(type,cripto){

        const ret = this.httpClient.get(`/api/activity/${type}/cripto/${cripto}`)
        return ret;

    }
}

const API_Activities= new APIActivities();

export {API_Activities}
let eventdetails = [
    {
        eventname:"Marriage",
        date:"29/01/2024",
        location:"Salem",
        description:"Grandly"
    },
    {
        eventname:"Party",
        date:"01/10/2024",
        location:"Coimbatore",
        description:"Grandly"
    },
    {
        eventname:"Getogether",
        date:"01/01/2024",
        location:"Velur",
        description:"Grandly"
    },
    {
        eventname:"Business Party",
        date:"14/05/2024",
        location:"Tiruchengode",
        description:"Grandly"
    }
];

export let Listall = () =>{
    return eventdetails;
}

export let Read = (myindex) =>{
    return eventdetails[myindex];
}

export let Create = (obj) => {
    eventdetails.push(obj);
}

export let Erase = (hi) =>{
    eventdetails = eventdetails.filter(
        (data, pos)=>{
            return pos !== hi;
        }
    )
    return eventdetails;
}

export let Fetchexact = (name) =>{
     eventdetails = eventdetails.filter(
        (data,index) =>{
            return data.eventname === name;
        }
    )
    return eventdetails;
}

export const Reedit = (data,posi) =>{
    eventdetails[posi] = data;
}
export default function fetcher(...ars){
    return fetch(...ars).then(res => res.json());
};
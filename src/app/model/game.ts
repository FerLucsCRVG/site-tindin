import { Photo } from "./photo"

export interface Game{
    _id:number,
    title:string,
    description:string,
    photos:Photo[],
    videos:{
        type:string,
        url:string
    }[],
    mediumPrice:number,
    studio:string,
    company:string,
    releaseYear:number,
    genres:string[],
    platforms:string[],
    tags:string[],
    createdAt:string,
    rating:number,
    totalVotes:number,
    updatedAt:string
}
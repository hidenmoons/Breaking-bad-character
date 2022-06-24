export interface Personaje{
char_id:number,
name:string,
nickname:string,
img:string,
status:string,
ocuppation: Ocuppation[];
}

export interface Ocuppation{
    name:string;
}
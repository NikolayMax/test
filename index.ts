interface IItem{
    str: string;
    num: number;
    bool?: boolean;
}
const obj: IItem = {
    str: 'sdf',
    num: 123,
    bool: false
}

let num: number = 123;

function getUser(props: IItem): boolean | IItem {
    if(props.bool){
        return false
    }
    return obj
}
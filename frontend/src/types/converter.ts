import { Book } from "./Book";
import { ContentType } from "./ContentType";
import { User } from "./User";

export namespace DataConverter{
    export function convertBook(book:any,i:number):Book{
        return {
            name:book[1],
            author:book[8],
            category:book[3],
            year:book[4],
            synopsis:book[5],
            ISBN:book[0],
            id:String(i),
            availableAmount:book[6],
            isAvailable:book[6]>0,
            type:ContentType.BOOK
        }
    }
    export function convertUser(user:any):User{
        return {
            id:user[0],
            name:user[1],
            type:ContentType.USER,
            email:user[3],
            bookRented:0
        }
    }
}
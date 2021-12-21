import { ToDoListDarkTheme } from "./ToDoListDarkTheme";
import { ToDoListLightTheme } from "./ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "./ToDoListPrimaryTheme";

export const arrTheme = [
    {
        id:1,
        name:'Dark theme',
        theme:ToDoListDarkTheme
    }
    ,
    {
        id:2,
        name:'Light theme',
        theme:ToDoListLightTheme
    }
    ,
    {
        id:3,
        name:'Primary theme',
        theme:ToDoListPrimaryTheme
    }
]

// Có thể để dạng mảng ko ko thêm thuộc tính obj vẫn được nhưng sẽ khó scale quản lí sau này
import type { ReactNode } from "react"; 
export interface HomeProps{
    isSidebarCollapsed : Boolean
}

export interface statsProps{
    icon : ReactNode;
    title : String;
    data : ReactNode;
    description1 : String;
    description2 : String;
    className : String
}

export interface ProgressProp {
    value : Number;
    max : Number;
    className : String
}
export interface ITask {
    id: number;
    title:string;
    status?: number;
    description?: string;
    isSelected: boolean;
    type: number;
}

export interface ITaskList {
    tasks: ITask[];
    title: string;
}
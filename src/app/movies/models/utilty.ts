interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview = Pick<Todo, "title" | "completed">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    
  };
  type TodoOmitPreview = Omit<Todo, "description">;
  const todoOmit: TodoOmitPreview = {
    title: "Clean room",
    completed: false,
 
    createdAt: 1615544252770,
  };
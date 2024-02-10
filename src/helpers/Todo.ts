export class Todo {
  id: number;
  status: string;

  constructor(public title: string) {
    this.id = this.setId();
    this.status = "todo";
  }

  private setId() {
    const initialId = 1;
    if (typeof window === "undefined") return initialId;

    if (!localStorage.getItem("todo-id")) {
      localStorage.setItem("todo-id", `${initialId}`);

      return initialId;
    }

    const id = Number(localStorage.getItem("todo-id")) + 1;
    localStorage.setItem("todo-id", `${id}`);

    return id;
  }
}

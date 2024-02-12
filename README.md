# [ADM] Todo App

## Technologies used

* vite
* zustand
* sass
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/drag-drop-context.md)
* [react-canvas-confetti](https://www.npmjs.com/package/react-canvas-confetti)

## Usage

Clone repo

```bash
  git clone git@github.com:ADamian17/adm-todo-app.git
```

Navigate to the repo

```bash
  cd adm-todo-app
```

Install dependencies

```bash
  yarn install
```

Start Project

```bash
  yarn dev
```

## User Stories

* [x] When user land on the page with three vertical list ``Todo``, ``Doing``, ``Done``
* [x] User can create a todo by using the form
  * [x] Todo can only be added if the title is not empty
  * [x] If title is empty add text error
  * [x] By default todo is added to the ``Todo`` list
  * [x] Todo is added by pressing key ``enter`` or clicking on ``Add todo`` btn
* [x] User can delete a todo by clicking in the ``trash bin`` icon
* [x] User can update a todo title by clicking ``pencil`` icon
  * [x] If title is empty add text error
  * [x] using ``escape`` key user can cancel editing mode or clicking in the pencil icon again
* [x] User can drag and drop between the lists
  * [x] Update todo status when user drop todo in the list
  * [x] If user drop list in done show animation

## Observations

I used the react-beautiful-dnd library to handle the drag an drop. The main logic to handle the dnd, is located in the zustand store:

* ``src/state/useColumnsStore``,
* ``useColumnsStore.updateColumnOnDrag`` method
* ``src/helpers/setUpdatedColumns`` function.

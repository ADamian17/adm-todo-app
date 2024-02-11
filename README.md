# Todo App

## Instructions: Make a frontend-only todo list app

* It has three vertical lists. Todo, Doing, and Done
* Items are created via a form (they can be stored in browser state, no need to have
a backend)
* Items are draggable from one list to another
* Items can be reordered within a list
* When you drag an item into the Done list, confetti explodes on the screen! Or
something else interesting. You can use a package for this.
* Overall the app has a usable design with a unique color palette. You are free to
make whatever UI and UX decisions you want to make it usable. Don't worry, we aren't looking for a groundbreaking innovative design. Just lay things out decently and add some colors.

## Technologies used

* vite
* zustand
* sass
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/drag-drop-context.md)
* [react-canvas-confetti](https://www.npmjs.com/package/react-canvas-confetti)

## Usage

### Add Todo 

https://github.com/ADamian17/adm-todo-app/assets/52466233/4dfbf72b-dbfb-4e16-9195-5c6712d49d6c

* User can add todo by clicking add todo or pressing enter

* Clone repo
* Install dependencies ``yarn or yarn install``

## User Stories

* [x] When user land on the page with three vertical list ``Todo``, ``Doing``, ``Done``
* [x] User can create a todo by using the form
  * [x] Todo can only be added if the title is not empty
  * [x] If title is empty add text error
  * [x] By default todo is added to the ``Todo`` list
* [x] User can delete a todo by clicking in the bin icon
* [x] User can update a todo title by clicking pencil icon
  * [x] If title is empty add text error
* [x] User can drag and drop between the lists
  * [x] Update todo status when user drop todo in the list
  * [x] If user drop list in done show animation
  * [ ] animation should only run once

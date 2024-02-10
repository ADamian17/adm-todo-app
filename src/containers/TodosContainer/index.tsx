import { DragDropContext } from 'react-beautiful-dnd';

import { useTodoListsStore } from '../../state/useColumnStore';
import Column from '../../components/Column';

import styles from "./TodosContainer.module.scss";

const TodosContainer = () => {
  const { getColumns, updateColumnOnDrag } = useTodoListsStore()
  const columns = getColumns();

  const columnsList = columns && columns.map(column => (
    <Column key={column} headline={column} />
  ))

  return (
    <DragDropContext onDragEnd={updateColumnOnDrag}>
      <section className={styles.wrapper}>
        {columnsList}
      </section>
    </DragDropContext>
  )
};

export default TodosContainer;

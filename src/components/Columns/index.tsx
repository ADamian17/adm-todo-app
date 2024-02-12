import { DragDropContext } from 'react-beautiful-dnd';

import { useTodoListsStore } from '../../state/useColumnStore';
import Column from '../Column';

import styles from "./Columns.module.scss";

/* LINK https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/drag-drop-context.md */

const Columns = () => {
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

export default Columns;

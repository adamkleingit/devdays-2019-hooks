import React, {useState} from "react";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

export const TaskTitle = ({onAddTask}) => {
  const [value, setValue] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    onAddTask(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={value}
        onChange={e => setValue(e.target.value)}
        name="title"
        placeholder="Task Title"
        />
      <FloatingActionButton mini={true} style={{ marginLeft: 10 }}>
        <ContentAdd />
      </FloatingActionButton>
    </form>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
}

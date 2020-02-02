import { toDoApi } from 'shared/services';


const Actions = {
    setDialogs: items => ({
      type: 'TODOS:SET_ITEMS',
      payload: items,
    }),
    // update: ({ toDoId, isCompleted }) => ({
    // //   type: 'TODOS:IS_Completed_STATUS',
    // //   payload: {
    // //     toDoId,
    // //     isCompleted,
    // //   },
    // // toDoApi
    // // .update()
    // }),
    fetchDialogs: () => dispatch => {
        toDoApi.getAll().then(({ data }) => {
        dispatch(Actions.setDialogs(data));
      });
    },
  };
  
  export default Actions;
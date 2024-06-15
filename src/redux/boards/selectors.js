export const selectLoading = (state) => state.boards.loading;

export const selectError = (state) => state.boards.error;

export const selectBoards = (state) => state.boards.items;

export const selectCurrentBoardId = (state) => state.boards.currentBoardId;

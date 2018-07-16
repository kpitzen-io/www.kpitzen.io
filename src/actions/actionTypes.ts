export const LOAD_BLOG_POSTS_SUCCESS = 'LOAD_BLOG_POSTS_SUCCESS';

export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';

export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';

export const LOAD_BLOG_POST_SUCCESS = 'LOAD_BLOG_POST_SUCCESS';

export const LOAD_BLOG_POST_FILES_FOUND = 'LOAD_BLOG_POST_FILES_FOUND';



export interface IAction<T extends string> {
  type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
  payload: P;
}

type FunctionType = (...args: any[]) => any;
interface IActionCreatorsMapObject { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends IActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export function createAction<T extends string>(type: T): IAction<T>
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  if (payload) {
    return {
      type,
      payload,
    };
  }

  return {
    type,
  };
}
